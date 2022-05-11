var fs = require('fs');
var cmd=require('node-cmd');
var win =nw.Window.get();
history.pushState(null, null, window.location.href);
history.back();
window.onpopstate = () => history.forward();
function $(e){return document.querySelector(e);}
function $$(e){return document.querySelectorAll(e);}
