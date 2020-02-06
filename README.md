# README

# Exercise: Balloon Explosion #

This is my solution to the Balloon exercise from [Chapter 15 of Eloquent JavaScript](https://eloquentjavascript.net/15_event.html#i_ZPJB9UFdQA).  The goal of the exercise was to simply have a balloon emoji on-screen that increased or decreased in size when the up or down arrow keys were pressed, respectively.  At a specified size, the balloon would "explode" and become an explosion emoji which could not be resized.

## Exercise Post-Mortem ##

This exercise was good practice for eventListeners, reading key inputs, if statements, and retaining / updating variables as their states change.  I expanded on the exercise a bit by adding an emoji fox who gives you warnings (upon increase) or encouragement (upon decrease) as you resize the balloon.  He has four lines of dialogue for each state - increase, decrease, and explosion - which are chosen randomly upon call.

## To Do ##

If I were going to expand upon this solution, I would add an animation feature to make the explosion grow upon appearance (to look more like it's actually "exploding"), as well as some flashes of light in the background.  Just for fun, I might change the fox to the smiley with varying emotions -- like annoyed, scared, etc. -- as you blow up the balloon.

I'd also add a mobile version with up and down buttons instead of relying on arrow key input - the current version cannot be interacted with on mobile.

## Technologies ##

This exercise was built with HTML, CSS, and JavaScript.  I used [Emojipedia](https://emojipedia.org/) for the balloon and fox, and [Bubbly](https://leaverou.github.io/bubbly/) for the speech bubble style.
