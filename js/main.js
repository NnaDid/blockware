

const footer__question = document.querySelectorAll(".footer__question");

for (let item of footer__question) {
    item.addEventListener("click", function (e) {
        let el = e.target;
        console.log(el)
        let maiParentEl = el.closest("div.footer__inner__item");
        maiParentEl.querySelector(".footer__inner__body").classList.toggle("show");

    });
}




const handleLogin = () => {
    const UAuth = uDauth({
        clientID: "37a2f8494930007072047040174013hk20",
        redirectUri: `${location.origin}`,
        scope: "openid wallet email profile:optional social:optional"
    })

    let uDuser;

    try {
        UAuth.user()
            .then((user) => {
                uDuser = user
                console.log(user)
            })
            .catch((e) => {
                console.log(e)
            })
    } catch (err) {
        console.log(err)
    }

    console.log(uDuser)

    if (uDuser) logoutUD(UAuth)
    else loginUD(UAuth)

}

const loginUD = async (UAuth) => {
    try {
        await UAuth.loginWithPopup()
        location.reload()
    } catch (error) {
        console.log(error)
    }
}

const logoutUD = async (UAuth) => {
    try {
        await UAuth.logout()
        location.reload()
    } catch (error) {
        console.log(error)
    }
}


