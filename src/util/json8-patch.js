import jsonPatch from 'json8-patch'

const jsonEightPatch = (original, updated) => jsonPatch.diff(original, updated)

export default jsonEightPatch