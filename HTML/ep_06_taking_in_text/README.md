### HTML User Interactions part 2

Episode Overview / Main points
  - Intro "Welcome to Intro to Web Development..."

  - Explain last episode was about getting them started with user interactions and that in this episode we'll be looking at another type of user input, text input
    - the goal will be to add new content based on what a user types in. The very base functionality to build up to either a chat application or twitter.

  - Starting off in index.html
    - add a new HTML input element
    - give it the id of "user_input"
    - theres also another type of textfield html element called textarea which can also be used. It's more useful for a twitter-like application where it wraps text easily whereas a regular input field is better for a chat where it normally doesn't wrap at all.
  - Swap to main.js
    - Add a refrence to the new html input element you made
    - Then remove the string on the next line and replace it with the value of the user input. That will be whatever you type
  - Give it a try and you'll see whatever you type appear as rainbow text when you click the button
  - Lets add another feature to this that'll make it more like a chat application, we'll keep a log of previous messages, and we'll clear the input field when you submit a message
  - Swap back to index.html
    - Replace P element with a <ul> element
      - ul stands for "Unordered list" 
      - all messages will be an item in this list, the name for list items is just li
    - add an id of "chat_history" before heading back to our javascript function
  - Javascript
    - Since we no longer have the p_tag replace it with a chat_history variable
    - Create new list_item element
    - replace the p_tag.innerText with list_item.innerText
    - now we need to append or add the new list item to our chat_history
    - Set the value in the user input to be an empty string to clear when you submit
  - Try it again you'll see now we can make a list of previous messages that were sent 
  - If you want more on a chat application I'll be exploring that more in a future "intermediate" series where the difficulty is higher but we'll cover broader concepts.
  - Wrap up