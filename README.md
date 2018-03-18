原本是想做博客的登录服务，后来因为直接用了畅言，所以就不需要这个了。

但是还是可以把它当做一个 oauth2 实现的 demo

# demo

未启用。。。

## TODOS:

- [x] 用户评论
- [ ] 阅读统计

## 环境安装

```bash
pm2 install pm2-logrotate  # 安装
pm2 set pm2-logrotate:retain 30    # 保留服务器 30 天日志
pm2 set pm2-logrotate:workerInterval 60   #  60秒检测一次，根据 max\_size 的值来检测是否需要日志分割。
```
