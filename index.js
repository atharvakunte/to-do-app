
addTask = function(){
    var task = document.getElementById('task').value
    if(task===''){
      alert("Please enter a task to add.")
    }else{
      document.getElementById('taskList').innerHTML=`<li class="list-group-item">
    <div class="row">
      <div class="col-8">
        <p>${task}</p>
      </div>
      <div class="col-4">
        <button class="btn btn-danger rounded" onclick="deleteTask(this)">Delete</button>
      </div>
    </div>
  </li>`+document.getElementById('taskList').innerHTML
  document.getElementById('task').value =''
    }
}

deleteTask = function(btn){
    btn.parentElement.parentElement.parentElement.remove()
}