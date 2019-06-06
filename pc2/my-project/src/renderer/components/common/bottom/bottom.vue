<template>
    <div id="bottom">
        <el-row>
            <el-col :span="4">
                <div>
                    <playerButton @controleMusic='controleMusic'></playerButton>
                </div>
            </el-col>
            <el-col :span="1">
                <div class="musicTime">
                    <span>{{music.currentTime}}</span>
                </div>
            </el-col>
            <el-col :span="10" :offset='1'>
                <div>
                    <playerBar :playOrPurse="music.isplay" :muteBar="music.muteBar" :isMute="music.isMute"
                        @musicTime="musicTime"></playerBar>
                </div>
            </el-col>
            <el-col :span="1">
                <div class="musicTime">
                    <span>{{music.allmusicTime}}</span>
                </div>
            </el-col>
            <el-col :span="1" :offset='4'>
                <div> 
                    <i class="el-icon-refresh-left"> </i>
                </div>
            </el-col>
            <el-col :span="1" >
                <div>
                    <i class="el-icon-document"></i>
                </div>
            </el-col>
            <el-col :span="1"  >
                <div>
                    <i class="el-icon-data-line"></i>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import playerButton from './playerButton.vue'
    import playerBar from './playerBar.vue'
    export default {
        name: 'bottom',
        components: {
            playerButton,
            playerBar
        },
        data() {
            return {
                music: {
                    isplay: false,
                    allmusicTime: '',
                    currentTime: '00:00'
                }
            }
        },
        mounted() {},
        methods: {
            // 控制音乐播放暂停
            controleMusic(data) {
                this.music.isplay = data;
            },
            musicTime(data) {
                this.music.currentTime = this.timeformat(data.currentTime)
                this.music.allmusicTime = this.timeformat(data.allmusicTime)
            },
            timeformat(time) {
                let hour = '00',
                    min = '00',
                    sec = '00',
                    times = 0;
                if (time > 3600) {
                    times = parseInt((time / 3600));
                    hour = times = 10 ? times : '0' + times;
                    time = time % 3600;
                }
                if (time > 60) {
                    times = parseInt((time / 60));
                    min = times >= 10 ? times : '0' + times;
                    time = time % 60;
                }
                sec = time >= 10 ? time : '0' + time;
                return `${hour}:${min}:${sec}`;
            }


        }
    }
</script>
<style scoped>
    #bottom {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        padding: 15px 20px 10px 20px;
        display: inline-block;
    }

    .musicTime {
        text-align: center;
        height: 40px;
        line-height: 40px;
    }
</style>