# test-json-patch
Test different implementations for json patch
> As detailed this (RFC6902) [specification](https://datatracker.ietf.org/doc/html/rfc6902).

## Candidates to try
|package         | npm                                                     | github |  
 --------------- | ---------------                                         | ---------- |
 fast-json-patch | [source](https://www.npmjs.com/package/fast-json-patch) | [source](https://github.com/Starcounter-Jack/JSON-Patch)
|rfc6902         |[source](https://www.npmjs.com/package/rfc6902)          | [source](https://github.com/chbrown/rfc6902)
|json8-patch     |[source](https://www.npmjs.com/package/json8-patch)      | [source](https://github.com/sonnyp/JSON8/tree/main/packages/patch)

## Current report
> TODO: Tweak tests to cater for different ops (IE if some send replace op and replace the whole array, or if some replace by index)

<img src='./Current report.jpg'>

## Running the project
- install the dependencies: `npm i`
- run tests: `npm test`