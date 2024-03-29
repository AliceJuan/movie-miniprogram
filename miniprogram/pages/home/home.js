// pages/home/home.js

var filmData = require("../../data/ten-films.js");
var expectData = require("../../data/expect_films.js");
var comingData = require("../../data/coming_films.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showTypeData: [{ name: '正在热映', index: 0 }, { name: '即将上映', index: 1 }],
    showType: 0,
    filmData: [],
    expectData: [],
    comingData: []
  },
  toggleShowType: function (e) {
    this.setData({
      showType: e.currentTarget.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      filmData: filmData.data,
      expectData: expectData.data,
      comingData: comingData.data
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
    this.setData({
      filmData: this.filmData.concat(filmData.data)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})