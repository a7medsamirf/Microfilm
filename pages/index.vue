<template>
<div>




<home-carousel :articles="articles" />

  <app-search-input />


  <home-card :articles="articles" />

  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <div class="BlockItem FeaturedBLock">
          <a href="">

            <div class="BlockImageItem">
              <img alt="فيلم John Luther 2022 مترجم" src="https://new.movizland.cyou/wp-content/uploads/فيلم-John-Luther-2022-مترجم.jpg">
              <div class="StarsIMDB">
                <strong>8.3</strong>
              </div>
              <ul class="RestInformation">
                <li>
                  <i class="fa fa-film"></i>
                  <span>اثارة</span>
                  <span>جريمة</span>
                  <span>غموض</span>
                </li>
                <li>
                  <i class="fas fa-desktop"></i>
                  1080p WEB DL
                </li>
              </ul>

              <div class="BlockTitle">فيلم John Luther 2022 مترجم</div>
            </div>
          </a>
        </div>
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
import fetchPostsMixin from '@/utils/fetchPostsMixin';
import AppSearchInput from '~/components/widget/AppSearchInput.vue';
import HomeCarousel from "~/components/card/HomeCarousel";
import HomeCard from "~/components/card/HomeCard";
export default {
    name: "IndexPage",
    components: {HomeCard, HomeCarousel, AppSearchInput },
    mixins: [fetchPostsMixin]
}
</script>

<style>
.v-card.moving .v-image{
  background-size: cover;
  border-radius: 20px !important;

}
.v-card.moving
{
  box-shadow: 0 5px 20px 0 rgb(0 0 0 / 30%);
  border-radius: 20px !important;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}
.v-card.moving:hover{
  box-shadow: 0 0 0 0 rgb(0 0 0 / 30%);
  transform: translateY(5px);
}
.v-card.moving .v-image__image--cover{
  transition: all 0.5s ease-in-out;
}
.v-card.moving:hover .v-image__image--cover {
  transform: scale(1.15);
}









.BlockItem .BlockImageItem:after {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  content: '';
  position: absolute;
  top: 50%;
  pointer-events: none;
  right: 50%;
  margin: -2.5px;
  background: #ffffff82;
  /* transform:scale(0); */
}

.BlockItem:hover .BlockImageItem:after {
  transform: scale(110);
  opacity: 0;
  transition: .5s all ease
}

.FirstBlockHover {
  position: absolute;
  transform: scale(1.1);
  overflow: hidden;
  top: -15px;
  transition: .3s all ease;
  border-radius: 20px 20px 10px 10px;
  right: -10px;
  opacity: 0;
  pointer-events: none;
  z-index: 12;
  width: calc(100% + 20px);
  height: 45px;
  background: linear-gradient(to left, #7957ff, #38258b);
  box-shadow: 0 1px 10px #00000091
}

.EndBlockHover {
  position: absolute;
  bottom: 0;
  transition: .3s transform ease, .3s opacity ease;
  right: 0;
  display: none;
  opacity: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 3px 14px #0000008a;
  text-align: center;
  font-weight: 700;
  padding: 14px 12px
}

.BlockImageItem {
  height: 100%;
  overflow: hidden;
  position: relative;
  z-index: 2;
  background: #000;
  transition: .3s all ease;
}

.BlockItem:hover .FirstBlockHover {
  transform: scale(1)
}

.BlockItem:hover .EndBlockHover {
  transform: translate(0, 100%);
  opacity: 1
}

.BlockItem:hover {
  z-index: 10
}

.BlockItem:hover img {
  opacity: .3;
  transform: scale(1.2)
}
.BlockItem img {
  width: 100%;
  transition: .3s all ease;
  height: auto;
  min-height: 100%;
}
.FirstBlockHover>span:last-child {
  position: absolute;
  top: 8px;
  right: 18px;
  background: #0000005c;
  color: #fff;
  font-weight: 700;
  padding: 3px 8px 0;
  border-radius: 5px;
  font-size: 15px;
  line-height: 25px
}

.BlockImageItem:before {
  /* content:''; */
  /* position:absolute; */
  top: 0;
  opacity: 0;
  transition: .3s all ease;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  box-shadow: inset 0 2px 5px #0000006e
}

.BlockItem:hover .BlockImageItem:before {
  opacity: 1
}

.BlockItem:hover .BlockImageItem .StarsIMDB {
  transition: .3s .2s all ease;
  top: 8px;
  opacity: 1
}

.StarsIMDB {
  position: absolute;
  top: -56px;
  opacity: 0;
  background: #ffaa26;
  z-index: 10;
  box-shadow: 0 1px 7px #00000099;
  right: 7px;
  transition: .2s all ease;
  padding: 0;
  width: 55px;
  height: 51px;
  border-radius: 3px
}

.StarsIMDB strong {
  font-family: Changa;
  display: block;
  font-size: 23px;
  line-height: 100%;
  padding: 15px 0
}

.BlockTitle {
  position: absolute;
  opacity: 0;
  bottom: 0;
  right: 0;
  transition: .3s all ease;
  background: linear-gradient(transparent, #000);
  padding: 128px 14px 14px;
  width: 100%;
  color: #fff;
  font-family: Changa;
  line-height: 18px;
  font-size: 12px;
  direction: rtl;
  text-align: center
}

.BlockItem:hover .BlockTitle {
  opacity: 1
}

.SecondBlockTitle {
  border-bottom: 1px solid #ddd;
  padding-bottom: 6px;
  font-family: Changa;
  line-height: 22px;
  color: #1d1818
}
.FirstBlockHover>span:first-child {
  float: left;
  color: #fff;
  height: 100%;
  text-align: right;
  font-size: 19px;
  padding-left: 15px;
  font-family: Changa;
  line-height: 46px;
  padding-right: 14px
}

.FirstBlockHover>span:first-child i {
  float: left;
  font-size: 21px;
  margin: 12px 8px 0 0
}

.FirstBlockHover>span:last-child i {
  float: right;
  font-size: 22px;
  margin-left: 10px
}

span.PlayIcon {
  display: block;
  transition: .8s all ease;
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 4px dashed #ff8b26;
  z-index: 10;
  font-size: 30px;
  color: #ff8b26;
  padding-left: 2px;
  padding-top: 8px;
  transform-origin: center;
  top: 50%;
  right: 50%;
  margin-right: -385px;
  margin-top: -23px;
  transform: rotate(360deg)
}

.BlockItem:hover span.PlayIcon {
  transform: rotate(0) translate(0) scale(.7);
  margin-right: -30px
}

ul.RestInformation {
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px
}

ul.RestInformation>li>span {
  display: inline-block;
  line-height: 100%;
  margin-bottom: 2px;
  border-left: 1px solid #fff;
  padding: 0 4px;
  font-size: 9px;
  border-radius: 2px;
  margin-top: 2px
}

ul.RestInformation>li {
  color: #fff;
  transition: .3s .3s all ease;
  font-weight: 700;
  margin-bottom: 5px;
  display: block;
  line-height: 10px;
  background: #f74740;
  font-size: 10px;
  padding: 4px;
  border-radius: 5px;
  transform: translate(0px, -40px);
  opacity: 0;
  pointer-events: none
}

ul.RestInformation>li i {
  margin-top: 3px;
  float: right;
  display: none;
  font-size: 13px;
  margin-left: 5px
}

ul.RestInformation>li:last-child {
  margin-bottom: 0;
  transition: .3s .2s all ease;
  background: #5e40d6
}

.BlockItem:hover ul.RestInformation>li {
  opacity: 1;
  transform: translate(0)
}
.StarsIMDB+ul.RestInformation {
  max-width: 103px
}
.BlockItem:hover .BlockImageItem .StarsIMDB {
  top: 12px
}
</style>
