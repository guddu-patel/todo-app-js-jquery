let todoname='';
  let todos=[];
  let id=0;
  let seletedItem=null;

  

  function addEditItem(){
    if(seletedItem)
      updateItem();
      else
      addItem();
  }
  function addItem(){
      todoname=$('#todoname').val();
    if(todoname){
    todos.push({name:todoname,id:id});
    todoname="";
    id++;
    $('#todoname').val('');
    updateList();
  }
  }
  function deleteItem(id){
    debugger;
    let cl=confirm("Are you sure want to detele")
    if(!cl) return;
    todos =  todos.filter(function(itm) {
      return itm.id != id;
    });
    updateList();
  }
  function edit(data){
    seletedItem=data;
    $('#todoname').val(data.name);
    $('#addBtn').hide();
    $('#updateBtn').show();
  }
  function updateItem(){
    debugger;
    // let that=
    todos =  todos.filter((itm) =>{
      if( itm.id == seletedItem.id)
        itm.name=$('#todoname').val();
        return true;
    });
    $('#todoname').val('')
    resetEdit();
    updateList();
  }
  function updateList(){
      let thtml='';
      todos.forEach(element => {
          
        thtml +=    `<div class="alert alert-success ">
            <div class="btn-group btn-group-sm float-right" style="margin-top: -4px;">
                <button type="button" class="btn btn-primary float-right" onclick='edit(${JSON.stringify(element)})'>Edit</button>
                <button type="button" class="btn btn-danger" onclick="deleteItem(${element.id})">Delete</button>
            </div>
            
            ${element.name}
        </div>`
        });
        $('#todoListContainer').html(thtml);
  }
  function  resetEdit(){
      seletedItem=null;
      $('#addBtn').show();
      $('#updateBtn').hide();
  }