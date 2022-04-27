import json8Patch from '../util/json8-patch'
import fastJsonMergePatch from '../util/fast-json-patch'
import rfc6902 from '../util/rfc6902'

const functions = [json8Patch, /*fastJsonMergePatch, rfc6902*/]

const executeTest = functionToTest => {
  // TODO: Tweak tests to cater for different ops (IE if some send replace op and replace the whole array, or if some replace by index)
  // describe(`test ${functionToTest.name} for objects`, () => {
  //   test(`should return empty operations for empty objects`, () => {
  //     const body = {}
  //     const update = {}

  //     const result = functionToTest(body, update)
  //     const correct = []

  //     expect(result).toEqual(correct)
  //   })

  //   test(`Should return an empty array signifying no diff operations were found.`, () => {
  //     const data = {
  //       age: {
  //         '16-24': 25,
  //         '25-34': 25,
  //         '35-49': 25,
  //         '50+': 25
  //       },
  //       income: {
  //         low: {
  //           from: 10,
  //           percentage: 25
  //         },
  //         lowerMiddle: {
  //           from: 5000,
  //           percentage: 25
  //         },
  //         upperMiddle: {
  //           from: 10000,
  //           percentage: 25
  //         },
  //         high: {
  //           from: 10001,
  //           percentage: 25
  //         }
  //       },
  //       race: {
  //         asian: 25,
  //         black: 25,
  //         coloured: 50,
  //         white: 50
  //       }
  //     }

  //     const update = {
  //       age: {
  //         '16-24': 25,
  //         '25-34': 25,
  //         '35-49': 25,
  //         '50+': 25
  //       },
  //       income: {
  //         low: {
  //           from: 10,
  //           percentage: 25
  //         },
  //         lowerMiddle: {
  //           from: 5000,
  //           percentage: 25
  //         },
  //         upperMiddle: {
  //           from: 10000,
  //           percentage: 25
  //         },
  //         high: {
  //           from: 10001,
  //           percentage: 25
  //         }
  //       },
  //       race: {
  //         asian: 25,
  //         black: 25,
  //         coloured: 50,
  //         white: 50
  //       }
  //     }

  //     const result = functionToTest(data, update)
  //     const correct = []

  //     expect(result).toEqual(correct)
  //   })

  //   test(`Should return no diff operations with property value set to zero (0)`, () => {
  //     const data = {
  //       age: {
  //         '16-24': 0,
  //         '25-34': 50,
  //         '35-49': 21,
  //         '50+': 29
  //       },
  //       income: {
  //         low: {
  //           from: 10,
  //           percentage: 25
  //         },
  //         lowerMiddle: {
  //           from: 5000,
  //           percentage: 25
  //         },
  //         upperMiddle: {
  //           from: 10000,
  //           percentage: 25
  //         },
  //         high: {
  //           from: 10001,
  //           percentage: 25
  //         }
  //       },
  //       race: {
  //         asian: 0,
  //         black: 0,
  //         coloured: 50,
  //         white: 50
  //       }
  //     }

  //     const update = {
  //       age: {
  //         '16-24': 0,
  //         '25-34': 50,
  //         '35-49': 21,
  //         '50+': 29
  //       },
  //       income: {
  //         low: {
  //           from: 10,
  //           percentage: 25
  //         },
  //         lowerMiddle: {
  //           from: 5000,
  //           percentage: 25
  //         },
  //         upperMiddle: {
  //           from: 10000,
  //           percentage: 25
  //         },
  //         high: {
  //           from: 10001,
  //           percentage: 25
  //         }
  //       },
  //       race: {
  //         asian: 0,
  //         black: 0,
  //         coloured: 50,
  //         white: 50
  //       }
  //     }

  //     const correct = []

  //     const result = functionToTest(data, update)
  //     expect(result).toEqual(correct)
  //   })

  //   test(`Should return replace operation if BE tags are empty and FE tags are added`, () => {
  //     const body = {
  //       tags: []
  //     }

  //     const update = {
  //       tags: [
  //         {
  //           key: 'client',
  //           value: 'test'
  //         }
  //       ]
  //     }

  //     const result = functionToTest(body, update)
  //     const correct = [
  //       {
  //         op: 'replace',
  //         path: '/tags',
  //         value: [
  //           {
  //             key: 'client',
  //             value: 'test'
  //           }
  //         ]
  //       }
  //     ]

  //     expect(result).toEqual(correct)
  //   })
  // })

  describe(`test ${functionToTest.name} array checks`, () => {
    // test(`For arrays, if both arrays are the same, no ops should be sent`, () => {
    //   const data = []
    //   const update = []

    //   const result = functionToTest(data, update)
    //   const correct = []

    //   expect(result).toEqual(correct)
    // })

    test(`For arrays, if data gets added, replace operation is sent`, () => {
      const data = []
      const update = [1]

      const result = functionToTest(data, update)

      const correct = [{ op: 'replace', path: '', value: { 0: 1 } }]
      const correct2 = [{ op: 'replace', path: '', value: [1] }]
      const correctResults = [correct, correct2]
      //https://codewithhugo.com/jest-array-object-match-contain/
      expect(result).toEqual(
        expect.arrayContaining(correctResults)
      )

      // expect(result).arrayContaining(correctResults)
    })

    // test(`For arrays, if data gets removed, replace operation is sent`, () => {
    //   const data = [1]
    //   const update = []

    //   const result = functionToTest(data, update)
    //   const correct = [{ op: 'replace', path: '', value: {} }]

    //   expect(result).toEqual(correct)
    // })

    // test(`For arrays, if they are identical, no ops should be sent`, () => {
    //   const data = [1]
    //   const update = [1]

    //   const result = functionToTest(data, update)
    //   const correct = []

    //   expect(result).toEqual(correct)
    // })

    // test(`For arrays, if object in array gets additional property`, () => {
    //   const data = [{ name: 'john' }]
    //   const update = [{ name: 'john', surname: 'Fisher' }]

    //   const result = functionToTest(data, update)
    //   const correct = [{ op: 'replace', path: '', value: { 0: { name: 'john', surname: 'Fisher' } } }]

    //   expect(result).toEqual(correct)
    // })

    // test(`For arrays, if object in array gets additional property for 1 object`, () => {
    //   const data = [{ name: 'john' }, { name: 'Peter', surname: 'Hendrics' }]
    //   const update = [{ name: 'john', surname: 'Fisher' }, { name: 'Peter', surname: 'Hendrics' }]

    //   const result = functionToTest(data, update)
    //   const correct = [{
    //     op: 'replace',
    //     path: '',
    //     value: {
    //       0: { name: 'john', surname: 'Fisher' },
    //       1: { name: 'Peter', surname: 'Hendrics' }
    //     }
    //   }]

    //   expect(result).toEqual(correct)
    // })

    // test(`For arrays, array body contains no confirmed type, should replace`, () => {
    //   const data = [{ name: 'john' }, 5, 'hello']
    //   const update = [{ name: 'john' }]

    //   const result = functionToTest(data, update)
    //   const correct = [{ op: 'replace', path: '', value: { 0: { name: 'john' } } }]

    //   expect(result).toEqual(correct)
    // })
  })
}

functions.map(executeTest)

