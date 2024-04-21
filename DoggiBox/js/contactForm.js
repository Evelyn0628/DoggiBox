// Contact Form
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // 阻止表单提交默认行为

        // 获取表单元素的值
        var username = document.getElementById('username').value;
        var tel = document.getElementById('tel').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // 检查表单是否已填写完整
        if (username && email && message) {
            // 显示警告消息
            alert('已收到您的表單，DoggiBox 將盡快指定專人與您聯繫！');
        } else {
            // 提示用户填写完整表单
            alert('請填寫完整表單');
        }
    });
});