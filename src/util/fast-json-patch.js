import * as jsonpatch from 'fast-json-patch'

const jsonpatchExec = (original, updated) => jsonpatch.compare(original, updated)

export default jsonpatchExec