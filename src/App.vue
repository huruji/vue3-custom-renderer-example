<template>
  <div>
  <img src="./logo.png">
  <h1 :style="style">Hello Vue 3!</h1>
  <button @click="inc">Clicked {{ count }} times.</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const style = ref('font-size: 30px; background-color: red')
    const inc = () => {
      count.value++
      if(style.value.includes('red')) {
        style.value = 'font-size: 30px; background-color: green'
      } else {
        style.value = 'font-size: 30px; background-color: red'
      }
    }

    return {
      count,
      inc,
      style
    }
  }
}
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
