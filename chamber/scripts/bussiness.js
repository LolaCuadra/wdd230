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

const url = "/Users/lolacuadra/Desktop/wdd230/wdd230/chamber/scripts/bussiness.json";

const displayBussinesses = (bussinesses) => {
  const cards = document.querySelector(".directory-cards"); // select the output container element

  businesses.forEach((bussiness) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    card.innerHTML = `
    <img src="${bussiness.imageURL}" alt="${bussiness.name}" width:200px;" loading="lazy">
    <p>${bussiness.name}</p5
    <p>${bussiness.streetAddress}</p>
    <p>${bussiness.cityStateZip}</p>
    <p><a href="${bussiness.websiteURL}" target="_blank"><u>${bussiness.name} Website</u></a></p>
    `;
    if (bussiness.membershipLevel=='gold'){
      card.classList.add('gold-member');
    }
    cards.appendChild(card);
  }); 
  
}; 

async function getBussinessData() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    displayBussinesses(data.businesses);
  } else {
    console.error("There was an error loading the data.");
    const cards = document.querySelector("directory-cards");
    cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
  }
}

getBussinessData();