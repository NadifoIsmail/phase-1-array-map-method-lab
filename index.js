const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map((tutorial) => {
  
    const words = tutorial.split(' ');

  
    const capitalizedWords = words.map((word) => {
  
      if (["OO", "API", "NaN", "stopPropagation", "preventDefault", "JSONP"].includes(word)) {
        return word;
      }

      
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    
    if (tutorial.includes("Constructor OO pattern")) {
      return capitalizedWords.join(' ').replace("Oo", "OO");
    } else if (tutorial.includes("Blockchain Web API")) {
      return capitalizedWords.join(' ').replace("Api", "API");
    } else if (tutorial.includes("NaN")) {
      return capitalizedWords.join(' ').replace("Nan", "NaN");
    } else if (tutorial.includes("stopPropagation") || tutorial.includes("preventDefault")) {
      return capitalizedWords.join(' ').replace("stopPropagation", "StopPropagation").replace("Preventdefault", "PreventDefault");
    } else if (tutorial.includes("JSONP")) {
      return capitalizedWords.join(' ').replace("Jsonp", "JSONP");
    }


    return capitalizedWords.join(' ');
  });
}

console.log(titleCased());
