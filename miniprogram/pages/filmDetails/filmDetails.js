// pages/filmDetails/filmDetails.js

var jsonData = require("../../data/film-details.js");
var commentData = require("../../data/movie-comments.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    filmDetail: {},
    comments: []
  },

  goCinemaPage: function () {
    wx.switchTab({
      url: '/pages/cinema/cinema',
    })
  },
  goCommentPage: function(){
    wx.navigateTo({
      url: '/pages/comment/comment',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let comments = commentData.data.data.hotComments.map((item) => {
      item.startTime = new Date(item.startTime - 0).toLocaleDateString().replace(/\//g, "-");
      return item;
    });
    this.setData({
      filmDetail: jsonData.data,
      comments: comments
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