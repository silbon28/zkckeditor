(function(){function c(p,l){if(this._.end){return null}var i,m=this.range,n,h=this.guard,o=this.type,s=(p?"getPreviousSourceNode":"getNextSourceNode");if(!this._.start){this._.start=1;m.trim();if(m.collapsed){this.end();return null}}if(!p&&!this._.guardLTR){var k=m.endContainer,q=k.getChild(m.endOffset);this._.guardLTR=function(v,u){return((!u||!k.equals(v))&&(!q||!v.equals(q))&&(v.type!=CKEDITOR.NODE_ELEMENT||!u||v.getName()!="body"))}}if(p&&!this._.guardRTL){var t=m.startContainer,j=(m.startOffset>0)&&t.getChild(m.startOffset-1);this._.guardRTL=function(v,u){return((!u||!t.equals(v))&&(!j||!v.equals(j))&&(v.type!=CKEDITOR.NODE_ELEMENT||!u||v.getName()!="body"))}}var r=p?this._.guardRTL:this._.guardLTR;if(h){n=function(v,u){if(r(v,u)===false){return false}return h(v,u)}}else{n=r}if(this.current){i=this.current[s](false,o,n)}else{if(p){i=m.endContainer;if(m.endOffset>0){i=i.getChild(m.endOffset-1);if(n(i)===false){i=null}}else{i=(n(i,true)===false)?null:i.getPreviousSourceNode(true,o,n)}}else{i=m.startContainer;i=i.getChild(m.startOffset);if(i){if(n(i)===false){i=null}}else{i=(n(m.startContainer,true)===false)?null:m.startContainer.getNextSourceNode(true,o,n)}}}while(i&&!this._.end){this.current=i;if(!this.evaluator||this.evaluator(i)!==false){if(!l){return i}}else{if(l&&this.evaluator){return false}}i=i[s](false,o,n)}this.end();return this.current=null}function b(j){var i,h=null;while((i=c.call(this,j))){h=i}return h}CKEDITOR.dom.walker=CKEDITOR.tools.createClass({$:function(h){this.range=h;this._={}},proto:{end:function(){this._.end=1},next:function(){return c.call(this)},previous:function(){return c.call(this,1)},checkForward:function(){return c.call(this,0,1)!==false},checkBackward:function(){return c.call(this,1,1)!==false},lastForward:function(){return b.call(this)},lastBackward:function(){return b.call(this,1)},reset:function(){delete this.current;this._={}}}});var e={block:1,"list-item":1,table:1,"table-row-group":1,"table-header-group":1,"table-footer-group":1,"table-row":1,"table-column-group":1,"table-column":1,"table-cell":1,"table-caption":1};CKEDITOR.dom.element.prototype.isBlockBoundary=function(i){var h=i?CKEDITOR.tools.extend({},CKEDITOR.dtd.$block,i||{}):CKEDITOR.dtd.$block;return this.getComputedStyle("float")=="none"&&e[this.getComputedStyle("display")]||h[this.getName()]};CKEDITOR.dom.walker.blockBoundary=function(h){return function(j,i){return !(j.type==CKEDITOR.NODE_ELEMENT&&j.isBlockBoundary(h))}};CKEDITOR.dom.walker.listItemBoundary=function(){return this.blockBoundary({br:1})};CKEDITOR.dom.walker.bookmark=function(j,i){function h(k){return(k&&k.getName&&k.getName()=="span"&&k.data("cke-bookmark"))}return function(m){var k,l;k=(m&&!m.getName&&(l=m.getParent())&&h(l));k=j?k:k||h(m);return !!(i^k)}};CKEDITOR.dom.walker.whitespaces=function(h){return function(j){var i=j&&(j.type==CKEDITOR.NODE_TEXT)&&!CKEDITOR.tools.trim(j.getText());return !!(h^i)}};CKEDITOR.dom.walker.invisible=function(i){var h=CKEDITOR.dom.walker.whitespaces();return function(j){var k=h(j)||j.is&&!j.$.offsetHeight;return !!(i^k)}};CKEDITOR.dom.walker.nodeType=function(i,h){return function(j){return !!(h^(j.type==i))}};var g=/^[\t\r\n ]*(?:&nbsp;|\xa0)$/,a=CKEDITOR.dom.walker.whitespaces(),d=CKEDITOR.dom.walker.bookmark(),f=function(h){return d(h)||a(h)||h.type==CKEDITOR.NODE_ELEMENT&&h.getName() in CKEDITOR.dtd.$inline&&!(h.getName() in CKEDITOR.dtd.$empty)};CKEDITOR.dom.element.prototype.getBogus=function(){var h=this;do{h=h.getPreviousSourceNode()}while(f(h));if(h&&(!CKEDITOR.env.ie?h.is&&h.is("br"):h.getText&&g.test(h.getText()))){return h}return false}})();