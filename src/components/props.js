const propTypes = {
  paths: {
    type: Array,
    required: true,
    validator: function (paths) {
      return (
        paths.reduce((acc, v, i) => acc && (typeof v === 'object' &&
          'link' in v && 'style' in v && typeof v.link === 'string' &&
          typeof v.style === 'object'
        ), true)
      )
    }
  },
  animation: {
    type: Boolean,
    default: false
  },
  speed: {
    type: Number,
    default: 40
  },
  animationMode: {
    type: String,
    default: 'alternate-delay',
    validator: function (a) {
      return a === 'alternate-delay' || a === 'alternate' || a === 'linear'
    }
  }
}

export default propTypes
