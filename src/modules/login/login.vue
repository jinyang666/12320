<template>
    <div>
        <header>
            <div class="logoBox">
                <img src="../../assets/imgs/logo.png" alt="logo">
            </div>
        </header>
        <div class="login">
            <div style="position:relative;">
                <i class="iconfont icon-my"></i>
                <input type="tel" 
                    placeholder="请输入手机号码" 
                    v-model.trim="phone"
                    errortip="请输入正确的号码" 
                    class="login-input" 
                    autocomplete="off"/>
            </div>
            <div style="position:relative;">
                <i class="iconfont icon-lock"></i>
                <input type="password"                         
                    v-model.trim="password"
                    class="login-input" 
                    placeholder="请输入密码" 
                    autocomplete="off"/>
            </div>
        </div>
        <div style="text-align:center;">
            <button class="loginBtn" @click="login">登录</button><br>
            <button class="register_btn" @click="register">账号注册></button>
        </div>
        <div class="footer">
            <span style="margin-right:6px;"></span>
            <img src="../../assets/imgs/logo-small.png" alt="logo">中国铁建股份有限集团
            <span style="margin-left:6px;"></span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data:function(){
        return {
            phone:"",
            password :"",
        }        
    },
    props: {},
    components:{
       
    },
    methods:{
        //登录接口
        login:function(){
            if(!this.phone){
                this.$layer.closeAll();
                this.$layer.msg("请输入手机号");
                return false;
            }
            if(!this.password){
                this.$layer.closeAll();
                this.$layer.msg("请输入密码");
                return false;
            }
            this.$layer.open({type:2,content:"登录中...",shadeClose:false,});
            this.$axios({
                method:'post',
                url:this.URLS.Login_in_url,
                params:{
                    username:this.phone,
                    password:this.password
                },
                auth: {
                    username: 'dcloud-client-auth',
                    password: 'wynkClientSecret'
                },
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                }
            }).then(
                (res)=> {
                    this.$layer.closeAll();
                    if(res.data.flag==0){
                        this.$layer.msg("登录成功");
                        window.location.href="./index.html";
                    }else if(res.data.flag==1){
                        this.$layer.msg("手机号或密码错误");
                    }else{
                        this.$layer.msg("系统错误");
                    }
                }
            ).catch(
                ()=>{
                    this.$layer.closeAll();
                    this.$layer.msg("系统错误");
                }
            )
        },
        register:function(){
            window.location.href="./register.html#/basicInfor";
        }
    },
    mounted(){
        let h=document.documentElement.clientHeight-document.querySelector(".loginBtn").offsetTop-126;
        document.querySelector(".footer").style.marginTop=h+"px";
    },
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-color:#fff;');
        document.body.addEventListener('touchstart', function () {});

    }
}
</script>
<style scoped>
    header{
        text-align: center;
        padding-top: 60px;
    }
    .logoBox{
        margin:0 auto;
        width: 130px;
    }
    .logoBox img{
        width: 100%;
    }
    .login{
        margin-top: 60px;
        text-align: center;
    }
    .login .iconfont{
        color: #ababab;
        font-size: 18px;
        position: absolute;
        left: 15vw;
        top: 32px;
    }
    .login-input {
        width: 73vw;
        border-bottom: 1px solid #e3e3e3;
        padding: 12px 0px 12px 30px;
        margin-top: 20px;
        display: inline-block;
        border-radius: 0px;
        font-size: 16px;
    }
    .loginBtn {
        margin-top: 30px;
        width: 73vw;
        background-color: #ff6666;
        height: 40px;
        line-height: 40px;
        color: #fff;
        text-align: center;
        font-weight: 600;
        border-radius: 20px;
        font-size: 16px;
    }
    .loginBtn:active{
        background-color: #dfdfdf;
    }
    .register_btn{
        background-color: transparent;
        font-size: 15px;
        color: #adadad;
        margin-top: 18px;
    }
    .register_btn:active{
        color: #ff6666;
    }
    .footer{
        text-align: center;
        color: #b7b7b7;
        font-size: 14px;
    }
    .footer img{
        width: 30px;
        margin-right: 5px;
        vertical-align: middle;
    }
    .footer span{
        display: inline-block;
        width: 50px;
        height: 1px; 
        background-color: #b7b7b7;
        vertical-align: middle;
    }
</style>