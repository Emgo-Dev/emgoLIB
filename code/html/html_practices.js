//HTML Practices


//PAGE STRUCTURE: DOCTYPE
//This tag lets the browser know what type of document it is
/*
* _Notification_
* DOCTYPE should be the first thing that shows at the top of a webpage, on the first line.
* When using a server side language (like PHP) this is irrelevant as these languages are run
* on the server before the file is delivered to the client, where the HTML file is read.
*/
<!DOCTYPE html>


//INDENTATION
//Indentation or nesting in HTML helps show the structure hierarchy of our code, such as where elements exist in the document.
/*
* _Notification_
* Below is an example of nesting tags inside another element, although this is just the start of
* organizing code. The tab size or space count of indentation can be changed depending on the text editor being used.
* Typically developers will use use 2 or 4 space indentation, while the default for sublime text is 4. Tabs are composed of spaces.
* It's considered a practice to stick with space indentation as it saves the step of converting them, and allows for easier adjustments.
*/
<html>
  <head></head> //2 space indentation
</html>

<html>
    <head></head> //4 space indentation
</html>


//HEADER
//The <header> tag contains meta tags which handle page data. It is not the header used on the page.
//Not only does this include <meta> tags, but <link> & <script> tags attaching external files necessary into the document.
/*
* _Notification_
* The <header> can be used for establishing page data, like it's <title>, or linking external files like a css stylesheet.
* Below are some information about important elements to include within the <header> tag for a webpage
*/

//<meta>
<meta charset="utf-6">                               //This meta tag defines the character set formatted.
<meta type="description" content="">                 //This meta tag defines page description (what will show in a search engine result).
<meta type="keywords" content="keyword1, keyword2">  //This meta tag defines keywords which assist in SEO.

//<title>
//The <title> tag sets the title of the webpage which is viewed in the tab selection of the browser, and in search engine results.
<title>Name of Webpage</title>


//STRUCTURE
//There are many ways to go about structuring a webpage, but this section will cover generic tags which are specific to
//defining a web pages structure.
<header> //Helps structure information to be displayed to visitors
<navigation>
<section> //Breaks up the page into "logical groupings of information."
<footer> //A compliment to the header element which may contain copyright information, or links to external affiliates.


//findout later
&copy;


//====RESPONSIVE WEB DESIGN====
//FLUID IMAGES
//Images which respond fluidly using percentages
img { max-width: 100%; }


//Break Points
//Break points are points at which a responsive webpage's appearance is
//stretched beyond a point where it is no longer asthetically pleasing.


//FORMS
//Action is the address of program to process information submitted
//Method is http method used to submit a form.
//Post sends data from body of form to the server.
<form action="index.html" method="post/get"> </form>

//The input element controls input of data
<input type="text" id="name" name="user_name">
<input type="email" id="mail" name="user_email">
<input type="password" id="pass" name="user_password">
/*The type attribute indicates the kind of <input>.
*The ID attribute allows us to target the element later
*The name attribute allows the server to process the input more efficiently.*/

//For more area to type, the <textarea> element allows users to type a message.
//Notice how it uses the same attributes as <input>, however it is not "self-closing."
<textarea id="bio" name="user_bio"></textarea>


<label for="name">Username:</label>
