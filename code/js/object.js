const countProperties = obj => Object.keys(obj).length;
Object.prototype.toArray = function(){ return Object.entries(this); }
Object.prototype.length = function(){ return Object.keys(this).length; }