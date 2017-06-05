/*
 * Code.gs
 *
 * This is the main Google Apps Script for agents.
 */


/**
 * Agent repository.
 *
 * @constructs A new agent repository.
 * @param spreadsheed Spreadsheet to use.
 */
var AgentRepository = function (spreadsheet) {
  this.spreadsheet = spreadsheet;

  /**
   * Gets all agents.
   *
   * @returns Collection of agents.
   */
  this.getAllAgents = function () {
    var sheet = this.spreadsheet.getSheetByName('Agents');
    var agents = [];
    var lastRow = sheet.getLastRow();
    var rowCount = lastRow - 1;
    var data = sheet.getSheetValues(2, 1, rowCount, 5);

    for (var i = 0; i < rowCount; i ++) {
      var row = data[i];
      var agent = {
        id: row[0],
        name: row[4]
      };
      agents.push(agent);
    }

    return agents;
  };
};


/**
 * Handles GET request.
 *
 * @param request Request parameter.
 */
function doGet(request) {
  var result = {
    resultCode: -1
  };

  var spreadsheet = openSpreadsheet();
  var repository = new AgentRepository(spreadsheet);
  var agents = repository.getAllAgents();

  if (agents) {
    result = {
      resultCode: 0,
      agents: agents
    };
  }

  return ContentService
    .createTextOutput(request.parameter.prefix + '(' + JSON.stringify(result) + ')')
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
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
