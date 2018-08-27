const createDiv = html => {
  var div = document.createElement("div");
  div.innerHTML = html;
  div.className = "login";
  document.body.appendChild(div);
  return div;
};

const getSingle = fn => {
  let instance;
  return function(){
    if (!instance) {
        instance = fn.apply(null, arguments);
      }
      return instance;
  }
};
const login = getSingle(createDiv);
document.getElementsByClassName("js-login")[0].onclick = () => {
    login("login");
};
