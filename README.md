# Alloy TiHighcharts Widget [![Appcelerator Titanium](http://www-static.appcelerator.com/badges/titanium-git-badge-sq.png)](https://www.appcelerator.com/mobile-app-development-products/) [![Appcelerator Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](https://www.appcelerator.com/mobile-app-development-products/)

## Overview
This is a widget for the Alloy MVC framework of [Appcelerator](http://www.appcelerator.com)'s [Titanium](http://www.appcelerator.com/platform) platform.


## Screenshot
![TiHighcharts](https://raw.githubusercontent.com/joshmocek/TiHighcharts/master/screenshot.png)

## Tips Are Always Appreciated :)

	Bitcoin:	`1Gr8gPsxwbrSuDFxUS53wBDHQ5VHcoLNUV`

	Ethereum:	`0xf9ea6F60Dd61ffF6B2e1b34D274383AaBd918880`

	Zcash:	`t1R4jPCmBof2tGBjPPEvG19Lsno5erhAkUw`

	Monero:	`41hFK3vXafy6WvuDqWZ9nZD1kMuaos54FZnjodhmJ2iL19VvHA2xcN4XWgqyiCcEZGUXFnjektRqA9UqvUSRYv5S3m7PWgr`


## Notes
1. This creates a webview and gives the user the option to take a picture and destroy the webview if there is no need for user interaction. This is implemented because of how poorly some widgets work with webviews being kept open. The `loadChart()` function takes in two parameters: the chart data, and a boolean (as seen in **Usage 1**). In the below function the webview would be destroyed an replaced with a picture of the data. If the boolean is not set, or set to false then a webview will be used.

	`$.lineChart.loadChart({chartData, true});`

2. In `com.jcm.tihighcharts/assets/html/chart.html` you will find that you might not always need to include `exporting.jsf`, `jquery.min.jsf`, or `highcharts-more.jsf`. If you find no need for them, feel free to delete those lines from the html and delete their associated files from the asset folder.

3. If you use this widget and you notice that your view is taking +7 seconds to load consider setting the view after the parent container has loaded. This can be done by not adding your widgets view until the parent view is loaded.

	```
	exports.loaded = function() {
		$.section1.add(work.getView());
		work.loaded();
	}

	var work = Alloy.createController("/widgets/work", {
		parent: $,
	});
	```

## Usage [![gitTio](http://gitt.io/badge.png)](http://gitt.io/component/com.jcm.TiHighcharts)

1. Install [this widget](http://gitt.io/component/com.jcm.TiHighcharts) via [gitTio](http://gitt.io):

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
