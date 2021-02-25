var count = 0;
var counter=document.getElementById("counter");

const increase = () => {
  count+=1;
  counter.innerText= count;
};

const decrease = () => {
  count-=1;
  counter.innerText= count;
};

const reset = () => {
  count=0; 
  counter.innerHTML="<mark>"+count+"</mark>";
};

const selectTheme = (theme) => {
  document.getElementsByTagName("body")[0].setAttribute("class",theme);
  document.getElementsByTagName("main")[0].setAttribute("class", theme);
  let buttons = document.getElementsByTagName("button");
  for (i=0; i<buttons.length; i++) {
    buttons[i].setAttribute("class",theme);
  }
}