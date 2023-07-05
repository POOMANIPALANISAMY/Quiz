// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Who is the father of Javascript",
    answer: "Brendan Eich",
    options: [
      "Anders hejlsberg",
      "Yukihiro Matsumoto",
      "Brendan Eich",
      "Hakon Wium Lie"
    ]
  },
    {
    numb: 2,
    question: "The property in CSS used to change the background color of an element is -",
    answer: "color",
    options: [
      "bgcolor",
      "color",
      "background-color",
      "All of the above"
    ]
  },
    {
    numb: 3,
    question: "The CSS property used to control the element's font-size is -",
    answer: "font-size",
    options: [
      "text-style",
      "text-size",
      "font-size",
      "None of the above"
    ]
  },
    {
    numb: 4,
    question: "The HTML attribute used to define the inline styles is -",
    answer: "style",
    options: [
      "style",
      "styles",
      "class",
      "None of the above"
    ]
  },
    {
    numb: 5,
    question: "The CSS property used to set the indentation of the first line in a block of text is -",
    answer: "text-indent property",
    options: [
      "text-indent property",
      "text-stroke property",
      "text-decoration property",
      "text-overflow property"
    ]
  },
  {
    numb: 6,
    question: "Which of the following is the correct syntax to display the hyperlinks without any underline?",
    answer: "a {text-decoration : none;}",
    options: [
      "a {text-decoration : underline;}",
      "a {decoration : no-underline;}",
      "a {text-decoration : none;}",
      "None of the above"
    ]
  },
  {
    numb: 7,
    question: " Which of the following property is used as the shorthand property for the padding properties?",
    answer: "padding",
    options: [
      "padding-left",
      "padding-right",
      "padding",
      "All of the above"
    ]
  },
  {
    numb: 8,
    question: "The CSS property used to make the text bold is -",
    answer: "font-weight : bold",
    options: [
      "font-weight : bold",
      "weight: bold",
      "font: bold",
      "style: bold"
    ]
  },
  {
    numb: 9,
    question: "Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?",
    answer: "p {background-color : yellow;}",
    options: [
      "p {background-color : yellow;}",
      "p {background-color : #yellow;}",
      "all {background-color : yellow;}",
      "all p {background-color : #yellow;}"
    ]
  },
  {
    numb: 10,
    question: " Are the negative values allowed in padding property?",
    answer: "No",
    options: [
      "Yes",
      "No",
      "Can't say",
      "May be"
    ]
  },
  {
    numb: 11,
    question: "Which of the following property is used as the shorthand property of margin properties?",
    answer: "margin",
    options: [
      "margin-left",
      "margin-right",
      "margin",
      "None of the above"
    ]
  },
  {
    numb: 12,
    question: "The CSS property used to specify the transparency of an element is -",
    answer: "opacity",
    options: [
      "opacity",
      "filter",
      "visibility",
      "overlay"
    ]
  },
  {
    numb: 13,
    question: "Which of the following is used to specify the subscript of text using CSS?",
    answer: "vertical-align: sub",
    options: [
      "vertical-align: sub",
      "vertical-align: super",
      "vertical-align: subscript",
      "None of the above"
    ]
  },
  {
    numb: 14,
    question: "Which of the following CSS property is used to specify the space between every letter inside an element?",
    answer: "letter-spacing",
    options: [
      "alpha-spacing",
      "character-spacing",
      "letter-spacing",
      "alphabet-spacing"
    ]
  },
  {
    numb: 15,
    question: "The CSS property used to specify whether the text is written in the horizontal or vertical direction?",
    answer: "writing-mode",
    options: [
      "writing-mode",
      "text-indent",
      "word-break",
      "None of the above"
    ]
  },
  {
    numb: 16,
    question: "Which of the following syntax is correct in CSS to make each word of a sentence start with a capital letter?",
    answer: "text-transform : capitalize;",
    options: [
      "text-style : capital;",
      "transform : capitalize;",
      "text-transform : capital;",
      "text-transform : capitalize;"
    ]
  },
  {
    numb: 17,
    question: "How to select the elements with the class name example ?",
    answer: ".example",
    options: [
      "example",
      "#example",
      ".example",
      "Class example"
    ]
  },
  {
    numb: 18,
    question: "Which of the following is the correct syntax to select all paragraph elements in a div element?",
    answer: "div ~ p",
    options: [
      "div p",
      "p",
      "div#p",
      "div ~ p"
    ]
  },
  {
    numb: 19,
    question: "The CSS property used to draw a line around the elements outside the border?",
    answer: "outline",
    options: [
      "border",
      "outline",
      "padding",
      "line"
    ]
  },
  {
    numb: 20,
    question: "Which of the following CSS property is used to add shadows to the text?",
    answer: "text-shadow",
    options: [
      "text-shadow",
      "text-stroke",
      "text-overflow",
      "text-decoration"
    ]
  },
  {
    numb: 21,
    question: "Which of the following is not a value of the font-variant property in CSS?",
    answer: "large-caps",
    options: [
      "normal",
      "small-caps",
      "large-caps",
      "inherit"
    ]
  },
  {
    numb: 22,
    question: "Which of the following CSS property is used to specify whether the table cells share the common or separate border?",
    answer: "border-collapse",
    options: [
      "border-collapse",
      "border-radius",
      "border-spacing",
      "None of the above"
    ]
  },
  {
    numb: 23,
    question: "The CSS property used to make the rounded borders, or rounded corners around an element is -",
    answer: "border-radius",
    options: [
      "border-collapse",
      "border-radius",
      "border-spacing",
      "None of the above"
    ]
  },
  {
    numb: 24,
    question: "The CSS property used to set the distance between the borders of the adjacent cells in the table is -",
    answer: "border-spacing",
    options: [
      "border-collapse",
      "border-radius",
      "border-spacing",
      "None of the above"
    ]
  },
  {
    numb: 25,
    question: "Which of the following selector in CSS is used to select the elements that do not match the selectors?",
    answer: ":not selector",
    options: [
      ":! selector",
      ":not selector",
      ":empty selector",
      "None of the above"
    ]
  },
  {
    numb: 26,
    question: "Which of the following is not a type of combinator?",
    answer: "*",
    options: [
      ">",
      "~",
      "+",
      "*",
    ]
  },
  {
    numb: 27,
    question: "Which of the following CSS property defines how an image or video fits into container with established height and width?",
    answer: "object-fit",
    options: [
      "object-fit",
      "object-position",
      "position",
      "None of the above"
    ]
  },
  {
    numb: 28,
    question: "Which type of JavaScript language is ___",
    answer: "Object-Based",
    options: [
      "Object-Oriented",
      "Object-Based",
      "Assembly-language",
      "High-level"
    ]
  },
  {
    numb: 29,
    question: "Which one of the following also known as Conditional Expression:",
    answer: "immediate if",
    options: [
      "Alternative to if-else",
      "Switch statement",
      "If-then-else statement",
      "immediate if"
    ]
  },
  {
    numb: 30,
    question: "In JavaScript, what is a block of statement?",
    answer: "block that combines a number of statements into a single compound statement",
    options: [
      "Conditional block",
      "block that combines a number of statements into a single compound statement",
      "both conditional block and a single statement",
      "block that contains a single statement"
    ]
  },
  {
    numb: 31,
    question: "When interpreter encounters an empty statements, what it will do:",
    answer: "Ignores the statements",
    options: [
      "Shows a warning",
      "Prompts to complete the statement",
      "Throws an error",
      "Ignores the statements"
    ]
  },
  {
    numb: 32,
    question: "The function and var are known as ",
    answer: "Declaration statements",
    options: [
      "Keywords",
      "Data types",
      "Declaration statements",
      "Prototypes"
    ]
  },
  {
    numb: 33,
    question: "Which of the following variables takes precedence over the others if the names are the same?",
    answer: "The local element",
    options: [
      "Global variable",
      "The local element",
      "The two of the above",
      "None of the above"
    ]
  },
  {
    numb: 34,
    question: "Which one of the following is the correct way for calling the JavaScript code?",
    answer: "Function/Method",
    options: [
      "Preprocessor",
      "Triggering Event",
      "RMI",
      "Function/Method"
    ]
  },
  {
    numb: 35,
    question: "Which of the following type of a variable is volatile?",
    answer: "Mutable variable",
    options: [
      "Mutable variable",
      "Dynamic variable",
      "Volatile variable",
      "Immutable variable"
    ]
  },
  {
    numb: 36,
    question: "Which of the following option is used as hexadecimal literal beginning?",
    answer: "Both 0x and 0X",
    options: [
      "00",
      "0x",
      "0X",
      "Both 0x and 0X"
    ]
  },
  {
    numb: 37,
    question: "In the JavaScript, which one of the following is not considered as an error:",
    answer: "Division by zero",
    options: [
      "Syntax error",
      "Missing of semicolons",
      "Division by zero",
      "Missing of Bracket"
    ]
  },
  {
    numb: 38,
    question: "Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?",
    answer: "toFixed()",
    options: [
      "toExponential()",
      "toFixed()",
      "toPrecision()",
      "toLocaleString()"
    ]
  },
  {
    numb: 39,
    question: "Which of the following number object function returns the value of the number?",
    answer: "valueOf()",
    options: [
      "toString()",
      "valueOf()",
      "toLocaleString()",
      "toPrecision()"
    ]
  },
  {
    numb: 40,
    question: "Which of the following one is the property of the primary expression:",
    answer: "stand-alone expressions",
    options: [
      "Contains only keywords",
      "basic expressions containing all necessary functions",
      "contains variable references alone",
      "stand-alone expressions"
    ]
  },
  {
    numb: 41,
    question: "In JavaScript, what will be used for calling the function definition expression:",
    answer: "Function literal",
    options: [
      "Function prototype",
      "Function literal",
      "Function calling",
      "Function declaration"
    ]
  },
  {
    numb: 42,
    question: "Who is the father of HTML?",
    answer: "Tim Berners-Lee",
    options: [
      "Rasmus Lerdorf",
      "Tim Berners-Lee",
      "Brendan Eich",
      "Sergey Brin"
    ]
  },
  {
    numb: 43,
    question: "Javascript was invented in which year?",
    answer: "1995",
    options: [
      "1995",
      "1999",
      "1985",
      "1989"
    ]
  },
  {
    numb: 44,
    question: "Which of the following is used to read an HTML page and render it?",
    answer: "Web browser",
    options: [
      "Web server",
      "Web network",
      "Web browser",
      "Web matrix"
    ]
  },
  {
    numb: 45,
    question: "What is DOM in HTML?",
    answer: "Convention for representing and interacting with objects in html documents",
    options: [
      "Language dependent application programming",
      "Hierarchy of objects in ASP.NET",
      "Application programming interface",
      "Convention for representing and interacting with objects in html documents",
    ]
  },
  {
    numb: 46,
    question: "In which part of the HTML metadata is contained?",
    answer: "head tag",
    options: [
      "head tag",
      "title tag",
      "html tag",
      "body tag"
    ]
  },
  {
    numb: 47,
    question: "which company developed Javascript?",
    answer: "Netscape",
    options: [
      "Netscape",
      "Bell Labs",
      "Sun Microsystems",
      "IBM"
    ]
  },
  {
    numb: 48,
    question: "Who is the father of CSS",
    answer: "Hakon Wium Lie",
    options: [
      "Anders hejlsberg",
      "Yukihiro Matsumoto",
      "Brendan Eich",
      "Hakon Wium Lie"
    ]
  },
  {
    numb: 49,
    question: "which of the following is not Javascript Data types",
    answer: "Float",
    options: [
      "Undefined",
      "Number",
      "Boolean",
      "Float"
    ]
  },
  {
    numb: 50,
    question: "Which of the following is not the element associated with the HTML table layout?",
    answer: "color",
    options: [
      "alignment",
      "color",
      "size",
      "spanning"
    ]
  },
  {
    numb: 51,
    question: "HTML is a subset of ___________",
    answer: "SGML",
    options: [
      "SGMT",
      "SGML",
      "SGME",
      "XHTML"
    ]
  },
  {
    numb: 52,
    question: "What is the work of <address> element in HTML5?",
    answer: "contains contact details for author",
    options: [
      "contains IP address",
      "contains home address",
      "contains url",
      "contains contact details for author"
    ]
  },
  {
    numb: 53,
    question: "Which of the method is used to get HTML element in javascript",
    answer: "both above",
    options: [
      "getElementbyid()",
      "getElementByClassName()",
      "both above",
      "none of the above"
    ]
  },
  {
    numb: 54,
    question: "Which of the keyword is used to define the variable in the javascript",
    answer: "both var and let",
    options: [
      "var",
      "let",
      "both var and let",
      "none of the above"
    ]
  },
  {
    numb: 55,
    question: "The CSS property used to set the maximum width of the element's content box is -",
    answer: "max-width property",
    options: [
      "max-width property",
      "height property",
      "max-height property",
      "position property"
    ]
  },
  {
    numb: 56,
    question: "Which if the following CSS function allows us to perform calculations?",
    answer: "calc() function",
    options: [
      "calc() function",
      "calculator() function",
      "calculate() function",
      "cal() function"
    ]
  },
  {
    numb: 57,
    question: "Which of the following CSS property is used to add stroke to the text?",
    answer: "text-stroke property",
    options: [
      "text-stroke property",
      "text-transform property",
      "text-decoration property",
      "None of the above"
    ]
  },
  {
    numb: 58,
    question: "The CSS property used to specify the transparency of an element is -",
    answer: "opacity",
    options: [
      "Hover",
      "opacity",
      "clearfix",
      "overlay"
    ]
  },
  {
    numb: 59,
    question: "Which of the following CSS property is used to specify the type of quotation mark?",
    answer: "quotes property",
    options: [
      "quotes property",
      "z-index property",
      "hyphens property",
      "None of the above"
    ]
  },
  {
    numb: 60,
    question: "The CSS property used to specify the order of flex item in the grid container is -",
    answer: "order property",
    options: [
      "order property",
      "float property",
      "overflow property",
      "None of the above"
    ]
  },
 
];