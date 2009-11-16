(function(exports){{include("./bs-ometa-compiler.ometajs.js");exports["OMeta"]=OMeta;exports["Parser"]=Parser;exports["BSJSParser"]=BSJSParser;exports["BSJSTranslator"]=BSJSTranslator;exports["BSOMetaParser"]=BSOMetaParser;exports["BSOMetaTranslator"]=BSOMetaTranslator;var BSNullOptimization=exports.BSNullOptimization=OMeta.delegated({"setHelped":function(){var $elf=this;return $elf["_didSomething"]=true},"helped":function(){var $elf=this;return $elf._pred($elf["_didSomething"])},"trans":function(){var $elf=this,t,ans;return $elf._or((function(){return (function(){$elf._form(function(){return (function(){t=$elf._apply("anything");$elf._pred($elf.hasProperty(t));return ans=$elf._applyWithArgs("apply",t)})()});return ans})()}),(function(){return $elf._apply("anything")}))},"optimize":function(){var $elf=this,x;return (function(){x=$elf._apply("trans");$elf._apply("helped");return x})()},"Or":function(){var $elf=this,xs;return (function(){xs=$elf._many(function(){return $elf._apply("trans")});return ["Or"].concat(xs)})()},"And":function(){var $elf=this,xs;return (function(){xs=$elf._many(function(){return $elf._apply("trans")});return ["And"].concat(xs)})()},"Many":function(){var $elf=this,x;return (function(){x=$elf._apply("trans");return ["Many",x]})()},"Many1":function(){var $elf=this,x;return (function(){x=$elf._apply("trans");return ["Many1",x]})()},"Set":function(){var $elf=this,n,v;return (function(){n=$elf._apply("anything");v=$elf._apply("trans");return ["Set",n,v]})()},"Not":function(){var $elf=this,x;return (function(){x=$elf._apply("trans");return ["Not",x]})()},"Lookahead":function(){var $elf=this,x;return (function(){x=$elf._apply("trans");return ["Lookahead",x]})()},"Form":function(){var $elf=this,x;return (function(){x=$elf._apply("trans");return ["Form",x]})()},"Rule":function(){var $elf=this,name,ls,body;return (function(){name=$elf._apply("anything");ls=$elf._apply("anything");body=$elf._apply("trans");return ["Rule",name,ls,body]})()}});BSNullOptimization["initialize"]=(function (){this["_didSomething"]=false});var BSAndOrOptimization=exports.BSAndOrOptimization=BSNullOptimization.delegated({"And":function(){var $elf=this,x,xs;return $elf._or((function(){return (function(){x=$elf._apply("trans");$elf._apply("end");$elf._apply("setHelped");return x})()}),(function(){return (function(){xs=$elf._applyWithArgs("transInside","And");return ["And"].concat(xs)})()}))},"Or":function(){var $elf=this,x,xs;return $elf._or((function(){return (function(){x=$elf._apply("trans");$elf._apply("end");$elf._apply("setHelped");return x})()}),(function(){return (function(){xs=$elf._applyWithArgs("transInside","Or");return ["Or"].concat(xs)})()}))},"transInside":function(){var $elf=this,t,xs,ys,x,xs;return (function(){t=$elf._apply("anything");return $elf._or((function(){return (function(){$elf._form(function(){return (function(){$elf._applyWithArgs("exactly",t);return xs=$elf._applyWithArgs("transInside",t)})()});ys=$elf._applyWithArgs("transInside",t);$elf._apply("setHelped");return xs.concat(ys)})()}),(function(){return (function(){x=$elf._apply("trans");xs=$elf._applyWithArgs("transInside",t);return [x].concat(xs)})()}),(function(){return []}))})()}});var BSOMetaOptimizer=exports.BSOMetaOptimizer=OMeta.delegated({"optimizeGrammar":function(){var $elf=this,n,sn,rs;return (function(){$elf._form(function(){return (function(){$elf._applyWithArgs("exactly","Grammar");n=$elf._apply("anything");sn=$elf._apply("anything");return rs=$elf._many(function(){return $elf._apply("optimizeRule")})})()});return ["Grammar",n,sn].concat(rs)})()},"optimizeRule":function(){var $elf=this,r,r;return (function(){r=$elf._apply("anything");$elf._many(function(){return r=$elf._applyWithArgs("foreign",BSAndOrOptimization,"optimize",r)});return r})()}})}})(typeof exports === 'undefined' ? this : exports);
