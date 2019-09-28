export { logger } from './logger'
export { immutable } from './immutable'
export { onState, onAction, onTuple, onEffect } from './dispatch'

export function compose(){
  var middlewares = Array.prototype.slice.call(arguments, 0)
  return function(next){
    return middlewares.reduceRight(
      function(next, middleware){
        return middleware ? middleware(next) : next
      }, next
    )
  }
}

export function middleware(fn){
  return function (next){
    return function(){ // action, props
      var action = fn.apply(this, arguments)
      next.apply(this, action ? [].concat(action) : arguments)
    }
  }
}

