const {ipcRenderer} = require('electron');
const closeApp=document.getElementById("closeApp");

closeApp.onclick=()=>{
	ipcRenderer.send("closeApp");
}