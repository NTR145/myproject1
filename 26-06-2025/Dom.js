document.title = "Dom in JavaScript";
document.body.style.backgroundColor = "pink";
document.getElementById("header").innerHTML = "Hello, World";
document.getElementById("para").style.color = "red";
document.getElementById("para").style.fontSize = "30px";
document.getElementById("mr").style.color = "yellow";
document.getElementsByTagName("h2")[0].style.color = "green";
let laxman=document.getElementsByClassName("csm");
laxman[0].style.color = "orange";
laxman[1].style.color = "brown";
laxman[2].style.color = "block";


document.querySelector(".ntr").style.color = "red";

let depts=document.querySelectorAll(".sri");
depts[0].style.color = "violet";
depts[1].style.color = "block";
depts[2].style.color = "yellow";

function changeBackground() {
    document.body.style.backgroundColor = "blue";
}
alert("changebackground");



function changeBackground() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "blue"? "red" : "blue";
        //alert("changebackground");
    
}




function changetext() {
    document.getElementById("clg").innerHTML = "CMRCET,CMREC";
    document.getElementById("clg").style.backgroundColor = "coral";
    document.getElementById("clg").style.fontSize = "30px";
    document.getElementById("clg").style.textAlign = "center";
    document.getElementById("clg").style.borderRadius = "20px";
}





