// cmps/nav-bar/nav-bar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        statusBarStyle: '',
        navBarStyle: ''
    },

    /**
     * 组件的方法列表
     */
    methods: {

    },
    lifetimes: {
        attached: function() {
            const statusBarStyle = `
            height: ${ wx.db.statusBarHeight }px;
            `;
            const navBarStyle = `
            height: ${ wx.db.navBarHeight }px;
            `;
            console.log(statusBarStyle, navBarStyle);
            this.setData({ statusBarStyle, navBarStyle });
        }
    }
    // attached: function() {
    //     const statusBarStyle = `
    //   height: ${ wx.db.statusBarHeight }px;
    //   `;
    //     const navBarStyle = `
    //   height: ${ wx.db.navBarHeight }px;
    //   `;
    //     console.log(statusBarStyle, navBarStyle);
    //     this.setData({ statusBarStyle, navBarStyle });
    // }
})