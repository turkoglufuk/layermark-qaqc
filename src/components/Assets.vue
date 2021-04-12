<template>
  <div class="main-assets">
    <valves :valve-list="valveList" />
    <Map />
  </div>
</template>

<script>

import Valves from './Valves'
import Map from './Map'
import TaskList from '@/api/tasklist'
export default {
  name: 'Assets',
  components: {
    Map,
    Valves
  },
  data() {
    return {
      valveList: [],
      jwtToken: this.$store.state.jwtToken
    }
  },
  async mounted() {
    try {
      const response = await TaskList.fetchTaskList()
      this.valveList = response.data
    } catch (err) {
      console.log('error in fetching list:' + err)
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main-assets {
  display: flex;
  flex-direction: row;
}
</style>
