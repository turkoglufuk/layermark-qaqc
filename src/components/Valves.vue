<template>
  <div class="mainValve">
    <div class="search-valve-container">
      <input placeholder="Search Valve" class="search-valve">
    </div>
    <div class="valve-container">
      <div v-for="(valve, index) in valveList" :key="index" @click="setActiveValve(index)">
        <ValveItem ref="valveitem" :valve-item="valve" :is-valve-selected="index === selectedValve" />
      </div>
    </div>
  </div>
</template>

<script>
import ValveItem from './ValveItem'
export default {
  name: 'Valves',
  components: {
    ValveItem
  },
  props: {
    valveList: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data() {
    return {
      selectedValve: ''
    }
  },
  mounted() {},
  methods: {
    setActiveValve(index) {
      this.selectedValve = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.selected-valve-item {
  background: white !important;
}
.search-valve-container {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 15px;
}
.mainValve {
  background: #E5E5E5;
}
.search-valve {
  width: 448px;
  height: 48px;
  background: #FFFFFF;
  border: 1px solid #E3E3E3;
  box-sizing: border-box;
  box-shadow: inset 2px 3px 2px rgba(0, 0, 0, 0.25);
  margin-top: 5px;
  padding-left: 10px;
  text-align: left;
  margin-bottom: 5px;
}

.valve-container {
  position: relative;
  width: 480px;
  height: 885px;
  overflow-y: scroll;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  box-shadow: inset 0px 0px 14px rgba(0, 0, 0, 0.25);
  margin-top: 2px;
}
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  width: 294px;
  height: 41px;
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #C9C9C9;
}
</style>
