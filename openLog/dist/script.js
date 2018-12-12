document.addEventListener("DOMContentLoaded", function(event) {

    let body = document.body;
    let fragment = document.createDocumentFragment();
    let container = document.createElement("div");
    let dragDropBlock = document.createElement("div");
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
  
    container.style.position = "fixed";
    container.style.top = "20px";
    container.style.right = "1%";
    container.style.border = "5px solid grey";
    container.style.width ="270px";
    container.style.background = "rgb(185,195,195, 0.9)";

    
    dragDropBlock.style.width = "100%";
    dragDropBlock.style.height = "230px";
    dragDropBlock.style.paddingTop = "10px";
    dragDropBlock.style.background = "#f8f9f9";

    let contentBlock = document.createElement("div");

    del.innerHTML = "🞫";
    del.width = "10px";
    del.height = "10px";
    del.fontSize = "16px";
    del.style.position = "absolute";
    del.style.top = "0";
    del.style.right = "4px";
    del.style.cursor = "pointer";

    let h3 = document.createElement("h3");

    h3.innerHTML = "Search node element";
    h3.style.color = "#24222e";   
    h3.style.textAlign = "center";    

    input.style.padding = "5px 10px";
    input.style.border = "1px solid grey";
    input.style.width ="80%";   
    input.style.background = "white"; 
    input.style.position = "absolute"; 
    input.style.top = "60px"; 
    input.style.left = "30px"; 
    
    search.innerHTML = "search";
    search.style.padding = "4px";
    search.style.width ="80%";   
    search.style.cursor = "pointer"; 
    search.style.position = "absolute"; 
    search.style.top = "100px"; 
    search.style.left = "30px"; 

    next.innerHTML = "next";
    next.style.padding = "4px";
    next.style.width = "38.3%";
    next.style.cursor = "pointer"; 
    next.style.position = "absolute"; 
    next.style.top = "135px"; 
    next.style.left = "28px"; 
    next.disabled = true;
 
    previous.innerHTML = "previous";
    previous.style.padding = "4px";
    previous.style.width = "38.3%";
    previous.style.cursor = "pointer"; 
    previous.style.position = "absolute"; 
    previous.style.top = "135px"; 
    previous.style.left = "138px"; 
    previous.disabled = true;
 
    parent.innerHTML = "parent";
    parent.style.padding = "4px";
    parent.style.width = "38.3%";
    parent.style.cursor = "pointer"; 
    parent.style.position = "absolute"; 
    parent.style.top = "170px"; 
    parent.style.left = "138px"; 
    parent.disabled = true;
   
    child.innerHTML = "children";
    child.style.padding = "4px";
    child.style.width = "38.3%";
    child.style.cursor = "pointer"; 
    child.style.position = "absolute"; 
    child.style.top = "170px"; 
    child.style.left = "28px"; 
    child.disabled = true;
    
    container.appendChild(del);
    container.appendChild(dragDropBlock);
    container.appendChild(contentBlock);
    
    dragDropBlock.appendChild(h3);
    
    contentBlock.appendChild(input);
    contentBlock.appendChild(search);
    contentBlock.appendChild(next);
    contentBlock.appendChild(previous);
    contentBlock.appendChild(parent);
    contentBlock.appendChild(child);
    fragment.appendChild(container);
    body.appendChild(fragment);
   
}

function deleteModal (){
    del.addEventListener("click", function (event) {
        event.preventDefault(); 
        body.removeChild(container);

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

    dragDropBlock.onmousedown = function(e) {

    let coords = getCoords(container);
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;
    
    container.style.position = 'absolute';
    moveAt(e);

    body.appendChild(container);


    function moveAt(e) {
        container.style.left = e.pageX - shiftX + 'px';
        container.style.top = e.pageY - shiftY + 'px';
      }

    document.onmousemove = function(e) {
        moveAt(e);
    }

    container.onmouseup = function() {
        document.onmousemove = null;
        container.onmouseup = null;
      }


      container.ondragstart = function() {
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
