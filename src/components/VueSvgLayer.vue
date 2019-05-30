<template>
  <div class="background_container">
    <div class="background_font_color" :style="{
      backgroundColor: backgroundColor
    }">
      <div v-for="(path, i) in paths" :key="'svg-' + i"
        class="background_elem anim_slideX"
        :style="{
          ...backgroundElemStyle(path),
          ...animationStyle(i)
        }"
      >
      </div>
    </div>
  </div>
</template>

<script>

import propTypes from './props'
const defaultColor = '#000'
const { paths, animation, speed, animationMode } = propTypes

export default {
  name: 'vue-svg-layer',
  props: {
    paths,
    animation,
    speed,
    animationMode
  },
  data: () => ({
    backgroundColor: 'transparent',
    formattedPaths: []
  }),
  methods: {
    backgroundElemStyle (path) {
      return path.link !== ''
        ? {
          maskImage: `url(${path.link})`,
          maskSize: 'auto 100%',
          maskRepeat: 'repeat round',
          maskMode: 'alpha',
          ...path.style
        }
        : path.style
    },
    animationStyle (index) {
      if (!this.animation) {
        return {}
      }
      return {
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
        animationDuration:
          `${this.speed + (this.animationMode === 'alternate-delay' ? (this.speed / index * this.speed / index) / 2 : 0)}s`,
        animationDirection:
          this.animationMode === 'alternate-delay' || this.animationMode === 'alternate'
            ? (index % 2 === 0 ? 'alternate-reverse' : 'alternate')
            : 'alternate'
      }
    }
  },
  created () {
    if (this.paths.length && this.paths[0].link === '') {
      this.backgroundColor = this.paths[0].style.backgroundColor || defaultColor
      this.formattedPaths = this.paths.slice(1)
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes slideX {
  from {mask-position: 0, 0; -webkit-mask-position: 0, 0}
  to {mask-position: 500px, 0; -webkit-mask-position: 500px, 0}
}

.background_container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  & > div {
    flex: 1;
    width: 100%;
  }
}
.background_font_color {
  position: relative;
  height: 100%;
  width: 100%;
}

.background_elem {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.anim_slideX {
  animation-name: slideX;
}
</style>
