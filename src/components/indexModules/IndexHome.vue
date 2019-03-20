<template>
    <div>
        <div class="main">
            <!-- 首页 -->
            <Home
                v-show="state==1"
            ></Home>
            <!-- 我 -->
            <My 
                v-bind:mobile="mobile"
                v-show="state==2"
                >
            </My>
        </div>
        <!-- 底部区域 -->
        <footer>
            <div class="activeColor" :class="{'ac':state=='indexHome'}" @click="switchIndex(1)">
                <i class="iconfont icon-shouye"></i><br>
                <span>首页</span>
            </div>
            <div class="activeColor" :class="{'ac':state=='mySelf'}"  @click="switchIndex(2)">
                <i class="iconfont icon-buoumaotubiao03"></i><br>
                <span>我</span>
            </div>
        </footer>
    </div>
</template>
<script>
import My from "./My.vue"
import Home from "./Home.vue"
export default {
    name: 'indexHome',
    data:function(){
        return {
            mobile:"13716242600",
            state:'1'
        }        
    },
    props: {

    },
    components:{
        My,Home,
    },
    methods:{
        //添加就诊人
        switchIndex(index){
            this.state=index;
        }
    },
    mounted:function(){
        
    },
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-color:#f0f0f0;')
    }
}
</script>
<style scoped>
    .main{
        height: 100vh;
        overflow:auto;
        padding-bottom: 56px;
        box-sizing: border-box;
    }
    /*footer*/
    footer{
        position: absolute;
        bottom: 1px;
        width: 100%;
        height: 50px;
        border-top:1px solid #e3e3e3;
    }
    footer div{
        color: #818181;
        padding-top: 5px;
        text-align: center;
        color: #000;
        display: inline-block;
        width: 50vw;
        background-color: #fff;
        height: 50px;
    }
    footer .iconfont{
        color: #818181;
        font-size: 20px;
    }    
    footer span{
        color: #818181;
        font-size: 13px;
    } 
    footer .ac{
        color: #000;
    }
    footer .ac .iconfont{
        color: #000;
    }    
    footer .ac span{
        color: #000;
    } 
</style>
