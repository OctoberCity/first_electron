var {
    BrowserWindow,
    app,
    ipcMain,
} = require("electron");
const path = require("path");

let win;
let settingsWindow;


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
    require(path.join(__dirname, 'mainProcess/loadnetdata.js'));
    createMainwindow(); 
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

 