<template>
    <div>
        <section>
            <div class="container content">
                <h2 class="title is-1 has-text-centered">
                    Zubair
                </h2>
                <h3 class="subtitle is-4 has-text-centered">
                    Aspiring full-stack web developer
                </h3>
                <hr>
                <div class="columns is-vcentered">
                    <div class="column is-one-third has-text-centered">
                        <figure class="headshot">
                            <img src="static/images/face.png" alt="zubair-headshot" />
                            <figcaption>
                                <router-link class="button is black" to="/resume">
                                    View my resume
                                </router-link>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="column">
                        <h3 class="subtitle is-3">About Me</h3>
                        <div class="about-text">
                            <p>I am currently a junior at the University of Rochester, studying <strong>Economics and Computer Science</strong>, and anticipating to graduate in 2019.</p>
                            <p>My interest in web development has stemmed from taking intro coures at school. I've become very intrigued in how the industry is changing, and the pace that it's going.</p>
                            <p>I'm particularly <strong>more experienced in front-end development</strong>, dealing with design and UI/UX. However, I'm definitely more interested in adding more back-end development knowledge to become a more wholesome developer.</p>
                            <p>Aside from academics, I'm involved in <strong>Alpha Kappa Psi</strong>, the professional business fraternity; and <strong>Grass Roots Soccer</strong>, a health organization that uses the power of soccer to educate, inspire, and mobilize young people to lead healthier lives.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="main hero-body">
            <div class="container page-header">
                <h3 class="title is-3">Check out my other stuff...</h3>
            </div>
            <div class="container has-text-centered">
                <div class="columns">
                    <div class="column">
                        <router-link class="card" to="/experience">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                <img src="static/images/experience.png" alt="experience image">
                                </figure>
                                <div class="overlay">
                                    <h3 class="title is-2 has-text-light">Experience</h3>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="column">
                        <router-link class="card" to="/skills">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                <img src="static/images/skills.png" alt="skills image">
                                </figure>
                                <div class="overlay">
                                    <h3 class="title is-2 has-text-light">Skills & Tools</h3>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="column">
                        <router-link class="card" to="/projects">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                <img src="static/images/projects.png" alt="projects image">
                                </figure>
                                <div class="overlay">
                                    <h3 class="title is-2 has-text-light">Projects</h3>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="spacer"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'home',
  data() {
      return {

      }
  }
}
</script>

<style scoped>
.page-header h3 {
    margin-bottom: 2rem;
    color: black;
    -webkit-text-fill-color: #F4F4F4;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
}

.main {
    margin-top: 2rem;
    background-color:rgba(0, 0, 0, 0.95);
}

.headshot img {
    border-radius: 50%;
    border: 1px grey solid;
}

.hero-body {
    border-top: 1px black solid;
}

.card:hover figure {
    opacity: 0.85;
    filter: blur(1px);
}

.card-content {
    background-color: #F4F4F4;
}

.overlay {
  text-align: center;
}

.overlay {
  transition: .3s all;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  opacity: 0.65;
}

.overlay h3 {
  padding-top: 30%;
}

.card:hover .overlay {
  opacity: 1;
  -webkit-text-fill-color: #F4F4F4;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
}

.spacer {
    height: 5rem;
}

.about-text {
    padding: 0.5rem;
}

</style>
