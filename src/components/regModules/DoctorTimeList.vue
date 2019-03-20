<template>
	<div>
		<header>
			<ul class="timeList clearFloat">
				<li v-for="(time,index) in timeList" :key="index" v-bind:class="{'acLi':index==acIndex}" @click="selectTime(index)">
					<p class="time_weekNum">{{time.weekNum}}</p>
					<p class="date_time">{{time.dayNum}}</p>
				</li> 
				<span :style="{'left':acIndex*16+5+'vw'}" class="bottom_line"></span>
			</ul>
		</header>
		<div class="main">
			<ul>
				<li class="clearFloat doctor_item" v-for="(item,index) in doctorList" :key="index" @click="selectDoctor(index)">
					<div class="clearFloat infor_left">
						<img src="../../assets/imgs/doctorheader.png" alt="医生头像">
					</div>
					<div class="clearFloat infor_right">
						<div class="doctor_infor">
							<h5>{{item.doctorName}}<span>{{item.doctorTitle}}</span></h5>
							<p>预约量:14587</p>
							<p>擅长:内分泌科常见病</p>
						</div>
						<div class="appoint_line may_appoint">
							<span style="margin-left:12px;">02.21</span>
							<span style="margin-left:12px;">上午</span>
							<span style="margin-left:10px;">￥10元</span>
							<span class="public_serplus surplus_number">余10</span>
						</div>
						<div class="appoint_line cannot_appoint">
							<span style="margin-left:12px;">02.21</span>
							<span style="margin-left:12px;">上午</span>
							<span style="margin-left:10px;">￥10元</span>
							<span class="public_serplus surplus_number">约满</span>
						</div>
					</div>
				</li>
			</ul>

		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				timeList:[
					{
						weekNum:"不限",
						dayNum:"日期",						
					},
					{
						weekNum:"周二",
						dayNum:"02.18",						
					},
					{
						weekNum:"周三",
						dayNum:"02.18",						
					},
					{
						weekNum:"周四",
						dayNum:"02.18",						
					},
					{
						weekNum:"周五",
						dayNum:"02.18",						
					},
					{
						weekNum:"周六",
						dayNum:"02.18",						
					},
					{
						weekNum:"周日",
						dayNum:"02.18",						
					},
					{
						weekNum:"周日",
						dayNum:"02.18",						
					}
				],
				doctorList:[
					{
						doctorName:"曹洪",
						doctorTitle:"副主任医师",

					}
				],
				acIndex:0,
			}
		},
		methods:{
			selectTime(index){
				this.acIndex=index;
			}
		}
	}
</script>
<style scoped>
	header{
		overflow-y: auto;
		width: 100vw;
		position: absolute;
		top: 0;
		left: 0
	}
	.main{
		height: 100vh;
		background-color: #fff;
		padding-top: 80px;
		overflow: auto;
		font-size: 15px;
	}
	.timeList{
		background-color: #fff;
		width: 130vw;
		overflow-y: auto;
		position: relative;
	}
	.bottom_line{
		display: inline-block;
		width: 6vw;
		height: 3px;
		background-color: #36ae99;
		position: absolute;
		bottom: 3px;
		left: 5vw;
		transition: all 0.3s;
	}
	.timeList li{
		padding-top: 7px;
		padding-bottom:5px;
		height: 75px;
		float: left;
		text-align: center;
		width: 16vw;
	}
	.timeList li p{
		line-height: 30px;
	}
	.timeList .time_weekNum{
		color: #333;
	}
	.timeList .date_time{
		color: #2e3842;
	}
	.acLi .time_weekNum{
		color:#36ae99;
	}
	.acLi .date_time{
		color:#36ae99;
	}
	.doctor_item{
		padding:12px 3.5vw 12px;
		background-color: #fff;
		margin:0 auto;
		border-bottom: 1px solid #efefef;
	}
	.infor_left{
		float: left;
		width:16vw;
		text-align: center;
		padding-top: 8px;
	}
	.infor_left img{
		width: 15vw;
	}
	.infor_right{
		float: left;
		color: #656565;
		width: 74vw;
		margin-left:2vw; 
	}
	.doctor_infor h5{
		font-size: 18px;
		font-weight: 600;
		color: #333;
		line-height: 36px;
	}
	.doctor_infor h5 span{
		font-size: 16px;
		font-weight: 600;
		color: #333;
		line-height: 36px;
		margin-left: 12px;
	}
	.doctor_infor p{
		font-size: 14px;
		color: #484848;
		line-height: 22px;

	}
	/*预约条*/
	.appoint_line{
		width: 100%;
		height: 30px;
		line-height: 30px;
		border-radius: 15px;
		margin-top: 12px;
		font-size: 14px;
	}
	.public_serplus{
		float: right;
		width: 60px;
		text-align: center;
		border-top-right-radius: 15px;
		border-bottom-right-radius: 15px;
	}
	.may_appoint{
		background-color: #f4f8fb;
		color: #36ae99;
	}
	.may_appoint .surplus_number{
		background-color: #66ccba;
		color: #fff;;
	}
	.cannot_appoint{
		background-color: #fff;
		color: #666;
		border:1px solid #e2e2e2;
	}
	.cannot_appoint .surplus_number{
		background-color: #ebedef;
		line-height: 28px;
		height: 28px;
	}
</style>