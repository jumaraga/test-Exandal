(function(e){function t(t){for(var o,l,a=t[0],i=t[1],d=t[2],s=0,b=[];s<a.length;s++)l=a[s],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&b.push(n[l][0]),n[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,d||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],o=!0,a=1;a<r.length;a++){var i=r[a];0!==n[i]&&(o=!1)}o&&(c.splice(t--,1),e=l(l.s=r[0]))}return e}var o={},n={app:0},c=[];function l(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=o,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(r,o,function(t){return e[t]}.bind(null,o));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var u=i;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"0ee1":function(e,t,r){"use strict";r("bb8f")},bb8f:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("7a23"),n=Object(o["d"])("h1",null,"Formulario de registro",-1),c={class:"row mb-3"},l=Object(o["d"])("label",{class:"form-label",for:""},"Fecha",-1),a=Object(o["d"])("label",{class:"form-label",for:"turno"},"Turno",-1),i=Object(o["d"])("datalist",{id:"data"},[Object(o["d"])("option",{value:"1"}),Object(o["d"])("option",{value:"2"})],-1),d={class:"row mb-3"},u=Object(o["d"])("label",{class:"form-label",for:""},"Fecha de Registro",-1),s=Object(o["d"])("label",{class:"form-label",for:""},"Hora",-1),b={class:"row mb-3"},j=Object(o["d"])("label",{class:"form-label",for:""},"Código de Operario",-1),O=Object(o["d"])("label",{class:"form-label",for:""},"Nº Orden de fabricación",-1),f={class:"row mb-3"},p=Object(o["d"])("label",{class:"form-label",for:""},"Nº Lote a MP",-1),m=Object(o["d"])("label",{class:"form-label",for:""},"Código de material",-1),g={class:"row mb-3"},h=Object(o["d"])("label",{class:"form-label",for:""},"Und Med",-1),_=Object(o["d"])("label",{class:"form-label",for:""},"KG",-1),y=Object(o["d"])("label",{class:"form-label",for:""},"Descripción",-1),v=Object(o["d"])("button",{type:"submit"}," Registrar",-1),k={class:"product_list"},x={class:"table"},w=Object(o["d"])("thead",null,[Object(o["d"])("tr",null,[Object(o["d"])("th",{class:"first_columm"},"Fecha"),Object(o["d"])("th",null,"turno"),Object(o["d"])("th",null,"Fecha de Registro"),Object(o["d"])("th",null,"Hora"),Object(o["d"])("th",null,"Código Operario"),Object(o["d"])("th",null,"Nombre Operario"),Object(o["d"])("th",null,"Nº Orden de fabricación"),Object(o["d"])("th",null,"Nº Lote a MP"),Object(o["d"])("th",null,"Código de material"),Object(o["d"])("th",null,"Descripción"),Object(o["d"])("th",null,"Und Med"),Object(o["d"])("th",{class:"last_column"},"KG")])],-1),U={class:"first_columm"},P={class:"last_column"};function V(e,t,r,V,R,S){return Object(o["g"])(),Object(o["c"])(o["a"],null,[Object(o["d"])("form",{action:"http://67.205.141.7:3000/api/lista",method:"POST",onSubmit:t[11]||(t[11]=Object(o["n"])((function(){return e.addRegistro&&e.addRegistro.apply(e,arguments)}),["prevent"]))},[n,Object(o["d"])("div",c,[l,Object(o["m"])(Object(o["d"])("input",{name:"fecha",type:"date","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.registro.fecha=t})},null,512),[[o["k"],e.registro.fecha]]),a,Object(o["m"])(Object(o["d"])("input",{name:"turno",type:"text",id:"turno",list:"data",size:"1",maxlength:"1",max:"2","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.registro.turno=t})},null,512),[[o["k"],e.registro.turno]]),i]),Object(o["d"])("div",d,[u,Object(o["m"])(Object(o["d"])("input",{name:"fecha_registro",type:"date","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.registro.fecha_registro=t})},null,512),[[o["k"],e.registro.fecha_registro]]),s,Object(o["m"])(Object(o["d"])("input",{name:"hora",type:"time","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.registro.hora=t})},null,512),[[o["k"],e.registro.hora]])]),Object(o["d"])("div",b,[j,Object(o["m"])(Object(o["d"])("input",{name:"codigo_operario",type:"text","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.registro.codigo_operario=t}),maxlength:"5"},null,512),[[o["k"],e.registro.codigo_operario]]),O,Object(o["m"])(Object(o["d"])("input",{name:"orden_fabricacion",type:"text","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.registro.orden_fabricacion=t}),maxlength:"8"},null,512),[[o["k"],e.registro.orden_fabricacion]])]),Object(o["d"])("div",f,[p,Object(o["m"])(Object(o["d"])("input",{name:"numero_lote",type:"text","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.registro.numero_lote=t})},null,512),[[o["k"],e.registro.numero_lote]]),m,Object(o["m"])(Object(o["d"])("input",{name:"codigo_material",type:"text","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.registro.codigo_material=t}),maxlength:"6"},null,512),[[o["k"],e.registro.codigo_material]])]),Object(o["d"])("div",g,[h,Object(o["m"])(Object(o["d"])("input",{name:"und_med",type:"text","onUpdate:modelValue":t[8]||(t[8]=function(t){return e.registro.und_med=t})},null,512),[[o["k"],e.registro.und_med]]),_,Object(o["m"])(Object(o["d"])("input",{name:"kg",type:"number","onUpdate:modelValue":t[9]||(t[9]=function(t){return e.registro.kg=t})},null,512),[[o["k"],e.registro.kg]])]),y,Object(o["m"])(Object(o["d"])("textarea",{name:"descripcion",id:"",cols:"10",rows:"5","onUpdate:modelValue":t[10]||(t[10]=function(t){return e.registro.descripcion=t})},null,512),[[o["k"],e.registro.descripcion]]),v],32),Object(o["d"])("div",k,[Object(o["d"])("table",x,[w,Object(o["d"])("tbody",null,[(Object(o["g"])(!0),Object(o["c"])(o["a"],null,Object(o["i"])(e.registros,(function(e){return Object(o["g"])(),Object(o["c"])("tr",{key:e._id},[Object(o["d"])("td",U,Object(o["j"])(e.fecha),1),Object(o["d"])("td",null,Object(o["j"])(e.turno),1),Object(o["d"])("td",null,Object(o["j"])(e.fecha_registro),1),Object(o["d"])("td",null,Object(o["j"])(e.hora),1),Object(o["d"])("td",null,Object(o["j"])(e.codigo_operario),1),Object(o["d"])("td",null,Object(o["j"])(e._id),1),Object(o["d"])("td",null,Object(o["j"])(e.orden_fabricacion),1),Object(o["d"])("td",null,Object(o["j"])(e.numero_lote),1),Object(o["d"])("td",null,Object(o["j"])(e.codigo_material),1),Object(o["d"])("td",null,Object(o["j"])(e.descripcion),1),Object(o["d"])("td",null,Object(o["j"])(e.und_med),1),Object(o["d"])("td",P,Object(o["j"])(e.kg),1)])})),128))])])])],64)}r("d3b7"),r("e9c4");var R=Object(o["e"])({name:"App",data:function(){return{registro:{fecha:"",turno:null,fecha_registro:"",hora:null,codigo_operario:"",orden_fabricacion:null,numero_lote:null,codigo_material:"",und_med:"",kg:null,descripcion:""},registros:[]}},created:function(){this.getRegistros()},methods:{getRegistros:function(){var e=this;fetch("http://67.205.141.7:3000/api/lista").then((function(e){return e.json()})).then((function(t){console.log(t),e.registros=t,console.log(e.registros)}))},addRegistro:function(){var e=this;console.log(this.registro),fetch("http://67.205.141.7:3000/api/lista",{method:"POST",body:JSON.stringify(this.registro),headers:{Accept:"application/json","Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(t){return e.getRegistros()}))}}}),S=(r("0ee1"),r("6b0d")),M=r.n(S);const N=M()(R,[["render",V]]);var C=N,F=r("5502"),T=Object(F["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["b"])(C).use(T).mount("#app")}});
//# sourceMappingURL=app.11986161.js.map