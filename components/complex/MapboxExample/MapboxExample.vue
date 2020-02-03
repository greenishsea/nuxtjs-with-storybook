<template>
  <div class="sizing-mapboxgl">
    <MglMap
      container="map-basic"
      :accessToken="accessToken"
      :mapStyle="mapStyle"
      :center="coordinates"
      :zoom="zoom"
      @load="onMapLoaded"
    >
      <MglNavigationControl
        position="top-right"
      ></MglNavigationControl>
      <MglGeocoderControl
        :accessToken="accessToken"
        :input.sync="defaultInput"
        @results="handleSearch"
      />
      <!-- <MglMarker :coordinates="coordinates" color="blue" /> -->
    </MglMap>
  </div>
</template>

<style>
.sizing-mapboxgl {
  /* width: 100%; */
  width: 100vw;
  height: 500px;
}
</style>

<script>
import Mapbox from "mapbox-gl"
import {
  MglMap,
  MglNavigationControl,
  MglMarker,
} from "vue-mapbox"
import MglGeocoderControl from "vue-mapbox-geocoder" // https://github.com/mapbox/mapbox-gl-geocoder/issues/252
import MapboxLanguage from "@mapbox/mapbox-gl-language"

const ACCESS_TOKEN = 'pk..'
const MAP_STYLE = 'mapbox://styles/mapbox/streets-v8'

export default {
  components: {
    MglMap,
    MglNavigationControl,
    MglMarker,
    MglGeocoderControl,
  },
  data() {
    return {
      accessToken: ACCESS_TOKEN, // your access token. Needed if you using Mapbox maps
      mapStyle: MAP_STYLE, // your map style
      coordinates: [143.767125, 38.681236],
      zoom: 4,
      defaultInput: null,
    };
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
    //
    this.map = null;
  },
  methods: {
    onMapLoaded(event) {
      this.map = event.map;
      // const language = 'ja'
      // this.map.setLayoutProperty('country-label', 'text-field', [
      //   'get',
      //   'name_' + language
      // ])
      this.map.addControl(
        new MapboxLanguage({
          defaultLanguage: 'ja'
        })
      )
      // // or just to store if you want have access from other components
      // this.$store.map = event.map;
    },
    handleSearch(event) {
      console.log(event)
    }
  }
};
</script>
