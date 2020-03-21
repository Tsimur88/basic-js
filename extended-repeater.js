module.exports = function (str, options) {
    
    let defaults = {
        repeatTimes: 1,
        separator: '+',
        addition: '',
        additionRepeatTimes: 1,
        additionSeparator: '|'
    };

    
    if(typeof str !== 'string') {
      str = str + '';
    }

    if(!options.repeatTimes)
      options.repeatTimes = defaults.repeatTimes;

    if(!options.separator)
      options.separator = defaults.separator; 

    if(options.hasOwnProperty('addition')) {

      if(typeof options.addition !== 'string') {
        options.addition = options.addition + '';
      }

      if(!options.additionRepeatTimes)
        options.additionRepeatTimes = defaults.additionRepeatTimes;

      if(!options.additionSeparator)
        options.additionSeparator = defaults.additionSeparator;

    } else {
        options.addition = defaults.addition;
    }

    let result = "";
    
    for(let i = 0; i < options.repeatTimes; i++) {
      
      result += str;
      
      if(options.addition != '') {
        
        for(let a = 0; a < options.additionRepeatTimes; a++) {
          result += options.addition;
          
          if (a !== options.additionRepeatTimes - 1) {
            result += options.additionSeparator;
          }
        }
        
      }
      
      if (i !== options.repeatTimes - 1) {
        result += options.separator;
      }
      
    }
    
    return result;
    
  };
 