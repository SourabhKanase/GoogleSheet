let header=document.getElementById("header");
let body=document.getElementById("body");
let span=document.getElementById("span1");
let alignButtons=document.getElementsByClassName("text-align");


for(let i=65;i<=90;i++)
{
    let char=String.fromCharCode(i);
    let bold=document.createElement("b");
    bold.innerText=char;
    header.appendChild(bold);
}

function creatingNumberOfRows(linenumber)
{
    let row=document.createElement("div");
    row.className="row";

    for(let i=64;i<=90;i++)
    {
        if(i==64)
        {
            let ele=document.createElement("b");
            ele.innerText=linenumber;
            row.appendChild(ele);
        }else{
            let div=document.createElement("div");
            div.id=`${String.fromCharCode(i)}${linenumber}`
            div.addEventListener("focus",showid);
            div.style.overflowY = "scroll";
            div.contentEditable=true;
            row.appendChild(div);
        }
    }
    body.appendChild(row);
}

for(let i=1;i<=100;i++)
{
    creatingNumberOfRows(i);
}


let activeCell=null;

let activeOptionsState ;

function showid(event){
   span.innerText=event.target.id;
   activeCell=event.target;

   const computedStyle = getComputedStyle(activeCell);

   activeOptionsState = {
     fontFamily: computedStyle.fontFamily,
     isBoldSelected: computedStyle.fontWeight === "600",
     isItalicSelected: computedStyle.fontStyle === "italic",
     isUnderLineSelected: computedStyle.textDecoration.includes("underline"),
     textAlign: computedStyle.textAlign,
     textColor: computedStyle.color,
     backgroundColor: computedStyle.backgroundColor,
     fontSize: computedStyle.fontSize,
   };
//    console.log(computedStyle.textAlign);
   adjustAlignmentOfAllitemsAccordingToObj();
   console.log(activeCell);
}
let bold=document.getElementById("bold");
let italic=document.getElementById("italic");
let underline=document.getElementById("underline");
function adjustAlignmentOfAllitemsAccordingToObj()
{   
    if(activeCell!=null)
    {   
        // console.log(activeOptionsState);
        if(activeOptionsState.isBoldSelected===true)
        {
            bold.classList.add("active-option");
        }else{
            bold.classList.remove("active-option");
        }


        if(activeOptionsState.isItalicSelected===true)
        {
            italic.classList.add("active-option");
        }else{
            italic.classList.remove("active-option");
        }

        if(activeOptionsState.isUnderLineSelected===true)
        {
            underline.classList.add("active-option");
        }else{
            underline.classList.remove("active-option");
        }

        highlighttextButton(activeOptionsState.textAlign);
    }
}

function onClickBold(boldButton) {
   
    boldButton.classList.toggle("active-option");
    if (activeCell !=null) {
      if (activeOptionsState.isBoldSelected === false) {
        activeCell.style.fontWeight = "600";
        activeOptionsState.isBoldSelected=true;
      } else {
        activeCell.style.fontWeight = "400";
        activeOptionsState.isBoldSelected=false;
      }
    } 
    // console.log(activeOptionsState);
}

function onClickItalic(italicButton)
{
    italicButton.classList.toggle("active-option");
    if(activeCell!=null)
    {
        if(activeOptionsState.isItalicSelected === true)
        {
            activeCell.style.fontStyle="normal";
            activeOptionsState.isItalicSelected=false;
        }else
        {  
            activeCell.style.fontStyle="italic";
            activeOptionsState.isItalicSelected=true;
        }
    }
}  

function onClickUnderline(underlineButton)
{
     underlineButton.classList.toggle("active-option");

     if(activeCell!=null)
     {
        if(activeOptionsState.isUnderLineSelected=== false)
        {
            activeCell.style.textDecoration="underline";
            activeOptionsState.isUnderLineSelected=true;
        }else{
            activeCell.style.textDecoration="none";
            activeOptionsState.isUnderLineSelected=false;
        }
     }
}
function highlighttextButton(value)
{
    
    for(let i=0;i<alignButtons.length;i++)
    {   
        if(alignButtons[i].getAttribute("data-value") === value)
        {
            alignButtons[i].classList.add("active-option");   
        }else
        {
            alignButtons[i].classList.remove("active-option");
        }
    }
    
}

function alignItem(buttonref)
{
    let alignValue=buttonref.getAttribute("data-value");
    
    if(activeCell!=null)
    {
        activeCell.style.textAlign=alignValue;
        activeOptionsState.textAlign=alignValue;
    }
    highlighttextButton(alignValue);
}

function textColorChange(thisref)
{    
    // console.log("function one");
      let selectedColorForText=thisref.value;
      if(activeCell!=null)
      {
        activeCell.style.color=selectedColorForText;
        activeOptionsState.textColor=selectedColorForText;
      }
}
function backgroundColorChange(thisre)
{   
    // console.log("function two");
      let selectedColor=thisre.value;
      if(activeCell!=null)
      {
        activeCell.style.backgroundColor=selectedColor;
        activeOptionsState.backgroundColor=selectedColor;
      }
}
function changeFontFamily()
{   
    let element =document.getElementById("myselect");
    let value=element.value;
    console.log("function triggered");
   if(activeCell!=null)
   {
    if(value=="option1")
    {
        activeCell.style.fontFamily="monospace";   
    }
    if(value=="option2")
    {
        activeCell.style.fontFamily="Arial, Helvetica, sans-serif";
    }
    if(value=="option3")
    {
        activeCell.style.fontFamily="Georgia, 'Times New Roman', Times, serif";
    }
   }
}
function changeFontSize()
{ 
    let element=document.getElementById("fontsize");
    let value=element.value;
    if(value=="option12")
    {
       activeCell.style.fontSize="14px";
    }
    if(value=="option14")
    {
        activeCell.style.fontSize="16px";
    }
    if(value=="option16")
    {
        activeCell.style.fontSize="18px";
    }
    if(value=="option18")
    {
        activeCell.style.fontSize="20px";
    }

}