<template>
    <div>
        <div class ="header">
            <button class="btn2 public_btn">添加就诊卡</button>
        </div>
        <!-- 新就诊卡页面 -->
        <div class="addNewCardBox">
            <div class="clearFloat"> 
                <span class="titleSpan">医院</span>
                <span class="chooseHospital">点击选择医院<i class="iconfont icon-youjiantou"></i></span>
            </div>
            <div class="clearFloat">
                <span class="titleSpan">就诊卡</span>
                <input type="text" class="tipInfor" placeholder="如不填由系统创建">
            </div>
            <button class="saveBtn">保存</button>
        </div>
        <!-- title -->
        <div class="title">
            就诊卡<span>(2张)</span>
        </div>
        <!-- 已绑定就诊卡列表 -->
        <ul class="cardList">
            <li>
                <h4 class="hospital_name">
                    包头中心医院
                </h4>
                <div class="card_number">
                    4392853
                </div>
                <div class="bottom_infor clearFloat">
                    <i class="iconfont icon-erweima1"></i>
                    <i class="iconfont icon-tiaoxingma"></i>
                     <button class="remove_bind" @click="removeBind">解绑</button>
                </div>
            </li> 

            <li>
                <h4 class="hospital_name">
                    包头中心医院
                </h4>
                <div class="card_number">
                    4392853
                </div>
                <div class="bottom_infor clearFloat">
                    <i class="iconfont icon-erweima1"></i>
                    <i class="iconfont icon-tiaoxingma"></i>
                    <button class="remove_bind" @click="removeBind">解绑</button>
                </div>
            </li> 
        </ul>
        <!-- 二维码和条形码放大图 -->
        <div class="layer_img" style="display: none;">
            <div class="layer_img_box">
                <img src="" alt="验证码">
            </div>
        </div>     
    </div>
</template>
<script>
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
        
    },
    methods:{
        //解除绑卡
        removeBind(){
            this.$layer.open({
                content:"确定要解除绑定吗?",
                className: 'popuo-login',
                btn:["确定","取消"],
                yes: function(index){
                    layer.close(index);
                    var loading=layer.open({type: 2,content: '解绑中...',shadeClose:false,shade: 'background-color: rgba(0,0,0,0.35)'});
                    
                }
            })
        }
    },
    mounted:function(){
        
    },
    beforeCreate () {
        console.log("重新加载")
        document.querySelector('body').setAttribute('style', 'background-color:#f0f0f0;')
    }
}
</script>
<style scoped>
.header{
    padding-top: 20px;
    text-align: center;
}

.public_btn{
    width: 94vw;
    height: 45px;
    border-radius: 6px;
    line-height: 45px;
    text-align: center;
    box-sizing: border-box;
    font-size: 15px;
}
.btn{
    background-color: #2ed0bb;
    color: #fff;
}
.btn2{
    background-color: #fff;     
    color: #131313;
    border:1px solid #e0e0e0;
}
/*绑定新卡*/
.addNewCardBox{
    background-color: #fff;
    width: 94vw;
    margin:12px auto;
    padding:12px 12px 0 12px;
    border-radius:6px;
}
.addNewCardBox div{
    line-height: 40px;
}
.addNewCardBox .titleSpan{
    color: #131313;
    font-weight: 600; 
}
.chooseHospital{
    float: right;
    font-size: 15px;
    color: #838383;
}
.chooseHospital .iconfont{
    color: #838383;
    margin-left: 6px;
    font-size: 15px;
}
.tipInfor{
    padding:12px 0;
    float: right;
    text-align: right;
    font-size: 15px;
}
.saveBtn{
    border-top:1px dashed #d8d8d8;
    width: 90vw;
    text-align: center;
    color: #0cad97;
    line-height: 45px;
    height: 45px;
    margin-top: 6px;
}

/*titile*/
.title{
    padding:0 5vw;
    line-height: 50px;
    color: #1f1f1f;
    font-weight: 600;
}
.title span{
    font-size: 14px;
    font-weight: 500;
    margin-left: 6px;
}
/*绑卡列表*/
.cardList{
    padding: 0 3vw;
}
.cardList li{
    background-color: #fff;
    box-sizing: border-box;
    padding:12px;
    border-radius:6px;
}
.cardList li+li{
    margin-top: 12px;
}
.hospital_name{
    line-height: 30px;
    font-size: 18px;
    color: #1f1f1f;
    font-weight: 600;
}
.card_number{
    line-height: 24px;
    font-size: 15px;
    color: #828282;
    padding-bottom: 12px;
}

.bottom_infor{
    padding:12px 12px 0 12px;
    border-top:1px dashed #d8d8d8;
}
.bottom_infor .iconfont{
    font-size: 25px;
    color: #8f8f8f;
}
.remove_bind{
    float: right;
    color: #0cad97;
}






/*二维码 条形码放大图*/
.layer_img{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.8);
}
.layer_img_box{
    position:absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%,-50%);
    width: 80vw;
}
.layer_img_box img{
    width: 100%;
}
/*莫泰层*/
.maskLayer{
    position:fixed;
    top:0;
    left: 0;
    height:100%;
    width:100%;
    z-index: 99;
    background-color: rgba(0,0,0,0.48);
}
/*弹出层*/
.layerBox{
    position:fixed;
    bottom:-100%;
    left: 0;
    height:46vh;
    width:100%;
    z-index: 199;
    background-color: #fff;  
    transition:all 0.3s linear; 
    -webkit-transition:all 0.3s linear;
}
.relationshipList{
    height: 40vh;
    overflow:auto;
    background-color: #fff;
    overflow-scrolling: touch;
    -webkit-overflow-scrolling:touch;
}
.relationshipList li{
    border-bottom: 1px solid #f1f1f1;
    -webkit-tap-highlight-color: transparent;
    color:#666;
    line-height:50px;
    color: #000000;
    height:50px;
    font-size:16px;
    text-align: center;
    padding-left: 3vw;
}
.relationshipList li:active{
    background-color:#dfdfdf;
}
.selectListTitle{
    line-height:6vh;
    height:6vh;
    font-size: 15px;
    padding:0 3vw;
    position:relative;
    background-color: #f8f8f8;
}
.selectListTitle button{
    position: absolute;
    top: 0;
    right: 0;
    color:#0fad62;
    height:6vh;
    width: 50px;
    background-color:transparent;
}

</style>
