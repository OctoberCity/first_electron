var {
    BrowserWindow,
    app,
    ipcMain,  
} = require("electron");
const path =require("path");
const loadnetdata=require(path.join(__dirname, 'mainProcess/loadnetdata.js'));

let win;
let settingsWindow;
const global={};
// 注册全局变量，下次打开需要重新加载
global.somedata = {
    num:0,//本地歌曲列表数量
    musicLocalList:{},//本地歌曲列表
    getMySongList:{"sdd":"sss"}, // 获取我的歌单列表，通过在线获得

  }
 
//监听app加载完毕才能创建窗口
app.on("ready", main);
app.on("window-all-closed", () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});


function main() {
    require(path.join(__dirname, 'mainProcess/registerglobal.js'));
    require(path.join(__dirname, 'mainProcess/musicmenu.js'));
    loadnetdata.getMylocalList(global.musicLocalList);
    createMainwindow();
    globalEventRegister();
}


//创建主要窗口
function createMainwindow() {
    win = new BrowserWindow({
        width: 1000,
        height: 700,
        frame: false,
        show: false,
        offscreen: false
    });
    win.on('close', () => {
        win = null;
    });
    win.on('close', (e) => {
        if (!safeExit) {
            e.preventDefault();
            mainWindow.webContents.send('action', 'exiting');
        }
    });

    win.webContents.openDevTools();
    win.loadURL(`file://${__dirname}/index.html`);
    win.show();
}


//监听ipc通信
ipcMain.on("closeApp", () => {
    app.quit();
});

//监听歌曲右键的方法
ipcMain.on("rightMouseClick", (event, args) => {
    //歌曲右键了生成菜单
    if (settingsWindow) {
        return;
    }
    settingsWindow = new BrowserWindow({
        frame: false,
        height: 300,
        resizable: false,
        width: 300
    });

    settingsWindow.loadURL(`file://${__dirname}/setting.html`);

    settingsWindow.on('closed', () => {
        settingsWindow = null;
    });
    //窗口失去焦点，隐藏
    settingsWindow.on('blur', () => {
        settingsWindow.close();
    });
});