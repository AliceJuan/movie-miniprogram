// pages/comment/comment.js

const db = wx.cloud.database(); //  初始化数据库

Page({

  /**
   * 页面的初始数据
   */
  data: {
    score: 0,
    comment: "",
    images: [],
    fileIds: []
  },
  scoreChangeEvent: function (e) {
    this.setData({
      score: e.detail
    })
  },
  commentInputEvent: function (e) {
    this.setData({
      comment: e.detail.value
    })
  },
  uploadImg: function (e) {
    // 选择图片
    wx.chooseImage({
      count: 8,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
        this.setData({
          images: this.data.images.concat(tempFilePaths)
        })
      }
    })
  },
  commentSubmit: function () {

    wx.showLoading({
      title: '上传中...',
    })

    let promiseArr = [];
    for(let i = 0; i < this.data.images.length; i++){
      promiseArr.push(new Promise((resolve, reject) => {
        let item = this.data.images[i];
        let suffix = /\.\w+$/.exec(item)[0];
        wx.cloud.uploadFile({
          cloudPath: new Date().getTime() + suffix,
          filePath: item, // 文件路径
        }).then(res => {
          // get resource ID
          console.log(res.fileID);
          this.setData({
            fileIds: this.data.fileIds.concat(res.fileID)
          })
          resolve();
        }).catch(error => {
          // handle error
        })
      }));
    }

    Promise.all(promiseArr).then(res => {
      db.collection('comments').add({
        data: {
          content: this.data.comment,
          score: this.data.score,
          movieId: '123',
          fileIds: this.data.fileIds
        }
      }).then(res => {
        wx.hideLoading();
        wx.showToast({
          title: '评价成功',
        })
        wx.navigateTo({
          url: '/pages/filmDetails/filmDetails',
        })
      }).catch(err => {
        wx.hideLoading();
        wx.showToast({
          title: 'error'
        })
      })
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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