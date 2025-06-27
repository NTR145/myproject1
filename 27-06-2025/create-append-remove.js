let aish = document.createElement("p");
aish.textContent="I am Chitti";
aish.innerHTML="Memory 1 Tera Byte";
aish.style.color = "blue";
aish.style.fontSize = "20px";
document.getElementById("vasi").appendChild(aish);



setTimeout(() => {
    let re = document.getElementsByClassName("list")[3];
    if (re) {
        re.remove();
    }
},2000);

let newHeading = document.createElement("h2");
newHeading.innerHTML = "This is a new heading added by JavaScript";
newHeading.style.color = "purple";
newHeading.style.fontSize = "24px";
document.body.appendChild(newHeading);

setTimeout(() => {
    let newText = document.createElement("p");
    newText.textContent = "This text is added after 3 seconds!";
    newText.style.color = "green";
    document.body.appendChild(newText);
}, 3000);


let tagText = document.createElement("p");
tagText.textContent = "This text is appended to the tag!";
tagText.style.color = "orange";
document.getElementById("vasi").appendChild(tagText);


let list = document.createElement("ul");
for (let i = 1;i<=3;i++) {
let listItem = document.createElement("li");
listItem.textContent = `Item ${i}`;
listItem.style.color = "red";
listItem.style.fontSize = "18px";
list.appendChild(listItem);
}
document.body.appendChild(list);

