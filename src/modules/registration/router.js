import Vue from 'vue'

import Router from 'vue-router'

import HospitalList from '@/components/regModules/HospitalList.vue' //医院列表
    
import DepartList from '@/components/regModules/DepartList.vue' //科室列表

import HospitalHome from '@/components/regModules/HospitalHome.vue' //医院主页

import SearchHospital from '@/components/regModules/SearchHospital.vue' //搜索医院

import AppointRule from '@/components/regModules/AppointRule.vue' //预约规则

import DoctorTimeList from '@/components/regModules/DoctorTimeList.vue' //医院排班时间列表

//2.调用vue-router
Vue.use(Router);

//3.创建vue-router实例
const router=new Router({
    routes: [
        {
          path: '/',component: HospitalList
        },
        {
          path: '/hospitalList',name:"hospitalList",component: HospitalList,meta: { title: '医院列表',keepAlive:true} 
        },
        {
          path: '/departList',name:"departList",component: DepartList,meta: { title: '科室列表',keepAlive:true} 
        },
        {
          path: '/hospitalHome',name:"hospitalHome",component: HospitalHome,meta: { title: '医院主页',keepAlive:true} 
        },
        {
          path: '/searchHospital',name:"searchHospital",component: SearchHospital,meta: { title: '医院搜索',keepAlive:true} 
        },
        {
          path: '/appointRule',name:"appointRule",component: AppointRule,meta: { title: '预约规则',keepAlive:true} 
        },
        {
          path: '/DoctorTimeList',name:"DoctorTimeList",component: DoctorTimeList,meta: { title: '医生排班',keepAlive:true} 
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