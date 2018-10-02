# cron-timeout

# Installation
```javascript
const { cronTimeout, cronInterval } = require('path/to/cron-timeout.js')
```

# Usage
```javascript
const { cronTimeout, cronInterval } = require('path/to/cron-timeout.js')

cronTimeout(() => {
    console.log('its 1 am!')
}, '1:00am')
```

# API
cron timeout takes a time in the format of `h:mma`. This format is slightly loose by allowing the following inputs

```
cronTimeout(() => {}, '1:00am')
cronTimeout(() => {}, '1:00 am')
cronTimeout(() => {}, '1:00 AM')
cronTimeout(() => {}, '01:00am')
```