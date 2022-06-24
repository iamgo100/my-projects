#!/usr/bin/python
# -*- coding: utf-8 -*-

import os.path
import tornado.httpserver
import tornado.ioloop
import tornado.web
import tornado.websocket
import asyncio
import json
from tornado.options import define, options

asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        self.render('index.html')

class EchoHandler(tornado.websocket.WebSocketHandler):
    def on_message(self, message):
        data = json.loads(message)
        if data.get('code'):
            answ = '\n'.join(data['code'].split('|'))
            res = json.dumps({'rightCode': answ})
            self.write_message(res)

def get_handlers():
    return [
        (r'/', IndexHandler),
        (r'/server', EchoHandler),
    ]

if __name__ == '__main__':
    app = tornado.web.Application(
        handlers=get_handlers(), 
        static_path=os.path.join(os.path.dirname(__file__), "static"),
        template_path=os.path.join(os.path.dirname(__file__), "templates")
    )
    http_server = tornado.httpserver.HTTPServer(app)
    http_server.listen(8000)
    print('start')
    tornado.ioloop.IOLoop.instance().start()