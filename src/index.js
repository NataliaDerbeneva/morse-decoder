const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let i=0;
    let j;
    let word,symb;
    let numLetters;
    let outStr = "";
  
    while(i<expr.length){
      word = (expr.slice(i).match(/[0,1]+/))[0];
      numLetters = word.length/10;
      for(let j=0; j<numLetters;j++){
        symb = word.substring(j*10,(j+1)*10);
        symb = symb.replace(/10/g,".");
        symb = symb.replace(/11/g,"-");
        symb = symb.replace(/0/g,"");
        outStr += MORSE_TABLE[symb];
      }
      i+=word.length;
      if(i<expr.length){
        i += 10;
        outStr += " ";
      }  
    }    
  
    return outStr;
  }

module.exports = {
    decode
}