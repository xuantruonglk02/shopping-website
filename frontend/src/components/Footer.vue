<template>
  <footer class="footer">
    <div class="footer-ctn row">
      <div class="footer-col">
        <div class="footer-col-title">
          <h4>Về Chúng tôi</h4>
        </div>
        <div class="footer-col-content">
          <div class="footer-about-us">
            <p>Chào mừng quý khách đến với Shop thời trang nam online SE20s Shop, website mua sắm thời trang nam lớn và uy tín hàng đầu Việt Nam. Chúng tôi tin vào dịch vụ của mình, và bạn biết điều đó.</p>
          </div>
          <div class="footer-sn-icons">
            <ul>
              <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-pinterest"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-telegram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">
          <h4>Thông tin thêm</h4>
        </div>
        <div class="footer-col-content">
          <ul class="footer-links">
            <li><i class="fa-solid fa-angle-right"></i><a href="#">Về chúng tôi</a></li>
            <li><i class="fa-solid fa-angle-right"></i><a href="#">Dịch vụ khách hàng</a></li>
            <li><i class="fa-solid fa-angle-right"></i><a href="#">Điều khoản và điều kiện</a></li>
            <li><i class="fa-solid fa-angle-right"></i><a href="#">Chính sách bảo mật</a></li>
            <li><i class="fa-solid fa-angle-right"></i><a href="#">Thông tin giao hàng</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">
          <h4>Liên hệ</h4>
        </div>
        <div class="footer-col-content">
          <div class="footer-contact-row row">
            <div class="footer-contact-icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div class="footer-contact-content">
              <p>Địa chỉ: 144 Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hà Nội</p>
            </div>
          </div>
          <div class="footer-contact-row row">
            <div class="footer-contact-icon">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div class="footer-contact-content">
              <p>Số điện thoại: <a href="tel:+84376520507">0376520507</a></p>
            </div>
          </div>
          <div class="footer-contact-row row">
            <div class="footer-contact-icon">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div class="footer-contact-content">
              <p>Email: <a href="mailto:service.myonshopp@gmail.com">service.myonshopp@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #202020;
  color: white;
}

.footer-ctn {
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  padding: 70px 0 70px 0;
  align-items: flex-start;
}

.footer-col {
  width: 100%;
  margin: 0 20px 0 20px;
}

.footer-col:first-of-type {
  margin-left: 150px;
}

.footer-col:last-of-type {
  margin-right: 150px;
}

.footer-col-title {
  margin-bottom: 20px;
  padding-bottom: 5px;
  border-bottom: 3px solid #d33b33;
}

.footer-col-title h4 {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
}

.footer-about-us p {
  color: rgb(204, 204, 204);
  font-size: 16px;
  font-weight: 400;
  line-height: 25.32px;
  margin-bottom: 20px;
}

.footer-sn-icons ul {
  display: flex;
}

.footer-sn-icons li {
  border: 2px solid #ffffff;
}

.footer-sn-icons li:not(:first-of-type) {
  margin-left: 5px;
}

.footer-sn-icons li:hover {
  border: 2px solid #d33b33;
}

.footer-sn-icons li:hover > a .fa-brands::before {
  color: #D33B33;
}

.footer-sn-icons a {
  display: block;
  padding: 10px;
}

.fa-brands::before {
  color: white;
}

.footer-links li:not(:first-of-type) {
  margin-top: 15px;
}

.footer-links a {
  color: white !important;
  font-size: 16px;
  margin-left: 5px;
}

.footer-links a:hover {
  color: #d33b33 !important;
  margin-left: 10px !important;
}

.footer-contact-row {
  align-items: flex-start;
}

.footer-contact-row:not(:first-of-type) {
  margin-top: 20px;
}

.footer-contact-icon {
  margin-right: 10px;
}

.footer-contact-icon i::before {
  color: #cccccc;
}

.footer-contact-content, .footer-contact-content a {
  color: #cccccc;
}

.footer-contact-content a:hover {
  color: #D33B33;
}
</style>
