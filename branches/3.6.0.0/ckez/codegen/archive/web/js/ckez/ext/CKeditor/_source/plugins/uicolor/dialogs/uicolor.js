CKEDITOR.dialog.add("uicolor",function(d){var f,e,i,g=d.getUiColor(),c="cke_uicolor_picker"+CKEDITOR.tools.getNextNumber();function a(j){if(/^#/.test(j)){j=window.YAHOO.util.Color.hex2rgb(j.substr(1))}e.setValue(j,true);e.refresh(c)}function h(j,k){if(k||f._.contents.tab1.livePeview.getValue()){d.setUiColor(j)}f._.contents.tab1.configBox.setValue('config.uiColor = "#'+e.get("hex")+'"')}i={id:"yuiColorPicker",type:"html",html:"<div id='"+c+"' class='cke_uicolor_picker' style='width: 360px; height: 200px; position: relative;'></div>",onLoad:function(m){var k=CKEDITOR.getUrl("_source/plugins/uicolor/yui/");e=new window.YAHOO.widget.ColorPicker(c,{showhsvcontrols:true,showhexcontrols:true,images:{PICKER_THUMB:k+"assets/picker_thumb.png",HUE_THUMB:k+"assets/hue_thumb.png"}});if(g){a(g)}e.on("rgbChange",function(){f._.contents.tab1.predefined.setValue("");h("#"+e.get("hex"))});var j=new CKEDITOR.dom.nodeList(e.getElementsByTagName("input"));for(var l=0;l<j.count();l++){j.getItem(l).addClass("cke_dialog_ui_input_text")}}};var b=true;return{title:d.lang.uicolor.title,minWidth:360,minHeight:320,onLoad:function(){f=this;this.setupContent();if(CKEDITOR.env.ie7Compat){f.parts.contents.setStyle("overflow","hidden")}},contents:[{id:"tab1",label:"",title:"",expand:true,padding:0,elements:[i,{id:"tab1",type:"vbox",children:[{id:"livePeview",type:"checkbox",label:d.lang.uicolor.preview,"default":1,onLoad:function(){b=true},onChange:function(){if(b){return}var j=this.getValue(),k=j?"#"+e.get("hex"):g;h(k,true)}},{type:"hbox",children:[{id:"predefined",type:"select","default":"",label:d.lang.uicolor.predefined,items:[[""],["Light blue","#9AB8F3"],["Sand","#D2B48C"],["Metallic","#949AAA"],["Purple","#C2A3C7"],["Olive","#A2C980"],["Happy green","#9BD446"],["Jezebel Blue","#14B8C4"],["Burn","#FF893A"],["Easy red","#FF6969"],["Pisces 3","#48B4F2"],["Aquarius 5","#487ED4"],["Absinthe","#A8CF76"],["Scrambled Egg","#C7A622"],["Hello monday","#8E8D80"],["Lovely sunshine","#F1E8B1"],["Recycled air","#B3C593"],["Down","#BCBCA4"],["Mark Twain","#CFE91D"],["Specks of dust","#D1B596"],["Lollipop","#F6CE23"]],onChange:function(){var j=this.getValue();if(j){a(j);h(j);CKEDITOR.document.getById("predefinedPreview").setStyle("background",j)}else{CKEDITOR.document.getById("predefinedPreview").setStyle("background","")}},onShow:function(){var j=d.getUiColor();if(j){this.setValue(j)}}},{id:"predefinedPreview",type:"html",html:'<div id="cke_uicolor_preview" style="border: 1px solid black; padding: 3px; width: 30px;"><div id="predefinedPreview" style="width: 30px; height: 30px;">&nbsp;</div></div>'}]},{id:"configBox",type:"text",label:d.lang.uicolor.config,onShow:function(){var j=d.getUiColor();if(j){this.setValue('config.uiColor = "'+j+'"')}}}]}]}],buttons:[CKEDITOR.dialog.okButton]}});