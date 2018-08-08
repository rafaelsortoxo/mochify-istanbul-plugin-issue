/* globals describe, it */
const doTheMath = require('./index')
const chai = require('chai')

const expect = chai.expect

describe('index', () => {
  it('Should return the sum of 2 numbers', () => {
    expect(doTheMath.sumTwoNumbers(1, 2)).to.equal(3)
  })
})
