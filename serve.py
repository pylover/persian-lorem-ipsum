
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler


def main(addr: str='', port: int=0) -> int:
    http_server = HTTPServer((addr, port), SimpleHTTPRequestHandler)
    target_url = 'http://%s:%s' % http_server.server_address
    print(target_url)
    http_server.serve_forever()
    return 0


if __name__ == '__main__':
    sys.exit(main(port=8089))
