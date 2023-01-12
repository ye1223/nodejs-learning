var loginBtn = document.querySelector("#login")
        var loginBtn_post = document.querySelector("#login_post")
        var username = document.querySelector("#username")
        var password = document.querySelector("#password")

        loginBtn.onclick = () => {
            // console.log(username.value,password.value)
            //get请求
            fetch(`/api/login?username=${username.value}&&password=${password.value}`)
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                })
        }
        loginBtn_post.onclick = () => {
            fetch(`/api/login-post`, {
                method: "POST",
                body: JSON.stringify({
                    username: username.value,
                    password: password.value
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.text()).then(res => {
                console.log(res)
            })

        }