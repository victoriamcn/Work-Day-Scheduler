
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

  function timeColor() {
    //Gets Time: Accepts numbers from 0 to 23
    let currentTime = dayjs().hour();

    //Loop through each id
    $('.time-block').each(function () {
      //Grab the time-block div by the id
      let hourBlock = parseInt($(this).attr('id').split("hour-")[1]);

      //Conditional to assign or remove classes past/present/future
      if (hourBlock < currentTime) {
        //Set PAST
        $(this).addClass('past')
        //REMOVE PRESENT and FUTURE
        $(this).removeClass('present')
        $(this).removeClass('future')
      } else if (hourBlock > currentTime) {
        //REMOVE PAST and PRESENT
        $(this).removeClass('past')
        $(this).removeClass('present')
        //Set FUTURE
        $(this).addClass('future')
      } else {
        //REMOVE PAST and FUTURE
        $(this).removeClass('past')
        //Set PRESENT
        $(this).addClass('present')
        //REMOVE PAST and FUTURE
        $(this).removeClass('future')
      }
    })
  }

  //check localStorage to display data should the page reload
  function inCaseReload() {
    // loop
    $('.time-block').each(function () {
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
      //define current hour id by each ID
      let currentHourId = $(this).attr('id')
      let currentInput = localStorage.getItem(currentHourId)
      //conditional
      if (currentInput !== null) {
        $(this).children('.description').val(currentInput)
      }
    })
  }

  timeColor() //calling the timeColor function
  inCaseReload() //calling the inCaseReload function
}