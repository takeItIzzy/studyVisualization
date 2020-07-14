const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	// source-map每个module生成对应的map文件
	// eval 每一个module模块执行eval，不生成map文件，在尾部生成一个sourceURL对应前后关系，所以更快
	// cheap 列信息 VLQ编码
	// module 包含了模块之间的sourcemap
	devServer: {
		// 配置webpack-dev-server， 在本地启动一个服务器运行
		host: 'localhost',
		port: 8089,
		open: true, // 自动打开页面
		historyApiFallback: true, //解决路由刷新后报错
	},
};
