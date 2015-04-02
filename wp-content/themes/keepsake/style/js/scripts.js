/*-----------------------------------------------------------------------------------*/
/*	WORDPRESS STUFF
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
"use strict";

    jQuery('p:empty').remove();
    jQuery('iframe').wrap('<figure class="media-wrapper player main"></figure>');
    jQuery('.more-link').parent().remove();
    jQuery('.offset').css('padding-top', jQuery('.navbar').outerHeight());
    jQuery('.dark-wrapper:has(.page-title)').addClass('page-title');
    
    /**
     * Turn linked images into lightbox images
     */
    jQuery(".wp-caption a").each(function(){
    	if( jQuery(this).parent().is('figure') )
    		return;
    	jQuery(this).addClass('fancybox-media').prepend('<div class="text-overlay"><div class="info"><span>'+ jQuery(this).parents('.wp-caption').addClass('ebor-linked').find('.wp-caption-text').text() +'</span></div></div>').wrap('<figure />');
    });
    
});
/*-----------------------------------------------------------------------------------*/
/*	PRELOADER
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function() { // makes sure the whole site is loaded
"use strict";
	jQuery('#status').fadeOut(); // will first fade out the loading animation
	jQuery('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	jQuery('body').delay(350).css({'overflow':'visible'});
})
/*-----------------------------------------------------------------------------------*/
/*	VIDEO
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
"use strict";
    jQuery('.player').fitVids();
});
/*-----------------------------------------------------------------------------------*/
/*	STICKY HEADER
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
	"use strict";

    var menu = jQuery('.navbar'),
        pos = menu.offset();

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > pos.top + menu.height() && menu.hasClass('default') && jQuery(this).scrollTop() > 300) {
            menu.fadeOut('fast', function () {
                jQuery(this).removeClass('default').addClass('fixed').fadeIn('fast');
            });
        } else if (jQuery(this).scrollTop() <= pos.top + 300 && menu.hasClass('fixed')) {
            menu.fadeOut(0, function () {
                jQuery(this).removeClass('fixed').addClass('default').fadeIn(0);
            });
        }
    });

});
/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
"use strict";

    jQuery('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();


    jQuery('.dropdown-menu a, .social .dropdown-menu, .social .dropdown-menu input').click(function (e) {
        e.stopPropagation();
    });

});
jQuery('.btn.responsive-menu').on('click', function() {
    jQuery(this).toggleClass('opn');
});
/*-----------------------------------------------------------------------------------*/
/*	RETINA
/*-----------------------------------------------------------------------------------*/
jQuery(function() {
"use strict";
	jQuery('.retina').retinise();
});
/*-----------------------------------------------------------------------------------*/
/*	PRETTIFY
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
"use strict";
    window.prettyPrint && prettyPrint()
});
/*-----------------------------------------------------------------------------------*/
/*	ISOTOPE
/*-----------------------------------------------------------------------------------*/
jQuery( function() {
	
	// init Isotope
	var $container = jQuery('.classic-masonry .isotope');
	$container.isotope({
		itemSelector: '.item',
		transitionDuration: '0.6s',
		masonry: { columnWidth: $container.width() / 12 },
		layoutMode: 'masonry'
	});
	
	jQuery(window).resize(function(){
		$container.isotope({
			masonry: { columnWidth: $container.width() / 12 }
		});
	});
	
	// bind filter button click
	jQuery('.classic-masonry #filters').on( 'click', 'button', function() {
		var filterValue = jQuery( this ).attr('data-filter');
		jQuery('.item').removeClass('current-in-view').find('figure a').attr('rel','portfolio');
		jQuery('.item' + filterValue).addClass('current-in-view').find('figure a').attr('rel','active');
		$container.isotope({ filter: filterValue });
	});
	
	// change is-checked class on buttons
	jQuery('.classic-masonry .button-group').each( function( i, buttonGroup ) {
		var $buttonGroup = jQuery( buttonGroup );
		$buttonGroup.on( 'click', 'button', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			jQuery( this ).addClass('is-checked');
			jQuery('.classic-masonry .dropdown-toggle').trigger('click');
		});
	});
	
	// layout Isotope again after all images have loaded
	$container.imagesLoaded( function() {
		$container.isotope('layout');
	});

});

jQuery( function() {
	
	// init Isotope
	var $container = jQuery('.full-portfolio .isotope').isotope({
		itemSelector: '.item',
		transitionDuration: '0.6s',
		masonry: {
			columnWidth: '.grid-sizer'
		}
	});
	
	// bind filter button click
	jQuery('.full-portfolio #filters').on( 'click', 'button', function() {
		var filterValue = jQuery( this ).attr('data-filter');
		jQuery('.item').removeClass('current-in-view').find('figure a').attr('rel','portfolio');
		jQuery('.item' + filterValue).addClass('current-in-view').find('figure a').attr('rel','active');
		$container.isotope({ filter: filterValue });
	});
	
	// change is-checked class on buttons
	jQuery('.full-portfolio .button-group').each( function( i, buttonGroup ) {
		var $buttonGroup = jQuery( buttonGroup );
		$buttonGroup.on( 'click', 'button', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			jQuery( this ).addClass('is-checked');
			jQuery('.full-portfolio .dropdown-toggle').trigger('click');
		});
	});
	
	// layout Isotope again after all images have loaded
	$container.imagesLoaded( function() {
		$container.isotope('layout');
	});
	
});

jQuery('.button-group').click(function(e) {
	e.stopPropagation();
});
/*-----------------------------------------------------------------------------------*/
/*	IMAGE ICON HOVER
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
"use strict";
    jQuery('.icon-overlay a').prepend('<span class="icn-more"></span>');
});
/*-----------------------------------------------------------------------------------*/
/*	FANCYBOX
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
"use strict";
    jQuery(".fancybox-media").fancybox({
        arrows: true,
        padding: 0,
        closeBtn: true,
        openEffect: 'fade',
        closeEffect: 'fade',
        prevEffect: 'fade',
        nextEffect: 'fade',
        helpers: {
            media: {},
            overlay: {
                locked: false
            },
            buttons: false,
            thumbs: {
                width: 50,
                height: 50
            },
            title: {
                type: 'inside'
            }
        },
        beforeLoad: function () {
            var el, id = jQuery(this.element).data('title-id');
            if (id) {
                el = jQuery('#' + id);
                if (el.length) {
                    this.title = el.html();
                }
            }
        }
    });
});
/*-----------------------------------------------------------------------------------*/
/*	DATA REL
/*-----------------------------------------------------------------------------------*/
jQuery('a[data-rel]').each(function () {
"use strict";
    jQuery(this).attr('rel', jQuery(this).data('rel'));
});
/*-----------------------------------------------------------------------------------*/
/*	CONTENT SLIDER
/*-----------------------------------------------------------------------------------*/
/**************************************************************************
 * jQuery Plugin for Content Slider
 * @version: 1.0
 * @requires jQuery v1.8 or later
 * @author ThunderBudies
 **************************************************************************/
jQuery(document).ready(function () {

	 var speed = 1000;			// SLIDE OUT THE MAIN CONTENT
	 var speed2 = 600;			// FADE IN THE NEW CONTENTS
	 var speed3 = 1000;			
	 var header_offset = 120;

	 jQuery.fn.extend({
        unwrapInner: function (selector) {
            return this.each(function () {
                var t = this,
                    c = jQuery(t).children(selector);
                if (c.length === 1) {
                    c.contents().appendTo(t);
                    c.remove();
                }
            });
        }
    });
    
    jQuery('.ebor-ajax-wrapper .dropdown-menu button').each(function(i) {
    	jQuery(this).click(function() {
			jQuery('.ebor-ajax-wrapper').css({minHeight:'0px'});
		});
    });

	///////////////////////////
	// GET THE URL PARAMETER //
	///////////////////////////
	function getUrlVars(hashdivider){
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf(hashdivider) + 1).split('_');
		for(var i = 0; i < hashes.length; i++)
		{
			hashes[i] = hashes[i].replace('%3D',"=");
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	}
	////////////////////////
	// GET THE BASIC URL  //
	///////////////////////
    function getAbsolutePath() {
		var loc = window.location;
	 	var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
		return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
    }
    //////////////////////////
	// SET THE URL PARAMETER //
	///////////////////////////
    function updateURLParameter(paramVal){
    	var baseurl = window.location.pathname.split("#")[0];
    	var url = baseurl.split("#")[0];
    	if (paramVal==undefined) paramVal="";
  		par='#'+paramVal;
		if (par=="#") par=" ";
	    window.location.replace(url+par);
	}

    var items = jQuery('.item.current-in-view a.ajax-item'),
    	deeplink = getUrlVars("#");

	 jQuery.ajaxSetup({
        cache: false
    });

    // FIRST ADD THE HANDLING ON THE DIFFERENT PORTFOLIO ITEMS
    items.slice(0, items.length).each(function (i) {
        var item = jQuery(this);
        item.data('index', i);

		var hashy = window.pageYOffset;


        if (jQuery.support.leadingWhitespace == false){
        	var conurl = jQuery(this).data('contenturl');
        	item.attr('href',conurl);
        } else {

				// THE HANDLING IN CASE ITEM IS CLICKED
				item.click(function () {

					hashy = window.pageYOffset;

					jQuery('.button-group.dropdown-menu.dropdown-menu-right.open').removeClass("open");

					var cur = item.data('index');
					jQuery('body').data('curPortfolio',cur);

					var hashy = window.pageYOffset;

					var grid = jQuery('.ebor-ajax-wrapper');

					// PREPARE THE CONTAINER FOR LOAD / REMOVE ITEMS
					grid.css({'minHeight':grid.outerHeight()+"px",'maxHeight':grid.outerHeight()+"px", 'position':'relative','overfow':'hidden'});
					grid.wrapInner('<div class="grid-remove"></div>');

					// REMOVE THE GRID
					var gr = grid.find('.grid-remove');
					gr.css({width:grid.outerWidth()+"px",height:grid.height()});
					gr.animate({'marginLeft':'-120%'},{duration:speed,queue:false, easing:"easeInOutCubic"});
					gr.fadeOut(speed+500);

					grid.append('<div class="grid-newcontent"></div>');
					grid.find('.grid-newcontent').fadeOut(0);
					grid.append('<div class="grid-loader"></div>');



					 //ADD A NEW CONTENT WRAPPER
					var conurl = jQuery(this).data('contenturl');
					var concon = jQuery(this).data('contentcontainer');
					updateURLParameter(conurl);

					var extraclass = "";

					clearTimeout(jQuery('body').data('minhreset'));
					// PRELOAD THE NEW ITEM
					setTimeout(function () {
						if (conurl != undefined && conurl.length > 0) {

							jQuery('.grid-newcontent').load(conurl + " " + concon, function () {
								
								jQuery('body,html').animate({
									scrollTop: (grid.offset().top-(header_offset-60)) + "px"
								}, {
									duration: 600,
									queue: false
								});


								var gnc = grid.find('.grid-newcontent');
								gnc.fadeIn(speed2);
								//grid.animate({'maxHeight':gnc.innerHeight()+"px"});
								grid.css({'maxHeight':'none'});
								jQuery('body').data('minhreset',setTimeout(function() {
									grid.transition({'minHeight':'0px','maxHeight':'none',duration:400});
								},1500));
								setTimeout(function() {
									var callback = new Function(item.data('callback'));
									callback();
								},speed2+100);
								jQuery('.grid-loader').fadeOut(speed2)
								setTimeout(function() {
									jQuery('.grid-loader').remove();
								},speed2);
							});
						}
					}, speed + 200);



					return false;

				});
			if (i==0) {
		
				jQuery(document).on('click', '.btn.back', function () {
					updateURLParameter("!");
					jQuery('.button-group.dropdown-menu.dropdown-menu-right.open').removeClass("open");
					
					var grid = jQuery('.ebor-ajax-wrapper');
					clearTimeout(jQuery('body').data('minhreset'));
					
					jQuery('body,html').animate({
						scrollTop: (grid.offset().top-(header_offset-60)) + "px"
					}, {
						duration: 300,
						queue: false
					});
					
					var gr = grid.find('.grid-remove');
					grid.find('.grid-newcontent').fadeOut(speed2);
					setTimeout(function() {
						grid.find('.grid-newcontent').remove();
						grid.find('.grid-remove').find('div').first().unwrap();
						grid.transition({'minHeight':'0px',duration:300});
						var $container = jQuery('.items').isotope('reLayout');
					},speed3);
					grid.css({'minHeight':gr.height()+"px", 'maxHeight':'none'});
					gr.animate({'marginLeft':'0'},{duration:speed,queue:false, easing:"easeInOutCubic"});
					gr.fadeIn(speed+800);
					setTimeout(function() {
						var $container = jQuery('.items').isotope('reLayout');
					},100);
					return false;
				});

							jQuery(document).on('click', '.nav-next-item', function () {
								
								var cur = jQuery('body').data('curPortfolio');
								cur = cur + 1;
								if (cur == items.length) cur = 0;

								jQuery('body').data('curPortfolio',cur);
								var nextitem;
								items.slice(cur, cur + 1).each(function (re) {
									
									nextitem = jQuery(this);
								});
								//console.log("Next Item:"+cur);
								swapContents(nextitem);
								return false;
						});
							
							jQuery(document).on('click', '.nav-prev-item', function () {
								
								var cur = jQuery('body').data('curPortfolio');
								cur = cur - 1;
								if (cur < 0) cur = items.length - 1;
								jQuery('body').data('curPortfolio',cur);
								var nextitem;
								items.slice(cur, cur + 1).each(function (re) {
									
									nextitem = jQuery(this);
								});
								//console.log("Next Item:"+cur);
								swapContents(nextitem);
								return false;
						});
					}
		}
	});

	var firstfound=0;
	items.slice(0, items.length).each(function (i) {
		var item=jQuery(this);
		if (deeplink!=undefined && deeplink.length>0 && deeplink == jQuery(this).data('contenturl')) {
			if (firstfound==0) {
				setTimeout(function() {item.click();},2000);
				firstfound=1;
			}
		}
	});

	function swapContents(nextitem) {

			clearTimeout(jQuery('body').data('minhreset'));

			var grid = jQuery('.ebor-ajax-wrapper'),
				gr = grid.find('.grid-remove');

			grid.append('<div class="grid-loader"></div>');

			grid.find('.grid-newcontent').fadeOut(speed2/2);
			grid.css({'minHeight':gr.height()+"px", 'maxHeight':'none'});

			setTimeout(function() {

					//ADD A NEW CONTENT WRAPPER
					var conurl = nextitem.data('contenturl');
					var concon = nextitem.data('contentcontainer');
					updateURLParameter(conurl);
					var extraclass = "";

					if (conurl != undefined && conurl.length > 0) {

							jQuery('.grid-newcontent').load(conurl + " " + concon, function () {
								var gnc = grid.find('.grid-newcontent');
								gnc.fadeIn(speed2);
								//grid.animate({'maxHeight':gnc.innerHeight()+"px"});
								grid.css({'maxHeight':'none'});
								jQuery('body').data('minhreset',setTimeout(function() {
									grid.css({'minHeight':'auto','maxHeight':'none'});
								},2500));

								setTimeout(function() {
									var callback = new Function(nextitem.data('callback'));
									callback();
								},speed2+100);
								jQuery('.grid-loader').fadeOut(speed2)
								setTimeout(function() {
									jQuery('.grid-loader').remove();
								},speed2);
							});
						}
			},speed2+100);
	}

});
/*-----------------------------------------------------------------------------------*/
/*	SLIDER PRO
/*-----------------------------------------------------------------------------------*/ 
jQuery( document ).ready(function( $ ) {
"use strict";

	jQuery( '.portfolio-slider' ).each(function(){
		if( $(this).find('.sp-slide').length < 3 ){
			$(this).sliderPro({
				width: 1170,
				height: 600,
				arrows: true,
				buttons: true,
				autoHeight: true,
				waitForLayers: false,
				autoplay: true,
				autoScaleLayers: true,
				slideDistance: 0,
				loop: false
			});	
		} else {
			$(this).sliderPro({
				width: 1170,
				height: 600,
				arrows: true,
				buttons: true,
				autoHeight: true,
				waitForLayers: false,
				autoplay: true,
				autoScaleLayers: true,
				slideDistance: 0
			});	
		}
	});
	
	jQuery( '.blog-slider' ).each(function(){
		if( $(this).find('.sp-slide').length < 3 ){
			$(this).sliderPro({
				width: 1170,
				height: 600,
				arrows: true,
				buttons: true,
				autoHeight: true,
				waitForLayers: false,
				autoplay: false,
				autoScaleLayers: true,
				slideDistance: 0,
				loop: false
			});
		} else {
			$(this).sliderPro({
				width: 1170,
				height: 600,
				arrows: true,
				buttons: true,
				autoHeight: true,
				waitForLayers: false,
				autoplay: false,
				autoScaleLayers: true,
				slideDistance: 0
			});
		}
	});
	
	jQuery( '.main-slider' ).each(function(){
		if( $(this).find('.sp-slide').length < 3 ){
			$(this).sliderPro({
				width: 1170,
				height: 600,
				fade: true,
				arrows: true,
				buttons: false,
				autoHeight: true,
				autoScaleLayers: true,
				thumbnailArrows: false,
				autoplay: false,
				slideDistance: 0,
				thumbnailWidth: 141,
				thumbnailHeight: 106,
				loop: false
			});
		} else {
			$(this).sliderPro({
				width: 1170,
				height: 600,
				fade: true,
				arrows: true,
				buttons: false,
				autoHeight: true,
				autoScaleLayers: true,
				thumbnailArrows: false,
				autoplay: false,
				slideDistance: 0,
				thumbnailWidth: 141,
				thumbnailHeight: 106
			});
		}
	});
	
});
/*-----------------------------------------------------------------------------------*/
/*	CALL PORTFOLIO SCRIPTS
/*-----------------------------------------------------------------------------------*/
function callPortfolioScripts() {
	
	jQuery('.player').fitVids();
	
	jQuery( '.portfolio-slider' ).sliderPro({
		width: 1170,
		height: 600,
		arrows: true,
		buttons: true,
		autoHeight: true,
		waitForLayers: false,
		autoplay: true,
		autoScaleLayers: true,
		slideDistance: 0
	});

};
/*-----------------------------------------------------------------------------------*/
/*	TOOLTIP
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
"use strict";
    if (jQuery("[rel=tooltip]").length) {
        jQuery("[rel=tooltip]").tooltip();
    }
});
/*-----------------------------------------------------------------------------------*/
/*	TABS
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
"use strict";

    jQuery('.tabs.tabs-top').easytabs({
        animationSpeed: 300,
        updateHash: false
    });
    
    jQuery('.panel-group').find('.panel-default:has(".in")').addClass('panel-active');
    
    jQuery('.panel-group').on('shown.bs.collapse', function (e) {
       jQuery(e.target).closest('.panel-default').addClass(' panel-active');
    }).on('hidden.bs.collapse', function (e) {
       jQuery(e.target).closest('.panel-default').removeClass(' panel-active');
    });
    
});
/*-----------------------------------------------------------------------------------*/
/*	NAV BASE LINK
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($) {
"use strict";

	jQuery('a.js-activated').not('a.js-activated[href^="#"]').click(function(){
		var url = $(this).attr('href');
		window.location.href = url;
		return true;
	});
		
});