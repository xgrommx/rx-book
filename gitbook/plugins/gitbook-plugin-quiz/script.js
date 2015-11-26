require(["jquery", "lodash", "gitbook"], function($, _, gitbook) {
  var configuration = {"labels": {}, text: {}, "buttons": {"showCorrect": true, "showExplanation": true}};
  var isStarted = false;
  /**
   * Enumeration for default labels and text
   * @type {Object}
   */
  var LABELS_AND_TEXT_ENUM = {
    "labels": {
      "showCorrect"       : "Show correct answers",
      "check"             : "Check",
      "showExplanation"   : "Show explanation",
      "explanationHeader" : ""
    },
    "text": {
      "noChosen"    : "No answer is chosen",
      "incomplete"  : "Some correct answers missing",
      "rightAnswer" : "Right answer!",
      "wrongAnswer" : "Wrong answer!"
    }
  };
  /**
   * ENumeration for button actions
   *
   * @type {{CHECK: string, EXPLAIN: string, SHOW: string}}
   */
  var BUTTON_ACTIONS_ENUM = {
    CHECK   : "check",
    EXPLAIN : "explain",
    SHOW    : "show"
  };
  /**
   * Generates random string of given length
   *
   * @param {Number} [length]
   * @returns {string}
   */
  function randomString(length) {
    var CHARS;

    if (length === undefined) {
      length = 20;
    }
    CHARS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = "";
    for (var i = length; i > 0; --i) {
      result += CHARS[Math.round(Math.random() * (CHARS.length - 1))];
    }
    return result;
  }

  /**
   * Template for the whole question
   *
   * @param {jQuery} $el
   * @returns {String}
   */
  var questionTemplate = function ($el) {
    var html, question, multiple, $answers, $explanation, name, withExplanation;

    html = "";

    question = $el.find("p").first().html();
    multiple = _.isString($el.attr("multiple"));
    $answers = $el.find("answer");
    $explanation = $el.find("explanation");

    html += "<div class=\"quiz-question\">";
    html += "<p class=\"quiz-question-text\">" + question + "</p>";

    name = randomString();
    $answers.each(function () {
      var $answer;

      $answer = $(this);
      html += answerTemplate($answer, multiple, name);
    });
    withExplanation = $explanation.length > 0 && configuration.buttons.showExplanation === true;
    html += withExplanation ? explanationTemplate($explanation.html()) : "";
    html += messageTemplate();
    html += checkButtonTemplate(withExplanation);
    html += "</div>";
    return html;
  };
  /**
   * Generates html string for the check button
   *
   * @param {Boolean} withExplanation
   * @returns {String}
   */
  var checkButtonTemplate = function (withExplanation) {
    var checkButton, showExplanationButton, showCorrectAnswers, html;

    html = "";

    checkButton = "<span class=\"btn show-label quiz-question-check\" data-action=\"check\">"   +
    configuration.labels.check                                                  +
    "</span>";
    showExplanationButton =  "<span class=\"btn show-label quiz-question-show-explanation\" data-action=\"explain\">" +
    configuration.labels.showExplanation                                                              +
    "</span>";
    showCorrectAnswers =  "<span class=\"btn show-label quiz-question-show-correct\" data-action=\"show\">" +
    configuration.labels.showCorrect                                                +
    "</span>";

    html += "<div class=\"buttons\">"                                                         +
    checkButton                                                                               +
    (configuration.buttons.showExplanation && withExplanation ? showExplanationButton : "")   +
    (configuration.buttons.showCorrect ? showCorrectAnswers : "")                             +
    "</div>";

    return html;
  };
  /**
   * Generates html string for the answer
   *
   * @param {jQuery} $el
   * @param {Boolean} multiple
   * @param {String} name
   * @returns {String}
   */
  var answerTemplate = function ($el, multiple, name) {
    var correct, text, html;

    correct = _.isString($el.attr("correct"));
    text = $el.text();
    html = $el.html();

    if (multiple) {
      return "<div class=\"quiz-answer\">" +
        "<input data-correct=" + correct + " name=\"" + name + "\" type=\"checkbox\" value=\"" + text + "\">" + html +
        "<span class=\"quiz-answer-check\"></span>" +
        "</div>";
    } else {
      return "<div class=\"quiz-answer\">" +
        "<input data-correct=" + correct + " name=\"" + name + "\" type=\"radio\" value=\"" + text + "\">" + html +
        "<span class=\"quiz-answer-check\"></span>" +
        "</div>";
    }
  };
  /**
   * Generates html string for the message for explanation
   *
   * @param {String} text
   */
  var explanationTemplate = function (text) {
    return "<div class=\"quiz-question-explanation hidden\">" +
      (configuration.labels.explanationHeader && configuration.labels.explanationHeader.length > 0 ?
      "<div class=\"quiz-question-explanation-header\">" + configuration.labels.explanationHeader + "</div>" : "")    +
      text +
      "</div>";
  };
  /**
   * Generates html string for the message for the answer
   */
  var messageTemplate = function () {
    return "<div class=\"quiz-question-message hidden\"></div>";
  };
  /**
   * Analyzes answers to questions and takes action
   *
   * @param {jQuery} $question the question element to analyze
   * @param {Number} numberOfCorrect the number of correct answers
   * @param {Number} totalNumberOfAnswers total number of existing answers to question
   * @param {jQuery} $correctChecked correct answers checked
   * @param {jQuery} $incorrectChecked incorrect answers checked
   */
  var analyseAnswers = function ($question, numberOfCorrect, totalNumberOfAnswers, $correctChecked, $incorrectChecked) {
    var numberIncorrectChecked, numberCorrectChecked;

    numberCorrectChecked = $correctChecked.length;
    numberIncorrectChecked = $incorrectChecked.length;

    //no selected
    if (numberCorrectChecked === 0 && numberIncorrectChecked === 0) {
      noAnswerChecked($question);
      return;
    }
    //mark answers
    markAnswersAsCorrectOrIncorrect($correctChecked, $incorrectChecked);
    //if incomplete
    if ($correctChecked.length < numberOfCorrect && $incorrectChecked.length === 0) {
      handleIncomplete($question);
      return;
    }
    //if correct
    if ($correctChecked.length === numberOfCorrect && $incorrectChecked.length === 0) {
      showExplanation($question);
      return;
    }
    ////if there are incorrect
    //if ($incorrectChecked.length > 0) {
    //  handleIncorrect($question);
    //  return;
    //}
  };
  /**
   * Handles correct state of the question
   *
   * @param {jQuery} $question
   */
  var handleCorrect = function ($question) {
    var $message, $explanation;

    $message = getMessageElement($question);
    $explanation = getExplanationElement($question);
    $message.text(configuration.text.rightAnswer).removeClass("hidden");
    $explanation.removeClass("hidden");
  };
  /**
   * Handles incorrect state of the question
   *
   * @param {jQuery} $question
   */
  var handleIncorrect = function ($question) {
    var $message;

    $message = getMessageElement($question);
    $message.text(configuration.text.wrongAnswer).removeClass("hidden");
  };
  /**
   * Handles incorrect state of the question
   *
   * @param {jQuery} $question
   */
  var handleIncomplete = function ($question) {
    var $message;

    $message = getMessageElement($question);
    $message.text(configuration.text.incomplete).removeClass("hidden").addClass("error");
  };
  /**
   * Action to take when no answer is checked in the question
   *
   * @param {jQuery} $question
   */
  var noAnswerChecked = function ($question) {
    var $message;

    $message = $question.find(".quiz-question-message");
    $message.show().text(configuration.text.noChosen).addClass("error");
  };
  /**
   * Marks answers with corresponding classes
   *
   * @param {jQuery} $correctChecked
   * @param {jQuery} [$incorrectChecked]
   */
  var markAnswersAsCorrectOrIncorrect = function ($correctChecked, $incorrectChecked) {
    $correctChecked.each(function () {
      $(this).parent().find(".quiz-answer-check").addClass("correct");
    });
    if ($incorrectChecked) {
      $incorrectChecked.each(function () {
        $(this).parent().find(".quiz-answer-check").addClass("incorrect");
      });
    }
  };
  /**
   * Returns all answers elements of the question
   *
   * @param {jQuery} $question
   * @returns {jQuery}
   */
  var getAllAnswersElements = function ($question) {
    return $question.find(".quiz-answer");
  };
  /**
   * Returns message element of the question
   *
   * @param {jQuery} $question
   * @returns {jQuery}
   */
  var getMessageElement = function ($question) {
    return $question.find(".quiz-question-message");
  };
  /**
   * Returns explanation element of the question
   *
   * @param {jQuery} $question
   * @returns {jQuery}
   */
  var getExplanationElement = function ($question) {
    return $question.find(".quiz-question-explanation");
  };
  /**
   * Clears question state - clears messages and correct/incorrect states
   *
   * @param {jQuery} $question question element to clear
   */
  var clearQuestionState = function ($question) {
    var $answers, $message, $explanation;

    $answers = getAllAnswersElements($question);
    $message = getMessageElement($question);
    $explanation = getExplanationElement($question);
    $answers.each(function () {
      $(this).find(".quiz-answer-check").removeClass("correct").removeClass("incorrect");
    });
    $message.text("").addClass("hidden");
    $explanation.addClass("hidden");
  };
  /**
   * Handles click on all buttons
   * @param {Event} ev
   */
  var onClickButton = function (ev) {
    var $target, $question, action;

    ev.preventDefault();
    ev.stopPropagation();
    $target = $(ev.currentTarget);
    $question = $target.closest(".quiz-question");
    action = $target.data("action");

    switch (action) {
      case BUTTON_ACTIONS_ENUM.CHECK:
        clearQuestionState($question);
        checkAnswers($question);
        break;
      case BUTTON_ACTIONS_ENUM.EXPLAIN:
        showExplanation($question);
        break;
      case BUTTON_ACTIONS_ENUM.SHOW:
        clearQuestionState($question);
        showCorrect($question);
        break;
      default:
        checkAnswers($question);
    }
  };
  /**
   * Shows an explanation
   *
   * @param {jQuery} $question
   */
  var showExplanation = function ($question) {
    var $explanation;

    $explanation = getExplanationElement($question);
    $explanation.removeClass("hidden");
  };
  /**
   * Shows correct answers
   *
   * @param {jQuery} $question
   */
  var showCorrect = function ($question) {
    var $correct;

    $correct = $question.find(".quiz-answer input[data-correct=true]");
    $correct.prop("checked", true);
    markAnswersAsCorrectOrIncorrect($correct);
  };
  /**
   * Handles check button click
   */
  var checkAnswers = function ($question) {
    var numberOfCorrect, totalNumberOfAnswers, $incorrectChecked, $correctChecked;

    numberOfCorrect = $question.find(".quiz-answer input[data-correct=true]").length;
    totalNumberOfAnswers = $question.find(".quiz-answer").length;
    $correctChecked = $question.find(".quiz-answer input[data-correct=true]:checked");
    $incorrectChecked = $question.find(".quiz-answer input[data-correct=false]:checked");

    analyseAnswers($question, numberOfCorrect, totalNumberOfAnswers, $correctChecked, $incorrectChecked);
  };
  /**
   * Transforms quiz element into appropriate markup
   *
   * @param {jQuery} $quiz
   */
  var prepareQuiz = function ($quiz) {
    var name, $questions, html;

    if ($quiz.data("prepared")) {
      return;
    }
    // Create HTML for the quiz
    html = "";
    name = $quiz.prop("name") || $quiz.attr("name") || "";
    $questions = $quiz.find("question");

    html += "<div class=\"quiz\">";
    html += "<div class=\"quiz-name\">" + name + "</div>";
    $questions.each(function () {
      html += questionTemplate($(this));
    });
    html += "</div>";
    $quiz.html(html);
    $quiz.data("prepared", true);
    // Assign events
    $quiz.find(".buttons .btn").click(onClickButton);
  };
  /**
   * Starting point
   */
  var init = function () {
    if (!isStarted) {
      return;
    }
    $("quiz").each(function () {
      prepareQuiz($(this));
    });
  };

  configuration = $.extend(true, configuration, LABELS_AND_TEXT_ENUM, {});

  gitbook.events.bind("start", function (e, config) {
    isStarted = true;
    config = config.quiz || {};
    configuration = $.extend(true, configuration, LABELS_AND_TEXT_ENUM, config);
    init();
  });

  gitbook.events.bind("page.change", init);
});