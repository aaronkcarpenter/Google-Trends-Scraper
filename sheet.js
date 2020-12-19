const { GoogleSpreadsheet } = require('google-spreadsheet');

module.exports = class Sheet {
  constructor() {
    this.doc = new GoogleSpreadsheet('19l_y-XNSi4Y3hUfirTbMxtzWsIa3_ys3VigMSB1P5oE');
  }
  async load() {
    await this.doc.useServiceAccountAuth(require('./credentials.json'));
    await this.doc.loadInfo(); 
  }

  async addRows(rows) {
    const sheet = this.doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
    await sheet.addRows(rows);
  }

  async getRows() {
    const sheet = this.doc.sheetsByIndex[0];
    return await sheet.getRows();
  }
}
