<template>
    <div class="login">
        <header><h2>加入12320</h2></header>
        <div class="registerBox">
            <p>
                <span class="hintInfor">手机</span>
                <input type="tel" v-model.trim="mobile" placeholder="请填写手机号码" class="register_input">
            </p>
            <p style="position: relative;">
                <span class="hintInfor">短信验证码</span>
                <input type="tel" v-model.trim="checkCode" placeholder="短信验证码" class="register_input">
                <button class="getCode">获取验证码</button>
            </p>
        </div>
        <div class="register_box">
            <button class="registerBtn" @click="register">注册</button>
        </div>
        <footer>注册即代表阅读并同意<a href="./service-protocol.html">服务条款</a></footer>
    </div>
</template>
<script>
export default {
    name: 'Register',
    data:function(){
        return {
            mobile:"",
            checkCode:"",
            password:"",
            sendVal: false,
        }        
    },
    methods:{
        //注册事件
        register:function(){
            var _this=this;
            if(!this.mobile){
                this.$layer.closeAll();
                this.$layer.msg("请输入手机号!");
                return false;
            }
            if(!this.checkCode){
                this.$layer.closeAll();
                this.$layer.msg("请输入短信验证码!");
                return false;
            }
            this.$layer.open({type:2,content:"注册中...",shadeClose:false,});
            this.$axios({
                method:'post',
                url:'/prescription-service/Userlogin/register',
                params:{
                    mobile:this.mobile,
                    password:md5(this.password),
                    checkCode:this.checkCode,
                    unionid:this.$route.query.unionid,
                    openId:this.$route.query.openId
                },
                headers:{'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'}
            }).then(
                (res)=> {
                    _this.$layer.closeAll();             
                    if(res.data.state==200){
                        _this.TOOL.setCookie("mobile",this.mobile);
                        _this.$layer.msg("注册成功!");
                    }else if(res.data.state==500){
                        _this.$layer.msg(res.data.msg)
                    }
                }
            )
        },
    },
    mounted(){
        let h=document.documentElement.clientHeight-document.querySelector(".registerBtn").offsetTop-126;
        document.querySelector("footer").style.marginTop=h+"px";
    },
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-color:#fff;');
        document.body.addEventListener('touchstart', function () {});

    }
}
</script>
<style scoped>
    .login{
        padding-top: 30px;
    }
    header h2{
        color:#424242;
        font-size: 30px;
        padding:0 8vw;
        margin-top: 50px;
        padding-bottom:50px;
    }
    .registerBox{
        padding: 0 8vw;
    }
    .registerBox p{
        padding-top: 30px;
        position: relative;
    }
    .register_input{
        width: 84vw;
        padding:10px 0;
        border-bottom: 1px solid #e3e3e3;
        font-size: 16px;
    }
    .register_input:focus{
        border-bottom: 2px solid #66ccba;
    }
    .hintInfor{
        display: none;
        position: absolute;
        line-height: 30px;
        top: 5px;
        left: 0;
        font-size: 14px;
        color:#66ccba;
    }
    .register_box{
        padding-top: 30px;
        text-align: center;
    }
    .registerBtn{
        width: 82vw;
        height: 40px;
        border-radius: 20px;
        background-color: #81e4d2;
        color: #fff;
        font-size: 16px;
    }
    .registerBtn:disabled{
        background-color: #dfdfdf;
    }
    .registerBtn:active{
        background-color: #dfdfdf;
    }
    .getCode{
        position: absolute;
        color: #2cbaa1;
        font-size: 16px;
        top: 37px;
        right: 0;
        background-color: #fff;
    }
    .getCode:disabled{
        color: #a7a7a7;
    }
    .getCode:active{
        color: #dfdfdf;
    }
    footer{
        margin-top: 50px;
        line-height: 40px;
        color: #969696;
        bottom: 0;
        width: 100%;
        text-align: center;
    }
    footer a{
        color: #2cbaa1;
        margin-left: 3px
    }
</style>
