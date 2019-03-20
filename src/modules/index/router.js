import Vue from 'vue'

import Router from 'vue-router'
/*药师端*/

import IndexHome from '@/components/indexModules/IndexHome.vue' //登录模块

import PatientInfor from '@/components/indexModules/PatientInfor.vue' //添加就诊人模块

import AddPatient from '@/components/indexModules/AddPatient.vue' //添加就诊人模块

import BindCards from '@/components/indexModules/BindCards.vue' //绑定就诊卡模块

import MyCenter from '@/components/indexModules/MyCenter.vue' //个人中心

import ChangePhone from '@/components/indexModules/ChangePhone.vue' //修改手机号

//2.调用vue-router
Vue.use(Router);

//3.创建vue-router实例
const router=new Router({
    routes: [
        {
          path: '/',component: IndexHome
        },
        {
          path: '/home',name:"home",component: IndexHome,meta: { title: '首页',keepAlive:true,index:1} 
        },
        {
          path: '/addPatient',name:"addPatient",component: AddPatient,meta: { title: '添加就诊人',keepAlive:true,index:2} 
        },
        {
          path: '/patientInfor',name:"patientInfor",component: PatientInfor,meta: { title: '就诊人信息',keepAlive:true,index:2} 
        },
        {
          path: '/bindCards',name:"bindCards",component: BindCards,meta: { title: '添加就诊人',keepAlive:true,index:2} 
        },
        {
          path: '/myCenter',name:"myCenter",component: MyCenter,meta: { title: '个人中心',keepAlive:true,index:2} 
        },
        {
          path: '/changePhone',name:"ChangePhone",component: ChangePhone,meta: { title: '修改关联手机号',keepAlive:true,index:3} 
        },
    ]
});

router.beforeEach((to, form, next) => { /*路由变化修改title*/
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next();
});
export default router;