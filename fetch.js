// import fetch from 'node-fetch';
async function start() {
    const response = await fetch('https://reliability.rebelmouse.dev/customfeeds/feed/ads-feed/json?include_sections=en/ads', {mode: 'cors'});
    const body = await response.json();

    console.log(body);
}