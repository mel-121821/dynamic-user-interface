# dynamic-user-interface

ODIN Instructions: Dropdown

[x] You can allow the menu to show up either on click or on hover.

[x] You should hard-code the menu items into your HTML but hide/reveal them using JavaScript. You can do this either by adding a class (visible or something) or by manually setting the style in JS.

[x] Make sure the JavaScript code is reusable! You should be able to create multiple drop-downs on a page using HTML and reuse the JavaScript logic to hide/reveal them.

[] If you bundle your code into a module you can publish your package to npm, and then install and use it anytime you like! Nothing like publishing your own modules to make you feel like a pro 😎.

---

ODIN Instructions: Carousel

[] It should contain arrows on each side to advance the image forward or backward.

[] It should automatically move forward every 5 seconds.

[] It should contain the little navigation circles at the bottom that indicate which slide you are on (and they should be clickable to advance to that particular slide).

Don’t spend too much time worrying about getting your images to display at the correct size – it’s more important to get the carousel rotating.

This one is a little more involved than the previous task, so think about how you would set up the different elements within the site.

[] Set up a very wide div which will contain the individual “slides” of each image. By appropriately positioning that div inside a container div (which acts like a picture frame), you can choose which slide is visible at any given time.

[] Once you have the slider positioned properly, build functions for “next” and “previous” which will advance to the next or previous slide accordingly. The transition doesn’t need to be smooth or animated. Only make it switch to the correct slide.

[] Set up arrow buttons which activate those functions and play with cycling through the images.

[] Add in some navigation dots at the bottom of the slides.

[] Make a horizontal series of empty circles with CSS immediately below the slideshow. Each circle represents a slide, so whenever a new slide is activated, its corresponding circle gets filled in so you can tell where in the show you are.

[] Make each circle link to that particular slide, so you can click on the circle and it will jump to that slide.

[] Add a timeout which advances the slides every 5 seconds.

Play around with your slideshow!

---

Image credits:

Name: ocean.jpg (bg-img)
Artist: Aron Ulsh
Url: https://www.pexels.com/photo/blue-water-2860705/

Name: beach-chair.jpg
Artist: Arnel Hasanovic
Url: https://unsplash.com/photos/brown-wicker-basket-near-white-flat-sandals-and-beach-chair-on-seashore-under-white-and-blue-sky-fVwqaAqzj2g

Name: surf-boards.jpg
Artist: Addy Mae
Url: https://unsplash.com/photos/blue-and-white-metal-chain-xeYEAvDdUqU

Name: drinks.jpg
Artist: Susanne Jutzeler
Url: https://www.pexels.com/photo/three-assorted-fruit-juice-in-glasses-1233319/

Name: musician.jpg
Artist: Brett Sayles
Url: https://www.pexels.com/photo/silhouette-photo-of-man-holding-guitar-1434625/

Name: musician2.jpg
Artist: RDNE Stock project
Url: https://www.pexels.com/photo/a-vocalist-holding-a-microphone-and-singing-7502208/

---

Tools:

Get color palette from an image:
https://coolors.co/image-picker

Dropdown Animation Guide (used list item #2)
https://blog.hubspot.com/website/drop-down-animation

---

Resources:

How to add an event listener to a whole document, excluding an element (and its children):
https://www.reddit.com/r/learnjavascript/comments/j1kh2e/closing_a_div_when_clicking_outside_of_it/