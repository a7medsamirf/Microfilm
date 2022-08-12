<template>
<div>

<home-carousel :articles="articles" />



  <app-search-input />


  <div class="titleSection LeftA">
    <div class="rightTitleSection">
      <i class="fas fa-camera-movie default"></i>
      <span>جديد الافلام </span>
    </div>
    <div class="leftTitleSection">
      <a href="https://m.arabseed.sbs/movies" class="MoreFromSection HoverAfter"><span>المزيد</span><div class="loader10"></div></a>
    </div>
  </div>

  <home-card :articles="articles" />




  <v-container>
    <v-row>
      <v-col cols="12" md="3">

      </v-col>
    </v-row>
  </v-container>








  <ul>
    <li
      v-for="tag of tags"
      :key="tag.slug"
      class="xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"
    >
      <NuxtLink :to="`/tag/${tag.slug}`" class="">
        <p
          class="font-bold text-gray-600 uppercase tracking-wider font-medium text-ss"
        >
          {{ tag.name }}
        </p>
      </NuxtLink>
    </li>
  </ul>


</div>
</template>

<script>
import AppSearchInput from '~/components/widget/AppSearchInput.vue';
import HomeCarousel from "~/components/card/HomeCarousel";
import HomeCard from "~/components/card/HomeCard";
export default {
    name: "IndexPage",
    components: {HomeCard, HomeCarousel, AppSearchInput },
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      /*.only(['title', 'description', 'img', 'slug', 'quality','imdb'])*/
      /*.only(['title', 'description', 'img', 'tags', 'slug', 'author'])*/ // لعرض بعض البيانات الخاصه بالمقالة
       .where({ categories: { $containsAny: ['أفلام'] } }) // استدعاء وعرض مجموعة من المقالات باستخدام التصنيف
      /* .sortBy('createdAt', 'asc') */ // ترتيب المقالات من الاقدم للاحدث
      .sortBy('createdAt', 'desc') // ترتيب المقالات من الاحدث للاقدم
      /*.limit(5)*/ // استدعاء اخر 5 مقالات
      .fetch()

 const tags = await $content('tags')
    .only(['name','slug'])
    .sortBy('createdAt', 'asc')
    .fetch()

   return {
      articles,
     tags
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('ar', options)
    }
  }
}
</script>

<style>
.titleSection {
  display: table;
  width: calc(100% - 3%);
  margin: 0 auto 20px;
  transition: .3s all ease;
  padding: 10px 10px 10px;
  border-radius: 11px;
  background: #57769212;
}

.titleSection .rightTitleSection {
  float: right;
}
.titleSection .rightTitleSection > i {
  width: 44px;
  display: inline-block;
  height: 44px;
  z-index: 55;
  border-radius: 30%;
  overflow: hidden;
  float: right;
  margin-left: 10px;
  text-align: center;
  line-height: 44px;
  font-size: 20px;
}
.titleSection .rightTitleSection > span {
  float: left;
  line-height: 45px;
  font-size: 20px;
}
.leftTitleSection {
  float: left;
  border-radius: 50%;
}

a.MoreFromSection {
  display: block;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  -webkit-transition: .4s all ease;
  -o-transition: .4s all ease;
  transition: .4s all ease;
  width: 150px;
  height: 44px;
  text-align: center;
  border-radius: 25px;
  overflow: hidden;
  float: left;
  background: #484985;
}
a.MoreFromSection span {
  display: inline-block;
  font-size: 16px;
  position: relative;
  float: right;
  -webkit-transition: .35s all ease;
  -o-transition: .35s all ease;
  transition: .35s all ease;
  padding-right: 25px;
  line-height: 44px;
}
.HoverAfter:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 5px;
  height: 5px;
  background: #ffffff45;
  border-radius: 50%;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  -webkit-transition: 0s all ease;
  -o-transition: 0s all ease;
  transition: 0s all ease;
}
.loader10 {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 12px;
  -webkit-animation: loader10m 3s ease-in-out infinite;
  animation: loader10m 2s ease-in-out infinite;
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease;
  display: block;
  z-index: 99;
  top: 18px;
  left: -103px;
}
.loader10:before {
  content: "";
  position: absolute;
  top: 0;
  left: -16px;
  height: 10px;
  width: 10px;
  border-radius: 12px;
  -webkit-animation: loader10g 2s ease-in-out infinite;
  animation: loader10g 2s ease-in-out infinite;
}
.loader10:after {
  content: "";
  position: absolute;
  top: 0;
  left: 15px;
  height: 10px;
  width: 10px;
  border-radius: 10px;
  -webkit-animation: loader10d 3s ease-in-out infinite;
  animation: loader10d 2s ease-in-out infinite;
}

@-webkit-keyframes loader10g {
  0% {
    background-color: rgba(0, 0, 0, .2)
  }
  25% {
    background-color: #fdfdfd
  }
  50% {
    background-color: rgba(0, 0, 0, .2)
  }
  75% {
    background-color: rgba(0, 0, 0, .2)
  }
  100% {
    background-color: rgba(0, 0, 0, .2)
  }
}
@keyframes loader10g {
  0% {
    background-color: rgba(0, 0, 0, .2)
  }
  25% {
    background-color: #fdfdfd
  }
  50% {
    background-color: rgba(0, 0, 0, .2)
  }
  75% {
    background-color: rgba(0, 0, 0, .2)
  }
  100% {
    background-color: rgba(0, 0, 0, .2)
  }
}
@-webkit-keyframes loader10m {
  0% {
    background-color: rgba(0, 0, 0, .2)
  }
  25% {
    background-color: rgba(0, 0, 0, .2)
  }
  50% {
    background-color: #fff
  }
  75% {
    background-color: rgba(0, 0, 0, .2)
  }
  100% {
    background-color: rgba(0, 0, 0, .2)
  }
}
@keyframes loader10m {
  0% {
    background-color: rgba(0, 0, 0, .2)
  }
  25% {
    background-color: rgba(0, 0, 0, .2)
  }
  50% {
    background-color: #fff
  }
  75% {
    background-color: rgba(0, 0, 0, .2)
  }
  100% {
    background-color: rgba(0, 0, 0, .2)
  }
}
@-webkit-keyframes loader10d {
  0% {
    background-color: rgba(0, 0, 0, .2)
  }
  25% {
    background-color: rgba(0, 0, 0, .2)
  }
  50% {
    background-color: rgba(0, 0, 0, .2)
  }
  75% {
    background-color: #fff
  }
  100% {
    background-color: rgba(0, 0, 0, .2)
  }
}
@keyframes loader10d {
  0% {
    background-color: rgba(0, 0, 0, .2)
  }
  25% {
    background-color: rgba(0, 0, 0, .2)
  }
  50% {
    background-color: rgba(0, 0, 0, .2)
  }
  75% {
    background-color: #fff
  }
  100% {
    background-color: rgba(0, 0, 0, .2)
  }
}
</style>
