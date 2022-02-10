Vue.component('term', {
  data: function(){
    return {
      text: '',
      printed: []
    }
  },
  methods: {
    handleCommand(){
      this.printCommand();
      if(this.$data.text == 'ls'){
        this.print('there');
        this.print('will');
        this.print('be');
        this.print('projects');
        this.print('and');
        this.print('shit');
        this.print('here');
      }

      else{
        this.print(`unrecognized command ${this.$data.text.split(' ')[0]}`);
      }

      this.$data.text = '';
    },
    print(text){
      const w = this.$el.querySelector('.term-printed-wrapper');
      w.innerHTML += `
      <div class="term-text">${text}</div>
      `
    },
    printCommand(){
      const w = this.$el.querySelector('.term-printed-wrapper');
      w.innerHTML += `
      <span class="term-username">madeline@madeline</span><span class="term-text">:~$ ${this.$data.text}</span>
      `
    }
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
        <div class="term-printed-wrapper">

        </div>
        <div><span class="term-username">madeline@madeline</span><span class="term-text">:~$ {{text}}</span><span class="term-cursor">▮</span></div>
      </div>
    </div>
  `
});
