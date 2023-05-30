  
/*var userString = prompt("Input the string");
var userTarget = prompt("Input the target");
*/

//caputuring the user input


/*
document.getElementById("userInputString").innerHTML = `The word is: ${userString}`;
document.getElementById("userInputTarget").innerHTML = `The target is: ${userTarget}`;
*/

function runConfirmEnding(){
  var userString = document.getElementById("userString").value;
  var userTarget = document.getElementById("userTarget").value;
  
  confirmEnding(userString, userTarget);
}

function confirmEnding(str, target) {
    var targetLength = target.length;
    var strLength = str.length;
  
    var sub = strLength - targetLength;
    var compar = str.substring(sub)
  
    if (target == compar){
      document.getElementById("result").innerHTML = `The result is: ${true}`;
    } else {
      document.getElementById("result").innerHTML = `The result is: ${false}`;
    }
    //return str;
  }

  function reload(){
    location.reload();
  }
