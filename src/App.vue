<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <scroll></scroll>
    <foot></foot>
  </div>
</template>

<script>
import Navbar from './components/navbar'
import Foot from './components/foot'
import Home from './components/home'
import Skills from './components/skills'
import Experience from './components/experience'
import Projects from './components/projects'
import Resume from './components/resume'
import Scroll from './components/scroll'

export default {
  name: 'app',
  components: {
    Home,
    Navbar,
    Foot,
    Skills,
    Scroll,
    Experience,
    Projects,
    Resume
  }
}
</script>

<style>

</style>
