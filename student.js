var companyname= "Sunnydae";
var address = "12345 Penny Lane, Robertha, CA 92102";
var phonenumber = "(261) 555-7070";


var product1 = { 
	name:"Foji Onesie", 
	id:"0011", 
	desc:"Nothing like some vacation vibes to remind you of how much work you have left to do.", 
	imageURL: "https://cdn.shopify.com/s/files/1/1506/4676/products/FIJI-WATER-ONESIE-VAPORWAVE-CLOTHING-AESTHETIC-NOBG_360x.jpg?v=1566514854"
}; 

var product2 = { 
	name:"Koduk Onesie", 
	id:"0015", 
	desc:"For those who haven't moved on from good ol' \"vintage\" 90's things. â™¥", 
	imageURL: "https://cdn.shopify.com/s/files/1/1506/4676/products/VHSMAX-97-ONESIE-VAPORWAVE-CLOTHING-NO-BG_360x.jpg?v=1566503813"
}; 

var product3 = { 
	name:"Nokio Onesie", 
	id:"0019", 
	desc:"Probably a super suit...", 
	imageURL: "https://cdn.shopify.com/s/files/1/1506/4676/products/NOKIA-ONESIE-FRONT_360x.jpg?v=1568678339"
};

var product4 = null;
var product5 = null;

var jsonobj1 = {"type":"clothes","number":"1"};
var jsonobj2 = {"type":"clothes","number":"2"};

var ad1 = {
	name:"vapor95",
	link: "https://vapor95.com/"
};
var ad2 = {
	name:"parapalm",
	link:"https://www.parapalmaesthetics.com/"
};
var ad3 = {
	name:"dolls kill",
	link:"https://www.dollskill.com/"
};

var adNum = 1;
new_win = null; 
var replystr = null;

function product(name, id, desc, imageURL)
{
	this.name = name;
	this.id = id;
	this.desc = desc;
	this.imageURL = imageURL;

}

function ad(name, link)
{
	this.name = name;
	this.link = link;
}

function getProduct(jsonobj) 
{
  var server = 'https://college1.com/getproduct.php';
  var jsonstr = JSON.stringify(jsonobj);           // This is a string in JSON format
  xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", server+"?jsonstr="+jsonstr, true); // open connection to server
  xmlhttp.send();  // send request, causes onreadystatechange to run when reply is ready 

  xmlhttp.onreadystatechange = function () 
  {  
  	//console.log('hello ' + this.readyState + ' ' + this.status);
  	if (this.readyState == 4 && this.status == 200) 
  	{
    	replystr =  this.responseText;           // replystr MUST BE GLOBAL
    	//console.log(replystr);
    	if (product4 == null)
    	{
        	product4 = JSON.parse(replystr);
        }
    	else if (product5 == null){
        	product5 = JSON.parse(replystr);
        }
    	else
       		console.log('Error, no object variable available');
 	}
 }
}


function makeForm()
{
	var form = "<center><form onSubmit='return checkForm()' name='customerform' action=\"https://college1.com/classes/javascript/survey.php\">"+
	"<table width=100%>"+
	"<tr><td>First Name: <input type='text' name='firstname'></td>"+
	"<td align=right> Last Name: <input type='text' name='lastname'></td></tr>"+
	"<tr><td colspan=2>Address: <input type='text' name='address' size=50></td></tr>"+
	"<tr><td>City: <input type='text' name='city'></td>"+
	"<td align=right>State: <input type='text' name='state' size=3>"+
	"Zip: <input type='text' name='zip' size=6></td>"+
	"<tr><td colspan=2>Email Address: <input type='text' name='emailaddr' size=50>"+
	"</td></tr><tr><td><input type='submit' value='Submit'></td>"+
	"<td align=right><input type='reset'></td></tr></table></form></center>";

	document.getElementById("my_main").innerHTML = form;

}


function checkForm() {

  var fname = 		document.customerform.firstname.value;
  var lname = 		document.customerform.firstname.value;
  var address = 	document.customerform.address.value;
  var city = 		document.customerform.city.value;
  var state = 		document.customerform.state.value;
  var zip = 		document.customerform.zip.value;
  var emailaddr = 	document.customerform.emailaddr.value;

  if (fname.length <= 0 || lname.length <= 0 || address.length <= 0 || city.length <= 0 || state.length <= 0 
  	|| zip.length <= 0 || emailaddr.length <= 0) 
  {
     alert("One or more fields is missing. Please enter missing data.")
     return false
  }
  else return true;

} 


function popupAd() 
{
	var adArray = new Array(ad1, ad2, ad3);

   	new_win = open("","dynamicHTML","width=350,height=350");
   	new_win.document.writeln("<div id='my_div'></div>");
   	new_win.document.close();
   	new_win.document.getElementById('my_div').innerHTML =
    	"<link rel=\"stylesheet\" href=\"styles.css\"> <table id=\"ad"+adNum+"\"><tr><td>"+
		"<center><a href=\""+adArray[adNum-1].link+"\"><h4>"+adArray[adNum-1].name+"</h4></a></center></td></tr></table>";
   	new_win.focus();

	adNum++;

	if (adNum>3)
		adNum=1;
}

function closeAd( ) {
   if (new_win != null) {
     new_win.close();
     new_win = null;
   }
}

function hitCard() 
{ 
	faceDown = buildCardImgPath(52);

	//check if card is flipped, if not move to next //while cardimg != 52 ? card++ i
	for (cardnum = 0; cardnum < 5; cardnum++)
	{
		currentcard = document.getElementById("my_card"+cardnum).src;

		if (currentcard == faceDown){
			document.getElementById("my_card"+cardnum).src = buildCardImgPath(generateCard());
			break;
		}
		else continue;
		
	}
	
}

function generateCard()
{
	return Math.floor(Math.random() * 1000) % 52;
}

function selectCard()
{
	return Math.floor(Math.random()*5);
}


function buildCardImgPath(cardnum)
{
	imgURL = "https://college1.com/classes/cs190/lecture/images/cards/gbCard";

	return imgURL + cardnum + ".gif";
}

function dealCards() 
{ 
	var blackjack = new Array(5);
	var cards = new Array(2);

	for (var i=0; i < cards.length; i++)
	{
		cards[i]=selectCard();

		//make sure card index isnt the same
		if(i==1)
		{
			while(cards[i]==cards[i-1])
			{
				cards[i]=selectCard();
			}
		}
	}



	for (var i=0; i < blackjack.length; i++)
	{
		if(i==cards[0] || i==cards[1])
		{
			blackjack[i] = generateCard();
		}
		else blackjack[i] = 52;
	}



	var cardimg = "<center>";
	for (var i=0; i < blackjack.length; i++)
   	{
   		cardimg += " <img src='' id='my_card" + i + "'> ";
   	}
	document.getElementById("my_main").innerHTML = cardimg; 

   	for (var i=0; i < blackjack.length; i++)
   	{
   		document.getElementById("my_card"+i).src = 
   			buildCardImgPath( blackjack[i] );
    }

}


function makeLinkBar(product)
{
	alert( "Item: " + product.name + " has been added to the cart. ( not really )" );
}

function makeMain(product)
{
	var data = "<table style='width:100%' cellpadding=5><tr>"+
    "<td rowspan=3 style='width:30%;text-align:center;vertical-align:middle'>"+
    "<span id='prod_img'><img src='"+product.imageURL+"' width = '100%' border=1px></span></td>"+
    "<td id='prod_name' align='center'><strong>"+product.name+"</strong></td>"+
    "<td style='text-align:right' id='prod_id'>Product ID:"+product.id+"</td></tr>"+
    "<tr><td style='text-align:center' colspan=2>"+
    "<span id='prod_bar'><a href = \"Javascript:makeLinkBar("+product+");\"> Shopping cart link </a></span> </td></tr>"+
    "<tr><td colspan=2 id='prod_desc'>"+product.desc+"</td></tr>"+
    "</table>";
	
	document.getElementById("my_main").innerHTML = data;
}

function makeMainJSON(product)
{
	var data = "<table style='width:100%' cellpadding=5><tr>"+
    "<td rowspan=3 style='width:30%;text-align:center;vertical-align:middle'>"+
    "<span id='prod_img'><img src='https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' width = '100%' border=1px></span></td>"+
    "<td id='prod_name' align='center'><strong>"+product.name+"</strong></td>"+
    "<td style='text-align:right' id='prod_id'>Product ID:"+product.id+"</td></tr>"+
    "<tr><td style='text-align:center' colspan=2>"+
    "<span id='prod_bar'><a href = \"Javascript:makeLinkBar("+product+");\"> Shopping cart link </a></span> </td></tr>"+
    "<tr><td colspan=2 id='prod_desc'>"+product.desc+"</td></tr>"+
    "</table>";
	
	document.getElementById("my_main").innerHTML = data;
}

function displayAbout()
{
    var data = "This page was created for a Fall 2019 JavaScript class in order to mock a store page. "
    
    document.getElementById("my_main").innerHTML = data;
}

function makeMenu(size)
{
	product4 = getProduct(jsonobj1);
	product5 = getProduct(jsonobj2);

	var menu = "<h3>Navigation</h3>";

	for(var i=1; i <= size; i++)
	{
		menu+="<a class=\"my_menu\" href='Javascript:makeMain(product" + i +");'>Product #" + i + "</a><br>";
	}

	menu+="<a class=\"my_menu\" href='Javascript:makeMainJSON(product4);'>Product #4</a><br>"+
	"<a class=\"my_menu\" href='Javascript:makeMainJSON(product5);'>Product #5</a><br>"+
	"<a class=\"my_menu\" href='Javascript:dealCards();'>Deal Cards</a><br>"+
	"<a class=\"my_menu\" href='Javascript:hitCard();'>Hit Card</a>"+
	"<a class=\"my_menu\" href='Javascript:popupAd();'>PopUp Ad</a>"+
	"<a class=\"my_menu\" href='Javascript:closeAd();'>Close Ad</a>"+
	"<a class=\"my_menu\" href='Javascript:makeForm();'>Enter Data</a>"+
	"<a class=\"my_menu\" href='Javascript:displayAbout();'>About Page</a>";
	
	return menu;
}


function getHeader()
{
	var time = new Date();
	
	var data = "<div id='time'>" + time.toLocaleString() + "</div><br>" + 
	"<h2>"+ companyname +"'s \"Store\" Page</h2>";
	
	return(data);
}

function getFooter(name, address, number)
{
	var data = "<div id='footer'>" + name + " | " + address + " | " + number + " | App Name: " + navigator.appName +  " | App Version: " + navigator.appVersion + " | Platform: " + navigator.platform + "</div>";
	return(data);
}
