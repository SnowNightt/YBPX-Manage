<template>
    <div class="container">
        <div class="left">
            <img src="../../../public/2.jpg" alt="">
        </div>
        <div class="right">
            <div class="login">
                <div class="title">
                    <h3>用户登陆</h3>
                </div>
                <div class="user-input">
                    <div class="username">
                        <span>用户名:</span>
                        <input type="text" placeholder="请输入用户名">
                    </div>
                    <div class="password">
                        <span>密&nbsp;&nbsp;&nbsp;码:</span>
                        <input type="password" placeholder="请输入密码">
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

<script setup lang="ts">

</script>

<style scoped>
.container {
    box-sizing: border-box;
    width: 1000px;
    height: 550px;
    background-color: #e5dbff;
    display: flex;
    position: absolute;
    inset: 0;
    margin: auto;
    /* 动画样式 */
    transition: 2s;
    user-select: none;
}

/* 左侧布局 */
.left {
    height: 100%;
    width: 310px;
}

.left img {
    width: 100%;
    height: 100%;
}

/* 右侧布局 */
.right {
    flex: 1;
}

.title>h3 {
    font-size: 40px;
    text-align: center;
    padding: 30px 0 10px 0;
    color: white;
    letter-spacing: 10px;
}

input {
    outline: none;
    height: 30px;
    width: 350px;
    border: none;
    border-bottom: 1px solid #b197fc;
    background-color: #e5dbff;
    color: rgba(132, 94, 247, .7);
    font-size: 20px;
    padding: 0 10px;
    font-weight: bold;

}

/* 设置input框中placeholder的样式 */
input::-webkit-input-placeholder {
    /* WebKit browsers*/
    color: rgba(132, 94, 247, .2);
}

.user-input {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    margin-top: 60px;
    color: rgba(176, 150, 255, .8);
}

.user-input span {
    display: inline-block;
    height: 30px;
    width: 66px;
    font-size: 20px;
    margin-right: 15px;
    line-height: 30px;
    font-weight: bold;
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

.login-btn>button {
    height: 55px;
    width: 300px;
    border: none;
    background: linear-gradient(to right, #ce9ffc, #8b68f7);
    border-radius: 20px;
    font-size: 20px;
    font-weight: bold;
    color: rgba(255, 255, 255, .9);
}

/* 注册用户，忘记密码样式 */
.info {
    display: flex;
    justify-content: space-between;
}

.info>a {
    font-size: 18px;
    text-decoration: none;
    color: #7950f2;
}

.info>a:nth-of-type(1) {
    margin-left: 50px;
}

.info>a:nth-of-type(2) {
    margin-right: 50px;
}

/* 猫猫布局 */
.look {
    height: 320px;
    width: 233.6px;
    position: absolute;
    bottom: 5px;
    right: 5px;
}

.look>img {
    width: 100%;
    height: 100%;
}
</style>