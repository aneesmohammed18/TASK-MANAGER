function addtask() {
 const inputtask=document.getElementById("inputtask");
 var task = inputtask.value;
if (task==="") {
    alert("Please enter the task"); 
} else {
   const tasklist=document.getElementById("tasklist");
   const actualtask=document.createElement("li");
   const checkbox=document.createElement("input");
   checkbox.type= "checkbox";
   actualtask.textContent=task;
   tasklist.appendChild(actualtask); 
   actualtask.appendChild(checkbox);
    
   checkbox.addEventListener("click",function(){
    if (checkbox.checked){
        actualtask.style.textDecoration="line-through";
       } else {
        actualtask.style.textDecoration="none";
       }
       savedata();
   })
   const cross=document.createElement("i");
   cross.classList.add("fa-solid" , "fa-xmark");
   actualtask.appendChild(cross);
   cross.addEventListener("click",function(){
   actualtask.remove();
   cross.remove();
   savedata();
   });
   inputtask.value ="";
   savedata();

}
}

function savedata(){
    localStorage.setItem("data" , tasklist.innerHTML);
}
function showtasks(){
    const tasklist = document.getElementById("tasklist");
    tasklist.innerHTML = localStorage.getItem("data") || ''; 
    
    const tasks = tasklist.getElementsByTagName("li");
    for (let task of tasks) {
        const checkbox = task.querySelector("input[type='checkbox']");
        const cross = task.querySelector(".fa-xmark");

        if (checkbox) {
            checkbox.addEventListener("click", function() {
                if (checkbox.checked) {
                    task.style.textDecoration = "line-through";
                } else {
                    task.style.textDecoration = "none";
                }
                savedata();
            });
        }

        
        if (cross) {
            cross.addEventListener("click", function() {
                task.remove();
                savedata();
            });
        }
    }
}
showtasks();
