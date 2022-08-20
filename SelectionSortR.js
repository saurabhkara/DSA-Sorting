console.log('You will make huge amount');

let arr=[1,8,7,5,2,-1,4,3,2,0]
function SelectionSort(){
    let min=0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }

        let temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp
    }
}

SelectionSort()

console.log(arr)