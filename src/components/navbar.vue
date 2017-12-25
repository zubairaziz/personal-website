<template>
    <nav id="top" class="navbar">
        <div class="container is-fluid">
            <div class="navbar-brand">
                <router-link class="navbar-item" to="/">
                    <h1>ZUBAIR</h1>
                </router-link>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <router-link class="navbar-item" to="/experience">
                        EXPERIENCE
                    </router-link>
                    <router-link class="navbar-item" to="/skills">
                        SKILLS
                    </router-link>
                    <router-link class="navbar-item" to="/projects">
                        PROJECTS
                    </router-link>
                </div>
            </div>
            <div class="navbar-dropdown has-text-centered">
                <router-link class="navbar-item" to="/">
                HOME
                </router-link>
                <router-link class="navbar-item" to="/experience">
                EXPERIENCE
                </router-link>
                <router-link class="navbar-item" to="/skills">
                SKILLS
                </router-link>
                <router-link class="navbar-item" to="/projects">
                PROJECTS
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {};
  }
};
</script>

<style scoped>
.button {
  border: 0;
}

.navbar-brand {
  font-size: 1.5rem;
}

.navbar {
  background-color: hsl(0, 0%, 5%);
}

.navbar-item {
  color: rgba(185, 137, 14, 0.9);
}

.navbar-item:hover {
  color: rgba(102, 76, 11, 0.9);
  background-color: hsl(0, 0%, 8%);
}

.navbar-dropdown {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 2rem;
}

@media (max-width: 1024px) {
    .navbar-brand {
        display: none;
    }
}
</style>
