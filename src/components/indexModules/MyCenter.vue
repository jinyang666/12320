<template>
    <div class="main">
        <div>
            <div class="my_infor clearFloat">
                <div class="header_img_text">头像</div>
                <div class="header_img">
                    <img src="../../assets/imgs/doctorheader.png" alt="">
                    <i class="iconfont icon-youjiantou"></i>   
                </div>
            </div>
        </div>
        <div class="phone_box" @click="routerTochangePhone">
            <span class="text_key">修改手机号</span>
            <span class="phone_number">{{phone | hiddenMobile}}<i class="iconfont icon-youjiantou"></i></span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MyCenter',
    data:function(){
        return {
           phone:"13716242600"
        }        
    },
    props:{
        
    },
    methods:{
        routerTochangePhone(){
            this.$router.push({
                path:"/changePhone"
            })
        }
    },
    mounted:function(){
        
    },
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-color:#f0f0f0;')
    },
    filters:{
        hiddenMobile:function(value){
            return value.substring(0,3)+"****"+value.substring(8,11);
        }
    }
}
</script>
<style scoped>
    .my_infor{
        background-color: #fff;
        padding:12px 3.5vw;
    }
    .header_img_text{
        float: left;
        vertical-align: middle;
        font-weight: 600;
        margin-top: 20px;
    }
    .header_img{
        float: right;
        position:relative;
        padding-right: 30px;
    }
    .header_img img{
        width: 16vw;
    }
    .header_img i{
        position: absolute;
        right: 0;
        top: 30px;
        font-size: 14px;
        color: #666;
        margin-left: 20px;
        vertical-align: middle;
    }
    .phone_box{
        background-color: #fff;
        height: 50px;
        line-height: 50px;
        padding: 0 3.5vw;
        margin-top: 12px;
    }
    .text_key{
        float: left;
        font-weight: 600;
    }
    .phone_number{
        float: right;
        color: #666;
    }
    .phone_number i{
        color: #666;
        font-size: 14px;
        margin-left: 6px;
    }
</style>
