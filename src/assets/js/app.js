$(document).foundation();

$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
  if (newSize === 'small' && oldSize === "medium") {
    $('#main-menu ul').removeClass('expanded');
    $('#main-menu ul').addClass('vertical');
  }

  if (newSize === 'medium' && oldSize === "small") {
    $('#main-menu ul').addClass('expanded');
    $('#main-menu ul').removeClass('vertical');
  }

  if (newSize === 'large' && oldSize === "medium") {
    $('#main-menu ul').addClass('expanded');
    //$('#main-menu ul').removeClass('vertical');
  }
});




var navigation = $('#main-navigation');
var nav = new Foundation.Magellan(navigation);

$(window).scroll(function() {
  console.log(nav.scrollPos);
  if(nav.scrollPos >= 300) {
    $(navigation).addClass('fixed');
  } else {
    $(navigation).removeClass('fixed');
  }
})
