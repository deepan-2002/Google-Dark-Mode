let darkMode = () => {
    document.body.classList.toggle('dark-mode')

    if (document.body.classList.contains('dark-mode')) {
        let darkBtn = document.getElementById('darkBtn')
        darkBtn.setAttribute('class', 'btn btn-dark')
        darkBtn.innerHTML = '<i class="fa-regular fa-sun fa-2xl"></i>'

        let icon = document.getElementById('icon')
        icon.style.display = 'none'

        let signUpBtn = document.getElementById('signInBtn')
        signUpBtn.setAttribute('class', 'btn btn-outline-primary')

        let googleImg = document.getElementById('googleImg')
        googleImg.setAttribute('src', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png')

        let searchBtn = document.querySelector('.row1>button')
        searchBtn.setAttribute('class', 'btn btn-outline-light')

        let searchBtn2 = document.getElementById('btn2')
        searchBtn2.setAttribute('class', 'btn btn-outline-light')
    }
    else{
        let darkBtn = document.getElementById('darkBtn')
        darkBtn.setAttribute('class', 'btn btn-light')
        darkBtn.innerHTML = '<i class="fa-regular fa-moon fa-2xl"></i>'

        let icon = document.getElementById('icon')
        icon.style.display = 'inline'

        let signUpBtn = document.getElementById('signInBtn')
        signUpBtn.setAttribute('class', 'btn btn-primary')

        let googleImg = document.getElementById('googleImg')
        googleImg.setAttribute('src', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')

        let searchBtn = document.querySelector('.row1>button')
        searchBtn.setAttribute('class', 'btn')

        let searchBtn2 = document.getElementById('btn2')
        searchBtn2.setAttribute('class', 'btn')
    }
}
