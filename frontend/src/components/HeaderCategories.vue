<template>
  <li class="header-nav-item" @mouseover="showMenu = true" @mouseleave="showMenu = false">
    <a class="header-link" href="#" onclick="return false">Products</a>
    <div class="dropdown-menu row" v-if="showMenu">
      <div class="col-menu" v-for="cls in classes">
        <h2 class="col-menu-title"><a href="#">{{ cls.name }}</a></h2>
        <div>
          <ul>
            <li v-for="line in cls.lines"><a href="#">{{ line.name }}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CategoryService from '../services/CategoryService';
import type Class from '../models/ProductClass';

const showMenu = ref(false);
const classes = ref<Class[]>([]);

CategoryService.getCategories()
  .then((response) => {
    classes.value = response.data.results.map((e: any) => {
      return {
        id: e.class_id,
        name: e.name,
        lines: JSON.parse(e.product_lines)
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });
</script>

<style scoped>
.dropdown-menu {
  align-items: inherit;
}

.col-menu {
  width: 100%;
  margin: 20px 0 10px 0;
  padding: 0 90px 0 30px;
  border-left: 1px solid rgb(224, 224, 224);
}

.col-menu-title {
  margin-bottom: 10px;
  white-space: nowrap;
}

.col-menu-title a {
  color: rgb(31, 31, 31);
  font-weight: 700;
}

.col-menu li {
  font-size: 18px;
  margin-bottom: 10px;
}

.col-menu li a {
  color: rgb(111, 111, 111);
}

.col-menu a:hover {
  color: #d33b33;
}

.col-menus-ctn .col-menu:first-child {
  border-left: none;
}
</style>
