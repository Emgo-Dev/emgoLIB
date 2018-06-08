function Calendar( months, args ){
	const modernMonths = {
		January: 31,
		February: 28,
		March: 31,
		April: 30,
		May: 31,
		June: 30,
		July: 31,
		August: 31,
		September: 30,
		October: 31,
		November: 30,
		December: 30
	};
	this.col = typeof months === "object" ? months : modernMonths;
	this.monthsCol = Object.keys(this.col);

	Month.call(this, args);
	Day.call(this, args);
};

function Day( args ){
	this.daysCol = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	];

	this.getDay = function( day ){
		return this.daysCol[day];
	};

	this.getDays = function( days ){
		return Object.keys( arguments ).map( x => this.getDay(arguments[x]) );
	};
};

function Month( args ){
	// ARGUMENTS
	this.monthsBeginOn = 0;

	if( args ){
		// MONTHS BEGIN ON 1 RATHER THAN 0
		if( args.hasOwnProperty("monthsBeginOnOne") && args.monthsBeginOnOne ){
			this.monthsCol = [undefined, ...this.monthsCol];
			this.monthsBeginOn = 1;
			// BECAUSE undefined WILL CAUSE ERRORS WHEN OPERATIONS WITH TYPE SPECIFIC
			// METHODS ARE USED IN ITERATIVE PROCESSES SUCH AS Array.map( x => x.toLowerCase()
			// CHAIN Array.filter( x => x !== undefined ) BEFORE ANY SUCH INDISCRIMINATE OPERATIONS
		}
	}

	Array.prototype.filterUndefined = function(){
		return this.filter( x => x !== undefined );
	};

	Array.prototype.undefinedTo0 = function(){
		if( args && args.hasOwnProperty("monthsBeginOnOne") && args.monthsBeginOnOne ){
			return [undefined, ...this];
		}
	};

	this.toShort = function( str ){
		return str.slice(0, 3);
	};

	this.getMonth = function( month ){
		return typeof month === "number" ? this.findMonth( month ) : this.findMonth( month )[0];
	};

	this.getMonths = function( months ){
		if( months === undefined ){
			return this.findMonth();
		}

		return Object.keys( arguments ).map( x => this.getMonth(arguments[x]) );
	};

	this.safeMonths = function(){
		return this.monthsCol.filterUndefined().map( x => x.toLowerCase() ).undefinedTo0();
	};

	this.safeMonthI = function( int = 0 ){
		return int < this.monthsBeginOn ? this.monthsBeginOn : int > this.monthsCol.length - 1 ? this.monthsCol.length - 1 : int;
	}

	this.isMonth = function( month ){
		if( typeof month === "string" && this.findMonth(month, true) ){
			return true;
		}

		return false;
	}

	this.findMonth = function( month, strict = false ){
		if( typeof month === "number" ){
			return this.monthsCol[this.safeMonthI(month)];
		};

		if( typeof month === "string" ){
			let foundMonth = this.safeMonths().filterUndefined().filter(
				x => x.slice(0, month.length) === month.toLowerCase()
			).map(
				x => x.slice(0, 1).toUpperCase().concat( x.slice(1) )
			);

			if( strict ){
				return foundMonth[0].toLowerCase() === month.toLowerCase() ? true : false;
			}

			return foundMonth;
		};

		return this.monthsCol.filterUndefined();
	};
};
