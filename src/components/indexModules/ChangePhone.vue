<template>
    <div class="main">
        <div style="padding:0 3vw;background-color:#fff;">  
            <div class="phone_box">
                <span class="text_key">新手机号</span>
                <input style="margin-left:20px;width:60vw;" type="tel" class="form_input" placeholder="请输入新手机号码">
            </div>
            <div class="phone_box" style="border:none;">
                <span class="text_key">验证码</span>
                <input style="margin-left:35px;width:40vw;" type="tel" class="form_input" placeholder="请输入验证码">
                <button class="get_code">获得验证码</button>
            </div>
        </div>
        <button class="btn">更换</button>
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
}
</script>
<style scoped>
    .btn{
        width: 94vw;
        margin-left: 3vw;
        height: 50px;
        border-radius: 6px;
        line-height: 50px;
        text-align: center;
        box-sizing: border-box;
        background-color: #2ed0bb;
        color: #fff;
        margin-top: 50px;
    }
    .get_code{
        color: #2ed0bb;
        float: right;
        height: 20px;
        line-height: 20px;
        border-left: 1px solid #e8e8e8;
        padding-left: 8px;
        margin-top: 15px;
    }
    .phone_box{
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #e8e8e8;
    }
    .text_key{
        float: left;
        font-weight: 600;
    }
    .form_input{
        padding:12px 0;
        text-align: left;
    }
</style>
