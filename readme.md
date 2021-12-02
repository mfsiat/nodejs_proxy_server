# Readme 
> simple node proxy server api

## Routes 

- Get the weather data: **`localhost:5000/api/v1?q=Dhaka`**
- Rate limiter enabled max 5 retries in 10 minute. 
```js
// Rate limiting 
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 5
})
app.use(limiter);
app.set('trust proxy', 1);
```
- Added cache control
```js
let cache = apicache.middleware
```