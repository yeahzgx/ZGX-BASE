//基础公共方法作为插件导入
//// IOS Android判断 是否为慧服务App中打开判断
//let u = navigator.userAgent;
//const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
//const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
////APP打开判断
//var isApp = u.indexOf("app/Android-HFW")>-1 || u.indexOf("app/IOS-HFW")>-1;
////是否微信浏览器判断
//const isWX = u.indexOf('MicroMessenger') > -1;


////校验
////是否为空校验
//export function isDefine(value){//0返回false
//  if(value == null || value == "" || value == "undefined" || value == undefined || value == "null" || value == "(null)" || value == '--' || typeof(value) == 'undefined' || value.length == 0){
//      return false;
//  }else{
//      value = value+"";
//      value = value.replace(/\s/g,"");
//      if(value == ""){
//          return false;
//      }
//      return true;
//  }
//}
////座机校验
//export function chenck_Phone(d){
//  let isPhone=/^((\d{2,4})-)?(\d{7,8})(-(\d{3,}))?$/;
//  if(!isPhone.test(d)){
//      if(d.length>=8 && d.length<=12){
//          return true
//      }else{
//          return false;
//      }
//  }else{
//      return true;    
//  }
//}
////座机号码加-
//export function formatPhone(userMobile){
//  phone3=userMobile.value.slice(0,3);
//  if(userMobile.value.length==4){
//      var a=userMobile.value[3];
//      if(userMobile.value[3]!='-' && (phone3=='010' || phone3=='020' || phone3=='021' || phone3=='022' || phone3=='023' || phone3=='024' || phone3=='025' || phone3=='027' || phone3=='028' || phone3=='029')){
//          userMobile.value=phone3+'-'+a;
//      }
//  }
//  if(userMobile.value.length==5){
//      var b=userMobile.value[4];
//      if(userMobile.value[4]!='-' && phone3!='010' && phone3!='020' && phone3!='021' && phone3!='022' && phone3!='023' && phone3!='024' && phone3!='025' && phone3!='027' && phone3!='028' && phone3!='029'){
//          userMobile.value=userMobile.value.slice(0,4)+'-'+b;
//      }
//  }
//}
//
////邮箱校验
//export function check_Eamil(d){
//  var isEamil=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/; 
//  if(!isEamil.test(d)){
//      return false;   
//  }else{
//      return true;
//  }
//}
//
///**
// * 根据时间戳获取年、月、日
// * @param String str 时间戳
// * @param Boolean f 是否在原来的基础上*1000，true要*，false或不填就不*
// */
//export function getMakeTimes(str,f){
//  var t = (f) ? int(str) : int(str)*1000;
//  var d = new Date(t);
//  var y = d.getFullYear();
//  var m = setNum(d.getMonth()+1);
//  var d = setNum(d.getDate());
//  return y+"-"+m+"-"+d;
//}
//
////import { querystring } from 'vux' vux带的链接参数读取
////获取url里的参数：name为参数名
function getUrlString(name){
    //当路由非history模式时,有#号，#后面为锚点，?就无效了，Location的search和pathname都是错误的不可用
    let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    let r = window.location.href.split("?")[1].match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
//
//
//
//export function onImgUrl(url){
//  url = url?url:"http://img.zrhsh.cn/phone/img/noImg.png";
//  return url
//}
//
//
/** 分转换为元，有小数时保留小数 **/   
function yuan(x){
    x=x*1;
    var yuan;
    if(x%100){
        yuan=toDecimal2(x/100);
    }else{
        yuan=x/100;
    }
    return yuan;
}
/**制保留2位小数，如：2，会在2后面补上00.即2.00   主要是显示金钱用 **/      
function toDecimal2(x) {              
    var f = parseFloat(x);              
    if (isNaN(f)) {   
        return false;              
    }              
    var f = Math.round(x*100)/100;                  
    var s = f.toString();              
    var rs = s.indexOf('.');              
    if (rs < 0) {   
        rs = s.length;                  
        s += '.';   
    }              
    while (s.length <= rs + 2) {   
        s += '0';              
    }              
    return s;
}

//小数计算精度解决
//加法
function accAdd(arg1,arg2){
    var r1,r2,m;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2))
    return (Math.round(arg1*m)+Math.round(arg2*m))/m
}
//减法
function accSub(arg1,arg2){
    var r1,r2,m,n;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2));
    n=(r1>=r2)?r1:r2;
    return ((arg1*m-arg2*m)/m).toFixed(n);
}
//乘法
function accMul(arg1,arg2)
{
    var m=0,s1=arg1.toString(),s2=arg2.toString();
    try{m+=s1.split(".")[1].length}catch(e){}
    try{m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
}
//除法
function accDiv(arg1,arg2){
    var t1=0,t2=0,r1,r2;
    try{t1=arg1.toString().split(".")[1].length}catch(e){}
    try{t2=arg2.toString().split(".")[1].length}catch(e){}
    r1=Number(arg1.toString().replace(".",""))
    r2=Number(arg2.toString().replace(".",""))
    return accMul((r1/r2),pow(10,t2-t1));
}


/** 正整数判断 原check_Pmath函数  **/  
function integer(d){
    let isPmath = /^((\d+))$/;
    if(!isPmath.test(d)){
        return false;
    }else{
        return true;    
    }
}

/** 手机号打码  **/  
function mfphone(phone){
    if(phone.length==11){
        let m = phone.slice(0,3) + '****' + phone.slice(7,phone.length);
        return m
    }else{
        return phone
    }
}

//  插件方式导出，方便全局使用
exports.install = function (Vue, options) {
//  //导出常用参数
//  Vue.prototype.isAndroid = isAndroid;
//  Vue.prototype.isIOS = isIOS;
//  Vue.prototype.isApp = isApp;

    //循环函数存放变量，每次切换页面会清除其下的时间循环函数，因为为单页面应用，setInterval不清除会一直存在，这里利用路由统一清除
    Vue.prototype.interval = [];

    //导出常方法
    Vue.prototype.yuan = yuan;
    Vue.prototype.toDecimal2 = toDecimal2;
    Vue.prototype.accAdd = accAdd;
    Vue.prototype.accSub = accSub;
    Vue.prototype.accMul = accMul;
    Vue.prototype.accDiv = accDiv;
    Vue.prototype.getUrlString = getUrlString;
    Vue.prototype.integer = integer;
    Vue.prototype.mfphone = mfphone;
    
    /*  插件开发说明
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
    // 逻辑...
    }
    // 2. 添加全局资源
    Vue.directive('my-directive', {
        bind (el, binding, vnode, oldVnode) {
            // 逻辑...
        }
        ...
    })
    // 3. 注入组件
    Vue.mixin({
        created: function () {
        // 逻辑...
        }
        ...
    })
    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
        // 逻辑...
    }
    */
};