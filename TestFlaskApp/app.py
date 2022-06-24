from flask import Flask, render_template
import news as db

app = Flask(__name__)

@app.route('/')
def main():
    con, cur = db.connecting()
    # db.add_entry(con, cur, ('Новость 1', 'У нас получилось все запустить!'))
    # db.add_entry(con, cur, ('Новость 2', 'Мы сделали это снова!'))
    res = con.execute('SELECT * FROM news').fetchall()
    con.close()
    return render_template('index.html', news=res)

if __name__ == "__main__":
    app.run(
        host='localhost', 
        port=8000
    )