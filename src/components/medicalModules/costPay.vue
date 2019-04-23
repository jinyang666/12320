<template>
  <div class="pay_cost_box">
    <!-- 缴费信息 -->
    <div class="pay_cost_del">
      <div class="title">
        <h2>缴费信息</h2>
      </div>
      <div class="content">
        <ul>
          <li>
            <span>处方发号</span>
            <span>A0202151212</span>
          </li>
          <li>
            <span>处方发号</span>
            <span>A0202151212</span>
          </li>
          <li>
            <span>处方发号</span>
            <span>A0202151212</span>
          </li>
          <li>
            <span>处方发号</span>
            <span>A0202151212</span>
          </li>
          <li>
            <span>处方发号</span>
            <span>A0202151212</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 药费 -->
    <div class="medicine">
      <div class="title">
        <h2>药费</h2>
      </div>
      <div class="content">
        <div class="medicine_list_model">
          <div class="details">
            <div class="title">
              <p>
                <span class="border">已执行</span>
                <span style="width: 70%;">12312312312312312312123123123121231231231212312312312313</span>
              </p>
            </div>
            <div class="number">
              <span>2</span>
              <span>盒</span>
            </div>
          </div>
          <div class="total">
            <p>
              ¥
              <span style="font-size: 17px;">69</span>
              <span>.15</span>
            </p>
          </div>
        </div>
        <div class="medicine_list_model">
          <div class="details">
            <div class="title">
              <p>
                <span class="border">未取药</span>
                <span style="width: 70%;">12312312312312312312123123123121231231231212312312312313</span>
              </p>
            </div>
            <div class="number">
              <span>2</span>
              <span>盒</span>
            </div>
          </div>
          <div class="total">
            <p>
              ¥
              <span style="font-size: 17px;">69</span>
              <span>.15</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 其他 -->
    <div class="other medicine">
      <div class="title">
        <h2>其他</h2>
      </div>
      <div class="content">
        <div class="medicine_list_model">
          <div class="details">
            <div class="title">
              <p>
                <span class="border">已执行</span>
                <span style="width: 70%;">12312312312312312312123123123121231231231212312312312313</span>
              </p>
            </div>
            <div class="number">
              <span>2</span>
              <span>盒</span>
            </div>
          </div>
          <div class="total">
            <p>
              ¥
              <span style="font-size: 17px;">69</span>
              <span>.15</span>
            </p>
          </div>
        </div>
        <div class="medicine_list_model">
          <div class="details">
            <div class="title">
              <p>
                <span class="border">未执行</span>
                <span style="width: 70%;">12312312312312312312123123123121231231231212312312312313</span>
              </p>
            </div>
            <div class="number">
              <span>2</span>
              <span>盒</span>
            </div>
          </div>
          <div class="total">
            <p>
              ¥
              <span style="font-size: 17px;">69</span>
              <span>.15</span>
            </p>
          </div>
        </div>
        <footer>
          <p>
            <span>总金额</span>
          </p>
          <p class="red">
            <span style="font-size: 17px;">¥60</span>
            <span>.00</span>
          </p>
        </footer>
      </div>
    </div>
    <!-- 底部 -->
    <footer class="footer">
      <span class="trim"></span>
      <button type="button">退费</button>
    </footer>
  </div>
</template>
<script>
export default {
  name: "costPay",
  components: {},
  beforeMount() {
    this.$indicator.open({
      spinnerType: "triple-bounce"
    });
    setTimeout(() => {
      this.$indicator.close();
    }, 500);
  }
};
</script>
<style scoped>
.border {
  color: #66ccba;
  border: 1px solid #66ccba;
  padding: 0 2px;
  border-radius: 2px;
  margin-right: 5px;
}
.red {
  color: #ef2e2e;
}
.pay_cost_box {
  margin-bottom: 8vh;
}
/* 表题 */
.title {
  padding: 20px 30px;
}
.title h2 {
  display: inline-block;
  font-size: 18px;
  font-weight: 605;
  position: relative;
}
.title h2::before {
  content: "。";
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(120%, -12.5px);
  font-size: 25px;
}
/* 缴费信息 */
.pay_cost_del .content {
  width: 94vw;
  margin: 0 3vw;
  background-color: white;
  padding: 4vw;
  border-radius: 15px;
}
.pay_cost_del .content ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8.5vh;
  font-size: 16px;
}
.pay_cost_del .content ul li span:nth-child(1) {
  color: #3c3c3c;
}
.pay_cost_del .content ul li span:nth-child(2) {
  font-size: 16px;
  font-weight: bolder;
  color: black;
}
/* 药费 */
.medicine {
}
.medicine .content {
  width: 94vw;
  margin: 0 3vw;
  background-color: white;
  padding: 2vw 4vw;
  border-radius: 15px;
}
.medicine .content .medicine_list_model {
  height: 12vh;
}
.medicine .content .medicine_list_model .details {
  display: flex;
  align-items: center;
  height: 60%;
}
.medicine .content .medicine_list_model .details .title {
  padding: 0;
  flex: 1;
  text-align: left;
  overflow: hidden;
}
.medicine .content .medicine_list_model .details .title p {
  display: flex;
  padding-right: 18px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.medicine .content .medicine_list_model .details .title p span {
  float: left;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px;
}
.medicine .content .medicine_list_model .details .number {
  width: 18%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
}
.medicine .content .medicine_list_model .total {
  overflow: hidden;
}
.medicine .content .medicine_list_model .total p {
  font-size: 16px;
  float: right;
}
.medicine .content .medicine_list_model .total p span {
  font-size: 14px;
}
.medicine .content footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f3f3f3;
  padding: 15px 0;
}
/* 底部 */
footer.footer {
  height: 6.5vh;
  background-color: white;
  position: fixed;
  padding: 0 4vw;
  width: 100vw;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
footer.footer button {
  padding: 1vw 5vw;
  border: 1px solid #e9e9e9;
  border-radius: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #383838;
}
</style>
