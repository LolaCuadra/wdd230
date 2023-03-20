var gridSelector = document.querySelector('#directory-grid');
var listSelector = document.querySelector('#directory-list');
var directoryData = document.querySelector('#directory-data');

gridSelector.addEventListener('click', ()=>{
    if (!gridSelector.classList.contains('selected')){    
        gridSelector.classList.add('selected');
        listSelector.classList.remove('selected');
        directoryData.classList.add('directory-cards')
        directoryData.classList.remove('directory-list')
    }
});

listSelector.addEventListener('click', ()=>{
    if (!listSelector.classList.contains('selected')){
        listSelector.classList.add('selected');
        gridSelector.classList.remove('selected');
        directoryData.classList.add('directory-list')
        directoryData.classList.remove('directory-cards')
    }
});

addEventListener("blur", (event) => {});

onblur = (event) => {};

// Load JSON data and do stuff
const url = "https://github.com/LolaCuadra/wdd230/blob/main/chamber/scripts/business.json";

// const express = require('express');
// const app = express();

// app.get('/', function(request, response) {
//   response.sendFile(__dirname + '/business.json');
// });

// app.get('/allow-cors', function(request, response) {
//   response.set('Access-Control-Allow-Origin', '*');
//   response.sendFile(__dirname + '/business.json');
// });

// const listener = app.listen(process.env.PORT, function() {
//   console.log('Your app is listening on port ' + listener.address().port);
// });


// COMPARE THIS TO THE VERSION FOUND IN THE W09 Activity: Working with JSON data and the Fetch API module
// Using the innerHTML version is a little less Javascript intensive.
const displayBusinesses = (businesses) => {
  const cards = document.querySelector(".directory-cards"); // select the output container element

  businesses.forEach((business) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    card.innerHTML = `
    <img src="${business.imageURL}" alt="${business.name}" loading="lazy">
    <p>${business.name}</p>
    <p>${business.streetAddress}</p>
    <p>${business.cityStateZip}</p>
    <p><a href="${business.websiteURL}" target="_blank"><u>${business.name} Website</u></a></p>
    `;
    if (business.membershipLevel=='gold'){
      card.classList.add('gold-member');
    }
    cards.appendChild(card);
  }); 
  
}; 

async function getBusinessData() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    displayBusinesses(data.businesses);
  } 
  // else {
  //   console.error("There was an error loading the data.");
  //   const cards = document.querySelector("directory-cards");
  //   cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
}

getBusinessData();