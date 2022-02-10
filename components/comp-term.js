Vue.component('term', {
  data: function(){
    return {
      text: '',
      printed: [],
      '~': {
        projects: {
          type: 'dir'
        },
        'about-me.txt': {
          type: 'file',
          content: "Hello! My name is Madeline! I am currently attending college at NC State university for Computer Science. I like programming and video games, though I am bad at both!"
        },
        experience: {
          type: 'dir',
          'unity.txt': {
            type: 'file',
            content: 'unity internship'
          }
        }
      },
      path: ['~'],
    }
  },
  methods: {
    handleCommand(){
      const command = this.$data.text.split(' ');

      this.printCommand();

      if(command[0] == 'ls'){
        const root = eval(`this.$data['${this.$data.path.join("']['")}']`);
        Object.keys(root).forEach(item => {
          if(root[item].type == 'dir') this.printDir(item)
          if(root[item].type == 'file') this.print(item);
        });
      }
      else if(command[0] == 'cd'){
        const root = eval(`this.$data['${this.$data.path.join("']['")}']`);
        // if(command[1] == '../' && this.$data.path != ['~']){
        //   this.$data.path = this.$data.path[0,this.$data.path.length-1]
        // }
        Object.keys(root).forEach(item => {
          if(root[item].type == 'dir' && item == command[1]) this.$data.path.push(item)
        });
      }
      else if(command[0] == 'cat'){
        const root = eval(`this.$data['${this.$data.path.join("']['")}']`);
        Object.keys(root).forEach(item => {
          if(root[item].type == 'file' && item == command[1]) this.print(root[item].content);
        });
      }
      else{
        this.print(`unrecognized command ${command[0]}`);
      }

      this.$data.text = '';
    },
    print(text){
      const w = this.$el.querySelector('.term-printed-wrapper');
      w.innerHTML += `
      <div class="term-text">${text}</div>
      `
    },
    printDir(text){
      const w = this.$el.querySelector('.term-printed-wrapper');
      w.innerHTML += `
      <div class="term-text-dir">${text}</div>
      `
    },
    printCommand(){
      const w = this.$el.querySelector('.term-printed-wrapper');
      w.innerHTML += `
      <span class="term-username">madeline@madeline</span><span class="term-text">:${this.$data.path.join('/')}$ ${this.$data.text}</span>
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
        <div><span class="term-username">madeline@madeline</span><span class="term-text">:{{path.join('/')}}$ {{text}}</span><span class="term-cursor">▮</span></div>
      </div>
    </div>
  `
});
