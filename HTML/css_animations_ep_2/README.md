### CSS Animations, animated card element

Episode Overview

(Feel free to describe the steps more so than I type here, like how it would sound normally)

- Explain how this animation comes from one I made on creativebuilds.io in the last devlog.
  - I'll be showing the example from my website will explaining
- Setup HTML
  - create a div with a class of card
  - add two spans within that div
  - add another div with the class of card-content
- CSS
  - create some css variables to store our color values
    - used to store commonly used values like the background color so instead of having to change the same value in multiple places, theres now just one
    - choose what colors you want for your theme
  - add the css for the class of card
    - set width to be 50% of the screen width
    - use calc to divide the width by 16 and multiply by 9
      - will make the element always stay in a 16:9 but always fit on screen
  - add the css for the content of the card
    - the content will take the full width and height of it's parent
    - if you want your card to have curved edges, add a border-radius of 5px
    - set the background color to be the css variable "--card" you made earlier
  - add css on span elements within the card element
    - set the position to be absolute;
    - bottom and right will be set to -0.75rem
    - width and height will be 100%
    - border radius will be 5px
    - same background as the card content with your css variable "--card"
    - set opacity to 0.33;
    - set the z index to -1
      - puts the span behind every other element that way it acts more like how'd you expect a shadow to work
    - add the animmation which has a name of "flow", a duration of 1.5s, it will ease in and out, alternate so that way it can flow back and forth and set to run forever with infinite.
  - add the keyframes called "flow" so we can actually animate the shadow
    - at 0% add a transform which will translate the shadow 0px on the x axis and 0px on the y axis
    - 100% will have a transform which will translate the shadow 5px on both axises
      - This will move the shadow down and over 5px
  - next for the first span element under an element with a card class add an animation delay of 0.2s
  - for the seocnd span element add the following
    - bottom -1.5rem and right -1.5rem
      - creates a second shadow
- Feel free to add any extra content inside the card that you want as long as you add the content inside of the "card-content" element
- Wrap up
    
  