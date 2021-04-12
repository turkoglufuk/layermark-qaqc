<template>
  <div>
    <div class="valveItem" :class="{'selected-valve-item': isValveSelected, 'nonselected-valve-item': !isValveSelected}">
      <div class="icon-div">
        <div class="icon-num">1</div>
        <img class="poinpicImg" src="../assets/images/marker_red.png">
        <img class="shadow" src="../assets/images/shadow.png">
      </div>
      <div class="valveDetail">
        <div class="valve-id">
          {{ valveItem.summary.assettag }}
        </div>
        <div class="valve-condition">
          Crew 13
        </div>
        <div class="valve-current-position_red">
          No Position Conflict
        </div>
      </div>
      <div class="valveDates">
        <div class="num-of-changes">
          4 changes
        </div>
        <div class="last-updated">
          12.24.2020
        </div>
      </div>
    </div>
    <div class="list-item-line" />
  </div>
</template>

<script>
export default {
  name: 'ValveItem',
  components: {},
  props: {
    'valveItem': {
      type: Object,
      default: () => {},
      required: true
    },
    'isValveSelected': Boolean
  },
  data() {
    return {
    }
  },
  mounted() {},
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.selected-valve-item {
  background: white !important;
}
.nonselected-valve-item {
  background: lightgrey !important;
}
.shadow {
  position: absolute;
  top: 47px;
  left: 33px;
}
.icon-div {
  position: relative;
  text-align: center;
  color: white;
}
.icon-num {
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #FFFFFF;
  position: absolute;
  top: 33%;
  left: 73%;
  transform: translate(-50%, -50%);
}
.last-updated {
  height: 20px;
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #666666;
  padding-top: 5px;
}
.num-of-changes {
  height: 20px;
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-align: right;
  letter-spacing: -0.02em;
  color: #666666;
}
.valve-current-position_green {
  height: 20px;
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #61C300;
  padding-top: 10px
}
.valve-current-position_red {
  height: 20px;
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #DB4437;
  padding-top: 10px
}
.valve-condition {
  height: 20px;
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: rgba(57, 68, 82, 0.7);
  padding-top: 5px;
}
.valveDates {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 37px;
  margin-left: 170px;
}
.valveDetail {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 10px;
  padding: 5px;
}
.valveItem {
  display: flex;
  width: 480px;
  height: 86px;
  background: lightgrey;
  /* Inside Auto Layout */
}
.valve-id {
  height: 27px;
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  color: rgba(12, 12, 12, 0.8);
}
.poinpicImg {
  height: 40px;
  width: 32px;
  margin-left: 26px;
  margin-top: 12px;
}
.list-item-line {
  width: 497px;
  height: 0px;
  border: 1px solid #C4C4C4;
}
</style>
