<template>
<div>
  <div class="row">
    <div class="column small-11 small-centered">
      <slick class="slider slider-for" ref="c2" :options="sliderfor">
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
        <div><h3>7</h3></div>
        <div><h3>8</h3></div>
        <div><h3>9</h3></div>
        <div><h3>10</h3></div>
      </slick>

      <slick class="slider slider-nav" ref="c2" :options="slidernav">
        <div><h3><span>1</span></h3></div>
        <div><h3><span>2</span></h3></div>
        <div><h3><span>3</span></h3></div>
        <div><h3><span>4</span></h3></div>
        <div><h3><span>5</span></h3></div>
        <div><h3><span>6</span></h3></div>
        <div><h3><span>7</span></h3></div>
        <div><h3><span>8</span></h3></div>
        <div><h3><span>9</span></h3></div>
        <div><h3><span>10</span></h3></div>
      </slick>
    </div>
  </div>
</div>
</template>

<script>
import movies from "~/api/movies";

export default {
  name: "slider",
  data() {
    return {
      sliderfor: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      },
      slidernav: {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
      },
    }
  },
}
</script>


