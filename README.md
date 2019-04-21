# 使用脚手架搭建vue项目
## 创建时间 2019-04-20
## 创建时环境
1. nodejs v10.15.3
2. npm v6.9.0
3. vue cli v3.6.3
## 创建方式
1. 升级nodejs到最新
    1. sudo npm install -g n
    2. sudo npm cache clean -f
    3. sudo n stable
2. 升级npm到最新
    1. sudo npm i npm@latest -g
3. 安装vue-cli
    1. 使用npm安装 npm i -g @vue/cli 失败
    2. 使用yarn安装 yarn global add @vue/cli
3. 进入工作空间，使用脚手架创建项目
    1. vue create vue-ts-action 使用自定义方式创建项目
4. 新增vue.config.js [配置可参考](https://cli.vuejs.org/zh/config/)
5. 运行 yarn serve
6. 增加scss的支持，参考文档
    ```
            css: {
                loaderOptions: {
                  sass: {
                    test: /\.scss$/
                  },
                }
              }
    ```
