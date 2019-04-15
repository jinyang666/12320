<template>
  <div class="medical_warps">
    <div class="flexd_top">
      <!-- 头部 -->
      <medicalHeader :hospitalname="hospitalname" @patientshow="patientshows"></medicalHeader>
      <!-- tab切换 -->
      <medicalTab :activeIndex="activeIndex" @tabswitch="tabSwitch"></medicalTab>
    </div>
    <!-- 内容部分 -->
    <div class="medical_box">
      <!-- 未缴费列表组件 -->
      <div
        class="medical_content"
        :style="{ 
          'transform': 'translateX('+ -activeIndex*100 +'%)',
          '-o-transform': 'translateX('+ -activeIndex*100 +'%)',
          '-moz-transform': 'translateX('+ -activeIndex*100 +'%)',
          '-ms-transform': 'translateX('+ -activeIndex*100 +'%)',
          '-webkit-transform': 'translateX('+ -activeIndex*100 +'%)'
        }"
      >
        <div class="item" v-for="(item) of costNoPayList" :key="item.receiptId*1">
          <medicalList
            :documents="item.receiptId"
            :department="item.deptName"
            :money="item.payAmout"
            pay
            payment
          ></medicalList>
        </div>
        <div class="item" v-for="(item) of costNoPayList" :key="item.receiptId*1">
          <medicalList
            :documents="item.receiptId"
            :department="item.deptName"
            :money="item.payAmout"
            pay
            payment
          ></medicalList>
        </div>
        <div class="item" v-for="(item) of costNoPayList" :key="item.receiptId*1">
          <medicalList
            :documents="item.receiptId"
            :department="item.deptName"
            :money="item.payAmout"
            pay
            payment
          ></medicalList>
        </div>
        <div class="item" v-for="(item) of costNoPayList" :key="item.receiptId*1">
          <medicalList
            :documents="item.receiptId"
            :department="item.deptName"
            :money="item.payAmout"
            pay
            payment
          ></medicalList>
        </div>
        <div class="item" v-for="(item) of costNoPayList" :key="item.receiptId*1">
          <medicalList
            :documents="item.receiptId"
            :department="item.deptName"
            :money="item.payAmout"
            pay
            payment
          ></medicalList>
        </div>
        <div class="item" v-for="(item) of costNoPayList" :key="item.receiptId*1">
          <medicalList
            :documents="item.receiptId"
            :department="item.deptName"
            :money="item.payAmout"
            pay
            payment
          ></medicalList>
        </div>
        
      </div>
      <!--  已交费列表组件 -->
      <div
        class="medical_content"
        :style="{
        'transform': 'translateX('+ -activeIndex*100 +'%)',
          '-o-transform': 'translateX('+ -activeIndex*100 +'%)',
          '-moz-transform': 'translateX('+ -activeIndex*100 +'%)',
          '-ms-transform': 'translateX('+ -activeIndex*100 +'%)',
          '-webkit-transform': 'translateX('+ -activeIndex*100 +'%)'
      }"
      >
        <div class="item" v-for="(item) of costPayList" :key="item.receiptId*1">
          <medicalList
            :documents="item.receiptId"
            :department="item.deptName"
            :money="item.payAmout"
            pay
            payment="true"
          ></medicalList>
        </div>
      </div>
    </div>
    <patientList @close="closes" :according="according" v-show="according"></patientList>
  </div>
</template>
<script>
// 头部组件
import medicalHeader from "./medicalHeader";
// tab切换组件
import medicalTab from "./medicalTab";
// 医院列表组价
import medicalList from "./medicalList";
// 就诊人列表
import patientList from "./patientList";

export default {
  name: "indexMedical",
  components: {
    medicalHeader,
    medicalTab,
    medicalList,
    patientList
  },
  data() {
    return {
      // 切换的索引
      activeIndex: 0,
      // 记录切换前的滚动高度
      noesSrollTop: 0,
      // 是否展示就诊人列表
      according: false,
      // 已缴费记录
      costPayList: null,
      // 待缴费记录
      costNoPayList: null,
      // 头部医院名
      hospitalname: "北京医院",
      // 请求是否完成
      requestlenght: 1
    };
  },
  methods: {
    // 关闭就诊人列表
    closes() {
      this.according = false;
    },
    // 显示就诊人信息
    patientshows() {
      this.according = true;
    },
    // 组件切换
    tabSwitch(index) {
      if (this.activeIndex !== index) {
        this.activeIndex = index;
      }
      // 记录滚动高度
      let pageYOffsetTop = window.pageYOffset;
      window.scrollTo(0, this.noesSrollTop);
      this.noesSrollTop = pageYOffsetTop;
    },
    // 请求已缴费接口
    getConstPay(
      hospitalId = "phid",
      healthCardNo = "C6B2AA2480F845988D770F3D4CA0F642935CDDAEC12306CAE5FB2447C761CA07",
      phid = "6E9B77C6EE4F915F281A207A8E77D8FD5397995AE181378DFA48A22B0A0FAD85"
    ) {
      this.$axios({
        method: "POST",
        url: this.$URLS.costPayRecord,
        params: {
          hospitalId,
          healthCardNo,
          phid
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        }
      })
        .then(res => {
          if (res.data.rel || res.data.status === 200) {
            // 请求成功
            this.costPayList = res.data.data.list;
            console.log("已缴费记录", this.costPayList);
          } else {
            // 数据请失败
            this.$toast({
              message: "已交费数据请求失败!",
              position: "middle",
              duration: 2000
            });
          }
          this.requestlenght--;
        })
        .catch(err => {
          this.$toast({
            message: "已交费数据请求失败!",
            position: "middle",
            duration: 2000
          });
          this.requestlenght--;
        });
    },
    // 请求待缴费接口
    getCostNoPay(
      hospitalId = "phid",
      healthCardNo = "C6B2AA2480F845988D770F3D4CA0F642935CDDAEC12306CAE5FB2447C761CA07",
      phid = "6E9B77C6EE4F915F281A207A8E77D8FD5397995AE181378DFA48A22B0A0FAD85"
    ) {
      this.$axios({
        method: "POST",
        url: this.$URLS.toCostPay,
        params: {
          hospitalId,
          healthCardNo,
          phid
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        }
      })
        .then(res => {
          if (res.data.rel || res.data.status === 200) {
            // 请求成功
            this.costNoPayList = res.data.data.list;
            console.log("未交费记录查询", res);
          } else {
            // 返回数据失败
            this.$toast({
              message: "未缴费数据请求失败!",
              position: "middle",
              duration: 2000
            });
          }
          this.requestlenght--;
        })
        .catch(err => {
          // 请求失败
          this.$toast({
            message: "未缴费数据请求失败!",
            position: "middle",
            duration: 2000
          });
          this.requestlenght--;
        });
    }
  },
  // 组件实例创建之后
  created() {
    // 执行请求未缴费接口
    this.getCostNoPay();
    // 执行请求已缴费接口
    this.getConstPay();
  },
  mounted() {
    // 调用 mint 加载层
    this.$indicator.open();
  },
  watch: {
    // 监听路由参数变化
    $route: {
      handler(newD, oldD) {
        if (newD.params.hospitalname) {
          this.hospitalname = newD.params.hospitalname;
        }
      },
      deep: true,
      immediate: true
    },
    // 监听请求是否完成
    requestlenght(newD, oldD) {
      if (newD < 0) {
        // 请求完成将加载层关闭
        this.$indicator.close();
      } else {
        return false;
      }
    }
  }
};
</script>
<style scoped>
/* 头部 */
.flexd_top {
  position: fixed;
  z-index: 10;
  background-color: #f5f5f5;
  height: 18vh;
}
.medical_warps {
  overflow: hidden;
}
/* 内容 */
.medical_box {
  width: 200vw;
  display: flex;
  margin-top: 20vh;
  height: 80vh;
}
.medical_content {
  position: relative;
  transition: transform 0.2s ease-out;
  flex: 1;
  overflow-y: auto;
}
</style>
