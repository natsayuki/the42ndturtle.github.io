const data = {
  message: "ur nan",
  numTerms: 0,
  pages: [],
  mobile: false,
  interactive: true,
  projects: fs[`~`].projects,
  window: window,
}

const methods = {
  createTerminal(){
    data.numTerms++;
  },
  createGithubWindow(link){
    data.github.push(link)
  },
  switchView(){
    data.interactive = !data.interactive;
  },
}


document.addEventListener('keydown', e => {
  if(e.key == "Escape") methods.createTerminal();
});

Vue.use(VueMaterial.default);

const vm = new Vue({
  el: '#app',
  data: data,
  methods: methods,
});
