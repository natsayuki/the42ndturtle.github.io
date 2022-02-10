Vue.component('window', {
  props: ['title', 'body'],
  data: function(){
    return {
      moving: false,
      eventListener: null,
      offsetX: 0,
      offsetY: 0,
      x: 0,
      y: 0,
      fullscreen: false,
      transitioning: false,
    }
  },
  methods: {
    startMoving(e){
      this.$data.moving = true;
      this.$data.offsetX = e.offsetX;
      this.$data.offsetY = e.offsetY;
    },
    stopMoving(){
      this.$data.moving = false;
    },
    toggleFS(){
      this.$data.fullscreen = !this.$data.fullscreen;
      if(!this.$data.fullscreen) {
        this.$data.transitioning = true;

        const self = this;
        setTimeout(function(){
          self.$data.transitioning = false;
        }, 200);
      }
    },
    selectWindow(){
      document.querySelectorAll('.window-selected').forEach(w => {
        w.classList.remove('window-selected');
      });
      this.$el.classList.add('window-selected');
    },
    close(){
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    },
  },
  mounted() {
    const self = this;
    window.addEventListener("mousemove", e => {
      if (this.$data.moving) {
        this.$data.x = e.pageX - this.$data.offsetX;
        this.$data.y = e.pageY - this.$data.offsetY;

        if(this.$data.y < 0) this.$data.y = 0;
        if(this.$data.x < 0) this.$data.x = 0;
      }
    });

    window.addEventListener("mouseup", e => {
      this.$data.moving = false;
    });
  },
  template: `
    <div @mousedown="selectWindow" :class="{window: true, 'window-fullscreen': fullscreen, 'window-fullscreen-transition': transitioning}" :style="{left: x + 'px', top: y + 'px'}">
      <div class="window-head" @mousedown="startMoving">
        <span>{{title}}</span>
      </div>
      <div class="window-button-wrapper">
        <div class="window-button" @click="toggleFS" style="background-color: blue"></div>
        <div class="window-button" @click="close" style="background-color: red"></div>
      </div>
      <div class="window-body" :class="{'window-fullscreen': fullscreen, 'window-fullscreen-transition': transitioning}">
        <slot></slot>
      </div>
    </div>
  `
});
