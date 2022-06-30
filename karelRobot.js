function main(){
    //your code here
 
   diagnolPosition();
 }
 
    
 function rightposition(){
       putBeeper();
       turnRight();
       move();
       turnLeft();
       move();
 }
 function leftPosition(){
       putBeeper();
       move();
       turnLeft();
       move();
    }
 function diagnolPosition(){
          leftPosition();
          rightposition();
          rightposition();
          rightposition();
          putBeeper();
          }