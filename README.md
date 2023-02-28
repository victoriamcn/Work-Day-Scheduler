# Work Day Scheduler

## Description

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Day.js](https://day.js.org/en/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Day.js in the browser.

## Table of Contents
1. [Preview](#preview)
2. [Deployed Application](#deployed-application)
3. [Features](#features)
4. [User Story](#user-story)
5. [Acceptance Criteria](#acceptance-criteria)
6. [License](#license)
7. [Credits](#credits)

## Preview
![Picture of a color-coded calendar.](/assets/image/workdayschedprev.png)

## Deployed Application

https://victoriamcn.github.io/Work-Day-Scheduler/

## Features
1. Each hour block is color-coded based on the hour of the day.
2. Each time block reloads, the saved events remain on the page.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## License

Please review in license folder.

## Credits

**Special thanks to:**
- My instructor at Georgia Tech Coding Bootcamp, [Saurav Khatiwada
](https://github.com/khatiwadasaurav)
- My tutor, Juan Delgado.

**APIs**
- [jQuery](https://jquery.com/)
- [day.js](https://day.js.org/en/)
- [Bootstrap](https://getbootstrap.com/)
- [Google Fonts: Open Sans](https://fonts.google.com/specimen/Open+Sans?query=open+sans)
- [FontAwesome: Icons](https://fontawesome.com/)

**Tutorials**
- [Geeks for Geeks: How to Add or Remove Class in jQuery](https://www.geeksforgeeks.org/how-to-add-or-remove-class-in-jquery/)
- [Digital Ocean: How To Modify Attributes Classes and Styles in the DOM](https://www.digitalocean.com/community/tutorials/how-to-modify-attributes-classes-and-styles-in-the-dom)
- [StackOverFlow: How Can I change Elements Style Based on the Time of Day?](https://stackoverflow.com/questions/62462599/how-can-i-change-elements-style-based-on-the-time-of-day)
- [W3Schools: split() method](https://www.w3schools.com/jsref/jsref_split.asp#:~:text=The%20split()%20method%20splits,string%20is%20split%20between%20words.)

**Inspiration**
- [Midnights Inspired Color Scheme](https://theswiftiest.com/features/heres-a-color-palette-for-the-midnights-era/)
- [Jude Bloom](https://codepen.io/judebloom/pen/RwGbVWB?editors=0010): This codePen example helped me visualize how I needed to write my JS code.

