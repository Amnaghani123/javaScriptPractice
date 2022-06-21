const matrixArray =[
[9,13,3,4],
[1,11,4,5],
[1,2,33,8],
[2,4,5,17]
]
let primaryDiagnolSum =0
let secondryDiagonalSum =0
//console.log(matrixArray)


for(let intI=0; intI < matrixArray.length;intI++){
   -- console.log(matrixArray[intI].length,'length')
    for(let intJ =0;intJ < matrixArray[intI].length;intJ++){
        if(intI ==intJ){
            primaryDiagnolSum+= matrixArray[intI][intJ]
        }
        // if((intI +intJ )== matrixArray.length -1){
        //     secondryDiagonalSum+= matrixArray[intI][intJ]
        // }

    }
}


 console.log(primaryDiagnolSum,secondryDiagonalSum);
