var questionContainer = document.getElementById('question');
var current_question = 0;

var quizlist = [
    {
      title: " Q.1) What is the full form of HTML?",
      options: ["Hello To my Land.","Hey To my Land.","Hyper  Text  Markup Land.",
      "Hyper Text Markup Language."],
      ans: "Hyper Text Markup Language."
    },
  
    {
      title: " Q.2) What is the full form of CSS?",
      options: ["Cat Styling sheet.","Car Styling sheet.","Cascading Styling sheet.",
      "Court Styling sheet."],
      ans: "Cascading Styling sheet."
    },

    {
      title: " Q.3) What is the full form of HTTP ?",
      options: ["Hello To The Product.","Hyper Text Transfer Protocol.","Hey To The Pencil.",
      "Hyper Text Text Protocol."],
      ans: "Hyper Text Transfer Protocol."
    },

    {
      title: " Q.4) What is the full form of JS ?",
      options: ["Jame Scenario.","Java Softcopy.","Java Script.","Jamshed Superior."],
      ans: "Java Script."
    },
  ];
  
  
  renderQuiz();
  function renderQuiz()
  {
   
    var title_text = document.createElement('h3');
    title_text.innerText = quizlist[current_question].title;

    questionContainer.appendChild(title_text);

    for(var i = 0 ; i< quizlist[current_question].options.length ; i++)
    {
        var optionElement = document.createElement('input');
        optionElement.setAttribute('type', 'radio');
        optionElement.value = quizlist[current_question].options[i];

        var option_text = document.createElement('span');
        option_text.innerHTML = quizlist[current_question].options[i] + "<br> <br>";

        questionContainer.appendChild(optionElement);
        questionContainer.appendChild(option_text);
    }

    var next_button = document.createElement('button');
    next_button.innerHTML = "Next";
    next_button.setAttribute('onclick', nextQuestion());
    questionContainer.appendChild(next_button);
  }

  function nextQuestion()
  { 
   
    current_question++;
     questionContainer.innerHTML = "";
     renderQuiz();
  }
  