// chrome.runtime.onInstalled.addListener(function(){
//     var a=document.querySelector(".gtm-cloak-grey.gtm-cloaked-borderless.gtm-cloaked.gtm-cloaked-spinner.gtm-cloaked-ready");
//     var b=document.querySelector(".gtm-cloak-grey.gtm-cloaked-borderless.gtm-cloaked.gtm-cloaked-spinner.gtm-cloaked-ready").firstElementChild;
//     var c = document.querySelector(".gtm-cloak-grey.gtm-cloaked-borderless.gtm-cloaked.gtm-cloaked-spinner.gtm-cloaked-ready").lastElementChild;
//     a.insertBefore(c,b);})

chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendresponse)
{
	console.log(message.txt);
	let paragraphs = document.getElementsByTagName("p");
	for(elt of paragraphs)
	{
		elt.style['background-color'] = '#00CED1';
	}
}