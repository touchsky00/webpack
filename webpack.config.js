// 基于node，遵循comminjs语法
//开发时改样式热加载

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const PurifycssWebpack = require('purifycss-webpack')
const glob = require('glob')
const CopyWebpackPlugin = require('copy-webpack-plugin')

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
        new ExtractTextWebpackPlugin({
            filename: 'css/index.css',
            // disable: true
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

        // 删除多余的css
        new PurifycssWebpack({
            paths: glob.sync(path.resolve('src/*.html'))
        }),

        //拷贝文件
        new CopyWebpackPlugin([
         { from: './src/hello', to: './public'}
        ])
    ], 

    //配置模块loader(npm install style-loader,css-loader,less-loader,sass-laoder)
    module: {
        rules: [
            //1.抽离样式到css文件 通过link方式引用
            // { loader: 'style-loader' },
            {   
                test: /\.css$/ , use : ExtractTextWebpackPlugin.extract({
                    // fallback:'style-loader',
                    use: [
                        { loader: 'css-loader' },
                        { loader: 'postcss-loader'}
                    ]
                })
            },
        ]
    }, 

    
    mode: 'development', //可以更改模式
    resolve: {}, //配置解析
}

//1.抽离样式到css文件 通过link方式引用
//extract-text-webpack-plugin@next
//mini-css-extract-plugin

//2清除没有用的样式删除掉用于HtmlWebpackPlugin之后
//purifycss-webpack purify-css glob -D

// css加前缀
// -webkit-
//postcss-loader autoprefixer 需要配置postcss.config.js


//copy 文件
//CopyWebpackPlugin