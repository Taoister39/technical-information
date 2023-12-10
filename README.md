# 技术文章系统 - 后端

## 使用技术

- `React`
- `Ant=design`
- `axios`
- `echarts-for-react`
- `Mobx`
- `react-quill`
- `sass`
- `Vite`
- `typescript`

## 介绍

**为了方便用户快捷地进行技术交流，及时地获得需要的技术资讯**

为程序员提供关于技术框架的解决疑问，从而使得技术门槛降低，增加程序员的知识水平

![_11-12-2023_61128_localhostd3b6762cfd83e6c7.jpeg](https://img.picgo.net/2023/12/11/_11-12-2023_61128_localhostd3b6762cfd83e6c7.jpeg)



> 这是针对[技术文章系统 后端](https://github.com/Taoister39/technical-information-back-end)对应的`Web`服务

![_11-12-2023_61328_localhost4ce92c48df5b8ef3.jpeg](https://img.picgo.net/2023/12/11/_11-12-2023_61328_localhost4ce92c48df5b8ef3.jpeg)

## docker 部属方式

**本Web项目只有创建容器，推荐去后端项目查看`docker compose`**

1. 更改`web` *服务* 的`dockerfile`位置，确保`docker compose`正常容器化
2. 在本项目下进入`powershell`
3. 运行`docker compose build`
4. 运行`docker compose create`，创建compose镜像
5. 运行`docker compose start`，使得docker实例化容器

## 本地开发使用方式

```bash
npm install # 下载依赖
```
依赖下载完毕时，即可开始构建运行（**开发环境**）
```bash
npm run dev
```

**如果在生产环境下使用，请添加`.env.production`文件在项目文件夹下，用于与部署时的软件配置。**

```bash
npm run build
npm run preview
```
