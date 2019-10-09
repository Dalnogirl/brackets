module.exports =
function check(str, bracketsConfig) {
  let k = 0;
  bracketsConf = bracketsConfig.join('').replace(/,/g, '').split('');
  str = str.split('')
  
  //замена одинаковых символов
  // '|'
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '|') {
      str[i] = k % 2 === 0? 'aa' : 'bb';
      k++
    }
  }
  k = 0
  for (let i = 0; i < bracketsConf.length; i++) {
    if (bracketsConf[i] === '|') {
      bracketsConf[i] = k % 2 === 0? 'aa' : 'bb';
      k++
    }
  }
  k = 0;

  //'7'
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '7') {
      str[i] = k % 2 === 0? 'cc' : 'dd';
      k++
    }
  }
  k = 0
  for (let i = 0; i < bracketsConf.length; i++) {
    if (bracketsConf[i] === '7') {
      bracketsConf[i] = k % 2 === 0? 'cc' : 'dd';
      k++
    }
  }
  k = 0;

  //'8'
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '8') {
      str[i] = k % 2 === 0? 'ee' : 'ff';
      k++
    }
  }
  k = 0
  for (let i = 0; i < bracketsConf.length; i++) {
    if (bracketsConf[i] === '|') {
      bracketsConf[i] = k % 2 === 0? 'ee' : 'ff';
      k++
    }
  }
  k = 0;






  //проверка
  for (let i = 0; i < str.length; i++) {
    str[i] = bracketsConf.indexOf(str[i])
  }
  str
  for (let i = 0; i < str.length - 1; i++) {

    if (str[i] % 2 === 0) {
      if (str[i + 1] % 2 !== 0 && str[i + 1] - str[i] !== 1 | str[str.length - 1] % 2 === 0) {
        return false
      }
    }
  }
  str
  return true
}

//console.log(check('|(|)', [['(', ')'], ['|', '|']]));






















































  // str =str.replace(/,/ig, '');
  // let a = str.includes('(')? str.match(/\(/ig).length: false;
  // let aA = str.includes(')')?str.match(/\)/ig).length: false;
  // a = a === aA;
  // //a
  // let b = str.includes('{')? str.match(/\{/ig).length: false;
  // let bB = str.includes('}')?str.match(/\}/ig).length: false;
  // b = b === bB;
  // //b
  // let c = str.includes('[')? str.match(/\[/ig).length: false;
  // let cC = str.includes(']')?str.match(/\]/ig).length: false;
  // c = c === cC;
  // //c
  // return a === b === c;