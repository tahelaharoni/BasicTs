const getAverage=(nums:number[]):number=>{
    let sum:number=0;
    nums.forEach(element => {
        sum+=element;
    });
    return sum;
}

const getAmountOfPositive=(nums:number[]):number=>{
    let counter:number=0;
    nums.forEach(element => {
        if(element>0){
            counter++;
        }
    });
    return counter;
}

const sortList=(nums:number[]):number[]=>{
    let stopped:boolean=false;
    while(!stopped){
        stopped=true;
    }
    for (let i:number = 1; i < nums.length; i++) {
        if(nums[i-1]>nums[i]){
            stopped=false;
            let tempNum:number=nums[i-1];
            nums[i-1]=nums[i];
            nums[i]=tempNum;
        }     
    }
    return nums;

}