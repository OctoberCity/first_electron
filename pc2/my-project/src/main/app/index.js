import {  ipcMain} from 'electron'
//监听关闭事件
ipcMain.on("closeApp", () => {
    app.quit();
  });
  //监听窗口缩小时间  
ipcMain.on("narrowWindow", () => { 
    mainWindow.minimize();
  });
  