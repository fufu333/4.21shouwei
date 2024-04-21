<!-- src/components/Login.vue -->
<template>
  <div class="ttt">
    <p class="qwq">欢迎来到登录页面</p>
    <div class="group">
      <div class="input1">
        <span class="input-group-addon" id="sizing-addon2">账号</span>
        <input class="username" v-model="username" aria-describedby="sizing-addon2">
      </div>
      <div class="input2">
        <span class="input-group-addon" id="sizing-addon2">密码</span>
        <input class="password" v-model="password" aria-describedby="sizing-addon2">
      </div>
      <button class="btn" @click="handleLogin">点击验证</button>
    </div>
    <button v-if="isLoggedIn" class="logout-btn" @click="handleLogout">点击退出当前账号</button>
  </div>

</template>

<script>
export default {
  data() {
    return {
      username: 'fufu',
      password: '123456',
      isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    };
  },
  methods: {
    handleLogin() {
      if (this.username === 'fufu' && this.password === '123456') {
        localStorage.setItem('isLoggedIn', 'true');
        alert('登录成功！');
        const redirect = this.$route.query.redirect;
        if (redirect) {
          this.$router.push(decodeURIComponent(redirect));
        } else {
          this.$router.push('/');
        }
      } else {
        alert('账号或密码错误！');
      }
    },

    handleLogout() {
      // 新增登出方法
      localStorage.removeItem('isLoggedIn');
      this.isLoggedIn = false; // 更新本地的登录状态
      this.$router.push('/login'); // 重定向到登录页面
    },
  },

  created() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  },
};
</script>

<style>
.ttt {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.input-group-addon {
  font-size: 18px;
}

.username,
.password {
  border-radius: 80px;
  margin-bottom: 10px;
  height: 25px;
  padding-left: 10px;
  width: 300px;
  margin: 8px;
  border: none;
  background-color: rgba(255, 255, 255, 0.826);
  font-size: 14px;
}

.qwq {
  font-size: 25px;
  margin-top: 70px;
  margin-bottom: 40px;
}

.btn {
  background-color: rgba(255, 255, 255, 0.804);
  width: 100px;
  color: rgb(67, 174, 49);
  border-radius: 80px;
  padding: 4px 5px;
  height: 30px;
  font-size: 15px;
  margin-top: 20px;
}

.logout-btn{
  background-color: rgba(255, 255, 255, 0.804);
  width: 140px;
  color: rgb(240, 120, 56);
  border-radius: 80px;
  padding: 4px 5px;
  height: 30px;
  font-size: 15px;
  margin-top: 20px;
}
</style>