(function() {

	if(typeof String.prototype.repeatt === "function" ) return;

	String.prototype.repeatt = function(x){

		if(x<0) {
			throw new RangeError("Invalid value");
		}

	/*	var output = "";

			for(var i =0; i<x; i++){
				output += this.toString();
			}

		return output;
*/
	return (new Array(count + 1)).join(this.toString());

	};

})();