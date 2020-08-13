// cmps/movie-item/movie-item.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        movie: {
            type: Object
        }
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
        detail: function() {
            // 传送movie对象，可以用存储做，也可以使用全局对象，下面的方法是转换成字符串

            wx.navigateTo({
                url: `/pages/detail/detail?movie=${ JSON.stringify(this.data.movie) }`
            });
        }
    }
})