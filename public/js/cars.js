"use strict";

var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var nextRow = 3

function formatCars(carsJSON) {
  var html = "<div class=\"row\">";
  $.each(carsJSON, function(index, car){
    html += "<div class=\"col-md-4 car\">";
    html += "<h2>" + car["Make"] + "</h2>";
    html += "<p><strong>Model:</strong> " + car["Model"] + "</p>";
    html += "<p><strong>Year:</strong> " + car["Year"] + "</p>";
    html += "</div>";
  });
    html += "</div>";
  return html;
}

function addCarsToDOM(carsJSON) {
  $('#cars').append( formatCars(carsJSON) );
}

function fetchJSON() {
  var url =  baseUrl + nextRow + "/3"
  nextRow++;
  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(cars) {
      addCarsToDOM(cars)
    },
    error: function(response) {
      $('body').text('There was an error with your request. Please refresh page.')
    }
  });
}