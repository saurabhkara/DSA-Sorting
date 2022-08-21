console.log("you are best Saurabh, trust yourself");

let arr1 = [8,7, 6, 0, 2, 1, 5];

function InsertionSort(arr) {
  let j, temp;
  for (let i = 1; i< arr.length; i++) {
    j=i-1;
    temp=arr[i]
    while(j>=0  && arr[j]>temp){
        arr[j+1]=arr[j]
        j--;
    }
    arr[j+1]=temp;
  }
}

InsertionSort(arr1);

console.log(arr1);
