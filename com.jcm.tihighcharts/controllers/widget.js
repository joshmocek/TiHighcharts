function loadChart(data, pic) {
	var url, plotChart;
	var takePicture = (pic != null) ? pic : false;

	function saveImage() {
		Ti.API.info('savedImage')
		var imageView = Ti.UI.createImageView({
			image: $.chartView.toImage()
		});
		$.chartAsImage.add(imageView);
		$.chartAsImage.height = Ti.UI.SIZE;
		$.chartAsImage.visible = true;
		$.chartView.height = 0;
		$.chartView.visible = false;
		$.chartView.remove($.chartWebView);
	}

	if (takePicture) {
		var webFireEvent = function(e) {
			Ti.App.removeEventListener('fromWebView', webFireEvent);
			saveImage();
		}
		Ti.App.addEventListener('fromWebView', webFireEvent);
	}

	url = WPATH('/html/chart.html');
	plotChart = 'plotChart(' + JSON.stringify(data) + ', ' + takePicture + ')';
	$.chartView.height = Ti.UI.SIZE;
	$.chartView.visible = true;
	$.chartWebView.url = url;
	$.chartWebView.addEventListener('load', function() {
		$.chartWebView.evalJS(plotChart);
	});
}

exports.loadChart = loadChart;
