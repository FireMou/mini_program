// cmps/nav-bar/nav-bar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // backColor: '#ffffff',
        // textColor: '#000000',
        // title: ''
        backColor: {
            type: String,
            value: '#ffffff'
        },
        textColor: {
            type: String,
            value: '#000000'
        },
        title: {
            type: String
        },
        backShow: {
            type: String,
            value: 'true'
        },
        homeShow: {
            type: String,
            value: 'true'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        statusBarStyle: '',
        navBarStyle: '',
        topHeight: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        back: function() {
            this.triggerEvent('backTap', { name: 'dv' });
            wx.navigateBack({
                delta: 1
            });
        },
        home: function() {
            this.triggerEvent('homeTap', { age: '30' });
            wx.navigateBack({
                delta: 999
            });
        }
    },
    lifetimes: {
        attached: function() {
            const statusBarStyle = `
            height: ${ wx.db.statusBarHeight }px;
            background-color: ${this.data.backColor};
            `;
            const navBarStyle = `
            height: ${ wx.db.navBarHeight }px;
            background-color: ${this.data.backColor};
            color: ${this.data.textColor};
            `;
            const topHeight = wx.db.statusBarHeight + wx.db.navBarHeight;
            this.setData({ statusBarStyle, navBarStyle, topHeight });
        }
    }
})