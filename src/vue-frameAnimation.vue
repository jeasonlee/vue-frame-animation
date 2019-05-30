<template>
	<div>
    <div class="sprite" ref="sprite" id="sprite" :style="styles"></div>
    <slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'vue-frame-animation',
	    props:{
			  width:{
			    type:Number,
	        require:true
	      },
	      height:{
	        type:Number,
	        require:true
	      },
	      bgImg:{
	        type:String,
	        require:true
	      },
	      position:{
	        type:Array,
	        require:true
	      },
	      wait:{
			    type:Number,
	        default:80
	      }
	    },
	    data(){
	      return {
	      }
	    },
	    computed:{
			  styles(){
			    return {
			      width:`${this.width}px`,
	          height:`${this.height}px`,
	          background:`url(${this.bgImg}) repeat-x 0 0`
	        }
	      }
	    },
	    mounted(){
	      var self = this
	      var img = new Image()
	      img.src = this.bgImg
	      img.onload = function() {
	        self.changePosition();
	      }
	    },
	    created(){
	      this.i = 0
	      this.backgroundTimer = null
	    },
	    destroyed(){
	      clearTimeout(this.backgroundTimer)
	    },
	    methods:{
			  changePosition(){
			    var sprite = this.$refs.sprite
	        var position = this.position[this.i].split(' ')
	        sprite.style.backgroundPosition = `${position[0]}px ${position[1]}px`

	        this.i++;
	        if(this.i >= this.position.length){
	          this.i = 0;
	        }

	        this.backgroundTimer = setTimeout(this.changePosition,this.wait)
	      },
	      stop(){
	        clearTimeout(this.backgroundTimer)
	      },
	      start(){
	        clearTimeout(this.backgroundTimer)
	        this.changePosition()
	      }
	    }
	};
</script>

<style scoped>
  .sprite{
    background-position: 0,0;
  }
</style>
