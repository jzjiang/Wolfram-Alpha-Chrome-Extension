$(document).ready(function(){
	var query = "http://www.wolframalpha.com/input/?i=";
	
	 $('body').on('click', 'a', function(){
     chrome.tabs.create({url: $(this).attr('href')});
     return false;
   });
	
	$("#wolframAlphaForm").submit(function(e){
		e.preventDefault();
		queryURL = query + encodeURIComponent(document.getElementById('userQuery').value);
		chrome.tabs.create({url: queryURL});
		
		// this is where the main handling happens
		//var req = new XMLHttpRequest();
		//req.open("GET", queryURL, true);
		//alert("hi");
	});
	
});
