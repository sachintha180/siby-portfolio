# Siby's Portfolio (siby-portfolio)
- Files that make up by basic web portfolio for CS50x 2023.
- Video Demonstration URL: https://youtu.be/dPUp13jp0nw

## What's Siby's Portfolio?
- My (eventual) permanent internet residence.
- A website to act as a digital record of my projects, skills and achievements.
- A CS tool repository – such as StructVisu (a tool to visualize C structs in memory) for students
- Means of getting my feet wet with different digital technologies.

## What are the files that make up this project?
```
static\
   images\ 
   scripts\
app.py
data.py
requirements.txt
```

- `static\images\`: images used in the website
- `static\scripts\`: .js files used for dynamic behaviour, animations and the structvisu tool
- `static\`: other files, such as styles.css & styles.sass, used for styling
- `templates\`: contains all .html files, served via Flask
- `app.py`: contains the main server script, which needs to be activated to run the website
- `data.py`: contains dictionaries accessed by app.py, containing data about my projects and responsiblities
- `requirements.txt`: list of required Python packages to setup virtual environment prior running Flask server

## How do you access my project?
- Clone this repository from your device, via `git clone`
- Open the project folder on Visual Studio Code or any suitable IDE.
- Create a new Python 3 environment, and install the modules listed in requirements.txt via `pip install -r requirements.txt`
- Run the app.py file, using the command `python app.py`
- You should be up and running on the local server!

## What are its most innovative features?
- Bootstrap-based pages w/ Jinja-templated dynamic content
- Login option for adding new blog posts (admin only)
- StructVisu - a vanilla-JS tool to help students visualize C structs in memory (was a fun flexbox exercise)
   
## I can't login to the website, why is that?
- This web app relies on reading information from a MongoDB server, running on `localhost`, port `27017`
- It reads from a MongoDB database named `portfolio`, which has two collections within it:
  - `users` (which contains user information)
  - `blog` (which containt the blog posts' information)
- Create these two collections on your MongoDB server, using `db.createCollection(<name>)` - which can be done via the [Mongo Shell](https://www.mongodb.com/docs/mongodb-shell/) / [MongoDBCompass](https://www.mongodb.com/products/tools/compass)
- The rest is a challenge - try sniffing `app.py` to understand the schema of documents in these collections and manually tamper with the `user` and `blog` collections. If you get it right, you should be able to login to the website & see new blog posts that you've added on refresh.

## What technologies did I use?
- Frontend: HTML + Sass + JavaScript
- Backend: Python w/ Flask
- Data Layer: MongoDB
