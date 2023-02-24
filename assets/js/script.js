//call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
$(window).load(function () {

  // TODO: Add a listener for click events on the save button.
  // This code should  use the id in the containing time-block as a key to save the user input in local storage. 
      //HINT: What does `this` reference in the click listener function?
      //How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? 
      //How might the id be useful when saving the description in local storage?

  // TODO: Add code to apply the past, present, or future class to each time  block by comparing the id to the current hour. 
      //HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes?
      //How can Day.js be used to get the current hour in 24-hour time?

  let currentTime = dayjs().hour()  // the current time;
  newDate = dayjs().hour(12) // returns new dayjs object

  let past = dayjs().isBefore(currentTime); //less than currentHour;
  let future = dayjs().isAfter(currentTime); //greater than currentHour;

  //Conditional to assign past/present/future
  if (currentTime) {
      $('.time-block').addClass('.present')
    } else if (past) {
      $('.time-block').addClass('.past')
    } else {
      $('.time-block').addClass('.future')
  }





  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. 
      //HINT: How can the id attribute of each time-block be used to do this?



  //Current Day displayed in the Header
  var today = dayjs().format('[Today is] dddd, MMM D, YYYY');
  $('#currentDay').text(today)
});


//Open application


  //array of time set in a range base on a work day
  // let dayHours = Array.from()


  //function
  // past colored based on current time of day
  // present colored based on current time of day
  // future colored based on current time of day

  //Event
  //when clicking into time block, type event
  //click save to save into local storage

  //refresh page, saved events still present
