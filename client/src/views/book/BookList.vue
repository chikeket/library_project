<template>
  <div class="container">
    <table class="table table-hover">
      <caption>
        total :
        {{
          count
        }}
      </caption>
      <thead>
        <tr>
          <th>No.</th>
          <th>도서명</th>
          <th>저자</th>
          <th>출판사</th>
          <th>출판일수</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="book in bookList"
          v-bind:key="book.no"
          @click="goToDetail(book.no)"
        >
          <td>{{ book.no }}</td>
          <td>{{ book.name }}</td>
          <td>{{ book.writer }}</td>
          <td>{{ book.publisher }}</td>
          <td>
            {{ userDateUtils.dateFormat(book.publication_date, "yyyy-MM-dd") }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import axios from "axios";
import { computed, onBeforeMount, shallowRef } from "vue";
import userDateUtils from "@/utils/useDates.js";

// 1) 데이터가 필요
let bookList = shallowRef([]); // <- 반응형 객체
let count = computed(() => {
  return bookList.value.length;
});

// VueRouter 사용
import { useRouter } from "vue-router";
const router = useRouter();
const goToDetail = (bookNo) => {
  router.push({ name: "bookInfo", params: { bno: bookNo } });
};

// 2) Server로부터 데이터 가져오기 => axios API
const getBookList = async () => {
  let result = await axios.get("/api/books").catch((err) => console.log(err));
  bookList.value = result.data;
};

// 3) 컴포넌트가 화면에 보여지기 직전에
//    Server로부터 데이터를 가져오기
onBeforeMount(() => {
  getBookList();
});
</script>

<style scoped>
table * {
  text-align: center;
}
</style>
