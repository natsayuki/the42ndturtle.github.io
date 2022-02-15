Vue.component('term', {
  data: function(){
    return {
      text: '',
      printed: [],
      '~': fs['~'],
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
          if(root[item].type == 'project') this.printProject(item)
          if(root[item].type == 'file') this.printFile(item);
        });
      }
      else if(command[0] == 'cd'){
        const root = eval(`this.$data['${this.$data.path.join("']['")}']`);
        let done = false;
        Object.keys(root).forEach(item => {
          if(root[item].type == 'dir' && item == command[1]){
            this.$data.path.push(item)
            done = true;
          }
        });
        if(!done) this.print(`unknown directory ${command[1]}`);
      }
      else if(command[0] == 'cat'){
        const root = eval(`this.$data['${this.$data.path.join("']['")}']`);
        let done = false;
        Object.keys(root).forEach(item => {
          if((root[item].type == 'file' || root[item].type == 'project') && item == command[1]){
            this.print(root[item].content);
            done = true;
          }
        });
        if(!done) this.print(`unrecognized legible file ${command[1]}`);
      }
      else if(command[0] == 'github'){
        const root = eval(`this.$data['${this.$data.path.join("']['")}']`);
        let done = false;
        Object.keys(root).forEach(item => {
          if(root[item].type == 'project' && item == command[1]){
            console.log(this.$parent);
            this.$parent.$parent.createGithubWindow(root[item].github)
            this.print(`<a href="${root[item].github}">{{root[item].github}}</a>`);
            done = true;
          }
        });
        if(!done) this.print(`unrecognized project ${command[1]}`);
      }
      else if(command[0] == 'run'){
        const root = eval(`this.$data['${this.$data.path.join("']['")}']`);
        let done = false;
        Object.keys(root).forEach(item => {
          if(root[item].type == 'project' && item == command[1] && root[item].link){
            this.$parent.$parent.pages.push(root[item].link)
            console.log(root[item].link);
            this.print(`running ${command[1]}`);
            done = true;
          }
        });
        if(!done) this.print(`unrecognized legible file ${command[1]}`);
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
    printFile(text){
      const w = this.$el.querySelector('.term-printed-wrapper');
      w.innerHTML += `
      <span class="term-text">${text}</span>
      `
    },
    printDir(text){
      const w = this.$el.querySelector('.term-printed-wrapper');
      w.innerHTML += `
      <span class="term-text-dir">${text}</span>
      `
    },
    printProject(text){
      const w = this.$el.querySelector('.term-printed-wrapper');
      w.innerHTML += `
      <span class="term-text-project">${text}</span>
      `
    },
    printCommand(){
      const w = this.$el.querySelector('.term-printed-wrapper');
      w.innerHTML += `
      <div class="term-username">madeline@madeline</span><span class="term-text">:${this.$data.path.join('/')}$ ${this.$data.text}</div>
      `
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
        <div class="term-printed-wrapper">

        </div>
        <div><span class="term-username">madeline@madeline</span><span class="term-text">:{{path.join('/')}}$ {{text}}</span><span class="term-cursor">▮</span></div>
      </div>
    </div>
  `
});
