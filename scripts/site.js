const today = new Date();
document.querySelector('#currentyear').textContent = today.getFullYear()

document.querySelector('#lastmodified').textContent = document.lastModified

// const todaysdate = new Date();
// console.log(todaysdate);


// let - will change, its just for this one time 
// const - does not change, I'll set it for one time is not gpimg to change 

// helps you select whatever is on 
// document.querySelector("#an ID ro pull from html").textContent (Changes the content of the text) = today.toLocaleDateString('en-US', dateoptions )
//document.getElementById('Today') (this is only ID the other one is everything)

// how do I want the date to apper?
// const dateoptions =  {
//     year: ' 2-digit',
//     month: 'numeric',
//     day: 'numeric'
// }