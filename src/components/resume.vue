<template>
    <section class="content">
        <div class="pad has-text-centered">
            <div><small>*Best viewed on desktop</small></div>
            <a href="../static/files/resume.pdf" class="button is-danger" download><i class="fa fa-file-pdf-o" aria-hidden="true"></i>&nbsp;Download PDF version </a>
        </div>
        <hr>
        <div class="container">
            <header class="has-text-centered">
                <h2 class="title is-1">ZUBAIR AB AZIZ</h2>
                <div>500 Joseph C. Wilson Blvd, CMC Box 275298, Rochester NY-14627</div>
                <div><a href="mailto:zabaziz@u.rochester.edu">zabaziz@u.rochester.edu</a> | (585) 284-1150 | <a href="http://www.zubairaziz.net">zubairaziz.net</a></div>
            </header>
            <hr>
            <article>
                <h3>Skills</h3>
                <div class="columns">
                    <div class="column">
                        <ul>
                            <li>Javascript</li>
                            <li>Java</li>
                            <li>PHP</li>
                            <li>Python</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                    <div class="column">
                        <ul>
                            <li>jQuery</li>
                            <li>Vue.js</li>
                            <li>Bulma.css</li>
                            <li>Twitter Bootstrap</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                    <div class="column">
                        <ul>
                            <li>Object Oriented programming</li>
                            <li>Page speed optimization</li>
                            <li>Search Engine Optimization (SEO)</li>
                            <li>Agile Methodology</li>
                            <li>Responsive Web Design</li>
                        </ul>
                    </div>
                </div>
                <hr>
                <h3>Experience</h3>
                <div class="is-pulled-left">
                    <strong>IT Consultant | University of Rochester</strong>
                </div>
                <div class="is-pulled-right">
                    Fall 2017 - Present
                </div>
                <div class="is-clearfix"></div>
                <ul>
                    <li>Assisted with network registration and troubleshoot network issues</li>
                    <li>Troubleshoot NetID and login issues</li>
                    <li>Provide support via a walk-in, telephone or chat</li>
                    <li>Assist with various types of malware on students' personal computers</li>
                </ul>
                <div class="is-pulled-left">
                    <strong>Mobile Engineer Intern | Media Prima Digital</strong>
                </div>
                <div class="is-pulled-right">
                    Summer 2017
                </div>
                <div class="is-clearfix"></div>
                <ul>
                    <li>Worked with the team to develop websites and apps</li>
                    <li>Trained in both front end and back end systems</li>
                    <li>Optimized pages for better load speeds and SEO</li>
                    <li>Worked with Robot Framework to automate web page testing</li>
                    <li>Applied agile software development techniques</li>
                </ul>
                <div class="is-pulled-left">
                    <strong>Teaching Assistant | University of Rochester</strong>
                </div>
                <div class="is-pulled-right">
                    Spring 2017 - Fall 2017
                </div>
                <div class="is-clearfix"></div>
                <ul>
                    <li>Led a lab of about 25 students to assist with lab assignments</li>
                    <li>Held office hours to ensure students understood course concepts</li>
                    <li>Proctored exams, and graded homework and projects</li>
                </ul>
                <hr>
                <h3>Education</h3>
                <div class="is-pulled-left">
                    <strong>University of Rochester</strong>
                </div>
                <div class="is-pulled-right">
                    Anticipated May 2019
                </div>
                <div class="is-clearfix"></div>
                <ul>
                    <li>
                        BA Economics | BA Computer Science
                    </li>
                    <li>
                        Relevant courses:
                        <ul>
                            <li>The Science of Programming</li>
                            <li>Data Structures & Algorithms</li>
                            <li>Web Design and Development</li>
                            <li>Web Programming</li>
                            <li>Advanced front-end web development</li>
                        </ul>
                    </li>
                </ul>
                <hr>
                <h3>Activities</h3>
                <div>
                    <strong>Alpha Kappa Psi (Professional Business Fraternity)</strong>
                </div>
                <ul>
                    <li>Social Chair</li>
                    <li>Secretary</li>
                    <li>Pledge Class President</li>
                </ul>
                <div>
                    <strong>Grass Roots Soccer</strong>
                </div>
                <ul>
                    <li>Coached students aged 6-12 in the Rochester area schools.</li>
                    <li>Spent roughly 2 hours a week coaching an average of 10 students each session.</li>
                </ul>
            </article>
        </div>
        <hr>
    </section>
</template>

<script>
export default {
  name: "resume",
  data() {
    return {};
  }
};
</script>

<style scoped>
.pad {
    margin-top: 1rem;
}
article {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
</style>
