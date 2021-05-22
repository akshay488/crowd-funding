// nav menu function

function openPages(ele){
  var x = ele.id;
    let element = document.querySelector('.myNav');
switch (x) {
  case 'form':   document.getElementById("myForm").style.display = "block";

    break;
 case 'openMenu': element.classList.remove('close');
                  element.classList.add('open');

   break;

      }

    }

function closePages(ele){
  var x = ele.id;
  let element = document.querySelector('.myNav');
switch (x) {
case 'got_it':        document.getElementById('thanks').style.display = "none";

  break;

  case 'closeMenu':element.classList.remove('open');
                   element.classList.add('close');
    break;
    }
}
