 const solution = (s, k) => { 
  // check message length:
  if (k < 1 || k > 500) {
    console.warn("Message length must be from 1 to 500");
    return;
  }

  // check text length:
  if (s == "" || s.length > 500) {
    console.warn(s.length,"Text length must be from 1 to  500 characters");
    return;
  }

  const maxMessageLength = k;  
  let textRest = s.replace(/\s+/g, ' ').trim();//deleted excess spaces
  let resultText = "";
  
  for(let i = 0; i <= textRest.length ; i++) {
    if (i == maxMessageLength) {
      while(textRest[i] != " ") {
        if (i == 0) {
          console.warn("Impossible to split text. Message length too short!");
          return -1;// stop, if maxMessageLength is incorrectly
        }
        i--;
      }
      resultText = resultText + textRest.slice(0, i) + ":";
      textRest = textRest.slice(i + 1);
      i = 0;
    }
    if (i == textRest.length) {
      resultText = resultText + textRest.slice(0, i);      
    }  
  }
  console.log(resultText.split(":"));
  return resultText.split(":").length;
}

// Use with text example:
const text = "  This large   and very informative text for a complex test task will    be split into    parts and will be send using  several SMS messages    without excess spaces  ";
const maxMsgLength = 30;
const messagesQnt = solution(text, maxMsgLength);
console.log(messagesQnt); // 6