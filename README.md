# Alloy TiHighCharts Widget [![Appcelerator Titanium](http://www-static.appcelerator.com/badges/titanium-git-badge-sq.png)](http://appcelerator.com/titanium/) [![Appcelerator Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://appcelerator.com/alloy/)

## Overview
This is a widget for the [Alloy](http://projects.appcelerator.com/alloy/docs/Alloy-bootstrap/index.html) MVC framework of [Appcelerator](http://www.appcelerator.com)'s [Titanium](http://www.appcelerator.com/platform) platform.


## Screenshot
![TiHighCharts](https://raw.github.com/vitorebatista/TiHighCharts/master/docs/screenshot.png)

## Usage [![gitTio](http://gitt.io/badge.png)](http://gitt.io/component/TiHighCharts)

1. Install [this widget](http://gitt.io/component/TiHighCharts) via [gitTio](http://gitt.io):

	`gittio install com.jcm.TiHighcharts`

2. In your `app/views/index.xml` use it like this:

	```
<Alloy>
	<View id="chartView">
		<Widget src="com.jcm.tihighcharts" id="lineChart"></Widget>
	</View>
</Alloy>
	```

3. In your `app/controllers/index.js` use it like this:

 	```
	function setup() {
		$.lineChart.loadChart({
			chart: {
				//change the type of chart below
				type: 'column',
				renderTo: 'container',
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				height: 230,
			},
			//can remove if you want the hamburger menu
			exporting: {
				enabled: false
			},
			//can remove if you want the 'highcharts.com' at the bottom of your chart
			credits: {
				enabled: false
			},
			title: {
				text: 'Hours & Work'
			},
			xAxis: {
				categories: ['11/8', '11/7', '11/6', '11/5', '11/4'],
				crosshair: true
			},
			yAxis: {
				title: {
					text: ''
				},
				min: 0,
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				},
				//if you are taking a picture I would turn off animations, otherwise you can remove this
				series: {
					animation: false
				}
			},
			series: [{
				name: 'Hours',
				data: [9, 3, 1.3, 11, 17],
				color: 'green',
			}, {
				name: 'Work',
				data: [5, 7, 9, 2, 14],
				color: 'blue',
			}, ]
		}, true);
	}

	exports.loaded = function() {
		setup();
	}
	```

## Changelog
* 1.0
  * Initial version
