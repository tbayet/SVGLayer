# vue-svg-layer
A container displaying SVGs as masks in layers with dynamic colors and style binding. Because it is always an hard task to deal with SVG, you know that.

### [\[ demo here \]](https://tbayet.github.io/SVGLayer/)

![Example](https://github.com/tbayet/SVGLayer/tree/master/src/assets/screenshot.png "Example")

## Installation
First install the package

```sh
npm install --save vue-svg-layer
```

Then import it and use it

```javascript
import VueSvgLayer from 'vue-svg-layer'

<template>
	<vue-svg-layer :paths="paths" />
</template>

<script>
export  default {
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
```

## Usage
### Props:

| prop | type | default | description |
|--|--|--|---|
| paths | Array [Object] | [{ link: 'assets/...', style: {} }] | all paths links with their style |
| defaultColor | String | 'transparent' | default color for background or 'unique svg' usage |

*(paths is required)*

**You can provide different types for paths, see valid exemple of usage :**

```javascript
data: () => ({
  paths: './assets/backgroundSVG/sky2.svg', // link for 'unique svg' usage
  paths: ['./assets/backgroundSVG/sky2.svg', '#000000'], // link, fillColor
  paths: ['./assets/backgroundSVG/sky2.svg', { backgroundColor: '#000000', ... }], // link, style object
})
```