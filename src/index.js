export { logger } from './logger'
export { immutable } from './immutable'

export function compose(){
  var enhancers = Array.prototype.slice.call(arguments, 0)
  return function(dispatch){
    return enhancers.reduceRight(
      function(fn, enhance){
        return enhance ? enhance(fn) : fn
      }, dispatch
    )
  }
}
