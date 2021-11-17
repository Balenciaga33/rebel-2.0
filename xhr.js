// const requestURL = 'https://api.airtable.com/v0/appElurJfZ2WmdIUg/Furniture/?api_key=keys1gmUsZYDi7y0g'
const requestURL = 'https://reliability.rebelmouse.dev/customfeeds/feed/ads-feed/json?include_sections=en/ads'
const xhr = new XMLHttpRequest()

xhr.open('GET', requestURL, true)
xhr.onload = () => {
    console.log(JSON.parse(xhr.response))
}
xhr.send()