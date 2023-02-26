//Sets Time asHour Increments
let currentTime = dayjs().hour()
//START WORKING CODE
//call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html
$(window).load(workSchedule());

function workSchedule() {
  // Add a listener for click events on the save button.
  $('.saveBtn').on("click", function (e) {
    //console.log("the click listener works")
    preventDefault(e);
    // set local storage key, value
    let hourId = $(this).parent().attr("id") //time block ID as each key
    let userTask = $(this).siblings("textarea").val();
    localStorage.setItem(hourId, userTask)   
  })

  //Function to apply the past, present, or future class by comparing the id to the current hour. 

  //loop through each time block// for (let i = 0; i < $('textarea').length; i++) {}
  // //Grab Element by Id
  // let getId = $('textarea')[i].attr('id')
  //Remove Other Time Classes
  // $('textarea').attr('id').removeClass('.present .past .future');

  //Loop through each id
  $('.time-block').each(function () {
    //Grab the time-block div by the id
    // debugger
    let theHour = $(this).attr('id');

    //Conditional to assign past/present/future
    if (theHour < currentTime) {
      //Set PAST
      $(this).addClass('past')
      //REMOVE PRESENT and FUTURE
      $(this).removeClass('present')
      $(this).removeClass('future')
    } else if (theHour > currentTime) {
      //Set FUTURE
      $(this).addClass('future')
      //REMOVE PAST and PRESENT
      $(this).removeClass('present')
      $(this).removeClass('past')
    } else {
      //Set PRESENT
      $(this).addClass('present')
      //REMOVE PAST and FUTURE
      $(this).removeClass('past')
      $(this).removeClass('future')
    }
    //Check the Time every Minute
    setInterval(1000 * 60);
  })

  //check localStorage in each time block to display
  //HINT: How can the id attribute of each time-block be used to do this?
  //  should the page reload
  function display() {
    //Get key from localStorage
    let savedUserInput = localStorage.getItem(hourId);
    //Set the value 
    $('.description').parent().attr("id").val() = savedUserInput;
    $('.description').textContent = savedUserInput;
  }

display();

  // $('schedulecontatiner').on("load", function () {
  //   // 8am
  //   var hourEight = localStorage.getItem('hour-8') / console.log(hourEight)
  //   $('hour-8').child("textarea").innerHTML(hourEight) //search id of div that we want. parent traverse(). text add a value



  //Current Day displayed in the Header
  var today = dayjs().format('[Today is] dddd, MMM D, YYYY');
  $('#currentDay').text(today)
}