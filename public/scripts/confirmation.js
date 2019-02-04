$(document).ready(function() {

  //Extracting reference number from confirmation page

 let data = $('#ref_no').text();
 
  //Create a set interval function that fires an ajax request every 5 seconds

  var intervalID = window.setInterval(ajaxRequest, 5000);

  function ajaxRequest() {
    console.log("ajax get request client side");
    $.ajax(
      {  
        type:'GET',
        url:`/restaurants/ready/${data}`,
        data: {ref_no: data},

        success: function(response){
          let ready_time = response.ready_time;
          //If ready time exists
          if(ready_time !== null){
            // //Append to page
            // let readyTimer = $("<div></div>").text(ready_time);
            // $('h4').append(readyTimer);

            //Start timer
            // Set the date we're counting down to
            var countDownDate = new Date(ready_time).getTime();
            console.log(countDownDate);
            // Update the count down every 1 second
            var x = setInterval(function() {
                // Get todays date and time
                var now = new Date().getTime();
                console.log(now);

                // Find the distance between now and the count down date
                var distance = countDownDate - now;
                console.log(distance);

                // Time calculations for days, hours, minutes and seconds
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Display the result in the element with id="demo"
                document.getElementById("demo").innerHTML = hours + "h "
                + minutes + "m " + seconds + "s ";
                // If the count down is finished, write some text 
                if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "Your order is ready";
                }
            }, 1000);
            //Break out of the interval
            clearInterval(intervalID);
          }
        }
      }
    )
  }
});