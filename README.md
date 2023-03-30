# todo-list

Personal project putting into practice all that I have learned so far.

Here is a list of all of the skills that I put into practice for the making of this project:

1.  Designing and planning
2.  CSS: Flex, Grid, CSS variables
3.  JavaScript: Organizing code into modules, factory functions, module pattern, functions, importing and exporting functions, dom manipulation local memory storage
4.  Object Oriented Programming principles: Single Responsibility Principle (Give functions/methods/classes/components a single purpose), avoid tightly coupled objects ad much as possible
5.  Git and GitHub
6.  npm and webpack: download and use dependencies (webpack and webpack-cli, and this time a new dependency called date-fns)

This was a long and tedious project that took a lot of time and effort. Here is a list of steps that I took to complete this project:

1. Design web application on sheets of paper
2. Set up git, files, npm and webpack
3. Write up pseudo-code
4. Download assets
5. Display basic format of web application using hard coded html and css
6. Expand on pseudo-code
7. Move away from hard coded html once functions for manipulating the dom are fleshed out
8. Work on logic functions and controlling of the flow through index.js
9. Build local storage logic

Future potential improvements:

1. Dark-mode: Because this project is taking much longer than anticipated, I decided to make a note to improve on this feature in the future. The change theme button works, however, dark mode doesn't look exactly the way I want it to. I would like to change the color of my assets to white, which would require me to download white versions of the pngs. Additionally, the theme does not get stored into local memory. I would like to change this in the future.

2. Improve upon local storage: I ended up using a solution that involves removing all local storage, then adding all tasks and task categories that are found in the sessions' arrays to local storage. This can definitely be improved upon, and I make a more detailed note of that below.

Some notes of importance:

1. I had to backtrack regarding the local storage functionality

Here is a note that describes this that was added to one of my commits:

Now when the user refreshes the application, the tasks and task
categories that were created or completed/deleted remain so. This is
because I added a function to iterate through all task categories and
tasks, take their essential primitive data types, make objects out of
them, and strigify and store them in local storage. I also created
functions to get these locally stored objects, re-create the task and
task category objects by passing the primitive elements from the locally
stored objects into the appropriate factory functions, and place them in
the appropriate arrays.

The original direction I went with was to add individual tasks and task
categories to local storage when they were created, and remove them from
local storage individually when they were completed/deleted. The problem
with this was that each task in local storage is linked to its
respective task category based on the position inside the task category
library array that the task category takes. If a task category filled
with tasks gets deleted, the task categories in local storage need to
change their position depending on if there were any task categories
positioned after the deleted one. But the most challenging aspect of
this are the tasks themselves. There are unfortunately too many cases
that require many functions to properly manage the recorded positioning
of these tasks depending on changes that the user makes. A better
solution would be to link tasks to task categories through the name of
the task category, but this would require me to not allow the same task
category names multiple times. This could be a future potential.

**_ March 30 2023 update _**
Because I was having issues with local storage through my projects
github pages url, I needed to look for a solution. I learned that the
names of my localstorage keys have generic names and therefore may be
colliding with keys used by other scripts or applications running on the
same domain as my Github pages site. The unique prefix I am now using
for my keys is "todoListApp".
