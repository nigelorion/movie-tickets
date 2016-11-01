function Ticket(movie, time, price) {
  this.movie = movie;
  this.time = time;
  this.age = age
  this.price = price;
}

Ticket.prototype.userTicketInfo = function() {
  return ("You have selected " + this.movie + "." "Your movie will begin at " + this.time "." "The total cost for this movie is " + this.price ".");
}

 function ticketPrice(userAge, reducedPrice) {
   if(userAge <)

 }



$(document)ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var movieTitle = $("#movie").val();
    var movieTime = parseInt($("#time").val());
    var age = parseInt($("#age").val());
    var price = ticketPrice(age, movieTime);

    var newTicket = new Ticket(movieTitle, movieTime,)




  };
});
