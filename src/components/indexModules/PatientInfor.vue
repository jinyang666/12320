<template>
	<div>
		<ul class="fillList">
	        <li class="clearFloat">
	            <span>姓名</span>
	            <input class="inputType1" maxlength="6" type="text" placeholder="请填写本人真实姓名">
	        </li>
	        <li class="clearFloat">
	            <span>证件类型</span>
	            <p>身份证</p>
	        </li>
	        <li class="clearFloat">
	            <span>证件号码</span>
	            <input class="inputType1" type="text"  placeholder="请填写本人的证件号码">
	        </li>
	        <li class="clearFloat">
	            <span>常驻城市</span>
	            <i class="iconfont icon-youjiantou" style="font-size:15px;"></i>
	            <input class="inputType1" id="cityId" value="内蒙古 呼和浩特" type="text" unselectable="on" onfocus="this.blur()"  placeholder="请填写证件号码">
	        </li>
	    </ul>
	    <div class="btnBox">
			<button class="public_btn" @click="deletePatient">删除</button>
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
        deletePatient(){
        	this.$layer.open({
                content:"确定要删除该就诊人吗?",
                className: 'popuo-login',
                btn:["确定","取消"],
                yes: function(index){
                    layer.close(index);
                    var loading=layer.open({type: 2,content: '删除中...',shadeClose:false,shade: 'background-color: rgba(0,0,0,0.35)'})
                }
            })
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
	.fillList{
		padding:0 3vw;
		background-color: #fff;
	}
	.fillList li{
	    line-height:60px;
	    border-bottom: 1px solid #e8e8e8;
	}
	.fillList span{
		float:left;
		font-size: 15px;
		font-weight: 600;
	}
	.fillList p{
		float: right;
		font-size: 15px;
	}
	.fillList i{
		float: right;
		margin-left: 8px;
		vertical-align: middle;
		font-size: 18px;
	}
	.inputType1{
		font-size: 15px;
		float: right;
		padding: 12px 0;
	    width:60vw;
	    text-align: right;
	    margin-top: 10px;
	}
	.btnBox{
		text-align: center;
		padding:25px 0px;
	}
	.middle_line{
		color: #959595;
		text-align:center;
	}
	.middle_line span{
		display: inline-block;
		width: 40vw;
		height: 1px;
		background-color:#e9e9e9; 
		vertical-align: middle;
	}
	.public_btn{
		width: 100vw;
	    height: 45px;
	    line-height: 45px;
	    text-align: center;
	    box-sizing: border-box;
	    font-size: 15px;
	    background-color: #fff;	    
	    color: #e74f4f;
	}

</style>