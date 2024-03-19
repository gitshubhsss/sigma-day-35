//Write a js funtion that returns array elements larger than a number

let arrElements=[7,8,1,4,6,9,2,3];
let num=4;

let largeArr=(arrElements)=>{
    for(i=0;i<arrElements.length;i++){
        if(num<=arrElements[i]){
            console.log(arrElements[i]);
        }
    }
}
largeArr(arrElements);