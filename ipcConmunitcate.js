const {ipcRenderer} = require('electron');
const closeApp=document.getElementById("closeApp");


// 关闭通讯
closeApp.onclick=()=>{
	ipcRenderer.send("closeApp");
}