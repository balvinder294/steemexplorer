(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e5c02f8"],{"3df2":function(e,a,t){"use strict";t("69ce")},"5c14":function(e,a,t){"use strict";t.r(a);t("d263"),t("7f7f");var s=function(){var e=this,a=e._self._c;return a("div",[a("HeaderEFTG",{ref:"headerEFTG"}),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[e._l(e.parameters,(function(t,s){return a("div",{staticClass:"col-md-3 mt-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3 slidecontainer"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.slider,expression:"param.slider"}],staticClass:"slider",attrs:{type:"range",min:"0",max:e.SLIDER_RESOLUTION,id:"slider-"+t.name},domProps:{value:t.slider},on:{__r:function(a){return e.$set(t,"slider",a.target.value)}}})]),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"aacol-md-1"},[a("strong",[e._v(e._s(t.name))])]),"undefined"!==typeof t.rshares?a("div",{staticClass:"aacol-md-2"},[e._v("Rshares: "+e._s(t.rshares))]):e._e(),"undefined"!==typeof t.steempower?a("div",{staticClass:"aacol-md-2"},[e._v("Single vote of "+e._s(t.steempower)+" SP")]):e._e(),"undefined"!==typeof t.claims?a("div",{staticClass:"aacol-md-2"},[e._v("Claims: "+e._s(t.claims))]):e._e(),"undefined"!==typeof t.total_wcur?a("div",{staticClass:"aacol-md-2"},[e._v("Total cur: "+e._s(t.total_wcur))]):e._e(),"undefined"!==typeof t.payout?a("div",{staticClass:"aacol-md-2"},[e._v("Payout: "+e._s(t.payout)+" STEEM ($"+e._s(t.payout_sbd)+")")]):e._e(),"undefined"!==typeof t.vote_value?a("div",{staticClass:"aacol-md-2"},[e._v("Vote: "+e._s(t.vote_value)+" STEEM ($"+e._s(t.vote_value_sbd)+")")]):e._e(),"undefined"!==typeof t.linear?a("div",{staticClass:"aacol-md-2"},[e._v("in rshares: "+e._s(t.linear))]):e._e(),"undefined"!==typeof t.no_linear?a("div",{staticClass:"aacol-md-2"},[e._v("in claims: "+e._s(t.no_linear))]):e._e(),"undefined"!==typeof t.ratio?a("div",{staticClass:"aacol-md-2"},[e._v("ratio: "+e._s(t.ratio))]):e._e()])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.fixed,expression:"param.fixed"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.fixed)?e._i(t.fixed,null)>-1:t.fixed},on:{click:function(a){return e.checkboxChange(t.name)},change:function(a){var s=t.fixed,i=a.target,r=!!i.checked;if(Array.isArray(s)){var n=null,l=e._i(s,n);i.checked?l<0&&e.$set(t,"fixed",s.concat([n])):l>-1&&e.$set(t,"fixed",s.slice(0,l).concat(s.slice(l+1)))}else e.$set(t,"fixed",r)}}})])})),a("div",{staticClass:"col-md-3"},[a("div",[e._v("gain vote:")]),a("div",[a("strong",[e._v(e._s(e.k.v))]),e._v(" v")]),a("div",[e._v("Low R1 big S:")]),a("div",[a("strong",[e._v(e._s(e.k.lb))]),e._v(" v sqrt(sl) sqrt(R1/2e)")]),a("div",[e._v("Big R1 big S:")]),a("div",[a("strong",[e._v(e._s(e.k.bb))]),e._v(" v sqrt(sl) ")]),a("div",[e._v("Low R1 low S:")]),a("div",[a("strong",[e._v(e._s(e.k.ll))]),e._v(" v ")]),a("div",[e._v("Big R1 low S:")]),a("div",[a("strong",[e._v(e._s(e.k.bl))]),e._v(" v sqrt(sl) ")])])],2),e.alert.info?a("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[e._v(e._s(e.alert.infoText))]):e._e(),e.alert.success?a("div",{staticClass:"alert alert-success",attrs:{role:"alert"},domProps:{innerHTML:e._s(e.alert.successText)}}):e._e(),e.alert.danger?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(e._s(e.alert.dangerText))]):e._e()])],1)},i=[],r=(t("7514"),t("20d6"),t("ac6a"),t("7872"),t("1429")),n=t("2b53"),l=(t("db49"),t("9944"),t("4d78")),c={name:"RewardCalcPage",data:function(){return{parameters:[{name:"Rshares0",min:7,max:15,log:!0,slider:0,value:0,fixed:!1,rshares:0,steempower:0,claims:0,total_wcur:0,payout:0,payout_sbd:0},{name:"Vote",min:7,max:14,log:!0,slider:0,value:0,fixed:!1,rshares:0,steempower:0,wcur:0,vote_value:0,vote_value_sbd:0},{name:"Rshares1",min:Math.log10(2e7),max:Math.log10(11e14),log:!0,slider:0,value:0,fixed:!1,rshares:0,steempower:0,claims:0,total_wcur:0,payout:0,payout_sbd:0},{name:"RsharesTotal",min:Math.log10(2e7),max:Math.log10(11e18),log:!0,slider:0,value:0,fixed:!1,rshares:0,steempower:0,claims:0,total_wcur:0,payout:0,payout_sbd:0},{name:"Scale",min:-2,max:4,log:!0,slider:0,value:0,fixed:!1,linear:0,no_linear:0,ratio:1}],k:{v:1,lb:1,bb:1,ll:1,bl:1},link_r1_rt:!1,SLIDER_RESOLUTION:1e3,S:2e12}},components:{HeaderEFTG:r["a"]},mixins:[l["a"],n["a"]],created:function(){var e=this;this.getChainProperties().then((function(){e.initSliders()}))},watch:{},methods:{initSliders:function(){var e=this;for(var a in this.parameters.forEach((function(a){e.handleInputSlider(a),a.value=a.slider*(a.max-a.min)/e.SLIDER_RESOLUTION+a.min,a.log&&(a.value=Math.pow(10,a.value))})),this.parameters)this.calcSliderValues(a)},handleInputSlider:function(e){var a=this;this.$nextTick((function(){var t=document.getElementById("slider-"+e.name);t.oninput=function(){a.sliderOnChange(this.id,!0)}}))},sliderOnChange:function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=e.substring(7),s=this.parameters.findIndex((function(e){return e.name===t})),i=this.parameters[s];i.value=i.slider*(i.max-i.min)/this.SLIDER_RESOLUTION+i.min,i.log&&(i.value=Math.pow(10,i.value)),this.calcValues(s),a&&this.updateParameters(t),this.hideDanger()},updateParameters:function(e){var a=this.parameters.findIndex((function(e){return"Rshares0"===e.name})),t=this.parameters.findIndex((function(e){return"Rshares1"===e.name})),s=this.parameters.findIndex((function(e){return"RsharesTotal"===e.name})),i=this.parameters.findIndex((function(e){return"Vote"===e.name})),r=this.parameters.findIndex((function(e){return"Scale"===e.name})),n=this.parameters[a],l=this.parameters[t],c=this.parameters[s],d=this.parameters[i],o=this.parameters[r],u=this,h=function(){o.fixed&&u.showDanger("Scale is fixed"),o.value=c.value/l.value,u.calcSliderValues(r),!0},f=function(){d.fixed&&u.showDanger("Vote is fixed"),d.value=l.value-n.value,d.value<Math.pow(10,d.min)?(n.value+=d.value-Math.pow(10,d.min),d.value-=d.value-Math.pow(10,d.min),n.fixed&&selfshowDanger("Rs0 is fixed")):d.value>Math.pow(10,d.max)&&(n.value+=d.value-Math.pow(10,d.max),d.value-=d.value-Math.pow(10,d.max),n.fixed&&selfshowDanger("Rs0 is fixed")),u.calcSliderValues(a),u.calcSliderValues(i)},v=function(){n.fixed&&u.showDanger("Rshares0 is fixed"),n.value=l.value-d.value,u.calcSliderValues(a)},m=function(){c.fixed&&u.showDanger("RsharesTotal is fixed"),c.value=o.value*l.value,u.calcSliderValues(s)},_=function(e){l.fixed&&u.showDanger("Rshares1 is fixed"),l.value="scale"===e?c.value/o.value:n.value+d.value,u.calcSliderValues(t)},p=function(e){switch(e){case"Rshares0":l.fixed?f():_();break;case"Rshares1":d.fixed?v():f();break;case"Vote":l.fixed?v():_();break;default:break}u.calcValues(i)},x=function(e){switch(e){case"Rshares1":c.fixed?h():m();break;case"RsharesTotal":o.fixed?_("scale"):h();break;case"Scale":c.fixed?_("scale"):m();break;default:break}u.calcValues(r)};switch(e){case"Rshares0":case"Rshares1":case"Vote":p(e),x("Rshares1");break;case"RsharesTotal":case"Scale":x(e),p("Rshares1");break;default:break}var w=(l.total_wcur-n.total_wcur)/c.total_wcur*c.claims;for(var b in this.k.v=w/d.rshares,this.k.lb=this.k.v/Math.sqrt(o.linear)/Math.sqrt(l.rshares/2/this.S),this.k.bb=this.k.v/Math.sqrt(o.linear)*2,this.k.ll=2*this.k.v,this.k.bl=this.k.v/Math.sqrt(o.linear)*4,this.k)this.k[b]=this.k[b].toFixed(4)},calcSliderValues:function(e){this.calcSlider(e),this.calcValues(e)},calcSlider:function(e){var a=this.parameters[e],t=a.log?Math.log10(a.value):a.value;a.slider=this.SLIDER_RESOLUTION*(t-a.min)/(a.max-a.min)},calcValues:function(e){var a=this.parameters[e];"undefined"!==typeof a.rshares&&(a.rshares=Math.round(a.value)),"undefined"!==typeof a.steempower&&(a.steempower=this.steempower(a.rshares).toFixed(6)),"undefined"!==typeof a.claims&&(a.claims=this.claims(a.rshares)),"undefined"!==typeof a.total_wcur&&(a.total_wcur=this.weight_curation(a.rshares)),"undefined"!==typeof a.payout&&(a.payout=(a.claims*this.chain.reward_balance/this.chain.recent_claims).toFixed(3)),"undefined"!==typeof a.payout_sbd&&(a.payout_sbd=(a.claims*this.chain.reward_balance/this.chain.recent_claims*this.chain.feed_price).toFixed(3)),"undefined"!==typeof a.vote_value&&(a.vote_value=this.calcVoteValue().toFixed(6)),"undefined"!==typeof a.vote_value_sbd&&(a.vote_value_sbd=(this.calcVoteValue()*this.chain.feed_price).toFixed(3)),"undefined"!==typeof a.linear&&(a.linear=this.calcLinearScale().toFixed(6)),"undefined"!==typeof a.no_linear&&(a.no_linear=this.calcNoLinearScale().toFixed(6)),"undefined"!==typeof a.ratio&&(a.ratio=(this.calcNoLinearScale()/this.calcLinearScale()).toFixed(4)),this.$set(this.parameters,e,a)},calcVoteValue:function(){var e=this.parameters.find((function(e){return"Rshares0"===e.name})),a=this.parameters.find((function(e){return"Vote"===e.name})),t=this.claims(e.rshares+a.rshares)-this.claims(e.rshares);return t*this.chain.reward_balance/this.chain.recent_claims},calcLinearScale:function(){var e=this.parameters.find((function(e){return"Rshares1"===e.name})),a=this.parameters.find((function(e){return"RsharesTotal"===e.name}));return a.rshares/e.rshares},calcNoLinearScale:function(){var e=this.parameters.find((function(e){return"Rshares1"===e.name})),a=this.parameters.find((function(e){return"RsharesTotal"===e.name}));return a.claims/e.claims},steempower:function(e){var a=this.chain.steem_per_mvests/1e12;return a*e/.02},claims:function(e){return Math.round(e*(e+2*this.S)/(e+4*this.S))},weight_curation:function(e){return Math.round(e/Math.sqrt(e+2*this.S))},checkboxChange:function(e){var a=this.parameters.findIndex((function(e){return"Rshares0"===e.name})),t=this.parameters.findIndex((function(e){return"Rshares1"===e.name})),s=this.parameters.findIndex((function(e){return"RsharesTotal"===e.name})),i=this.parameters.findIndex((function(e){return"Vote"===e.name})),r=this.parameters.findIndex((function(e){return"Scale"===e.name})),n=this.parameters[a],l=this.parameters[t],c=this.parameters[s],d=this.parameters[i],o=this.parameters[r];switch(e){case"Rshares0":if(!n.fixed)return;l.fixed&&d.fixed&&(l.fixed=!1);break;case"Rshares1":if(!l.fixed)return;n.fixed&&d.fixed&&(d.fixed=!1),o.fixed&&c.fixed&&(c.fixed=!1);break;case"RsharesTotal":if(!c.fixed)return;l.fixed&&o.fixed&&(o.fixed=!1);break;case"Vote":if(!d.fixed)return;l.fixed&&n.fixed&&(n.fixed=!1);break;case"Scale":if(!o.fixed)return;c.fixed&&l.fixed&&(l.fixed=!1);break;default:break}for(var u in this.parameters)this.$set(this.parameters,u,this.parameters[u])}}},d=c,o=(t("3df2"),t("2877")),u=Object(o["a"])(d,s,i,!1,null,"0ad75e48",null);a["default"]=u.exports},"69ce":function(e,a,t){},7514:function(e,a,t){"use strict";var s=t("5ca1"),i=t("0a49")(5),r="find",n=!0;r in[]&&Array(1)[r]((function(){n=!1})),s(s.P+s.F*n,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),t("9c6c")(r)},d263:function(e,a,t){"use strict";t("386b")("fixed",(function(e){return function(){return e(this,"tt","","")}}))}}]);
//# sourceMappingURL=chunk-7e5c02f8.10908786.js.map