// Hamburger
document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.querySelector(".hamburger");
    var menu = document.querySelector("#topbar .container .menu");

    hamburger.addEventListener("click", function() {
        // 切換漢堡菜單按鈕的 active 狀態
        hamburger.classList.toggle("is-active");
        
        // 切換菜單的顯示狀態
        menu.classList.toggle("show");
    });
});

// Discount
document.getElementById('sendButton').addEventListener('click', function() {
    var emailInput = document.getElementById('email').value;
    if(emailInput) {
        alert('優惠代碼已寄送至您的E-mail');
    } else {
        alert('請輸入您的E-mail');
    }
});