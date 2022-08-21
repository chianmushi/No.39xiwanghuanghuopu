//要操作的元素
const container=document.querySelector('.container');
const btn_login=document.querySelector('btm-login');

//登录按钮点击事件
btn_login.addEventListener('click',function(){
    container.classList.add('success')
})