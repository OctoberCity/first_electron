const koa =require("koa");
const path=require("path"); 
const app = new koa();
const mongoose=require("mongoose"); 
const route =require("koa-route"); 
const koaBody = require('koa-body');
const koaJwt =require("koa-jwt");
mongoose.connect('mongodb://localhost:27017/myMusic');
 
const  staticServer = require('koa-static'); 

 
app.use(staticServer(path.join(__dirname,'public'))); 
 

app.use(koaJwt({secret:'hjwscrazy'}).unless({
	path:allowPath //数组中的路径不需要通过jwt验证
}));
app.use(koaBody({
	multipart:true, // 支持文件上传
	formidable:{
		uploadDir:path.join(__dirname,'public/upload/'), // 设置文件上传目录
		keepExtensions: true,    // 保持文件的后缀
		maxFieldsSize:2 * 1024 * 1024, // 文件上传大小 
	}
})); 

 
  
app.use(route.get('/chatList',async(ctx)=>{  
	await ctx.render('chatList',{});
})); 
app.use(route.get('/chat',async(ctx)=>{
	await ctx.render('chat', ctx.query);
}));



 