// 基于node，遵循comminjs语法

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin= require('mini-css-extract-plugin')

module.exports = {
    //入口
    entry:'./src/index.js',
    //出口
    output:{
        filename: 'build.js',
        // 这个路径必须是绝对路径
        path: path.resolve('./build')
    },

    //开发服务器
    devServer: {
        contentBase: './bulid',
        port: 3000,
        compress: true,  //服务器压缩
        open: true, //自动打开浏览器
        hot:true //热加载
    },

    //插件配置
    plugins: [
        // new ExtractTextWebpackPlugin({
        //     filename: 'css/index.css'
        // }),
        new MiniCssExtractPlugin({
            filename: 'css/index.css'
        }),
        // 热更新
        new webpack.HotModuleReplacementPlugin('./src/index.js'),
        //清空build文件
        new CleanWebpackPlugin(),
        //打包html文件
        new HtmlWebpackPlugin({
            template:'./src/index.html',  //需要打包的html
            //缓存output的js
            hash: true,
        }),
    ], 

    //配置模块loader(npm install style-loader,css-loader,less-loader,sass-laoder)
    module: {
        rules: [
            //1.抽离样式到css文件 通过link方式引用
            // { loader: 'style-loader' },
            // {   
            //     test: /\.css$/ , use : ExtractTextWebpackPlugin.extract({
            //         use: [
            //             { loader: 'css-loader' }
            //         ]
            //     })
            // },
            {   
                test: /\.css$/ , use : [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader' }
                ]
            },
            // {   
            //     test: /\.less$/ , use : ExtractTextWebpackPlugin.extract({
            //         use: [
            //             { loader: 'css-loader' },
            //             { loader: 'css-loader' }
            //         ]
            //     })
            // }
        ]
    }, 

    
    mode: 'development', //可以更改模式
    resolve: {}, //配置解析
}

//1.抽离样式到css文件 通过link方式引用
//extract-text-webpack-plugin@next
//mini-css-extract-plugin