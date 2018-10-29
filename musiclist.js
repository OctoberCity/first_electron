const fs= require("fs");
const path= require("path");
const fileArray = fs.readdirSync("D:/CloudMusic/"); 
console.log(fileArray);
const musiclist =document.getElementById("list");
const html5Audio=document.getElementById("htmlAudio");
//给每个文件添加点击事件
function dispalymusic(filename){
	console.log("点击事件");
   htmlAudio.src="D:/CloudMusic/"+filename;
}
if(fileArray){
	let list='';
	fileArray.forEach((item,index)=>{
	 list+="<p id ='musicfile' class='musicfile'>"+item+"</p>"
	});
	musiclist.innerHTML=list;
	const musicfile=document.getElementsByClassName("musicfile");
	//返回集合非数组不能使用forEach(),有序集合; 
     for(let i=0;i<musicfile.length;i++){
	musicfile[i].addEventListener("click",(event)=>{ 
		html5Audio.src=path.join("D:\CloudMusic",event.srcElement.innerHTML);
		htmlAudio.play(); 
});
}
}


