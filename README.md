## 环境安装
```bash
pm2 install pm2-logrotate  # 安装
pm2 set pm2-logrotate:retain 30    # 保留服务器 30 天日志
pm2 set pm2-logrotate:workerInterval 60   #  60秒检测一次，根据 max\_size 的值来检测是否需要日志分割。
```
## API

| 说明 | 参数 | 接口 | 请求方式 | 返回值 |
| --- | ---- | --- | ------- | ---- |
| 发表留言 | `{ name<String>, email<String>, article<String>, text<String> }` | /api/v1/message | post | JSON `{ code<Number>, msg<String> }` |


## code 码
| 值 | 描述 |
| --- | ---- |
| 0  | 成功 |
| -1 | 服务端错误 |
