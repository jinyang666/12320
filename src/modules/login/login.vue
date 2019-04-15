<template>
    <div>
        <header class="header_nav">
            12320登录
        </header>
        <div class="login">
            <div style="position:relative;">
                <i class="iconfont icon-my"></i>
                <input type="tel" 
                    placeholder="请输入手机号码" 
                    v-model.trim="mobile"
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
            <button class="register_btn" @click="register">账号注册></button><br>
        </div>
    </div>
</template>
<script>
import md5 from 'js-md5';
export default {
    name: 'Login',
    data:function(){
        return {
            mobile:"",
            password :"",
            urlData:"",
        }        
    },
    methods:{
        //登录接口
        login:function(){
            if(!this.mobile){
                this.$toast("请输入手机号")
                return false;
            }
            if(!(/^1[34578]\d{9}$/.test(this.mobile))){
                this.$toast("手机号码有误，请重填")
                return false; 
            } 
            if(!this.password){
                this.$toast("请输入密码")
                return false;
            }
            this.$indicator.open({
                text: '登录中',
                spinnerType: 'snake'
            });
            this.$axios({
                method:'post',
                url:this.URLS.login_in,
                auth: {
                    username: 'dcloud-client-auth',
                    password: 'wynkClientSecret'
                },
                params:{
                    username:this.mobile,
                    password:md5(this.password)
                },
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                }
            }).then(
                (res)=> {
                    this.$indicator.close();
                    if(res.data.status==200){
                        this.$toast("登录成功");
                        // this.$tool.addStorage("Authorization",res.data.data.access_token);
                        // window.location.href="./index.html#/home"
                    }
                }
            ).catch(
                (error)=>{
                    this.$indicator.close();
                    this.$toast(error.response.data.message)
                }
            )
        },
        //跳转注册
        register:function(){
            window.location.href="./register.html#/register?openId="+this.urlData.openId;
        },
        //获得页面url参数
        UrlSearch:function () {
            var name,value,obj={};
            var str=location.href; //取得整个地址栏
            var num=str.indexOf("?")
            str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]
            var arr=str.split("&"); //各个参数放到数组里
            for(var i=0;i < arr.length;i++){
                num=arr[i].indexOf("=");
                if(num>0){
                    name=arr[i].substring(0,num);
                    value=arr[i].substr(num+1);
                    obj[name]=value;
                }
            }
            return obj;
        },
        loginCode(){
            window.location.href="./loginCode.html?openId="+this.urlData.openId
        }
    },
    mounted(){
        this.urlData=this.UrlSearch()
    },
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-color:#fff;');
    }
}
</script>
<style scoped>
    .header_nav{
        text-align: center;
        padding-top: 40px;
        font-size: 25px;       
    }
    .header_nav div{
        float: left;
    }
    .logoBox{
        margin:0 auto;
        width: 130px;
    }
    .login{
        margin-top: 60px;
        text-align: center;
    }
    .login .iconfont{
        color: #ababab;
        font-size: 18px;
        position: absolute;
        left: 10vw;
        top: 32px;
    }
    .login-input {
        width: 80vw;
        border-bottom: 1px solid #e3e3e3;
        padding: 12px 0px 12px 30px;
        margin-top: 20px;
        display: inline-block;
        border-radius: 0px;
        font-size: 16px;
    }
    .loginBtn {
        margin-top: 40px;
        width: 80vw;
        background-color: #81e4d2;
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
        color: #81e4d2;
        font-weight: 600;
        margin-top: 18px;
    }
    .register_btn:active{
        color: #dfdfdf;
    }
</style>

