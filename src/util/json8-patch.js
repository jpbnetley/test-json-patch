import jsonPatch from 'json8-patch'

const jsonEightPatchExec = (original, updated) => jsonPatch.diff(original, updated)

export default jsonEightPatchExec