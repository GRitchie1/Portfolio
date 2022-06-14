# Portfolio Website

This portfolio website was created from scratch in React and aims to document a number of past and current projects, and provide links to the relevant GitHub repositories.  This website will be constantly undergoing further development and any constructive feedback is welcome. Feel free to add any feedback/issues in the Issues tab of this repository.

This site is hosted using GitHub Pages and can be viewed [here](https://gregor-ritchie.co.uk/).


## Colour Pallette
The colour pallette for this website is the following:
- Dark Grey: #262626
- Second Grey: #3f3f3f
- White: #f5f5f5
- Red: #7a0b12

## Projects 
The projects section of this website displays some current and past projects and experiments that have been undertaken.  The projects section utilises a "Project" React component which handles the display of the image, text and Read More button.  

There is a Load More button in place to allow users to load more projects from the list.  The number of projects shown at a time is controlled by the pageSize variable and the loadNumber variable.

The pageSize variable is set in the code, and determines how many projects are loaded per "page".  The loadNumber variable is incremented each time the Load More button is pressed.  The number of projects displayed is equal to the pageSize multiplied by the loadNumber.  If the number of projects to show is greater than or equal to the number of projects in the projects list, the Load More button is not displayed.
