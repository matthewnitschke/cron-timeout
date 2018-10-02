const { expect } = require('chai')

const { cronTimeout, cronInterval, parseTime } = require('../src/cron-timeout.js')

function looseDateEquality(a, b){
    a.setMilliseconds(0)
    b.setMilliseconds(0)

    expect(a.getTime()).to.be.equal(b.getTime())
}

describe('Tests', () => {
    it('should test time parsing', () => {
        let date = new Date()
        date.setHours(7)
        date.setMinutes(30)
        looseDateEquality(parseTime('7:30am'), date)
        looseDateEquality(parseTime('7:30 am'), date)
        looseDateEquality(parseTime('7:30 AM'), date)

        date.setHours(14)
        date.setMinutes(59)
        looseDateEquality(parseTime('2:59pm'), date)
        looseDateEquality(parseTime('2:59 pm'), date)
        looseDateEquality(parseTime('2:59 PM'), date)

        date.setHours(12)
        date.setMinutes(00)
        looseDateEquality(parseTime('12:00pm'), date)
        looseDateEquality(parseTime('12:00 pm'), date)
        looseDateEquality(parseTime('12:00 PM'), date)

        date.setHours(0)
        date.setMinutes(00)
        looseDateEquality(parseTime('12:00am'), date)
        looseDateEquality(parseTime('12:00 am'), date)
        looseDateEquality(parseTime('12:00 am'), date)
    })
})