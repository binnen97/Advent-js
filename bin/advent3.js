const fs = require('fs');
const input = fs.readFileSync("/workspaces/Advent-js/bin/data/advent3.txt").toString();
//const input = "{!how()'&where()don't()select()@]how()}mul(884,758);-mul(971,475)who()~from()]~mul(358,23)~; +$><+mul(459,784)%,}mul(36,125)}?who()${select()mul(26,486);*@why(34,219)+who()}>*mul(439,790)who()^^what()}]mul(721,171)mul(217,899+'mul(307,28), how(171,736),who(168,147)-;mul(372/'<"
let totalProduct = 0;

//split string into arrays on each occurrence of mul(
let array = input.split("mul(");


for (let i=1; i<array.length; i++){
	let variable = validateMul(array[i]);	
    if (variable>0){
			totalProduct += variable;
		}
	}
    console.log(totalProduct);


function validateMul(arg){
    //Checks for valid format> input will starton mul(
//This function checks for number - comma - end parenthesis
let split1 = arg.split("mul(");
//console.log("split1[0]: " + split1[0]);
//console.log("split1[1]: " + split1[1]);
let split2 = split1.toString().split(")");
//console.log("split2:      " + split2);
let goodnumbers = split2[0];
//console.log("Goodnumbers: " + goodnumbers);
let goodnumbersarray = goodnumbers.split(",");
//console.log(goodnumbersarray);
if(goodnumbersarray.length == 2){
    if(/^\d+$/.test((goodnumbersarray[0]))==true && /^\d+$/.test(goodnumbersarray[1])==true){
        //console.log(goodnumbersarray[0]+"och"+goodnumbersarray[1])
        return goodnumbersarray[0]*goodnumbersarray[1];
    }
    else{return 0;}
}
else {return 0;}
}

// function calculateMul(arg){
//     let arg1;
//     let arg2;



//     return (arg1 * arg2);
// }