<template>
  <div class="patientlist_box" @click.stop.prevent="close">
    <div class="patientlist_content" :class="according?'show':'hide'">
      <div class="title">
        <h3 v-text="title"></h3>
      </div>
      <div class="patientlist_warp" @click.stop @touchstart.stop @touchmove.stop @touchend.stop.>
        <ul>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "patientlist",
  props: {
    title: {
      default: "就诊人列表"
    },
    // 详细列表
    // patientlist: {
    //   required: true
    // },
    // 是否显示
    according: {
      required: true,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    // 关闭
    close() {
      this.$emit("close");
    }
  }
};
</script>
<style scoped>
.show {
  transform: translateY(0);
}
.hide {
  transform: translateY(50vh);
}
.patientlist_box {
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.3);
}
.patientlist_box .patientlist_content {
  width: 100vw;
  height: 50vh;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: white;
  animation: showpatient 0.3s;
  overflow: hidden;
}
.patientlist_box .patientlist_content .title {
  border-bottom: 1px solid #e8e8e8;
  height: 8vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
.patientlist_warp {
  height: 42vh;
  overflow: auto;
}
.patientlist_warp ul {
  padding: 0 15px;
}
.patientlist_warp ul li {
  font-size: 16px;
  padding: 10px 0;
}
@keyframes showpatient {
  from {
    transform: translateY(50vh);
  }
  to {
    transform: translateY(0);
  }
}
</style>
