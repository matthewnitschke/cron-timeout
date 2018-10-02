const { expect } = require('chai')

const { cronTimeout, cronInterval, parseTime, getMillsDiff } = require('../src/cron-timeout.js')

const msInDay = 86400000
const msInHour = 3600000
const msInMin = 60000
const msInSec = 1000

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

    it('should test time diffing', () => {
        expect(getMillsDiff(parseTime('8:30am'), parseTime('7:30am'))).to.be.equal(msInHour)
        expect(getMillsDiff(parseTime('11:30am'), parseTime('1:30pm'))).to.be.equal(2 * msInHour)
    });
})