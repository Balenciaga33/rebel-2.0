const requestURL = 'https://cors-anywhere.herokuapp.com/https://reliability.rebelmouse.dev/customfeeds/feed/ads-feed/json'
const xhr = new XMLHttpRequest()

xhr.open('GET', requestURL, true)

xhr.onload = () => {
    console.log(JSON.parse(xhr.response))
}

xhr.send()