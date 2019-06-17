### ONGOING GRAPHQL ISSUES
---
* MySQL database is roughly setup and connection has been coded in dbConnectors.js file.

* resolver.js setup to query all players in database as well as initial mutation defined to create a new player.

* schema.js partially setup (hopefully enough to allow testing of 'read' & 'create' functionality in Grpahiql).

Cannot run app due to following error:
```
/Users/hamishwadsworth/Desktop/graphql-playlist/index.js:1
import express from 'express';
       ^^^^^^^

SyntaxError: Unexpected identifier
    at Module._compile (internal/modules/cjs/loader.js:760:23)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:827:10)
    at Module.load (internal/modules/cjs/loader.js:685:32)
    at Function.Module._load (internal/modules/cjs/loader.js:620:12)
    at Function.Module.runMain (internal/modules/cjs/loader.js:877:12)
    at internal/main/run_main_module.js:21:11
[nodemon] app crashed - waiting for file changes before starting...
```
Do the dependencies need to be reinstalled for this error to go? If so, how do I reinstall dependencies (`npm install`)?