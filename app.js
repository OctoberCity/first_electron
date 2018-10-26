var {BrowserWindow,app} =require("electron");

let win;


//监听app加载完毕才能创建窗口
app.on("ready",createMainwindow);
app.on("window-all-closed",()=>{
	  if (process.platform !== 'darwin') {
    app.quit();
  }
});


//创建主要窗口
function createMainwindow(){
 win =new BrowserWindow({width:1000,height:1000,frame:false,show:false,offscreen: false});
win.on('close',()=>{
	win=null;
});
  win.on('close', (e) => {
    if(!safeExit){
      e.preventDefault();
      mainWindow.webContents.send('action', 'exiting');
    }
  });

  win.webContents.openDevTools();
win.loadURL(`file://${__dirname}/index.html`);
win.show();


}