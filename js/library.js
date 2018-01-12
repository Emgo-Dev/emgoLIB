////
////////        Data
////////////////////////////////////////////////
////

Class Time {
	constructor(){
		
	}
}

Class Clock {
	constructor(){
		this.Miliseconds = 86400000,
		this.Seconds = 86400,
		this.Minutes = 1440,
		this.Hours = 24,
	}

	getNow(){ return new Date() },

	getMiliseconds(){ return this.Miliseconds; },

	getSeconds(){ return this.Miliseconds / 1000; },

	getMinutes(){ return this.getSeconds() / 60; },

	getHours(){ return this.getMinutes() / 60; }
}

const Calendar = {
	Months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],

	Days: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

	getToday(){ return new Date(`${getNow().getMonth()+1}/${getNow().getDay()}/${getFullYear()}`); },

	Holidays: [
		[[10, 23], "Thanksgiving Day"],
		[[11, 25], "Christmas Eve"],
		[[11, 25], "Christmas Day"],
		[[11, 31], "New Years Eve"]
	],

	getTomorrow( timestamp ){ return },

	getDays( index = ( new Date().getMonth() ) ){
		if( typeof index !== "number" ){
			throw new Error("Parameter given to getMonth() was not a number.");
		}else if( index < 0 ){ index = 0; }else if( index > 11 ){ index = 11; }

		return this.Days[index];
	},

	getDaysOf( string ){
		let monthIndex = 0;

		for( month of this.Months ){
			if( string.toLowerCase() === month.toLowerCase() ){ return this.Days[monthIndex]; }

			monthIndex++;
		}
	},

	getMonth( index = ( new Date().getMonth() ) ){
		if( typeof index !== "number" ){
			throw new Error("Parameter given to getMonth() was not a number.");
		}else if( index < 0 ){ index = 0; }else if( index > 11 ){ index = 11; }

		return this.Months[index];
	},

	getMonthShort( index = null ){
		return this.getMonth( index ).slice(0, 3);
	},

	getMonths(){
		return this.Months;
	},

	toFullMonth( string=this ){
		console.log(string);
		if( typeof string !== "string" ){
			throw new Error("Parameter given to toFullMonth() was not a string.");
		}else if( string.length !== 3 ){
			throw new Error("Parameter given to toFullMonth() was not a short month name.");
		}

		let monthIndex = 0;

		for( month of this.Months ){
			if( month.slice(0, 1).toLowerCase() === string.slice(0, 1).toLowerCase() ){
				let letterIndex = 0;
				let monthMatch = month.slice(0, 3);
				for( letter of monthMatch ){
					if( letter !== string.slice(letterIndex, letterIndex+1) ){ break; }
					letterIndex++;
				}

				return month;
			}

			monthIndex++;
		}
	},

	toShortMonth( string=this ){
		if( typeof string !== "string" ){
			throw new Error("Parameter given to toFullMonth() was not a string.");
		}
		
		return string.slice(0, 3);
	}
}