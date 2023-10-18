// regex reference: https://emailregex.com/index.html
const validateEmail = (email) => {
    return email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

document.addEventListener("DOMContentLoaded", (ready) => {
    document.querySelector("#login-confirm-btn").addEventListener("click", async (e) => {
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;

        if (!validateEmail(email)) {
            document.querySelector("#login-error").innerHTML = "Invalid email address, try again!"
            document.querySelector("#login-error").style.display = 'inherit';
        }
        else {
            // reference: https://flask.palletsprojects.com/en/2.3.x/patterns/javascript/
            let data = new FormData()
            data.append("email", email);
            data.append("password", password);

            const result = await fetch("/login", {
                "method": "POST",
                "body": data
            });

            const response = JSON.parse(await result.text());

            if (response.loggedIn) {
                window.location.replace("/")
            }
            else {
                document.querySelector("#login-error").innerHTML = "Invalid password, try again!";
                document.querySelector("#login-error").style.display = 'inherit';
            }
        }
    });

    document.querySelector("#post-confirm-btn").addEventListener("click", async (e) => {
        let title = document.querySelector("#post-title").value;
        let text = document.querySelector("#post-text").value;

        if (!title) {
            document.querySelector("#post-error").innerHTML = "Invalid title, please enter a title and try again!"
            document.querySelector("#post-error").style.display = 'inherit';
        }
        else if (!text) {
            document.querySelector("#post-error").innerHTML = "Invalid text, please enter a title and try again!"
            document.querySelector("#post-error").style.display = 'inherit';
        }
        else {
            // reference: https://flask.palletsprojects.com/en/2.3.x/patterns/javascript/
            let data = new FormData()
            data.append("title", title);
            data.append("text", text);

            const result = await fetch("/posted", {
                "method": "POST",
                "body": data
            });

            const response = JSON.parse(await result.text());

            if (response.posted) {
                window.location.replace("/blog")
            }
            else {
                document.querySelector("#post-error").innerHTML = "Could not post, please try again later."
                document.querySelector("#post-error").style.display = 'inherit';
            }
        }
    })
})