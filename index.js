const httpProxy = require("http-proxy");

httpProxy
  .createProxyServer({
    target: "http://52.142.83.244:3003",
  })
  .listen(3333);