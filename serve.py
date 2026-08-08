# 本地测试服务器 - 用于 PWA 开发和测试
# 运行: python serve.py
# 然后用手机浏览器访问 http://<电脑IP>:8080

import http.server
import socketserver
import os

PORT = 8080

os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
})

with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
    print(f" PWA 测试服务器已启动")
    print(f" 本机访问: http://localhost:{PORT}")
    print(f" 手机访问: http://<你的电脑IP>:{PORT}")
    print(f" 按 Ctrl+C 停止")
    httpd.serve_forever()
