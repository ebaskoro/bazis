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


app.controller('ApplicationCtrl', ['$scope', '$location', function ($scope, $location) {
  $scope.start = function () {
    $scope.wizard = {
      maximumStepCount: 4
    };

    $scope.payment = {
      name: '',
      mobile: '',
      email: '',
      fitrah: 0,
      fidyah: 0,
      maal: '',
      infak: ''
    };

    $location.path('/step1');
  };
}]);


app.controller('Step1Ctrl', ['$scope', '$location', '$modal', function ($scope, $location, $modal) {
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
    }
    else {
      $modal.open({
        templateUrl: 'messageDialog.html',
        controller: 'MessageDialogCtrl',
        resolve: {
          message: function () {
            return 'Mohon untuk memasukan paling sedikit satu jenis pembayaran.';
          }
        }
      });
    }
  };
}]);


app.controller('Step2Ctrl', ['$scope', '$location', function ($scope, $location) {
  if (!$scope.payment) {
    $location.path('/');
  }

  $scope.stepNumber = 2;
  $scope.maal = parseInt($scope.payment.maal || '0');
  $scope.infak = parseInt($scope.payment.infak || '0');
  $scope.payment.total = (12 * $scope.payment.fitrah) + (12 * $scope.payment.fidyah) + $scope.maal + $scope.infak;

  $scope.previous = function () {
    $location.path('/step1');
  };

  $scope.next = function () {
    $location.path('/step3');
  };
}]);


app.controller('Step3Ctrl', ['$scope', '$location', '$modal', '$http', function ($scope, $location, $modal, $http) {
  if (!$scope.payment) {
    $location.path('/');
  }

  $scope.stepNumber = 3;
  $scope.nameError = false;
  $scope.mobileError = false;

  $scope.previous = function () {
    $location.path('/step2');
  };

  $scope.next = function () {
    var errorMessages = [];

    if ($scope.payment.name) {
      $scope.nameError = false;
    }
    else {
      errorMessages.push('Nama lengkap harap diisi');
      $scope.nameError = true;
    }

    if ($scope.payment.mobile) {
      $scope.mobileError = false;
    }
    else {
      errorMessages.push('Nomor telefon harap diisi');
      $scope.mobileError = true;
    }

    if (errorMessages.length === 0) {
      var progressDialog = $modal.open({
        templateUrl: 'progressDialog.html'
      });

      var url = 'https://script.google.com/macros/s/AKfycbwWsv6rb1axS4yvUJzMtHiRZDjS1BUx6M1Iy3i6-Rqv8P2hr7Z6/exec?prefix=JSON_CALLBACK';
      $http
        .jsonp(url, {
          params: {
            name: $scope.payment.name,
            phone: $scope.payment.mobile,
            email: $scope.payment.email,
            fitrah: $scope.payment.fitrah,
            fidyah: $scope.payment.fidyah,
            maal: $scope.payment.maal,
            infak: $scope.payment.infak,
            method: 'Transfer',
            agent: ''
          }
        })
        .then(function (data) {
          progressDialog.close();
          $scope.payment.name = data.name;
          $scope.payment.total = data.total;
          $scope.payment.reference = data.reference;
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
    else {
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
  $scope.title = 'Maaf!';
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
