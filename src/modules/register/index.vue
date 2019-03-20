<template>
    <div class="main">
        <header><h2>加入我们&nbsp;就医无忧</h2></header>
        <div class="registerBox">
            <p>
                <span class="hintInfor">手机</span>
                <input type="tel" placeholder="手机号" v-model="mobile" class="register_input">
            </p>
            <p style="position: relative;">
                <span class="hintInfor">短信验证码</span>
                <input type="tel" placeholder="短信验证码" v-model="mobileCode" class="register_input">
                <button class="getCode" @click="getCode" :disabled="codeState">{{codeText}}</button>
            </p>
            <p>
                <span class="hintInfor">登录密码</span>
                <input type="password" placeholder="密码由8-16位字母、数字、字符组合组成" v-model="password" class="register_input">
            </p>
        </div>
        <div class="register_box">
            <button class="registerBtn" @click="register">注册</button>
        </div>
    </div>
</template>
<script>
import md5 from 'js-md5';
export default {
    name: 'Register',
    data:function(){
        return {
            mobile:"",
            mobileCode:"",
            password:"",
            codeState:false,
            codeText:"获得验证码",
            timerObj:null,
            openId:"",
        }        
    },
    methods:{
        //跳转注册信息
        lookprotocol(){
            this.$router.push({
                path:"/registerProtocol"
            })
        },
        //获得短信验证码
        getCode(){
            if(!this.mobile){
                this.$toast('请输入手机号');
                return false
            }
            if(!/^1[34578]\d{9}$/.test(this.mobile)){
                this.$toast('手机号码格式错误');
                return false
            }
            this.codeState=true;
            this.codeText="验证码获取中"
            this.$axios({
                method:'post',
                url:this.URLS.get_mobile_code,
                params:{
                    mobile:Utils.encrypt(this.mobile,this.URLS.aesPassword),
                },
                headers:{'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'}
            }).then(
                (res)=> {
                    this.$layer.closeAll();
                    if(res.data.state==200){
                        this.timerCode();
                        this.$toast('验证码发送成功');
                    }else{
                        this.codeState=false
                        this.codeText="获得验证码"
                        this.$toast(res.data.msg)   
                    }
                }
            ).catch(
                (err)=>{
                    this.codeState=false
                    this.codeText="获得验证码"
                    this.$toast("验证码获取失败");
                }
            )     
        },
        //注册register
        register(){
            // if(!this.mobile){
            //     this.$toast("请输入手机号")
            //     return false
            // }
            // if(!this.mobileCode){
            //     this.$toast("请输入短信验证码")
            //     return false
            // }
            // if(!this.password){
            //     this.$toast("请输入密码")
            //     return false
            // }
            // if(!/^[0-9a-zA-Z\-!+_@#$%^&*=.?]{8,16}$/.test(this.password)){
            //     this.$toast("密码格式错误")
            //     return false
            // }
            this.$indicator.open({
                text: '注册中...',
                spinnerType: 'snake'
            });
            this.$axios({
                method:'post',
                url:this.URLS.reg_in_url,
                params:{
                    mobile:this.mobile,
                    password:md5(this.password),
                    // mobileCode:this.mobileCode,
                    // openId:this.openId
                },
                headers:{'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'}
            }).then(
                (res)=> {
                    this.$indicator.close();
                    if(res.data.status==200){
                        this.codeState=true
                        this.$toast("注册成功");
                        window.location.href="./index.html#/home"
                    }else{
                        this.codeState=false
                        this.$toast("res.data.msg");
                    }
                }
            ).catch(
                (err)=>{
                    this.$indicator.close();                 
                    this.codeState=false
                    this.codeText="获得验证码"
                    this.$toast("注册失败");
                }
            )
        },
        //获得验证码定时
        timerCode(){
            var that=this,num=60;
            that.timerObj=setInterval(()=>{
                that.codeText=num+"s"
                num--
                if(num<0){
                    that.codeState=false
                    that.codeText="获得验证码"
                    clearInterval(that.timerObj)
                }
            },1000)
        }
    },
}
</script>
<style scoped>
    .main{
        height: 100vh;
        background-color: #fff;
    }
    header{
        padding-top:30px;
    }
    header h2{
        color:#424242;
        font-size: 32px;
        padding:0 8vw;
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
        padding-top: 50px;
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
        text-align: center;
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

