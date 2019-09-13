### Hyperapp#2 Middlewares

Hyperapp#2 provides awesome middleware mechanics based on wrapping internal dispatch function, those allows creation of custom dispatch behavior and multiple useful helpers (middlewares). This package is a set of frequently used middlewares.

### Install
```bash
npm install hyperapp-v2-middlewares
```

#### List of middlewares

##### logger
Logs each dispatched action. Takes two arguments:
- custom `output` function ('console.debug' by default)
- and `verbose` option to log 'tuples' and 'effects'

```javascript
import { app } from 'hyperapp'
import { logger } from 'hyperapp-v2-middlewares'

app({
  // ... app initialization settings
  // log only when running in 'development' env
  middleware: process.env.NODE_ENV === 'development' && logger()
})
```

or with custom output and verbose option
```javascript
import { app } from 'hyperapp'
import { logger } from 'hyperapp-v2-middlewares'

// custom logger output
const output = (...logs) => {}

app({
  // ... app initialization settings
  middleware: logger(output, true)
})
```

##### immutable
Makes state object immutable, all state mutations fails.
(When running in 'strict mode' environment, error is thrown on any state mutation, action triggered mutation is visible through error stack trace).
```javascript
import { app } from 'hyperapp'
import { immutable } from 'hyperapp-v2-middlewares'

app({
  // ... app initialization settings
  middleware: immutable
})
```

##### compose
Creates middlewares composition
```javascript
import { app } from 'hyperapp'
import { logger, immutable, compose } from 'hyperapp-v2-middlewares'

app({
  // ... app initialization settings
  // compose(middleware, .., middlewareN)
  middleware: compose(immutable, logger()) 
})
```

### License
hyperapp-v2-middlewares is MIT licensed. See [LICENSE](LICENSE.md).
