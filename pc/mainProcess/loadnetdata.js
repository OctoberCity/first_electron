/*
这个模块是请求服务器的数据，包括
创建爱的歌单,收藏的歌单,我的收藏等，数据是从服务器后端koa返回mock数据

*/
const {
    net,
    remote,
    ipcMain
} = require("electron");
const path = require("path");
const fs = require("fs");
const jsmediatags = require("jsmediatags");

const global = {
    num: 0, //本地歌曲列表数量
    newNum: 0,
    musicLocalList: {}, //本地歌曲列表
    myCreateMusicOrder: {}, // 获取我的歌单列表，通过在线获得
    

}


getMyOrderList = (event) => {
    let data;
   
    const request = net.request({
        url: "http://192.168.17.126:7001/userAccess/getImage"
    });
    // return Promise().then(()=>{})
    request.on("response", (res) => {
        res.on("data", (chunk) => { 
            data += chunk;
        });
        res.on("error", (error) => { 
        //    reject(error);
        });
        res.on("end", () => {
            //存入缓存
        event.returnValue= data.toString();
        });
    });
    request.end();
 
}
// 获得本地音乐列表
getMylocalList = ( ) => {
    const fileArray = fs.readdirSync("D:/CloudMusic/");
    const filesInfoPromise = [];
    const filesInfo = [];
    fileArray.forEach((element,index )=> {
        if (element.indexOf(".mp3") > 0 && index<20) { 
            filesInfoPromise.push(new Promise((resolve, reject) => {
                new jsmediatags.Reader(path.join("D:/CloudMusic/", element))
                    .read({
                        onSuccess: (tag) => { 
                            tag.musicName =  element; 
                            resolve(tag) 
                        },
                        onError: (error) => { 
                            console.log(error);
                        }
                    });
            }));
        }
    });
    return  Promise.all(filesInfoPromise)
        .then((resultarray) => { 
            global.musicLocalList = resultarray; 
            return global; 
        })
        .catch((err) => {
            console.log(err);
        });
}



// 主进程监听事件


// 返回本地歌曲列表
ipcMain.on('getmusicLocalList', (event, arg) => {
   getMylocalList() 
     .then((data)=>{
        event.returnValue= global.musicLocalList;
      }).catch((err)=>{
          console.log(err);
      });
    
})
//刷新本地歌曲列表
ipcMain.on('initMusicLocalList', (event, arg) => {
    if(!global.musicLocalList.length){
        getMylocalList();
    }
  
})

// 获得创建的歌单
ipcMain.on("myCreateMusicOrder",(event,arg)=>{
    if(!global.myCreateMusicOrder.length){ 
        getMyOrderList(event);
    }
});



 