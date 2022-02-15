const projects = {

}


const data = {
  message: "ur nan",
  projects: projects,
  numTerms: 0,
  pages: [],
}

const methods = {
  createTerminal(){
    data.numTerms++;
  },
  createGithubWindow(link){
    data.github.push(link)
  }
}


document.addEventListener('keydown', e => {
  if(e.key == "Escape") methods.createTerminal();
});

const vm = new Vue({
  el: '#app',
  data: data,
  methods: methods,
});
