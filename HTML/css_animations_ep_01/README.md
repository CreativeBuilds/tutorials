### CSS Animations #1

Episode Overview / Main points
  - Intro "Welcome to CSS animations" *not welcome back since this will be the first episode of css animations may do 3-4 of the*

  - Explain that we're using CodeSandbox.IO which allows for super easy web development when trying out different designs.
  
  - Show completed code and animations before jumping in so people know what we'll be building

  - **video will cut to a template without the code so I can walk through the process**

  - Creating the HTML Structure
    - Create a wrapping div for our 3 dots to go in.
    - This div will have an id of "wrapper"
    - Add the 3 children divs and give them each a class of box
  
  - Adding the CSS
    - **TO Nicole**: I'm going to have lines 1-16 of the page I sent you already in the css file when users watch the video this file wont start empty. Just so you can picture the video while you write it better
    
    - Lines 1-16 are biolerplate code to help us clean everything up although it's not technically needed.
      - Most important part is the body css where we set the webpage to take up the full screen and hide any overflow so we dont have scroll bars

    - create a refrence to the div with the ID of "wrapper" by doing #wrapper
      - Stretch the element out to take the full width and height of the screen like we did with body.
      - Set the display to flex so we can center our content
      - Add justify-content: center and align-items: center; in order to have our dots in the center of the screen
    
    - Next we need to add css to the divs inside of our wrapper element, remember they have a class of .box so we write "#wrapper div.box"
      - The space tells the CSS engine that we want to edit the css of all divs with the class of box that are also inside of the #wrapper element.

      - Set the width and height to be 3rem.
        - rem is a sizing unit, a link to extra reading material on css units will be in the description

      - Position will be relative
      - Add margin so we can have some space inbetween our dots
    
    - So far theres still no changes, lets add a psudeo element and it will all start coming together
      - "#wrapper div.box::after"
        - the "::" means we're accessing a psudeo element
      - set the content to be an empty string
      - position absolute
        - Because the parent element has "position relative" this ties the psudeo element to its parent element no matter where it is on the screen.
        - Important because that's what allows us to animate the dots flowing up and down.
      - Set the background to a color you like I'm going to use #87a7b3 or grayish blue.
      - Set the width and height to be 3rem as well
      - Border-radius: 50%;
        - Turns the square into a circle
      - Explain https://i.imgur.com/62qBCxy.png this animation tag
        - **To nicole**: Not sure how to word it but it would be something like *animation: [name] [duration] [timing-function] [optional-delay] [how-many-times-to-run-the-animation] [animation-direction]
      - Lastly for this psudeo element set the opacity to 0;

    - Adding the actual animation
      - Animations are made using the keyword "@keyframes [name-of-the-animation]"
      - it contains different percentages which represent different points during the animation
      - Add a "0% {}" and a "100% {}"
        - The curly brackets are where we're going to put our css that will change over time
      - Inside the curly brackets for 0% set bottom to -1.5rem and opacity to 0;
      - Inside the curly brackets for 100% set bottom to be 1.5rem and opacity to 1;
      - With that now we should have three dots bouncing side by side https://i.imgur.com/143IrDx.gif
    
    - Creating delay and adding different colors
      - To access the 2nd and 3rd box we will copy the CSS selector that has our animation in it (Refrence I'm talking about #wrapper div.box::after)
      - Copy and paste that to a new line and add :nth-child(2) after .box
        - This selects the second "div.box" element within the #wrapper element
      - add an animation-delay of 0.5s or 500ms and select a different background color if you want.
      - Copy that and paste it again, change the 2 in nth-child(2) to a 3 to select the third element.
      - Change the delay in the third element to be 1 second and change the backgroun if you wish too.
    
    - If you save and reload now, you should see your three elements bouncing up and down. Feel free to tweak different variables and experiment with what you can animate for instance the background color.

    - Wrap up
