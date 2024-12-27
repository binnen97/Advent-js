const input = "MMMSXXMASM\nMSAMXMSMSA\nAMXSXMAAMM\nMSAMASMSMX\nXMASAMXAMM\nXXAMMXXAMA\nSMSMSASXSS\nSAXAMASAAA\nMAMMMXMMMM\nMXMXAXMASX";
let totalProduct = 0;
const regex = /XMAS|SAMX/ig;
let horizArray = input.split('\n');

totalProduct += makeHorizontalXmas(horizArray);
totalProduct += makeVerticalXmas(horizArray);


function makeHorizontalXmas(arg){
let matches = new Array();
let count = 0;
	for(let i=0; i<arg.length; i++)
	{
		//search for XMAS with regex /XMAS|SAMX/ig 
      if(arg[i].match(regex)!=null){
        matches.push(arg[i].match(regex));
      }
      console.log(matches);
	}
	count += matches.length;
	//console.log(count);
	return count;
}
function makeVerticalXmas(arg){
let count = 0;
let verticalArray = []
for(let i = 0; i<arg.length; i++){
    verticalArray[i] = '';
}
let verticalString= "";
	for(let x=0; x<arg.length; x++){
	//steps through the 'x positions' :
		for (let y=0; y<arg.length; y++){
            //console.log(arg[y]);
		//iterates all array elements and adds their x'th value to a string (separating y to next by newline):
		verticalArray[y] += arg[x].slice(y,y+1);
        }
	}
return makeHorizontalXmas(verticalArray);
}



function makeDiagonalXmas(arg){

}

console.log("end result: "+ totalProduct);