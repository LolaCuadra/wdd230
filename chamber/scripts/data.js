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
const url = './business.json';

const displayBusinesses = (businesses) => {
  const cards = document.querySelector(".directory-cards");

  businesses.forEach((business) => {
    let card = document.createElement("section");
    card.innerHTML = `
    <img src="${business.imageurl}" alt="${business.name}" loading="lazy">
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
}

getBusinessData();