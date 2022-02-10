Vue.component('term', {
  data: function(){
    return {
      text: '',
    }
  },
  methods: {
    handleCommand(){

    },
  },
  mounted() {
    document.addEventListener('keydown', e => {
      if(e.code == "Enter"){
        this.handleCommand();
      }
      else if(e.code == "Backspace"){
        this.$data.text = this.$data.text.substr(0, this.$data.text.length-1);
      }
      else if(e.key.length == 1){
        this.$data.text += e.key;
      }
    });
  },
  template: `
    <div class="term">
      <div class="term-wrapper">
        <div><span class="term-username">madeline@madeline</span><span class="term-text">:~$ {{text}}</span><span class="term-cursor">▮</span></div>
      </div>
    </div>
  `
});
