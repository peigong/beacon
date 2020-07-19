# 灯塔(beacon)概念验证 #

## 本机HOST ##
	
	127.0.0.1 www.a.com
	127.0.0.1 www.b.com
	127.0.0.1 www.c.com

## 配置和运行 ##

- 安装node.js
- `npm install` 安装依赖包
- `npm start` 运行DEMO web server

## 查看DEMO ##

从广告宿主模拟页面点击链接跳转至广告着陆模拟页面，分别在两个页面的`console`控制台查看打印出的用户标识，应该是一致的。

- `http://www.a.com:8080/index.html` 广告宿主模拟页面
- `http://www.b.com:8080/page.html` 广告着陆模拟页面
- `http://www.c.com:8080/beacon` 灯塔(beacon)模拟服务