<template>
  <header class="header">
    <div class="container">
      <nav class="header__menu">
        <div class="logo">
          <h1>Cozy House</h1>
          <div class="logo__subtitle">Shelter for pets in Boston</div>
        </div>
        <ul class="header__menu-list">
          <li class="header__menu-item">
            <router-link to="#" class="header__menu-link"
              >About the shelter</router-link
            >
          </li>
          <li class="header__menu-item">
            <router-link to="/education" class="header__menu-link"
              >Education</router-link
            >
          </li>

          <li class="header__menu-item">
            <router-link to="/home" class="header__menu-link"
              >Help the shelter</router-link
            >
          </li>
          <li class="header__menu-item">
            <router-link to="/statistick" class="header__menu-link">
              statistick
            </router-link>
          </li>
          <li class="header__menu-item">
            <router-link to="/auth" class="header__menu-link">
              auth
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  @import "../style/varriables.scss";
  .header {
    position: absolute;
    top: 58px;
    width: 100%;
    z-index: 50;
    color: $basic-grey;

    &__menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-flow: row wrap;
    }
    &__menu-list {
      display: flex;
    }
    &__menu-item {
      margin-right: 35px;
    }
    &__menu-item:last-child {
      margin-right: auto;
    }
    &__menu-link {
      color: inherit;
      text-decoration: none;
      font-size: 15px;
    }
  }

  .logo {
    h1 {
      font-size: 35px;
      line-height: 110%;
      font-family: Georgia;
      font-weight: 400;
      margin-bottom: 6px;
    }
    &__subtitle {
      font-size: 13px;
      line-height: 15px;
      color: $basic-white;
      letter-spacing: 0.1em;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      line-height: 110%;

      text-align: center;
    }
  }
</style>
