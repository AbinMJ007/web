$.getJSON("data.json", function (json) {

	var labels = json.map(function(item){
		return item.label;
	});
	var values = json.map(function(val){
		return val.value;

	});

	var options = {
		responsive : true,
		maintainAspectRatio : false,
		scales: {
			yAxes:[{
				ticks:{
					beginAtZero: true
				}
			}],
			xAxes : [{
				ticks:{
					beginAtZero: true
				},
				scale:{
				fontColor: "rgb(120,12,123)"
			},

			}]
		},
		legend: {
			labels:{
				fontColor:"rgb(255,99,132)"
			}
			
		},
		tooltips: {
			titleFontColor: "rgb(123,123,123)"
		}

	};

	var data = {
		labels : labels,
		datasets : [{
			label: "Project",
			data: values,
			strokeColor: 'rgba(100,124,122,1)',
			backgroundColor: [
				'rgba(255,0,0,0)',
				'rgba(0,255,0,0)',
				'rgba(0,0,255,0)',
				'rgba(123,123,0,0)'
			],
			borderColor: [
				'rgba(255,0,0,0.5)',
				'rgba(0,255,0,0.5)',
				'rgba(0,0,255,0.5)',
				'rgba(123,123,0,0.5)'
			],
			borderWidth: 3

		}]


	};
 var ctx = document.getElementById("myChart").getContext("2d");

 //var mychart = new Chart(ctx).Bar(data);

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options:options
    
  });
});
