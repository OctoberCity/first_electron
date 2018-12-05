/*
这个模块是请求服务器的数据，包括
创建爱的歌单,收藏的歌单,我的收藏等，数据是从服务器后端koa返回mock数据

*/
const {
    net,remote
} = require("electron");
const path =require("path");
const fs =require("fs");
const jsmediatags =require("jsmediatags");

exports.getMylocalList=()=> {
    let data;
    const request = net.request({
        url: "http://192.168.17.126:7001/getgetMySongList"
    });
    request.on("response", (res) => {
        res.on("data", (chunk) => {
            console.log(chunk);
            data += chunk;
        });
        res.on("data", () => {
            //存入缓存

        });
    });

}
// 获得本地音乐列表
exports.getMylocalList=(global)=>{ 
    const fileArray = [1];// fs.readdirSync("D:/CloudMusic/"); 
    const filesInfoPromise=[];
    const filesInfo = [];
    fileArray.forEach(element => { 
        filesInfoPromise.push(new Promise((resolve,reject)=>{ 
            new jsmediatags.Reader("D:\\CloudMusic\\attraction.mp3")
            .read({
              onSuccess: (tag) => {   
                resolve(tag)
              },
              onError: (error) => { 
                reject(error)
              }
          });
        }));
    });
    Promise.all(filesInfoPromise)
    .then((resultarray)=>{
    // 复制给全局变  
    global.somedata.musicLocalList =  resultarray;
    })
    .catch((err)=>{ 
            console.log(err); 
    });

}
 