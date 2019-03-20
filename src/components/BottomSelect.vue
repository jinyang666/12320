<template>
	<div class="bottom_select" @click="offBottom">
		<div class="options_list">
			<h3>分公司列表</h3>	
			<p v-for="(item,index) in companyList" :key="item.sysRoleCode" @click.stop="slectRadio(index)">
				<span class="radio" v-bind:class="{'radio_active':proDepartCode==item.sysRoleCode}"></span>{{item.sysRoleName}}
			</p>			
		</div>
	</div>
</template>
<script>
	export default{
		name:"BottomSelect",
		data:function(){
			return {
					
			}
		},
		props:{
			proDepartCode:{
				type:String
			},
			companyList:{
				type:Array,
				required:true
			}
		},
		methods:{
			slectRadio:function(index){
				this.$emit('selectRadio',index);	
			},
			offBottom:function(){
				this.$emit('offBottom');
			},
			//确定事件
			trueSelect:function(){
				this.$emit('trueSelect');
			}
		}
	}
</script>
<style scoped>
	.bottom_select{
		position: fixed;
		top: 0;
		left: 0;
		z-index:199;
		height: 100vh;
		width: 100%;
		background-color:rgba(0,0,0,0.3);
	}
	.options_list{
		position: absolute;
		padding: 0 3.5vw;
		animation: animation 0.3s;
		left: 0;
		bottom:0px;
		width: 100%;
		height: 300px;
		background-color: #fff;
		overflow: auto;
	}
	.options_list h3{
		text-align: center;
		color: #3f3f3e;
		font-size: 18px;
		font-weight: 500;
		line-height: 45px;
		border-bottom: 1px solid #e3e3e3;
	}
	.options_list p{
		line-height: 45px;
		border-bottom: 1px solid #e3e3e3;
	}
	.radio{
		display: inline-block;
		vertical-align: middle;
		margin-right: 5px;
		height: 16px;
		width: 16px;
		position: relative;
		border:1px solid #c5c5c5;
		border-radius: 50%;
		position: relative;
		line-height: 15px;
		font-size: 12px;
		color: #fff;
		text-align: center;
	}
	.radio_active{
		border-color:  #ff6666;
	}
	.radio_active:after{
		content:"";
		position: absolute;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		left:2px;
		top: 2px;
		background-color: #ff6666;
	}
	.btn{
		margin-top: 20px;
		height: 44px;
		width: 90vw;
		background-color: #66ccba;
		color: #fff;
		line-height: 44px;
		text-align: center;
	}
	.btn:active{
		background-color: #dfdfdf;
	}
	@keyframes animation{
	    0% {bottom:-300px;}
	    100% {bottom:0px;}
	}

</style>