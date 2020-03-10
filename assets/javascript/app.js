var questionslist = {};
var trivia = {};

var questions;
var answers = ["B", "D", "A", "B", "D", "A", "B", "D"];

var intervalID;


timer = {

    time: 120,

    start: function () {
        $("#timer-display").text("02:00");
        intervalID = setInterval(timer.countdown, 1000);
    },

    countdown: function () {
        
        timer.time--;
        let currentTime = timer.timeConverter(timer.time);
        
        $("#timer-display").text(currentTime);

        if (timer.time === 0) {
            $("#timer-display").text("Time's Up!");
            clearInterval(intervalID);
            $(".done, .question-block").hide();
            
            score();
            $(".results, .reset").show();
        } else {

        }
    },

    reset: function () {
        timer.time = 120;
        $("#timer-display").text("02:00");
        clearInterval(intervalID);
        
    },

    timeConverter: function (t) {
        let minutes = Math.floor(t / 60);
        let seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }

        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    },


};



function startTrivia() {
    questionslist = resetQuestions();
    trivia = resetTrivia();

    showQuestions();

}

function resetTrivia() {
    return {
        correct: 0,
        incorrect: 0,
        blank: 0,
    }
}

function resetQuestions() {
    return {
        q0: {
            question: "Which sports figure holds the record for appearing the most times on the cover of Sports Illustrated?",
            A: "Peyton Manning",
            B: "Micheal Jordan",
            C: "Tiger Woods",
            D: "Lebron James",
        },
        q1: {
            question: "Who is the only man to play both an NFL game and a MLB game in a single day?",
            A: "Bo Jackson",
            B: "Barry Bonds",
            C: "Tim Tebow",
            D: "Deon Sanders",
        },
        q2: {
            question: "What is the most watched sport in the world?",
            A: "Footabll(Soccer)",
            B: "Baseball",
            C: "Basketball",
            D: "Football(American)",
        },
        q3: {
            question: "Who holds the record in basketball for the most career rebounds?",
            A: "Dwight Howard",
            B: "Wilt Chamberlainr",
            C: "Glen Robinson",
            D: "Shaquille O'Neal",
        },
        q4: {
            question: "Who holds the record for the most home runs in a single season?",
            A: "Mark Mcquire",
            B: "Babe Ruth",
            C: "Hank Aaron",
            D: "Barry Bonds",
        },
        q5: {
            question: "Who holds the record for the most goals in the NHL?",
            A: "Wayne Gretzky",
            B: "Mario Lemieux",
            C: "Sidney Crosby",
            D: "Alex Ovechkin",
        },
        q6: {
            question: "Who has the most National Championships in college football?",
            A: "Baylor",
            B: "Yale",
            C: "Miami[FL]",
            D: "Alabama",
        },
        q7: {
            question: "Which sport awards the Ryder Cup?",
            A: "Cricket",
            B: "American Football",
            C: "Racing",
            D: "Golf",
        }
    }
}

function showQuestions() {
    questions = Object.keys(questionslist);
    for (var i = 0; i < questions.length; i++) {
        var questiontitle = questions[i];
        var question = questionslist[questiontitle];
        var questionblocks = createQuestions(question, questiontitle);
        $(".question-block").append(questionblocks).show();
    }
}

function createQuestions(question, key) {
    var block = $("<div class='question' name='" + key + "'>" + question.question + "" +
        "<ol type= 'A'>" +
        "<li><input type='radio' name='" + key + "' value='A'><label>" + question.A + "</label></li>" +
        "<li><input type='radio' name='" + key + "' value='B'><label>" + question.B + "</label></li>" +
        "<li><input type='radio' name='" + key + "' value='C'><label>" + question.C + "</label></li>" +
        "<li><input type='radio' name='" + key + "' value='D'><label>" + question.D + "</label></li>" +
        "</ol>");

    return block;
}

function score() {
    
    let playeranswers = [$("input:radio[name='q0']:checked").val(),
        $("input:radio[name='q1']:checked").val(),
        $("input:radio[name='q2']:checked").val(),
        $("input:radio[name='q3']:checked").val(),
        $("input:radio[name='q4']:checked").val(),
        $("input:radio[name='q5']:checked").val(),
        $("input:radio[name='q6']:checked").val(),
        $("input:radio[name='q7']:checked").val()];

    console.log(playeranswers);
    console.log(answers);

    for (k = 0; k < questions.length; k++) {
        if (playeranswers[k] === undefined) {
            trivia.blank++;
        } else if (playeranswers[k] === answers[k]) {
            trivia.correct++;
        } else {
            trivia.incorrect++;
        }

    }

    $("#correct").text("Correct: " + trivia.correct);
    $("#incorrect").text("Incorrect: " + trivia.incorrect);
    $("#unanswered").text("Unanswered: " + trivia.blank);

    console.log(trivia.correct);
    console.log(trivia.incorrect);
    console.log(trivia.blank);
}


$(document).ready(function () {

    $(".start").on("click", function () {
        $(".start").hide();
        startTrivia();
        timer.start();
        $(".done").show();

    });

    $(".done").on("click", function () {
        score();
        $(".done, .question-block").hide();
        timer.reset();
        $(".results, .reset").show();
    });

    $(".reset").on("click", function () {
        $(".question-block").empty();
        $(".start").show();
        $(".reset, .results").hide();
        timer.reset();
    });
});