const InputSpace = document.getElementById("Input-Space");
const listContainer = document.getElementById("list-Container");

function addTask(){
     if(InputSpace.value === ''){
        alert("Input needed!!");
     }
     else{
        let li = document.createElement("li");
        li.innerHTML= InputSpace.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\&#8722";
        li.appendChild(span);
     }

     InputSpace.value = "";
     saveData();
}

listContainer.addEventListener("click", function(e){
if(e.target.tagName === "LI"){
   e.target.classList.toggle("checked");
   saveData();
}
else if(e.target.tagName === "SPAN"){
   e.target.parentElement.remove();
  saveData();
}

},false);

function saveData(){
   localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
   listContainer.innerHTML = localStorage.getItem("data");
}
showTask();