var configuration = {
  agentUrl: 'URL_AGENTS',
  causeUrl: 'URL_CAUSES',
  rateUrl: 'URL_RATES',
  transactionUrl: 'URL_TRANSACTION'
};


var rates = {
  fitrah: 0,
  fidyah: 0,
  nisab: 0.0
};


function updateSummary() {
  var $summary = $('#summary');

  var fitrah = parseInt($('#fitrah').val());
  var $fitrahRow = $('#fitrahRow');
  var fitrahTotal = rates.fitrah * fitrah;

  if (fitrah) {
    $fitrahRow
      .find('.quantity').text(fitrah).end()
      .find('.total').text('$' + fitrahTotal).end()
      .show()
    ;
  }
  else {
    $fitrahRow.hide();
  }

  var fidyah = parseInt($('#fidyah').val());
  var $fidyahRow = $('#fidyahRow');
  var fidyahTotal = rates.fidyah * fidyah;

  if (fidyah) {
    $fidyahRow
      .find('.quantity').text(fidyah).end()
      .find('.total').text('$' + fidyahTotal).end()
      .show()
    ;
  }
  else {
    $fidyahRow.hide();
  }

  var maal = parseInt($('#maal').val() || '0');
  var $maalRow = $('#maalRow');

  if (maal) {
    $maalRow
      .find('.total').text('$' + maal).end()
      .show()
    ;
  } else {
    $maalRow.hide();
  }

  var infak = parseInt($('#infak').val() || '0');
  var $infakRow = $('#infakRow');

  if (infak) {
    $infakRow
      .find('.total').text('$' + infak).end()
      .show()
    ;
  } else {
    $infakRow.hide();
  }

  var total = fitrahTotal + fidyahTotal + maal + infak;
  $summary.find('h3.total').text('$' + total);

  if (fitrah || fidyah || maal || infak) {
    $summary.show();
  } else {
    $summary.hide();
  }
}


/**
 * Clears the form.
 */
function clearForm() {
  $('#onBehalfOf').val('');
  $('#cause').val('0');
  $('#fitrah').val('0');
  $('#fidyah').val('0');
  $('#maal').val('');
  $('#infak').val('');
  $('#name').val('');
  $('#mobile').val('');
  $('#email').val('');
  $('#summary').hide();
  $('#paymentMethod').val('Cash');
  $('.has-error').removeClass('has-error');
}


/**
 * Validates the form.
 */
function validateForm() {
  var errorMessages = [];

  var $agent = $('#agent');

  if ($agent.val()) {
    $agent.parent().removeClass('has-error');
  } else {
    $agent.parent().addClass('has-error');
    errorMessages.push('Nama agen harap dipilih');
  }

  var $fitrah = $('#fitrah');
  var fitrah = parseInt($fitrah.val());
  var $fidyah = $('#fidyah');
  var fidyah = parseInt($fidyah.val());
  var $maal = $('#maal');
  var $infak = $('#infak');

  if (fitrah
    || fidyah
    || $maal.val()
    || $infak.val()) {
    $fitrah.parent().removeClass('has-error');
    $fidyah.parent().removeClass('has-error');
    $maal.parent().removeClass('has-error');
    $infak.parent().removeClass('has-error');
  } else {
    $fitrah.parent().addClass('has-error');
    $fidyah.parent().addClass('has-error');
    $maal.parent().addClass('has-error');
    $infak.parent().addClass('has-error');
    errorMessages.push('Paling sedikit satu jenis pembayaran harap diisi');
  }

  var $name = $('#name');

  if ($name.val()) {
    $name.parent().removeClass('has-error');
  } else {
    $name.parent().addClass('has-error');
    errorMessages.push('Nama lengkap harap diisi');
  }

  var $mobile = $('#mobile');

  if ($mobile.val()) {
    $mobile.parent().removeClass('has-error');
  } else if ($('#paymentMethod').val() === 'Transfer') {
    $mobile.parent().addClass('has-error');
    errorMessages.push('Nomor telefon harap diisi');
  } else {
    $mobile.parent().removeClass('has-error');
  }

  var $email = $('#email');

  if ($email.val()) {
    var regEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var email = $email.val();

    if (regEx.test($email.val().toLowerCase())) {
      $email.parent().removeClass('has-error');
    } else {
      $email.parent().addClass('has-error');
      errorMessages.push('Format email salah');
    }
  } else {
    $email.parent().removeClass('has-error');
  }

  if (errorMessages.length === 0) {
    return true;
  } else {
    var errorMessage = errorMessages.join(', ') + '.';
    $('#validationModal .error-message').text(errorMessage);
    return false;
  }
}


/**
 * Initialises the agents.
 *
 */
function initialiseAgents() {
  const $agentSelector = $('#agent');
  $agentSelector.prop('disabled', 'disabled');

  return $.ajax({
    url: configuration.agentUrl,
    jsonp: 'prefix',
    dataType: 'jsonp',
    success: function (response) {
      if (response.resultCode == 0) {
        $.each(response.agents, function (i, agent) {
          $('<option></option>')
            .attr('value', agent.id)
            .text(agent.name)
            .appendTo($agentSelector);
        });
      }

      $agentSelector.prop('disabled', false);
    }
  });
}


/**
 * Initialises the causes.
 *
 */
function initialiseCauses() {
  const $causeSelector = $('#cause');
  $causeSelector.prop('disabled', 'disabled');

  return $.ajax({
    url: configuration.causeUrl,
    jsonp: 'prefix',
    dataType: 'jsonp',
    success: function (response) {
      if (response.resultCode === 0) {
        $.each(response.causes, function (i, cause) {
          $('<option></option>')
            .attr('value', cause.id)
            .text(cause.name)
            .appendTo($causeSelector);
        });
      }

      $causeSelector.prop('disabled', false);
    }
  });
}


/**
 * Initialises the rates.
 *
 */
function initialiseRates() {
  return $.ajax({
    url: configuration.rateUrl,
    jsonp: 'prefix',
    dataType: 'jsonp',
    success: function (response) {
      if (response.resultCode === 0) {
        rates = response.rates;
        $('span.rate-fitrah').text(rates.fitrah);
        $('span.rate-fidyah').text(rates.fidyah);

        const nisabAsString = rates.nisab.toLocaleString('en', {
          style: 'currency',
          currency: 'AUD'
        });
        $('span.rate-nisab').text(nisabAsString);
      }
    }
  });
}


/**
 * Handles document ready event.
 *
 */
$(function () {
  $('#fitrah').change(function () {
    updateSummary();
  });

  $('#fidyah').change(function () {
    updateSummary();
  });

  $('#maal').change(function () {
    updateSummary();
  });

  $('#infak').change(function () {
    updateSummary();
  });

  $('#paymentMethod').change(function () {
    const $span = $('#mobile')
      .prev('h4')
      .find('span');

    if ($('#paymentMethod').val() !== 'Transfer') {
      $span.hide();
    } else {
      $span.show();
    }
  });

  $('#summary').hide();

  $('#resetButton').click(function () {
    clearForm();
  });

  const processButton = $('#processButton');
  processButton.click(function () {
    var validated = validateForm();

    if (validated) {
      $('#progressModal').modal('show');

      $.ajax({
        url: configuration.transactionUrl,
        jsonp: 'prefix',
        dataType: 'jsonp',
        data: {
          onBehalfOf: $('#onBehalfOf').val(),
          cause: parseInt($('#cause').val()),
          name: $('#name').val(),
          phone: $('#mobile').val(),
          email: $('#email').val(),
          fitrah: parseInt($('#fitrah').val()),
          fidyah: parseInt($('#fidyah').val()),
          maal: parseInt($('#maal').val() || '0'),
          infak: parseInt($('#infak').val() || '0'),
          method: $('#paymentMethod').val(),
          agent: $('#agent').val()
        },
        success: function (response) {
          $('#progressModal').modal('hide');
          var $modal = $('#successModal');

          $modal.find('.modal-body .name').text(response.name);
          $('#summary table').clone().replaceAll($modal.find('.modal-body table'));

          var paymentMethod = $('#paymentMethod').val();
          var $info = $modal.find('.transfer-info');

          if (paymentMethod === 'Transfer') {
            $info
              .find('.reference').text(response.reference).end()
              .find('.total').text('$' + response.total)
              .show()
            ;
          } else {
            $info.hide();
          }

          $modal.modal();
          clearForm();
        },
        error: function (jqXHR, textStatus, errorThrown) {
          $('#progressModal').modal('hide');
          $('#validationModal .error-message').text('Mohon dicoba kembali');
          $('#validationModal').modal();
        }
      });
    } else {
      $('#validationModal').modal();
    }
  });

  $('input.only-digits').keyup(function () {
    this.value = this.value.replace(/[^0-9]/g, '');
  });

  processButton.addClass('disabled');
  $.when(initialiseAgents(), initialiseCauses(), initialiseRates())
    .always(function () {
      $('#mobile')
        .prev('h4')
        .find('span')
        .hide();
      $('#paymentMethod').val('Cash');
      processButton.removeClass('disabled');
    });
});
