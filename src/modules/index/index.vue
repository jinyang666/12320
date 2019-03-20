<template>
  <div id="app">
    <transition :name="transitionName">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
    </transition>
    <transition :name="transitionName">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
    name: 'app',
    components:{
      
    },
    data(){
        return {
            transitionName:"slide-left"
        }
    },
    watch:{
        $route(to,from){
            if(to.meta.index > from.meta.index){
                this.transitionName = 'slide-left';
            }else{
                this.transitionName = 'slide-right';
            }
        }           
    }
}
</script>

<style>
.slide-left-enter-active,.slide-right-enter-active {
   transition: all .3s ease;
}
.slide-left-leave-active,.slide-right-leave-active {
   display: none;
   transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-left-enter, .slide-left-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(100%);
    opacity: 0;
}
.slide-right-enter, .slide-right-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(-100%);
    opacity: 0;
}
</style>