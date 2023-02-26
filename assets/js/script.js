
//START WORKING CODE
//call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html
$(window).load(workSchedule());

function workSchedule() {
  //Current Day displayed in the Header
  var today = dayjs().format('[Today is] dddd, MMM D, YYYY');
  $('#currentDay').text(today)

  // Add a listener for click events on the save button.
  $('.saveBtn').on("click", function () {
    //console.log("the click listener works")   
    let hourId = $(this).parent().attr("id") //time block ID as each key
    let userTask = $(this).siblings("textarea").val(); //value set to textarea
    // set local storage key, value
    localStorage.setItem(hourId, userTask)
  })


  //check localStorage to display data should the page reload
  $(#08 .description).val(localStorage.getItem('08'));
  $(#09 .description).val(localStorage.getItem('09'));
  $(#10 .description).val(localStorage.getItem('10'));
  $(#11 .description).val(localStorage.getItem('11'));
  $(#12 .description).val(localStorage.getItem('12'));
  $(#01 .description).val(localStorage.getItem('01'));
  $(#02 .description).val(localStorage.getItem('02'));
  $(#03 .description).val(localStorage.getItem('03'));
  $(#04 .description).val(localStorage.getItem('04'));
  $(#05 .description).val(localStorage.getItem('05'));
  $(#06 .description).val(localStorage.getItem('06'));
  
  function timeTracker() {
    //Sets Time asHour Increments
    let currentTime = dayjs().hour()

    //Loop through each id
    $('.time-block').each(function () {

      //Grab the time-block div by the id
      let theHourEl = $(this).attr('id').split('hour')[1];

      //Conditional to assign past/present/future
      if (theHourEl < currentTime) {
        //Set PAST
        $(this).addClass('past')
        //REMOVE PRESENT and FUTURE
        $(this).removeClass('present')
        $(this).removeClass('future')
      } else if (theHourEl > currentTime) {
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
    })
  }
}