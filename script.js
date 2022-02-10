const projects = {

}


const data = {
  message: "ur nan",
  projects: projects,
  numTerms: 0,
}

const methods = {

}

function createTerminal(){
  data.numTerms++;
}

document.addEventListener('keydown', e => {
  if(e.key == "Tab") createTerminal();
});

const vm = new Vue({
  el: '#app',
  data: data,
  methods: methods,
});
