import vueFrameAnimationComponent from './src/vue-frameAnimation'

const vueFrameAnimation = {
  install(Vue,options){
    Vue.component(vueFrameAnimationComponent.name,vueFrameAnimationComponent)
  }
}

export default vueFrameAnimation
