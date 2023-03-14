//la fecha arriba

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format( new Date() );

document.querySelector("#fecha").innerHTML = fulldate; 

const todayIndex = new Date();
document.querySelector("#currentyear").textContent = todayIndex.getFullYear();


document.querySelector('#lastmodified').textContent = document.lastModified;

//hamburger menu

function myFunction() {
    var x = document.querySelector(".topnav");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

// las visit
/* day counter */
var today_date = new Date();
var hidden_date = document.querySelector("#current_date")
hidden_date.value = today_date.toLocaleDateString(); 
console.log(hidden_date.value);
localStorage.setItem("hidden_date", hidden_date.value)

var msgDate = new Date();
if (msgDate.getDay()==1 || msgDate.getDay()==2) {
    document.querySelector("#meet-greet").classList.add("active");
}

const MILLIS_PER_DAY = 24 * 60 * 60 * 1000;
let lastVisitString = localStorage.getItem("lastVisit");
let visitspan = document.querySelector('#days-since-visit');

if (lastVisitString==null){        
    visitspan.textContent = '0';
}
else{
    lastVisitDate=new Date(lastVisitString);
    daysSinceLastVisit = Math.floor((today.getTime() - lastVisitDate.getTime()) / MILLIS_PER_DAY);
    visitspan.textContent = daysSinceLastVisit;
}
localStorage.setItem("lastVisit", today.toLocaleDateString());



