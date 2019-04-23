<template>
  <div class="medicaltab">
    <div class="medicaltab_content">
      <div class="tab_l" :class="activeIndex===0?'active':''" @click="tabherdler(0)">
        <span>未交费</span>
      </div>
      <div class="tab_r" :class="activeIndex===1?'active':''" @click="tabherdler(1)">
        <span>已缴费</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "medicalList",
  props: {
    activeIndex: {
      type: Number
    }
  },
  methods: {
    //   tab切换
    tabherdler(index) {
      this.$emit("tabswitch", index);
    }
  }
};
</script>
<style scoped>
/* tab 切换 */
.medicaltab {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2vh 0;
}

.medicaltab_content {
  width: 60vw;
  height: 7vh;
  border-radius: 4vh;
  background-color: #e1e1e1;
  display: flex;
}
.medicaltab_content div {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4vh;
  color: #818181;
}
.medicaltab_content div span {
  font-size: 15px;

}
.medicaltab_content .active {
  background-color: #66ccba;
  color: white;
}
</style>
