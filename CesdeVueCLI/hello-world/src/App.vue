<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{title}}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MisTareas subtitulo="Ingrese sus tareas" dataStorage="dataF1"></MisTareas>
    <MisTareas subtitulo="Ingrese sus tareas" dataStorage="dataF2"></MisTareas>
    <MisTareas subtitulo="Ingrese sus tareas" dataStorage="dataF3"></MisTareas>
    <MisTareas subtitulo="Ingrese sus tareas" dataStorage="dataF4"></MisTareas>
    <MisTareas subtitulo="Ingrese sus tareas" dataStorage="dataF5"></MisTareas>
   
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MisTareas from './components/MisTareas.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MisTareas,
  },
  data(){
    return{
      title: 'Tareas con Vue'
    }
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
