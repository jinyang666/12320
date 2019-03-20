<template>
	<div>
		<header>
			<input type="text" class="search_hospital" placeholder="搜索医院">
		</header>
		<div class="main">
			<ul class="hospital_list">
				<li @click="selectHospital">内蒙古中医院</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:"searchHospital",
		data(){
			return{
						
			}
		},
		methods:{
			selectHospital(){
	        	this.$router.push({
	                path:"/departList",
	            }); 
	        },
		}	
	}
</script>
<style scoped>
	header{
		padding: 12px 3vw;
		background-color: #fff;
		position: absolute;
		width: 100vw;
		top: 0;
		left: 0;
		border-bottom: 1px solid #e8e8e8;
		z-index: 199;
	}
	.search_hospital{
		background-color: #f6f6f6;
		border-radius: 3.5px;
		padding: 6px 6px 6px 35px;
		width: 80vw;
	}
	.city_btn{
		float: right;
		line-height: 30px;
		height: 30px;
	}
	.main{
		padding: 60px 3.5vw 0px;
		height: 100vh;
		overflow:auto;
		background-color: #fff;
		-webkit-overflow-scrolling:touch;
	}
	.hospital_list{
		
	}
	.hospital_list li{
		line-height: 45px;
		height: 45px;
		color: #6d6d6d;
		border-bottom: 1px solid #ebebeb;
	}
</style>