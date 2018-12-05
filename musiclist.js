
const {ipcRenderer,remote} = require('electron');
const fs= require("fs");
const path= require("path"); 
const musiclist =document.getElementById("trueMusicList");
const html5Audio=document.getElementById("htmlAudio");
//给每个文件添加点击事件
function dispalymusic(filename){ 
   htmlAudio.src="D:/CloudMusic/"+filename;
}
let list=musiclist.innerHTML;
if(fileArray){ 
	fileArray.forEach((item,index)=>{ 
	 list+="<tr class='musicfile'>"
     +"<td>"+(index>=10?''+index:'0'+index)+"</td>"
     +"<td>"+item+"</td>"
     +"<td>歌手</td>"
    +"<td>专辑</td>"
     +"<td>时长</td>"
     +"<td>大小</td>"
    +"</tr>"
	});
	musiclist.innerHTML=list;
	const musicfile=document.getElementsByClassName("musicfile");
	//返回集合非数组不能使用forEach(),有序集合; 
   for(let i=0;i<musicfile.length;i++){
	musicfile[i].addEventListener("click",(event)=>{  
		html5Audio.src=path.join("D:\CloudMusic",fileArray[i]); 
		htmlAudio.play(); 
      });
	//监听右键
	musicfile[i].addEventListener("mousedown",(event)=>{ 
		 if(event.button===2){
	    ipcRenderer.send("show-music-menu","right");
			} 
	});
 }

 
}

 //右键监听事件




