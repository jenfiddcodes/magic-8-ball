//this lets DOM know jquery is at work!
$(document).ready(function(){

var magic8Ball={};
magic8Ball.listAnswers = ["most likely", "don't count on it", "definitely", "looking good", "concentrate and ask again"];
$("#answer").hide();

magic8Ball.askQuestion= function (question){
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	 $("#8ball").effect("shake");
	$("#answer").fadeIn(4000);
	var randomNumber = Math.random();
	var randomArray = randomNumber * this.listAnswers.length;
	var randomIndex = Math.floor(randomArray);
	var randomAnswer = this.listAnswers[randomIndex];
	console.log(question);
	$("#answer").text(randomAnswer);
	//console.log(randomAnswer);
};

var onClick = function(){
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	//wait half a second before showing prompt
   setTimeout(
       function() {
           //show prompt
           var question = prompt("Ask a yes or no question")
           magic8Ball.askQuestion(question)
       }, 500);
};
$("#questionButton").click(onClick);
});
