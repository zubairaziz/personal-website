<template>
  <footer class="footer">
    <div class="container">
      <div class="content is-pulled-left">
        <div>
          <span>All work done by </span>
          <a href="http://www.github.com/zubairaziz">Zubair</a>
          <span> | Built with Vue.js & Bulma.css</span>
        </div>
        <div>
            <span>Zubair Ab Aziz |</span>
            <span> University of Rochester '19</span>
        </div>
        <div><a class="email" href="mailto:zabaziz@u.rochester.edu">zabaziz@u.rochester.edu</a></div>
        <div>(585) 284 - 1150</div>
      </div>
      <div class="is-pulled-right">
        <ul>
            <li><a href="http://www.github.com/zubairaziz"><i class="fa fa-github" aria-hidden="true"></i></a></li>
			<li><a href="#"><i class="fa fa-stack-overflow" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
			<li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
		</ul>
      </div>
    </div>
    <div class="clear"></div>
  </footer>
</template>

<script>
export default {
  name: "foot",
  data() {
    return {};
  }
};
</script>

<style scoped>
.footer {
    background-color: hsl(0, 0%, 4%);
    padding-bottom: 2em;
}

.clear {
    clear: both;
}

a {
    font-size: 1.25rem;
    color: rgba(185, 137, 14, 0.9);
}

a:hover {
    color: rgba(102, 76, 11, 0.9);
}

.email {
    color: hsl(0, 0%, 21%);
    font-size: 1rem;
}

@media (max-width: 670px) {
    ul li {
        display: inline-block;
        padding-right: 1rem;
    }
}
</style>
