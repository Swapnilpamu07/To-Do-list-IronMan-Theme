let bt = document.getElementsByClassName("clear")[1];
console.log(bt)
bt.addEventListener("click",clear);
let list=document.getElementsByClassName("title")[0].firstElementChild;
let input = document.getElementById("input");
let button = document.getElementById("button");
let done=document.getElementById("done");
done.addEventListener('click',don);
// bt.className="clear";
list.className="list";
let p=[];
if(localStorage.getItem("users")!=null){
    p = JSON.parse(localStorage.getItem("users"));
    display()
}

button.onclick = () => {
  let text = input.value;
  input.value="";
  if (text == null || text === "") {
    alert("Enter something");
  } else {
    p.push(text);
    store(p);
    display();
  }
};

function display() {
  list.innerHTML = '';

  p.forEach((element, i) => {
    // delete button
    let bt2 = document.createElement('button');
    
    bt2.className = "bt5";

    // done button
    let bt3 = document.createElement('button');
    bt3.className = "bt3";
    
    let li = document.createElement('li');
    let pTag = document.createElement('p');
    pTag.innerHTML = `${element}`;

    li.appendChild(pTag);
    bt2.id = i;
    bt3.id = i;
    bt3.classList.add('uil')
    bt2.classList.add('uil')
    bt3.classList.add('uil-check-circle')
    bt2.classList.add('uil-trash-alt')
    li.appendChild(bt3);
    li.appendChild(bt2);
    list.appendChild(li);
    
    bt3.onclick = () => {
      li.classList.toggle("dash");
    };
    bt2.onclick = () => {
      p.splice(i, 1);
      store(p);
      display();
      console.log(element);
    };
  });
}


function store(p) {
  let text = JSON.stringify(p);
  localStorage.setItem("users", text);
}

// function del(e) {
//    console.log(e.target.bt2)
// }


 function clear(){
  localStorage.clear();
  p=[];
  list.innerHTML=""
 }
 function don(){
  list.classList.toggle("dash")
console.log("hii")
 }