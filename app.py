from flask import Flask, Response
from flask import render_template, jsonify, redirect, request, session, url_for
from flask_session import Session
import data
import sqlite3
import bcrypt

app = Flask(__name__)

app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)


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
    email = str(request.form.get("email"))
    password = str(request.form.get("password")).strip().lower()

    with sqlite3.connect("portfolio.db") as con:
        cur = con.cursor()
        result = cur.execute(
            "SELECT password FROM user WHERE email = ?", (email,)
        ).fetchone()
        if result:
            if bcrypt.checkpw(bytes(password, "utf-8"), result[0]):
                session["email"] = email
                return redirect(url_for("home"))

    return Response(status=401)


@app.route("/blog")
def blog():
    posts = []
    with sqlite3.connect("portfolio.db") as con:
        cur = con.cursor()
        result = cur.execute("SELECT * FROM POST").fetchall()
        if result:
            for post in result:
                posts.append(
                    {"timestamp": post[1], "title": post[2], "text": post[3]})

    return render_template("blog.html", posts=posts, loggedIn="email" in session)


@app.route("/posted", methods=["POST"])
def posted():
    title = str(request.form.get("title")).strip()
    text = str(request.form.get("text")).strip()

    with sqlite3.connect("portfolio.db") as con:
        cur = con.cursor()
        result = cur.execute(
            "SELECT post_id FROM POST ORDER BY post_id DESC LIMIT 1").fetchone()
        if result:
            cur.execute(
                "INSERT INTO POST(post_id, title, text) VALUES (?, ?, ?)", (result[0]+1, title, text,))
            con.commit()
            return redirect(url_for("blog"))

    return Response(status=500)


@app.route("/post")
def post():
    if "email" not in session:
        return redirect(url_for("home"))

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
