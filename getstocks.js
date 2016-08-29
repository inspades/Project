 function getPrice() {
     var url = "http://query.yahooapis.com/v1/public/yql";
     var spx = "^GSPC";
     var data = encodeURIComponent("select * from yahoo.finance.quotes where symbol in ('" + spx + "')");

     $.getJSON(url, 'q=' + data + "&format=json&diagnostics=true&env=http://datatables.org/alltables.env")
         .done(function (data) {
         $("#currentprice").text( data.query.results.quote.LastTradePriceOnly);
     })
         .fail(function (jqxhr, textStatus, error) {
         var err = textStatus + ", " + error;
             $("#currentprice").text('Request failed: ' + err);
     });
 }
