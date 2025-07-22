
const Form = document.querySelector("#ToDo");
const TaskName= document.querySelector("#taskname");
const msg =document.querySelector(".ERROROFF")
const Current = document.querySelector("#PendingList");
const AllTask =document.querySelector("#AllList");
const CompletedTask =document.querySelector("#CompletedList");
if (localStorage.length == 0){
if (localStorage.getItem("AllStored")){
    AllTask=localStorage.getItem("AllStored")
}
if (localStorage.getItem("CompletedStorage")){
    CompletedTask=localStorage.getItem("CompletedStorage")
}
if (localStorage.getItem("CurrentStored")){
    Current=localStorage.getItem("CurrentStored")
}
}
Form.addEventListener('submit',onsubmit);

function onsubmit(e){
e.preventDefault();
if(TaskName.value==""){  
    
    msg.classList.add('ERRORON');
    msg.classList.remove('ERROROFF');
    msg.innerHTML="Please Enter a Task Name";

    setTimeout(()=>{
    msg.classList.remove('ERRORON');
    msg.classList.add('ERROROFF');
    msg.innerHTML="";}
     ,3000) 
    }
else {
msg.innerHTML="Task Added";
 const li = document.createElement('li');

 li.appendChild(document.createTextNode(`
    ${TaskName.value}`));
 li.addEventListener('click',onfinish);

localStorage.setItem("CurrentStored", Current);
 Current.appendChild(li);
  const lii = document.createElement('li');
 
 lii.appendChild(document.createTextNode(`
    ${TaskName.value}`));
 AllTask.appendChild(lii);
 localStorage.setItem("AllStored", AllTask);
}

const TaskItemsCurrent = Current.querySelectorAll("#li")

function onfinish(e){
    const removed = Current.removeChild(this)
    removed.classList.add("DONE")
    CompletedTask.appendChild(removed)
    removed.removeEventListener(onfinish);
    localStorage.setItem("CurrentStored", Current);
    localStorage.setItem("CompletedStorage",CompletedTask);
}
}