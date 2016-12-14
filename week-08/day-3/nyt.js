// New York Times API
//
// http://developer.nytimes.com/
//
// Ask your local mentor for the API key or request your own. Use localhost as the website.
//
// - Use the Article Search API
// - Find articles about the moon landing by Apollo 11
// - Display the following fields in a list
//   - Headline
//   - Snippet
//   - Publication date
// - Create a permalink to that article

var heading = document.createElement('h1');
document.body.appendChild(heading);
heading.setAttribute('class', 'heading');
heading.innerHTML = "Apollo 11";

var button = document.createElement('button');
document.body.appendChild(button);
button.setAttribute('class', 'button');
button.innerHTML = "Next";

var headline = document.createElement('p');
document.body.appendChild(headline);
headline.setAttribute('class', 'headline');

var link = document.createElement('a');
document.body.appendChild(link);
link.setAttribute('class', 'link');
link.setAttribute('href', '#')
link.innerHTML = "Go to the article!";

var snippet = document.createElement('p');
document.body.appendChild(snippet);
snippet.setAttribute('class', 'snippet');

var date = document.createElement('p');
document.body.appendChild(date);
date.setAttribute('class', 'date');


var request = new XMLHttpRequest();
var articleData = [];

request.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ecf5a7de7cc04cb2b96621ac0933ae26&q=apollo+11+moon', true);
request.send(null);

request.onreadystatechange = function (response) {
  var apolloData;

  if (request.readyState === XMLHttpRequest.DONE) {
    apolloData = JSON.parse(request.response);
    getData(apolloData);
    console.log(apolloData);
  }
};

function getData (article) {
  var index = 0;
  article.response.docs.forEach( function (e) {
    console.log(e);
    articleData.push({'headline': e.headline.main, 'snippet': e.snippet, 'date': e.pub_date, 'link': e.web_url, 'index': index });
    index++;
  })
}

var counter = 0;

function changeArticle () {
  headline.innerHTML = articleData[counter].headline;
  link.setAttribute('href', articleData[counter].link);
  snippet.innerHTML = articleData[counter].snippet;
  date.innerHTML = articleData[counter].date;
  counter++;
  if (counter >= articleData.length) {
    counter = 0;
  }
}

button.addEventListener('click', changeArticle);
