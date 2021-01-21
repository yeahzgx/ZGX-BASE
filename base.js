//基础公共方法作为插件导入
//// IOS Android判断 是否为慧服务App中打开判断
let u = navigator.userAgent;
const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
////APP打开判断
//var isApp = u.indexOf("app/Android-HFW")>-1 || u.indexOf("app/IOS-HFW")>-1;
////是否微信浏览器判断
//const isWX = u.indexOf('MicroMessenger') > -1;
// const isWechat = /micromessenger/i.test(u);
// const isWeibo = /weibo/i.test(u);
// const isQQ = /qq\//i.test(u);

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

// // 校验8-16位数字和字母密码
// function check_Pwd(val){
//   let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
//   if(reg.test(val)){
//     return true;
//   }else{
//     return false;
//   }
// }

// // 校验中文
// function check_Zh(val){
//   let reg = /^[\u4e00-\u9fa5]*$/;
//   if(reg.test(val)){
//     return true;
//   }else{
//     return false;
//   }
// }

// //  搜索抓取电话
// function matchPhone(str){
//   let reg = /(1[\d]{10}|0[\d]{2,3}-[\d]{5,8}|400[-]?[\d]{3}[-]?[\d]{4})/g; // 对应手机,一杠座机,两杠座机
//   return str.match(reg)   // match返回的是数组,里面是多个结果;当没有匹配项时返回null,可以使用null来判断是否有电话
// }

// //  搜索抓取url
// function matchUrl(str){
//   let reg = /((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])/g;
//   return str.match(reg)   // match返回的是数组,里面是多个结果;当没有匹配项时返回null,可以使用null来判断是否有电话
// }

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

// // 倒计时时间格式化
// function format_time(timeStamp) {
//     let day = Math.floor(timeStamp / (24 * 3600 * 1000));
//     let leave1 = timeStamp % (24 * 3600 * 1000);
//     let hours = Math.floor(leave1 / (3600 * 1000));
//     let leave2 = leave1 % (3600 * 1000);
//     let minutes = Math.floor(leave2 / (60 * 1000));
//     let leave3 = leave2 % (60 * 1000);
//     let seconds = Math.floor(leave3 / 1000);
//     if (day) return day + "天" + hours + "小时" + minutes + "分";
//     if (hours) return hours + "小时" + minutes + "分" + seconds + "秒";
//     if (minutes) return minutes + "分" + seconds + "秒";
//     if (seconds) return seconds + "秒";
//     return "时间到！";
// }

// 字符串日期转时间戳
function strOutTime(str){

}

// 时间对象格式化输出： date是时间对象
function formatTime(date){
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
// 小于10的前面补0
function formatNumber(n, leng=2){
  n = n.toString()
  leng = leng < 2 ? 2 : leng
  for (let i = 1; i < leng; i++){
    n = n[i] ? n : '0' + n
  }
  return n
}



/** 手机号打码  **/
function mfphone(phone) {
	if (phone && phone.length == 11) {
		let m = phone.slice(0, 3) + '****' + phone.slice(7, phone.length);
		return m
	} else {
		return phone
	}
}

/**
 * 检测字符串存储长度，提交数据到后台要控制存储长度时使用
 * @param {string} str 要检测长度的字符串
 */
function countStrleng(str) {
  let leng = 0
  let unicode = 0
  for (let i of str) {
    unicode = str.codePointAt(i)
    if(unicode<=255){   // 1个字节 1Byte 8bit 16进制表示0~FF
      leng++
    }else if(unicode<=65535){   // 2个字节
      leng += 2
    }else{
      leng += 3
    }
    console.log(i);
  }
  return leng
}


//import { querystring } from 'vux' vux带的链接参数读取
//获取url里的参数：name为参数名
function getUrlString(name,url){
    //当路由非history模式时,有#号，#后面为锚点，?就无效了，Location的search和pathname都是错误的不可用
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    if(url){
        var r = url.split("?");
    }else{
        var r = window.location.href.split("?");
    }
	if(r.length>1){
		r = r[r.length - 1].match(reg);		//多?时取最后的?
		if(r!=null){
			return  unescape(r[2])
		}else{
			return null;
		}
	}else{
		return null;
	}
}
//
//
//export function onImgUrl(url){
//  url = url?url:"http://img.zrhsh.cn/phone/img/noImg.png";
//  return url
//}
//

// 判断是否为数组
function isArray(input){
  return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}
// 判断是否为数字
function isNumber(input){
  return input instanceof Number || Object.prototype.toString.call(input) === '[object Number]';
}

// 数组高性能去重（unique:唯一）
function unique(array) {
  // ES6方法：Set数据结构的成员具有唯一性，加上...的解构功能
  return [...new Set(array)];
  // 非ES6方法：利用对象的属性不会重复这一特性，校验数组元素是否重复
//   let result = []
//   let obj = {}
//
//   for (let i=0; i<array.length; i++) {
//       if (!obj[i]) {
//           result.push(i)
//           obj[i] = 1
//       }
//   }
//   return result
}

/** 正整数判断 原check_Pmath函数  **/
function integer(d) {
	let isPmath = /^((\d+))$/;
	if (!isPmath.test(d)) {
		return false;
	} else {
		return true;
	}
}

/** 分转换为元，有小数时保留小数 **/
function yuan(x) {
	x = x * 1;
	var yuan;
	if (x % 100) {
		yuan = toDecimal2(x / 100);
	} else {
		yuan = x / 100;
	}
	return yuan;
}
/**制保留2位小数，如：2，会在2后面补上00.即2.00   主要是显示金钱用 **/
function toDecimal2(x) {
	var f = parseFloat(x);
	if (isNaN(f)) {
		return false;
	}
	var f = Math.round(x * 100) / 100;
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


//小数计算精度处理:
//js由于数字类型变量长度限制会产生小数计算精度错误，这里小数计算时通过字符串化解决该问题
// 加法
function accAdd(arg1, arg2) {
	var r1, r2, m;
	try {
		r1 = arg1.toString().split(".")[1].length
	} catch (e) {
		r1 = 0
	}
	try {
		r2 = arg2.toString().split(".")[1].length
	} catch (e) {
		r2 = 0
	}
	m = Math.pow(10, Math.max(r1, r2))
	return (Math.round(arg1 * m) + Math.round(arg2 * m)) / m
}
//减法
function accSub(arg1, arg2) {
	var r1, r2, m, n;
	try {
		r1 = arg1.toString().split(".")[1].length
	} catch (e) {
		r1 = 0
	}
	try {
		r2 = arg2.toString().split(".")[1].length
	} catch (e) {
		r2 = 0
	}
	m = Math.pow(10, Math.max(r1, r2));
	n = (r1 >= r2) ? r1 : r2;
	return ((arg1 * m - arg2 * m) / m).toFixed(n);
}
//乘法
function accMul(arg1, arg2) {
	var m = 0,
		s1 = arg1.toString(),
		s2 = arg2.toString();
	try {
		m += s1.split(".")[1].length
	} catch (e) {}
	try {
		m += s2.split(".")[1].length
	} catch (e) {}
	return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}
//除法
function accDiv(arg1, arg2) {
	var t1 = 0,
		t2 = 0,
		r1, r2;
	try {
		t1 = arg1.toString().split(".")[1].length
	} catch (e) {}
	try {
		t2 = arg2.toString().split(".")[1].length
	} catch (e) {}
	r1 = Number(arg1.toString().replace(".", ""))
	r2 = Number(arg2.toString().replace(".", ""))
	return accMul((r1 / r2), Math.pow(10, t2 - t1));
}


//防抖与节流
//防抖与节流函数是高频触发优化方式，常用于滚动条事件，但是控制了“状态更新”的频率，而不是控制高耗时任务本身
//vue框架1.0中事件触发自带防抖与节流，但2.0就去除了，所以不可滥用，要根据实际情况使用
// 防抖 (debounce):
// 原理：将多次高频操作优化为只在最后一次执行
// 通常使用的场景是：用户输入，只需再输入完成后做一次输入校验即可。
// immediate: 第一次是否立刻执行
function debounce(fn, wait = 100, immediate) {
	let timer = null

	return function() {
		let args = arguments
		let context = this

		if (immediate && !timer) {
			fn.apply(context, args)
		}

		if (timer) clearTimeout(timer)
		timer = setTimeout(() => {
			fn.apply(context, args)
		}, wait)
	}
}

// 节流(throttle):
// 原理：每隔一段时间后执行一次，也就是降低频率，将高频操作优化成低频操作
// 通常使用场景: 滚动条事件 或者 resize 事件，通常每隔 100~500 ms执行一次即可。
function throttle(fn, wait = 100, immediate) {
	let timer = null
	let callNow = immediate

	return function() {
		let context = this,
			args = arguments

		if (callNow) {
			fn.apply(context, args)
			callNow = false
		}

		if (!timer) {
			timer = setTimeout(() => {
				fn.apply(context, args)
				timer = null
			}, wait)
		}
	}
}

// 文件处理系列：
// 将base64转换为File文件对象，即<input type="file">产生的对象
function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n); // ES2017 最新语法,数组类型表示一个8位无符号整型数组
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
}
// 将base64转换为2进制Blob文件对象，由于File文件对象基于Blob，所以Ajax提交时可以直接提交Blob，抓包会显示为File
function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
}
// 将File或Blob转换为base64 (File对象也是一个Blob对象，二者的处理相同)
function readBlobAsDataURL(blob, callback) {
    var a = new FileReader();
    a.onload = function(e) {callback(e.target.result);};
    a.readAsDataURL(blob);
}


//  插件方式导出，方便全局使用
// 	原理：Vue 为构造函数，通过prototype属性指向原型，在原型上添加公共方法，使得Vue生成的所有实例都可使用该方法
const base.install = function(Vue, options) {
	//  //导出常用参数
	//  Vue.prototype.isAndroid = isAndroid;
	//  Vue.prototype.isIOS = isIOS;
	//  Vue.prototype.isApp = isApp;

	//循环函数存放变量，每次切换页面会清除其下的时间循环函数，因为为单页面应用，setInterval不清除会一直存在，这里利用路由统一清除
	Vue.prototype.interval = [];

	//导出常方法
  Vue.prototype.isArray = isArray;
  Vue.prototype.isNumber = isNumber;
  Vue.prototype.unique = unique;
	Vue.prototype.yuan = yuan;
	Vue.prototype.toDecimal2 = toDecimal2;
	Vue.prototype.accAdd = accAdd;
	Vue.prototype.accSub = accSub;
	Vue.prototype.accMul = accMul;
	Vue.prototype.accDiv = accDiv;
  Vue.prototype.countStrleng = countStrleng;
	Vue.prototype.getUrlString = getUrlString;
  Vue.prototype.formatTime = formatTime;
  Vue.prototype.formatNumber = formatNumber;
	Vue.prototype.debounce = debounce;
	Vue.prototype.throttle = throttle;
	Vue.prototype.integer = integer;
	Vue.prototype.mfphone = mfphone;
	Vue.prototype.dataURLtoFile = dataURLtoFile;
	Vue.prototype.dataURLtoBlob = dataURLtoBlob;
	Vue.prototype.readBlobAsDataURL = readBlobAsDataURL;

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
}
export default base