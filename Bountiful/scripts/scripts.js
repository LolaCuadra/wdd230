// footer
const today = new Date();
document.querySelector('#currentyear').textContent = today.getFullYear()
document.querySelector('#lastmodified').textContent = document.lastModified

// slideshow 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// order

let drink_count = document.querySelector('#drink-count');

const order_button = document.querySelector(".order-button");

let count = localStorage.getItem('drinks-counted');

if (count == null){
    count = 0;
}
localStorage.setItem('drinks-counted', count);
drink_count.innerHTML = localStorage.getItem('drinks-counted');

if (localStorage.getItem('drinks-counted') == 1){
    drink_count.innerHTML += ` drink`;
}

else{
    drink_count.innerHTML += ` drinks`;
}


order_button.addEventListener('click', () => {
    count++;
    localStorage.setItem('drinks-counted', count);
})

// order details

let url = new URL(window.location);
const fruity_url = "./scripts/fruits.json";
let params  = url.searchParams;

let list = document.querySelector(".items");

let contact = document.querySelector(".contact");

contact.innerHTML = `Name: ${params.get("first")} <br> Phone: ${params.get("phone")} <br> 
                    Email: ${params.get("email")}`;

if (params.get("special_instr") != ""){
  contact.innerHTML += `<br> Special Instructions: ${params.get("special_instr")}`;
}

contact.innerHTML += `<br> Order Date: ${params.get("date")}`;

function displayNames(fruit_list) {
    for (let i = 0; i < fruit_list.length; i++) {
        if (fruit_list[i].id == localStorage.getItem("selection1")){
            list.innerHTML += `<div><h3>${fruit_list[i].name}</h3>
                                <p>Calories: ${fruit_list[i].nutritions["calories"]} cal</p>
                                <p>Carbohydrates: ${fruit_list[i].nutritions["carbohydrates"]}g</p>
                                <p>Protein: ${fruit_list[i].nutritions["protein"]}g</p>
                                <p>Fat: ${fruit_list[i].nutritions["fat"]}g</p>
                                <p>Sugar: ${fruit_list[i].nutritions["sugar"]}g</p></div>`;
        }

        if (fruit_list[i].id == localStorage.getItem("selection2")){
            list.innerHTML += `<div><h3>${fruit_list[i].name}</h3>
            <p>Calories: ${fruit_list[i].nutritions["calories"]} cal</p>
            <p>Carbohydrates: ${fruit_list[i].nutritions["carbohydrates"]}g</p>
            <p>Protein: ${fruit_list[i].nutritions["protein"]}g</p>
            <p>Fat: ${fruit_list[i].nutritions["fat"]}g</p>
            <p>Sugar: ${fruit_list[i].nutritions["sugar"]}g</p></div>`;
        }

        if (fruit_list[i].id == localStorage.getItem("selection3")){
            list.innerHTML += `<div><h3>${fruit_list[i].name}</h3>
            <p>Calories: ${fruit_list[i].nutritions["calories"]} cal</p>
            <p>Carbohydrates: ${fruit_list[i].nutritions["carbohydrates"]}g</p>
            <p>Protein: ${fruit_list[i].nutritions["protein"]}g</p>
            <p>Fat: ${fruit_list[i].nutritions["fat"]}g</p>
            <p>Sugar: ${fruit_list[i].nutritions["sugar"]}g</p></div>`;
        }
    }
}

async function getFruitData() {
    const response = await fetch(fruity_url);
    if (response.ok) {
      const data = await response.json();
      displayNames(data.fruits);
    } else {
      console.error("There was an error loading the data.");
    }
  }
  
  getFruitData();