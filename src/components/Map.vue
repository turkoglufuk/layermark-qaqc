<template>
  <div ref="map" class="map-view">
    <div ref="button" />
  </div>
</template>

<script>
import { loadModules } from 'esri-loader'
import EventBus from '@/utils/eventBus'
let esriMap, esriMapView
const popupTrailheads = {
  'title': 'Trailhead',
  'content': '<b>Trail:</b> {TRL_NAME}<br><b>City:</b> {CITY_JUR}<br><b>Cross Street:</b> {X_STREET}<br><b>Parking:</b> {PARKING}<br><b>Elevation:</b> {ELEV_FT} ft'
}

const simpleMarkerSymbol = {
  type: 'simple-marker',
  color: [226, 119, 40], // Orange
  outline: {
    color: [255, 255, 255], // White
    width: 1
  }
}
export default {
  name: 'Map',
  components: {},
  data() {
    return {
      longitude: '',
      latitude: ''
    }
  },
  mounted() {
    loadModules(['esri/config', 'esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer'])
      .then(([Config, Map, MapView, FeatureLayer]) => {
        Config.apiKey = 'AAPKd0490ac99cbb4b7483a39564dc694998cbbkJnD-Zu6HFJqg3rC-NCq-BLtPhH4fQGR93Ko_zbXlx2gpaepTCDiaz3zC4eZm'
        esriMap = new Map({
          basemap: 'arcgis-topographic' // Basemap layer service
        })

        esriMapView = new MapView({
          map: esriMap,
          center: [-118.805, 34.027], // Longitude, latitude
          zoom: 13, // Zoom level
          container: this.$refs.map // Div element
        })

        const trailheadsLayer = new FeatureLayer({
          url: 'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0',
          outFields: ['TRL_NAME', 'CITY_JUR', 'X_STREET', 'PARKING', 'ELEV_FT'],
          popupTemplate: popupTrailheads
        })

        esriMap.add(trailheadsLayer)
      })
      .catch(err => {
        // handle any script or module loading errors
        console.error(err)
      })
  },
  created() {
    EventBus.$on('navigate-map', (coordinates) => {
      this.longitude = parseFloat(coordinates.x)
      this.latitude = parseFloat(coordinates.y)
      loadModules(['esri/geometry/Point', 'esri/Graphic', 'esri/layers/GraphicsLayer'])
        .then(([Point, Graphic, GraphicsLayer]) => {
          esriMapView.center = new Point({ 'x': this.longitude, 'y': this.latitude })
          esriMapView.zoom = 18
          const graphicsLayer = new GraphicsLayer()
          esriMap.add(graphicsLayer)
          const point = { // Create a point
            type: 'point',
            longitude: this.longitude,
            latitude: this.latitude
          }
          const pointGraphic = new Graphic({
            geometry: point,
            symbol: simpleMarkerSymbol
          })
          graphicsLayer.add(pointGraphic)
        })
    })
  },
  beforeCreate() {
    EventBus.$off('navigate-map')
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
