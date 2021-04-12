<template>
  <div class="mainPart">
    <div class="firstPart">
      <div style="margin-left: -40px">
        <img src="../assets/images/Ams.jpg">
        <img src="../assets/images/asset_management.jpg">
      </div>
      <div class="blueLine" />
      <div class="loginTextUsername">Username</div>
      <input v-model="username" class="loginInput">
      <div class="loginTextPassword">Password</div>
      <input v-model="password" type="password" class="loginInput">
      <button class="loginBtn" @click="register">
        Enter
        <img style="margin-left: 5px;" src="../assets/images/enterArrow.jpg">
      </button>
      <div class="forgotPw">Forgot password</div>
      <div>
        <img class="dcWater" src="../assets/images/dc_water_ikon.png">
      </div>
      <div class="distOfColombia">
        District of Columbia Water and Sewer Authority
      </div>
      <div class="blueLine2" />
      <img src="../assets/images/layermark.png">
      <img class="altLogo" src="../assets/images/alt_login_logo.png">
    </div>
  </div>
</template>

<script>
import Authorization from '@/api/authorization'
export default {
  name: 'Login',
  components: {
  },
  data() {
    return {
      username: 'athompson',
      password: 'Test123!',
      error: null
    }
  },
  methods: {
    async register() {
      const result = await Authorization.login({
        username: this.username,
        password: this.password,
        application: 'VALVE',
        deviceInfo: {
          macAddress: '1234',
          deviceType: 'WINDOWS_TABLET',
          deviceVendor: 'DELL',
          modelName: 'xyz',
          osVersion: 'windows 10'
        }
      })
      if (this.isSuccess(result)) {
        localStorage.setItem('x-token', result.data.jwtToken)
        await this.$router.push('Assets')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainPart {
  background-image: url("../assets/images/loginMain.jpg");
  background-size: contain;
  width: 1920px;
  height: 100%;
}
.firstPart {
  width: 480px;
  height: 1080px;
  top: 0px;
  background: #FFFFFF;
  padding-top: 167px;
}
.loginBtn {
  width: 292px;
  height: 50px;
  border: 2px solid #005EA2;
  box-sizing: border-box;
  border-radius: 3px;
  margin-top: 20px;
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  color: #005EA2;
}
.loginInput {
  width: 292px;
  height: 40px;
  left: 97px;
  top: 235px;
  background: #F7F7F7;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  text-align: left;
  padding-left: 5px;
}
.loginInput:focus {
  border: 1px solid #005EA2 !important;
}
.loginTextUsername {
  width: 127px;
  height: 18px;
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */
  align-items: center;
  color: #000000;
  margin-left: 65px;
  margin-bottom: 5px;
  margin-top: 35px;
}
.loginTextPassword {
  width: 127px;
  height: 18px;
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */
  align-items: center;
  color: #000000;
  margin-left: 65px;
  margin-bottom: 5px;
  margin-top: 15px;
}
.forgotPw {
  width: 191px;
  height: 18px;
  left: 152px;
  top: 472px;
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;
  color: #000000;
  margin-left: 190px;
  margin-top: 30px;
}
.dcWater {
  width: 94px;
  height: 62px;
  margin-top: 290px;
}
.blueLine {
  width: 293px;
  height: 0px;
  margin-left: 92px;
  border: 1px solid #0681C5;
}
.blueLine2 {
  width: 230px;
  height: 0px;
  margin-left: 130px;
  margin-top: 20px;
  border: 1px solid #0681C5;
}
.distOfColombia {
  width: 230px;
  height: 30px;
  font-family: 'Bungee', cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 11px;
  /* or 115% */
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.045em;
  color: #0681C5;
  margin-left: 122px;
}
.altLogo {
  margin-top: 28px;
}
</style>
