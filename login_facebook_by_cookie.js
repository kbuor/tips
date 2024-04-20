// Thay thế giá trị cookie bằng cookie của bạn
var cookieValue = "YOUR_FACEBOOK_COOKIE_VALUE";

// Tạo các cookie từ giá trị đã cho
cookieValue.split(';').forEach(function(cookie) {
    var parts = cookie.split('=');
    var name = parts[0].trim();
    var value = (parts[1] || '').trim();
    document.cookie = name + '=' + value + ';domain=.facebook.com;path=/;expires=Session;secure=true';
});

// Tải lại trang để đăng nhập bằng cookie
window.location.reload();
