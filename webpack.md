webpack
-
安装

    //全局安装
    npm install webpack -g
    //本地安装
    npm install webpack webpack-cli -D

    //运行
    npx webpack

核心：entry, output, plugin, loader

entry
-
从哪里开始入口打包

    //配置webpack.config.js 单个入口
    module.exports = {
        entry: './src/index.js'
    }

    //配置webpack.config.js 多个个入口
    module.exports = {
        entry: [ './src/index.js' , './src/a.js' ]
    }

output
-
打包完成的文件输出位置

    //配置webpack.config.js 单个出口
    module.exports = {
        entry: './src/index.js',

        //绝对路径
        output: {
            filename: 'build.js',
            path: path.resolve('./build')
        }
    }

配置开发服务器
-

    //安装
    npm install webpack-dev-server - D
    //运用
    npx webpack-dev-server

    //配置devServer
    module.exports = {
        entry: './src/index.js',

        //绝对路径
        output: {
            filename: 'build.js',
            path: path.resolve('./build')
        },
        devServe: {

        }
    }

plugin
-
常用插件（安装，引入，new，使用

HtmlWebpackPlugin 将html打包到输出文件下，自动引用生产的js
CleanWebpackPlugin






    //配置webpack.config.js 单个出口
    module.exports = {
        entry: './src/index.js',

        //绝对路径
        output: {
            filename: 'build.js',
            path: path.resolve('./build')
        },
        plugin: {

        }
    }
