var size = 8;
var character = "";
 for (var grid = 0; grid < size; grid++)
 {
     for ( var line = 0; line < size; line++)
     {
      if ((grid + line) % 2 == 0){
          character += " ";
      }
      else{
          character += "#";
      }
    
     }
     character += "\n"; 
 }
 console.log(character);