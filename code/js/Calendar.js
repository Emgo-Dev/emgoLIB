class Calendar {
	// https://www.timeanddate.com/

	constructor(){
		// https://www.timeanddate.com/calendar/jewish-calendar.html
		this.jewishMonths = ["Nisan", "Iyar", "Sivan", "Tammuz", "Av", "Alul", "Tishrei", "Marcheshvan", "Kislev", "Tevet", "Shevat", "Adar"]
		this.jewishMonths = ["30", "29", "30", "29", "30", "29", "30", "29", "30", "29", "30", "30"]
		// https://www.timeanddate.com/calendar/roman-calendar.html
		this.romanMonths = ["Martius", "Aprilis", "Maius", "Iunius", "Quintilis", "Sextilis", "September", "Sextilis", "October", "November", "December"]
		this.romanMonths = [31, 30, 31, 30, 31, 30, 30, 31, 30, 30]
		// https://www.timeanddate.com/calendar/julian-calendar.html

		// https://www.timeanddate.com/calendar/gregorian-calendar.html
		// https://www.timeanddate.com/calendar/months/
		// https://www.timeanddate.com/calendar/days/
		this.oldMonths = ["January", "February", "March", "April", "May", "June", "Quintilis", "Sextilis", "September", "October", "November", "December"]
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

module.exports = new Calendar();