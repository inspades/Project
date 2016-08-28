General concept:

A polling utility that gathers user predictions of the high and low of the sp500 for the current/upcoming trading day, stores the prices in an array, calculates the averages from total predictions, and finally displays those averages. 

Phase II enhancements:
  1. User profile stores prediction information, compares it to actual information, and gives users an accuracy rating.
  2. User's can justify their predictions and comment on other predictions. 
  3. User's can modify their predictions up to a certain time of the trading day. 
  4. Instead of only the SP500, we could include any or even EVERY ticker symbol. 

Web pages:

1. Login and landing page: 
  a) Facebook or google plus login. Only permission required is email. 
  
2. Submission page: 
  a) Runs the script to get current price of ^GSPC (ticker for sp500).
  b) Two form boxes to gather user submission predictions of high and low for SP500. Perameters to be set based on current price to prevent unrealistic predictions.
  c) button link to display page once both form fields have been filled. 
  
3. Display page:
  a) adds user's predictions to array of all other users predictions and caculates averages. 
  b) displays averages.
