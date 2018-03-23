function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "A17jCqe8OPmshlUyhxFqdDOVShgHp1uKGImjsnSlxBBhrtqREm",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/famous=',
    success: function(r) {
      if (typeof r === 'string') {
       r = JSON.parse(r); 
      }
      currentQuote = r.quote;
      currentAuthor = r.author;
      $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
      $('#text').text(r.quote);
      $('#author').text(r.author);
    }
    });
  }
$(document).ready(function() {
  $('#new-quote').on('click', getQuote);
});