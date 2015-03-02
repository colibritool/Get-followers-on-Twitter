//TWITTER ADD FRIENDS FOLLOWING SPECIFIC #HASHTAG
//go to https://twitter.com/search?mode=users&q=%23contentmarketing
//open developer console, paste this script and hit enter
__cnt__ = 0;
jQuery('.stream .js-follow-btn > span.follow-text').each(function(i, ele) {
    ele = jQuery(ele);
    if (ele.css('display') != 'block') {
        //alert('already following:', i);
        return;
    }
    setTimeout(function() {
        ele.click();
    }, __cnt__++ * 500);
});