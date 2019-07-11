### Hyperapp#2 Enhancers

Hyperapp#2 provides awesome enhance mechanics based on wrapping internal dispatch function, those allows creation of custom dispatch behavior and multiple useful helpers (enhancers). This package is a set of frequently used enhancers.

### Install
This package is not published to npm registry yet,
to install use github repository path as package name
```bash
npm install sergey-shpak/hyperapp-enhancers
```

#### List of enhancers

##### Logger
Logs each dispatched action.
Takes environment argument to turn on/off where it is needed.

```javascript
import { app } from 'hyperapp'
import { logger } from '@hyperapp/enhancers'

app({
  // ... app initialization settings
  // log only when running in 'development' env
}, logger(process.env.NODE_ENV === 'development') )
```

##### Immutable
Makes state object immutable, all state mutations fails.
(When running in 'strict mode' environment, error is thrown on any state mutation, action triggered mutation is visible through error stack trace).

```javascript
import { app } from 'hyperapp'
import { immutable } from '@hyperapp/enhancers'

app({
  // ... app initialization settings
}, immutable)
```

##### Enhance
Creates enhancers composition
```javascript
import { app } from 'hyperapp'
import { logger, immutable, enhance } from '@hyperapp/enhancers'

app({
  // ... app initialization settings
  // enhance(enhancer, .., enhancerN)
}, enhance(immutable, logger()))
```

### License
@hyperapp/enhancers is MIT licensed. See [LICENSE](LICENSE.md).