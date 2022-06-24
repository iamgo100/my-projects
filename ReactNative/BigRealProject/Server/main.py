from flask import Flask
app = Flask('NewsApp')
app.config['SECRET_KEY'] = 'ffcbb1af81d63144389a5d6e'

@app.route('/')
def index():
    return 'hello index'

if __name__ == "__main__":
    app.run(
        host='localhost', 
        port=8000
    )