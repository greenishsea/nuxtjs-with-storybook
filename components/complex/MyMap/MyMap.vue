<template>
  <div id="map"></div>
</template>

<style>
#map {
  width: 100vw;
  height: 100vh;
}
</style>

<script>
import mapboxgl, { MapboxOptions, Map } from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import MapboxLanguage from '@mapbox/mapbox-gl-language'

export default {
  mounted() {
    const option = {
      accessToken: 'pk..',
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v8',
      center: [143.767125, 38.681236],
      zoom: 4
    }
    // this.map = new mapboxgl.Map(this.option)
    this.map = new mapboxgl.Map(option)
    this.map.addControl(
      new MapboxGeocoder({
        accessToken: option.accessToken,
        mapboxgl: mapboxgl
      })
    )
    this.map.addControl(
      new MapboxLanguage({
        defaultLanguage: 'ja'
      })
    )
        // 省略
    this.map.on('load', () => {
      this.map.addLayer({
        id: 'points',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [139.775792, 35.715622]
                },
                properties: {
                  title: '国立西洋美術館',
                  icon: 'museum'
                }
              },
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [139.630669, 35.457194]
                },
                properties: {
                  title: '横浜美術館',
                  icon: 'museum'
                }
              },
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [139.051066, 35.2454]
                },
                properties: {
                  title: '彫刻の森美術館',
                  icon: 'museum'
                }
              },
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [139.021225, 35.256709]
                },
                properties: {
                  title: 'ポーラ美術館',
                  icon: 'museum'
                }
              },
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [139.726423, 35.665322]
                },
                properties: {
                  title: '国立新美術館',
                  icon: 'museum'
                }
              }
            ]
          }
        },
        layout: {
          'icon-image': ['concat', ['get', 'icon'], '-15'],
          'text-field': ['get', 'title'],
          'text-font': ['ヒラギノ角ゴ Pro W3', 'メイリオ', 'sans-serif'],
          'text-offset': [0, 0.6],
          'text-anchor': 'top'
        }
      })
    }) // end - this.map.on('load'
  }
}
</script>
