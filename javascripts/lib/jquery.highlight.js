/*
 * jQuery Highlight plugin
 *
 * Based on highlight v3 by Johann Burkard
 * http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
 *
 * Code a little bit refactored and cleaned (in my humble opinion).
 * Most important changes:
 *  - has an option to highlight only entire words (wordsOnly - false by default),
 *  - has an option to be case sensitive (caseSensitive - false by default)
 *  - highlight element tag and class names can be specified in options
 *
 * Usage:
 *   // wrap every occurrance of text 'lorem' in content
 *   // with <span class='highlight'> (default options)
 *   $('#content').highlight('lorem');
 *
 *   // search for and highlight more terms at once
 *   // so you can save some time on traversing DOM
 *   $('#content').highlight(['lorem', 'ipsum']);
 *   $('#content').highlight('lorem ipsum');
 *
 *   // search only for entire word 'lorem'
 *   $('#content').highlight('lorem', { wordsOnly: true });
 *
 *   // don't ignore case during search of term 'lorem'
 *   $('#content').highlight('lorem', { caseSensitive: true });
 *
 *   // wrap every occurrance of term 'ipsum' in content
 *   // with <em class='important'>
 *   $('#content').highlight('ipsum', { element: 'em', className: 'important' });
 *
 *   // remove default highlight
 *   $('#content').unhighlight();
 *
 *   // remove custom highlight
 *   $('#content').unhighlight({ element: 'em', className: 'important' });
 *
 *
 * Copyright (c) 2009 Bartek Szopka
 *
 * Licensed under MIT license.
 *
 */
jQuery.extend({highlight:function(t,e,i,s){if(3===t.nodeType){var n=t.data.match(e);if(n){var o=document.createElement(i||"span");o.className=s||"highlight";var a=t.splitText(n.index);a.splitText(n[0].length);var r=a.cloneNode(!0);return o.appendChild(r),a.parentNode.replaceChild(o,a),1}}else if(1===t.nodeType&&t.childNodes&&!/(script|style)/i.test(t.tagName)&&(t.tagName!==i.toUpperCase()||t.className!==s))for(var l=0;l<t.childNodes.length;l++)l+=jQuery.highlight(t.childNodes[l],e,i,s);return 0}}),jQuery.fn.unhighlight=function(t){var e={className:"highlight",element:"span"};return jQuery.extend(e,t),this.find(e.element+"."+e.className).each(function(){var t=this.parentNode;t.replaceChild(this.firstChild,this),t.normalize()}).end()},jQuery.fn.highlight=function(t,e){var i={className:"highlight",element:"span",caseSensitive:!1,wordsOnly:!1};if(jQuery.extend(i,e),t.constructor===String&&(t=[t]),t=jQuery.grep(t,function(t){return""!=t}),t=jQuery.map(t,function(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}),0==t.length)return this;var s=i.caseSensitive?"":"i",n="("+t.join("|")+")";i.wordsOnly&&(n="\\b"+n+"\\b");var o=new RegExp(n,s);return this.each(function(){jQuery.highlight(this,o,i.element,i.className)})};