<template>
    <div>
        <!-- 头部头像 -->
        <div class="header_img clearFloat" @click="routerTomyCenter">
            <div class="user_pic">
                <img src="../../assets/imgs/doctorheader.png" alt="头像">
            </div>
            <div class="name_mobile">
                <h4>{{$store.state.userInfor.name}}</h4>
                <p>当前登录：{{hiddenMobile}}</p>
            </div>
            <i class="iconfont icon-youjiantou"></i>
        </div>
        <!-- 功能模块 -->
        <ul class="function_list clearFloat">
            <li>挂号订单</li>
            <li>缴费订单</li>
        </ul>
        <!-- 就诊人列表 渲染-->
        <div class="middle_box">
            <div class="title">就诊人</div>
            <ul class="patient_list">
                <li class="item_list clearFloat" style="margin-top:4px;" :key="index" v-for="(item , index) in $store.state.patientList">
                    <div class="patient_left" @click="routerTopatientInfor">{{item.patientName}}<span>（{{item.number}}张卡）</span></div>
                    <div class="bindCard_right" @click="routerTobindCard">绑卡 <i class="iconfont icon-youjiantou" style="font-size:14px;"></i></div>
                </li>
            </ul>
            <div class="footer_btn">
                <button class="addPatient" @click="routerToaddPatient">+添加就诊人</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'My',
    data:function(){
        return {
           
        }        
    },
    props:{
        mobile:{
            type:String
        }
    },
    methods:{
        //添加就诊人
        routerToaddPatient(){
            this.$router.push({
                path:"/addPatient",
            }); 
        },
        routerTobindCard(){
            this.$router.push({
                path:"/bindCards",
            }); 
        },
        routerTopatientInfor(){
            this.$router.push({
                path:"/patientInfor",
            }); 
        },
        routerTomyCenter(){
            this.$router.push({
                path:"/myCenter"
            })
        }
    },
    mounted:function(){
        
    },
    beforeCreate () {

    },
    filters:{
        hiddenMobile:function(value){
            return value.substring(0,3)+"****"+value.substring(8,11);
        }
    }
}
</script>
<style scoped>
    /*我*/
    .header_img{
        padding:24px 5vw;
        background-color: #fff;
    }
    .header_img .iconfont{
        float: right;
        margin-top: 30px;
    }
    .user_pic{
        float: left;
    }
    .user_pic img{
        width: 16vw;
    }
    .name_mobile{
        float: left;
        margin-left: 15px;
        font-size: 18px;
        margin-top: 6px;
    } 
    .name_mobile h4{
        font-weight: 600;
    }
    .name_mobile p{
        color: #8b8b8b;
        font-size: 15px;
        line-height: 30px;
    }
    .function_list{
        background-color: #fff;
        padding: 12px 5vw;
    }
    .function_list li{
        float: left;
        font-size: 14px;
        color: #484848;
    }
    .middle_box{
        margin-top:12px;
        padding: 0 5vw;
        background-color: #fff;
        font-size: 15px;
    }
    .title{
        line-height: 50px;
        height: 50px;
        text-align: left;
        border-bottom: 1px solid #e3e3e3;
    }
    .patient_list{
        padding-top:12px;
        padding-bottom:12px;
        background-color: #fff;
    }
    .item_list{
        line-height: 50px;
        height: 50px;
        text-align: left;
        font-weight: 600;
    }
    .item_list .patient_left{
        float: left; 
    }
    .item_list .bindCard_right{
        float: right;
        font-weight: 500;
        color: #808080; 
    }
    .item_list span{
        font-size: 12px;
        font-weight: 500;
    }
    .item_list i{
        transform: rotate(180deg);
    }
    .footer_btn{
        padding-bottom: 12px;
        text-align: center;
        background-color: #fff;
    }
    .addPatient{
        width: 90vw;
        text-align: center;
        background-color: #fff;
        border:1px #d3d3d3 dashed;
        line-height: 40px;
        color: #464646;
        border-radius: 5px;
        font-size: 15px;
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
