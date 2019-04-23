<template>
  <div class="medicalList">
    <div class="medicalList_conent">
      <ul @click.stop="returnPremiumdeta(id=0)">
        <li>
          <span>医嘱单据</span>
          <span class="block" v-text="documents"></span>
        </li>
        <li>
          <span>开单科室</span>
          <span class="block" v-text="department"></span>
        </li>
      </ul>
    </div>
    <footer>
      <div class="medicalList_f_l">
        <span>金额:</span>
        <p>
          <span class="red" v-html="dealwithMoey"></span>
        </p>
      </div>
      <div class="medicalList_f_r">
        <span v-if="!payment" :class="pay ? 'istrue' : '' " @click="toPayFor(id=1)">去支付</span>
        <span v-if="payment" class="gray" @click="returnPremium">退费</span>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "medicalList",
  props: {
    // 单据
    documents: {
      required: true,
      default: "SO427129"
    },
    // 科室
    department: {
      required: true,
      default: "口腔牙周科"
    },
    // 金额
    money: {
      required: true
    },
    // 支付
    pay: {
      default: false
    },
    // 判断是否已缴费
    payment: {
      default: false
    }
  },
  computed: {
    // 处理金额
    dealwithMoey() {
      let [_befor, _after] = this.money.split(".");
      return `
        <span>${_befor}.</span>
        <span style="font-size: 14px;">${_after ? _after : "00"}元</span>
      `;
    }
  },
  methods: {
    // 去支付
    toPayFor(id) {
      this.$router.push({
        path: "/pay",
        query: {
          id
        }
      });
    },
    // 退费
    returnPremium() {
      if (!this.payment) return false;
      this.$messagebox({
        message: "确定要退费吗",
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      }).then(res => {
        // 取消返回出去
        if (res === "cancel") {
          return false;
        }
        // 退费成功 ..........
        console.log("确定退费");
      });
    },
    // 退费详情
    returnPremiumdeta(id) {
      if (!this.payment) {
        return false;
      }
      this.$router.push({
        path: "/costPay",
        query: {
          id
        }
      });
    }
  }
};
</script>
<style scoped>
.block {
  color: black;
}
.red {
  color: #ef292a;
}
.gray {
  color: black !important;
  border: 1px solid #d8d8d8 !important;
}
/* 内容 */
.medicalList {
  border-radius: 15px;
  width: 90vw;
  background-color: white;
  margin: 0 5vw 2.8vh 5vw;
  padding: 2vh 4vw 0;
  font-size: 16px;
  color: #414141;
}
.medicalList_conent ul {
  margin-bottom: 10px;
}
.medicalList_conent ul li {
  padding: 15px 0;
}
.medicalList_conent ul li span:nth-child(1) {
  display: inline-block;
  width: 100px;
}
/* 底部 */
footer {
  border-top: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
footer div {
  height: 10vh;
  display: flex;
  align-items: center;
}
footer .medicalList_f_r span {
  display: inline-block;
  background-color: white;
  border: 1px solid #6ccebd;
  border-radius: 3vw;
  padding: 1.5vw 5vw;
  color: #6ccebd;
  text-align: center;
}
footer .medicalList_f_r span.istrue {
  background-color: #6ccebd;
  color: #aedad1;
}
footer .medicalList_f_l p {
  font-size: 16px;
  margin-left: 15px;
}
</style>
