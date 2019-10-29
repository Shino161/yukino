
<p align="center"><img width="100px" src="https://i.loli.net/2019/08/26/p12idEoYW6j9Bg7.jpg"></p>
<p align="center">
<img src="https://github.com/Shino161/yukino/workflows/GithubAction/badge.svg">
<img src="https://img.shields.io/badge/language-TypeScript-blue.svg">
<img src="https://img.shields.io/badge/license-MIT-green.svg">
</p>

# yukino
## 特性 Feature
一个 React + Ant-Design 前端脚手架,支持 TypeScript & JavaScript。
+ 使用 Webpack4 打包，构建速度优异 ✨
+ 通过 chunkash 和 contenthash 进行前端资源的缓存 ✨
+ 通过 React.lazy 进行组件懒加载和页面懒加载 ✨
+ TS 或者 JS 均可按需引用 Antd 组件 ✨
+ CSS 模块化，避免样式复杂后引起相互污染 ✨
+ 支持 Docker 部署（Nginx镜像）
![1567754482325.jpg](https://i.loli.net/2019/09/06/p8Ktkc1UQDJ7dFH.jpg)

## 演示地址
http://hensin.cocoiii.com/

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
docker build -t yukino .
docker run -d --name yukino -p8099:80 yukino
```