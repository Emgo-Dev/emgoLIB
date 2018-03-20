class Clock {
	constructor(){
		this.instance = window.setInterval(()=>{
			let date = new Date().toISOString().match(/(\d{1,2})+((?=:)|(?=\.))/g);
			this.setTimes(date[0], date[1], date[2]);
		}, 1000)
	}
	setTimes(hours, minutes, seconds){
		this.hours = hours
		this.minutes = minutes
		this.seconds = seconds
	}
	getNow(){ return new Date() }
	getToday(){ return new Date(
		this.getNow().toISOString().match(/^\w{4}-\w{2}-\w{2}/)[0].concat(" 00:00:00Z")
	) }
	// getMiliseconds(){ return this.milisecondsPerDay; }
	// getSeconds(){ return this.getMiliseconds() / 1000; }
	// getMinutes(){ return this.getSeconds() / 60; }
	// getHours(){ return this.getMinutes() / 60; }
}

let clock = new Clock();

console.log(Clock.hours);