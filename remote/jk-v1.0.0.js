setInterval(
	function(){
		$('li.inEvaluated:last').click();

		setTimeout(
			function(){
				$('.add_pro:eq(2)').click();
				$('.add_pro:eq(3)').click();
				$('.add_pro:eq(4)').click();
			},
			1000
		);

		setTimeout(
			function(){
				$(".f-rlt-tit.d-add-diag").append('<span class=" js-add-diag-label"><span>儿童保健</span><i class="i-faq-warn"></i></span>');
			},
			1200
		);

		setTimeout(
			function(){
				$('#j-guide-case-save').click();
			},
			1400
		);

		setTimeout(
			function(){
				$('#js-dialog-editor-btn-close-dialog').click();
			},
			2400
		);
	},
	3500
);

