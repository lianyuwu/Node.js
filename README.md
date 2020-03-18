##### node

```
node name(js名) -> 直接运行

```
###### 系统模块
```
path: 用于处理文件路径和目录路径的实用工具
path.resolve(__dirname, 'name.js') -> 绝对路径

fs: 用于文件的读写操作
```
###### 自定义模块
```
定义： require 自己封装的模块

1).如果有路径就去路径里面找
2).没有的话就去node_modules 里面找
3).再去node安装目录里面找

1.exports

2.module

3.require
```

###### HTTP 模块
```
http get post(form.html)
1.GET
< 32k
url 模块
url.parse(req.url,true)

2.POST
< 2G
querystring querystring.parse()
```


## demo2 工具

```
nrm 管理npm 源

nrm ls :全部的源
nrm use : 使用那个源
nrm add : 添加源，类似于公司的源

nodemen: 监听文件变化,自动重启服务
配置nodemon
1. npm i nodemon -D
2. 修改package.json 中启动命令
"start": "nodemon ./src/index.js",
"start:node": "node src/index.js",
3. 通过增加nodemon.json配置， 置顶，特定 watch 的文件
```

## dome3

```
1.介绍express已经使用

```