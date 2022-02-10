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
    }
  },
  methods: {
    startMoving(e){
      this.$data.moving = true;
      this.$data.offsetX = e.offsetX;
      this.$data.offsetY = e.offsetY;
      console.log(e.offsetX);
    },
    stopMoving(){
      this.$data.moving = false;
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
    <div class="window" :style="{left: x + 'px', top: y + 'px'}">
      <div class="window-head" @mousedown="startMoving" >
        <span>{{title}}</span>
      </div>
      <div class="window-body">{{body}}</div>
    </div>
  `
});
