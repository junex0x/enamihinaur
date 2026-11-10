# HINA · Locket Username — Vercel Safe Preview

Bản **giao diện website** được làm lại để triển khai trên Vercel từ ý tưởng và bố cục của `LocketGold-Username-main.zip` do người dùng cung cấp.

## Trạng thái thực tế

- ✅ Giao diện HTML/CSS/JS thân thiện iPhone và Android.
- ✅ API `/api/health` để kiểm tra website/serverless function.
- ✅ Tìm kiếm: kiểm tra đầu vào, **không gọi API Locket**.
- ⛔ Không cung cấp kích hoạt Locket Gold và không gửi dữ liệu giao dịch giả.
- ⛔ Không chạy trang Admin/CTV PHP, không lưu dữ liệu tài khoản.
- 🔐 Không chứa bất kỳ thông tin đăng nhập, token, Firebase/RevenueCat key hay file hồ sơ DNS từ ZIP gốc.

Đây là **bản demo an toàn**, **không phải bản chuyển đổi đầy đủ chức năng PHP**. Người dùng không nên hiểu thông báo HTTP 200 là kích hoạt Gold thành công.

## Vercel

Chọn Framework Preset: **Other**, Root Directory là thư mục chứa `index.html` và `vercel.json`. Không yêu cầu build command, thư mục output hoặc biến môi trường. Serverless Function dùng Node.js `/api/health.js`.

## Chạy tại máy

Có thể chạy giao diện bằng máy chủ static bất kỳ; API `/api/health` cần Vercel (hoặc máy chủ Node.js có route tương ứng). Không mở tệp qua `file://` nếu muốn kiểm tra API.

## Giới hạn cần xử lý trước khi phát triển tiếp

ZIP PHP ban đầu có các secret hardcode, tài khoản nội bộ, script DNS, SSL verification tắt, trạng thái kích hoạt dễ trả thông báo thành công chưa xác thực và chức năng ghi JSON vào file trên máy chủ. Vercel Functions không cung cấp ổ đĩa ghi bền vững. Cần thiết kế xác thực và cơ sở dữ liệu riêng trước khi xây dựng tính năng thực.

Bản gốc và các tài liệu/đoạn mã bên thứ ba không được nhận là do Hina viết toàn bộ. HINA là tên bản giao diện tùy chỉnh.