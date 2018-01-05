---
title: 手册
typora-copy-images-to: ipic

---

## 1 项目

### 1.1 目录

```bash

```



### 1.2 构造系统

#### 别名

说明：对应 webpack 配置文件中的`resolve/alias` 配置。

用途：使用相对路径，需要数清楚文件嵌套的层次和相对位置，这有时会非常麻烦，而且很容易出错。因此对所有“公共”目录做了别名，来避免采用相对路径引用它们可能带来的麻烦。

| 别名             | 实际路径           |
| -------------- | -------------- |
| @components    | src/components |
| @apis          | src/apis       |
| @helpers       | src/helpers    |
| @styles        | src/styles     |
| @dophin/config | .yorc.js       |



#### 调试



#### 模版

+ 确保静态资源支持 https：如果要使用 script 或 link 引入第三方资源，务必使用 `//example.com/xxx.js` 的形式。



## 页面

### 数据流

### API



## 模块



## 总结

### 命名