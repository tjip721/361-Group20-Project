// Javascript for the webpage to create an account page
// this assumes the html form designates each item w/ a corresponding
// element ID which is utilized here

var portNum = 3690; 
var serverAddress = "http://os1.engr.oregonstate.edu:"; 

document.addEventListener('DOMContentLoaded',bindButtons); 

function bindButtons(){
	
document.getElementById("createAccountSubmit").addEventListener("click", function(event){
	event.preventDefault();
	var userId = document.getElementById('userName').value; //Get user name from form field by the element ID 'userName'
	var passWord = document.getElementById('password').value; //same but for password 

	var postReq = new XMLHttpRequest(); 
	postReq.open("POST",serverAddress+portNum+"/insert", true); 
	postReq.setRequestHeader("Content-Type:", "application-json"); 

	postReq.addEventListener("load", function(){
		if(postReq.status >= 200 && postReq.status < 400){
			//display confirmation page
		}
	}

	var req = JSON.stringify({userName: userID, password: passWord}); 
	postReq.send(req); //send the request



} //End of bind buttons fxn





