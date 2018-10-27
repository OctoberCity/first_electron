var {BrowserWindow,app,ipcMain,globalShortcut} =require("electron");

let win;


//监听app加载完毕才能创建窗口
app.on("ready",main);
app.on("window-all-closed",()=>{
	  if (process.platform !== 'darwin') {
    app.quit();
  }
});


function main(){
  createMainwindow();
  globalEventRegister();
}


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


//监听ipc通信
ipcMain.on("closeApp",()=>{
  app.quit();
});



//注册全局时间
function globalEventRegister(){
  //注册关闭App
  globalShortcut.register('Shift+X', () => {
    app.quit();
      console.log('CommandOrControl+X is pressed');
    })


  // 注册播放停止
    globalShortcut.register('Space', () => {
      console.log('music will be closed');
    })

}


//接收全局鼠标点击
ipMain.on('global-shortcut', function (arg) {

var event = new MouseEvent('click');

soundButtons[arg].dispatchEvent(event);

});