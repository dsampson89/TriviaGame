$('#start').on('click', function(){
   game.start();
})

var questions = [{
    question: "Which sports figure holds the record for appearing the most times on the cover of Sports Illustrated?",
    answers: ["Peyton Manning", "Micheal Jordan", "Tiger Woods", "Lebron James"],
    correctAnswer: "Micheal Jordan"
}, {
    question: "Who is the only man to play both an NFL game and a MLB game in a single day?",
    answers: ["Bo Jackson", "Barry Bonds", "Tim Tebow", "Deon Sanders"],
    correctAnswer: "Deon Sanders"
}, {
    question: "What is the most watched sport in the world?",
    answers: ["Baseball", "Basketball","Footabll(Soccer)","Football(American Football)"],
    correctAnswer: "Footabll(Soccer)"
}, {
    question: "Who holds the record in basketball for the most career rebounds?",
    answers: ["Dwight Howard", "Glen Robinson", "Wilt Chamberlain", "Shaquille O'Neal"],
    correctAnswer: "Wilt Chamberlain"
}, {
    question: "Who holds the record for the most home runs in a single season?",
    answers: ["Barry Bonds", "Mark Mcquire", "Hank Aaron", "Babe Ruth"],
    correctAnswer: "Barry Bonds"
}, {
    question: "Who holds the record for the most goals in the NHL?",
    answers: ["Sidney Crosby", "Wayne Gretzky", "Mario Lemieux", "Alex Ovechkin"],
    correctAnswer: "Wayne Gretzky"
}, {
    question: "Which sport awards the Ryder Cup?",
    answers: ["Golf", "American Football", "Cricket", "Racing"],
    correctAnswer: "Golf"
}, {
    question: "James Naismith is credited with inventing which sport?",
    answers: ["Baseball", "Golf", "Basketball", "Tennis"],
    correctAnswer: "Basketball"
}, {
    question: "Who has the most National Championships in college football?",
    answers: ["Baylor", "Miami[FL]", "Alabama", "Yale"],
    correctAnswer: "Yale"
}, {
    question: "Which city is holding the 2020 Olympics?",
    answers: ["Athens", "Tokyo", "Las Vegas", "Orlando"],
    correctAnswer: "Tokyo"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("Time is up!");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id= "counter">120</span> Seconds</h2>');
        $('#start').remove();
        for(var i=0;i<questions.length; i++){
        $('#subwrapper').append('<h2>'+questions[i].question+'</h2>');
        for(var j=0;j<questions[i].answers.length; j++){
            $('#subwrapper').append("<input type= 'radio' name= 'question-"+i+"' value='"+ questions[i].answers[j]+"'>"+ questions[i].answers[j])
            }
        }
    },
    done: function(){
        
        $.each($("input[name='question-0']:checked"),function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1]":checked'),function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2]":checked'),function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-3]":checked'),function(){
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-4]":checked'),function(){
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-5]":checked'),function(){
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-6]":checked'),function(){
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-7]":checked'),function(){
            if($(this).val()==questions[7].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-8]":checked'),function(){
            if($(this).val()==questions[8].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-9]":checked'),function(){
            if($(this).val()==questions[9].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
       this.result();

       
    },
    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();

        $('#subwrapper').html("<h2>Thats the end of the Game!!!");
        $('#subwrapper').append("<h3>Correct Answers:" +this.correct+"</h3>")
        $('#subwrapper').append("<h3>Incorrect Answers:" +this.incorrect+"</h3>")
        $('#subwrapper').append("<h3>Unanswered:"+(questions.length-(this.incorrect+this.correct))+"</h3>")
    }
}