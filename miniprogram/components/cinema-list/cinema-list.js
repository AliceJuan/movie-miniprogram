// components/cinema-list/cinema-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cinema: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    cinemaActivity: [{ 'type': '1', 'title': '惠', 'desc': '宝贝儿等三部影片特惠' },
    { 'type': '2', 'title': '卡', 'desc': '开卡特惠，首单2张立减10元' }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goCinemaDetailPage: function () {
      wx.navigateTo({
        url: '/pages/cinemaDetails/cinemaDetails'
      })
    }
  }
})
