#### electron 开发网易云Pc端




#### 目录结构
-- pc
-- pc2/my-project
-- sdk-demo
-- server

- pc：最开始使用html去完成的，后来放弃了
- pc2/my-project:最近决定使用electron-vue去完成，毕竟自己不是干前端的这块的，想借此机会锻炼vue.好吧，我的css是真的烂。
- sdk-demo:调用百度语音的接入例子，是要后期接入这个项目中的
- server:也是一个的demo，一个koa聊天的例子，没什么东西

 准备在工作之余完成，分几步完成

 1. 
   完成目标：构造大体页面，并能获取服务器数据
   完成时间：6-9
   完成状态：90%
   完成截图如下：
   ![](https://github.com/OctoberCity/first_electron/static/1.png)
   
 2. 
   完成目标：实现登录页面，以及一些vue与electron的交互
   完成时间:6-14
   完成状态：10% 

 3.
    完成目标：音乐播放的交互逻辑，以及将网易服务端改写并入至项目中，目前调用网易api https://github.com/Binaryify/NeteaseCloudMusicApi 使用
    完成时间：6-15
    完成状态：10% 

 4. 
    完成目标：修改音乐源，除去收费歌曲之外不能听，将几个音乐源糅合，即网易也能听五月天周杰伦，换音乐源即可
    完成时间： 6-22   
    完成状态： 0%

 5.
    完成目标：读取本地音乐文件，有一个难点读取歌曲的时长，这是我没有把握的，而且在读取的时候，很慢，音乐时间的时长也暂时读取不到，要研究一下ffmpeg
    完成时间：6-22
    完成状态：5%

 6. 
    完成目标：嵌入百度语音识别，达成初步语音识别功能，这里比较麻烦的就是获取音频资源，以及轮询的音频截取的问题
    完成时间：233333，俺也不知道

  
  - 项目的重心是在语音达成多样播放模式，所以，网易的列表功能仅仅着重于音乐列表，直播视频的电台功能不搞。



