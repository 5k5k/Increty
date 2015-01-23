jQuery(document).ready(function() {
	$('#back-to-top').click(function() {
		// $(window).animate({scrollTop: 0}, 800);
		$('body,html').animate({scrollTop: 0}, 800);
	});

	$('.list-title-item').click(function(e) {		
		extendBottomLinkList(this);
	});
	
	extendBottomLinkList($('#list-item-for-company'));
});

function sortLength (a, b)
{
	return a - b
}

function adjustFootersHeight (animation, targetObj, unextended_items_num) {
	var lengths_array = new Array();
	var selected_obj_length = 0;

	if (arguments.length == 3) {
		
		var obj = $(targetObj).parent('ul');
		selected_obj_length = obj.find('li').length + obj.find('dt').length;
	}
	
	var extended_list_roots = $('.extended-list-root');
	
	extended_list_roots.each(function() {
		pre_length = $(this).find('li').length + $(this).find('dt').length;
		lengths_array.push(pre_length);
	});
	lengths_array.sort(sortLength);

	if (arguments.length == 3) {
		if ((selected_obj_length == lengths_array[lengths_array.length-1]) 
			&& (selected_obj_length-unextended_items_num) > lengths_array[lengths_array.length-2]) {
			lengths_array[lengths_array.length-1] -= unextended_items_num;
		} else if ((selected_obj_length == lengths_array[lengths_array.length-1]) 
			&& (selected_obj_length-unextended_items_num) <= lengths_array[lengths_array.length-2]) {
			lengths_array[lengths_array.length-1] = lengths_array[lengths_array.length-2];
		}
	}
	
	var elements_height = 28*lengths_array[lengths_array.length-1];
	
	// 116 is total margin both footer-middle-part and list-items
	var total_height = elements_height+80;	
	
	// the value 200 is default height of footer-links-frame
	var more_height = total_height - 200;	
	
	if (total_height < 200) {
		total_height = 200;
		more_height = 0;
	}
	
	if (arguments.length < 1 || animation == false) {
		// the value 225 is default height of footer-middle-part
		$('#footer-middle-part').height(225+more_height);	
		$('#footer-links-frame').height(total_height);
		
		// the value 406 is default height of footer
		$('#footer').height(406+more_height);	
		
		// the value 346 is default height of footer-bottom-part
		$('#footer-bottom-part').css({top:(346+more_height)});		} 
	else {
		$('#footer-middle-part').animate({height: ((225+more_height+'px'))});
		$('#footer-links-frame').animate({height: total_height+'px'}, function() {
			if (targetObj != "undefined") {
				$(targetObj).children('dl:first').remove();
			}
		});
		
		$('#footer').animate({height: ((406+more_height)+'px')});
		$('#footer-bottom-part').animate({top: ((346+more_height)+'px')});	
	}
}

function extendBottomLinkList (obj)
{
	var list_title_item = $(obj).get(0);
	var sub_list_items;
	
	if (list_title_item.id == "list-item-for-ad") {
		sub_list_items = new Array('<dt class="sub-extended-list-item"><a href="../views/advertise_01.html">メディア広告</a></dt>', 
			'<dt class="sub-extended-list-item"><a href="../views/advertise_02.html">紙媒体</a></dt>');
	} else if (list_title_item.id == "list-item-for-web") {
		sub_list_items = new Array('<dt class="sub-extended-list-item"><a href="../views/web_01.html">HP制作</a></dt>', 
			'<dt class="sub-extended-list-item"><a href="../views/web_02.html">SEO・SEM</a></dt>');
	} else if (list_title_item.id == "list-item-for-works") {	
		sub_list_items = new Array('<dt class="sub-extended-list-item"><a href="../views/works_01.html">イラスト制作</a></dt>', 
			'<dt class="sub-extended-list-item"><a href="../views/works_02.html">アプリ制作</a></dt>');
	} else if (list_title_item.id == "list-item-for-company") {
		sub_list_items = new Array('<dt class="sub-extended-list-item"><a href="../views/company_01.html">会社概要</a></dt>', 
			'<dt class="sub-extended-list-item"><a href="../views/company_02.html">社名にこめる想い</a></dt>', 
			'<dt class="sub-extended-list-item"><a href="../views/company_03.html">沿革</a></dt>', 
			'<dt class="sub-extended-list-item"><a href="#">アクセスマップ</a></dt>');
	} else {
		$('body,html').scrollTop(0);
		return;
	}
	
	if (list_title_item.className == 'list-title-item') {
		list_title_item.className = 'extended-list-title-item';
		$(list_title_item).show();
		
		var html_text = '<div></div>' + $(obj).text() + '<dl class="extended-list">';

		for (var i=0; i<sub_list_items.length; ++i) {
			html_text += sub_list_items[i];
		}
		html_text += '<dd></dd></dl>';
		
		var list_title_item = $(obj).html(html_text);
		$(list_title_item).animate({height: ((28*(sub_list_items.length+1))+'px')});
		adjustFootersHeight(true);

	} else if (list_title_item.className == 'extended-list-title-item') {
		var sub_extended_list_item_length = $(obj).find('.sub-extended-list-item').length;
		list_title_item.className = 'list-title-item';
		$(list_title_item).animate({height: '28px'});
		adjustFootersHeight(true, list_title_item, sub_extended_list_item_length);
	}
}