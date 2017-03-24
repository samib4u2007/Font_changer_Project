
var form=document.getElementById('form');
var input=document.getElementById('name');
var cont=document.getElementById('content');

var submit=document.getElementById('submit');
var para=document.createElement('p');
var fontchanger=document.getElementById('fc');
var oc=document.getElementById('options');



submit.addEventListener('click',lol);

  function lol() {
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
    font_changer();
        }}

function font_changer() {
  // INPUT lETA
  var inside=document.createElement('input');
  inside.setAttribute('type','text');
  inside.setAttribute('placeholder','Please give the input for Font chhange')
  inside.setAttribute('class','form-control');
  inside.style.width='30%';
  fontchanger.appendChild(inside);
  optionPlace();
}

function optionPlace() {


    var fonts=['sans-serif','Verdana'];

    var select=document.createElement('select');
    oc.appendChild(select);

   for (var i = 0; i < fonts.length; i++) {
   var option=document.createElement('option');
   option.setAttribute('class',"btn-group btn-group-justified");
   option.setAttribute('value',fonts[i]);
   option.textContent=fonts[i];
   select.appendChild(option);

    }
      select.addEventListener('click',result);

    }
