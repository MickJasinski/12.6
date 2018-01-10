var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries'); // list of countries
var outOfInput = document.getElementsByTagName('')


$('#search').click(searchCountries); // search button

function searchCountries() {
  var countryName = $('#country-name').val(); // user's request
  if (countryName.length < 2) {
    $('#countries').clear()
  } else {
    $.ajax({
      url: url + countryName,
      method: 'GET',
      success: showCountriesList
    });
  }
}

function hideUnderscore(element) {
  element.classList.remove('underscore');
}

function showUnderscore(element) {
  element.classList.add('underscore');
}

function showCountriesList(resp) {
  countriesList.empty(); // clear list of countries
  resp.forEach(function(item) {
    $('<hr>').appendTo(countriesList);
    $('<img>').attr('src', item.flag).appendTo(countriesList);
    $('<li>').text('Country name: ' + item.name).appendTo(countriesList);
    $('<li>').text('Capital: ' + item.capital).appendTo(countriesList);
    $('<li>').text('Region: ' + item.region).appendTo(countriesList);
    $('<li>').text('Subregion: ' + item.subregion).appendTo(countriesList);
    $('<li>').text('Population: ' + item.population).appendTo(countriesList);
    $('<li>').text('Language(s): ' + item.languages[0].name).appendTo(countriesList);
    $('<li>').text('Currency: ' + item.currencies[0].name).appendTo(countriesList);
    // $('<hr>').appendTo(countriesList);
  });
}