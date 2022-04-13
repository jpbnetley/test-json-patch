import * as rfc6902 from 'rfc6902'

const rfc6902Exec = (original, updated) => rfc6902.createPatch(original, updated)

export default rfc6902Exec