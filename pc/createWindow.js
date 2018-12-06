const {BrowserWindow} = require('electron').remote;

let seconderwindow= document.getElementById("seconderwindow");
  let win;
seconderwindow.onclick=()=>{
  win  =new BrowserWindow({
  	width:100,
  	height:100,
  	frame:false
  });
   win.on("close",()=>{
   	seconderwindow=null;
   }); 
   //监听窗体移动
   win.on("move",windowMove);
   win.loadURL(`file://${__dirname}/index.html`);
   win.show();
};

function windowMove(){
   

}