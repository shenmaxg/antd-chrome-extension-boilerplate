# antd-chrome-extension-boilerplate
使用 react + antd 开发 chrome-extension 的脚手架工程，具有热加载功能。

## 特性

1. 使用 antd + react 开发 chrome extension。
2. 解决了当前页面与 content-script 间的 css 污染问题。
3. 增加开发模式，提供 chrome extension 热更新功能。

## 使用

```
npm run start
```

启动开发模式，在 chrome 浏览器中加载该应用的 dist 目录，此时 dist 目录下的文件具有热更新功能，并且会自动刷新当前页面。

```
npm run build
```

打包模式，不赘述。

## 相关文章

1. [如何使用 antd + react 开发 chrome extension](https://zhuanlan.zhihu.com/p/393004855)
2. [如何实现 chrome extension 的热更新](https://zhuanlan.zhihu.com/p/399937088)