<template>
  <div class="container">
    <div class="left">
      <img src="../../../public/2.jpg" alt="" />
    </div>
    <div class="right">
      <div class="login">
        <div class="title">
          <h3>用户登陆</h3>
        </div>
        <div class="user-input">
          <div class="username">
            <span>用户名:</span>
            <input class="input" type="text" placeholder="请输入用户名" />
          </div>
          <div class="password">
            <span>密&nbsp;&nbsp;&nbsp;码:</span>
            <input class="input" type="password" placeholder="请输入密码" />
          </div>
        </div>
        <div class="login-btn">
          <button>登陆</button>
        </div>
        <div class="info">
          <a href="javascript:;">注册账户</a>
          <a href="javascript:;">忘记密码?</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  position: absolute;
  inset: 0;
  box-sizing: border-box;
  display: flex;
  width: 1000px;
  height: 550px;
  margin: auto;
  user-select: none;
  background-color: #e5dbff;

  /* 动画样式 */
  transition: 2s;
}

/* 左侧布局 */
.left {
  width: 310px;
  height: 100%;
}

.left img {
  width: 100%;
  height: 100%;
}

/* 右侧布局 */
.right {
  flex: 1;
}

.title > h3 {
  padding: 30px 0 10px;
  font-size: 40px;
  color: white;
  text-align: center;
  letter-spacing: 10px;
}

input {
  width: 350px;
  height: 30px;
  padding: 0 10px;
  font-size: 20px;
  font-weight: bold;
  color: rgba(132, 94, 247, 70%);
  background-color: #e5dbff;
  border: none;
  border-bottom: 1px solid #b197fc;
  outline: none;
}

/* 设置input框中placeholder的样式 */
.input::placeholder {
  /* WebKit browsers */
  color: rgba(132, 94, 247, 20%);
}

.user-input {
  display: flex;
  flex-direction: column;

  /* justify-content: center; */
  align-items: center;
  margin-top: 60px;
  color: rgba(176, 150, 255, 80%);
}

.user-input span {
  display: inline-block;
  width: 66px;
  height: 30px;
  margin-right: 15px;
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
}

.username {
  margin-bottom: 60px;
}

.password {
  margin-bottom: 70px;
}

/* 设置按钮样式 */
.login-btn {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.login-btn > button {
  width: 300px;
  height: 55px;
  font-size: 20px;
  font-weight: bold;
  color: rgba(255, 255, 255, 90%);
  background: linear-gradient(to right, #ce9ffc, #8b68f7);
  border: none;
  border-radius: 20px;
}

/* 注册用户，忘记密码样式 */
.info {
  display: flex;
  justify-content: space-between;
}

.info > a {
  font-size: 18px;
  color: #7950f2;
  text-decoration: none;
}

.info > a:nth-of-type(1) {
  margin-left: 50px;
}

.info > a:nth-of-type(2) {
  margin-right: 50px;
}

/* 猫猫布局 */
.look {
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 233.6px;
  height: 320px;
}

.look > img {
  width: 100%;
  height: 100%;
}
</style>
