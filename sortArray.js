let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// console.log(arr1.sort())

let max = 0
let min = 0
for(let i=0;i<arr1.length;i++){

    if(arr1[i]>max){
        max =arr1[i];
    }
    
}
min = max
for(let i=0 ;i< arr1.length;i++){
  
    if(arr1[i]<min){
        min =arr1[i];
        console.log(min)
    }
}
console.log(max,min)
for(let k =0; k< arr1.length ;k++){
    for(let h =0; h< arr1.length ;h++)
{
    if(min <arr1[k]){
        let temp =arr1[k]
        arr1[k]=min
    }
}
}

console.log(arr1)