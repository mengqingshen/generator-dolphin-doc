---
title: 起步
typora-copy-images-to: ipic

---

## 1 安装

在安装上，和其它基于 yeoman 的脚手架的安装方式是一致的。

```bash
$ npm i yo -g 
$ npm i generator-dolphin -g
```



## 2 使用

下面给出每个命令的详细情况，所有命令概览点击[这里](https://my.mindnode.com/PVotTqwZXzsCCxXfMbiqJVRjqpyxHLtmmACVHJp5#485.9,-18.2,-2)。

### 2.1 初始化项目

> 1. 通常，项目是首先在 git 托管平台创建的，然后 clone 到本地，这时项目已经有了顶层目录，因此在项目的顶层目录下，直接 `yo dolphin`， 然后根据提示操作即可。
> 2. 项目初始化完成后，会自动执行 `npm start`



```bash
yo dolphin 【my_app_name】
```



点击[这里](https://my.mindnode.com/dSNLTSWCiH4rBYKTfpyPwtmi9zfTzwpoGctExZwf)查看初始化项目过程中都做了什么。

| 选项                  | 说明                                       | 必填                      | 备注                                       |
| ------------------- | ---------------------------------------- | ----------------------- | ---------------------------------------- |
| 项目名称                | **1.** 项目的顶层文件夹的名字；**2.** `package.json` 中 `name` 字段的值 | 否（默认将当前命令执行时所在目录作为顶层目录） | 遵循文件夹命名规范                                |
| 项目描述                | `package.json` 中 `description` 字段的值      | 否                       |                                          |
| 项目创建者               | **1.** 文件顶部的注释；**2.** `package.json` 中 `author.name` 的值 | 否                       |                                          |
| 项目创建者电子邮箱           | **1.** 文件顶部的注释；**2.** `package.json` 红 `author.email` 的值 | 否                       |                                          |
| 项目版本号               | **1.** `package.json` 中 version 字段的值     | 否                       |                                          |
| PLUS 持续交付部署         | `config/plus.yaml` 中 `deploy.targetDir` 字段的值 | 否                       | 后续考虑把 plus 接入工作独立出来，单独提供一个配置 CI 命令。      |
| 开发环境                | 开发环境的地址（比如 http://dev.example.com）       | 是                       | 后续考虑把 plus 接入工作独立出来，单独提供一个配置 debug 环境的命令。 |
| CDN bucketName      | 对象存储空间名                                  | 否                       | 后续考虑把 plus 接入工作独立出来，单独提供一个配置 CDN 的命令。    |
| CDN accessKeyId     | 对象存储 accessKeyId                         | 否                       | 后续考虑把 plus 接入工作独立出来，单独提供一个配置 CDN的命令。     |
| CDN secretAccessKey | 对象存储 secretAccessKey                     | 否                       | 后续考虑把 plus 接入工作独立出来，单独提供一个配置 CDN的命令。     |

### 2.2 创建页面



```bash
yo dolphin:page 【my_page_name】
```



点击[这里](https://my.mindnode.com/A4rxc3v6eAXpSjhTAU1MrxPbdZc9hgB7f7nvJf7J#-174.5,-331.5,2)查看页面生成过程中都做了什么。

| 选项             | 说明                                     | 必填   | 备注        |
| -------------- | -------------------------------------- | ---- | --------- |
| 页面名称           | 页面所在文件夹的名字                             | 是    | 遵循文件夹命名规范 |
| 页面标题           | 页面中 title 标签的内容                        | 是    |           |
| 页面访问路径         | 配置到 `.yo-rc.json` 中的 `path.[pageName]` |      |           |
| 数据流方案          | 页面采用的数据流方案，提供了 mobx、redux、none 3 中类型   | 是    |           |
| 页面作者姓名         | 页面初始化时生成的文件的顶部注释                       | 否    |           |
| 页面作者电子邮箱       | 页面初始化时生成的文件的顶部注释                       | 否    |           |
| 页面对应的 API 文档地址 | 页面初始化时生成的 API 文件的顶部注释                  | 否    |           |

### 2.3 创建模块



```bash
yo dolphin:module 【my_page_name】 【my-module-name】 [--module 【模块名称】]
```



点击[这里](https://my.mindnode.com/5GgC5qMEBg86t7kS8Rm7GWSxC2q74Qqd796wEvWE)查看模块文件生成过程中都做了什么。

| 选项          | 说明                        | 必填              | 备注        |
| ----------- | ------------------------- | --------------- | --------- |
| 页面名称        | 页面所在文件夹的名字                | 是               | 遵循文件夹命名规范 |
| 模块文件名称      | 模块文件的名字                   | 是               | 遵循文件命名规范  |
| 模块文件类型      | component、container、store | 否（默认 component） |           |
| 模块文件创建者姓名   | 模块文件注释                    | 否               |           |
| 模块文件创建者电子邮箱 | 模块文件注释                    | 否               |           |



### 2.4 删除页面/模块



```bash
yo dolphin:clean 【my_page_name】 [--module 【my-module-name】]
```

点击[这里](https://my.mindnode.com/CR56fbo9wynkU6b6xvPxamWFd7bKnmZN1GzLs5UG)查看模块删除过程中都做了什么。

| 选项     | 说明         | 必填   | 必备   |
| ------ | ---------- | ---- | ---- |
| 页面名称   | 页面所在文件夹的名字 | 是    |      |
| 模块文件名称 | 模块文件的名字    | 否    |      |



## 3 举个栗子

### 3.1 初始化项目

> 项目初始化完成后，会自动在 3000 端口启动本地 debug 服务。

```bash
➜  yo dolphin dolphin_test_app

                            GGGG
                          LLGGGG
                    LLGGGGGGGG
                  GGGGGGGGGGGG
                GGGGGGGGGGGGGG
              ..GGGGGGGGGGGGGG
              GGGGGGGGGGGGGGLL
              GGGGGGGGGGGGGGLL
              GGGGGGGGGGGGGGff
              GGGGGGGGGGGGGG;;
            ;;GGGGGGGGGGGGGGGG
            GGGGGGGGGGGGGGGGGGGG
          GGGGGGGGGGGGGGGGGGGG      ffff
        iiGGGGGGGGGGGGGGGGGGGG      ffffjj
        GGGGGGGGGGGGGGGGGGttGG      iiffffffffff
        GG  LLGGGGGGGGGGGG            ffffffffffff
              GGGGGGGGGG;;            ffffffffffffff
              GGGGGGGGGG              ffffffffffffff
              GGGGGGGGLL              ffffffffffffffff
            ;;GGGGGGGG                ffffffffffffffff
            jjGGGGGG                  ffffffffffffffff
            ffGGGGjj                  jjffffffffffffff
            GGGGGG                   jffffffffffffffff
        ..GGGGGG                     fffffffffffffffffff
        GGGGGGLL                    ffffffffffffffffffffff
      GGGGGGGGff                    ffffffffffffffffffffff
          GGGG                      ttff  ffffffffffffffffjj
          LLGG                            ffffffffffff:  jj
          ff                              ffffffffffff
                                            ffffffffff
                                            ffffffffff
                                              ffffffff
                                                ffffff
                                                 jjffff,
                                                  ffffjj
                                                    ffffff
                                                    ffffffff
                                                    ffffffffff
                                                    ttffff
                                                    ffF


Work is stupid, the whole point is to get less of it.

? 项目名称（将作为项目文件夹名称） dolphin_test_app
? 项目描述 测试项目
? 项目创建者 mengqingshen
? 项目创建者电子邮箱 mengqingshen_sean@outlook.com
? 项目版本号 1.0.0
? PLUS 持续交付部署路径 /opt/www/dolphin_test_app/public
? 开发环境的地址（比如: http://dev.example.com） http://dev.example.com
? CDN bucketName testtest
? CDN accessKeyId xxx
? CDN secretAccessKey xxx
mkdir: /Users/mengqingshen/demos/dolphin_demos/dolphin_test_app: File exists
   create .babelrc
   create .eslintignore
   create .eslintrc
   create .gitignore
   create package.json
   create config/plus.yaml
   create build/webpack.config.base.js
   create build/webpack.config.dev.js
   create build/webpack.config.prod.js
   create server/index.js
   create server/koa-server.js
   create server/webpack-server.js
   create script/pre-deploy.sh
   create script/upload.js
   create server/config/constants.js
   create src/apis/common.js
   create src/helpers/get-entries.js
   create src/helpers/toast.js
   create src/modules/common.js
   create src/styles/common.css
   create src/templates/default.ejs
```



### 3.2 创建页面

> 页面创建完成后，会自动打开预览页面。

```bash
➜  dolphin_test_app yo dolphin:page mobx_test_page
? 页面名称（作为页面所在文件夹的名字） mobx_test_page
? 页面标题 测试页面
? 页面访问路径 /test.html
? 数据流方案 mobx
? 页面作者姓名 mengqingshen
? 页面作者电子邮箱 mengqingshen_sean@outlook.com
? 页面对应的 API 文档地址 https://test.wiki.com/xxx
mkdir: /Users/mengqingshen/demos/dolphin_demos/dolphin_test_app/src/pages: No such file or directory
   create src/apis/mobx_test_page.js
   create src/pages/mobx_test_page/config.js
   create src/pages/mobx_test_page/entry.js
   create src/pages/mobx_test_page/style.scss
   create src/pages/mobx_test_page/components/.gitignore
   create src/pages/mobx_test_page/containers/index.js
   create src/pages/mobx_test_page/stores/index.js
   create src/pages/mobx_test_page/stores/main.js
   create src/pages/mobx_test_page/stores/request.js
   create src/pages/mobx_test_page/stores/ui.js
```



### 3.3 创建模块

```bash
➜  dolphin_test_app yo dolphin:page mobx_test_page
? 页面名称（作为页面所在文件夹的名字） mobx_test_page
? 页面标题 测试页面
? 页面访问路径 /test.html
? 数据流方案 mobx
? 页面作者姓名 mengqingshen
? 页面作者电子邮箱 mengqingshen_sean@outlook.com
? 页面对应的 API 文档地址 https://test.wiki.com/xxx
mkdir: /Users/mengqingshen/demos/dolphin_demos/dolphin_test_app/src/pages: No such file or directory
   create src/apis/mobx_test_page.js
   create src/pages/mobx_test_page/config.js
   create src/pages/mobx_test_page/entry.js
   create src/pages/mobx_test_page/style.scss
   create src/pages/mobx_test_page/components/.gitignore
   create src/pages/mobx_test_page/containers/index.js
   create src/pages/mobx_test_page/stores/index.js
   create src/pages/mobx_test_page/stores/main.js
   create src/pages/mobx_test_page/stores/request.js
   create src/pages/mobx_test_page/stores/ui.js
➜  dolphin_test_app yo dolphin:module mobx_test_page --module store my-first-store
? 页面名称（页面所在目录名称） mobx_test_page
? 模块文件名称 my-first-store
? 模块文件类型 store
? 模块文件创建者姓名 mengqingshen
? 模块文件创建者电子邮箱 mengqingshen_sean@outlook.com
   create src/pages/mobx_test_page/stores/my-first-store.js
```



### 3.4 删除模块

```bash
➜  dolphin_test_app yo dolphin:clean mobx_test_page my-first-store --module store
? 页面名称（页面所在目录名称） mobx_test_page
? 模块文件类型 store
? 模块文件名称 my-first-store
? 是否删除模块？ Yes
 conflict src/pages/mobx_test_page/stores/my-first-store.js
? Overwrite src/pages/mobx_test_page/stores/my-first-store.js? overwrite
    force src/pages/mobx_test_page/stores/my-first-store.js
```



### 3.5 删除页面

```bash
➜  dolphin_test_app yo dolphin:clean mobx_test_page
? 页面名称（页面所在目录名称） mobx_test_page
? 是否删除页面？ Yes
 conflict src/pages/mobx_test_page
? Overwrite src/pages/mobx_test_page? overwrite
    force src/pages/mobx_test_page
   create src/pages/mobx_test_page/components
   create src/pages/mobx_test_page/config.js
   create src/pages/mobx_test_page/containers
   create src/pages/mobx_test_page/containers/index.js
   create src/pages/mobx_test_page/entry.js
   create src/pages/mobx_test_page/stores
   create src/pages/mobx_test_page/stores/index.js
   create src/pages/mobx_test_page/stores/main.js
   create src/pages/mobx_test_page/stores/request.js
   create src/pages/mobx_test_page/stores/ui.js
   create src/pages/mobx_test_page/style.scss
 conflict src/apis/mobx_test_page.js
? Overwrite src/apis/mobx_test_page.js? overwrite
    force src/apis/mobx_test_page.js
```

