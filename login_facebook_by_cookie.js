// Thay thế 'YOUR_COOKIE' bằng chuỗi cookie Facebook của bạn
const cookie = 'c_user=YOUR_COOKIE;';

// Tạo XMLHttpRequest
const xhr = new XMLHttpRequest();

// Mở kết nối POST đến URL đăng nhập Facebook
xhr.open('POST', 'https://m.facebook.com/login/ajax_login/');

// Set header Content-Type
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

// Set cookie
xhr.setRequestHeader('Cookie', cookie);

// Gửi yêu cầu
xhr.send('login_password=&save-device=on&ajax=1&form_type=login&username=');

// Xử lý kết quả phản hồi
xhr.onload = function() {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    if ('access_token' in response) {
      console.log('Đăng nhập thành công!');
      // Sử dụng access_token để truy cập API Facebook
    } else {
      console.log('Đăng nhập thất bại.');
    }
  } else {
    console.error('Lỗi khi gửi yêu cầu đăng nhập.');
  }
};
