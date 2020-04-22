// 基于node，遵循comminjs语法

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    //入口
    // entry:'./src/index.js',
    // 多入口
    entry: {
        index: './src/index.js',
        a: './src/a.js'
    },
    //出口
    output:{
        // filename: 'build.[hash:8].js',
        // 多出口
        filename: '[name].[hash:8].js',
        // 这个路径必须是绝对路径
        path: path.resolve('./build')
    },

    //开发服务器
    devServer: {
        contentBase: './bulid',
        port: 3000,
        compress: true,  //服务器压缩
        open: true  //自动打开浏览器
        //hot:
    },

    //配置模块loader
    module: {}, 

    //插件配置
    plugins: [
        //清空build文件
        new CleanWebpackPlugin(),
        //打包html文件
        new HtmlWebpackPlugin({
            filename:'a.html',
            template:'./src/index.html',  //需要打包的html
            //缓存output的js
            hash: true,
            // //压缩
            // minify: {
            //      //删除双引号
            //     removeAttributeQuotes: true,
            //     //折叠成一行
            //     collapseWhitespace: true
            // },
            chunks: ['a']
        }),
        new HtmlWebpackPlugin({
            filename: 'b.html',
            template:'./src/index.html',  //需要打包的html
            //缓存output的js
            hash: true,
            // //压缩
            // minify: {
            //      //删除双引号
            //     removeAttributeQuotes: true,
            //     //折叠成一行
            //     collapseWhitespace: true
            // },
            chunks: ['index']
        })
    ], 
    mode: 'development', //可以更改模式
    resolve: {}, //配置解析
}