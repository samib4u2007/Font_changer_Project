var form=document.getElementById('form');
var input=document.getElementById('name');
var cont=document.getElementById('content');
var submit=document.getElementById('submit');
var para=document.createElement('p');
var font_Changer=document.getElementById('font_Changer');
var select=document.getElementById('select');
var inside=document.getElementById('inside');
var paragraph=document.createElement('p');

submit.addEventListener('click',enter);

  function enter() {
    if (input.value==='') {
    para.setAttribute('class','alert alert-warning');
    para.textContent='Alert! Please Write Your Name';
    form.appendChild(para);
    }

    else {

    cont.textContent='Welcome ' +input.value+'  To The Font_Styler';
    para.setAttribute('class','');
    para.textContent='';
    form.setAttribute('class','hidden');
    font_Changer.setAttribute('class','');
      }
    }

optionPlace();

function optionPlace() {
   var fonts=['sans-serif','Verdana',"serif","cursive", "fantasy", "monospace", "times", "courier", "arial"];

   for (var i = 0; i < fonts.length; i++) {
   var option=document.createElement('option');
   option.setAttribute('class',"btn-group btn-group-justified");
   option.setAttribute('value',fonts[i]);
   option.textContent=fonts[i];
   select.appendChild(option);

    }


    select.addEventListener('change',result);


    }

    function result() {

        var choice=select.value;
        paragraph.setAttribute('align','center');
        paragraph.textContent=inside.value;
        paragraph.style.fontFamily=choice;
        paragraph.style.fontSize='64px';
        font_Changer.appendChild(paragraph);


    }
