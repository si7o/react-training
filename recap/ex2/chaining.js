/**
 * 
 * @param {Object} functions 
 * @param {Boolean} debug 
 */
function chain(functions, debug=false) {

  let fns = {
    _result: undefined,
    execute() {
      const tmpResult = this._result;
      this._result = undefined; // if someone uses the chain again, _result is restored

      debug && console.log('execute', tmpResult)        
      return tmpResult; 
    }
  }

  Object.keys(functions).forEach(
    (fname) => {      
      // wrap original function and use this.result as "a" param if fns.result is not undefined
      const oFn = functions[fname];

      const fn = (...params) => {
        // use this.result as "a" param if fns.result is not undefined
        typeof fns._result !== 'undefined' && params.splice(0, 0, fns._result);        
               
        // call the original function with the appropiate params
        fns._result = oFn(...params)
        debug && console.log(fname, params, fns._result) 
        // return the fns object so we can chain the calls
        return fns
      }

      fns[fname] = fn;      
    }
  );  

  debug && console.log('chain created', fns)
  return fns
};
