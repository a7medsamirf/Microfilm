<template>
  <v-app dark>

    <the-header />
   <v-main class="pt-0">
        <Nuxt  />
    </v-main>
<mobile-bar />
    <the-footer />
    <on-scroll />
  </v-app>
</template>

<script>
import TheFooter from "~/components/Footer/TheFooter";
import TheHeader from "~/components//Header/TheHeader";
import OnScroll from "~/components/onScroll";
import MobileBar from '~/components/Header/MobileBar.vue';
export default {
  components: { OnScroll, TheHeader, TheFooter,MobileBar},
  transition: 'slide-bottom'
}
</script>

<style lang="scss">
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
.bounce-enter-active {
  transform-origin: top;
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  transform-origin: top;
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(0);
  }
}

header.v-sheet.theme--light.v-toolbar.v-app-bar.v-app-bar--fixed {
  background-color: transparent;
  box-shadow: none !important;
}

header.v-sheet.theme--light.v-toolbar.v-app-bar.v-app-bar--fixed.v-app-bar--is-scrolled
{
  box-shadow: 0 3px 3px -1px rgb(10 22 70 / 10%), 0 0 1px 0 rgb(10 22 70 / 6%) !important;
  background-color: rgb(255 255 255 / 65%);
  backdrop-filter: blur(8px);
}

.sub-list-group{
  background-color: #f4f5fa;
}
i.v-icon.notranslate.mdi.mdi-record-circle-outline {
  font-size: 15px;
  color:  var(--maincolor);
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #f5f5f5;
}

.theme--dark.v-app-bar.v-toolbar.v-sheet {
  background-color: #272727;
}
.v-sheet.v-app-bar.v-toolbar {
  border-radius: 0;
}
.v-toolbar__content,
.v-toolbar__extension {
  padding: 0px 16px !important;
}

header .v-btn:not(.v-btn--round).v-size--default {
  height: 36px;
  min-width: 64px !important;
  padding: 0;
  margin: 0px 10px;
  text-transform: capitalize;
}

.v-navigation-drawer {
  transition: all 0.8s cubic-bezier(0.77, 0.2, 0.05, 1);
}
.close-icon:hover .v-icon
{
  transition: 0.70s;
  transform: rotate(180deg);
}

.v-menu__content {
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%) !important;
}
.v-app-bar .v-list {
  background: #001e26 !important;
  color: #FFFFFF;
}
.v-toolbar
{
  .v-btn,
  .v-btn.v-btn--icon
  {
    color: #fff;
    letter-spacing: 0;
    font-weight: bold;
  }
  .DesktopNav .v-btn--active:hover::before,
  .DesktopNav .v-btn--active::before {
    opacity: 1 !important;
  }
  .DesktopNav .v-btn:before {
    background-color: transparent;
    border-radius: 3px;
    bottom: unset;
    color: inherit;
    content: "";
    left: 0px;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);

  }
}
.v-toolbar.v-app-bar--is-scrolled
{
  .v-btn,
  .v-btn.v-btn--icon
  {
    color: #0000008a;
    letter-spacing: 0;
    font-weight: bold;
    transition: all 0.5s ease-in-out;
  }
}
.theme--dark.v-app-bar.v-toolbar.v-sheet
{
  background-color: transparent;
  box-shadow: none !important;
}

.nav-menu {
  margin-top: 50px;
  contain: initial;
  overflow: visible;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    border-bottom: 13px solid $dark-surface;
    @include left(58px);
    transform: translateY(-100%);
    width: 10px;
    height: 13px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 13px solid #fff;
  }
}

.v-application.theme--dark .v-sheet.v-card,
.v-application.theme--dark .v-select-list,
.v-application.theme--dark .nav-menu .theme--dark.v-list
{

  box-shadow: none !important;
  backdrop-filter: blur(12px);
}

.theme--dark .nav-menu::before {
  border-bottom: 13px solid rgb(0 30 38 / 72%) !important;
}

.v-overlay:hover {
  cursor: url(../static/images/cross.png), auto;
}


</style>
