import{g as T}from"./index-Jh5dmnYl.js";function R(s,u){for(var r=0;r<u.length;r++){const t=u[r];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in s)){const a=Object.getOwnPropertyDescriptor(t,e);a&&Object.defineProperty(s,e,a.get?a:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var b,h;function x(){if(h)return b;h=1,b=s,s.displayName="sas",s.aliases=[];function s(u){(function(r){var t=/(?:"(?:""|[^"])*"(?!")|'(?:''|[^'])*'(?!'))/.source,e=/\b(?:\d[\da-f]*x|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,a={pattern:RegExp(t+"[bx]"),alias:"number"},m={pattern:/&[a-z_]\w*/i},g={pattern:/((?:^|\s|=|\())%(?:ABORT|BY|CMS|COPY|DISPLAY|DO|ELSE|END|EVAL|GLOBAL|GO|GOTO|IF|INC|INCLUDE|INDEX|INPUT|KTRIM|LENGTH|LET|LIST|LOCAL|PUT|QKTRIM|QSCAN|QSUBSTR|QSYSFUNC|QUPCASE|RETURN|RUN|SCAN|SUBSTR|SUPERQ|SYMDEL|SYMEXIST|SYMGLOBL|SYMLOCAL|SYSCALL|SYSEVALF|SYSEXEC|SYSFUNC|SYSGET|SYSRPUT|THEN|TO|TSO|UNQUOTE|UNTIL|UPCASE|WHILE|WINDOW)\b/i,lookbehind:!0,alias:"keyword"},f={pattern:/(^|\s)(?:proc\s+\w+|data(?!=)|quit|run)\b/i,alias:"keyword",lookbehind:!0},l=[/\/\*[\s\S]*?\*\//,{pattern:/(^[ \t]*|;\s*)\*[^;]*;/m,lookbehind:!0}],i={pattern:RegExp(t),greedy:!0},n=/[$%@.(){}\[\];,\\]/,c={pattern:/%?\b\w+(?=\()/,alias:"keyword"},o={function:c,"arg-value":{pattern:/(=\s*)[A-Z\.]+/i,lookbehind:!0},operator:/=/,"macro-variable":m,arg:{pattern:/[A-Z]+/i,alias:"keyword"},number:e,"numeric-constant":a,punctuation:n,string:i},y={pattern:/\b(?:format|put)\b=?[\w'$.]+/i,inside:{keyword:/^(?:format|put)(?==)/i,equals:/=/,format:{pattern:/(?:\w|\$\d)+\.\d?/,alias:"number"}}},S={pattern:/\b(?:format|put)\s+[\w']+(?:\s+[$.\w]+)+(?=;)/i,inside:{keyword:/^(?:format|put)/i,format:{pattern:/[\w$]+\.\d?/,alias:"number"}}},d={pattern:/((?:^|\s)=?)(?:catname|checkpoint execute_always|dm|endsas|filename|footnote|%include|libname|%list|lock|missing|options|page|resetline|%run|sasfile|skip|sysecho|title\d?)\b/i,lookbehind:!0,alias:"keyword"},k={pattern:/(^|\s)(?:submit(?:\s+(?:load|norun|parseonly))?|endsubmit)\b/i,lookbehind:!0,alias:"keyword"},w=/aStore|accessControl|aggregation|audio|autotune|bayesianNetClassifier|bioMedImage|boolRule|builtins|cardinality|cdm|clustering|conditionalRandomFields|configuration|copula|countreg|dataDiscovery|dataPreprocess|dataSciencePilot|dataStep|decisionTree|deduplication|deepLearn|deepNeural|deepRnn|ds2|ecm|entityRes|espCluster|explainModel|factmac|fastKnn|fcmpact|fedSql|freqTab|gVarCluster|gam|gleam|graphSemiSupLearn|hiddenMarkovModel|hyperGroup|ica|image|iml|kernalPca|langModel|ldaTopic|loadStreams|mbc|mixed|mlTools|modelPublishing|network|neuralNet|nmf|nonParametricBayes|nonlinear|optNetwork|optimization|panel|pca|percentile|phreg|pls|qkb|qlim|quantreg|recommend|regression|reinforcementLearn|robustPca|ruleMining|sampling|sandwich|sccasl|search(?:Analytics)?|sentimentAnalysis|sequence|session(?:Prop)?|severity|simSystem|simple|smartData|sparkEmbeddedProcess|sparseML|spatialreg|spc|stabilityMonitoring|svDataDescription|svm|table|text(?:Filters|Frequency|Mining|Parse|Rule(?:Develop|Score)|Topic|Util)|timeData|transpose|tsInfo|tsReconcile|uniTimeSeries|varReduce/.source,v={pattern:RegExp(/(^|\s)(?:action\s+)?(?:<act>)\.[a-z]+\b[^;]+/.source.replace(/<act>/g,function(){return w}),"i"),lookbehind:!0,inside:{keyword:RegExp(/(?:<act>)\.[a-z]+\b/.source.replace(/<act>/g,function(){return w}),"i"),action:{pattern:/(?:action)/i,alias:"keyword"},comment:l,function:c,"arg-value":o["arg-value"],operator:o.operator,argument:o.arg,number:e,"numeric-constant":a,punctuation:n,string:i}},p={pattern:/((?:^|\s)=?)(?:after|analysis|and|array|barchart|barwidth|begingraph|by|call|cas|cbarline|cfill|class(?:lev)?|close|column|computed?|contains|continue|data(?==)|define|delete|describe|document|do\s+over|do|dol|drop|dul|else|end(?:comp|source)?|entryTitle|eval(?:uate)?|exec(?:ute)?|exit|file(?:name)?|fill(?:attrs)?|flist|fnc|function(?:list)?|global|goto|group(?:by)?|headline|headskip|histogram|if|infile|keep|keylabel|keyword|label|layout|leave|legendlabel|length|libname|loadactionset|merge|midpoints|_?null_|name|noobs|nowd|ods|options|or|otherwise|out(?:put)?|over(?:lay)?|plot|print|put|raise|ranexp|rannor|rbreak|retain|return|select|session|sessref|set|source|statgraph|sum|summarize|table|temp|terminate|then\s+do|then|title\d?|to|var|when|where|xaxisopts|y2axisopts|yaxisopts)\b/i,lookbehind:!0};r.languages.sas={datalines:{pattern:/^([ \t]*)(?:cards|(?:data)?lines);[\s\S]+?^[ \t]*;/im,lookbehind:!0,alias:"string",inside:{keyword:{pattern:/^(?:cards|(?:data)?lines)/i},punctuation:/;/}},"proc-sql":{pattern:/(^proc\s+(?:fed)?sql(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|data|quit|run);|(?![\s\S]))/im,lookbehind:!0,inside:{sql:{pattern:RegExp(/^[ \t]*(?:select|alter\s+table|(?:create|describe|drop)\s+(?:index|table(?:\s+constraints)?|view)|create\s+unique\s+index|insert\s+into|update)(?:<str>|[^;"'])+;/.source.replace(/<str>/g,function(){return t}),"im"),alias:"language-sql",inside:r.languages.sql},"global-statements":d,"sql-statements":{pattern:/(^|\s)(?:disconnect\s+from|begin|commit|exec(?:ute)?|reset|rollback|validate)\b/i,lookbehind:!0,alias:"keyword"},number:e,"numeric-constant":a,punctuation:n,string:i}},"proc-groovy":{pattern:/(^proc\s+groovy(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|data|quit|run);|(?![\s\S]))/im,lookbehind:!0,inside:{comment:l,groovy:{pattern:RegExp(/(^[ \t]*submit(?:\s+(?:load|norun|parseonly))?)(?:<str>|[^"'])+?(?=endsubmit;)/.source.replace(/<str>/g,function(){return t}),"im"),lookbehind:!0,alias:"language-groovy",inside:r.languages.groovy},keyword:p,"submit-statement":k,"global-statements":d,number:e,"numeric-constant":a,punctuation:n,string:i}},"proc-lua":{pattern:/(^proc\s+lua(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|data|quit|run);|(?![\s\S]))/im,lookbehind:!0,inside:{comment:l,lua:{pattern:RegExp(/(^[ \t]*submit(?:\s+(?:load|norun|parseonly))?)(?:<str>|[^"'])+?(?=endsubmit;)/.source.replace(/<str>/g,function(){return t}),"im"),lookbehind:!0,alias:"language-lua",inside:r.languages.lua},keyword:p,"submit-statement":k,"global-statements":d,number:e,"numeric-constant":a,punctuation:n,string:i}},"proc-cas":{pattern:/(^proc\s+cas(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|quit|data);|(?![\s\S]))/im,lookbehind:!0,inside:{comment:l,"statement-var":{pattern:/((?:^|\s)=?)saveresult\s[^;]+/im,lookbehind:!0,inside:{statement:{pattern:/^saveresult\s+\S+/i,inside:{keyword:/^(?:saveresult)/i}},rest:o}},"cas-actions":v,statement:{pattern:/((?:^|\s)=?)(?:default|(?:un)?set|on|output|upload)[^;]+/im,lookbehind:!0,inside:o},step:f,keyword:p,function:c,format:y,altformat:S,"global-statements":d,number:e,"numeric-constant":a,punctuation:n,string:i}},"proc-args":{pattern:RegExp(/(^proc\s+\w+\s+)(?!\s)(?:[^;"']|<str>)+;/.source.replace(/<str>/g,function(){return t}),"im"),lookbehind:!0,inside:o},"macro-keyword":g,"macro-variable":m,"macro-string-functions":{pattern:/((?:^|\s|=))%(?:BQUOTE|NRBQUOTE|NRQUOTE|NRSTR|QUOTE|STR)\(.*?(?:[^%]\))/i,lookbehind:!0,inside:{function:{pattern:/%(?:BQUOTE|NRBQUOTE|NRQUOTE|NRSTR|QUOTE|STR)/i,alias:"keyword"},"macro-keyword":g,"macro-variable":m,"escaped-char":{pattern:/%['"()<>=¬^~;,#]/},punctuation:n}},"macro-declaration":{pattern:/^%macro[^;]+(?=;)/im,inside:{keyword:/%macro/i}},"macro-end":{pattern:/^%mend[^;]+(?=;)/im,inside:{keyword:/%mend/i}},macro:{pattern:/%_\w+(?=\()/,alias:"keyword"},input:{pattern:/\binput\s[-\w\s/*.$&]+;/i,inside:{input:{alias:"keyword",pattern:/^input/i},comment:l,number:e,"numeric-constant":a}},"options-args":{pattern:/(^options)[-'"|/\\<>*+=:()\w\s]*(?=;)/im,lookbehind:!0,inside:o},"cas-actions":v,comment:l,function:c,format:y,altformat:S,"numeric-constant":a,datetime:{pattern:RegExp(t+"(?:dt?|t)"),alias:"number"},string:i,step:f,keyword:p,"operator-keyword":{pattern:/\b(?:eq|ge|gt|in|le|lt|ne|not)\b/i,alias:"operator"},number:e,operator:/\*\*?|\|\|?|!!?|¦¦?|<[>=]?|>[<=]?|[-+\/=&]|[~¬^]=?/,punctuation:n}})(u)}return b}var E=x();const N=T(E),L=R({__proto__:null,default:N},[E]);export{L as s};
//# sourceMappingURL=sas-VDGWBkzL.js.map
