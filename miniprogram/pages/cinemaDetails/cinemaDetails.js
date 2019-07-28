// pages/cinemaDetails/cinemaDetails.js

var cinameInfo = require("../../data/cinema-details.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cinemaInfo: {}, // 影院信息
    movieList: [], // 影院上映的电影
    movieIndex: 0, //当前swiper索引
    movieTime: [], // 电影场次时间
    timeIndex: 0, // 当前日期索引
    dealList: [], // 观影小吃
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  
  goChooseSeatPage: function () {
  	wx.navigateTo({
  		url: '/pages/chooseSeat/chooseSeat'
  	})
  },
  //swiper滑动事件
  swiperChange: function (e) {
    let currentIndex = e.detail.current;
    this.setData({
      movieIndex: currentIndex,
      movieTime: this.data.cinemaInfo.movies[currentIndex].movieTime,
      timeIndex: 0
    })
  },
  swiperClickChange: function (e) {
    let currentIndex = e.currentTarget.dataset.index;
    this.setData({
      movieIndex: currentIndex,
      movieTime: this.data.cinemaInfo.movies[currentIndex].movieTime,
      timeIndex: 0
    })
  },
  changeDateNav: function (e) {
    let nowDateInx = e.currentTarget.dataset.index;
    this.setData({
      timeIndex: nowDateInx
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let cinemaInfoTmp = cinameInfo.data;

       let showMovieIndex = 0
    // cinemaInfoTmp.movies.forEach((item, index) => {
    //     if (item.movieId === this.props.film.filmId) {
    //         showMovieIndex = index
    //     }
    // })

    this.setData({
      cinemaInfo: cinemaInfoTmp,
      movieList: cinemaInfoTmp.movies,
      dealList: cinemaInfoTmp.dealList.dealList,
      // cinemaId: cinemaId,
      movieIndex: showMovieIndex,
      movieTime: cinemaInfoTmp.movies[showMovieIndex].movieTime,
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