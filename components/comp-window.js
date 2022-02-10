Vue.component('window', {
  props: ['title', 'body'],
  data: function(){
    return {
      moving: false,
      eventListener: null,
      prevX: 0,
      prevY: 0,
      currX: 0,
      currY: 0,
      x: 0,
      y: 0,
    }
  },
  methods: {
    startMoving(e){
      this.$data.moving = true;
    },
    stopMoving(){
      this.$data.moving = false;
    },
  },
  mounted() {
    const self = this;
    window.addEventListener("mousemove", e => {
      if (this.$data.moving) {
        this.$data.prevX = this.$data.currX;
        this.$data.prevY = this.$data.currY;
        const rect = e.target.getBoundingClientRect()
        this.$data.currX = e.pageX;
        this.$data.currY = e.pageY;
        this.$data.x += this.$data.currX - this.$data.prevX;
        this.$data.y += this.$data.currY - this.$data.prevY;

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
      <div class="window-head" @mousedown="startMoving()" >
        <span>{{title}}</span>
      </div>
      <div class="window-body">{{body}}</div>
    </div>
  `
});
