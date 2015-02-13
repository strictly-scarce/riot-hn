var parser = document.createElement('a')

filters = {
  fromNow: function(time) {
    var between = Date.now() / 1000 - Number(time)
    if (between < 3600) {
      return ~~(between / 60) + ' minutes'
    } else if (between < 86400) {
      return ~~(between / 3600) + ' hours'
    } else {
      return ~~(between / 86400) + ' days'
    }
  },
  domain: function(url) {
    parser.href = url
    return parser.hostname
  }
}
