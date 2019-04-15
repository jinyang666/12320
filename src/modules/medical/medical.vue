<template>
  <div>
    <!-- 不缓存支付页面 -->
    <keep-alive :exclude="['medicalPay','costPay','paysuccess']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "medical",
  data() {
    return {};
  },
  methods: {},
  beforeCreate() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color: #f5f5f5;");
  }
};
</script>
<style scoped>
</style>
