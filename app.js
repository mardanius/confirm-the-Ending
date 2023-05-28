  
var userString = prompt("Input the string");
var userTarget = prompt("Input the target");

document.getElementById("userInputString").innerHTML = `The word is: ${userString}`;
document.getElementById("userInputTarget").innerHTML = `The target is: ${userTarget}`;

function confirmEnding(str, target) {
    var targetLength = target.length;
    var strLength = str.length;
  
    var sub = strLength - targetLength;
    var compar = str.substring(sub)
  
    if (target == compar){
      return console.log(true);
    } else {
      return console.log(false);
    }
    //return str;
  }

  function reload(){
    location.reload();
  }
