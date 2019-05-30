# vue frame animation plugin

## quick start

> Install

```javascript
npm install vue-frame-animation --save
```

> Main.js

```javascript
import vueFrameAnimation from 'vue-frame-animation'

Vue.use(vueFrameAnimation)
```

>  in your vue component

```javascript
<vue-frame-animation></vue-frame-animation>
```

> props

```javascript
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
}
//position like ['0 -854','-174 -852','-349 -852','-524 -852','-698 -852','-873 -848',]
```

> methods

```javascript
stop() //stop animation
start() // start animation
```



