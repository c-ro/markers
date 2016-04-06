// markers.js

function markers() {
	"use strict";
	// define the object that will be exported as the markers module
	var markers = {};
	
	// define some useful functions for the module
	markers.hr = function(){
		var hr = "\n\n*****\n\n";
		return hr; 
	};

	markers.br = function(){
		return "\n\n";
	};
	
	markers.link = function(string, type){
		var output,
		    linkType = type ? type.indexOf("http") === -1 ? type || "url" : "hyper" : "url";

		switch(linkType){
		// Twitter-related links
			case "@":
				output = "[@" + string + "](http://www.twitter.com/" + string + ")";
				break;
			case "#":
				output = "[#" + string + "](http://www.twitter.com/hashtag/" + string + ")";
				break;
		// Reddit-related links
			case "reddit":
				output = "[/r/" + string + "](http://www.reddit.com/r/" + string + ")";
				break;
			case "redditor":
				output = "[/u/" + string + "](http://www.reddit.com/u/" + string + ")";
				break;
		// hyperlinked text
			case "hyper":
				output = "[" + string + "](" + type + ")";
				break;
		// direct hyperlinks
			default: output = "[" + string  + "](" + string + ")";
		}

		return output;
	};
	
	markers.bold = function(string){
		var boldString = "**" +  string + "**";
		return boldString;
	};

	markers.h = function(int, string){
		//mrk.h(6, "makes an h6 header");
		var prefix = "",
			num = int <= 6 ? int : 6, // ints > 6 are invalid, fail quietly and use 6
			hash = function(){
				for(var i = 0; i < num; i++){
					prefix = prefix + "#";
				}
			}();

		return  prefix + " " + string;
	};
	
	markers.list = function(array, listType){
		var type = listType || "ul";
		var list = '';
		if(type === "ol"){
			array.forEach(function(element, index, array){
				list = list + '\n' + (index + 1) + '. ' + element;
			});
		} else {
			list = "* " + array.join('\n* ');
		}
		
		return list;
	};
	
	markers.section = function(content){
		return this.br() + content + this.hr();
	};

	// return the markers object you can use those functions elsewhere
	return markers;
}

module.exports = markers();

/// markers
// mrk.section(makeHeader());
// mrk.bold("Homecity BeisbolCats");
// mrk.makeLink("Stream", "http://www.stream.com");
// mrk.makeList(["one", "two", "three"], "ol");
// mrk.br();
// mrk.makeList(["one", "two", "three"]);