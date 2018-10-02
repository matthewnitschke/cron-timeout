# cron-timeout

```javascript
const { cronTimeout, cronInterval } = require('cron-timeout')
cronTimeout(() => {
    console.log('Its 12pm!')
}, '12:00pm')
```