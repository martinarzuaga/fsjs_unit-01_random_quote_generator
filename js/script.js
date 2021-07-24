/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
/*
* The following quotes array of objects are all from Software Engineers. The years are totally fictitious and the last two quotes has the same source and citation because are from the same person.
* */
const quotes = [
  {quote: "Truth can only be found in one place: the code.", source: "Robert C. Martin", citation: "Clean Code: A Handbook of Agile Software Craftsmanship", year: 2010},
  {quote: "Engineering is a profession that can do the job of almost all other professions.", source: "Amit Kalantri", citation: "Wealth of Words", year: 2015},
  {quote: "Software quality is defined by a number of factors, and quality management is a multifaceted management discipline.", source: "Pearl Zhu", citation: "Quality Master", year: 2020},
  {quote: "Google and Stack Overflow are great sources of opinions and information, but they’re no substitute for actual human experience.", source: "Titus Winters", citation: "Software Engineering at Google: Lessons Learned from Programming Over Time", year: 2021},
  {quote: "Sometimes, the best thing you can do is just say, “I don’t know.", source: "Titus Winters", citation: "Software Engineering at Google: Lessons Learned from Programming Over Time", year: 2021}
]

/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr) {
  let randomNumber = Math.floor(Math.random() * arr.length)
  return arr[randomNumber]
}

/***
 * `printQuote` function
***/
function printQuote() {
  let indexQuotes = getRandomQuote(quotes)
  let html = `
    <p class="quote">${indexQuotes.quote}</p>
    <p class="source">${indexQuotes.source}
  `
  if (indexQuotes.citation) {
    html += `<span class="citation">${indexQuotes.citation}</span>`
  }

  if (indexQuotes.year) {
    html += `<span class="year">${indexQuotes.year}</span>`
  }
  html += `</p>`
  document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);