/******************************************
 Treehouse FSJS Techdegree:
 project 1 - A Random Quote Generator
 ******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
 Create the array of quote objects and name it `quotes`.
 Add at least five quote objects to the `quotes` array.
 Give each quote object a `quote` and `source` property.
 Add the `citation` property to at least one object in the array.
 Add the `year` property to at least one object in the array.
 Use console.log() to log your array of quotes to the console.
 ***/

var quotes = [
              //these are the quotes used in the project
              {
              quote:"What you read when you don’t have to, determines what you will be when you can’t help it.",
              source:"Charles Francis Potter",
              citation:"The Burlington Free Press",
              year:"1927",
              color:"dodgerblue"
              },
              {
              quote:"We must go beyond textbooks, go out into the bypaths and untrodden depths of the wilderness.",
              source:"John Hope",
              citation:"The Story of John Hope",
              year:"1948",
              color:"red"
              },
              {
              quote:"Success don’t konsist in never making blunders, but in never making the same one the seckond time.",
              source:"Henry Wheeler Shaw",
              citation:"The Daily State Journal",
              year:"1872",
              color:"slateblue"
              },
              {
              quote:"Someone has to do something. It’s just incredibly pathetic it has to be us.",
              source:"Jerry Garcia",
              citation:"Grateful Dead Speech",
              year:"1988",
              color:"green"
              },
              {
              quote:"When it sounds good, it is good.",
              source:"Duke Ellington",
              citation:"Music Is My Mistress",
              year:"1973",
              color:"purple"
              },
              {
              quote:"Spiritual love is a position of standing with one hand extended into the universe and one hand extended into the world.",
              source:"Christina Baldwin",
              citation:"Life's Companion",
              year:"1990",
              color:"midnightblue"
              },
              //this quote has no year
              {
              quote:"Hardships often prepare ordinary people for an extraordinary destiny.",
              source:"C. S. Lewis",
              citation:"Chronicles of Narnia",
              color:"blue"
              },
              //this quote has no year or citation
              {
              quote:"Whatever it is your wanting won't come in the form your expecting.",
              source:"Haruki Murakami",
              color:"black"
              },
              //this quote has no citation
              {
              quote:"You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
              source:"Dr. Suess",
              year:"1942",
              color:"orange"
              }
              ];



/***
 Create the `getRandomQuote` function to:
 - Create a variable to store a random number
 - Cse the random number to `return` a random quote object from the `quotes` array.
 ***/

var doubleRand;

function getRandomQuote(quotes){
    //random number generator
    do{
    var rand = Math.floor(Math.random()*9);
    }
    while(doubleRand==rand)
    
        doubleRand = rand;
    
    return quotes[rand];
}


/***
 Create the `printQuote` function to:
 - Call the `getRandomQuote` function and assign it to a variable.
 - Create a variable for the HTML string and set it equal to an empty string.
 - Use the HTML template in the instructions or the markup in the index.html file, AND
 the random quote vairable to build your HTML string.
 - Add the quote and source section to the HTML string.
 - Use an if statement to check for the citation property before adding it to the HTML string.
 - Use an if statement to check for the year property before adding it to the HTML string.
 - Don't forget to close that final `p` tag.
 - Set the `innerHTML` of the `quote-box` div to the HTML string.
 ***/

function printQuote(){
    var objectIn = getRandomQuote(quotes);
    
    //this is when the object is lacking citation and year
    if(!objectIn.citation && !objectIn.year){
        document.getElementById("quote-box").innerHTML = "<p class=\"quote\">"+objectIn.quote+"</p>"+
        "<p class=\"source\">"+objectIn.source+"</p>";
    }//this is when the object is lacking citation
    else if(!objectIn.citation){
        document.getElementById("quote-box").innerHTML = "<p class=\"quote\">"+objectIn.quote+"</p>"+
        "<p class=\"source\">"+objectIn.source+"<span class=\"citation\">"+"</span>"+
        "<span class=\"year\">"+objectIn.year+"</span></p>";
    }//this is when the object is lacking year
    else if(!objectIn.year){
        document.getElementById("quote-box").innerHTML = "<p class=\"quote\">"+objectIn.quote+"</p>"+
        "<p class=\"source\">"+objectIn.source+"<span class=\"citation\">"+objectIn.citation+"</span></p>";
    }//all other cases
    else{
        document.getElementById("quote-box").innerHTML = "<p class=\"quote\">"+objectIn.quote+"</p>"+
        "<p class=\"source\">"+objectIn.source+"<span class=\"citation\">"+objectIn.citation+"</span>"+
        "<span class=\"year\">"+objectIn.year+"</span></p>";
    }
    
    
    document.body.style.backgroundColor = objectIn.color;
}


/***
 When the "Show another quote" button is clicked, the event listener
 below will be triggered, and it will call, or "invoke", the `printQuote`
 function. So do not make any changes to the line of code below this
 comment.
 ***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
