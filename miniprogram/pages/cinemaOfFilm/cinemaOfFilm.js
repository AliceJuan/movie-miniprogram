// pages/cinemaOfFilm/cinemaOfFilm.js

var cinemaListJson = require("../../data/cinema-list.js");
var cinemaOfFilmJson = require("../../data/film-cinema-info.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cinemaList: [],
    showDays: [],
    dayIndex: 0
  },
  changeDay: function (e) {
    this.setData({
      dayIndex: e.currentTarget.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      cinemaList: cinemaListJson.data,
      showDays: cinemaOfFilmJson.data.showDays.dates
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})