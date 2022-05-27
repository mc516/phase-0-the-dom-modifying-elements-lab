const Main = document.getElementById("main");
Main.remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute("id","victory");
newHeader.innerHTML = "He is the champion";
document.body.append(newHeader);