function addMore(){
    document.getElementById("error").value='';
    let name=document.getElementById("name").value;
    if(name==''){
        document.getElementById("error").innerHTML="please enter some text";
    }else{
        let ul=document.getElementById("box");

        let li = document.createElement("li");
        li.textContent=name;
        let a=document.createElement("a");
        a.textContent=("X");
        li.appendChild(a);
        ul.insertAdjacentElement('afterbegin',li);
        document.getElementById("name").value="";
    }
    }
    
    
let ul = document.querySelector('ul');
ul.addEventListener('click',function(e){
    let li = e.target.parentNode;
    ul.removeChild(li);
})
    
