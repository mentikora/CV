$('document').ready(function() {
	var options = { videoId: 'ck0MCCIFD-o', start: 3, mute: true };
	if ( $(document).width() > 991 ) {
		$('#preload').tubular(options);
	} else{
		$('#preload').css('display', 'none');
		$('#wrapper').css('display', 'block');
	};

	
});
