const fs = require('fs');
const fileContent = fs.readFileSync("/workspaces/Advent-js/bin/data/day2.txt").toString();
let array = fileContent.split('\n');
let i = 0;
let max = array.length;
let safeCount = 0;
let unsafeCount = 0;
let xtraRuleCount = 0;

//CheckRules will return true if at least 1 rule was broken

while(i<max){
//    console.log(array[i]);


if(CheckException(array[i]) == 1){
    xtraRuleCount++;
}
if (CheckRules(array[i].split(' '))){
    unsafeCount++;
}
else{
    safeCount++;
}
i++;
}

console.log("safeCount: " + safeCount);
console.log("unsafeCount: " + unsafeCount);
console.log("xtraRuleCount: " + xtraRuleCount);

    


//makes sure the next section will send according to the
//extra exception above

//sends the outcome to the global counter

//Ny cool kod 
function CheckRules(inputvar){
    let array2 = inputvar;
    //array2 = inputvar.toString().split(' ');
    //console.log(array2);
    let flagRuleBreak=0;
    let flagUpward=0;
    let flagDownward=0;
    //checks numbers 1-2 then 2-3 etc. for rule breaks and flags
    for(let j=0; j<(array2.length - 1); j++){
        if((array2[j]-array2[j+1])<0){
            flagUpward=1;
        }
        if((array2[j]-array2[j+1])>0){
            flagDownward=1;
        }
        if (Math.abs(array2[j]-array2[j+1])>3){
            flagRuleBreak=1;
            //öka eller minska med mer än 3
        }
        if ((array2[j]-array2[j+1]) == 0){
            flagRuleBreak=1;
            //en siffra upprepas
        }
        //both upward and downward flags means a rule was broken.
        if(flagUpward+flagDownward==2){
            flagRuleBreak=1;
        }
    }

    //Returns 1 for rulebreaks
    return flagRuleBreak;
}
function CheckException(inputvar1){
console.log(inputvar1);
    //Ska returnera 1 om det finns en giltig variant,
    // utifrån extrareglerna i advent 2B.
let array1 = inputvar1.toString().split(' ');
 console.log(array1);
let greenFlag = 0;
let iterateArray;
for (let i = 0; i < array1.length; i++){

    console.log("presplice  " + array1);
    iterateArray = array1.toSpliced(i,1);
    
    console.log("postsplice " + iterateArray);
    if(CheckRules(iterateArray) == 0){
        greenFlag = 1;
    }
}
return greenFlag;
}