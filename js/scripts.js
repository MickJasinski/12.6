var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries'); // list of countries
var outOfInput = document.getElementsByTagName('')


$('#search').click(searchCountries); // search button

function searchCountries() {
  var countryName = $('#country-name').val(); // user's request
  if (!countryName) {
    countriesList.empty(); // clear list of countries
  } else if (countryName.length > 1) {
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
    $('<img>').attr('src', item.flag).attr('alt', 'flag').appendTo(countriesList);
    $('<p>').text('Country name: ' + item.name).appendTo(countriesList);
    $('<p>').text('Capital: ' + item.capital).appendTo(countriesList);
    $('<p>').text('Region: ' + item.region).appendTo(countriesList);
    $('<p>').text('Subregion: ' + item.subregion).appendTo(countriesList);
    $('<p>').text('Population: ' + item.population).appendTo(countriesList);
    $('<p>').text('Language(s): ' + item.languages[0].name).appendTo(countriesList);
    $('<p>').text('Currency: ' + item.currencies[0].name).appendTo(countriesList);
    // $('<hr>').appendTo(countriesList);
  });
}