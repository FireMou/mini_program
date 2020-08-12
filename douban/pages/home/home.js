// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        allMovies: [{
                title: '影院热映',
                url: '/v2/movie/in_theaters',
                movies: []
            },
            {
                title: '新片榜',
                url: '/v2/movie/new_movies',
                movies: []
            },
            {
                title: '口碑榜',
                url: '/v2/movie/weekly',
                movies: []
            },
            {
                title: '北美票房榜',
                url: '/v2/movie/us_box',
                movies: []
            },
            {
                title: 'Top250',
                url: '/v2/movie/top250',
                movies: []
            }
        ],
        movies: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // this.loadCity(this.loadData);
        this.loadCity(city => {
            this.loadNewData(0, { 'city': city });
        });
        this.loadNewData(1);
        this.loadNewData(2);
        this.loadNewData(3);
        this.loadNewData(4);
    },

    loadNewData: function(index, param) {
        let category = this.data.allMovies[index];
        if (param == null) {
            param = {};
        }
        param['apikey'] = '0df993c66c0c636e29ecbb5344252a4a';
        wx.request({
            url: `${wx.db.url}${category.url}`,
            data: param,
            header: { 'content-type': 'json' },
            success: (result) => {
                console.log(result);
                let array = result.data.subjects;
                for (let index = 0; index < array.length; index++) {
                    let movie = array[index];
                    this.updateMovie(movie.subject || movie);
                    category.movies.push(movie.subject || movie);
                }
                this.setData(this.data);
            },
            fail: () => { console.log('正在上映请求失败'); }
        });
    },

    loadData: function(city) {
        wx.request({
            url: 'https://api.douban.com/v2/movie/in_theaters',
            data: {
                'apikey': '0df993c66c0c636e29ecbb5344252a4a',
                'city': city
            },
            // data: param,
            header: { 'content-type': 'json' },
            success: (result) => {
                console.log(result);
                let movies = result.data.subjects;
                for (let index = 0; index < movies.length; index++) {
                    let movie = movies[index];
                    console.log(movie.rating.stars);
                    this.updateMovie(movie);
                }
                this.setData({
                    movies: result.data.subjects
                });
            },
            fail: () => { console.log('正在上映请求失败'); }
        });

    },

    loadCity: function(success) {

        wx.getLocation({
            type: 'wgs84',
            altitude: false,
            success: (result) => {
                // console.log(result.latitude + ',' + result.longitude);
                wx.request({
                    url: 'https://api.map.baidu.com/reverse_geocoding/v3',
                    data: {
                        'ak': 'qr9vn6sXArVAx4DThf9pG06nxx6eZwYp',
                        'coordtype': 'wgs84ll',
                        'location': result.latitude + ',' + result.longitude,
                        'output': 'json'
                    },
                    success: (result) => {
                        let city = result.data.result.addressComponent.city;
                        city = city.substring(0, city.length - 1);
                        success && success(city);
                    },
                    fail: () => { console.log('获取城市信息失败'); }
                });

            },
            fail: () => {
                console.log('获取位置失败');
            }
        });
    },

    updateMovie: function(movie) {
        let stars = parseInt(movie.rating.stars);
        if (stars == 0) return;
        movie.stars = {};
        movie.stars.on = parseInt(stars / 10);
        movie.stars.half = stars - movie.stars.on * 10 != 0;
        movie.stars.off = parseInt((50 - stars) / 10);
        console.log(movie);
    }

})