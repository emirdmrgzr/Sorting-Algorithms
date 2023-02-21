const myArray = [19,3,14,2,6,28,9];

function selection(array){
  for(let i = 0;i<array.length;i++){
    let min = i;
    
    for(let j = i+1;j<array.length;j++){
      if(array[j] < array[min]){
         min = j;
      }
    }
    [array[i], array[min]] = [array[min],array[i]];
  }
  console.log(array);
}

selection(myArray);