/**
 * Handles GET request.
 *
 */
function doGet(e) {
  var result = process({
    name: e.parameter.name,
    phone: e.parameter.phone,
    email: e.parameter.email,
    fitrahCount: parseInt(e.parameter.fitrah || '0'),
    fidyahCount: parseInt(e.parameter.fidyah || '0'),
    maal: parseInt(e.parameter.maal || '0'),
    infak: parseInt(e.parameter.infak || '0'),
    paymentMethod: e.parameter.method,
    agent: e.parameter.agent
  });
  var json = ContentService
    .createTextOutput(e.parameter.prefix + '(' + JSON.stringify(result) + ')')
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
  return json;
}


/**
 * Processes the request.
 *
 */
function process(form) {
  var spreadsheet = openSpreadsheet();
  var sheet = spreadsheet.getSheetByName('Transactions');
  var timeStamp = new Date();
  var name = form.name;
  var phone = form.phone;
  var email = form.email;
  var fitrahCount = form.fitrahCount;
  var fitrahTotal = 12 * fitrahCount;
  var fidyahCount = form.fidyahCount;
  var fidyahTotal = 12 * fidyahCount;
  var maal = form.maal;
  var infak = form.infak;
  var total = fitrahTotal + fidyahTotal + maal + infak;
  var paymentMethod = form.paymentMethod;
  var paymentReference = '';
  var paid = 'No';
  var paymentTimeStamp = '';
  var agent = form.agent;

  if (paymentMethod === 'Transfer') {
    paymentReference = generatePaymentReference(name, fitrahCount, fidyahCount, maal, infak)
  }
  else {
    paid = 'Yes';
    paymentTimeStamp = timeStamp;
  }

  sheet.appendRow([
    timeStamp,
    name,
    phone,
    email,
    fitrahCount,
    fitrahTotal,
    fidyahCount,
    fidyahTotal,
    maal,
    infak,
    total,
    paymentMethod,
    paymentReference,
    paid,
    paymentTimeStamp,
    agent
  ]);

  if (paymentMethod === 'Transfer') {
    var template = HtmlService.createTemplateFromFile('ReminderSMS');
    template.paymentReference = paymentReference;
    template.total = total;
    var body = template.evaluate().getContent();
    var scriptProperties = PropertiesService.getScriptProperties();
    var url = scriptProperties.getProperty('SMSUrl');
    var username = scriptProperties.getProperty('SMSUsername');
    var password = scriptProperties.getProperty('SMSPassword');
    UrlFetchApp.fetch(url, {
      'method': 'post',
      'payload': {
        'username': username,
        'password': password,
        'to': phone.replace(/\s/g, ''),
        'from': 'IMCV BAZIS',
        'message': body
      }
    });
  }

  if (email && (MailApp.getRemainingDailyQuota() > 0)) {
    var template = HtmlService.createTemplateFromFile('ReminderEmail');
    template.name = name.toUpperCase();
    template.fitrahCount = fitrahCount;
    template.fitrahTotal = fitrahTotal;
    template.fidyahCount = fidyahCount;
    template.fidyahTotal = fidyahTotal;
    template.maal = maal;
    template.infak = infak;
    template.total = total;
    template.paid = (paid === 'Yes');
    template.paymentReference = paymentReference;
    var htmlBody = template.evaluate().getContent();

    MailApp.sendEmail(email, 'IMCV BAZIS Payment', htmlBody, {
      name: 'IMCV BAZIS',
      noReply: true,
      htmlBody: htmlBody
    });
  }

  return {
    name: name.toUpperCase(),
    total: total,
    reference: paymentReference
  }
}


/**
 * Opens the Google Sheet document.
 *
 */
function openSpreadsheet() {
  var scriptProperties = PropertiesService.getScriptProperties();
  var id = scriptProperties.getProperty('DocumentID');
  var spreadsheet = SpreadsheetApp.openById(id);
  return spreadsheet;
}


/**
 * Generates the payment reference according to the following rule:
 * NAME_NO_SPACESFXXDXXMI
 *
 * @param {string} name Payer's full name.
 * @param {number} fitrahCount Number of people covered for Fitrah payment.
 * @param {number} fidyahCount Number of people covered for Fidyah payment.
 * @param {boolean} hasMaal True if Maal payment is included.
 * @param {boolean} hasInfak True if Infak payment is included.
 * @returns {string} The generated payment reference.
 */
function generatePaymentReference(name, fitrahCount, fidyahCount, hasMaal, hasInfak) {
  var nameWithNoSpace = name.replace(/\s/g, '').toUpperCase();
  var length = nameWithNoSpace.length;
  var reference = nameWithNoSpace.substr(0, Math.min(10, length));

  if (fitrahCount) {
    reference += 'F' + fitrahCount;
  }

  if (fidyahCount) {
    reference += 'D' + fidyahCount;
  }

  if (hasMaal) {
    reference += 'M';
  }

  if (hasInfak) {
    reference += 'I';
  }

  return reference;
}


/**
 * Tests sending SMS via API.
 *
 */
function testSendSms() {
  var phone = '0412345678';
  var template = HtmlService.createTemplateFromFile('ReminderSMS');
  template.paymentReference = "TEST";
  template.total = 1;
  var body = template.evaluate().getContent();
  var scriptProperties = PropertiesService.getScriptProperties();
  var url = scriptProperties.getProperty('SMSUrl');
  var username = scriptProperties.getProperty('SMSUsername');
  var password = scriptProperties.getProperty('SMSPassword');
  var result = UrlFetchApp.fetch(url, {
    'method': 'post',
    'payload': {
      'username': username,
      'password': password,
      'to': phone.replace(/\s/g, ''),
      'from': 'IMCV BAZIS',
      'message': body
    }
  });
}
