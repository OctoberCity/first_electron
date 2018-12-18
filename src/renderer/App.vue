<template>
    <div>
        <div class="app-head">
            <div class="app-head-inner">
                <router-link :to="{path: '/'}" class="head-logo">
                    <img src="./assets/logo.png">
                </router-link>
                <div class="history"><span class="go-history">
                        <</span> <span class="go-history">>
                    </span></div>
                <div class="search"><input type="text" class="search-box" value="搜索，歌曲，歌手，专辑" /></div>
                <div class="user-head">
                    <img src="./assets/logo.png" /><span class="username">{{username}}</span>
                </div>
                <div class="config-nav">
                    <ul class="nav-list">
                        <li class="config  "></li>
                        <li class="config  "></li>
                        <li class="config  "></li>
                        <li class="config  "></li>
                        <li class="config  "></li>
                        <li class="config  "></li>
                        <li class="config  "></li>
                        <li class="config  " @click="closeApp">x</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <div class="app-foot">
            <p>© 2016 fishenal MIT</p>
        </div>

    </div>
</template>

<script>
    const {
      ipcRenderer
    } = require('electron')
    export default {
      data: function () {
        return {
          isShowAbout: false,
          isShowLogin: false,
          isShowReg: false,
          userImage: '../assets/logo.png',
          username: '宇宙第一抖腿'
        }
      },
      methods: {
        closeApp: function () {
          ipcRenderer.send('closeApp')
        }
      }
    }
</script>

<style>
    /* http://meyerweb.com/eric/tools/css/reset/ 
     v2.0 | 20110126
     License: none (public domain)
  */

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }

    body {
        line-height: 1;
    }

    ol,
    ul {
        list-style: none;
    }

    blockquote,
    q {
        quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    body {
        background: #f0f2f5;
        font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
        font-size: 14px;
        color: #444;
    }

    .app-head {
        background: #c61e1e;
        color: #b2b2b2;
        height: 50px;
        line-height: 50px;
        width: 100%;
    }

    .app-head-inner {
        width: 1022px;
        margin: 0 auto;
    }

    .head-logo {
        float: left;
        margin-top: -2px;
        margin-top: -2px;
    }

    .history {
        float: left;
        padding: 0 10px;
    }

    .history .go-history {
        display: inline-block;
        padding: 0 4px 0 3px;
        cursor: pointer;
        color: #fff;
        font-size: 17px;
        font-weight: bold;
    }

    .history .go-history:hover {
        color: #000;
    }

    .search {
        float: left;
        text-align: center;
    }

    .search-box {
        background: #c61717;
        color: #e3e4e8;
    }

    .user-head {
        float: left;
    }

    .user-head img {
        margin-top: 5px;
        margin-right: 15px;
        width: 35px;
        height: 35px;
        border-radius: 18.5px;
    }

    .username {
        color: #fff;
        margin-top: -40px;
    }

    .config {
        font-size: 27px;
        color: #fff;
        cursor: pointer;
    }

    .head-nav {
        float: right;
    }

    .head-nav ul {
        overflow: hidden;
    }

    .head-nav li {
        cursor: pointer;
        float: left;
    }

    .app-foot {
        text-align: center;
        height: 80px;
        width: 100%;
        line-height: 80px;
        background: #e3e4e8;
        clear: both;
        margin-top: 30px;
    }

    .container {
        width: 1200px;
        margin: 0 auto;
    }
</style>