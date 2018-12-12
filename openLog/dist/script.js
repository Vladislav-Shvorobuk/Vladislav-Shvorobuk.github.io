document.addEventListener("DOMContentLoaded", function(event) {

    let body = document.body;
    let fragment = document.createDocumentFragment();
    let div = document.createElement("div");
    let topBlock = document.createElement("div");
    let del = document.createElement("div");

    let search = document.createElement("button");
    let next = document.createElement("button");
    let previous = document.createElement("button");
    let parent = document.createElement("button");
    let child = document.createElement("button");
    let input = document.createElement("input");
    let elem;


function main () {

    renderBlock ();
    searchNodeEl();
    searchNextNodeEl();
    searchPrevNodeEl();
    searchParentNodeEl();
    searchChildNodeEl();
    dragAndDrop();
    deleteModal();
    
}

main();



function renderBlock() {
  
    div.style.position = "fixed";
    div.style.paddingBottom = "10px";
    div.style.top = "20px";
    div.style.right = "1%";
    div.style.border = "5px solid grey";
    div.style.width ="270px";
    div.style.background = "rgb(185,195,195, 0.9)";
    div.style.zIndex = "20";


    topBlock.style.width = "100%";
    topBlock.style.height = "50px";
    topBlock.style.paddingTop = "10px";
    topBlock.style.background = "#f8f9f9";
    topBlock.style.borderBottom = "5px solid grey";
    topBlock.style.marginBottom = "10px";

    div.appendChild(topBlock);

    del.innerHTML = "🞫";
    del.width = "10px";
    del.height = "10px";
    del.border = "1px solid black";
    del.fontSize = "16px";
    del.style.position = "absolute";
    del.style.top = "0";
    del.style.right = "4px";
    del.style.cursor = "pointer";

    div.appendChild(del);

    


    let h3 = document.createElement("h3");
    h3.innerHTML = "Search node element";
    h3.style.color = "#24222e";   
    h3.style.textAlign = "center";   
    h3.style.marginBottom = "10px";   

    topBlock.appendChild(h3);

    input.style.padding = "5px 10px";
    input.style.border = "1px solid grey";
    input.style.width ="80%";   
    input.style.display ="block";   
    input.style.margin = "0 auto 5px"    

    div.appendChild(input);

    let buttons = document.createElement("div");
    buttons.style.width ="100%";    

    search.innerHTML = "search";
    search.style.padding = "4px";
    search.style.display = "block";
    search.style.width ="80%";  
    search.style.margin ="0 auto 5px";  
    search.style.cursor = "pointer"; 

    next.innerHTML = "next";
    next.style.padding = "4px";
    next.style.margin = "0 9px 5px 10%";
    next.style.width = "38.3%";
    next.style.cursor = "pointer"; 
    next.disabled = true;

    previous.innerHTML = "previous";
    previous.style.padding = "4px";
    previous.style.marginBottom ="5px";
    previous.style.width = "38.3%";
    previous.style.cursor = "pointer"; 
    previous.disabled = true;

    parent.innerHTML = "parent";
    parent.style.padding = "4px";
    parent.style.margin = "0 9px 5px 10%";
    parent.style.width = "38.3%";
    parent.style.cursor = "pointer"; 
    parent.disabled = true;

    child.innerHTML = "children";
    child.style.padding = "4px";
    child.style.width = "38.3%";
    child.style.cursor = "pointer"; 
    child.disabled = true;

    div.appendChild(search);
    div.appendChild(buttons);

    buttons.appendChild(next);
    buttons.appendChild(previous);
    buttons.appendChild(parent);
    buttons.appendChild(child);
  
    fragment.appendChild(div);
    body.appendChild(fragment);
   
}

function deleteModal (){
    del.addEventListener("click", function (event) {
        event.preventDefault(); 
        body.removeChild(div);
        
        let elWithClass = document.querySelector(".redBorder");
        elWithClass.removeAttribute("style");
        elWithClass.classList.remove('redBorder');
    })
}


function searchNodeEl () {
    
    search.addEventListener("click", function (event) {
        event.preventDefault();

        let text = input.value;
        input.value = "";
        
        if (document.querySelector(".redBorder")){
            let elWithClass = document.querySelector(".redBorder");
            elWithClass.removeAttribute("style");
            elWithClass.classList.remove('redBorder');
        }
        if (text) {
            elem = document.querySelector(text);
            checkDisable(elem);
            elem.classList.add("redBorder");
            document.querySelector(".redBorder").style.border = "4px solid red";
        }
    });
    
}


function searchNextNodeEl () {
    
    next.addEventListener("click", function () {
        event.preventDefault();

        if(document.querySelector(".redBorder") && elem.nextElementSibling) {

                let elWithClass = document.querySelector(".redBorder");
                elWithClass.removeAttribute("style");
                elWithClass.classList.remove('redBorder');
        }
        if (elem && elem.nextElementSibling){      

            elem = elem.nextElementSibling;
            elem.classList.add("redBorder");
            document.querySelector(".redBorder").style.border = "4px solid red";
        }
        checkDisable(elem);
    });
    
}

function searchPrevNodeEl () {
    
    previous.addEventListener("click", function () {
        event.preventDefault();

        if(document.querySelector(".redBorder") && elem.previousElementSibling) {

                let elWithClass = document.querySelector(".redBorder");
                elWithClass.removeAttribute("style");
                elWithClass.classList.remove('redBorder');  
        }
        if (elem && elem.previousElementSibling){

            elem = elem.previousElementSibling;
            elem.classList.add("redBorder");
            document.querySelector(".redBorder").style.border = "4px solid red";
        }
        checkDisable(elem);        
    });
    
}

function searchParentNodeEl () {
    
    parent.addEventListener("click", function () {
        event.preventDefault();

        if(document.querySelector(".redBorder") && elem.parentElement) {
                let elWithClass = document.querySelector(".redBorder");
                elWithClass.removeAttribute("style");
                elWithClass.classList.remove('redBorder');
        }
        if (elem && elem.parentElement ){
       
                 elem = elem.parentElement ;
                 elem.classList.add("redBorder");
                 document.querySelector(".redBorder").style.border = "4px solid red";
        }
        checkDisable(elem);
    });
}

function searchChildNodeEl () {
    
    child.addEventListener("click", function () {
        event.preventDefault();

        if(document.querySelector(".redBorder") && elem.children) {

                let elWithClass = document.querySelector(".redBorder");
                elWithClass.removeAttribute("style");
                elWithClass.classList.remove('redBorder');

        }
        if (elem && elem.children[0]){

                elem = elem.children[0];
                elem.classList.add("redBorder");
                document.querySelector(".redBorder").style.border = "4px solid red";
        }
        checkDisable(elem);
    });
    
}

function checkDisable (elem) {

    if (elem.nextElementSibling) {
        next.disabled = false;
    } else {
        next.disabled = true;
    }
    if (elem.previousElementSibling) {
        previous.disabled = false;
    } else {
        previous.disabled = true;
    }
    if (elem.parentElement){
        parent.disabled = false;
    }  else {
        parent.disabled = true;
    }
    if (elem.children[0]) {
        child.disabled = false;
    }  else {
        child.disabled = true;
    }
}



function dragAndDrop () {

    topBlock.onmousedown = function(e) {

    let coords = getCoords(div);
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;
    
    div.style.position = 'absolute';
    moveAt(e);

    body.appendChild(div);


    function moveAt(e) {
        div.style.left = e.pageX - shiftX + 'px';
        div.style.top = e.pageY - shiftY + 'px';
      }

    document.onmousemove = function(e) {
        moveAt(e);
    }

    div.onmouseup = function() {
        document.onmousemove = null;
        div.onmouseup = null;
      }


      div.ondragstart = function() {
    return false;
  };

  function getCoords(elem) { 
    let box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }
}


}




});
