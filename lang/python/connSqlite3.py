import sqlite3

cx = sqlite3.connect("c:\\users\\hj\\documents\\test.db")
# cx = sqlite3.connect(":memory:")

cu = cx.cursor()
cu.execute("create table lang(name, first_appeared)")
cu.execute("insert into lang values (?, ?)", ("C", 1972))
for row in cu.execute("select * from lang"):
    print(row)

cx.close()