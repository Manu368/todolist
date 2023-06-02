let a = document.getElementById("task-container");
let m2 = document.getElementById("adding");


let tasks = [
    {
        title:"Learn HTML",
        uni: 1
    },
    {
        title:"Learn CSS",
        uni: 2
    },
    {
        title:"Learn Bootstrap",
        uni: 3
    },
    {
        title:"Learn React",
        uni: 4
    }
];


function manu001(checkboxId, labelId){

    let b01 = document.getElementById(checkboxId);
    let b02 = document.getElementById(labelId);

    b02.classList.toggle("checkeddone")

}
function manu002(buttonId){
    let b03 = document.getElementById(buttonId);
    a.removeChild(b03);
    
}


function manohar(tod){

    let checkboxId = "checkbox01" + tod.uni;
    let labelId = "label01" + tod.uni;
    let buttonId = "button001" + tod.uni;


    let a1 = document.createElement("li");
    a1.classList.add("d-flex", "flex-row");
    a1.id = buttonId;
    a.appendChild(a1);

    let a2 = document.createElement("input");
    a2.type = "checkbox";
    a2.id = checkboxId;
    a2.classList.add("input01")
    a1.appendChild(a2);
    a2.onclick = function(){
        manu001(checkboxId, labelId)
    }

    let a3 = document.createElement("div");
    a3.classList.add("blue-container", "d-flex", "flex-row");
    a1.appendChild(a3);

    let a4 = document.createElement("label");
    a4.setAttribute("for", checkboxId);
    a4.textContent = tod.title;
    a4.classList.add("label01");
    a4.id = labelId;
    a3.appendChild(a4);

    let a5 = document.createElement("div");
    a5.classList.add("delete-container");
    a3.appendChild(a5);

    let a6 = document.createElement("button");
    a6.classList.add("btn", "btn-danger", "button002");
    a6.textContent = "Delete Task";
    a5.appendChild(a6);


    a6.onclick = function(){
        manu002(buttonId)
    }

}


function AddingNew(){
    let count = tasks.length;
    count = count + 1;


    let m1 = document.getElementById("virat01");
    let m01 = m1.value;
    

    let news = {
        title: m01,
        uni : count
    }

    manohar(news);
    m1.value = " ";  
}


m2.onclick=function(){
    AddingNew()
}


for(let tod of tasks){
    manohar(tod)
}