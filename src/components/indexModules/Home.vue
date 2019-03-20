<template>
    <div>
        <div class="header">
            <!-- 预约挂号跳转 -->
            <div class="function_list clearFloat" @click="reg">
                <div class="header_img">
                    <img src="../../assets/imgs/index2.png" alt="图片">
                </div>
                <div class="bottom_infor">
                    <h4>预约挂号</h4>
                    <p>内蒙古多家重点医院</p>
                </div>
                <i class="iconfont icon-youjiantou"></i>
            </div>
            <div class="function_list clearFloat">
                <div class="header_img">
                    <img src="../../assets/imgs/index2.png" alt="图片">
                </div>
                <div class="bottom_infor">
                    <h4>医疗缴费</h4>
                    <p>一键缴费</p>
                </div>
                <i class="iconfont icon-youjiantou"></i>
            </div>
        </div>
        <ul class="module_list clearFloat">
            <li>
                <img src="../../assets/imgs/index3.jpg" alt="图片">
                <p>智能导诊</p>
            </li>
            <li>
                <img src="../../assets/imgs/index3.jpg" alt="图片">
                <p>检验检查</p>
            </li>
            <li>
                <img src="../../assets/imgs/index3.jpg" alt="图片">
                <p>检验检查</p>
            </li>
            <li>
                <img src="../../assets/imgs/index3.jpg" alt="图片">
                <p>住院管理</p>
            </li>
        </ul>
        <div class="banner">
            <img src="../../assets/imgs/banner.jpg" alt="头像"> 
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
        reg(){
            window.location.href="./registration.html#/hospitalList"
        }
    },
    mounted:function(){
        
    },
    beforeCreate () {
        
    },
}
</script>
<style scoped>
    /*我*/
    .header{
        padding:18px 0;
        background-color: #fff;
    }
    .function_list{
        padding: 12px 5vw;
    }
    .header_img{
        background-color: #fff;
        float: left;
    }
    .header_img img{
        width: 10vw;
        margin-top: 6px;
    }
    .bottom_infor{
        float: left;
        font-size: 18px;
        margin-left: 12px;
    } 
    .bottom_infor h4{
        font-weight: 550;
    }
    .bottom_infor p{
        color: #8b8b8b;
        font-size: 15px;
        line-height: 30px;
    }
    .function_list i{
        float: right;
        margin-top: 20px;
    }
    /*模块列表*/
    .module_list{
        background-color: #fff;
        padding: 0 5vw 8px;
    }
    .module_list li{
        float: left;
        font-size: 14px;
        color: #484848;
        width: 22.5vw;
        text-align: center;
        color: #585757;
    }
    .module_list li p{
        line-height: 30px;
    }

    .module_list img{
        width: 10vw;
    }
    /*footer*/
    .banner{
        background-color: #fff;
        margin-top: 12px;
        text-align: center;
        padding:12px;
    }
    .banner img{
        width: 92vw;
        border-radius: 6px;

    }
</style>
