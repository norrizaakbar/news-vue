<script>
export default {
    name: 'NavBar'
}
</script>

<template>
    <div class='container'>

      <div id="navigation-bar">
        <nav>
          <ul>
            <li><router-link to='/' id="logo">LOGO</router-link></li>
            <li><router-link to='/' id="logo">Home</router-link></li>
            <!-- <li><a href=#>About</a></li>
            <li><a href=#>Portfolio</a></li>
            <li><a href=#>Services</a></li>
            <li><a href=#>Contact</a></li> -->
            <a href="#" id="menu-icon"></a>
          </ul>
        </nav>
      </div>

      
      

    </div>
</template>

<style >

</style>