Vue.component('window', {
  props: ['title', 'body'],
  data: function(){
    return {
      moving: null,
      eventListener: null,
      prevX: 0,
      prevY: 0,
      x: 0,
      y: 0,
    }
  },
  methods: {
    startMoving(){
      const self = this;
      this.$data.moving = setInterval(function(){
        self.$data.eventListener = window.addEventListener("mousemove", e => {
          console.log(e.pageX);
          
        });
      }, 1000);

    },
    stopMoving(){
      clearInterval(this.$data.moving);
      window.removeEventListener("mousemove", this.$data.eventListener);
      console.log("asdf");
    },
  },
  mounted() {
    // this.moving = false;
    // const moving = this.moving
    // setInterval(function(){
    //   console.log(moving);
    // }, 1000);
  },
  template: `
    <div class="window">
      <div class="window-head" @mousedown="startMoving()" @mouseup="stopMoving()">{{title}}</div>
      <div class="window-body">{{body}}</div>
    </div>
  `
});
