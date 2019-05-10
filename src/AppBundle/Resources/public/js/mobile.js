var agents = null;
var homepage = null;
var causes = null;
var rates = null;


function validateProduct() {
  let errorMessages = [];

  const fitrah = parseInt($('#fitrah').val());
  const fidyah = parseInt($('#fidyah').val());
  const maal = parseInt($('#maal').val() || '0');
  const infak = parseInt($('#infak').val() || '0');
  const total = fitrah + fidyah + maal + infak;

  !total && errorMessages.push('Paling sedikit satu jenis pembayaran harap diisi');

  if (errorMessages.length === 0) {
    return true;
  } else {
    const errorMessage = errorMessages.join(', ') + '.';
    $('#validationModal .error-message').text(errorMessage);
    return false;
  }
}


function validateDetail() {
  let errorMessages = [];

  !$('#name').val() && errorMessages.push('Nama lengkap harap diisi');
  !$('#mobile').val() && errorMessages.push('Nomor telefon harap diisi');

  if (errorMessages.length === 0) {
    return true;
  } else {
    const errorMessage = errorMessages.join(', ') + '.';
    $('#validationModal .error-message').text(errorMessage);
    return false;
  }
}


/**
 * Initialises the agents.
 *
 */
function initialiseAgents() {
  return $.ajax({
    url: 'https://script.google.com/macros/s/AKfycbwGqZfpJnst5mnXbs-rnrOPqXzkhBLwlwvbat7Gi9uDQz-WF6AD/exec',
    // url: 'https://script.google.com/macros/s/AKfycbxWogTexo2NtnKSaK4ILPC4LN5TCqEsaSWivtgtY5OdK-sSZKuC/exec',
    jsonp: 'prefix',
    dataType: 'jsonp',
    success: function (response) {
      if (response.resultCode == 0) {
        agents = response.agents;
      } else {
        agents = [];
      }
    },
    error: function () {
      agents = [];
    }
  });
}


function initialiseHomepage() {
  return $.ajax({
    url: 'https://script.google.com/macros/s/AKfycbxi5FR0Yz58M-YMvoPtLLwCyweQYKwCT4jODJuy7Uu0RWZE0Kic/exec',
    // url: 'https://script.google.com/macros/s/AKfycbxHlUV46RTV57tuXWgSZy4Xc0zk7hljuhrp_4nfpopMLf11Iq6v/exec',
    jsonp: 'prefix',
    dataType: 'jsonp',
    success: function (response) {
      if (response.resultCode == 0) {
        homepage = response.html;
      } else {
        agents = [];
      }
    },
    error: function () {
      agents = [];
    }
  });
}


/**
 * Initialises the causes.
 *
 */
function initialiseCauses() {
  return $.ajax({
    url: 'https://script.google.com/macros/s/AKfycbyRomMSbBiTFiUJnSH3Gj3-ejUwjzKTws4KGx-5tg_v_T889wpt/exec',
    // url: 'https://script.google.com/macros/s/AKfycbxNpIBu28A-IOK3y0bK9fpK0tU0BusYuyE5pvzrwrheyxaRvL4k/exec',
    jsonp: 'prefix',
    dataType: 'jsonp',
    success: function (response) {
      if (response.resultCode === 0) {
        causes = response.causes;
      } else {
        causes = [];
      }
    },
    error: function () {
      causes = [];
    }
  });
}


/**
 * Initialises the rates.
 *
 */
function initialiseRates() {
  return $.ajax({
    url: 'https://script.google.com/macros/s/AKfycbwXVqmopacSeU_riOWzdaMwiOKlQqTJCCdJrzNC46UrPYkg_cI/exec',
    // url: 'https://script.google.com/macros/s/AKfycbz9ThzfVDH_HTESWN9vmYySccPAvPcPWnqbhQUSDmYwUUF4HNU/exec',
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
 * Clears the form.
 */
function clearForm() {
  $('#onBehalfOf').val('');

  $('#cause')
    .val('0')
    .selectmenu()
    .selectmenu('refresh');

  $('#fitrah')
    .val('0')
    .selectmenu()
    .selectmenu('refresh');

  $('#fidyah')
    .val('0')
    .selectmenu()
    .selectmenu('refresh');

  $('#maal').val('');
  $('#infak').val('');
  $('#name').val('');
  $('#mobile').val('');
  $('#email').val('');

  $('#paymentMethod')
    .val('Cash')
    .selectmenu()
    .selectmenu('refresh');
}


$('#start')
  .on('pageinit', function () {
    // $('#agent').change(function () {
    //   if ($('#agent').val()) {
    //     $.mobile.navigate('#product');
    //   }
    // });
  })
  .on('pagebeforeshow', function () {
    $('#agent')
      .val('');
      // .selectmenu('refresh');
    clearForm();
  })
  .on('pageshow', function () {
    if (!agents) {
      $.mobile.loading('show', {
        text: 'Loading agents',
        textVisible: true
      });

      // const $agent = $('#agent');
      // $agent.prop('disabled', 'disabled');

      $.when(initialiseAgents(), initialiseHomepage()).always(function () {
        if (agents.length) {
          $.each(agents, function (i, agent) {
            const agentListItem = $('<li></li>')
              .appendTo($('#agentList'));
            $('<a></a>')
              .attr('data-value', agent.id)
              .text(agent.name)
              .click(function () {
                $('#agent')
                  .val($(this).attr('data-value'));
                  //.selectmenu('refresh');
                $.mobile.navigate('#product');
              })
              .appendTo(agentListItem);
            // $('<option></option>')
            //   .attr('value', agent.id)
            //   .text(agent.name)
            //   .appendTo($agent);
          });
          // $agent.selectmenu('refresh');
          // $agent.prop('disabled', false);
          $('#agentList').listview('refresh');
        }

        $('#start p').html(homepage);

        $.mobile.loading('hide');
      });
    }
  });

$('#product')
  .on('pageinit', function () {
    !agents && $.mobile.changePage('#start');

    $('input.only-digits').keyup(function () {
      this.value = this.value.replace(/[^0-9]/g, '');
    });
  })
  .on('pageshow', function () {
    if (!causes) {
      $.mobile.loading('show', {
        text: 'Loading causes',
        textVisible: true
      });

      const $cause = $('#cause');
      $cause.prop('disabled', 'disabled');

      initialiseCauses().always(function () {
        if (causes.length) {
          $cause.empty();
          $('<option></option>')
            .attr('value', '0')
            .text('Tidak Ada')
            .appendTo($cause);
          $.each(causes, function (i, cause) {
            $('<option></option>')
              .attr('value', cause.id)
              .text(cause.name)
              .appendTo($cause);
          });
          $cause.selectmenu('refresh');
          $cause.prop('disabled', false);
        }

        $.mobile.loading('hide');
      });
    }

    if (!rates) {
      $.mobile.loading('show', {
        text: 'Loading rates',
        textVisible: true
      });

      const $cause = $('#cause');
      $cause.prop('disabled', 'disabled');

      initialiseRates().always(function () {
        if (rates) {
          $('.rate-fitrah').text('$' + rates.fitrah);
          $('.rate-fidyah').text('$' + rates.fidyah);

          const nisabAsString = rates.nisab.toLocaleString('en', {
            style: 'currency',
            currency: 'USD'
          });
          $('.rate-nisab').text(nisabAsString);
        }

        $.mobile.loading('hide');
      });
    }
  });

$('#payment')
  .on('pageinit', function () {
    !agents && $.mobile.changePage('#start');
  })
  .on('pagebeforeshow', function () {
    const fitrahQuantity = parseInt($('#fitrah').val());
    $('.quantity-fitrah').text('' + fitrahQuantity);
    const fitrah = rates.fitrah * fitrahQuantity;

    if (fitrah) {
      const fitrahAsString = fitrah.toLocaleString('en', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      $('#fitrahRow .ui-li-count').text(fitrahAsString);
      $('#fitrahRow').show();
    } else {
      $('#fitrahRow').hide();
    }

    const fidyahQuantity = parseInt($('#fidyah').val());
    $('.quantity-fidyah').text('' + fidyahQuantity);
    const fidyah = rates.fidyah * fidyahQuantity;

    if (fidyah) {
      const fidyahAsString = fidyah.toLocaleString('en', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      $('#fidyahRow .ui-li-count').text(fidyahAsString);
      $('#fidyahRow').show();
    } else {
      $('#fidyahRow').hide();
    }

    const maal = parseInt($('#maal').val() || '0');

    if (maal) {
      const maalAsString = maal.toLocaleString('en', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      $('#maalRow .ui-li-count').text(maalAsString);
      $('#maalRow').show();
    } else {
      $('#maalRow').hide();
    }

    const infak = parseInt($('#infak').val() || '0');

    if (infak) {
      const infakAsString = infak.toLocaleString('en', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      $('#infakRow .ui-li-count').text(infakAsString);
      $('#infakRow').show();
    } else {
      $('#infakRow').hide();
    }

    const total = fitrah + fidyah + maal + infak;
    const totalAsString = total.toLocaleString('en', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    $('#totalRow .ui-li-count').text(totalAsString);
  })
  .on('pageshow', function () {
    $('#payment ul').listview('refresh');
  });

$('#detail')
  .on('pageinit', function () {
    !agents && $.mobile.changePage('#start');

    $('#detail button').click(function () {
      if (validateDetail()) {
        $.mobile.loading('show', {
          text: 'Processing...',
          textVisible: true
        });
        $.ajax({
          url: 'https://script.google.com/macros/s/AKfycbzJOMsG9y6nszJXY2bGrBBOct7xtFyxlDjnn313ykqosQ5z538N/exec',
          // url: 'https://script.google.com/macros/s/AKfycbwJuZPtUm267KoJ4Y17LI3BbdFr-3wODGHCRo-Pna7nM3bkw6c/exec',
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
            $.mobile.loading('hide');

            const page = $('#complete');
            page
              .find('.name')
              .text(response.name);

            const payment = page.find('[data-role="content"] ul');
            $('#payment [data-role="content"] ul')
              .clone()
              .replaceAll(payment);
            payment.listview();

            const paymentMethod = $('#paymentMethod').val();
            const transferInfo = page.find('.transfer-info');

            if (paymentMethod === 'Transfer') {
              transferInfo
                .find('.reference').text(response.reference).end()
                .find('.total').text('$' + response.total)
                .show();
            } else {
              transferInfo.hide();
            }

            $.mobile.changePage('#complete');

            clearForm();
          },
          error: function (jqXHR, textStatus, errorThrown) {
            $.mobile.loading('hide');
            $('#validationModal .error-message').text('Mohon dicoba kembali');
            $.mobile.changePage('#validationModal', {
              role: 'dialog'
            });
          }
        });
      } else {
        $.mobile.changePage('#validationModal', {
          role: 'dialog'
        });
      }
    });
  });

$('#complete')
  .on('pageinit', function () {
    !agents && $.mobile.changePage('#start');
  });

$(document)
  .on('pagebeforechange', function (event, data) {
    var to = data.toPage;
    var from = data.options.fromPage;

    if (typeof to === 'string') {
      var url = $.mobile.path.parseUrl(to);
      to = url.hash || '#' + url.pathname.substring(1);

      if (from) {
        from = '#' + from.attr('id');
      }

      if (to === '#payment' && !validateProduct()) {
        event.preventDefault();
        event.stopPropagation();
        $('.ui-btn-active').removeClass('ui-btn-active ui-focus');
        $.mobile.changePage('#validationModal', {
          role: 'dialog'
        });
      }
    }
  });
