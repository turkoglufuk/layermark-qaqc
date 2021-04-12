<template>
  <div ref="map" class="map-view">
    <div ref="button" />
  </div>
</template>

<script>
import { loadModules } from 'esri-loader'
export default {
  name: 'Map',
  components: {},
  data() {
    return {
      recipes: []
    }
  },
  mounted() {
    loadModules(['esri/config', 'esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer'])
      .then(([Config, Map, MapView, FeatureLayer]) => {
        Config.apiKey = 'AAPKd0490ac99cbb4b7483a39564dc694998cbbkJnD-Zu6HFJqg3rC-NCq-BLtPhH4fQGR93Ko_zbXlx2gpaepTCDiaz3zC4eZm'
        const map = new Map({
          basemap: 'arcgis-topographic' // Basemap layer service
        })

        const view = new MapView({
          map: map,
          center: [-118.805, 34.027], // Longitude, latitude
          zoom: 13, // Zoom level
          container: this.$refs.map // Div element
        })
        const trailheadsLayer = new FeatureLayer({
          url: 'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0'
        })
        map.add(trailheadsLayer)
        console.log(view)
      })
      .catch(err => {
        // handle any script or module loading errors
        console.error(err)
      })
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.map-view {
  width: 1440px;
  height: 944px;
  background: rgba(23, 23, 23, 0.25);
  border-radius: 6px
}
</style>
