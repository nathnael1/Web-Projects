from flask import Flask,render_template,request,redirect,session,url_for,jsonify,flash
from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash
from cs50 import SQL
import time;
import re
from werkzeug.utils import secure_filename
import os
app = Flask(__name__)
app.secret_key = "E_n_c_r_y_p_t_e_d_2_!_6_7_!_2_!"

db = SQL("sqlite:///database.db")

# Define the folder where uploaded files will be stored# This will create an 'uploads' folder in the current directory
UPLOAD_FOLDER = os.path.join('static', 'uploads')
# Ensure the UPLOAD_FOLDER directory exists
os.makedirs(os.path.join(app.static_folder, 'uploads'), exist_ok=True)

# Configure Flask app to use the upload folder
STATIC_FOLDER = os.path.join(app.root_path, 'static')
app.config['STATIC_FOLDER'] = STATIC_FOLDER
app.static_url_path = '/static'

app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)
def is_authenticated():
    return session.get("user_id") is not None

def is_admin():
    return session.get("user_role") == "admin"

@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

@app.route("/",methods = ["GET","POST"])
def index():
    if request.method == "GET":
        session.pop('product_price', None)
        session.pop('product_name', None)
        session.pop('src', None)
        if is_authenticated():
            
            username = db.execute("SELECT username from users where id = ?",session["user_id"])
            username = username[0]['username'] if username else "admin"
            Clothes = db.execute("SELECT * FROM products WHERE category = ? LIMIT 8", "Clothe")
            Furnitures = db.execute("SELECT * FROM products WHERE category = ? LIMIT 8", "Furniture")
            Electronics = db.execute("SELECT * FROM products WHERE category = ? LIMIT 8", "Electronics")
            if Clothes:
                clothetag = "Clothes"
            else:
                clothetag = ""
            if Furnitures:
                furnituretag = "Furnitures"
            else:
                furnituretag = ""
            if Electronics:
                electronictag = "Electronics"
            else:
                electronictag = ""
            for Clothe in Clothes:
                    Clothe['relative_image_path'] = Clothe['image_path'].split('static')[1]
            for Furniture in Furnitures:
                    Furniture['relative_image_path'] = Furniture['image_path'].split('static')[1]
            for Electronic in Electronics:
                    Electronic['relative_image_path'] = Electronic['image_path'].split('static')[1]
            return render_template("index.html", Clothes=Clothes,Electronics = Electronics,Furnitures = Furnitures,clothetag = clothetag , furnituretag = furnituretag,electronictag = electronictag,username = username)
        return redirect("/login")
    else:
        name = request.form.get("search")

        allProducts = db.execute("SELECT * FROM products WHERE name  LIKE ?",'%' + name + '%')
        for allProduct in allProducts:
            allProduct['relative_image_path'] = allProduct['image_path'].split('static')[1]
        return render_template("allindex.html",allProducts= allProducts,name = name)


@app.route("/all")
def all():
    session.pop('product_price', None)
    session.pop('product_name', None)
    session.pop('src', None)
    if is_authenticated():  
        username = db.execute("SELECT username from users where id = ?",session["user_id"])
        username = username[0]['username'] if username else "admin"
        products = db.execute("SELECT * FROM products ") 
        for product in products:
            product['relative_image_path'] = product['image_path'].split('static')[1]
        return render_template("all.html",products = products,username = username)
    return redirect("/login")
        
@app.route("/signin", methods=["GET", "POST"])
def signin():
    """Register user"""
    session.clear()
    username = request.form.get("username")
    
    password = request.form.get("password")
    confirmation = request.form.get("confirmation")
    pattern = re.compile(r'\d')
    
    if request.method == "POST":
        users = db.execute("SELECT * FROM users WHERE username = ?", username)
        if username is not None:
            username_lower = username.lower()
        if not username:
            
            user ="Provide username"
            time.sleep(2)
            return render_template("signin.html",user = user)
        if not password:
            password = "Provide password"
            time.sleep(2)
            return render_template("signin.html",password = password)
        if len(password) < 8:
            password = "Must be at least 8 character"
            time.sleep(2)
            return  render_template("signin.html",password = password)
        if not re.search(pattern, password):
            password = "Weak password add digit"
            time.sleep(2)
            return render_template("signin.html",password = password)
        if not confirmation:
            passwordConfirmation = "Add password for confirmation"
            time.sleep(2)
            return render_template("signin.html",passwordConfirmation= passwordConfirmation)
        if not password == confirmation:
            error = "PASSWORD DOES NOT MATCH"
            time.sleep(2)
            return render_template("signin.html",error = error)
        if users:
            error = "User already exists"
            time.sleep(2)
            return render_template("signin.html",error = error)
        hashed_password = generate_password_hash(password)  # Hash the password
        db.execute("INSERT INTO users (username, password) VALUES (?, ?)", username_lower, hashed_password)

        new_user_id = db.execute("SELECT LAST_INSERT_ROWID() AS id")[0]["id"]
        session["user_id"] = new_user_id
        return redirect("/login")
    return render_template("signin.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    session.clear()
    if request.method == "POST":
        # Ensure username was submitted
        username = request.form.get("username")
        if username is not None:
            username_lower = username.lower()
        if not request.form.get("username"):
            user = "Must provide username"
            time.sleep(2)
            return render_template("login.html",user = user)

        # Ensure password was submitted
        elif not request.form.get("password"):
            password = "Must provide password"
            time.sleep(2)
            return render_template("login.html",password = password)

        rows = db.execute("SELECT * FROM users WHERE username = ?",username_lower)
        if not rows or not check_password_hash(rows[0]["password"], request.form.get("password")):
            error = "Invalid username or password"
            time.sleep(2)
            return render_template("login.html",error = error)

        session["user_id"] = rows[0]["id"]
        session["user_role"] = "user" 
        return redirect("/")

    return render_template("login.html")
@app.route("/admin",methods = ["GET","POST"])
def admin():
    session.clear()
    if request.method == "POST":
        username = request.form.get("username")
        if username is not None:
            username_lower = username.lower()
        # Ensure username was submitted
        if not request.form.get("username"):
            user = "Provide admin Username"
            time.sleep(2)
            return render_template("admin.html",user = user)

        # Ensure password was submitted
        elif not request.form.get("password"):
            password = "Provide admin Password"
            time.sleep(2)
            return render_template("admin.html",password=password)

        rows = db.execute("SELECT * FROM admin WHERE username = ?", username_lower)
        if not rows or not check_password_hash(rows[0]["password"], request.form.get("password")):
            error = "Invalid username or password"
            time.sleep(2)
            return render_template("admin.html",error = error)

        session["user_id"] = rows[0]["id"]
        session["user_role"] = "admin" 
        return redirect("/admin_manager")
        
    return render_template("admin.html")
@app.route("/admin_manager", methods=["GET", "POST"])
def admin_manager():
    if request.method == "GET":
        if is_authenticated() and is_admin():
            rows = db.execute("Select * FROM users")
            orders = db.execute("Select * FROM orders")
            products = db.execute("Select * FROM products")
            return render_template("admin_manager.html",rows = rows,orders = orders, products = products)
        else:
            return redirect(url_for("admin"))
    else:
        if 'image' in request.files:
            productConfirmation = "Product added successfully"
            productNoConfirmation = "Error adding product. Please ensure all fields are filled correctly."
            product_name = request.form.get('name')
            price = request.form.get('price')
            category = request.form.get("text_data")  # Use request.form to get form data
            
            image_file = request.files['image']
            if image_file.filename != '' and product_name is not None and price is not None and  category is not None:
                # Save the file to the uploads folder
                image_filename = secure_filename(image_file.filename)
                image_path = os.path.join(app.static_folder, 'uploads', image_filename)

                image_file.save(image_path)
             
                db.execute("INSERT INTO products (name, price, category, image_path) VALUES (?, ?, ?, ?)",
                           product_name, price, category, image_path)
                
                return jsonify({"success": True, "message": productConfirmation})

            else:
                time.sleep(2)
                return jsonify({"sucess":False, "message":productNoConfirmation})
    return render_template("admin_manager.html")

@app.route("/delete_text", methods=["POST"])
def delete_text():
    data = request.json
    username = data.get("text_data")

    user = db.execute("SELECT * FROM users WHERE username = ?", username)


    if user:
        db.execute("DELETE FROM users WHERE username = ?", username)
        return redirect("/admin_manager")
    else:
        return redirect("/admin_manager")
@app.route("/delete_order",methods = ["POST"])
def delete_order():
    data = request.json
    order = int(data.get("order"))
    orders = db.execute("SELECT * FROM orders WHERE id = ?", order)
    if orders:
        db.execute("DELETE FROM orders WHERE id = ? ", order)
        return redirect("/admin_manager")
    else:
        return redirect("/admin_manager")
@app.route("/delete_product",methods = ["POST"])
def delete_product():
    data = request.json
    product = int(data.get("product"))
    products = db.execute("SELECT * FROM products WHERE id = ?", product)
    if products:
        db.execute("DELETE FROM products WHERE id = ? ", product)
        return redirect("/admin_manager")
    else:
        return redirect("/admin_manager")
@app.route("/buy",methods =["POST"])
def buy():

    data = request.json
    name = data.get("name")
    price =data.get("price")
    src = data.get("src")
    session["product_name"] = name
    session["product_price"] = price
    session["src"] = src
    
    return "succesfull"
@app.route("/checkout", methods=["GET", "POST"])
def checkout():
    if request.method == "GET":
        name = session.get("product_name")
        price = session.get("product_price")
        src = session.get("src")
        return render_template("checkout.html", name=name, price=price, src=src)
    else:
        data = request.json
        phone = data.get("phone")
        price = session.get("product_price")
        name = session.get("product_name")
        username = db.execute("SELECT username FROM users WHERE id = ?", session.get("user_id"))
        username = username[0]["username"]
        orderCompleted = "THE ADMIN WILL CONTACT YOU WITHIN 24 HOURS"
        orderError = "ERROR: FILL OUT ALL THE FORM"
        if phone and len(phone) > 0:
            db.execute("INSERT INTO orders (productname, price, phone, username) VALUES (?, ?, ?, ?)", name, price, phone, username)
            return jsonify({"success": True, "message": orderCompleted})
        return jsonify({"success": False, "message": orderError})
@app.route("/fetchdata")
def fetchdata():
    allNames = db.execute("SELECT name from products")
    return jsonify(allNames = allNames)
    