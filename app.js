const api_key = "QMTRW0KGKRZZC020";

function devise(devise) {
  let deviseUpper = devise.toUpperCase();
  const usd = document.getElementById(devise);

  fetch(
    "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=EUR&to_currency=" +
      deviseUpper +
      "&apikey=" +
      api_key
  )
    .then((response) => response.json())
    .then((data) => {
      const exchangeRate =
        data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
      console.log(devise + " " + exchangeRate);
      usd.innerText = exchangeRate + " " + deviseUpper;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function btc() {
  const btc = document.getElementById("btc");
  fetch(
    "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=EUR&apikey=" +
      api_key
  )
    .then((response) => response.json())
    .then((data) => {
      const exchangeRate =
        data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
      console.log("btc " + exchangeRate);
      btc.innerText = exchangeRate + " Euro";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function hour() {
  const hour = document.getElementById("hour");
  now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  console.log(hours + ":" + minutes);
  hour.innerText = hours + ":" + minutes;
}

devise("usd");
devise("cad");
devise("gbp");
devise("jpy");
devise("cny");
btc();
hour();
