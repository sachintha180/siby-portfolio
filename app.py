from flask import Flask, render_template, redirect
import data
import pymongo
from util import get_full_date, get_summary

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html", grid_content=data.grid_content, res_content=data.res_content, images=[i+1 for i in range(data.MAX_IMAGES)])

@app.route("/blog")
def blog():
    return render_template("blog.html", blog_content=[])

@app.route("/login")
def login():
    return "Hello, World"

@app.route("/skills")
def skills():
    return redirect("/")

@app.route("/achievements")
def achievements():
    return redirect("/")

@app.route("/blog_posts")
def blog_posts():
    return render_template("blog_posts.html")
