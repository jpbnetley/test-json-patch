import * as jsonpatch from 'fast-json-patch'

const jsonpatch = (original, updated) => jsonpatch.compare(original, updated)

export default jsonpatch