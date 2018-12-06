// const formidable = require('formidable');
// const fs = require("fs");
// const path =require("path"); 
const jwt = require('jsonwebtoken');
// const sio =require("socket.io");


//实例化模型model
const People=require("../model/people.js");
 


//执行用户注册操作
exports.registerPeople=async(ctx)=>{
	const params=ctx.request.body; 
	const people={}; 
	people.username=params.username;
	people.password =params.password;
	people.id = new Date().getTime();//简单时间id 
	const files = ctx.request.files; 
	for (let key in files) { 
		const file = files[key];
		const servername=file.path.split("\\"); 
		people.headImageSrcName= servername[servername.length-1];
	}
	//数据库插入操作 
	await People.create(people);
	ctx.response.redirect('/');
};  

 

  
//执行登录操作，并生成一个sessionId
exports.dologin=async(ctx)=>{ 
	const params = ctx.request.body; 
	// 匹配数据库，判断登录
	const doc= await People.findOne(params);
	if(!doc){
		ctx.body={status:0,message:'查无此人'};
	}
	const user={id:doc.id,username:doc.username,src:doc.headImageSrcName};  
	//获得token
	const token = jwt.sign(user,'hjwscrazy', {expiresIn: '1h'});
	ctx.body={status:1,message:'有我的证件救命',token,id:doc.id,src:doc.headImageSrcName,username:doc.username};
};

//获取好友列表，所有在线列表
exports.chatPeopleList=async(ctx)=>{
	//获得请求中的request.userInfo
	const params=ctx.request.userInfo; 
	const doc= await People.findOne({id:params.id}); 
	ctx.body=doc.friendArray;
};

//添加好友
exports.addChatFriend=async(ctx)=>{
	const params=ctx.request.body; 
	const friend ={
		id:params.friendId,//好友id
		friendName:params.friendName,//好友用户名字
		friendImage:params.friendImage,//好友头像路径
	};
	//给自己添加好友 
	await People.update({id:ctx.request.userInfo.id},{'$push': {friendArray:friend}});  
	// 给朋友添加自己 
	await People.update({id:params.id},{'$push': {friendArray:ctx.request.userInfo}});  
	ctx.body = {status:1001};
};
