function get_text() {
	// Replace p_tag with chat_history
	let chat_history = document.getElementById('chat_history');
	// Create a new list_item
	let list_item = document.createElement("li")

	// Reference to the HTML input element
	let user_input = document.getElementById('user_input');

	// Now set the inner text of the p_tag to be what the user has typed in user_input by using the value variable
	list_item.innerText = user_input.value;
	// (Nicole: p_tag is renamed to list_item in the second part of the video)

	let red = random(0, 255);
	let green = random(0, 255);
	let blue = random(0, 255);

	let new_color = `rgb(${red},${green},${blue})`;
	// 👇 also rename this from p_tag to list_item 
	list_item.style.color = new_color;

	// Now we just add the new list_item to the chat_history
	chat_history.appendChild(list_item)
	// ^ Second half of video
	// Clear the user_input for a new message
	user_input.value = "";
}

function random(min, max) {
	return min + Math.random() * (max - min);
}