from flask import Flask, render_template, jsonify, redirect, request, session
import data
from datetime import datetime
from pymongo import MongoClient
import uuid

app = Flask(__name__)
app.secret_key = uuid.uuid4().hex

# client = MongoClient("localhost", 27017)
# db = client.portfolio


@app.route("/")
def home():
    loggedIn = "email" in session
    email = None
    if loggedIn:
        email = session["email"]

    return render_template(
        "index.html",
        projects=data.projects,
        responsibilities=data.responsibilities,
        images=[i + 1 for i in range(data.MAX_IMAGES)],
        loggedIn=loggedIn,
        email=email,
    )


@app.route("/login", methods=["POST"])
def login():
    email = request.form.get("email")
    password = str(request.form.get("password")).strip().lower()
    loggedIn = False

    # users = db.users.find_one({"email": email})
    # if users:
    #     if users["password"] == password:
    #         session["email"], loggedIn = email, True

    return jsonify({"loggedIn": loggedIn})


@app.route("/blog")
def blog():
    # posts = list(db.blog.find())
    posts = []
    return render_template("blog.html", posts=posts, loggedIn="email" in session)


@app.route("/posted", methods=["POST"])
def posted():
    title = str(request.form.get("title")).strip()
    text = str(request.form.get("text")).strip()

    posted = True
    # try:
    #     db.blog.insert_one({"timestamp": datetime.now(), "title": title, "text": text})
    # except:
    #     posted = False

    return jsonify({"posted": posted})


@app.route("/post")
def post():
    if "email" not in session:
        return redirect("/")

    return render_template("post.html")


@app.route("/skills")
def skills():
    return render_template("skills.html", loggedIn="email" in session)


@app.route("/achievements")
def achievements():
    return render_template("achievements.html", loggedIn="email" in session)


@app.route("/structvisu")
def structvisu():
    return render_template("structvisu.html", loggedIn="email" in session)


if __name__ == "__main__":
    app.run()
