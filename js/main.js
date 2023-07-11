var barColors = ["red", "green","blue","orange","brown"];
var xValues = ["MPU 1", "MPU 2", "MPU 3"];


const myChart1 = new Chart("myChart1", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
    backgroundColor: barColors,
    data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          max: 100
        }
      }]
    },
    title: {
      display: true,
      text: 'MPU'
    },
    tooltips: {
      intersect: false}
  }
});

const myChart2 =new Chart("myChart2", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          max: 100
        }
      }]
    },
    title: {
      display: true,
      text: 'MPU'
    }
  }
});

const myChart3 = new Chart("myChart3", {
  type: "bar",
  data: {
    labels: ["FINGER 1","FINGER 2","FINGER 3","FINGER 4","FINGER 5"],
    datasets: [{
      backgroundColor: barColors,
      data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), 
Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          max: 100
        }
      }]
    },
    title: {
      display: true,
      text: 'FINGERS'
    }
  }
});

function updatevalue(){
  myChart1.config.data.datasets[0].data = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
  myChart1.update();
  myChart2.config.data.datasets[0].data = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
  myChart2.update();
  myChart3.config.data.datasets[0].data = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), 
    Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
  myChart3.update();
}

let repeat = setInterval(updatevalue, 1000);
