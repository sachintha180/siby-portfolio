# siby-portfolio
Files that make up by basic web portfolio

## Hi, I'm Sachintha Senanayake
- From Colombo, Sri Lanka 🇱🇰
- Did CS50x 2023, as part of the [Springboard](https://calcey.com/springboard/) Scholarship Programme 
- Go by @SiBy online.
- Love teaching CS + algorithm design, DS, ANNs and GAs.

## How do you access my project?
- Clone this repository from your device, via `git clone`
- Open the project folder on Visual Studio Code or any suitable IDE.
- Create a new Python 3 environment, and install the modules listed in requirements.txt via `pip install -r requirements.txt`
- Run the app.py file, using the command `python app.py`
- You should be up and running on the local server!

## I can't login to the website, why is that?
- This web app relies on reading information from a MongoDB server, running on `localhost`, port `27017`
- It reads from a MongoDB database named `portfolio`, which has two collections within it:
  - `users` (which contains user information)
  - `blog` (which containt the blog posts' information)
- Create these two collections on your MongoDB server, using `db.createCollection(<name>)` - which can be done via the [Mongo Shell](https://www.mongodb.com/docs/mongodb-shell/) / [MongoDBCompass](https://www.mongodb.com/products/tools/compass)
- The rest is a challenge - try sniffing `app.py` to understand the schema of documents in these collections and try manually tampering with the `user` and `blog` collections!

## What technologies did I use?
- Frontend: HTML + Sass + JavaScript
- Backend: Python w/ Flask
- Data Layer: MongoDB
