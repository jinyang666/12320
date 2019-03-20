	
<template>
	<div>
		<div class="clearFloat hospital_infor">
			<div class="hospitalImg">
				<img src="http://www.yunju360.com/core/fileuploader/logo/00001.png"  alt="诊所图片">
			</div>
			<div class="infor_left">
				<h4 class="hospitalName">{{hospitalName}}</h4>
				<p class="hospitalGrade">{{level}}</p>
				<p class="hospital_phone">{{phone}}</p>
			</div>
		</div>
		<div class="hospital_address">{{address}}</div>
		<div class="hospital_introduction">
			<div class="title">
				医院简介 <span>展开</span>
			</div>
			<div class="introd_text">
				内蒙古自治区中医医院与内蒙古自治区中医药研究所合署办公，是一所集医疗、科研、教学、康复、保健、制剂为一体的首批综合性三级甲等中医医院，其前身为内蒙古自治区中蒙医医院（始建于1958年）和内蒙古自治区中蒙医研究所（始建于1956年）。 2013年正式更名为内蒙古自治区中医医院。院先后荣获“全国百佳医院”“全国百姓放心示范医院”、“全国卫生系统先进集体”、“全国民族团结先进集体”、“全国医院医疗保险服务业规范示范单位”、“首府百姓放心医院”、“自治区文明医院”、“自治区文明服务窗口单位”、“全区执行物价政策法规最佳单位”、“全区卫生系统先进集体”等荣誉称号</div>
		</div>
	</div>
</template>
<script>
export default {
    name: 'My',
    data:function(){
        return {
        	hospitalName:"内蒙古中医院",
        	level:"三甲医院",
        	address:"内蒙古红旗大街135号", 
        	phone:"0472-2578618"     
        }        
    },
    props:{

    },
    methods:{
        selectDepart(index){
        	this.$router.push({
                path:"/departList",
            });
        },
        router_hospitalHome(){
        	this.$router.push({
        		path:"/hospitalHome"
        	})
        }
    },
    mounted:function(){
        
    },
    beforeCreate () {
    	document.querySelector('body').setAttribute('style', 'background-color:#f0f0f0;')
    },
}
</script>
<style scoped>
	.hospital_infor{
		padding:20px 3.5vw 12px;
		background-color: #fff;
		border-bottom: 1px solid #f0f0f0;
	}
	.hospitalImg{
		float: left;
		width:18vw;
	}
	.hospitalImg img{
		display: block;
		width:100%;
	}
	.infor_left{
		width: 60vw;
		float: left;
		margin-left: 12px;
	}
	.hospitalName{
		font-size:16px;
		font-weight: 600;
		line-height: 26px;
		color: #020202;
	}
	.hospitalGrade{
		font-size:13px;
		color:#525252;
		line-height: 24px;
	}
	.hospital_phone{
		font-size:13px;
		color:#525252;
		line-height: 20px;
	}
	.hospital_address{
		background-color: #fff;
		color: #020202;
		font-size: 16px;
		line-height: 24px;
		padding:12px 3.5vw;
	}
	.hospital_introduction{
		background-color: #fff;
		margin-top: 12px;
		font-size: 15px;
		padding:6px 3.5vw 26px;
	}
	.title{
		color:#020202;
		font-weight: 600;
		font-size: 16px;
		line-height: 38px;
	}
	.title span{
		position: absolute;
		right: 3.5vw;
		color: #666;
		font-weight: 500;
		font-size: 16px;
	}
	.introd_text{
		color: #666;
		line-height: 24px;
	}
</style>