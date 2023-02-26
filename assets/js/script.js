
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
  function inCaseReload() {
    // loop
    $('.hour').each(function (){
      //define
      let currentHour = (this).text();
      let currentInput = localStorage.getItem(currentHour)
      //conditional
      if (currentInput !== null) {
        $(this).siblings('.description').val(currentInput)
      }
    })
  }

  // $(#hour-08 .description).val(localStorage.getItem('hour-08'));
  // $(#hour-09 .description).val(localStorage.getItem('hour-09'));
  // $(#hour-10 .description).val(localStorage.getItem('hour-10'));
  // $(#hour-11 .description).val(localStorage.getItem('hour-11'));
  // $(#hour-12 .description).val(localStorage.getItem('hour-12'));
  // $(#hour-13 .description).val(localStorage.getItem('hour-13'));
  // $(#hour-14 .description).val(localStorage.getItem('hour-14'));
  // $(#hour-15 .description).val(localStorage.getItem('hour-15'));
  // $(#hour-16 .description).val(localStorage.getItem('hour-16'));
  // $(#hour-17 .description).val(localStorage.getItem('hour-17'));
  // $(#hour-18 .description).val(localStorage.getItem('hour-18'));

  function timeColor() {
    //Gets Time Accepts numbers from 0 to 23
    let currentTime = dayjs().hour()

    //Loop through each id
    $('.time-block').each(function () {

      //Grab the time-block div by the id
      let theHourEl = parseInt($(this).attr('id'));

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
  function timeColor() //calling the timeColor function
  function inCaseReload() //calling the inCaseReload function
}