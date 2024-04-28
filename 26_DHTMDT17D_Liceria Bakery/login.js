let btnSocialLogin = document.querySelectorAll('.btn-social-login');
btnSocialLogin.forEach(item => {
    item.addEventListener('click', () => {
        btnSocialLogin.forEach(item => {
         item.classList.remove('active');
        })
        item.classList.add('active');
    })
})