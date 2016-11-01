function Ticket(movie, time, age, price) {
  this.movie = movie;
  this.time = time;
  this.age = age
  this.price = price;
}

Ticket.prototype.userTicketInfo = function() {
  return ("You just bought a ticket for " + this.movie + " at " + this.time + ".") + ("\nYour info: \n"  + " age: " + this.age + " Price: " + this.price);
}

function ticketPrice(showTime, userAge) {
   var price;
   if(showTime <= 3) {
     price = "$5.00";
   } else if (userAge === 3 && showTime > 3){
     price = "$7.00";
   } else {
     price = "$10.00";
   }
   return price;
 };

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var movieTitle = $("#movie").val();
    var movieTime = parseInt($("#time").val());
    var age = parseInt($("#age").val());
    var price = ticketPrice(movieTime, age);
    var movieTimeText = $("#time option:selected").text();
    var ageText = $("#age option:selected").text();

    var newTicket = new Ticket(movieTitle, movieTimeText, ageText, price);

    $("#ticketOutput").text(newTicket.userTicketInfo());
  });
});
