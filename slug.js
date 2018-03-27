/* 
 * File made Dimidrol88
 */

function generateSlug(title, arrItem = 0) {
    var translit = 'a b v g d e ["zh","j"] z i y k l m n o p r s t u f h ts ch sh ["shh","shch"] ~ y ~ e yu ya ~ ["jo","e"]'.split(' ');
    var exceptionChars = '№!@#$%^&*();:?*';
    var slug = '';
    title = title.toLowerCase();
    for (i = 0; i < title.length; ++i) {
	if (exceptionChars.indexOf(title.charAt(i)) < 0) {
	    code = title.charCodeAt(i);
	    charOfSlug = (code >= 1072 ? translit[code - 1072] : title[i]);
	    slug += charOfSlug.length > 2 ? eval(charOfSlug)[arrItem] : charOfSlug;
	};
    }
    return slug.toLowerCase().replace(/-+/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

$(document).ready(function () {
    $(".name-to-slug").on('name-to-slug keyup', function () {
	var slug = generateSlug($('.name-to-slug').val());
	$('.slug-for-name').val(slug);
    });
});