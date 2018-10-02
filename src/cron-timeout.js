

module.exports = {
    cronTimeout: (callback, time) => {
        setTimeout(callback, this.getMillsDiff(this.parseTime(time), new Date()))
    },
    cronInterval: (callback, time) => {
        setInterval(callback, this.getMillsDiff(this.parseTime(time), new Date()))
    },
    parseTime: (time) => {
        // time will be in the format h:mma
        let parts = /(\d|\d\d):(\d\d) ?(am|pm)/i.exec(time)
    
        if (parts){
            let hours = parseInt(parts[1])
            let minutes = parseInt(parts[2])
            let a = parts[3].toLowerCase()
    
            if (a == "pm" && hours != 12){
                hours += 12
            } else if (a == "am" && hours == 12){
                hours = 0
            }
    
            let date = new Date()
            date.setHours(hours)
            date.setMinutes(minutes)
    
            return date
        } else {
            throw new Error(`Invalid time input, got: '${time}', expected format: 'h:mma'`)
        }
    },
    getMillsDiff(a, b){
        if (a.getTime() > b.getTime()) {
            return a.getTime() - b.getTime()
        } else {
            return b.getTime() - a.getTime()
        }
    }
}