/**
 * Igni Alert
 * Check https://github.com/krownf/igni for latest updates.
 *
 * Author:       ♔ f
 * Created:      Jun 26th 2018
 * Last Updated: Jun 26th 2018
 * Version:      1.0.0
 * Licence:      Igni is licenced under MIT licence (http://opensource.org/licenses/MIT)
 */
(function($){$.ignite=function(options){if($("#igni_alert_div").hasClass("active")==false){var timerCount;var config=$.extend({type:'message',timer:4000,position:'top',theme:'default',textMessage:'Hello! This is a default message from igni :)',dismiss:true,dismissButtonText:'Close'},options);$('<div>',{id:'igni_alert_div',class:'c_igni '+config.theme,style:config.position+':0'}).appendTo('body');$('<span>',{id:'igni_alert_span'}).appendTo('.c_igni');if(config.dismissButtonText!="Close"&&config.dismiss==false) console.log("IGNI WARNING: You need to enable the 'dismiss' option to use 'dismissButtonText'.");if(config.type=="loader"){config.dismiss=false;config.timer=0;} if(config.theme!="default") color='#fff';else color='#222';if(config.dismiss==true&&config.dismissButtonText){$('<button>',{id:'igni_alert_btn',style:'color:'+color,text:config.dismissButtonText}).appendTo('.c_igni');$("#igni_alert_btn").click(function(){dismiss();});} setTimeout(function(){$(".c_igni").addClass("active");},50);$(".c_igni > span").html(config.textMessage);if(config.timer>0) timerCount=setTimeout(function(){dismiss()},config.timer);function dismiss(){clearTimeout(timerCount);$(".c_igni").removeClass("active");setTimeout(function(){$(".c_igni").remove();},400);} return{destroy:function(){setTimeout(function(){dismiss();},400);}}}};}(jQuery));