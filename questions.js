// [8,4,6,2,3] => output => [4,2,4,2,3] --> birbbirinden çıkararak ilerleme

const solution= (arr)=>{
    return arr.map((_,i)=>{
        for(let j=i+1;j<arr.length;j++)
        if(arr[i]>arr[j]){
            arr[i]=arr[i]-arr[j];
            break
        }
        return arr[i];
    })
}