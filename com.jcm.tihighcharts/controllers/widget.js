function loadChart(data, pic) { // data argument must be properly designed so it can work in different situations
	var url, plotChart;
	var takePicture = (pic != null) ? pic : false;
	if (takePicture) {
		var webFireEvent = function(e) {
			Ti.App.removeEventListener('fromWebView', webFireEvent);
			getImage();
		}
		Ti.App.addEventListener('fromWebView', webFireEvent);
	}

	url = WPATH('/html/chart.html');
	plotChart = 'plotChart(' + JSON.stringify(data) + ', ' + takePicture + ')';
	$.chartView.height = Ti.UI.SIZE;
	$.chartView.visible = true;
	$.chartWebView.url = url;
	$.chartWebView.addEventListener('load', function() {
		Ti.API.info('chartWebView loaded');
		$.chartWebView.evalJS(plotChart);
	});
}

function getImage() {
	function savedImage(blob) {
		var imageView = Ti.UI.createImageView({
			image: blob.blob
		});
		$.chartAsImage.add(imageView);
		$.chartAsImage.height = Ti.UI.SIZE;
		$.chartAsImage.visible = true;
		$.chartView.height = 0;
		$.chartView.visible = false;
		//once the webview image has been set remove the webview
		$.chartView.remove($.chartWebView);
	}

	//save webview as an image
	$.chartView.toImage(savedImage);
}

exports.loadChart = loadChart;
exports.getImage = getImage;
