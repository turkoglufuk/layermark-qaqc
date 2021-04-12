<template>
  <b-row>
    <b-col cols="3">
      <!-- bottom -->
      <b-row align-h="center">
        <div style="width: 300px">
          <b-row style="border-bottom: 1px solid #0681C5;">
            <img src="../assets/images/Ams.jpg">
            <img src="../assets/images/asset_management.jpg">
          </b-row>
          <b-row style="margin-top: 38px">
            <label>Username</label>
            <b-input v-model="username" />
          </b-row>
          <b-row style="margin-top: 19px">
            <label>Password</label>
            <b-input v-model="password" type="password" />
          </b-row>
          <b-row style="margin-top: 19px">
            <b-col>
              <div class="login-btn" @click="login">
                Enter
              </div>
            </b-col>
          </b-row>
        </div>
      </b-row>

      <!-- bottom -->
      <b-row />
    </b-col>
    <b-col cols="9">
      <img style="width: 100%; height: 100vh" src="../assets/images/loginMain.jpg">
    </b-col>
  </b-row>
</template>

<script>
// @ is an alias to /src
import Authorization from '@/api/authorization'

export default {
  name: 'Home',
  data() {
    return {
      username: 'athompson',
      password: 'Test123!'
    }
  },
  methods: {
    async login() {
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
        await this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  font-size: 72px;
  color: #69A8EC;
}

.login-btn {
  height: 50px;
  border: 2px solid #005EA2;
  border-radius: 3px;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  font-weight: bold;
  color: #005EA2;
  cursor: pointer;
}

</style>
