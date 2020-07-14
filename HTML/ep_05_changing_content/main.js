function get_text(){
	/* 
    here we are accessing an always avaiable variable document
    we store that in a variable p_tag, 
    
    you can do that by using either the key *let* or *var*
    theres also *const* which stands for constant, 
    or a variable you cant change later on but here I'll use *let* simply out of prefrence
  */
	let p_tag = document.getElementById('clicktext');
	/*
    now we are setting the inner text of the p_tag, 
    just like we would if we typed this text inbetween the tags in the html file
  */
	p_tag.innerText = 'CreativeBuilds, just clicked a button!';
	/* This can be useful for dynamic information that's stored in the BACKEND. 
  For instance, a user's name can be updated in real time without needing to reload the page at all
  */

	/* WAIT to explain this next code for when the video cuts back to javascript code */

	/* Lets randomize the text color every time we click the button also */

	/* first lets generate 3 random numbers, one for each color of the text */
	let red = random(0, 255);
	let green = random(0, 255);
	let blue = random(0, 255);

	/* 
 here we use a string and can type values just like how we would in a css file, 
 so any values between 0 and 255 for red green and blue 

 Specifically we're using a template string which is denoted using backticks,
 it allows us to change a string by using variables. In this case we pass in the 3 variables
 for each color
 */
	let new_color = `rgb(${red},${green},${blue})`;

	/* 
    now we access the style on our html node
    the style variable here allows us to access pretty much every variable that we can in a css file
    
    set the color to the new_color
  */
	p_tag.style.color = new_color;
}

function random(min, max){
	return min + Math.random() * (max - min);
}
