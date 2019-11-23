process.env.DEBUG = 'app:*'

/* eslint-disable */
const assert = require('assert')
const should = require('should')

//
// const myLib = require('../src/index.js')

//
// const delay = interval => {
//   return it('sleeping for ' + interval / 1000 + 's', done => {
//     setTimeout(done, interval)
//   }).timeout(interval + 100)
// }
/* eslint-enable */

/**
 * Tests
 */
describe('test a lib', function () {
  /**
   *
   */
  describe('doSomething', function () {
    it('is valid', async () => {
      // var result = await myLib.doSomething('abc123')
      // result.should.have.property('foo', true)

      let result = {
        foo: true
      }
      result.should.have.property('foo', true)
    })
  })
})
