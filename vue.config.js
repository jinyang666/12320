const path= require("path")

function resolve(dir){
	return path.join(__dirname,dir)
}
module.exports={
	baseUrl:"./",
	outputDir:"dist",
	assetsDir:'static',
	pages:{
		//登录页面
		login:{
			entry: 'src/modules/login/main.js',
			template: 'public/login.html',
			filename:"login.html",
			title: '登录'
		},
		//登录页面
		index:{
			entry: 'src/modules/index/main.js',
			template: 'public/index.html',
			filename:"index.html",
			title: '主页面'
		},
		//注册页面
		register:{
			entry: 'src/modules/register/main.js',
			template: 'public/register.html',
			filename:"register.html",
			title: '注册页面'
		},
		//挂号模块
		registration:{
			entry: 'src/modules/registration/main.js',
			template: 'public/registration.html',
			filename:"registration.html",
			title: '在线挂号'
		},
	},

	//filenameHashing:false, //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
	//设置代理
	devServer: {
    	// 设置代理
	    proxy: {
	      "/dcloud-provider-uac": {
	        //target: "http://www.yunju360.com/", // 域名
	        //target:"http://47.104.5.142/",
	        target:"http://1.180.60.30:8189/",
	        ws: true, // 是否启用websockets
	        changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
	        pathRequiresRewrite: {
	          "^/dcloud-provider-uac": "/"
	        }
          },
          "/dcloud-auth": {
	        //target: "http://www.yunju360.com/", // 域名
	        //target:"http://47.104.5.142/",
	        target:"http://1.180.60.30:8189/",
	        ws: true, // 是否启用websockets
	        changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
	        pathRequiresRewrite: {
	          "^/dcloud-auth": "/"
	        }
          },
          "/codes": {
	        //target: "http://www.yunju360.com/", // 域名
	        //target:"http://47.104.5.142/",
	        target:"http://1.180.60.30:8189/",
	        ws: true, // 是否启用websockets
	        changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
	        pathRequiresRewrite: {
	          "^/codes": "/"
	        }
	      }
          
	    }
    },
    configureWebpack: config => {
        config.resolve = {
           extensions: ['.js', '.vue', '.json',".css"],
            alias: {
              'vue$': 'vue/dist/vue.esm.js',
              '@': resolve('src'),
            }
        }
    }
}