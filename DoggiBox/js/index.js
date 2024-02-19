document.getElementById("sendButton").addEventListener("click", function() {
    var emailInput = document.getElementById("email").value;
    if (emailInput !== "") {
        alert("優惠代碼已寄送至您的E-mail");
    } else {
        alert("請輸入您的E-mail");
    }
});