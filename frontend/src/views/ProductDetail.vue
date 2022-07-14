<template>
  <div class="container row">
      <div class="left">
        <div class="left-big-img">
          <img :src="product.thumbnail" alt="">
        </div>
        <div v-if="product.previewImages.length" class="left-small-img row">
          <img v-for="url in product.previewImages" :src="url" alt="">
        </div>
      </div>
      <div class="right">
        <div class="">
          <h1>{{ product.name }}</h1>
        </div>
        <div class="product-rating">
          <i class="fa-solid fa-star checked"></i>
          <i class="fa-solid fa-star checked"></i>
          <i class="fa-solid fa-star checked"></i>
          <i class="fa-solid fa-star checked"></i>
          <i class="fa-solid fa-star"></i>
          <span>({{ product.quantityOfRating }} đánh giá)</span>
        </div>
        <div class="product-price">
          <span>{{ product.price }}</span>
        </div>
        <div class="product-size row">
          <div class="product-size-input">
            <span>Size</span>
            <div class="product-size-input-select">
              <select id="size-select">
                <option v-for="size in product.sizes" :value="size.id" :data.quantity="size.quantityOfProducts">{{ size.size }}</option>
              </select>
            </div>
          </div>
          <div class="product-size-quantity">
            <span id="quantity-title">Số Lượng: còn {{ product.sizes[currentSizeIndex].quantityOfProducts }}</span>
            <div class="quantity-input row">
              <div class="quantity-modify">
                <a id="quantity-modify-desc" href="#" onclick="return false">-</a>
              </div>
              <input type="number" id="quantity-input" min="1" value="1" :max="product.sizes[currentSizeIndex].quantityOfProducts">
              <div class="quantity-modify">
                <a id="quantity-modify-asc" href="#" onclick="return false">+</a>
              </div>
            </div>
          </div>
        </div>
          <div v-if="product.description" class="right-botton">
            <div class="right-botton-top">
              &#8564;
            </div>
            <div class="right-botton-des">
              <div class="right-botton-title row">
                <div class="right-botton-title-item">
                  <p>Chi Tiết Sản Phẩm</p>
                </div>
              </div>
                <div v-for="des in standardizeDescription" class="right-botton">
                  <div class="right-botton-chitiet">
                    <p v-html="des"></p>
                  </div>
                </div>
            </div>
          </div>
      </div>
  </div>
  <!-- <div class="container">
    <div class="product-ratings-ctn">
      <div class="container-title row">
        <h2>Đánh giá sản phẩm</h2>
        <div class="rating-average-ctn">
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
          <span>{{ product.rating === null ? 'Chưa có đánh giá' : product.rating + ' trên 5' }}</span>
        </div>
      </div>
      <div class="product-rating-content" id="product-rating-content">
        <% if (bought == false) { 
          <div class="product-rating">
            <span>Bạn cần mua sản phẩm này mới có thể để lại đánh giá</span>
          </div>
        <% } 
        <% if (bought) { 
          <div class="product-rating-form" id="product-rating-form">
            <div class="product-rating-form-title">
              <h3>Đánh giá của tôi</h3>
            </div>
            <form id="rating-form">
              <div class="form-comment-ctn">
                <textarea id="comment" required></textarea>
              </div>
              <div class="form-star-ctn">
                <i class="fa-solid fa-star" data-star="1"></i>
                <i class="fa-solid fa-star" data-star="2"></i>
                <i class="fa-solid fa-star" data-star="3"></i>
                <i class="fa-solid fa-star" data-star="4"></i>
                <i class="fa-solid fa-star" data-star="5"></i>
                <input type="number" id="star" required>
              </div>
              <div class="form-submit-ctn relative">
                <input type="submit" value="Gửi nhận xét" id="submit-btn" data-enable="1">
                <div class="loader" id="submit-loader" style="right: 5px;"></div>
              </div>
            </form>
          </div>
        <% } 
      </div>
    </div>
  </div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductService from '../services/ProductService';
import type ProductDetail from '../models/ProductDetail';

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      product: {} as ProductDetail,
      currentSizeIndex: 0
    }
  },
  created() {
    ProductService.getProductById(this.id)
      .then((response) => {
        let pr = response.data.product;
        this.product = {
          id: pr.product_id,
          name: pr.name,
          description: pr.description,
          price: pr.price,
          sold: pr.sold,
          rating: pr.rating,
          quantityOfRating: pr.quantity_of_rating,
          sizes: pr.sizes,
          thumbnail: pr.thumbnail,
          previewImages: pr.urls
        };
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    standardizeDescription() {
      return this.product.description.split('#').map(e => e.replace(/\n/g, '</p><br><p>'));
    }
  }
})
</script>

<style scoped>
.checked,.star-hover {
  color: rgb(255, 208, 0) !important;
}

.container {
  max-width: 1100px;
  margin: 50px auto 50px auto;
  background-color: white;
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
  padding: 30px;
  align-items: flex-start;
}

.left {
  width: 50%;
  margin-right: 30px;
}

.left-big-img img {
  width: 100%;
}

.left-small-img {
  justify-content: center;
  overflow-x: auto;
}

.left-small-img img {
  width: 100px;
  cursor: pointer;
  margin-bottom: 5px;
}

.left-small-img img:not(:first-child) {
  margin-left: 5px;
}

.right{
  width: 50%;
}

.right-name h1 {
  font-size: 16px;
}

.right-name p {
  color: #ccc;
  font-size: 12px;
}

.product-price {
  margin: 12px 0;
  font-size: 20px;
  font-weight: bold;
}

.color span {
  display: inline-block;
  padding: 3px 6px;
  border: 1px solid #dddddd;
  margin: 12px 10px 0;
  font-size: 16px;
  cursor: pointer;
}

.product-size {
  border: 1px black dashed;
  padding: 10px 20px 10px 20px;
}

.product-size-input {
  width: 100%;
}

.product-size-quantity {
  width: 100%;
}

.product-size-input-select {
  margin: 10px 20px 0 0;
}

.product-size-input-select select {
  width: 100%;
  font-size: 18px;
  padding: 5px;
  outline: 1px black solid;
}

.quantity-input {
  margin-top: 10px;
}

.quantity-input input {
  width: 100%;
  height: 34px;
  font-size: 18px;
  padding: 4px 4px 4px 8px;
  outline: 1px black solid;
}

.quantity-modify {
  height: 36px;
  background-color: black;
  margin: 0 3px 0 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.quantity-modify a {
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 6px 11px 6px 11px;
}

.right-button {
  margin: 20px 20px 30px 20px;
  justify-content: space-around;
}

.right-button div {
  font-size: 18px;
  display: block;
  padding: 10px;
  background-color: #ffff;
  border: 2px solid black;
}

.right-button div:hover {
  background-color: black;
  color: #ffff;
}

.right-button div i {
  margin-right: 10px;
}

.right-icon {
  display: flex;
}

.right-icon-item {
  display: flex;
  margin-right: 12px;
  justify-content: center;
  align-items: center;
}

.right-icon-item i {
  font-size: 15px;
  margin-right: 8px;
}

.right-botton {
  font-size: 16px;
  position: relative;
  margin-top: 15px;
}

.right-botton-top {
  position: absolute;
  width: 30px;
  height: 30px;
  border: 1px solid #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffff;
  top: -15px;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%);
  cursor: pointer;
}

.right-botton-title {
  border-top: 2px solid #dddddd;
  border-bottom: 2px solid #dddddd;
}

.right-botton-title-item {
  font-size: 18px;
  font-weight: bold;
  padding: 6px;
  cursor: pointer;
  margin-right: 6px;
}

.checked {
  content: "\f005";
}

div.stars {
  width: 270px;
  display: inline-block;
}

input.star {
  display: none;
}

label.star {
  float: right;
  padding: 10px;
  font-size: 36px;
  color: #444;
  transition: all .2s;
}

input.star:checked ~ label.star:before {
  content: '\f005';
  color: #FD4;
  transition: all .25s;
}

input.star-5:checked ~ label.star:before {
  color: #FE7;
  text-shadow: 0 0 20px #952;
}

input.star-1:checked ~ label.star:before {
  color: #F62;
}

label.star:hover {
  transform: rotate(-15deg) scale(1.3);
}

label.star:before {
  content: '\f006';
  font-family: FontAwesome;
}

div.stars {
  width: 270px;
  display: inline-block;
}
 
input.star {
  display: none;
}
 
label.star {
  float: right;
  padding: 10px;
  font-size: 36px;
  color: #444;
  transition: all .2s;
}
 
input.star:checked ~ label.star:before {
  content: '\f005';
  color: #FD4;
  transition: all .25s;
}
 
input.star-5:checked ~ label.star:before {
  color: #FE7;
  text-shadow: 0 0 20px #952;
}
 
input.star-1:checked ~ label.star:before {
  color: #F62;
}
 
label.star:hover {
  transform: rotate(-15deg) scale(1.3);
}
 
label.star:before {
  content: '\f006';
  font-family: FontAwesome;
}

.container-title {
  padding-bottom: 5px;
  border-bottom: 4px solid black;
  justify-content: space-between;
}

.rating-average-ctn i {
  font-size: 30px;
}

.rating-average-ctn span {
  font-size: 25px;
  font-weight: 600;
  margin-left: 10px;
}

.form-comment-ctn textarea {
  font-size: 18px;
  width: -webkit-fill-available;
  height: 50px;
  resize: none;
  outline: none;
  border-radius: 15px;
  border-width: 2px;
  padding: 10px;
}

.product-rating {
  align-items: flex-start;
  border-top: 1px solid rgb(224, 224, 224);
  padding: 15px 0 15px 0;
}

.product-rating-form {
  padding: 10px 20px 20px 20px;
}

.product-rating-form-title {
  margin-bottom: 5px;
}

.form-star-ctn {
  margin: 7px;
}

.form-star-ctn i {
  font-size: 24px;
  cursor: pointer;
}
.form-star-ctn input {
  opacity: 0;
  width: 0;
  height: 0;
}

.form-submit-ctn input[type=submit] {
  background-color: black;
  color: white;
  font-size: 20px;
  font-weight: 500;
  padding: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
.form-submit-ctn input[type=submit]:hover {
  background-color: #d33b33;
}

.product-rating-left {
  margin-right: 10px;
}
.product-rating-right {
  width: 100%;
}

.user-avt-ctn img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.product-rating-right-top {
  justify-content: space-between;
}

.user-name-ctn span {
  font-size: 18px;
  font-weight: 600;
}

.product-rating-right-star {
  margin: 5px 0 5px 10px;
}

/* .product-ratings-ctn i {
  color: #CCC;
} */
</style>
