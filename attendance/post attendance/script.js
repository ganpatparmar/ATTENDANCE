// var checkboxes = document.querySelectorAll("input[type = 'checkbox']");
// function checkAll(myCheckbox){
//     if(myCheckbox.checked == true){
//         checkboxes.forEach(function(checkbox){
//             checkbox.checked = true;
//         });
//     }
//     else{
//         checkboxes.forEach(function(checkbox){
//             checkbox.checked = false;
//         });
//     }
// }


function selectAll(){
    var items=document.getElementsByName('abc');
    for(var i=0; i<items.length; i++){
        if(items[i].type=='checkbox')
            items[i].checked=true;
    }
}

function UnSelectAll(){
    var items=document.getElementsByName('abc');
    for(var i=0; i<items.length; i++){
        if(items[i].type=='checkbox')
            items[i].checked=false;
    }
}	