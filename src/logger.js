import { compose, middleware } from './index'
import { onState, onAction, onTuple, onEffect } from './dispatch'

export function logger(output, verbose){
  var output = output || console.debug
  var verbose = verbose || false
  return compose(
    onState(state =>
      output('State', state)),
    onAction(action =>
      output('Action', action.name)),
    verbose && onTuple(tuple =>
      output('Tuple', tuple[0].name, tuple[1])),
    verbose && onEffect(effect =>
      output('Effect', effect[0].name, effect[1]))
  )
}