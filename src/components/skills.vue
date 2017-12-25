<template>
    <section class="content">
        <div class="container">
            <h2 class="title is-2">Skills & tools</h2>
            <hr>
        </div>
        <div class="container">
            <h3 class="subtitle is-3">Front-End Tools</h3>
            <div class="columns">
                <div class="column is-one-third">
                    Front-end development tools at my disposal. Starting from the basics like HTML and CSS, all the way to Front-end libraries, with Vue.js being my preferred framework/library.
                </div>
                <div class="column">
                    <div class="tech">
                        <figure class="image is-128x128">
                            <img class="shake-slow" src="/static/images/html5-logo.png" />
                            <figcaption>HTML5</figcaption>

                        </figure>
                        <figure class="image is-128x128">
                            <img class="shake-slow" src="/static/images/css3-logo.png" />
                            <figcaption>CSS3</figcaption>
                        </figure>
                        <figure class="image is-128x128">
                            <img class="shake-slow" src="/static/images/javascript-logo.png" />
                            <figcaption>Javascript</figcaption>
                        </figure>
                        <figure class="image is-128x128">
                            <img class="shake-slow" src="/static/images/jquery-logo.png" />
                            <figcaption>JQuery</figcaption>
                        </figure>
                        <figure class="image is-128x128">
                            <img class="shake-slow" src="/static/images/php-logo.png" />
                        <figcaption>PHP</figcaption>
                        </figure>
                        <figure class="image is-128x128">
                            <img class="shake-slow" src="/static/images/vue-logo.png" />
                            <figcaption>Vue.js</figcaption>
                        </figure>
                        <figure class="image is-128x128">
                            <img class="shake-slow" src="/static/images/bootstrap-logo.png" />
                            <figcaption>Bootstrap</figcaption>
                        </figure>
                        <figure class="image is-128x128">
                            <img class="shake-slow" src="/static/images/bulma-logo.png" />
                            <figcaption>Bulma.css</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
            <hr>
        </div>
        <div class="container">
            <h3 class="subtitle is-3">Back-End Tools</h3>
            <div class="columns">
                <div class="column">
                    <figure class="image is-128x128">
                        <img class="shake-slow" src="/static/images/apache-logo.png" />
                        <figcaption>Apache</figcaption>
                    </figure>
                    <figure class="image is-128x128">
                        <img class="shake-slow" src="/static/images/mysql-logo.png" />
                        <figcaption>MySQL</figcaption>
                    </figure>
                    <figure class="image is-128x128">
                        <img class="shake-slow" src="/static/images/nodejs-logo.png" />
                        <figcaption>Node.js</figcaption>
                    </figure>
                    <figure class="image is-128x128">
                        <img class="shake-slow" src="/static/images/java-logo.png" />
                        <figcaption>Java</figcaption>
                    </figure>
                    <figure class="image is-128x128">
                        <img class="shake-slow" src="/static/images/python-logo.png" />
                        <figcaption>Python</figcaption>
                    </figure>
                    <figure class="image is-128x128">
                        <img class="shake-slow" src="/static/images/npm-logo.png" />
                        <figcaption>npm</figcaption>
                    </figure>
                </div>
                <div class="column is-one-third">
                    Back-end development tools that I mostly use for development. This area is less populated due to lack of expertise, specifically, in back-end development.
                </div>
            </div>
            <hr>
        </div>
        <div class="container">
            <h3 class="subtitle is-3">Other Tools</h3>
            <div class="columns">
                <div class="column is-one-third">
                    Other tools that I use for programming/development in general.
                    Linux (Ubuntu) as my preferred OS, with other softare (usually free and open source) to help me with my needs as a developer.
                </div>
                <div class="column">
                    <figure class="image is-128x128">
                        <img class="shake-slow" src="/static/images/linux-logo.png" />
                        <figcaption>Linux</figcaption>
                    </figure>
                    <figure class="image is-128x128">
                        <img class="shake-slow" src="/static/images/code-logo.png" />
                        <figcaption>VS Code</figcaption>
                    </figure>
                    <figure class="image is-128x128">
                        <img class="shake-slow" src="/static/images/photoshop-logo.png" />
                        <figcaption>Photoshop</figcaption>
                    </figure>
                    <figure class="image is-128x128">
                        <img class="shake-slow" src="/static/images/libre-logo.png" />
                        <figcaption>Libre Office</figcaption>
                    </figure>
                    <figure class="image is-128x128">
                        <img class="shake-slow" src="/static/images/gimp-logo.png" />
                        <figcaption>GIMP</figcaption>
                    </figure>
                    <figure class="image is-128x128">
                        <img class="shake-slow" src="/static/images/bash-logo.png" />
                        <figcaption>Bash</figcaption>
                    </figure>
                    <figure class="image is-128x128">
                        <img class="shake-slow" src="/static/images/git-logo.png" />
                        <figcaption>Git</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "skills",
  data() {
    return {};
  }
};
</script>

<style scoped>
figure {
    display: inline-block;
    margin: 25px;
}

figure img {
    vertical-align: top;
    margin: auto;
}

figure figcaption {
    text-align: center;
}
</style>
