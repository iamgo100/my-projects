import sqlite3
import os.path as p

def create_tables(con):

    # con.execute('PRAGMA foreign_keys = on')
    # con.commit()

    con.execute(
        '''
        CREATE TABLE IF NOT EXISTS news (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            headline TEXT NOT NULL,
            content TEXT NOT NULL
        )
        '''
    )
    con.commit()

def add_entry(con, cur, values):
    query = f'INSERT INTO news (headline, content) VALUES (?, ?)'
    try:
        cur.execute(query, values)
    except sqlite3.Error as e:
        print(f'Ошибка добавления: {e}\n')
    else:
        print('Запись успешно добавлена\n')
        con.commit()

def connecting():
    try:
        print(p.join(p.abspath(p.dirname(__file__)), 'databases/news.db'))
        con = sqlite3.connect(p.join(p.abspath(p.dirname(__file__)), 'databases/news.db'))
        cur = con.cursor()
        create_tables(con)
        return con, cur
    except sqlite3.Error as e:
        print(f'Ошибка: {e}')
        return

if __name__ == "__main__":
    pass