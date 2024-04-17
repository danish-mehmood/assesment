google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawCharts);
function drawCharts() {
  var barData = google.visualization.arrayToDataTable([
    ["Day", "Debit", "Credit"],
    ["Sun", 1050, 600],
    ["Mon", 1370, 910],
    ["Tue", 660, 400],
    ["Wed", 1030, 540],
    ["Thu", 1000, 480],
    ["Fri", 1170, 960],
    ["Sat", 660, 320],
  ]);
  // set bar chart options
  var barOptions = {
    focusTarget: "category",
    backgroundColor: "transparent",
    colors: ["#ed8a12", "#0e48f7"],
    fontName: "Open Sans",

    chartArea: {
      left: 50,
      top: 10,
      width: "100%",
      height: "70%",
    },
    bar: {
      rx: 10,
      groupWidth: "50%",
    },
    hAxis: {
      textStyle: {
        fontSize: 11,
      },
    },
    vAxis: {
      minValue: 0,
      maxValue: 1500,
      baselineColor: "#DDD",
      gridlines: {
        color: "#DDD",
        count: 4,
      },
      textStyle: {
        fontSize: 11,
      },
    },
    legend: {
      position: "bottom",
      textStyle: {
        fontSize: 12,
      },
    },
    animation: {
      duration: 1200,
      easing: "out",
      startup: true,
    },
  };
  // draw bar chart twice so it animates
  var barChart = new google.visualization.ColumnChart(
    document.getElementById("bar-chart")
  );
  //barChart.draw(barZeroData, barOptions);
  barChart.draw(barData, barOptions);

  // BEGIN LINE GRAPH

  function randomNumber(base, step) {
    return Math.floor(Math.random() * step + base);
  }
  function createData(year, start1, start2, step, offset) {
    var ar = [];
    for (var i = 0; i < 12; i++) {
      ar.push([new Date(year, i), randomNumber(start1, step) + offset]);
    }
    return ar;
  }
  var randomLineData = [["Year", "Revenue"]];
  for (var x = 0; x < 6; x++) {
    var newYear = createData(
      2007 + x,
      10000,
      10000,
      4000,
      800 * Math.pow(x, 2)
    );
    console.log(newYear[0]);
    for (var n = 0; n < 12; n++) {
      randomLineData.push(newYear.shift());
    }
  }
  var lineData = google.visualization.arrayToDataTable(randomLineData);

  var lineOptions = {
    backgroundColor: "transparent",
    colors: ["#33848e", "#ffffff"],
    fontName: "Open Sans",
    focusTarget: "category",
    chartArea: {
      left: 50,
      top: 10,
      width: "100%",
      height: "70%",
    },
    hAxis: {
      //showTextEvery: 12,
      textStyle: {
        fontSize: 11,
      },
      baselineColor: "transparent",
      gridlines: {
        color: "transparent",
      },
    },
    vAxis: {
      minValue: 0,
      maxValue: 50000,
      baselineColor: "#DDD",
      gridlines: {
        color: "#DDD",
        count: 4,
      },
      textStyle: {
        fontSize: 11,
      },
    },
    legend: {
      position: "bottom",
      textStyle: {
        fontSize: 12,
      },
    },
    animation: {
      duration: 1200,
      easing: "out",
      startup: true,
    },
  };

  var lineChart = new google.visualization.LineChart(
    document.getElementById("line-chart")
  );
  //lineChart.draw(zeroLineData, lineOptions);
  lineChart.draw(lineData, lineOptions);
}
