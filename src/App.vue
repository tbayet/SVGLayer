<template>
  <div id="app">
    <vue-svg-layer :paths="paths" animationMode='alternate-delay' :animation="true" :speed="10"/>
  </div>
</template>

<script>
// import VueSvgLayer from './components/VueSvgLayer'
// import VueSvgLayer from 'vue-svg-layer'
import VueSvgLayer from '../dist/vue-svg-layer2.esm.js'

export default {
  name: 'app',
  components: {
    VueSvgLayer
  },
  data: () => ({
    paths: [
      { 'link': '', 'style': { 'zIndex': 0, 'backgroundColor': '#EB8F5E' } },
      { 'link': require('./assets/backgroundSVG/sky2.svg'), 'style': { 'zIndex': 0, 'backgroundColor': '#E5B395' } },
      { 'link': require('./assets/backgroundSVG/sun.svg'), 'style': { 'zIndex': 8, 'maskRepeat': 'no-repeat', 'maskSize': 'auto 90%', 'backgroundColor': '#FBEFBF' } },
      { 'link': require('./assets/backgroundSVG/sky1.svg'), 'style': { 'zIndex': 0, 'backgroundColor': '#B1766F' } },
      { 'link': require('./assets/backgroundSVG/horizon.svg'), 'style': { 'zIndex': 0, 'backgroundColor': '#6EB3B6' } },
      { 'link': require('./assets/backgroundSVG/city2.svg'), 'style': { 'zIndex': 0, 'backgroundColor': '#3F6E77' } },
      { 'link': require('./assets/backgroundSVG/city1.svg'), 'style': { 'zIndex': 0, 'backgroundColor': '#242A37' } }
    ]
  })
}
</script>

<style lang="scss" scoped>
#app {
  border: solid 1px black;
  width: 80vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
