

function openPages(ele){
  var x = ele.id;
switch (x) {
  case 'form':   document.getElementById("myForm").style.display = "block";

    break;

    case 'openMenu': document.getElementById('myNav').style.display = "block";

      break;
      }

    }

function closePages(ele){
  var x = ele.id;
switch (x) {
case 'got_it':
              document.getElementById('thanks').style.display = "none";

  break;
case 'closeMenu':  document.getElementById('myNav').style.display = "none";
                  
  break;

    }
}
