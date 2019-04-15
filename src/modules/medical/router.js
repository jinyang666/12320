import Vue from 'vue';

import Router from 'vue-router';

// 医疗首页
import indexMedical from '@/components/medicalModules/indexMedical.vue';

// 医疗支付
import medicalPay from '@/components/medicalModules/medicalPay.vue';

// 已缴费详情模板
import costPay from '@/components/medicalModules/costPay.vue';

// 支付成功模板
import paysuccess from '@/components/medicalModules/paysuccess.vue';

// 医院列表
import hospitalList from '@/components/medicalModules/hospitalList.vue';

//2.调用vue-router
Vue.use(Router);

//3.创建vue-router实例
const router = new Router({
    routes: [
        {
            path: "/",
            redirect: "/medicalpay"
        },
        {
            path: '/medicalpay', component: indexMedical, name: "medicalpay",
            meta: {
                title: "医疗缴费",
            }
        },
        {
            path: '/pay', component: medicalPay, name: "pay",
            meta: {
                title: "待缴费详情",
            }
        },
        {
            path: '/costPay', component: costPay, name: "costPay",
            meta: {
                title: "已缴费详情",
            }
        },
        {
            path: '/paysuccess', component: paysuccess, name: "paysuccess",
            meta: {
                title: "支付结果",
            }
        },
        {
            path: '/hospitalList', component: hospitalList, name: "hospitalList",
            meta: {
                title: "医院列表",
            }
        }
    ]
});

// 获取所有的路由信息
const routerList = router.options.routes;

// 动态修改页面标题
router.beforeEach((to, form, next) => { /*路由变化修改title*/
    if (to.meta.title) {
        document.title = to.meta.title
    }
    // 判断是否真实存在此页面
    if (routerList.some(val => to.path === val.path)) {
        next();
    } else {
        next({
            path: "/",
        });
    }
});

export default router;