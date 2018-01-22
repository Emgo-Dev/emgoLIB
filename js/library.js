class Clock {
	
	constructor(){ // Constructs parameters for units of time per day
		this.milisecondsPerDay = 86400000;
		this.secondsPerDay = 86400;
		this.minutesPerDay = 1440;
		this.hoursPerDay = 24;
	}

	/**
	 * Returns Date of current timestamp
	 *
	 * @return  {object}  Date from current timestamp.
	 */
	getNow(){ return new Date() }

	/**
	 * Returns Date of current date at 00:00:00 timestamp
	 *
	 * @return  {object}  Date from current timestamp.
	 */
	getToday(){ return new Date(this.getNow().toISOString().match(/^\w{4}-\w{2}-\w{2}/)[0].concat(" 00:00:00Z")) }

	getMiliseconds(){ return this.milisecondsPerDay; }

	getSeconds(){ return this.getMiliseconds() / 1000; }

	getMinutes(){ return this.getSeconds() / 60; }

	getHours(){ return this.getMinutes() / 60; }
}

class Calendar {

	constructor(){
		this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		this.days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		this.holidays = [
			[[10, 23], "Thanksgiving Day"],
			[[11, 25], "Christmas Eve"],
			[[11, 25], "Christmas Day"],
			[[11, 31], "New Years Eve"]
		];
	}

	/**
	 * Get day length of month from index
	 *
	 * @param   {number}  index   The index
	 * @return  {<type>}          The days.
	 */
	getDays( monthIndex ){
		if( typeof monthIndex !== "number" ){
			throw new Error("Calendar.getDays: Parameter was not a number.");
		}else if( monthIndex < 0 ){ monthIndex = 0; }else if( monthIndex > 11 ){ monthIndex = 11; }

		return this.days[monthIndex];
	}

	/**
	 * Get day length of month from string name
	 *
	 * @param   {string}  monthName  The month name
	 * @return  {integer}            Days in monthName
	 */
	getDaysOf( monthName ){
		if( typeof monthName !== "string" ){
			throw new Error("Calendar.getDaysOf: Parameter was not a string.");
		}

		let monthIndex = 0;

		for( let month of this.months ){
			if( monthName.toLowerCase() === month.toLowerCase() ){ return this.days[monthIndex]; }

			monthIndex++;
		}
	}

	/**
	 * Determines if monthName is found in this.month
	 *
	 * @param   {string}   monthName  Valid month
	 * @return  {boolean}             True if month, False otherwise.
	 */
	isMonth( monthName ){
		for( let month of this.months ){
			if( month.toLowerCase() === monthName.toLowerCase() ){
				return true;
			}
		}

		return false;
	}

	getMonth( monthIndex ){
		if( typeof monthIndex !== "number" ){
			throw new Error("Calendar.getMonth: Parameter was not a number.");
		}else if( monthIndex < 0 ){ monthIndex = 0; }else if( monthIndex > 11 ){ monthIndex = 11; }

		return this.months[monthIndex];
	}

	getMonthShort( monthIndex = null ){
		return this.getMonth( monthIndex ).slice(0, 3);
	}

	getMonths(){
		return this.months;
	}

	toFullMonth( shortMonth ){
		if( typeof shortMonth !== "string" ){
			throw new Error("Calendar.toFullMonth: Parameter given was not a string.");
		}else if( shortMonth.length !== 3 ){
			throw new Error("Calendar.toFullMonth: Parameter given was not a short month name.");
		}

		let monthIndex = 0;

		for( let month of this.months ){
			if( month.slice(0, 3).toLowerCase() === shortMonth.slice(0, 3).toLowerCase()){
				return month;
			}

			if( month.slice(0, 1).toLowerCase() === shortMonth.slice(0, 1).toLowerCase() ){
				let letterIndex = 0;
				let monthMatch = month.slice(0, 3);

				for( letter of monthMatch ){
					if( letter !== shortMonth.slice(letterIndex, letterIndex+1) ){ break; }
					letterIndex++;
				}

				return month;
			}

			monthIndex++;
		}
	}

	toShortMonth( monthName ){
		if( typeof monthName !== "string" ){
			throw new Error("Calendar.toShortMonth: Parameter was not a string.");
		}else if( !this.isMonth(monthName) ){
			throw new Error("Calendar.toShortMonth: Parameter was not a month.");
		}
		
		return monthName.slice(0, 3);
	}
}