// pages/d-storage/d-storage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    uploadFile: function() {
        wx.chooseImage({
            sourceType: ['album', 'camera'],
            success: (result) => {

            }
        });

    }
})