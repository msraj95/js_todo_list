var a=10;
func add(){
  var a=20;
  let b=30;
  return a+b;
}
add();
const a;
a=2;
console.log(a);
//
function addNode() 
     {var newP = document.createElement("p"); 
	  var textNode = document.createTextNode(" This is a new text node"); 
	  newP.appendChild(textNode);
      document.getElementById("firstP").appendChild(newP); } 
//adding dynamic div using js
var participantsField = document.getElementById("Participentfieldwrap"),
        form = document.getElementsByTagName("form")[0],
        ContestantNum = 4,
        i;
    for(i=0; i<ContestantNum; i++){
      var clone = participantsField.cloneNode(true);
      form.appendChild(clone);
    }
