var barColors = ["red", "green","blue","orange","brown"];
var xValues = ["X angle", "Y angle", "Z angle"];


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
          min: -180,
          max: 180
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
          min: -180,
          max: 180
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

async function updatevalue(){
  let mpu1data = await fetch('http://localhost:5000/posts/getMPU_1_data');
  let mpu1 = await mpu1data.json();
  console.log(mpu1);
  myChart1.config.data.datasets[0].data = [Math.floor(mpu1[0]), Math.floor(mpu1[1]), Math.floor(mpu1[2])];
  myChart1.update();
  let mpu2data = await fetch('http://localhost:5000/posts/getMPU_2_data');
  let mpu2 = await mpu2data.json();
  myChart2.config.data.datasets[0].data = [Math.floor(mpu2[0]), Math.floor(mpu2[1]), Math.floor(mpu2[2])];
  myChart2.update();
  let fingerdata = await fetch('http://localhost:5000/posts/getFingers_data');
  let fingers = await fingerdata.json();
  myChart3.config.data.datasets[0].data = [fingers[0], fingers[1], fingers[2], fingers[3], fingers[4]];
  myChart3.update();
}

let repeat = setInterval(updatevalue, 1000);
