//stock market data page js code start

//api data

//try statement
try {
  let x;
  let y;
  let z;
  // let a;
  // let b;
  // let c;
  // let d;
  // let e;
  // let f;
  // let g;
  Promise.all([
    fetch(
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&outputsize=full&apikey=XQJN6X4YXV76D14M"
    ),
    fetch(
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=FRSH&interval=5min&outputsize=full&apikey=XQJN6X4YXV76D14M"
    ),
    fetch(
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&outputsize=full&apikey=XQJN6X4YXV76D14M"
    ),
    //   fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=HBC&interval=5min&outputsize=full&apikey=XQJN6X4YXV76D14M'),
    //   fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=BAC&interval=5min&outputsize=full&apikey=XQJN6X4YXV76D14M'),
    //   fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=XQJN6X4YXV76D14M'),
    //   fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=KO&interval=5min&outputsize=full&apikey=XQJN6X4YXV76D14M'),
    //   fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=VZ&interval=5min&outputsize=full&apikey=XQJN6X4YXV76D14M'),
    //   fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GOOG&interval=5min&outputsize=full&apikey=XQJN6X4YXV76D14M'),
    //   fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=WIT&interval=5min&outputsize=full&apikey=XQJN6X4YXV76D14M')
  ])

    .then((responses) => Promise.all(responses.map((res) => res.json())))
    .then((data) => {
      const [data1, data2, data3] = data;
      console.log("Data 1:", data1["Time Series (5min)"]);
      console.log("Data 2:", data2["Time Series (5min)"]);
      console.log("Data 3:", data3["Time Series (5min)"]);
      //   console.log('Data 4:', data4["Time Series (5min)"]);
      //   console.log('Data 5:', data5["Time Series (5min)"]);
      //   console.log('Data 6:', data6["Time Series (5min)"]);
      //   console.log('Data 7:', data7["Time Series (5min)"]);
      //   console.log('Data 8:', data8["Time Series (5min)"]);
      //   console.log('Data 9:', data9["Time Series (5min)"]);
      //   console.log('Data 10:', data10["Time Series (5min)"]);

      x = data1["Time Series (5min)"];
      y = data2["Time Series (5min)"];
      z = data3["Time Series (5min)"];
      //   a = data4["Time Series (5min)"];
      //   b = data5["Time Series (5min)"];
      //   c = data6["Time Series (5min)"];
      //   d = data7["Time Series (5min)"];
      //   e = data8["Time Series (5min)"];
      //   f = data9["Time Series (5min)"];
      //   g = data10["Time Series (5min)"];

      const labels = Object.keys(x).reverse();
      const prices = Object.values(x)
        .map((item) => parseFloat(item["4. close"]))
        .reverse();
      const ctx = document.getElementById("container").getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "MSFT Stock Price",
              data: prices,
              backgroundColor: "#E9FCD4", // Customize chart appearance
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              display: true,
              title: "Time",
            },
            y: {
              display: true,
              title: "Price",
            },
          },
        },
      });

      //second api call
      const labels2 = Object.keys(y).reverse();
      const prices2 = Object.values(y)
        .map((item) => parseFloat(item["4. close"]))
        .reverse();
      const ctx2 = document.getElementById("container2").getContext("2d");
      new Chart(ctx2, {
        type: "line",
        data: {
          labels: labels2,
          datasets: [
            {
              label: "FRSH Stock Price",
              data: prices2,
              backgroundColor: "#E9FCD4", // Customize chart appearance
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              display: true,
              title: "Time",
            },
            y: {
              display: true,
              title: "Price",
            },
          },
        },
      });

      //THIRD CALL API
      const labels3 = Object.keys(z).reverse();
      const prices3 = Object.values(z)
        .map((item) => parseFloat(item["4. close"]))
        .reverse();
      const ctx3 = document.getElementById("container3").getContext("2d");
      new Chart(ctx3, {
        type: "line",
        data: {
          labels: labels3,
          datasets: [
            {
              label: "AAPL Stock Price",
              data: prices3,
              backgroundColor: "#E9FCD4", // Customize chart appearance
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              display: true,
              title: "Time",
            },
            y: {
              display: true,
              title: "Price",
            },
          },
        },
      });

      //     //fourth CALL API
      //    //second api call
      //    const labels4 = Object.keys(a).reverse();
      //   const prices4 = Object.values(a).map(item => parseFloat(item["4. close"])).reverse();
      //   const ctx4 = document.getElementById("container4").getContext('2d');
      //   new Chart(ctx4, {
      //     type: 'line',
      //     data: {
      //       labels: labels4,
      //       datasets: [{
      //         label: 'AAPL Stock Price',
      //         data: prices4,
      //         backgroundColor: '#E9FCD4', // Customize chart appearance
      //         borderColor: 'rgba(75, 192, 192, 1)',
      //         borderWidth: 0
      //       }]
      //     },
      //     options: {
      //       responsive: true,
      //       scales: {
      //         x: {
      //           display: true,
      //           title: 'Time'
      //         },
      //         y: {
      //           display: true,
      //           title: 'Price'
      //         }
      //       }
      //     }
      //   });

      //     //fifth CALL API
      //    //second api call
      //    const labels5 = Object.keys(b).reverse();
      //   const prices5 = Object.values(b).map(item => parseFloat(item["4. close"])).reverse();
      //   const ctx5 = document.getElementById("container5").getContext('2d');
      //   new Chart(ctx5, {
      //     type: 'line',
      //     data: {
      //       labels: labels5,
      //       datasets: [{
      //         label: 'AAPL Stock Price',
      //         data: prices5,
      //         backgroundColor: '#E9FCD4', // Customize chart appearance
      //         borderColor: 'rgba(75, 192, 192, 1)',
      //         borderWidth: 0
      //       }]
      //     },
      //     options: {
      //       responsive: true,
      //       scales: {
      //         x: {
      //           display: true,
      //           title: 'Time'
      //         },
      //         y: {
      //           display: true,
      //           title: 'Price'
      //         }
      //       }
      //     }
      //   });

      //     //sixth CALL API
      //    //second api call
      //    const labels6 = Object.keys(c).reverse();
      //   const prices6 = Object.values(c).map(item => parseFloat(item["4. close"])).reverse();
      //   const ctx6 = document.getElementById("container6").getContext('2d');
      //   new Chart(ctx6, {
      //     type: 'line',
      //     data: {
      //       labels: labels6,
      //       datasets: [{
      //         label: 'AAPL Stock Price',
      //         data: prices6,
      //         backgroundColor: '#E9FCD4', // Customize chart appearance
      //         borderColor: 'rgba(75, 192, 192, 1)',
      //         borderWidth: 0
      //       }]
      //     },
      //     options: {
      //       responsive: true,
      //       scales: {
      //         x: {
      //           display: true,
      //           title: 'Time'
      //         },
      //         y: {
      //           display: true,
      //           title: 'Price'
      //         }
      //       }
      //     }
      //   });

      //     //seventh CALL API
      //    //second api call
      //    const labels7 = Object.keys(d).reverse();
      //   const prices7 = Object.values(d).map(item => parseFloat(item["4. close"])).reverse();
      //   const ctx7 = document.getElementById("container7").getContext('2d');
      //   new Chart(ctx7, {
      //     type: 'line',
      //     data: {
      //       labels: labels7,
      //       datasets: [{
      //         label: 'AAPL Stock Price',
      //         data: prices7,
      //         backgroundColor: '#E9FCD4', // Customize chart appearance
      //         borderColor: 'rgba(75, 192, 192, 1)',
      //         borderWidth: 0
      //       }]
      //     },
      //     options: {
      //       responsive: true,
      //       scales: {
      //         x: {
      //           display: true,
      //           title: 'Time'
      //         },
      //         y: {
      //           display: true,
      //           title: 'Price'
      //         }
      //       }
      //     }
      //   });

      //     //eigth CALL API
      //    //second api call
      //    const labels8 = Object.keys(e).reverse();
      //   const prices8 = Object.values(e).map(item => parseFloat(item["4. close"])).reverse();
      //   const ctx8 = document.getElementById("container8").getContext('2d');
      //   new Chart(ctx8, {
      //     type: 'line',
      //     data: {
      //       labels: labels8,
      //       datasets: [{
      //         label: 'AAPL Stock Price',
      //         data: prices8,
      //         backgroundColor: '#E9FCD4', // Customize chart appearance
      //         borderColor: 'rgba(75, 192, 192, 1)',
      //         borderWidth: 0
      //       }]
      //     },
      //     options: {
      //       responsive: true,
      //       scales: {
      //         x: {
      //           display: true,
      //           title: 'Time'
      //         },
      //         y: {
      //           display: true,
      //           title: 'Price'
      //         }
      //       }
      //     }
      //   });

      //     //nineth CALL API
      //    //second api call
      //    const labels9 = Object.keys(f).reverse();
      //   const prices9 = Object.values(f).map(item => parseFloat(item["4. close"])).reverse();
      //   const ctx9 = document.getElementById("container9").getContext('2d');
      //   new Chart(ctx9, {
      //     type: 'line',
      //     data: {
      //       labels: labels9,
      //       datasets: [{
      //         label: 'AAPL Stock Price',
      //         data: prices9,
      //         backgroundColor: '#E9FCD4', // Customize chart appearance
      //         borderColor: 'rgba(75, 192, 192, 1)',
      //         borderWidth: 0
      //       }]
      //     },
      //     options: {
      //       responsive: true,
      //       scales: {
      //         x: {
      //           display: true,
      //           title: 'Time'
      //         },
      //         y: {
      //           display: true,
      //           title: 'Price'
      //         }
      //       }
      //     }
      //   });

      //     //tenth CALL API
      //    //second api call
      //    const labels10 = Object.keys(g).reverse();
      //   const prices10 = Object.values(g).map(item => parseFloat(item["4. close"])).reverse();
      //   const ctx10 = document.getElementById("container10").getContext('2d');
      //   new Chart(ctx10, {
      //     type: 'line',
      //     data: {
      //       labels: labels10,
      //       datasets: [{
      //         label: 'AAPL Stock Price',
      //         data: prices10,
      //         backgroundColor: '#E9FCD4', // Customize chart appearance
      //         borderColor: 'rgba(75, 192, 192, 1)',
      //         borderWidth: 0
      //       }]
      //     },
      //     options: {
      //       responsive: true,
      //       scales: {
      //         x: {
      //           display: true,
      //           title: 'Time'
      //         },
      //         y: {
      //           display: true,
      //           title: 'Price'
      //         }
      //       }
      //     }
      //   });
    })
    .catch((err) => console.error(err));

  //catch statement
} catch (error) {
  console.log("Error" + error);
}

//stock market data page js code end
