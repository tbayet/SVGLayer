<template>
  <div class="background_container">
    <div class="background_font_color" :style="{
      backgroundColor: backgroundColor
    }">
      <div v-for="(path, i) in paths" :key="'svg-' + i"
        class="background_elem"
        :style="{
          ...backgroundElemStyle(path),
        }"
      >
      </div>
    </div>
  </div>
</template>

<script>

import propTypes from './props'
const { paths, defaultColor } = propTypes

export default {
  name: 'vue-svg-layer',
  props: {
    paths,
    defaultColor
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
    }
  },
  created () {
    this.formattedPaths = paths
    if (typeof this.formattedPaths === 'string') {
      this.formattedPaths = [{ link: this.formattedPaths.trim(), style: { backgroundColor: this.defaultColor } }]
    } else if (typeof this.formattedPaths === 'object' && this.formattedPaths.length && !('link' in this.formattedPaths)) {
      this.formattedPaths = this.formattedPaths.map(e => ({
        link: e.length ? e[0] : '',
        style: e.length > 1
          ? typeof e[1] === 'object'
            ? e[1]
            : { backgroundColor: e[1] }
          : { backgroundColor: this.defaultColor }
      }))
    }
    if (this.paths.length && this.paths[0].link.trim() === '') {
      this.backgroundColor = this.paths[0].style.backgroundColor || this.defaultColor
      this.formattedPaths = this.paths.slice(1)
    }
  }
}
</script>

<style lang="scss" scoped>

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
</style>
