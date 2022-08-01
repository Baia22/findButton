let search=document.querySelector(".search")
let icon=document.querySelector("i")
let div=document.querySelector("div")

icon.addEventListener("click", function(){
    search.classList.toggle("delete")
    div.classList.toggle("delete")
})