const files = require.context('.', false, /\.js$/)

files.keys().forEach(key => {
  if (key.includes('/index')) return
  exports[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
