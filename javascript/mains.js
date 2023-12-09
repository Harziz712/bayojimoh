let toggleBtn 
let headerLinks
let body
body=  document.querySelector("#hero")
toggleBtn = document.querySelector("#navlink-toggle")
headerLinks = document.querySelector( "#navlink")

toggleBtn.onclick = () => { 
    if( headerLinks.style.display === "none" ){ 
        headerLinks.style.display = "block"
    } else{ headerLinks.style.display = "none"}
 }

 body.onclick = () => { 
    if( headerLinks.style.display === "block" ){ 
        headerLinks.style.display = "none"
    }
 }