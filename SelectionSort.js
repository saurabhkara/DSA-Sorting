console.log('Saurabh, you are a good coder');


let arr=[4,8,7,2,5,78,65];



function selectionSort(arr){
    let minValue=0;
    for(let i=0; i<arr.length; i++){
        minValue=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                minValue=j;
            }
        }
        let temp =arr[minValue];
        arr[minValue]=arr[i];
        arr[i]=temp
    }

}


selectionSort(arr);


console.log(arr);
