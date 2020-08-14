// pages/d-database/d-database.js

const db = wx.cloud.database();
const collection = db.collection('students')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        page: 0,
        limit: 1
    },

    addData: function() {
        collection.add({
            data: {
                name: 'wangjiexi',
                age: 26,
                group: '微草',
                friends: [{
                    name: 'xubin',
                    age: 24,
                    group: '微草'
                }],
                location: db.Geo.Point(113, 23),
                birth: new Date('2019-07-07')
            }
        }).then(res => {
            console.log(res);
        }).catch(error => {
            console.log(res);
        })
    },
    removeData: function() {
        collection
            .doc('4a46c0515f3664cb00a025ea0f8d3b92')
            .remove()
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
    },
    updateData: function() {
        // 两种方法
        // 1.update:更新现有字段，原数据没有的字段直接添加
        collection.doc('9ffb2a485f3666a4008a8d951d7cee9b').update({
            data: {
                group: 'weicao',
                friends: [{
                    name: 'xubin',
                    age: 22,
                    group: 'weicao'
                }]
            }
        })

        // 2.set:直接替换原有数据，id不会变
        // collection.doc('9ffb2a485f3666a4008a8d951d7cee9b').set({
        //     data: {
        //         group: 'weicao',
        //         friends: [{
        //             name: 'xubin',
        //             age: 22,
        //             group: 'weicao'
        //         }]
        //     }
        // })
    },
    queryData: function() {

        // 1. 全部查询
        // collection.get().then(res => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err)
        // })



        // 2.条件查询
        // field:限定查询出的字段，id字段都会有
        // const cmd = db.command;
        // collection.where({
        //     age: cmd.gt(26)
        // }).field({
        //     name: true,
        //     age: true,
        //     group: true
        // }).get().then(res => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err)
        // })



        // 3.排序
        // 年龄从高到低
        // collection.orderBy('age', 'desc').get().then(res => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err)
        // })



        // 4.正则表达式查询
        // 下面的name是查询的字段
        // ^y.* 是正则表达式
        // options: 'i'  意思是忽略大小写

        // collection.where({
        //     name: db.RegExp({
        //         // 这个字段就是正则表达式
        //         regexp: '^y.*',
        //         options: 'i'
        //     })
        // }).get().then(res => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err);
        // })


        // 分页查询


        collection.skip(this.data.page * this.data.limit).limit(this.data.limit).get().then(res => {
            this.data.page++
                console.log(res)
        }).catch(err => {
            console.log(err);
        })



        // collection.where({
        //     name: db.RegExp({
        //         regexp: '^y.*',
        //         options: 'i'
        //     })
        // }).skip(this.data.page * this.data.limit).limit(this.data.limit).get().then(res => {
        //     this.data.page++
        //         console.log(res)
        // }).catch(err => {
        //     console.log(err);
        // })
    }
})