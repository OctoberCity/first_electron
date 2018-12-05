const {
    BrowserWindow,
    Menu,
    MenuItem,
    ipcMain,
    app
} = require('electron')


const menu2 = new Menu();
menu2.append(new MenuItem({
    label: '新建菜单',
    type: 'checkbox',
    icon: './assets/app-icon/16.png',
    position:"center",
}))
const menu = new Menu()
menu.append(new MenuItem({
    label: '查看评论',
    icon: './assets/app-icon/16.png'
}));
menu.append(new MenuItem({
    label: '播放',
    icon: './assets/app-icon/16.png'

}));
menu.append(new MenuItem({
    label: '下一首播放',
    icon: './assets/app-icon/16.png'

}));
menu.append(new MenuItem({
    label: '收藏到歌单',
    icon: './assets/app-icon/16.png',
    submenu:menu2,

}));
menu.append(new MenuItem({
    label: '分享',
    icon: './assets/app-icon/16.png'

}));
menu.append(new MenuItem({
    label: '复制链接',
    icon: './assets/app-icon/16.png'

}));
menu.append(new MenuItem({
    label: '上传到我的音乐云盘',
    icon: './assets/app-icon/16.png'

}));
menu.append(new MenuItem({
    label: '打开文件所在目录',
    icon: './assets/app-icon/16.png'

}));
menu.append(new MenuItem({
    label: '从列表中删除',
    icon: './assets/app-icon/16.png'

}));
menu.append(new MenuItem({
    label: '从本地删除', 
    click:(item,focusedWindow)=>{
 

    }
}));

 
ipcMain.on('show-music-menu', (event,params) => {
    const win = BrowserWindow.fromWebContents(event.sender)
    menu.popup(win)
})