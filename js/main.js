$(document).ready(function(){

		// VARIABLES
		var header_menu_name 	= 'vnav-menu',
				header_menu 			= $('.' + header_menu_name),
				body 							= $("body"),
				visibility        = "in visible",
				active            = "active",
		 		backdrop = $("<div />", {
					class: "vmodal-backdrop fade"
				});
		//MENU
			//SCRIPTS
			function toggler(){
				header_menu.toggleClass(active);
				body.toggleClass(active);
			}
			$("[data-menu]").click(function(){
				var menu_href = $(this).attr("data-menu");
				$("[data-menu]").not($(this)).removeClass(active);
				$(this).toggleClass(active);
				toggler();
			});
			$('.anchor-menu').click(function(){
				var href = $(this).attr('href');
				$('body,html').animate({
					scrollTop: $(href).offset().top
				},2000);
				$("[data-menu]").removeClass(active);
				toggler();
				return false;
			});
			// function menuSwipe(){
			// 	if ( $(document).width() <= responsiveBr ) {
			// 		body.hammer().on("swiperight", function(){
			// 			toggler();
			// 		}).on("swipeleft", function(){
			// 			toggler();
			// 		});
			// 	}
			// }
			// menuSwipe();
			// $(window).resize(menuSwipe);
			
		// $(document).click(function(e){
		// 	if( header_menu.hasClass(header_menu_name + '-open') ) {
		// 		if ( ! $(e.target).is('.'+header_menu_name + ', .'+header_menu_name+"*") ) {
		// 			toggler();
		// 		}
		// 	}
		// });

		// SCROLL TO BLOCK
		$('.anchor').click(function(){
			var href = $(this).attr('href');
			$('body,html').animate({
				scrollTop: $(href).offset().top
			},2000);
			return false;
		});
		$('[data-modal-video]').click(function(){
			var modalVideoAttr = $(this).attr("data-modal-video");
			$("<iframe />", {
				src: modalVideoAttr + "?autoplay=1",
				class: "modal-video"
			}).appendTo("#vmodal_video .vmodal_iframe");
		});
			$("#vmodal_video .vmodal_iframe").html('');
		function deleteVideo(){
			$("#vmodal_video .vmodal_iframe").html('');
		}
		$('[data-modal="vmodal"]').click(function(){
			var thisTarget = $(this).attr("data-modal-target");
			if ( thisTarget ) {
				$(thisTarget).addClass(visibility);
				body.append(backdrop).addClass("vmodal-open");
				backdrop.addClass(visibility);
			}else{
				console.log("Need attribtue [data-modal-target].");
			}
		});
		$('[data-close="vmodal"]').click(function(){
			$(this).closest(".vmodal").removeClass(visibility);
			backdrop.removeClass(visibility);
			body.removeClass("vmodal-open");
			deleteVideo();
		});
		$(window).click(function(e){
			if ( backdrop.length > 0 ) {
				if ( $(e.target).is(".vmodal") ) {
					$(".vmodal.in").removeClass(visibility);
					backdrop.removeClass(visibility);
					body.removeClass("vmodal-open");
					deleteVideo();
				}
			}
		});

		//COLLAPSE
			$(".vcollapse-inner.active").children(".vcollapse-body").slideDown();
			$(".vcollapse-header").click(function(){
				$(this).parent().toggleClass(active);
				$(this).next().slideToggle("slow");
				$(this).closest(".vcollapse-wrap").children(".vcollapse-inner").not($(this).parent()).removeClass("active");
				$(this).closest(".vcollapse-wrap").children(".vcollapse-inner").children(".vcollapse-body").not($(this).next()).slideUp("slow");
			});
		//DEVELOPE
		// var widthDevice = $(window).width();
		// $(".development").html(widthDevice);
});	