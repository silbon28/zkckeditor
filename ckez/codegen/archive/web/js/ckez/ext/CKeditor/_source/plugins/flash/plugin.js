(function(){var b=/\.swf(?:$|\?)/i;var d=CKEDITOR.tools.cssLength;function a(f){var e=f.attributes;return(e.type=="application/x-shockwave-flash"||b.test(e.src||""))}function c(i,g){var f=i.createFakeParserElement(g,"cke_flash","flash",true),j=f.attributes.style||"";var h=g.attributes.width,e=g.attributes.height;if(typeof h!="undefined"){j=f.attributes.style=j+"width:"+d(h)+";"}if(typeof e!="undefined"){j=f.attributes.style=j+"height:"+d(e)+";"}return f}CKEDITOR.plugins.add("flash",{init:function(e){e.addCommand("flash",new CKEDITOR.dialogCommand("flash"));e.ui.addButton("Flash",{label:e.lang.common.flash,command:"flash"});CKEDITOR.dialog.add("flash",this.path+"dialogs/flash.js");e.addCss("img.cke_flash{background-image: url("+CKEDITOR.getUrl(this.path+"images/placeholder.png")+");background-position: center center;background-repeat: no-repeat;border: 1px solid #a9a9a9;width: 80px;height: 80px;}");if(e.addMenuItems){e.addMenuItems({flash:{label:e.lang.flash.properties,command:"flash",group:"flash"}})}e.on("doubleclick",function(f){var g=f.data.element;if(g.is("img")&&g.data("cke-real-element-type")=="flash"){f.data.dialog="flash"}});if(e.contextMenu){e.contextMenu.addListener(function(f,g){if(f&&f.is("img")&&!f.isReadOnly()&&f.data("cke-real-element-type")=="flash"){return{flash:CKEDITOR.TRISTATE_OFF}}})}},afterInit:function(f){var e=f.dataProcessor,g=e&&e.dataFilter;if(g){g.addRules({elements:{"cke:object":function(k){var h=k.attributes,l=h.classid&&String(h.classid).toLowerCase();if(!l&&!a(k)){for(var j=0;j<k.children.length;j++){if(k.children[j].name=="cke:embed"){if(!a(k.children[j])){return null}return c(f,k)}}return null}return c(f,k)},"cke:embed":function(h){if(!a(h)){return null}return c(f,h)}}},5)}},requires:["fakeobjects"]})})();CKEDITOR.tools.extend(CKEDITOR.config,{flashEmbedTagOnly:false,flashAddEmbedTag:true,flashConvertOnEdit:false});