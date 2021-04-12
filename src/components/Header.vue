<template>
  <div>
    <div class="layermarkheader">
      <div class="menuItems">
        <div class="header-logo">AMS</div>
        <div class="navItems">
          <div v-for="menu in menuItems" :key="menu.id" @click="setAactiveMenuItem(menu.id)">
            <div class="unique-menu-item-class" :class="{'active-menu-item': menu.id === activeMenuIndex}">{{ menu.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="info-bar-header">
      <div class="info-text">
        QA/QC - List of changes
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menuItems: [
        {
          name: 'Assets',
          action: 'login',
          id: 0
        },
        {
          name: 'Work Orders',
          action: 'login',
          id: 1
        },
        {
          name: 'Reports',
          action: 'login',
          id: 2
        }
      ],
      activeMenuIndex: 0
    }
  },
  methods: {
    setAactiveMenuItem(index) {
      this.activeMenuIndex = index
    }
  }
}
</script>

<style scoped>
.active-menu-item {
  background: rgba(105, 168, 236, 0.4);
  border-radius: 8px;
  height: 32px;
  opacity: 1 !important;
  padding: 5px 16px;
}
.unique-menu-item-class {
  height: 32px;
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  opacity: 0.6;
  margin-left: 20px;
  cursor: pointer;
}
.navItems {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 53px;
}
.menuItems {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 30px;
  padding-top: 17px;
}
.header-logo {
  font-family: 'Bungee Inline', cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 20px;
  /* or 71% */
  align-items: center;
  text-align: center;
  letter-spacing: -0.1em;
  color: #FFFFFF;
}
.layermarkheader {
  position: relative;
  width: 1920px;
  height: 60px;
  background: #005EA2;
}
.info-bar-header {
  position: relative;
  width: 1920px;
  height: 58px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.info-text {
  width: 450px;
  height: 41px;
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  color: #0681C5;
  margin-top: 17px;
  margin-left: -90px;
}
</style>
