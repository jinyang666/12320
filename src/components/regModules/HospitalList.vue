<template>
	<div>
		<div class="top_header">
			<input type="text" class="search_hospital" @focus="routerTosearchHospital" placeholder="请输入医院名称快速定位">
			<button class="city_btn">包头市</button>
		</div>
		<div class="main">
			<ul class="hospitalList">
				<li v-for="(hos,index) in hospitalList" v-bind:index="index" :key="index" class="clearFloat" v-on:click="selectHospital(index)">
					<div class="hospitalImg">
						<img src="http://www.yunju360.com/core/fileuploader/logo/00001.png"  alt="诊所图片">
					</div>
					<div class="hospitalInfor">
						<h4 class="hospitalName">{{hos.hospitalName}}</h4>
						<p class="hospAddress">{{hos.hospAddress}}</p>
						<p class="functionList">
							<span>预约挂号</span>
							<span>诊间支付</span>
						</p>
					</div>
					<div class="hospitalGrade">{{hos.hospGrade}}</div>
				</li>					
			</ul>
			{{count}}
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'HospitalList',
    data:function(){
        return {
            hospitalList:[
            	{
            		hospitalName:"内蒙古中医院",
            		hospGrade:"三级甲等",
            		hospAddress:"地址信息",
            	}
           	],
        }        
    },
    props:{

    },
    methods:{
        selectHospital(index){
        	this.$router.push({
                path:"/departList",
            }); 
        },
        routerTosearchHospital(){
        	this.$router.push({
                path:"/searchHospital",
            }); 
        }
    },
    mounted:function(){
        
    },
    computed:{
    	// count(){
    	// 	return this.$store.state.resturantName;
    	// }
    	...mapState({
    		count: state => state.resturantName// 可以是一个函数
    	})
    }
}
</script>
<style scoped>
	.top_header{
		padding: 12px 3vw;
		border-bottom: 1px solid #e8e8e8;
		position: absolute;
		width: 100vw;
		top: 0;
		left: 0;
		background-color: #fff;
		z-index: 199;
	}
	.search_hospital{
		background-color: #eeeff3;
		border-radius: 3px;
		padding: 6px 5px;
		width: 74vw;
	}
	.city_btn{
		float: right;
		line-height: 30px;
		height: 30px;
	}

	.main{
		height: 100vh;
		overflow:auto;
		padding-top: 60px;
		background-color: #f0f0f0;
		-webkit-overflow-scrolling:touch;
	}
	.hospitalList{
		padding:0 3.5vw;
		background-color: #fff;
	}
	.hospitalList li{
		padding-top: 10px;
		padding-bottom:10px;
		border-bottom: 1px solid #e8e8e8;
	}
	.hospitalList li:active{
		background-color:rgba(0,0,0,0.1);
	}

	.hospitalImg{
		float: left;
		width:16vw;
		padding-top:5px;
	}
	.hospitalImg img{
		display: block;
		width:100%;
	}
	.hospitalInfor{
		width: 58vw;
		float: left;
		margin-left: 12px;
	}
	.hospitalName{
		font-size:15px;
		font-weight: 600;
		line-height: 30px;
	}
	.hospAddress{
		font-size:14px;
		color:#525252;
		line-height: 30px;
	}
	.hospitalGrade{
		float: right;
		color: #4f4f4f;
		font-size: 14px;
		line-height: 20px;
	}
	.functionList{
		margin-top: 6px;
	}
	.functionList span{
		font-size: 12px;
		border:1px solid #ccc;
		padding: 2px 6px 2px 6px;
		border-radius:12px;
	    margin-right:5px;
	    color: #66ccba;
	}
</style>