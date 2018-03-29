class Calendar {
	// I'M SAVING THESE LINKS FOR LATER USED
	// THEY WILL GO IN A DOCUMENTATION FILE SOMETIME LATER
	// https://www.timeanddate.com/
	// https://www.timeanddate.com/calendar/jewish-calendar.html
	// https://www.timeanddate.com/calendar/roman-calendar.html
	// https://www.timeanddate.com/calendar/julian-calendar.html
	// https://www.timeanddate.com/calendar/gregorian-calendar.html
	// https://www.timeanddate.com/calendar/months/
	// https://www.timeanddate.com/calendar/days/

	constructor( monthCol = {} ){
		// EXPECT A JSON COLLECTION OF MONTHS
		// MONTH AS PROPERTY, DAYS IN THE MONTH AS AN INTEGER VALUE
		this.col = Object.entries(monthCol);
	}

	getMonths(){ return this.col.map( x => this.getMonth(x) ); }

	preparedMonths(){ return this.getMonths().map( x => x.toLowerCase() ); }

	preparedMonthInt( int = 0 ){ return int < 0 ? 0 : int > this.col.length - 1 ? this.col.length - 1 : int; }

	getDays(){ return this.col.map( x => this.getDay(x) ); }

	getDay( col = [] ){ return col[1]; }

	getMonth( col = [] ){ return col[0]; }

	findMonth( month ){
		if( typeof month === "string" ){
			if( month.length < 4 ){
				return this.preparedMonths().filter( x => this.toAbbr(x) === this.toAbbr(month).toLowerCase() ).map( x => x.slice(0, 1).toUpperCase().concat(x.slice(1)) );
				// return this.preparedMonths().map( x => this.toAbbr(x) ).filter( x => x === this.toAbbr(month).toLowerCase() ).map( x => x.slice(0, 1).toUpperCase().concat(x.slice(1)) );
			}

			return this.preparedMonths().filter( x => x === month.toLowerCase() ).map( x => x.slice(0, 1).toUpperCase().concat(x.slice(1)) );
		}else if( typeof month === "number" ){
			return this.getMonths()[this.preparedMonthInt(month)];
		}

		return this.preparedMonths().filter( x => x === month.toLowerCase() );
	}

	findDay( month ){
		if( typeof month === "number" ){
			return this.getDay(this.col[this.preparedMonthInt(month)]);
		}
	}

	toAbbr( str ){ return str.slice(0, 3); }

	isMonth( month ){
		if( this.findMonth(month).length < 1 ){ return true; }

		throw new Error("Calendar.getDaysOf: Parameter was not a string.");
	}
}

module.exports = new Calendar();
