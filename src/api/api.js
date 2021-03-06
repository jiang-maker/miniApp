const heweather = 'https://free-api.heweather.net/s6/weather'

export {
  heweather
}
// 请求封装
function request (url, method, data, header = {}) {
  wx.showLoading({
    title: '加载中' // 数据请求前loading
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: heweather + url, // 仅为示例，并非真实的接口地址
      method: method,
      data: data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        wx.hideLoading()
        resolve(res.data)
      },
      fail: function () {
        wx.hideLoading()
        reject(false)
      },
      complete: function () {
        wx.hideLoading()
      }
    })
  })
}
export function get (url, data) {
  return request(url, 'GET', data)
}
export function post (url, data) {
  return request(url, 'POST', data)
}
