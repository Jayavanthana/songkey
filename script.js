//selecting popup box popup overlay button
var popupoverlay= document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.querySelector("add-popup-button")

addpopupbutton.addEventListener("click",function(){
          popupoverlay.style.display="block"
          popupbox.style.display="block"
})


var cancelpopup=document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container = document.querySelector(".container")
var addsong = document.getElementById("add-song")
var songtitleinput = document.getElementById("song-title-input")
var songdirectorinput = document.getElementById("song-director-input")
var songdescriptioninput = document.getElementById("song-description-input")

addsong.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","song-container")
    div.innerHTML=`<h1>$(songtitleinput.value)</h1>`
    `<h4>$(songdirectorinput.value)</h4>`
    `<p>$(songdescriptioninput.value)</p>`
    `<button>Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletesong(event){
    event.target.parentElement.remove()
}
