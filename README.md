<h2 align="center">@cyber-tools/tinify</h2>
<img src="https://20200729090508-1259190979.cos.ap-shanghai.myqcloud.com/5a11796605245c226910695917c87293.gif"/>
<h2 align="center">Table Of Contents</h2>
 
1. [Install](#Install)
2. [Introduction](#Introduction)
3. [Configuration](#Configuration)
4. [Commands](#Commands)
 
<h2 align="center">Install</h2>

全局安装:
```bash
npm install @cyber-tools/tinify -g
```

作为开发依赖安装:
```bash
npm instal @cyber-tools/tinify --save-dev
```
<h2 align="center">Introduction</h2>
<div align="center">
  基于<a href="https://tinypng.com/developers/reference/nodejs">tinipng</a>的openAPI
  该工具用于批量压缩项目中的图片文件,为了防止重复压缩,会根据文件内容的MD5值生成tinify.lock.json记录文件
</div>

<h2 align="center">Commands</h2>

创建配置文件:
```bash
cyber-tinify init
```

登录到tinipng:
```bash
cyber-tinify login
```

登出tinipng:
```bash
cyber-tinify logout
```

查看登录信息:
```bash
cyber-tinify view
```

批量压缩:
```bash
cyber-tinify start
```

