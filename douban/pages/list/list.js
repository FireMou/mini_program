// pages/list/list.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        movies: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let navTitle = options.title;
        wx.setNavigationBarTitle({
            title: navTitle
        });

        this.loadDiskData(navTitle);
    },

    // 获取缓存数据展示
    loadDiskData: function(key) {
        wx.getStorage({
            key: key,
            success: (result) => {
                this.data.movies = result.data;
                this.setData(this.data);
            }
        });

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})