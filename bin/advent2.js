const fs = require('fs');
const fileContent = fs.readFileSync("/workspaces/Advent-js/bin/data/day2.txt").toString();
let array = [];
array = fileContent.split('\n');
let i = 0;
let max = array.length;
let safeCount = 0;
let unsafeCount = 0;
let newruleCount = 0;
let neunsafe;
while(i<max){
    let array2=array[i].split(' ');
    let unsafe=0;
    let increase=0;
    let decrease=0;
    for(let j=0; j<(array2.length - 1); j++){
        if((array2[j]-array2[j+1])<0){
            increase=1;
        }
        if((array2[j]-array2[j+1])>0){
            decrease=1;
        }
        if (Math.abs(array2[j]-array2[j+1])>3){
            unsafe=1;
        }
        if ((array2[j]-array2[j+1]) == 0){
            unsafe=1;
        }
        if(increase+decrease==2){
            unsafe=1;
        }
    }

//If an input in the array has one of the errors:
//1. there are both increasing and decreasing sequences
//2. there are repeat numbers
//3. there's an increase of more than 3
// unsafe count will be increased.
// Following section of code will try for 
// allowing one error in each try.
let exception = 0;
if (unsafe==1){
    //resets the check-values 
    increase = 0;
    decrease = 0;
    neunsafe = 0;
    //iterates a new check (removing a number each time)
    let provarray= ['9' '10' '11' '12' '13' '8'];
    for(let k=0; k<(array2.length - 1); k++){
        let array3=array2;
    //for(let k=0; k<(array2.length - 1); k++){
        //let array3=array2;
        array3.splice(k,1);

        //the loop that checks for rule breaks through the number order
    for(let l=0; l<(array3.length - 1); l++){
        if((array3[l]-array3[l+1])<0){
            increase=1;
        }
        if((array3[l]-array3[l+1])>0){
            decrease=1;
        }
        if (Math.abs(array3[l]-array3[l+1])>3){
            neunsafe=1;
        }
        if ((array3[l]-array3[l+1]) == 0){
            neunsafe=1;
        }
        if(increase+decrease==2){
            neunsafe=1;
        }
    }
    
        //should the loop find at least one variant
        //that doesn't break rules, it will be stored
        //and added to the global after all iterations
        //on that line are made
        if (neunsafe==0){
            exception=1;
        }
}
}
//makes sure the next section will send according to the
//extra exception above
if (exception == 1){
    newruleCount += 1;
}
console.log("value of exception> " + exception);
exception = 0;

//sends the outcome to the global counter
    if(unsafe==1){
    unsafeCount += 1 ;
    }
    else{
    safeCount += 1 ;
    }



    i++;
}
console.log(fileContent.length);
console.log(array.length);
console.log(array[0] + "last line: " + array[999]);
console.log("safecounts value: " + safeCount);
console.log("unsafecounts value: " + unsafeCount);
console.log("Newrulecounts value: "+ newruleCount);
console.log("Newrulecounts plus safecounts: "+ (newruleCount+safeCount));
