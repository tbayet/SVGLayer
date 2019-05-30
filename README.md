# vue-svg-layer

### [\[ demo here \]](https://tbayet.github.io/SVGLayer/)

## Installation
First install the package

```sh
npm install --save vue-svg-layer
```

Then import it and use it

```js
import VueSvgLayer from 'vue-svg-layer'

<template>
	<vue-svg-layer :animation="true" :paths="paths" />
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
| animation | Boolean | false | set animation to true |
| speed | Number | 40 | set animation time in seconds |
| animationMode | String | 'alternate-delay' | 'alternate-delay', 'alternate' or 'linear' |

path is required
