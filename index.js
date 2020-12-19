const fetch = require('node-fetch');
const cheerio = require('cheerio');

(async function() {
  // fetching the data and storing in a variable
  const res = await fetch('https://explodingtopics.com/topics-this-month');
  // converting that data into a readable format
  const text = await res.text();
  // Allows us to search through the elements for text
  const $ = cheerio.load(text);
  // Give us all of the content on the page with the class of tilekeyword and 
  // converts it to readable text. Yes it is case sensitive so be careful
  const containers = $('.topicInfoContainer').toArray();
})();

// For simple/non JS needed sites...
// (async function() {
//   // fetching the data and storing in a variable
//   const res = await fetch('http://iswdataclient.azurewebsites.net/webSearchLegal.aspx?dbkey=harrisontax&stype=legal&sdata=DPLX&time=202012181754005#top');
//   // converting that data into a readable format
//   const text = await res.text();
//   // checking to see if the returned data is actually pulling the correct information
//   // by choosing an obscure word found on the page and seeing if it includes it. Include
//   // will return a true or false if it finds it.
//   const foundIt = text.includes('ROSSI');
//   // Printing out true or false if it is found
//   console.log({foundIt});
//   console.log({text});
// })();


// (async function() {
//   // fetching the data and storing in a variable
//   const res = await fetch('https://www.tad.org/property-search-results/');
//   // converting that data into a readable format
//   const text = await res.text();
//   // checking to see if the returned data is actually pulling the correct information
//   // by choosing an obscure word found on the page and seeing if it includes it. Include
//   // will return a true or false if it finds it.
//   const foundIt = text.toLowerCase().includes('gua sha');
//   // Printing out true or false if it is found
//   console.log({foundIt});
//   // console.log({text});
// })();