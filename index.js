
// bkmk function
function openPages(ele){
  var x = ele.id;
switch (x) {
  case 'submit': document.getElementById('thanks').style.display = "block";

    break;

  case 'form':   document.getElementById("myForm").style.display = "block";

    break;



}

}

function closePages(ele){
  var x = ele.id;
switch (x) {
  case 'got_it': document.getElementById('myMenu').style.display = "none";

    break;

  case 'close_btn':document.getElementById("myForm").style.display = "none";

    break;



}

}



 // let x = window.innerWidth ||
 //  document.documentElement.clientWidth ||
 //  document.body.clientWidth;
