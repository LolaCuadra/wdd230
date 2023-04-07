
const url = './scripts/business.json';
const displayBusinesses = (businesses) => {
  const cards = document.querySelector(".spotlights"); // select the output container element
  spotlights = [];
    
    let businessList = businesses.filter(x => x.membershipLevel == 'gold' || x.membershipLevel == 'silver');
    for (let i=0; i<3; i++){
      var spot = Math.floor(Math.random() * businessList.length)
      spotlights.push(businessList.splice(spot, 1));
    }

  console.log("Here is the spotlight data", spotlights);
  console.log("here is a spotlight", spotlights[1])

  count = 1;
  spotlights.forEach((spotlight) => {
    console.log("spotlight info", spotlight);
    // Create elements to add to the div.cards element
    let card = document.createElement("div");

    if (count == 3){
      card.classList.add('spotlight3');
    }
    else{
      card.classList.add('spotlight1');
    }
    card.innerHTML = `
    <p>${spotlight[0].name}</p>
    <img src="${spotlight[0].imageurl}" alt="${spotlight[0].name} "${spotlight[0].adcopy}">`
    cards.appendChild(card);
    count += 1;
  }); 
}; 

async function getBusinessData() {
  const response = await fetch('./scripts/business.json');
  if (response.ok) {
    const data = await response.json();
    console.log("Here is the JSON data", data);
    displayBusinesses(data.businesses);
  } 
}

getBusinessData();