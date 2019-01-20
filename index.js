/**
 * Period Helper Demo
 * Leah George, Disha Mevada, Keerthana Routhu, Sriya Lingampalli
 * CruzHacks 2019
 * 
 * Part of the structure of this program has been taken from another example Alexa skill provided by Amazon.
 */

var APP_ID = undefined; 

/**
 * Questions Alexa will ask user daily, will add more questions in the future regarding more categories 
 * found in apps like Flo or Clue.
 */
var QUESTIONS = [
    "Would you like to begin your daily menstrual health survey?",
    "Are you on your period?",
    "Describe your flow. Is it light, medium, or heavy?",
    "What is your mood like at the moment? For example, are you feeling happy, sad, or irritated?",
    "Do you feel any physical discomfort? Do you have any symptoms such as cramps, nausea, or headaches?",
    "Thank you for completing your daily survey. Would you like to exit?" 
];
var questionInd = 0;

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
 * This program is a child of AlexaSkill
 */
var Question = function () {
    AlexaSkill.call(this, APP_ID);
}

Question.prototype = Object.create(AlexaSkill.prototype);
Question.prototype.constructor = Question;

Question.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
};

Question.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    handleNewQuestionRequest(response);
};

Question.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
};

Question.prototype.intentHandlers = {
    "PeriodQ": function (intent, session, response) {
        handleNewQuestionRequest(response);
    },

    "FlowQ": function (intent, session, response) {
        handleNewQuestionRequest(response);
    },

    "MoodQ": function (intent, session, response) {
        handleNewQuestionRequest(response);
    },  

    "SymptomQ": function (intent, session, response) {
        handleNewQuestionRequest(response);
    },
    
    "ExitQ" : function (intent, session, response) {
        handleNewQuestionRequest(response);
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

// Output next question for user from QUESTIONS
function handleNewQuestionRequest(response) {
    var speechOutput = QUESTIONS[questionInd];
    questionInd++;
    var cardTitle = "Your Question";
    response.askWithCard(speechOutput, speechOutput, cardTitle, speechOutput);
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Makes an instance of the Period Helper skill
    var question = new Question();
    question.execute(event, context);
};
