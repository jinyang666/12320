<template>
  <div class="medicalPay">
    <!-- 订单内容 -->
    <div class="medicalPay_ontent">
      <div class="medicalPay_ontent_box">
        <ul>
          <li>
            <span class="medicalPay_list_l">就诊医院</span>
            <span class="red black big">就诊医院</span>
          </li>
          <li>
            <span class="medicalPay_list_l three">就诊人</span>
            <span class="red black big">就诊医院</span>
          </li>
          <li>
            <span class="medicalPay_list_l three">处方号</span>
            <span class="red black big">就诊医院</span>
          </li>
          <li>
            <span class="medicalPay_list_l three">总金额</span>
            <span class="red black big">就诊医院</span>
          </li>
        </ul>
      </div>
      <div class="medicalPay_ontent_footer">
        <ul>
          <li>
            <span>家发动机啊看见的弗兰克</span>
            <p>
              75.
              <span class="fontSizeSm">66</span>
            </p>
          </li>
          <li>
            <span>家发动机啊看见的弗兰克</span>
            <p>
              75.
              <span class="fontSizeSm">66</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 底部 -->
    <footer>
      <div class="footer_l">
        ¥
        75.
        <span class="fontSizeSm">66</span>
      </div>
      <div class="footer_r">
        <span @click="confirmOrder">确认订单</span>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "medicalPay",
  methods: {
    //   确认订单
    confirmOrder() {
      // 调用加载框
      this.$indicator.open({
        text: "正在加载...",
        spinnerType: "fading-circle"
      });
      setTimeout(() => {
        this.$indicator.open({
          spinnerType: "triple-bounce"
        });
        this.$router.push({
          path: "/paysuccess"
        });
      }, 1500);
    }
  },
  beforeMount() {
    this.$indicator.open({
      
    });
    setTimeout(() => {
      this.$indicator.close();
    }, 500);
  },
  beforeRouteLeave(to, from, next) {
    // 跳出之前将加载框关闭
    this.$indicator.close();
    next();
  }
};
</script>
<style scoped>
.red {
  color: #ee2828;
}
.black {
  color: black;
}
.big {
  font-weight: 601;
  font-size: 17px;
}
.fontSizeSm {
  font-size: 14px;
}
/* 内容 */
.medicalPay_ontent {
  margin: 3vw;
  width: 94vw;
  background-color: white;
  border-radius: 14px;
  padding: 18px;
  color: #131313;
  font-size: 16px;
}
.medicalPay_ontent_box ul li {
  padding: 12px 0;
  display: flex;
  align-items: center;
}
.medicalPay_ontent_box ul .medicalPay_list_l {
  font-size: 16px;
  letter-spacing: 0px;
  width: 25vw;
}
.three {
  letter-spacing: 9px !important;
}
.medicalPay_ontent_footer ul {
  border-top: 1px solid #f2f2f2;
  padding-top: 23px;
  margin-top: 23px;
}
.medicalPay_ontent_footer ul li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
}
/* 底部 */
footer {
  position: fixed;
  width: 100vw;
  bottom: 0;
  background-color: white;
  height: 8vh;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}
.footer_r span {
  font-size: 16px;
  color: #75d1c1;
  border: 1px solid #75d1c1;
  border-radius: 15px;
  padding: 7px 15px;
}
</style>
