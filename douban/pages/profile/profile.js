// pages/profile/profile.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        items: [{
                icon: 'ic_cat_movie',
                title: '观影分析',
                count: '0',
                countDes: '看过',
                itemDes: '标记10部影片\n开启观影分析'
            },
            {
                icon: 'ic_cat_book',
                title: '读书分析',
                count: '0',
                countDes: '读过',
                itemDes: '标记10本书\n开启读书分析'
            },
            {
                icon: 'ic_cat_music',
                title: '音乐分析',
                count: '0',
                countDes: '听过',
                itemDes: '标记10张唱片\n开启音乐分析'
            },
        ]
    },
    login: function() {
        wx.navigateTo({
            url: '/pages/login/login'
        });

    }
})