let darkMode=()=>{
    document.body.style.backgroundColor = '#202124'
    document.body.style.color = '#fff'

    let darkBtn = document.getElementById('darkBtn')
    darkBtn.setAttribute('class', 'btn btn-light')
    darkBtn.textContent = 'Light Mode'

    let icon = document.getElementById('icon')
    icon.style.display = 'none'

    let signUpBtn = document.getElementById('signInBtn')
    signUpBtn.setAttribute('class', 'btn btn-secondary')

    let googleImg = document.getElementById('googleImg')
    googleImg.setAttribute('src','https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png')

    let searchBtn = document.querySelector('.row1>button')
    searchBtn.setAttribute('class','btn btn-outline-light')

    let searchBtn2 = document.getElementById('btn2')
    searchBtn2.setAttribute('class', 'btn btn-outline-light')

    let googleTranslate = document.getElementById('gTranslate')
    googleTranslate.style.color = '#bdc1c6'

    let footerEl = document.querySelector('footer')
    footerEl.style.backgroundColor = '#171717'
    footerEl.style.color = '#9aa0a6'
}
