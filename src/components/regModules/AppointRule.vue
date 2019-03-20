<template>
	<div>
		<div class="hospital_name">
			包头市中心医院
		</div>
		<div class="hospital_introduction">
			<div class="title">
				<span></span>医院规则 
			</div>
			<div class="introd_text">
				<p>1.放好时间:每日陵城12:00后更新号源</p>
				<p>2.预约周期:一周之内</p>
				<p>3.预约截止时间</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"AppointRule",
		data(){
			return{

			}
		},
	}
</script>
<style scoped>
	.hospital_name{
		background-color: #fff;
		font-size: 16px;
		color: #797979;
		padding:0 3.5vw;
		line-height: 50px;
	}
	.hospital_introduction{
		background-color: #fff;
		font-size: 15px;
		padding:6px 0 26px;
	}
	.title{
		color:#020202;
		font-weight: 600;
		font-size: 17px;
		line-height: 38px;
	}
	.title span{
		display: inline-block;
		margin-right: 3vw;
		height: 15px;
		width: 4px;
		vertical-align: middle;
		background-color: #66ccba;
	}
	.introd_text{
		padding: 0 3.5vw;
		color: #666;
		line-height: 30px;
	}
</style>