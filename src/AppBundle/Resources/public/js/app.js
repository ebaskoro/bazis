var configuration = {
  homepageUrl: 'URL_HOMEPAGE',
  causesUrl: 'URL_CAUSES',
  ratesUrl: 'URL_RATES',
  feeUrl: 'URL_FEE',
  transactionUrl: 'URL_TRANSACTION',
  apiKey: 'KEY_PAYMENT'
}


var app = angular.module('app', ['ngRoute', 'ui.bootstrap']);


app.config(['$interpolateProvider', '$routeProvider', function ($interpolateProvider, $routeProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');

  $routeProvider
    .when('/', {
      templateUrl: 'index.html'
    })
    .when('/step1', {
      templateUrl: 'payments.html',
      controller: 'Step1Ctrl'
    })
    .when('/step2', {
      templateUrl: 'summary.html',
      controller: 'Step2Ctrl'
    })
    .when('/step3', {
      templateUrl: 'payer.html',
      controller: 'Step3Ctrl'
    })
    .when('/step4', {
      templateUrl: 'confirmation.html',
      controller: 'Step4Ctrl'
    })
    .otherwise({
      redirectTo: '/'
    })
  ;
}]);


app.controller('ApplicationCtrl', ['$scope', '$location', '$sce', '$http', function ($scope, $location, $sce, $http) {
  $scope.start = function () {
    $scope.wizard = {
      maximumStepCount: 4
    };

    $scope.payment = {
      onBehalfOf: '',
      cause: 0,
      causeName: '',
      name: '',
      mobile: '',
      email: '',
      fitrah: 0,
      fidyah: 0,
      maal: '',
      infak: '',
      fee: 0,
      method: 'Transfer'
    };

    $scope.rates = {
      fitrah: 0,
      fidyah: 0,
      nisab: 0.0
    };

    $location.path('/step1');
  };

  var trustedUrl = $sce.trustAsResourceUrl(configuration.homepageUrl);
  $http
    .jsonp(trustedUrl, {
      jsonpCallbackParam: 'prefix'
    })
    .then(function (response) {
      let html = '<p>Assalaamu \'alaikum</p>';

      if (response.data.resultCode === 0) {
        html = response.data.html;
      }

      const trustedHtml = $sce.trustAsHtml(html);
      $scope.homepage = trustedHtml;
    });
}]);


app.controller('Step1Ctrl', ['$scope', '$location', '$modal', '$sce', '$http', function ($scope, $location, $modal, $sce, $http) {
  if (!$scope.payment) {
    $location.path('/');
  }

  $scope.stepNumber = 1;

  $scope.previous = function () {
    $location.path('/');
  };

  $scope.next = function () {
    if ($scope.payment.fitrah ||
        $scope.payment.fidyah ||
        $scope.payment.maal ||
        $scope.payment.infak) {
      $location.path('/step2');
    } else {
      $modal.open({
        templateUrl: 'messageDialog.html',
        controller: 'MessageDialogCtrl',
        resolve: {
          message: function () {
            return 'Please specify at least one payment.';
          }
        }
      });
    }
  };

  $scope.handleCauseChanged = function () {
    var selectedCause = $scope.causes.find(function (cause) {
      return cause.id === $scope.payment.cause;
    });

    if (selectedCause) {
      $scope.payment.causeName = selectedCause.name;
    } else {
      $scope.payment.causeName = '';
    }
  };

  $http
    .jsonp($sce.trustAsResourceUrl(configuration.causesUrl), {
      jsonpCallbackParam: 'prefix'
    })
    .then(function (response) {
      $scope.causes = response.data.causes;
    });

  $http
    .jsonp($sce.trustAsResourceUrl(configuration.ratesUrl), {
      jsonpCallbackParam: 'prefix'
    })
    .then(function (response) {
      $scope.rates.fitrah = response.data.rates.fitrah;
      $scope.rates.fidyah = response.data.rates.fidyah;
      $scope.rates.nisab = response.data.rates.nisab;
    });
}]);


app.controller('Step2Ctrl', ['$scope', '$location', '$sce', '$http', function ($scope, $location, $sce, $http) {
  if (!$scope.payment) {
    $location.path('/');
  }

  $scope.stepNumber = 2;
  $scope.maal = parseFloat($scope.payment.maal || '0');
  $scope.infak = parseFloat($scope.payment.infak || '0');

  var gross = ($scope.rates.fitrah * $scope.payment.fitrah)
    + ($scope.rates.fidyah * $scope.payment.fidyah)
    + $scope.maal
    + $scope.infak;

  var calculateTransactionFee = function () {
    $scope.calculatingFee = false;

    if ($scope.payment.method === 'Card') {
      $scope.calculatingFee = true;

      var trustedUrl = $sce.trustAsResourceUrl(configuration.feeUrl);
      $http
        .jsonp(trustedUrl, {
          jsonpCallbackParam: 'prefix',
          params: {
            gross: gross
          }
        })
        .then(function (response) {
          $scope.payment.fee = parseFloat(response.data || '0');
        })
        .catch(function () {
          $scope.payment.fee = 0;
        })
        .finally(function () {
          $scope.calculatingFee = false;
          $scope.payment.total = gross + $scope.payment.fee;
        })
    } else {
      $scope.payment.fee = 0;
      $scope.payment.total = gross + $scope.payment.fee;
    }
  };
  calculateTransactionFee();

  $scope.handlePaymentMethodChanged = function () {
    calculateTransactionFee();
  };

  $scope.previous = function () {
    $location.path('/step1');
  };

  $scope.next = function () {
    $location.path('/step3');
  };
}]);


app.controller('Step3Ctrl', ['$scope', '$location', '$modal', '$http', '$sce', 'stripeElements', function ($scope, $location, $modal, $http, $sce, stripeElements) {
  if (!$scope.payment) {
    $location.path('/');
  }

  $scope.stepNumber = 3;
  $scope.nameError = false;
  $scope.mobileError = false;
  $scope.emailError = false;
  $scope.cardErrors = '';

  var element = stripeElements
    .elements()
    .create('card', {});
  element.on('change', function (event) {
    if (event.error) {
      $scope.cardErrors = event.error ? event.error.message : '';
    } else {
      $scope.cardErrors = '';
    }
  });
  $scope.element = element;

  $scope.previous = function () {
    $location.path('/step2');
  };

  $scope.next = function () {
    var errorMessages = [];

    function showErrorMessages() {
      $modal.open({
        templateUrl: 'messageDialog.html',
        controller: 'MessageDialogCtrl',
        resolve: {
          message: function () {
            return errorMessages.join(', ') + '.';
          }
        }
      });
    }

    function submit(progressDialog, token) {
      var trustedUrl = $sce.trustAsResourceUrl(configuration.transactionUrl);
      $http
        .jsonp(trustedUrl, {
          jsonpCallbackParam: 'prefix',
          params: {
            onBehalfOf: $scope.payment.onBehalfOf,
            cause: $scope.payment.cause,
            name: $scope.payment.name,
            phone: $scope.payment.mobile,
            email: $scope.payment.email,
            fitrah: $scope.payment.fitrah,
            fidyah: $scope.payment.fidyah,
            maal: $scope.payment.maal,
            infak: $scope.payment.infak,
            fee: $scope.payment.fee,
            method: $scope.payment.method,
            agent: '',
            source: token
          }
        })
        .then(function (response) {
          progressDialog.close();
          var payment = response.data;
          $scope.payment.name = payment.name;
          $scope.payment.total = payment.total;
          $scope.payment.reference = payment.reference;
          $location.path('/step4');
        })
        .catch(function () {
          progressDialog.close();
          $modal.open({
            templateUrl: 'messageDialog.html',
            controller: 'MessageDialogCtrl',
            resolve: {
              message: function () {
                return 'Unable to submit data.';
              }
            }
          });
        });
    }

    if ($scope.payment.name) {
      $scope.nameError = false;
    } else {
      errorMessages.push('Full name must be specified');
      $scope.nameError = true;
    }

    if ($scope.payment.mobile) {
      $scope.mobileError = false;
    } else {
      errorMessages.push('Contact number must be specified');
      $scope.mobileError = true;
    }

    if ($scope.payment.email) {
      var regEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if (regEx.test($scope.payment.email.toLowerCase())) {
        $scope.emailError = false;
      } else {
        errorMessages.push('Email address is invalid');
        $scope.emailError = true;
      }
    } else {
      $scope.emailError = false;
    }

    if ($scope.payment.method === 'Card') {
      $scope.cardErrors && errorMessages.push($scope.cardErrors);

      if (!errorMessages.length) {
        var progressDialog = $modal.open({
          templateUrl: 'progressDialog.html'
        });
        stripeElements
          .createToken(element)
          .then(function (result) {
            if (result.error) {
              progressDialog.close();
              errorMessages.push(result.error.message);
              showErrorMessages();
            } else {
              var token = result.token.id;
              submit(progressDialog, token);
            }
          });
      }
    } else if (!errorMessages.length) {
      var progressDialog = $modal.open({
        templateUrl: 'progressDialog.html'
      });
      submit(progressDialog);
    }

    errorMessages.length && showErrorMessages();
  };
}]);


app.controller('Step4Ctrl', ['$scope', '$location', function ($scope, $location) {
  if (!$scope.payment) {
    $location.path('/');
  }

  $scope.stepNumber = 4;

  $scope.done = function () {
    $location.path('/');
  };
}]);


app.controller('MessageDialogCtrl', ['$scope', '$modalInstance', 'message', function ($scope, $modalInstance, message) {
  $scope.title = 'Sorry!';
  $scope.message = message;
  $scope.ok = function () {
    $modalInstance.close();
  };
}]);


app.directive('convertToNumber', function () {
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function (value) {
        return parseInt(value, 10);
      });
      ngModel.$formatters.push(function (value) {
        return '' + value;
      });
    }
  };
});


app.directive('onlyDigits', function () {
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function (scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function (value) {
        if (value) {
          var digits = value.replace(/[^0-9]/g, '');

          if (digits !== value) {
            ngModel.$setViewValue(digits);
            ngModel.$render();
          }

          return digits;
        }

        return '';
      });
    }
  };
});


app.directive('onlyDecimals', function () {
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function (scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function (value) {
        if (value) {
          var digits = value.replace(/[^0-9.]/g, '');

          if (digits.split('.').length > 2) {
            digits = digits.substring(0, digits.length - 1);
          }

          if (digits !== value) {
            ngModel.$setViewValue(digits);
            ngModel.$render();
          }

          return parseFloat(digits);
        }

        return '';
      });
    }
  };
});


app.provider('stripeElements', function () {
  this.apiKey = null;

  this.setApiKey = function (apiKey) {
    this.apiKey = apiKey;
  };

  this.$get = function () {
    return Stripe(this.apiKey);
  };
});


app.directive('stripeElementDecorator', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var vm = scope.$ctrl;

      scope.$on('$destroy', function () {
        vm.instance.destroy();
      });

      vm.instance.mount(element[0]);
    }
  }
});


function getStripeElementComponent () {
    return {
      template: '<div stripe-element-decorator></div>',
      controller: function () {},
      bindings: {
        instance: '<'
      }
    }
}
app.component('stripeElement', getStripeElementComponent());


app.config(['stripeElementsProvider', function (stripeElementsProvider) {
  stripeElementsProvider.setApiKey(configuration.apiKey);
}]);
