#! /usr/bin/env node

var fs = require('fs');
var path = require('path'); 
var shell = require('shell');
var figlet = require('figlet');
var datex = require('data-expression');
 
var LIB_NAME = 'abacuss'; 
var BLANK_PROMPT = ''; //'ready '
var PROMPT_SUFFIX = '>>';
var CUSS_WORDS = ['dang','fudge it','corr blimey'];

function main(){

	app = new shell({ 
										chdir: __dirname,
										prompt: BLANK_PROMPT + PROMPT_SUFFIX,
										noPrompt: true
									});
	
	// Output banner
	app.styles.ln();
	app.styles.green(figlet.textSync(' ' + LIB_NAME, {font:'chunky'})).ln();
	app.styles.ln();
	
	var val = 0;
	var blank = true;
	
	var calc = function(req, res, next){
		
		var exp = String(req.command).replace(/ /g,'').toLowerCase();
		
		if (exp.length === 0 || exp == 'clear'){
			
			blank = true;

		} else {
			
			var error = false;
			var newVal;
			var c1 = exp.charAt(0);
			
			if (c1 === '='){
				exp = exp.substr(1,exp.length-1);
				c1 = exp.charAt(0);
			}
			
			try {
				
				if (blank || (c1 >= '0' && c1 <= '9')){	
					newVal = datex(exp, {})();		
				} else {		
					newVal = datex('val ' + exp, {val: val})();		
				}
			
			} catch(err) {
				error = true;	
			}
			
			if (error || isNaN(Number(newVal))){
			
				app.styles.red(CUSS_WORDS[Math.floor(CUSS_WORDS.length*Math.random())]).ln();
			} else {
				val = newVal;
				blank = false;
			}
		}
		
		if (blank){
			app.settings.prompt = BLANK_PROMPT + PROMPT_SUFFIX;
		} else {
			app.settings.prompt = String(val) + ' ' + PROMPT_SUFFIX;
		}
		
		next();
		
	}
	
	app.configure(function() {
		
		app.use(calc);
		
	});
	
	app.prompt();
}

module.exports = main();
	