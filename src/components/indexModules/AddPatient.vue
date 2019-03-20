<template>
	<div>
		<ul class="fillList">
	        <li class="clearFloat content">
	            <span>姓名</span>
	            <input class="inputType1" v-model.trim="patientInfor.patientName" maxlength="6" type="text" placeholder="请填写本人真实姓名">
	        </li>
	        <li class="clearFloat content">
	            <span>证件类型</span>
	            <p>{{patientInfor.idType}}</p>
	        </li>
	        <li class="clearFloat content">
	            <span>证件号码</span>
	            <input class="inputType1" type="text" v-model.trim="patientInfor.idNum" placeholder="请填写本人的证件号码">
	        </li>
	        <li class="clearFloat content">
	            <span>常驻城市</span>
	            <i class="iconfont icon-youjiantou" style="font-size:15px;"></i>
	            <input class="inputType1" id="cityId" value="内蒙古 呼和浩特" type="text" unselectable="on" onfocus="this.blur()"  placeholder="请填写证件号码">
	        </li>
	    </ul>
	    <div class="btnBox">
			<button class="public_btn btn" @touchstart="addPatient">保存</button>
		</div>
		<div class="middle_line">
			<span style="margin-right:6px;"></span>或<span style="margin-left:6px;"></span>
		</div>
	    <div class="btnBox">
			<button class="public_btn btn2">保存,并绑定就诊卡</button>
		</div>
	</div>
</template>
<script>
export default {
    name: 'My',
    data:function(){
        return {
            patientInfor:{
                patientName:"",
                idNum:"",
                city:"",
                idType:"身份证",
                id:"",
            }
        }        
    },
    props:{
        mobile:{
            type:String
        }
    },
    methods:{
        addPatient(){
            this.$indicator.open({
                text: '添加中',
                spinnerType: 'snake'
            });
            this.$axios({
                method:'post',
                url:this.URLS.login_in,
                params:this.patientInfor,
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                }
            }).then(
                (res)=> {
                    this.$indicator.close();
                    if(res.data.status==200){
                        this.$toast("就诊人添加成功");
                        this.$store.commit('addPatient',{name:this.patientInfor.patientName,idNum:this.patientName.idNum,number:"0"})
			            this.$router.go(-1); 
                    }
                }
            ).catch(
                (error)=>{
                    this.$indicator.close();
                    this.$toast(error.response.data.message)
                }
            )
			
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
	.btn:active{
		background-color: #22C7B2;
	}

</style>