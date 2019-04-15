<template>
  <div>
    <div class="medical_header">
      <div class="hospital">
        <span>医院</span>
        <div class="right" @click="toHospitalList">
          <span v-text="this.hospitalname"></span>
          <i class="iconfont icon-xiangxia"></i>
        </div>
      </div>
      <div class="people">
        <span>就诊人</span>
        <div class="right" @click.stop="patientshow">
          <span>内蒙古一机医院</span>
          <i class="iconfont icon-xiangxia"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "medicalHeader",
  props: {
    hospitalname: {}
  },
  data() {
    return {};
  },
  methods: {
    //跳往医院列表
    toHospitalList() {
      this.$router.push({
        path: "/hospitalList"
      });
    },
    // 显示就诊人信息
    patientshow() {
      this.$emit("patientshow");
    }
  }
};
</script>
<style scoped>
/* 医疗头部 */
.medical_header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 17px 0;
  background-color: white;
}

.hospital,
.people {
  flex: 1;
  padding: 0 2vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  overflow: hidden;
  width: 50vw;
}

.hospital > span,
.people > span {
  display: inline-block;
  width: 45px;
  overflow: hidden;
}

.hospital .right,
.people .right {
  overflow: hidden;
  float: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding-left: 17px;
}

.hospital .right span,
.people .right span {
  float: left;
  margin-right: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 600;
}

.hospital .right i,
.people .right i {
  font-size: 14px;
  float: right;
  transform: translateY(2px);
}

.hospital {
  box-sizing: border-box;
  border-right: 1px solid #e7e7e7;
}
</style>
