// copying the clicked values(ratings)
let rating=document.getElementById("rating");
let btn=document.querySelectorAll(".btn")

btn.forEach((rate) =>{
   rate.addEventListener("click", () =>{
      rating.innerHTML = rate.innerHTML;
   })
})

// hiding second page
let box2 = document.getElementsByClassName("box2")[0];
box2.style.visibility="hidden"

// hiding first page and showing second page after clicking on submit
let submit = document.getElementById("submit");
submit.addEventListener('click', () =>{
let box1 = document.getElementsByClassName("box1")[0];
box1.style.visibility="hidden"

let footer = document.getElementsByClassName("foot")[0];
footer.style.visibility="hidden"

let box2 = document.getElementsByClassName("box2")[0];
box2.style.visibility="visible"
})