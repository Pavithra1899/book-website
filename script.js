var popup = document.querySelector(".popup")
var overlay = document.querySelector(".overlay")
var addbutton = document.getElementById("add-popup")
addbutton.addEventListener("click",function(){
    popup.style.display="block"
    overlay.style.display="block"
})
var cancel = document.getElementById("close")

cancel.addEventListener("click",function(event)
{
    event.preventDefault()
    popup.style.display="none"
    overlay.style.display="none"
})

//select container, new, bookname, bookauthor, bookdescription

var container1 = document.querySelector(".container")
var new1 = document.getElementById("new")
var bookname1 = document.getElementById("bookname")
var bookauthor1 = document.getElementById("bookauthor")
var bookdescription1 = document.getElementById("bookdescription")

new1.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","bkcontainer")
    div.innerHTML=`<h1>${bookname1.value}</h1>
    <h3>${bookauthor1.value}</h3>
    <p>${bookdescription1.value}</p>
    <button onclick='deletebook(event)'>Delete</button>`
    container1.append(div)
    popup.style.display="none"
    overlay.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}