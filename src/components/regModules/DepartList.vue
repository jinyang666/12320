<template>
	<section class="main">
		<header>
			<div class="hospitalInforBox clearFloat">
				<div class="hospital_left">
					<h4>{{hospitalName}}</h4>
					<div>
						<span class="ding">顶</span>
						<span class="sign">{{level}}</span>
					</div>
				</div>
				<div class="hospital_right">
					<div class="regulation" @click="router_appointRule">预约规则</div> 
					<div class="hospital_index" @click="router_hospitalHome">医院主页<i class="iconfont icon-youjiantou"></i></div>
				</div>		
			</div>
			<div class="search_depart">
				<input type="text" class="search_hospital" placeholder="搜索医院">
			</div>
		</header>
		<!-- 科室列表 -->
		<ul class="departList" v-for="item in departList" :key="item.letterIndex">
			<h6>{{item.letterIndex}}</h6>
			<li v-for="(depart,departIndex) in item.list" v-bind:index="departIndex" :key="depart.departId" v-on:click="selectDepart(departIndex)">
				<p>{{depart.name}}</p>
			</li>
		</ul>	
		<!--字母列表导航栏-->
		<div class="position_box" @click.stop="stop" @touchstart="scroll_touchstart($event)" @touchmove="scroll_touchmove($event)">
            <!-- 右侧字母列表 @touchstart.stop="scroll_touchstart(index,item.letterIndex)" -->
			<li v-for="(item,index) in departList"  :key="item.index" :class="{'ac':item.letterIndex==acLetter}">{{item.letterIndex}}</li>
            <!-- 左侧字母放大镜 -->
			<div class="left_big" v-show="bigSwitch" :style="{'top':letterTop+'px'}">
				{{acLetter}}<span class="triangle_border_right"></span>
			</div>
		</div>
	</section>
</template>
<script>
export default {
    name: 'DepartList',
    data:function(){
        return {
        	hospitalName:"内蒙古中医院",
        	level:"三甲医院",
        	address:"包头",
        	telephone:"110",
            departList:[
                {letterIndex:"A",list:[
                    {name:"A科室1",departId:"1"},
                    {name:"A科室2",departId:"2"},
                    {name:"A科室3",departId:"3"},
                    {name:"A科室4",departId:"4"},
                    {name:"A科室5",departId:"5"}
                ]},
                {letterIndex:"B",list:[
                    {name:"B科室1",departId:"1"},
                    {name:"B科室2",departId:"2"},
                    {name:"B科室3",departId:"3"},
                    {name:"B科室4",departId:"4"},
                    {name:"B科室5",departId:"5"}
                ]},
                {letterIndex:"C",list:[
                    {name:"C科室1",departId:"1"},
                    {name:"C科室2",departId:"2"},
                    {name:"C科室3",departId:"3"},
                    {name:"C科室4",departId:"4"},
                    {name:"C科室5",departId:"5"}
                ]},
            ],
           	bigSwitch:false,//控制右侧放大按钮是否显示
            acLetter:"A",//放大镜要显示的字母
            acIndex:0,   
           	letterTime:null,//定时器
        }        
    },
    props:{

    },
    methods:{
        selectDepart(index){
            console.log(index)
        	this.$router.push({
                path:"/doctorTimeList",
            });
        },
        router_hospitalHome(){
        	this.$router.push({
        		path:"/hospitalHome"
        	})
        },
        router_appointRule(){
        	this.$router.push({
        		path:"/appointRule"
        	})
        },
        stop(){
            return false;
        },
        //选择右侧导航字母  //索引 字母
        // scroll_touchstart(index,val){
        //     this.acIndex=index  
        //     this.acLetter=val   	
        // },
        scroll_touchstart(event){
            console.log(event)	
        },
        scroll_touchmove(event){
            console.log(event)
        }
    },
    mounted:function(){},
    watch:{
        //监听字母变化
        acIndex(val){
            var that=this;
            this.bigSwitch=true//显示
            clearTimeout(this.letterTime)
            this.letterTime=setTimeout(()=>{that.bigSwitch=false},1000)                 
        },

    },
    computed:{
        //计算高度
        letterTop(){
            return this.acIndex*20-14
        }
    },
    beforeCreate () {
    	document.querySelector('body').setAttribute('style', 'background-color:#f0f0f0;')
    },
}
</script>
<style scoped>
.main{
	height: 100vh;
	overflow: auto;
	-webkit-overflow-scrolling:touch;
}
.main::-webkit-scrollbar{width:0;height:1px}
.main::-webkit-scrollbar-thumb{border-radius:5px;-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);background:rgba(0,0,0,.2)}
.hospitalInforBox{
	padding: 12px 3.5vw;
	font-size: 18px;
	background-color: #fff;
}
.hospital_left{
	float: left;
}
.hospital_left h4{
	font-size: 17px;
	line-height: 40px;
	font-weight: 600;
}
.ding{
	display: inline-block;
	width: 20px;
	height: 20px;
	border-radius: 10px;
	border:1px solid #be9b70;
	color: #d2812f;
	font-size: 12px;
	line-height: 20px;
	text-align: center;
}
.sign{
    border-radius: 3px;
    text-align: center;
    font-size: 15px;
    padding:3px 5px;
    color: #606060;
    margin-left: 10px;
}
.search_depart{
	padding: 10px 3vw;
	margin-top: 8px;
	background-color: #fff;
}
.search_hospital{
	background-color: #f6f6f6;
	border-radius: 3.5px;
	padding: 6px 6px 6px 35px;
	width: 93vw;
}
.hospital_right{
	float: right;
}
.regulation{
	font-size: 12px;
	border:1px solid #ccc;
	padding: 4px 12px 4px 12px;
	border-radius:12px;
    margin-right:5px;
    color: #ababad;
}
.departList h6{
	padding:0 3.5vw;
	height: 30px;
	color:#737373;
	line-height: 30px;
	font-size: 16px;
	font-weight: 500;
}
.departList li{
	background-color: #fff;
	height:50px;
	line-height: 50px;
	font-size: 16px;
	border-bottom: 1px solid #dfdfdf;
	padding:0 3.5vw;
	color: #131313;
}
.hospital_index{
	font-size: 15px;
	color: #4a4a4a;
	margin-top: 12px;
}
.departList li:active{
	background-color:rgba(0,0,0,0.1);
}
.position_box{
	position: fixed;
	right: 0px;
	top: 100px;
	color:#404040;
	width:50px;
	font-size: 13px;
	line-height: 20px;
	text-align: center;
	z-index: 1999;
	/*background-color: rgba(0,0,0,0.05);*/
}
.position_box li{
	width: 20px;
	height: 20px;
	border-radius: 10px;
	margin:0 auto;
}
.position_box .ac{
	background-color: #66ccba;
	color: #fff;
}
.position_box .left_big{
	background-color: #cacaca;
	height: 46px;
	width: 46px;
	border-radius: 50%;
	position: absolute;
	left: -50px;
	font-size: 25px;
	color: #fff;
	line-height: 50px;
	transition: all 0.2s;
}
.triangle_border_right{
	display:block;
    width:0;
    height:0;
    border-width:18px 0 18px 18px;
    border-style:solid;
    border-color:transparent transparent transparent #cacaca;
    position:absolute;
    top:5px;
    left:37px;
}
</style>