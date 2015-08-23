var JSIntro = require("../../src/Serialization");
exports.ParseNumber = function(str){

	var i=0,num=0,ptr=-1,negative=false;
	numbers={"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"0":0}
	if(str==null || str ==""){
		return null;
	}
	else{
		//Read till the end of the string
		while(str[i]!=null){
			if(str[i]<=9 && str[i]>=0){
				num=num*10+numbers[str[i]];
			}			
			else if(str[i]=="." && ptr==-1){
				ptr=i;
			}
			else if(str[0]=="-"){
				if(negative==false){
					negative=true;
				}
				else{
					return ""
				}
			}
			else{
				return "";
			}
			i++;
		}
		//To get the floating point number
		if(ptr!=-1){
			power=(i-ptr);
			w="1000000000";
			num=num/JSIntro.ParseNumber(w.slice(0,power))
		}
		//To get the negative number
		if(negative){
			return -1*num
		}
	}
	//If the given Input is Number then return the number itself
	return str;

}

exports.ConvertNumberToString = function(num){

	var str="";
	var flag=false;
	
	if(JSIntro.ParseNumber(str+num)){
	//	util.print(num)
	//Check if the number is negative
		if (num<0){
			num=-1*num;
			flag=true;
		}


			while(num>0){
				str=num%10+str;
				num=Math.floor(num/10);
			}
			if(flag){
				str="-"+str;
			}
			return str;
		}
		
	else{
		return "";
	}
}

exports.ParseDate = function(str){


	var months = {"January":31,"February":0,"March":31,"April":30,"May":31,"June":30,"July":31,"August":31,"September":30,"October":31,"November":30,"December":31};
	var monthNumberMap={"January":0,"February":1,"March":2,"April":3,"May":4,"June":5,"July":6,"August":7,"September":8,"October":9,"November":10,"December":11};
	var i=0,j=0,month,date,year;
	
	if(dateString==null){
		return null;
	}

	while(dateString[i]!=' '){
		i++;
	}
	month=dateString.slice(0,i);

	if(months[month]){
		j=i+1;
	
		while(dateString[j]!=' '){
			j++;
		}
		date=dateString.slice(i+1,j);
		
		i=j;
		while(dateString[j]!=null){
			j++;
		}
		year = dateString.slice(i+1,j);

	//	util.print(month,date,year);
		if(month == "February"){
			if(date<=29 && date>0){
				var d=Date(year,monthNumberMap[month],date);
				
				return d;
			}
			else{
				return null;
			}
		}
		else{
			if(date<=months[month] && date >0){
				var d=new Date(year,monthNumberMap[month],date);
				
				return d;
			}
			else{
				return null;
			}
		
		}

	}
	else{
		return null;
	}
}

exports.ConvertDateToString = function(dateValue){

return dateString.toString();
}

//Parse a string containing a comma seperated sequence of numbers
// and return an array containing the numbers. Return NaN for invalid
// numbers in the string.
exports.ParseStringOfNumbers = function(str){
}

exports.ConvertArrayOfNumbersToString = function(obj){


}


exports.ConvertStringToObject = function(str){

}

exports.ConvertObjectToString = function(obj){

}


