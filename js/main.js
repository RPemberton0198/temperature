/* JS GOES HERE */
function convert(temperature) {
     var x;
     if (convert == "C") {
       x = document.getElementById("c").value * 9 / 5 + 32;
       document.getElementById("f").value = (x);
     } 
     else {
       x = (document.getElementById("f").value -32) * 5 / 9;
       document.getElementById("c").value =(x);
     }
   }

/* Future work in progress */
  /* function convert(length) {
     var x;
     if (convert == "y") {
       x = document.getElementById("y").value ;
       document.getElementById("ft").value = Math.round(x);
     } else {
       x = (document.getElementById("ft").value ;
       document.getElementById("y").value = Math.round(x);
     }
   }
   
   function convert(volume) {
     var x;
     if (convert == "g") {
       x = document.getElementById("g").value ;
       document.getElementById("o").value = Math.round(x);
     } else {
       x = (document.getElementById("o").value ;
       document.getElementById("g").value = Math.round(x);
     }
   }function convert(weight) {
     var x;
     if (convert == "t") {
       x = document.getElementById("t").value ;
       document.getElementById(p").value = Math.round(x);
     } 
     else {
       x = (document.getElementById("p").value ;
       document.getElementById("t").value = Math.round(x);
     }
   }
}*/main.js