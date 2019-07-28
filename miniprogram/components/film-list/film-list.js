// components/film-list/film-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    filmList: Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goFilmDetailsPage: function () {
      wx.navigateTo({
        url: '/pages/filmDetails/filmDetails',
      })
    },
    goCinemaPage: function () {
      wx.navigateTo({
        url: '/pages/cinemaOfFilm/cinemaOfFilm',
      })
    }
  }
})
