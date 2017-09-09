### Frontend Nanodegree Project
___

# Resume Project

For this project I needed to bulid a resume that is dynamically constructed from javascript objects. The resume could contain real or fake data, but the data in the objects had to follow the provided schema exactly.

The HTML code needed to build the resume was stored in **helper.js** and the bulk of the work needed to build the resume was carried out in **resumeBuilder.js**. HTML code snippets needed to be manipulated with **Jquery** and then inserted into the resume in the appropriate locations.

This is a project from Udacity's **Frontend Nanodegree** [program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001).
___

### Resume
![Resume project screen shot](images/resume.jpg)
___


## Project / Minimum Specification
- **Must match the provided schema exactly for the bio, education, work and projects objects.**
- **The solution must be capable of displaying any resume that provides the data in the given schema.**
- **The solution must work for any number of items in arrays etc.**
- **All resume sections are built using modular functions that can run in any order.**
- **Code follows Udacity's [style guide](http://udacity.github.io/frontend-nanodegree-styleguide/).**
- **Each object has a property named display which encapsulates a function that displays the object's properties in the resume.**
- **Must include a Google map.**
___


## Solution

After constructing my objects and checking them with **jsHint**, I used javascript's **string.replace** method to manipulate the HTML code snippets stored in **helper.js**. The code was added to the resume using **Jquery's** append or prepend functions.

For the various arrays I used conditional statements to check for content and then used for loops to iterate over the content and add it to the resume. **Jquery's** selectors were used to grab the id to the various sections of the resume.

To customize the resume I adjusted the CSS to change the design, used custom fonts and used Bootstrap to make the layout responsive. I added a navigation bar and a smooth scroll script. Below the navigation I added some gauges that I adjusted from **Google charts** and for the **Google map** I added alternative styling.