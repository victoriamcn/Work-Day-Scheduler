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
    let hourId = $(this).parent().attr("id") //time block ID as each key
    let userTask = $(this).siblings("textarea").val();
    localStorage.setItem(hourId, userTask)
  })

  //Part 2:  TODO: Add code to apply the past, present, or future class to each time  block by comparing the id to the current hour. 
  //HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes?
  //How can Day.js be used to get the current hour in 24-hour time?

  //loop through each time block// for (let i = 0; i < $('textarea').length; i++) {}
  // //Grab Element by Id
  // let getId = $('textarea')[i].attr('id')
  //Remove Other Time Classes
  // $('textarea').attr('id').removeClass('.present .past .future');

  //.forEach through each id
  $('.time-block').each(function () {
    //Id Parsed the Value of Input
    let theHour = $(this).attr('id');
    //Conditional to assign past/present/future
    if (theHour < currentTime) {
      //Set PAST
      $(this).addClass('past')
      //REMOVE PRESENT and FUTURE
      $(this).removeClass('present future')
    } else if (theHour > currentTime) {
      //Set FUTURE
      $(this).addClass('future')
      //REMOVE PAST and PRESENT
      $(this).removeClass('present past')
    } else {
      //Set PRESENT
      $(this).addClass('present')
      //REMOVE PAST and FUTURE
      $(this).removeClass('past future')
    }
    //Check the Time every Minute
    setInterval(1000 * 60);
  })
  // let now =dayjs().hour()
  // let past = dayjs().isBefore('now', 'hour');
  // let future = dayjs().isAfter('now', 'hour');

  // if (now) {
  //   $(this).addClass('.present')
  // } else if (past) {
  //   $(this).removeClass('.present').addClass('.past')
  // } else {
  //   $(this).removeClass('.present').addClass('.future')
  // }


  // Part 3:  TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. 
  //HINT: How can the id attribute of each time-block be used to do this?

  // var savedInput = $("timeblock").child("textarea").attr("id");
  // savedInput.value = localStorage.getItem(hourId)

  // let cancel;
  // savedInput.addEventListener("keyup", event => {
  //   if (cancel) clearTimeout(cancel)
  //   cancel = setTimeout(() => {
  //     localStorage.setItem("notes", event.target.value)
  //   }, 1000)
  // })
  //check localStorage in each time block  to display should the page reload
  // $('schedulecontatiner').on( "load", function() {
  // // 8am
  // var hourEight = localStorage.getItem('hour-8') /  console.log(hourEight)
  // $('hour-8').child("textarea").innerHTML(hourEight) //search id of div that we want. parent traverse(). text add a value



  //Current Day displayed in the Header
  var today = dayjs().format('[Today is] dddd, MMM D, YYYY');
  $('#currentDay').text(today)
};