from flask import Flask, render_template, redirect

app = Flask(__name__)

MAX_IMAGES = 10

grid_content = [
    {
        "title": "Calori App",
        "content": "A mobile application to automatically detect the number of calories on a plate of food.",
    },
    {
        "title": "AutoBoard",
        "content": "A cross-platform application to convert whiteboard drawings into vector format live.",
    },
    {
        "title": "The Tech Guide",
        "content": "In the process of compiling notes into a publish-able guide on different technologies and implementations for IGCSE and AL CS students.",
    },
    {
        "title": "Teach",
        "content": "A cross-platform web application to allow private / individual tutors to manage their classes",
    },
]

res_content = [
    {
        "timeline": "2023 - Current",
        "title": "Pearson BTEC HND in Computing (Software Engineering) - Level 4 & 5",
        "content": "Pursuing at CINEC Maritime Campus - Department of Information Technology."
    },
    {
        "timeline": "2022 - Current",
        "title": "Tutor & Assignment Designer",
        "content": "SACE Digital Technologies (Level 2) - Gateway College Colombo." 
    },
    {
        "timeline": "2021 - Current",
        "title": "Freelance Tutoring",
        "content": "Computer Science & ICT for IGCSE & IAL, externally and via <a href='https://www.studyrooms.com/' alt='studyrooms-link'>Studyrooms</a>."
    }
]

@app.route("/")
def home():
    return render_template("index.html", grid_content=grid_content, res_content=res_content, images=[i+1 for i in range(MAX_IMAGES)])

@app.route("/blog")
def blog():
    return redirect("/")

@app.route("/skills")
def skills():
    return redirect("/")

@app.route("/achievements")
def achievements():
    return redirect("/")