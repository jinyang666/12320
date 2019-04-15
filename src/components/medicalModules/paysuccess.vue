<template>
  <div class="pay_success_box">
    <div class="pay_success_content">
      <div class="title">
        <i class="iconfont">&#xe677;</i>
        <h1>支付成功</h1>
      </div>
      <div class="lookdetail">
        <button type="botton">查看详情</button>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/font/font.css"; // 引入字体图标
export default {
  name: "paysuccess"
};
</script>
<style scoped>
.pay_success_box {
  height: 30vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pay_success_content div {
  text-align: center;
  margin: 3vh;
}
.pay_success_content .title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pay_success_content .title i {
  font-size: 3vh;
  color: #e14d64;
}
.pay_success_content .title h1 {
  margin-left: 5px;
  font-weight: 600;
  font-size: 3vh;
}
.lookdetail button {
  border: 1px solid #efefef;
  border-radius: 5px;
  color: #696969;
  padding: 1vh 4vw;
}
</style>
