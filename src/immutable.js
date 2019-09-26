import { onState } from './dispatch'

function freeze(obj){
  Object.getOwnPropertyNames(obj).forEach(name =>
    obj[name] && typeof obj[name] == 'object' && freeze(obj[name]))
  return Object.freeze(obj)
}

export var immutable = onState(function(state){
  return freeze(state)
})