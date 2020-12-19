const fetch = require('node-fetch');
const cheerio = require('cheerio');
const Sheet = require('./sheet');

(async function() {
  // fetching the data and storing in a variable
  const baseUrl = 'https://explodingtopics.com/topics-this-month/';
  try {
    const res = await fetch(`${baseUrl}` +);
    const text = await res.text();
    
  }
  // converting that data into a readable format
  // Allows us to search through the elements for text
  const $ = cheerio.load(text);
  // Give us all of the content on the page with the class of tilekeyword and 
  // converts it to readable text. Yes it is case sensitive so be careful
  const containers = $('.topicInfoContainer').toArray();
  const trends = containers.map(c => {
    const active = $(c);
    // the below are also the column names
    const keyword = active.find('.tileKeyword').text();
    const description = active.find('.tileDescription').text();
    const searchesPerMonth = active.find('.scoreTag').first().text().split('mo')[1];
    return {keyword, description, searchesPerMonth};
  })
  console.log({trends})

  const sheet = new Sheet();
  await sheet.load();
  sheet.addRows(trends);
})();