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



