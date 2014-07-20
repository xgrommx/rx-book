require(["gitbook", "jquery"], function(gitbook, $) {
	function getQuery(querystring) {
		var query = {};

		var pairs = querystring.split('&'),
				length = pairs.length,
				keyval = [],
				i = 0;

		for (; i < length; i++) {
			keyval = pairs[i].split('=', 2);
			try {
				keyval[0] = decodeURIComponent(keyval[0]); // key
				keyval[1] = decodeURIComponent(keyval[1]); // value
			} catch (e) {}

			if (query[keyval[0]] === undefined) {
				query[keyval[0]] = keyval[1];
			} else {
				query[keyval[0]] += ',' + keyval[1];
			}
		}

		return query;
	}
	function embed(link) {
		var iframe = document.createElement('iframe'),
				resize = document.createElement('div'),
				url = link.href.replace(/edit/, 'embed');
		iframe.src = url;
		iframe._src = url; // support for google slide embed
		iframe.className = link.className; // inherit all the classes from the link
		iframe.id = link.id; // also inherit, giving more style control to the user
		iframe.style.border = '1px solid #aaa';

		var query = getQuery(link.search);
		console.log(url);
		iframe.style.width = query.width || '100%';
		iframe.style.minHeight = query.height || '500px';
		if (query.height) {
			iframe.style.maxHeight = query.height;
		}
		link.parentNode.replaceChild(iframe, link);

		var onmessage = function (event) {
			event || (event = window.event);
			// * 1 to coerse to number, and + 2 to compensate for border
			iframe.style.height = (event.data.height * 1 + 2) + 'px';
		};

		if (window.addEventListener) {
			window.addEventListener('message', onmessage, false);
		} else {
			window.attachEvent('onmessage', onmessage);
		}
	}
  gitbook.events.bind("page.change", function(e, config) {		
			$(".book-body a").each(function(index, link){
				if(link.href && link.href.match(/jsbin.com\/.*/)){
					embed(link);
				}
			});
  });
});
