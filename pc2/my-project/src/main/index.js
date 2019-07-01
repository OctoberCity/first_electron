import { app, BrowserWindow ,Tray,Menu} from 'electron'
const glob = require('glob');
const path = require('path');



/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow;
let tray =null;
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`


loadOthers();
// 监听应用准备事件
app.on('ready', createWindow)

// 监听最后一个窗口关闭，应用退出事件
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
function loadOthers () {
  const files = glob.sync(path.join(__dirname, 'main/**/*.js'))
  files.forEach((file) => { require(file) })
}

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 583,
    useContentSize: true,
    width: 1200,
    frame: false,
    transparent: true
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
  mainWindow.setThumbarButtons([
    {
      tooltip: 'button1',
      icon: path.join(__dirname, 'phone.png'),
      click () { console.log('button1 clicked') }
    }, {
      tooltip: 'button2',
      icon: path.join(__dirname, 'phone.png'), 
      click () { console.log('button2 clicked.') }
    }
  ])
 tray = new Tray(path.join(__dirname, 'phone.png'))
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' }, 
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu);
}

