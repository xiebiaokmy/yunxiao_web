module.exports = {
  presets: [
    '@vue/app',
    ['@babel/preset-env',
      {
        'modules': false
      }
    ]
  ],
  plugins: [ // elementå®˜æ–¹æ•™ç¨‹
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      }
    ]
  ]
}