function main(){
    //your code here
 putBeeperTurnMove();
 movePutBeeper();
 putTurnMoveTurnMove();
 movePutBeeper();
 putMoveturnMove();       
 putBeeperTurnMove();
 movePutBeeper();
 putTurnMoveTurnMove();
 movePutBeeper();
 putMoveturnMove();
 putBeeperTurnMove();
 movePutBeeper();
 putBeeper();
 }
 
 
 function movePutBeeper(){
       putBeeper();
    move();
    move();
 }
 function putBeeperTurnMove(){
    
       putBeeper();
          turnLeft();
         move();
           move();
 }
 function putMoveturnMove(){
       putBeeper();
      move();
       turnLeft();
         move();
 }
 function putTurnMoveTurnMove(){
       
    putBeeper();
    turnRight();
    move();
    turnRight();
    move();
 }
 