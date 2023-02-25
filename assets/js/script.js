//Open application

//call to jQuery to ensure that the code isn't run
//until the browser has finished rendering all the elements in the html
$(window).load(workSchedule());
  
function workSchedule() {
  //Part 1: This code should  use the id in the containing time-block as a key to save the user input in local storage. 
      //HINT: What does `this` reference in the click listener function?
      //How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? 
      //How might the id be useful when saving the description in local storage?
  //check localStorage in each time block  to display should the page reload

  // 8am
  var hourEight = localStorage.getItem('hour-8')
  console.log(hourEight)
  $('#hour-8').parent() //search id of div that we want. parent traverse(). text add a value

  // 9am
  var hourEight = localStorage.getItem('hour-9')
  // 10am
  var hourEight = localStorage.getItem('hour-10')
  // 11am
  var hourEight = localStorage.getItem('hour-11')
  // 12pm
  var hourEight = localStorage.getItem('hour-12')
  // 1pm
  var hourEight = localStorage.getItem('hour-1')
  // 2pm
  var hourEight = localStorage.getItem('hour-2')
  // 3pm
  var hourEight = localStorage.getItem('hour-3')
  // 4pm
  var hourEight = localStorage.getItem('hour-4')
  // 5pm
  var hourEight = localStorage.getItem('hour-5')
  // 6pm
  var hourEight = localStorage.getItem('hour-6')

  // TODO: Add a listener for click events on the save button.
  $('.saveBtn').on( "click", function() {
    console.log("the click listener works")
    var hourId = $(this).parent().attr("id") //timeblock ID as each key
    var userTask = $(this).siblings("textarea").val();
    localStorage.setItem(hourId, userTask) 
    
    //if //localStorage.getItem
     //debugger
    //  var descriptionObj = $('.description');
    //  console.log(descriptionObj) //empty string for user input or is an array better since there may be more than one task?
     //var eachHour = $('.time-block') //how do I reference different ids?
     //$('.description').data("userTask", descriptionObj ); //save user input in local storage
     //for (let i=0; i < eachHour ; i++) { }
    
    //localStorage
      //use id.hour-i... dom traversal?
      //save textarea.description input
  })

  

  //Part 2:  TODO: Add code to apply the past, present, or future class to each time  block by comparing the id to the current hour. 
    //HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes?
    //How can Day.js be used to get the current hour in 24-hour time?
  //Hour Variables
  let currentTime = dayjs().hour()  // the current time;
  newDate = dayjs().hour(12) // returns new dayjs object
  // let past = dayjs().isBefore(currentTime);
  // let future = dayjs().isAfter(currentTime);

  //Conditional to assign past/present/future
  if (currentTime) {
    $('.time-block').addClass('.present')
  } else if (past) {
    $('.time-block').addClass('.past')
  } else {
    $('.time-block').addClass('.future')
  }

  // Part 3:  TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. 
    //HINT: How can the id attribute of each time-block be used to do this?



  //Current Day displayed in the Header
  var today = dayjs().format('[Today is] dddd, MMM D, YYYY');
  $('#currentDay').text(today)
};