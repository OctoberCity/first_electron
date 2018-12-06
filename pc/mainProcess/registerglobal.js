var {
    BrowserWindow,
    app,
    ipcMain,
    globalShortcut
} = require("electron");

//注册全局键盘事件
function globalEventRegister() {
    //注册关闭App
    globalShortcut.register('Shift+X', () => {
        app.quit();
        console.log('CommandOrControl+X is pressed');
    })


    // 注册播放停止
    globalShortcut.register('Spaces', () => {
        console.log('music will be closed');
        gv
    })

}


// //接收全局鼠标点击
// ipMain.on('global-shortcut', function (arg) {

// var event = new MouseEvent('click');

// soundButtons[arg].dispatchEvent(event);

// });