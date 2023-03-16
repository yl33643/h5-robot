## 接口

```bash
cnpm i

node server.js
```

- 测试

```bash
curl "http://127.0.0.1:3100/api/chat" \
    -X POST -H "Content-Type: application/json" \
    -d '{"chat":"hello world"}'
# hello world
```

- 部署

```bash
pm2 start server.js --name h5-robot
```

## 参考

- [HelloAllenZHU / wxchat](https://github.com/HelloAllenZHU/wxchat)

- [data / research / chat](https://gitlab.zeaho.com/data/research/chat)
