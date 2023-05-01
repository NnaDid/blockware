

const footer__question = document.querySelectorAll(".footer__question");

for (let item of footer__question) {
    item.addEventListener("click", function (e) {
        let el = e.target;
        console.log(el)
        let maiParentEl = el.closest("div.footer__inner__item");
        maiParentEl.querySelector(".footer__inner__body").classList.toggle("show");

    });
}


const loginBtn = document.getElementById('login')

// creat ud auth client 
const UAuth = uDauth({
    clientID: "95d27641-7395-413f-9de2-07b5136197c9",
    redirectUri: `${window.location.href}`,
    scope: "openid wallet email profile:optional social:optional"
})


let uDuser;

// check if there's a user 
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

// change login text if there's a user 
loginBtn.innerText = uDuser ? uDuser.sub : 'Connect Wallet'

const handleLogin = () => {
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


