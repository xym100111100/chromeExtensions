$(function(){chrome.extension.sendRequest({type:"getBackgroundConfig",key:"version"},function(e){var n=e;chrome.extension.sendRequest({type:"getBackgroundConfig",key:"URL"},function(e){var o=e;$.ajax({url:o+"hsq_plugin/hsq/popup?v="+n,dataType:"html"}).done(function(e){$("body").append(e)})})})});