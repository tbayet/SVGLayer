const propTypes = {
  paths: {
    type: [String, Array],
    required: true,
    validator: paths => (
      typeof paths === 'object' || paths.reduce((acc, v, i) => acc &&
      (
        (typeof v === 'object' &&
        ('link' in v && 'style' in v && typeof v.link === 'string' &&
        typeof v.style === 'object')) ||
        (v.length && typeof v[0] === 'string' && (v.length < 2 || typeof v[1] === 'object' || typeof v[1] === 'string'))
      ), true)
    )
  },
  defaultColor: {
    type: String,
    required: false,
    default: 'transparent'
  }
}

export default propTypes
