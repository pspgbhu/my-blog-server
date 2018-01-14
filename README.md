# 博客后端服务

目前完成如下服务：

[x] 用户评论接口
[ ] 阅读统计

## 环境安装

```bash
pm2 install pm2-logrotate  # 安装
pm2 set pm2-logrotate:retain 30    # 保留服务器 30 天日志
pm2 set pm2-logrotate:workerInterval 60   #  60秒检测一次，根据 max\_size 的值来检测是否需要日志分割。
```

## API

| 说明 | 接口 | 请求方式 |
| --- | --- | ------- |
| 发表留言 |  /api/v1/message | post |


## code 码
| 值 | 描述 |
| --- | ---- |
| 0  | 成功 |
| -1 | 服务端错误 |
