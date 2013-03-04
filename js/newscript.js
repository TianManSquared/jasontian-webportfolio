/////////////////////////////////////////////////
// Script Organization
//
// Page Header & Navigation
// About
// Other Design Work (Masonry)
// Radius 
//
//////////////////////////////////////////////////


(function() {

/////////////////////////////////////////////////
//
//
// Page Header & Navigation
//
//
//////////////////////////////////////////////////

function main_switchtab(id){
	$('.maintab_wrapper').not(id).hide();
	$(id).fadeIn();
	if (id=='#misc_wrapper'){
		$('#misc_wrapper_masonry_container').masonry('reload');
	}
}

$(function() {
	$('.maintab').click(function(){main_switchtab('#'+this.id+'_wrapper');});
});

/////////////////////////////////////////////////
//
//
// About Section
//
//
//////////////////////////////////////////////////

function expand_aboutpanel(data){
	var selector_id = '#about_'+data;
	var selector_content = '#about_'+data+'_content';
	var selector_title = '#about_'+data+'_title';
	var selector_cover = '#about_'+data+'_cover';
	$('.about_content').hide();
	$('.about_title').not(selector_title).show();
	$(selector_title).fadeOut(400);
	$('.about_cover').not(selector_cover).animate({"width":"180px"});
	$(selector_cover).animate({"width":"600px"});
	$('.about_panel').not(selector_id).animate({"width":"180px"});
	$(selector_id).animate({"width":"600px"}, function(){$(selector_content).fadeIn('1000');});
}

$(function() {
	$('.about_cover, .about_title').click(function(){expand_aboutpanel($(this).data('aboutmarker'));});
});

	//////////////////////////////////
	//
	// Software Skills highlight
	//
	//////////////////////////////////

$(function(){
	$('.about_overview_skills_softwarebkgd').hover(
		function() {$('#about_skills_softwarename').html($(this).data('name'));}, 
		function() {$('#about_skills_softwarename').html('Industry Software Proficiency:');}
	);
});

/////////////////////////////////////////////////
//
//
// Other Design Work (Masonry)
//
//
//////////////////////////////////////////////////

function begin_masonry2() {
	$('#misc_wrapper_masonry_container').masonry({
	    columnWidth : 320,
	    isAnimated: true,
	    isFitWidth: true
	});
}

function show_extended(id){
	$('#design_showcase_contentpanel').slideDown(500);
	$('.design_showcase_content').fadeOut();
	$('.design_showcase_content.'+id).fadeIn(400);
	$("html, body").animate({ scrollTop: "0px" });
}

function hide_extended(){
	$('#design_showcase_contentpanel').slideUp(500);
}

$(function() {
	$('.design_showcase').click(
		function () {show_extended(this.id)}
	);
	$('.design_showcase').hover(
		function () {$('.design_descriptionpanel.'+this.id).slideDown(300);},
  		function () {$('.design_descriptionpanel.'+this.id).slideUp(300);}
	);
	$('#misc_wrapper_masonry_container').imagesLoaded(begin_masonry2);
	$('.design_showcase_content_close').click(hide_extended);
});

/////////////////////////////////////////////////
//
//
// Featured Design Blocks
//
//
//////////////////////////////////////////////////


function expand_display(){

}

function display_background(color){
	$('#design_background').css({"background-color":color});
}

$(function() {
	$('.design_block').hover(
		function () {
			$('.design_descriptionpanel#'+this.id).slideDown(200);
			display_background($(this).data('bkgdcolor'));
		},
  		function () {
  			$('.design_descriptionpanel#'+this.id).slideUp(200);
  			$('#design_background').css({"background-color":"transparent"});
  		}
	);
});

/////////////////////////////////////////////////
//
//
// Radius Design Section
//
//
//////////////////////////////////////////////////

	////////////////////////////////
	//
	// Branding Selectors
	//
	////////////////////////////////

function show_branding(id){
	$('.radius_slide_branding_option_content').not(id).hide();
	$(id).fadeIn();
}

$(function() {
	$('.radius_slide_branding_option').click(function(){ show_branding('#'+this.id+'_content');});
});

	////////////////////////////////
	//
	// Design iPhone5 Controls
	//
	////////////////////////////////

var design_iphone5screens=['#radius_mobile_discover1','#radius_mobile_discover2','#radius_mobile_discover3'];
var design_iphone5screencounter=0;

function design_iphone5_forward(){
	console.log('forward!');
	for (var i = 0; i < design_iphone5screens.length; i++) {
		$(design_iphone5screens[i]).hide();
	};
	design_iphone5screencounter=(design_iphone5screencounter+1)%3;
	$(design_iphone5screens[design_iphone5screencounter]).fadeIn(800);
}

function design_iphone5_back(){
	console.log('back!');
	for (var i = 0; i < design_iphone5screens.length; i++) {
		$(design_iphone5screens[i]).hide();
	};
	design_iphone5screencounter=(design_iphone5screencounter-1+3)%3;
	$(design_iphone5screens[design_iphone5screencounter]).fadeIn();
}

$(function() {
	$('#design_iphone5_forward').click(design_iphone5_forward);
	$('#design_iphone5_back').click(design_iphone5_back);
	$('.design_iphone5_screen').click(design_iphone5_forward);
});

	////////////////////////////////
	//
	// Radius iPhone5 Controls
	//
	////////////////////////////////

var iphone5screens=['#radius_mobile_splash','#radius_mobile_discover','#radius_mobile_beacon','#radius_mobile_newsfeed','#radius_mobile_me'];
var iphone5screencounter=0;

function iphone5_forward(){
	for (var i = 0; i < iphone5screens.length; i++) {
		$(iphone5screens[i]).hide();
	};
	iphone5screencounter=(iphone5screencounter+1)%5;
	$(iphone5screens[iphone5screencounter]).fadeIn(800);
}

function iphone5_back(){
	for (var i = 0; i < iphone5screens.length; i++) {
		$(iphone5screens[i]).hide();
	};
	iphone5screencounter=(iphone5screencounter-1+5)%5;
	$(iphone5screens[iphone5screencounter]).fadeIn();
}

function iphone5_home(){
	for (var i = 0; i < iphone5screens.length; i++) {
		$(iphone5screens[i]).hide();
	};
	iphone5screencounter=0;
	$(iphone5screens[iphone5screencounter]).fadeIn();
}

$(function() {
	$('#iphone5_homebutton').click(iphone5_home);
	$('#iphone5_forward').click(iphone5_forward);
	$('#iphone5_back').click(iphone5_back);
	$('.iphone5_screen').click(iphone5_forward);
});

	///////////////////////////////////
	//
	// iOS download Link Expand
	//
	///////////////////////////////////

function expandDownload(){
	$('.radius_slide#package').animate({"height":"450px"});
    $('#footer_mobile_download_panel').animate({"height": "220px", "width":"300px"}, "fast")
    $('#ico_iphone').hide()
    $('#footer_mobile_download_panel_content').show()  
}

$(function() {
	$('#footer_mobile_download').click(expandDownload);
});



})();

