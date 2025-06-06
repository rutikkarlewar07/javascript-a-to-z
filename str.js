 
function String_Reverse(str){
  
    let splitstr=str.split(""); // use spit for split string in to array  
    // ['k', 'i', 't', 'u', 'r', ........//

    let reversestr=splitstr.reverse(); // here use resverse method to reverse the new created array
    //[ 'k', 'i', 't', 'u', 'r', ' ', 's', 'i', ' ', 'e', 'm', 'a', 'n', ' ', 'y',.............................

    let joinstr = reversestr.join("");  // join method use to join a all element of array in to string 

    console.log(joinstr);
   
}
String_Reverse("hello my name is rutik")



