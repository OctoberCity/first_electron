<template>
        <div id="configList"> 
            <p class="ListTitle">推荐</p> 
            <ul>
                <li><i class="el-icon-headset"></i>发现音乐</li>
                <li> <i class="el-icon-headset"></i>私人FM</li>
                <li> <i class="el-icon-headset"></i>视频</li>
                <li><i class="el-icon-headset"></i>朋友</li>
            </ul>
            <p class="ListTitle">我的音乐</p> 
            <ul>
                <li><i class="el-icon-headset"></i>本地音乐</li>
                <li> <i class="el-icon-headset"></i>下载管理</li> 
            </ul>
        </div>
    </template>
    
    <script> 
        export default {
            name: 'configList',
            components: { 
            },
            data() {
                return {
                   
                }
            },
            mounted() {},
            methods: {}
        }
    </script>
    <style scoped> 
    #configList { 
        background-color: aqua
    }
    .ListTitle{
        font-size:11px;
        margin-left:10px;
        padding:10px 0  ;
    }
    li {
        font-size:13px;
        margin-left:15px;
        padding: 10px 0 ;
    }
    li i {
        margin-right: 8px;
    }
    </style>