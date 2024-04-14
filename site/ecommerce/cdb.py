import sqlite3
from werkzeug.security import check_password_hash, generate_password_hash
# Create a connection to the database
conn = sqlite3.connect("database.db")
curr = conn.cursor()
# Execute SQL statements to create tabless
username = "nathnael"
password = "<settings>"
hashed_password = generate_password_hash(password)

curr.execute("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY,username TEXT,password TEXT)")
curr.execute("CREATE TABLE IF NOT EXISTS admin(id INTEGER PRIMARY KEY,username TEXT,password TEXT)")
curr.execute("CREATE TABLE IF NOT EXISTS orders(id INTEGER PRIMARY KEY,username TEXT,productname TEXT,price INTEGER,phone TEXT)")
curr.execute("DELETE FROM admin")

curr.execute("CREATE TABLE IF NOT EXISTS products(id INTEGER PRIMARY KEY,name TEXT,category TEXT,price INTEGER,image_path TEXT)")
curr.execute("INSERT INTO admin (username, password) VALUES (?, ?)", (username, hashed_password))

print("Database and tables created successfully.")
conn.commit()
curr.close()
conn.close()