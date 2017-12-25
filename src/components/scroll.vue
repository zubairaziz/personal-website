<template>
    <a href="#top" v-smooth-scroll="{ duration: 1000, offset: 0 }" id="top-btn" title="Go to top"><i class="fa fa-chevron-up is-size-1" aria-hidden="true"></i></a>
</template>


<script>
export default {
  name: "scroll"
};

 window.onscroll = function () {
     scrollFunction()
 };

 function scrollFunction() {
     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
         document.getElementById("top-btn").style.display = "block";
     } else {
         document.getElementById("top-btn").style.display = "none";
     }
 };

</script>

<style scoped>
#top-btn {
    display: block;
    position: fixed;
    bottom: 0.25rem;
    right: 0.25rem;
    z-index: 99;
    border: none;
    outline: none;
    cursor: pointer;
    opacity: 0.6;
    color: hsl(0, 0%, 21%);
}

#top-btn:hover {
    opacity: 0.8;
}
</style>
