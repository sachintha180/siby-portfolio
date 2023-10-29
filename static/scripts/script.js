// regex reference: https://emailregex.com/index.html
const validateEmail = (email) => {
    return email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

document.addEventListener("DOMContentLoaded", (ready) => {
    const login_btn = document.querySelector("#login-confirm-btn");
    const post_btn = document.querySelector("#post-confirm-btn");

    if (login_btn) {
        login_btn.addEventListener("click", async (e) => {
            let email = document.querySelector("#email").value;
            let password = document.querySelector("#password").value;

            if (!validateEmail(email)) {
                document.querySelector("#login-error").innerHTML = "Invalid email address, try again!"
                document.querySelector("#login-error").style.display = 'inherit';
            }
            else {
                let data = new FormData()
                data.append("email", email);
                data.append("password", password);

                fetch("/login", {
                    "method": "POST",
                    "body": data
                }).then(response => {
                    if (response.redirected) {
                        window.location = response.url;
                    }
                    else {
                        document.querySelector("#login-error").innerHTML = "Invalid password, try again!";
                        document.querySelector("#login-error").style.display = 'inherit';
                    }
                });
            }
        });
    }

    if (post_btn) {
        post_btn.addEventListener("click", async (e) => {
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
                let data = new FormData()
                data.append("title", title);
                data.append("text", text);

                fetch("/posted", {
                    "method": "POST",
                    "body": data
                }).then(response => {
                    if (response.redirected) {
                        window.location = response.url;
                    }
                    else {
                        document.querySelector("#post-error").innerHTML = "Could not post, please try again later.";
                        document.querySelector("#post-error").style.display = 'inherit';
                    }
                });
            }
        });
    }
})