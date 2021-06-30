# Jencansee's Homescreen (WIP)
I made this homescreen for myself, for quick and handy use of services that I need with support of key prompts.

## Prerequisites & Setting Up
Before using this homescreen you need to compile it, in order to compile you should have Node.js and npm to be installed on your PC.

After that run

`npm i`

Then create `.env` file inside of the repository, and now put your APIs keys inside it:

```
    WEATHER_API=openWeatherMapAPIKey
    EXCHANGE_API=exchangeRateAPIKey
    BASE_CURRENCY=USD
    CURRENCY_LIST=CNY, EUR, RUB
```

First two of the variables are for API keys, you can get them at these websites:

* [OpenWeather API](https://openweathermap.org/api)
* [ExchangeRate API](https://www.exchangerate-api.com/)

BASE_CURRENCY should have a three letter currency code, this value means from what currency would you like to check the rate.<br>
CURRENCY_LIST could have as many currency codes as you like, this is just for easy and fast conversion.


## Compiling Process

To compile project to run `npm run build`<br>
To run without compiling use `npm run start`