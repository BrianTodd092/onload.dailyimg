var time = new Date();
var d = time.getDay();
var greeting;




 if (d == 5)   {
     greeting = document.getElementById('a').style.display = 'block';}   // friday   


else if ( d == 6)  {
      greeting = document.getElementById('b').style.display = 'block';}   // saturday   

 

else if ( d == 0)  {
      greeting = document.getElementById('c').style.display = 'block';}   // sunday
    

else if ( d == 1)  {
      greeting = document.getElementById('d').style.display = 'block';}   //monday      



else if ( d == 2)  {
      greeting = document.getElementById('e').style.display = 'block';}   //tuesday
     

else if ( d == 3)  {
      greeting = document.getElementById('f').style.display = 'block';}   // wednesday      


 
 else if ( d == 4) {
        greeting = document.getElementById('g').style.display = 'block';}  // thursday


else {
       greeting = "" ;
}



document.image = greeting;