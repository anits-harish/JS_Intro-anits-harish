// Given a date in string format, return the day it corresponds to.
exports.GetDay = function(dateString){
	//Months and days in the month
	var months = {"January":31,"February":0,"March":31,"April":30,"May":31,"June":30,"July":31,"August":31,"September":30,"October":31,"November":30,"December":31};
	var i=0,j=0,month;

	if(dateString==null || dateString==""){
		return;
	}
	//Read the month
	while(dateString[i]!=' '){
		i++;
	}
	month=dateString.slice(0,i);
	//If month exists
	if(months[month]){
		j=i+1;
	//Read the date
		while(dateString[j]!=','){
			j++;
		}
		date=dateString.slice(i+1,j);
	//Check for the extreme conditions
		if(month == "February"){
			if(date<=29 && date>0){
				return date;
			}
		}
		else{
			if(date<=months[month] && date >0){
				return date;
			}
		
		}

	}

}

