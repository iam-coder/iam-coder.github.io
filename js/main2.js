/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);


//end of jquery migration plugin//
String.prototype.supplant = function(o) {
    return this.replace(/{([^{}]*)}/g,
        function(a, b) {
            var r = o[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        }
    );
};

$.config = {
	cellOpacity: 0.1,
	galleryMenuOpacity: 0.4,
	categories: ['websites','illustration','branding','branding2'],
	gradientMinHeight: 60
};

function Category(params) {
	this.name = '';
	this.$subMenuUl = null;
	this.$menuLi = null;
	this.$miniNav = null;
	
	if(params) {
		$.extend(this, params);
	}
}

function Project(params) {
	this.id = '';
	this.category = null;
	this.pos = 0;
	this.title = '';
	this.date = '';
	this.description = '';
	this.$slides = null;
	this.$subMenuLi = null;
	this.$miniNavUl = null;
	
	if(params) {
		$.extend(this, params);
	}
}

var
	categories,
	categoriesPos,
	currentCategoryName,
	categoryProjects,
	projectSlides,
	selectRandomCellCategory,
	selectCellCategory,
	openAbout,
	closeAbout,
	projects,
	curSlide,
	currentProject,
    windowLoaded = false;

	
var dom = {
	init: function() {
		dom.windowHeight = $(window).height();
		$(window).resize(function() {
			dom.windowHeight = $(this).height();
		});
		dom.$page = $('#page');
		dom.$footer = $('#footer');
        dom.$footerInner = $('#footer-inner');
		dom.$footerFix = $('#footer_fix');
		dom.footerHeight = dom.$footer.height();
		dom.$copyright = $('#copyright');
		dom.$data = $('#data');
		dom.dataHeight = dom.$data.height();
		dom.$dataItems = $('.item:not(.empty):not(.main)', dom.$data);
		dom.$gallery = $('#gallery');
		dom.$galleryInner = $('.gallery_inner', dom.$gallery);
		dom.$galleryBody = $('.gallery_inner_body', dom.$gallery);
		dom.$galleryTop = $('.gallery_inner_top', dom.$gallery);
		dom.$galleryBottom = $('.gallery_inner_bottom', dom.$gallery);
		dom.$menu = $('#gallery_menu');
		dom.$galleryPanel = $('#gallery_panel');
		//dom.$catMenu = $('#gallery_category_menu');
		dom.$subMenu = $('#gallery_sub_menu');
		dom.$slide = $('#gallery_slide');
		dom.$slideWrap = $('#gallery_slide_wrap');
		dom.$nav = $('#gallery_navigation');
		dom.$miniNav = $('#mini_nav', dom.$nav);
		dom.$btnZoomA = $('.zoom a', dom.$nav);
		dom.$btnNext = $('#next_project');
		dom.$btnSlideshow = $('.slideshow', dom.$nav);
		dom.$project = $('#gallery_project');
		dom.$projectH3 = $('h3', dom.$project);
		dom.$projectDate = $('.date', dom.$project);
		dom.$projectP = $('p', dom.$project);
		dom.$mainItems = $('.item.main', dom.$data);
		dom.$about = $('#about');
		dom.$aboutInner = $('.about_inner', dom.$about);
		dom.$relatedPojects = $('#gallery_related_projects');
		dom.$relatedPojectsList = $('.list', dom.$relatedPojects);
		dom.$relatedProjectsInner = $('.gallery_related_projects_inner', dom.$relatedPojects);
		dom.$hotkeyNotes = $('#hotkey-notes', dom.$relatedPojects);
		dom.$hAllBtn = $('#highlight_all');
		dom.$galArrows = 0;

        if (!window.isIos) {
            dom.$copyright
                .bind('mouseenter', function() {
                    $(this).stop().fadeTo('normal', 1)
                })
                .bind('mouseleave', function() {
                    $(this).stop().fadeTo('normal', .3)
                });
        }
		$(window).load(function(){
            windowLoaded = true;	
		});
			
	}
};

var route = {
	url: '',
	iframe: null,
	init: function() {
		if ($.browser.msie && $.browser.version < 8) {
            this.iframe = $('<iframe>', {'src': 'about:blank'}).hide().appendTo($(document.body))[0];
            this.setUrl(this.url || '');
        }
		
		var T = this;
        var test = function(disableTimer) {
            var url = T.getUrl();
            if(url != T.url) {
                T.exec(url);
            }
            if(!disableTimer) {
                setTimeout(test, 50);
            }
        };
        var doc_mode = document.documentMode;
        if('onhashchange' in window && (typeof doc_mode == 'undefined' || doc_mode > 7)) {
            window.onhashchange = function() {test(false)};
			test(false);
        } else {
            setTimeout(test, 50); // �� interval, ���� T.exec �� ���������� ������ ���������
        }
	},
	setUrl: function(url, notShowInHistory) {
        if(this.iframe) {
            this.iframe.document.title = document.title;
            this.iframe.document.location.hash = '#'+url;
        }

		if (notShowInHistory) {
			document.location.replace(document.location.href.split('#')[0] + '#' + url);
		} else {
			document.location.hash = url;
		}
    },
    getUrl: function() {
        if(this.iframe) {
            return this.iframe.document.location.hash.replace('#', '');
        }
        return document.location.hash.replace('#', '');
    },
	exec: function(url) {
		this.url = url;
		
		var categoryRegex = new RegExp('^(' + $.config.categories.join('|') + ')\/?$');
		var projectRegex = new RegExp('^(' + $.config.categories.join('|') + ')\\/([a-z0-9-]+)\/?');
		var values,category;
		if(url == '') {
			closeAbout();
			selectCellCategory(currentCategoryName);
			//selectRandomCellCategory();
		} else if (url == 'about') {
			openAbout();
		} else if(categoryRegex.test(url)) {
			values = categoryRegex.exec(url);
			category = categoryProjects[values[1]];
			if(typeof category == 'undefined') return;
			var project = category.data[0];
			this.setUrl(values[1] + '/' + project.id, true);
		} else if(projectRegex.test(url)) {
			values = projectRegex.exec(url);
			category = categoryProjects[values[1]];
			if(typeof category == 'undefined') return;
			closeAbout();
            if (windowLoaded) {

                $.openProject(category.data[getProjectIndexById(values[2],category.data)]);
            } else {
                $(window).load(function(){
                    windowLoaded = true;
                    $.openProject(category.data[getProjectIndexById(values[2],category.data)]);
                })
            }

            window['_gaq'] && window['_gaq'] && _gaq.push(['_trackPageview', location.pathname + location.search  + location.hash]);
		} else {
			//console.log('bad url')
		}
	}
};

var getProjectIndexById = function(id, array) {
	if (!array) array = $.projectsData;
	for (var key in array) {
		if (array[key]['id'] == id) break;
	}
	return key;
};

var getProjectImagesById = function(id, array) {
	if (!array) array = $.projectsData;
	for (var key in array) {
		if (array[key]['id'] == id) break;
	}
	return array[key].images || [];
};

var getCategoryNameById = function(id, array){
	if (!array) array = $.projectsData;
	var catName = '';
	for (var key in array) {
		if (array[key]['id'] == id) {
			catName = array[key].category;
			break;
		}
	}
	return catName;
};


var init = function() {
	categories = {};
	categoriesPos = [];
	projects = {};

	categoryProjects = 	{};
	
	projectSlides = {};
	
	var currentSlide = null;

	updatePageHeight = function(contentHeight) {
		dom.$page.css({
			height: dom.$page.height()+'px',
			minHeight: 0
		});
		var newPageHeight = contentHeight+dom.footerHeight;
		if(newPageHeight > dom.windowHeight) {
			//dom.$page.animate({height: newPageHeight+'px'});
			dom.$page.height(newPageHeight);
		} else {
			//dom.$page.animate({height: dom.windowHeight+'px'});
			dom.$page.height(dom.windowHeight);
		}
	};

	//
	// ������� ��� ������� ������� ����-���������
	//
	var buidProjectSlides = function(project) {
		for (var cacheLi = '', i = 0, l = $.projectsData[project.index].images.length; i < l; i += 1) {
			cacheLi += '<li><div class="loader"></div></li>';
		}
		project.$miniNavUl.html(cacheLi);
	};

	// ==========================================================================

	//
	// ������� ������� ���������
	//
	var name;
	for(i = 0; i < $.config.categories.length; ++i) {
		name = $.config.categories[i];

		categories[name] = new Category({
			name: name,
			$subMenuUl: $('.'+name, dom.$subMenu),
			$menuLi: $('.'+name, dom.$menu),
			$miniNav: $('.'+name, dom.$miniNav),
			pos: i
		});
		
		categoriesPos[i] = name;
		
		categoryProjects[name] = {data: [], current: 0};
	}
	
	//
	// ������� ������� �������� �� ���
	//
	//
	/*
	var menuCache = {
		websites: '',
		illustration: '',
		branding: ''
	},
		project = '';
	for (var key in $.projectsData) {
		project = $.projectsData[key];
		if (!project['name']) continue;
		menuCache[project.category] += '<li><a href="#' + project.category + '/' + project.id +'">' + project.name + '</a></li>'
	}
	$('#gallery_sub_menu > .websites').html(menuCache['websites']);
	$('#gallery_sub_menu > .illustration').html(menuCache['illustration']);
	$('#gallery_sub_menu > .branding').html(menuCache['branding']);
      */


	// ���������� ������ �� ����
	dom.$dataItems
		.bind('mouseenter', function() {
			$(this).stop().fadeTo('fast', 1).css('z-index', 3);
		})
		.bind('mouseleave', function() {
			$(this).css('z-index', 2);
			if(!$(this).hasClass('hightlight')) {
				$(this).stop().fadeTo('fast', $.config.cellOpacity)
			}
		});


	for (var key in $.projectsData) {
		var pr = $.projectsData[key];

		category = categories[pr.category];

		if(!category) {
			return true;
		}

		var project = new Project({
			id: pr.id,
			index: key,
			category: category,
			pos: 0,
			title: pr.name,
			date: '<div class="month month' + pr.date[0] + '"></div> <div class="year year20' + pr.date[1] + '"></div>',
			description: pr.text || '',
			$slides: $('<div>', {'class': 'gallery_project_slides h'}),
			$subMenuLi: $('<li>'),
			$miniNavUl: $('<ul>', {'class': 'h'}),
			related: pr.related || [],
			$related: $('<div>', {'class': 'project h'})
		});


		// ����� � ����
		$('<a>', {href: '#' + category.name + '/' + pr.id}).text(pr.name).appendTo(project.$subMenuLi);
		category.$subMenuUl.append(project.$subMenuLi);

		// ��������
		project.$miniNavUl.appendTo(category.$miniNav);

		// ��������� ������ � ������ � ������ ��� �������
		var newLength = categoryProjects[category.name].data.push(project);
		project.pos = newLength-1;
		projects[pr.id] = {category: category.name, pos: project.pos || 1};

		// ��������� � �������
		projectSlides[pr.id] = {data: [], current: 0};
		buidProjectSlides(project);
	}

	// ������ ������ �� related projects
	(function() {
		var cat, i, j, project, projId;
		for(cat in categoryProjects) {
			for(i = 0; i < categoryProjects[cat].data.length; ++i) {
				project = categoryProjects[cat].data[i];
				if(!project.related.length) continue;

				for(j = 0; j < project.related.length; ++j) {
					projId = project.related[j];
					if(!projects[projId]) continue;

					project.$related
						.append('<a href="#' + getCategoryNameById(projId) + '/' + projId + '">' + $.projectsData[getProjectIndexById(projId)].name + '</a>');

					if(j+1 < project.related.length) {
						project.$related.append(', ');
					}
				}

				project.$related.appendTo(dom.$relatedPojectsList);
			}
		}
	})();
	// ��������� �������� �������� � ���� ���������
	for(var i = 0; i < $.config.categories.length; ++i) {
		name = $.config.categories[i];

		categories[name]
			.$menuLi
				.find('.count-wrapper').html(function(){
					var nums = ('' + categoryProjects[name].data.length).split(''),
						counter = "";
					for (var l = nums.length, z = 0; z < l; z += 1) {
						counter += '<div class="count i'+ nums[z] +'"></div>'
					}

					return counter;
				});
	}	

    if (!window.isIos) {
        dom.$menu.fadeTo(0, $.config.galleryMenuOpacity);
        dom.$galleryPanel
            .bind('mouseenter', function() {dom.$menu.stop().fadeTo('normal', 1)})
            .bind('mouseleave', function() {dom.$menu.stop().fadeTo('normal', $.config.galleryMenuOpacity)});
    }

	var hightlightCells = function(category) {
		dom.$dataItems
			.filter('.' + category)
			.fadeTo('fast', 1)
			.addClass('hightlight');
	};

	var hightlightAllCells = function() {
		dom.$dataItems
            .stop()
			.fadeTo('fast', 1)
			.addClass('hightlight');
	};


	var offCells = function(notCategory){
        dom.$mainItems.removeClass('selected');
        dom.$dataItems
            .not('.' + notCategory)
            .stop()
            .fadeTo('fast', $.config.cellOpacity)
            .removeClass('hightlight');
	};

	dom.$mainItems.each(function() {
		var $this = $(this);
		$this.children('a, span').bind('click', function(e) {

            e.preventDefault();
			var category = $this.attr('rel');
			dom.$hAllBtn.removeClass('selected');
			if ($this.hasClass('selected')) {
                dom.$hAllBtn.click()
			} else {
                offCells(category);
				hightlightCells(category);
				$this.addClass('selected');
			}
		});
	});

	// �������� ������ ��������� ���������
	selectCellCategory = function(name) {
		if(route.getUrl() != '') return;

        if (!dom.$mainItems.filter('.selected').length && !$('#highlight_all').hasClass('selected')) {
            dom.$mainItems.filter('.' + name + ':not(.selected)')
                .children('span, a').trigger('click');
        }
	};
	// �������� ��������� ���������
	selectRandomCellCategory = function() {
        if (window.isIos) {
            dom.$hAllBtn.click();
            return;
        }
		if(route.getUrl() == '') {
		    dom.$mainItems
                .add(dom.$hAllBtn)
                .eq(~~(Math.random() * 4)).click().children('span, a').trigger('click');
		}
	};
    setTimeout(function(){
        selectRandomCellCategory();
    }, 500);
	//
	//
	// About
	//
	//
	var aboutIsOpen = false;
	openAbout = function() {
		if ($.galleryIsOpen) {
			$('.overlay', $('#slides_projectId-' + currentProject.id)).eq(curSlide).css('opacity', 1);
		}

		if(aboutIsOpen) return;
		dom.$about.fadeIn('fast');
		updatePageHeight(dom.$aboutInner.outerHeight(true)); // ������ ������� �� ������, �.�. ������ �� ����
		//dom.$dataItems.fadeTo(0, 1);
		//dom.$mainItems.removeClass('selected');
		aboutIsOpen = true;

        dom.$footerInner
            .unbind('mouseenter mouseleave').stop().fadeTo('normal', 1);
	};

	closeAbout = function() {
		if(!aboutIsOpen) return;
		if ($.galleryIsOpen) {
			route.setUrl(currentProject.category.name + '/' + currentProject.id);
			$('.overlay', $('#slides_projectId-' + currentProject.id)).eq(curSlide).css('opacity', 0);
		}

		dom.$about.fadeOut('fast');
		$.galleryIsOpen ? updatePageHeight(dom.$galleryInner.outerHeight(true)): updatePageHeight(dom.dataHeight);

		//dom.$dataItems.fadeTo(0, $.config.cellOpacity);
		aboutIsOpen = false;
        dom.$footerInner
            .unbind('mouseenter mouseleave').stop().fadeTo('normal', 1);

		if ($.galleryIsOpen && !window.isIos) {
			// Footer fading
            dom.$footerInner
				.fadeTo('normal', $.config.galleryMenuOpacity)
				.bind('mouseenter', function() {
                    $(this).stop().fadeTo('normal', 1)
				})
				.bind('mouseleave', function() {
                    $(this).stop().fadeTo('normal', $.config.galleryMenuOpacity)
				});
		}

        if (!dom.$mainItems.filter('.selected').length && !$('#highlight_all').hasClass('selected')) {
            selectRandomCellCategory()
        }
	};
	
	var scrollContacts = function() {
		var maxScroll = dom.dataHeight - dom.windowHeight + dom.footerHeight;
		$('html, body').animate({scrollTop: maxScroll}, 'fast');
		return false;
	};


	dom.$aboutInner.find('h3, p, dl').bind('click', function(e) {
		if (!$(e.target).closest('a').length)
			e.preventDefault();
	});
	$('#close_about').add(dom.$about).bind('click', function(e) {
		if(!$(e.target).filter('.text').size() && !$(e.target).parents('.text').size()) {
			route.setUrl('');
		}
	});

	var highlightAllMem;
	/**
	 * ������������ ��� ������
	 */
	var highlightAll = function(e){
        e.preventDefault();
		var hLightBtn = $(this),
		    catSelector;

		if (hLightBtn.hasClass('selected')) {
			if (!dom.$mainItems.filter('.selected').length) {
				selectRandomCellCategory();
				hLightBtn.removeClass('selected');
				return;
			}
		
			catSelector = '.' + highlightAllMem.attr('rel');
			highlightAllMem.addClass('selected');
			hLightBtn.removeClass('selected');

			dom.$dataItems
				.fadeTo('fast', $.config.cellOpacity)
				.addClass('hightlight');

		} else {
			catSelector = '.' + $.config.categories.join(', .');
			highlightAllMem = dom.$mainItems.filter('.selected');
			hLightBtn.addClass('selected');
			dom.$mainItems.removeClass('selected');
		}

		dom.$dataItems
			.removeClass('hightlight')
			.filter(catSelector)
			.fadeTo('fast', 1)
			.addClass('hightlight');
	};

	$('#open_about').bind('click', openAbout);
	$('#open_contacts').bind('click', scrollContacts);
	dom.$hAllBtn.bind('click', highlightAll);
	
	var checkCopyright = function() {
		if(dom.$footer.width() >= 1170) {
			dom.$copyright.addClass('bodyRight').appendTo(dom.$footer);
		} else {
			dom.$copyright.removeClass('bodyRight').appendTo(dom.$footerFix);
		}
	};
	$(window).resize(checkCopyright);
	checkCopyright();
};


$(function(){
	var D = $(document),
		copy = $('#copyright'),
		body = $('body'),
		aboutFix = $('#about_fix'),
		colLogo = $('div.col.logo');

	var checkLayoutWidth = function(){
		var dWidth = D.width();

		if (dWidth <= 1170) copy.hide();
		else copy.show();


		if (dWidth >= 1450) body.addClass('wide-screen');
		else body.removeClass('wide-screen');

		if (dWidth >= 1720) {
			body.removeClass('wide-screen');
			aboutFix.css({margin: "0 auto", left: 40});
			colLogo.css({
				marginRight: dWidth/2 - 600
			})
		} else {
			aboutFix.css({margin: "0 0 0 40px", left: 0});
			colLogo.css({
				marginRight: 0
			})

		}


	};

	$(window).resize(checkLayoutWidth);
	checkLayoutWidth();


	$.openProject = (function() {
		$.galleryIsOpen = 0;
		var gallery = $('#gallery'),
			//galleryIsOpen = 0,
			currentCategory = -1,
			gWrap = $('#gallery_slide_wrap'),
			catMenu = $('#gallery_category_menu').children(),
			subMenus = $('#gallery_sub_menu'),
            gInner = $('.gallery_inner', gallery),
			subMenusItems = subMenus.children(),
			slides,
			slidesSteps = [],
			gNavy = $('#gallery_navigation'),
			nextProjectBtn = $('#next_project', gNavy),
			slideshowBtn = $('div.slideshow', gNavy),
			closeBtn = $('#close_gallery'),
			nextSlide = $('#next_slide', gNavy),
			miniNav = $('#mini_nav', gNavy),
            zoom = $('.zoom a', gNavy),
			projectTitle = $('#gallery_project>h3'),
			projectDate = projectTitle.next().children('.date'),
			slideshow = false,
			cache = {},
            overlays,
            iExists = [],
            images = [],
			widths = [];

		var prevSlide = 0,
			slidesLength = 0;

		/**
		 * ������� HTML �� �������� �
		 * ������ � ������� ������ ������� ��� ���� �������
		 */
		var createSlidesNodes = (function(){
			var slideTemplate = '<div class="item"><img src="cells/{src}" width="{width}" height="{height}"/><div class="overlay"></div></div>';

			var width = 0,
				margin = 10;

			return function(images){
                slidesLength = images.length;
                slidesSteps = [];
                iExists = [];
				widths = [];
                width = 0;
				for (var i = 0, iObj, nodes = ''; i < slidesLength; i+=1) {
					iObj = $.fullImagesConfig[images[i]];

					slidesSteps.push(width);
					width += (margin + (iObj || [0])[0]);

                    iExists.push((iObj || [,,0])[2]);

					widths.push((iObj || [0])[0]);

					nodes += slideTemplate.supplant({
						src: (images[i].match(/(.*)\.[(gif)|(png)|(jpg)]+$/) || [images[i] + '.jpg'])[0],
						width: (iObj || [0])[0],
						height: (iObj || [,0])[1]
					})
				}
                nodes = $(nodes);

				return {
                    images: images,
                    iExists: iExists,
					steps: slidesSteps,
					widths: widths,
					nodes: nodes,
                    overlays: nodes.find('div.overlay')
				};
			}
		}());


		/**
		 * ������� ��������� ������
		 */
		var openNextProject = function(){
            var next = currentProject.$subMenuLi.next();
            if (next.length) {
                var link = next.children('a');
                route.setUrl(link.attr('href').slice(1));
            } else {
                openNextCategory();
            }
			//currentProject.$subMenuLi.next().children('a')[0].click()
		};

		/**
		 * ������� ���������� ������
		 */
		var openPrevProject = function() {
            var prev = currentProject.$subMenuLi.prev();
            if (prev.length) {
                var href = prev.children('a').attr('href').slice(1).split('/');
                route.setUrl(href[0] + '/' + href[1] + '/' + getProjectImagesById(href[1]).length);
            } else {
                openPrevCategory();
            }
		};

		/**
		 * ������� ��������� ���������
		 */
		var openNextCategory = function(){
			var next = subMenusItems.not('.h').next();
			if (!next.length) next = subMenusItems.eq(0);
			route.setUrl(next.children().eq(0).children('a').attr('href'))
		};

		/**
		 * ������� ���������� ���������
		 */
		var openPrevCategory = function(){
			var next = subMenusItems.not('.h').prev();
			if (!next.length) next = subMenusItems.eq(-1);

            var href = next.children().eq(-1).children('a').attr('href').slice(1).split('/'),
                id = categoryProjects[href[0]].data.slice(-1)[0].id;
			route.setUrl(href[0] + '/' + id + '/' + getProjectImagesById(id).length)
		};

		/**
		 * �������� �������� ������
		 */
		var validateSlide = function(){
			return !(curSlide < 0 || curSlide > (slidesLength - 1));
		};

		// �������

		var gArrows = $('<div class="slides-arrows_cont slides-arrows2_cont"><div class="slides-arrows slides-arrows_left"><div class="slides-arrow"></div></div><div class="slides-arrows slides-arrows_right"><div class="slides-arrow"></div></div></div>')
			.appendTo('#gallery_slide')
			.css({
				height: $('#gallery_slide_wrap').height()
			})
			.click(function(e){

				var arrow = $(e.target).closest('div.slides-arrows');
				if (!arrow.length) return;

				if (arrow.hasClass('slides-arrows_left')) prevSlideHandler();
				else nextSlideHandler();
			});
		//

		/**
		 * ������������ � ������� ������
		 */
		var slide = function(noAnimate) {

			var hashSplit = window.location.hash.match(/([^/]+)\/([^/]+)(?:\/([^/]+))?/).slice(1);

			if (curSlide === 0) {
				window.location.hash = hashSplit.slice(0,2).join('/');
			}  else {
				hashSplit[2] = (curSlide + 1);
				window.location.hash = hashSplit.join('/');
			}

            window['_gaq'] && _gaq.push(['_trackPageview', location.pathname + location.search  + location.hash]);
            // ����������
            overlays.css({opacity:1});
            overlays.eq(curSlide).css({opacity:0});

            // ���������
			if (!noAnimate) {
				slides
					.stop()
					.animate({left: -slidesSteps[curSlide]}, 'normal');
			} else {
				slides
					.stop()
					.css({left: -slidesSteps[curSlide]});
			}

            // ��������
            if (slideshow.isRun()) slideshow.restart();

            // zoom
            checkZoomBtn();

			// �������
			gArrows.width(widths[curSlide]);
		};

        /**
         * ������ ������ zoom, ���� ����
         */
        var checkZoomBtn = function(){
            if (iExists[curSlide]) zoom.show().attr('href', '/full/' + images[curSlide] + '.jpg');
            else zoom.hide();
        };

        /**
         * Check related projects on project change
         * @param {jQuery} relCont container for related links
         * @param rel id`s of related projects
         */
        var checkRelated = function(relCont, rel){
            if (rel.length) {
                // ���������� ������ �� related projects
                dom.$relatedProjectsInner.removeClass('h');
                dom.$relatedPojectsList.find('.project').addClass('h');
                relCont.removeClass('h');
                dom.$hotkeyNotes.addClass('h');
            } else {
                dom.$relatedProjectsInner.addClass('h');
                dom.$hotkeyNotes.removeClass('h');
            }
        };

		/* Binds */
		nextProjectBtn.bind('click', function(e){
            e.preventDefault();
            openNextProject();
        });

		$('div.item', gWrap).live('click', function(){
			curSlide = $(cache[currentProject.id].nodes).index($(this));
			currentProject.$miniNavUl.trigger('slideToCurrent');
			slide();
		});


		subMenus.click(function(e){

			var link = $(e.target).closest('a');
			if (!link.length) return;

			link.parent()
				.siblings().removeClass('selected').end()
				.addClass('selected');
		});

		var nextSlideHandler = function(e){
			if (typeof e !== 'undefined' && typeof e !== 'number') e.preventDefault();
			curSlide += 1;
            if (validateSlide()) { currentProject.$miniNavUl.trigger('slideToCurrent'); slide(); }
            else openNextProject();
		};

		var prevSlideHandler = function(){
			curSlide -= 1;
			if (validateSlide()) { currentProject.$miniNavUl.trigger('slideToCurrent'); slide(); }
			else openPrevProject();
		};

        nextSlide.bind('click', nextSlideHandler);

		$(document).keydown(function(e){
            if(!$.galleryIsOpen) return;
			//if (e.keyCode === 27) {closeGallery();}
			else if(e.keyCode === 39 && !e.altKey)  {
				nextSlideHandler();
			}
			else if(e.keyCode === 37 && !e.altKey)  {
				prevSlideHandler();
			}
			else if(e.keyCode === 40 && e.shiftKey) {openNextProject()}
			else if(e.keyCode === 38 && e.shiftKey) {openPrevProject()}
		});

        slideshow = (function(){
            var handler,  run = false;

            var start = function(){
                clearTimeout(handler);
                run = true;
				miniNav.addClass('loader-on');
                handler = setTimeout(nextSlideHandler, 2000);

            };

            var stop = function() {
                run = false;
				miniNav.removeClass('loader-on');

                clearTimeout(handler);
            };

            var isRun = function() {
                return run;
            };

            return {
                start: start,
                restart: start,
                stop: stop,
                isRun: isRun
            }
        }());

        slideshowBtn.bind('click', function(e){

            e.preventDefault();

            var btn = $(this);
            if (btn.hasClass('selected')) {
                slideshow.stop();
                btn.removeClass('selected');
            } else {
                slideshow.start();
                btn.addClass('selected');
            }
        });

        dom.$slide = $('#gallery_slide');
        dom.$galleryPanel = $('#gallery_panel');

        closeBtn.add(gInner).bind('click', function(e){

            var $etar = $(e.target);
            if ($etar.closest(dom.$galleryPanel)[0] || $etar.closest(dom.$slide)[0] || !$.galleryIsOpen) return;

            dom.$gallery.fadeOut('fast');
            updatePageHeight(dom.dataHeight);
            //dom.$dataItems.fadeTo(0, $.config.cellOpacity);
			$.galleryIsOpen = 0;

            route.setUrl('');

            if (!window.isIos) {
                dom.$footerInner
                    .unbind('mouseenter mouseleave')
                    .stop().fadeTo('normal', 1);
            }
		});


		var updateGHeight = function() {
			if (!$.galleryIsOpen) return;
			var galleryBodyHeight = dom.$galleryBody.outerHeight();
			var gradiendHeight = Math.max($.config.gradientMinHeight, (dom.windowHeight - galleryBodyHeight - dom.footerHeight)/2);
			dom.$galleryTop.height(gradiendHeight);
			dom.$galleryBottom.height(gradiendHeight);
			updatePageHeight(dom.$galleryInner.outerHeight(true));
		};

		$(window).resize(updateGHeight);

		return function(project) {
			curSlide = (window.location.hash.match(/[^/]+\/[^/]+\/([^/]+)/) || [,1])[1] - 1;
			if ($.galleryIsOpen && currentProject.id && currentProject.id == project.id) {
				if (prevSlide != curSlide) {
					prevSlide = curSlide;
					currentProject.$miniNavUl.trigger('slideToCurrent');
					slide();
				}

				return;
			}

			$.galleryIsOpen = 1;
			currentProject = project;

			currentCategoryName = project.category.name;

			var miniUl = project.$miniNavUl,
				miniUlChilds = miniUl.children();
            miniUlChilds.removeClass('selected').eq(0).addClass('selected');
			// ���������� ���������
			if (currentCategory == project.category.pos) { // ���� ������ �� ��������� ���������

			} else { // ���� �������� ���������
				// �������� ����
				catMenu
					.removeClass('selected')
					.filter('.' + project.category.name)
						.addClass('selected');

				// �������
				project
					.$subMenuLi.parent()
						.siblings()
						.addClass('h')
						.end()
					.removeClass('h');
			}

			// ���������� �������� ����
			project
				.$subMenuLi
					.siblings()
					.removeClass('selected')
					.end()
				.addClass('selected');

			// ������� ���� ���������
			miniUl
				.siblings().addClass('h').end()
				.parent()
					.siblings().addClass('h').end()
				.andSelf().removeClass('h');

			if (!miniUl.hasClass('binded')) {
				miniUl
					.addClass('binded')
					.bind('click',function(e){

						var li = $(e.target).closest('li');
						if (!li.length) return;
						miniUlChilds.removeClass('selected');
						li.addClass('selected');

						curSlide = miniUlChilds.index(li);
						slide();
					})
					.bind('slideToCurrent', function(){
                        miniUlChilds.removeClass('selected');
						miniUlChilds.eq(curSlide).addClass('selected');
					});
			}


			// ������� ��
			gWrap.children().addClass('h');

			// ���� ���� ������ ���� � ����
			if (cache[currentProject.id]) {
				slides = cache[currentProject.id].obj
					.removeClass('h')
                    .css('left',0);

				slidesSteps = cache[currentProject.id].steps;
                slidesLength = slidesSteps.length;
                overlays = cache[currentProject.id].overlays;
                iExists = cache[currentProject.id].iExists;
                images = cache[currentProject.id].images;
               	widths = cache[currentProject.id].widths;
			} else {
				images = $.projectsData[currentProject.index].images;

				slides = $('<div id="slides_projectId-' + currentProject.id + '" class="gallery_project_slides"></div>')
								.appendTo(gWrap);

				cache[currentProject.id] = $.extend({
					obj: slides
				}, createSlidesNodes(images));



				$(cache[currentProject.id].nodes).appendTo(slides);
                overlays = cache[currentProject.id].overlays;
			}

            // ��������� � ����
			projectTitle.text(project.title);
			projectDate.html(project.date);

            // zoom
            checkZoomBtn();

            // related
            checkRelated(project.$related, project.related);

			// arrows
			gArrows.width(widths[curSlide]);

			gallery.show();
            if (slideshow.isRun()) {
				slideshow.restart();
				miniNav.addClass('loader-on')
			} else {
				miniNav.removeClass('loader-on')
			}

			updateGHeight();

            // Footer fading
            if (!window.isIos) {
                dom.$footerInner
                    .stop()
                    .unbind('mouseenter mouseleave')
                    .fadeTo('normal', $.config.galleryMenuOpacity)
                    .bind('mouseenter', function() {
                        $(this).stop().fadeTo('normal', 1)
                    })
                    .bind('mouseleave', function() {
                        $(this).stop().fadeTo('normal', $.config.galleryMenuOpacity)
                    });

            }

			// get current slide from hash
			if (curSlide) currentProject.$miniNavUl.trigger('slideToCurrent'); slide(true);

			// ������������ ��� �������
			overlays.stop().animate({opacity:1}, 'fast')
				.eq(curSlide).stop().animate({opacity:0}, 'fast');
		}
	}());

    $('#lyubarskiy').click(function(){
        window['_gaq'] && _gaq.push(['_trackEvent', 'Footer clicks', 'Go to Lyubarskiy page']);
    })
});

$(function() {
	dom.init();
	init();
	route.init();
});