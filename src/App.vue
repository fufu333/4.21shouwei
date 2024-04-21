<!-- src/App.vue -->
<template>
  <div class="todo-list">
    <div>
      <nav class="nav-bar">
        <router-link to="/">首页</router-link>
        <router-link to="/profile">个人主页</router-link>
        <router-link to="/ceshi">测试结果</router-link>
        <router-link to="/login">登录</router-link> 
        <a href="https://github.com/fufu333/4.18-.git" target="_blank" class="github-button">GitHub代码仓库</a>  
      </nav>
      <router-view /> 
    </div>
  </div>  
    
</template>  
  
<script>
import { defineComponent } from 'vue'
   
  
export default defineComponent ({  
  name: 'App',  
  components: {  
    
  },
})  
</script>  
  
<style scoped>  
.todo-list {  
    position: relative;  
    display: flex;  
    align-items: center;  
    flex-direction: column;  
    height: 100vh;  
    margin: 0 auto;  
    padding: 20px;  
    box-sizing: border-box;  
    color: white;  
    text-align: center;  
    overflow: hidden;   
  }  
  
  .todo-list::before {  
    content: "";  
    position: fixed;  
    top: 0;  
    left: 50%;
    transform: translateX(-50%);  
    width: 100vw;  
    height: 100vh; 
    background-image: url('@/assets/bj.jpg');  
    background-size: cover;  
    background-position: center;  
    background-repeat: no-repeat;  
    z-index: -1; 
    pointer-events: none;  
  }  
  .nav-bar {  
    display: flex;  
    justify-content: center; 
    align-items: center;  
}  
  
.nav-bar a {  
    color: white;   
    text-decoration: none;  
    margin: 0 20px;  
    font-size: 1.2em;  
    transition: font-size 0.1s ease;  
}  
  
.nav-bar a:hover {  
    font-size: 1.4em; 
} 
  
</style>