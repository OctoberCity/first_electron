<template>
    <div id="playbutton"> 
        <span @click="lastMusic" ><i class="last el-icon-caret-left"></i></span>
        <span  @click="controleMusic" ><i class="player el-icon-video-play"></i></span>
        <span   @click="nextMusic" ><i class="next el-icon-caret-right"></i></span>
    </div>
</template>

<script> 
    export default { 
        components: {
             
        },
        data() {
            return {
                ispayOrpurse:false
            }
        },
        mounted() {},
        methods: {
            lastMusic(){
                this.$emit("palyLastMusic",""); 
            }
            ,
            controleMusic(){
                this.ispayOrpurse = !this.ispayOrpurse; 
                this.$emit("controleMusic",this.ispayOrpurse);
             },
            nextMusic(){ 
            }

        }
    }
</script>
<style scoped> 
#playbutton {
  text-align: center;
}

#playbutton span {
 display: inline-block;
}

.last  {
    width:30px;
    height: 30px;
    border-radius: 15px;
    line-height: 30px;
    background-Color: #c22f30;
    color:#fff; 
}

.player  {
    width:34px;
    height: 34px;
    border-radius: 17px;
    line-height: 34px;
    background-Color: #c22f30;
    color:#fff;  
    margin:0 20px;
}

.next  { 
    width:30px;
    height: 30px;
    border-radius: 15px;
    line-height: 30px;
    background-Color: #c22f30;
    color:#fff; 
}
</style>