

						$("#linkToDownload").click(function(){
							let tmr=setTimeout(show,1000);
							$('#loader').css('display','block');
						});
						
						function show(){
							$('#loader').css('display','none');
						}
	$(".gambar").attr("src", "https://user.gadjian.com/static/images/personnel_boy.png");
						var $uploadCrop,
						tempFilename,
						rawImg,
						imageId,imgHeight=210,imgWidth=160;
						function readFile(input) {
				 			if (input.files && input.files[0]) {
				              var reader = new FileReader();
					            reader.onload = function (e) {
									$('.upload-demo').addClass('ready');
									$('#cropImagePop').modal('show');
						            rawImg = e.target.result;
					            }
					            reader.readAsDataURL(input.files[0]);
					        }
					        else {
						        swal("Sorry - you're browser doesn't support the FileReader API");
						    }
						}
						$uploadCrop = $('#upload-demo').croppie({
							viewport: {
								width: imgWidth,
								height: imgHeight,
							},
							enforceBoundary: false,
							enableExif: true
						});
						$('#cropImagePop').on('shown.bs.modal', function(){
							// alert('Shown pop');
							$uploadCrop.croppie('bind', {
				        		url: rawImg
				        	}).then(function(){
				        		console.log('jQuery bind complete');
				        	});
						});
						
						
						
						//need to change the size of the select 
						$("#size").change(function(){
							let val=$('#size :selected').text().split('-');
							imgHeight=val[0];
							imgWidth=val[1];
						});
						
						
						
						$('.item-img').on('change', function () { imageId = $(this).data('id'); tempFilename = $(this).val();
					$('#cancelCropBtn').data('id', imageId); readFile(this); });
						$('#cropImageBtn').on('click', function (ev) {
							$uploadCrop.croppie('result', {
								type: 'base64',
								format: 'jpeg',
								size: {width:imgWidth, height:imgWidth}
							}).then(function (resp) {
								$('#item-img-output').attr('src', resp);
								$('#cropImagePop').modal('hide');
								$('#linkToDownload').attr('href', resp);
							});
						});
				// End upload preview image
