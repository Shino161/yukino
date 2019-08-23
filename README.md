# yukino
![logo@2x.jpeg](https://i.loli.net/2019/08/23/gp1HfGPwKsW9BZO.jpg)
## 简介 Introduction
一个React前端脚手架

## 演示地址
http://rain.cocoiii.com

## 如何使用 How to use it
### 安装运行
```bush
npm i / yarn 
npm run dev / yarn run dev
```

### 测试环境打包
```bush
npm run build:dev / yarn run build:dev
```

### 生产环境打包
```bush
npm run build:prod / yarn run prod:dev
```

## 运行Docker版本
```bush
docker build -t daoko:1
docker run -d --name daoko -p 8099:80 daoko:1
```