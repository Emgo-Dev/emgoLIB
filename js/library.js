////
////////        Data
////////////////////////////////////////////////
////

const Calendar = {
	Months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],

	Days: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

	Holidays: [
		[[10, 23], "Thanksgiving Day"],
		[[11, 25], "Christmas Eve"],
		[[11, 25], "Christmas Day"],
		[[11, 31], "New Years Eve"]
	],

	getMonth( index ){
		return this.Month[index]
	},

	getMonthOf( shortMonth ){
		for( var a = 0; a < this.Month.length; a++ ){
			var match = 1;
			if( shortMonth[0].toLowerCase() === this.Month[a][0] ){
				for( var b = 1; b < 3; b++ ){
					match+=1;
					if( shortMonth[b].toLowerCase() !== this.Month[a][b] ){ break; }
					else if( match === 3 ){ return this.Month[a]; }
				}
			}
		}
	}
}

function getMeridiemOf( hour ){
	if( hour > 11 ){
		return "PM";
	}else{
		return "AM";
	}	
}

Date.prototype.toMeridiem = function(){
	if( this.getHour() > 11 ){
		return "PM";
	}else{
		return "AM";
	}
}