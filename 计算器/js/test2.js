/**
 * Created by Administrator on 2017/1/14.
 */
window.onload = function () {
    //读取按钮及显示框
    var btns = document.getElementById("btn").getElementsByTagName("div");
    var inputs = document.getElementById("input");
    //焦点设置
    inputs.focus();
    //初始化为0
    inputs.value = 0;
    //定义一个数组对象用于存放计算数据及计算符号
    var arr = new Array(3);
    arr[0] = "";
    arr[1] = "";
    arr[2] = "";

    //按钮效果设置
    for (var i = 0; i < btns.length; i++) {
        if (i != 17){
            btns[i].index = i;
        btns[i].onmouseover = function () {
            btns[this.index].className = "btn_color";
        }

        btns[i].onmouseout = function () {
            btns[this.index].className = "";
            if (this.index == 3 || this.index == 7 || this.index == 11 || this.index == 15 || this.index == 19) {
                btns[this.index].className = "btn_cal";
            }

        }
    }

        //计算函数
        function cal() {
            var x;
            if (arr[2] == "+") {
                // x = arr[0] + arr[1];
                x = accAdd(arr[0],arr[1])
            }
            else if (arr[2] == "-") {
                x = arr[0] - arr[1];
            }
            else if (arr[2] == "*") {
                // x = arr[0] * arr[1];
                x = accMul(arr[0],arr[1])

            }

            else if (arr[2] == "/") {
                // x = arr[0] / arr[1]
                x = accDiv(arr[0],arr[1])
            }
            else if (arr[2] == "SIN"){
                    x = Math.sin(Math.PI*(arr[0]-accMul(180,parseInt(arr[0]/180)))/180);
            }
            else if (arr[2] == "%"){
                x =arr[0]- accMul(arr[1],parseInt(arr[0]/arr[1]));
            }
            else{

            }
            arr[0] = x;
            arr[1] = "";
            return x;
        }
        //加
        function accAdd(arg1,arg2){
            var r1,r2,m;
            try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
            try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
            m=Math.pow(10,Math.max(r1,r2))
            return (arg1*m+arg2*m)/m
        }

        //乘
        function accMul(arg1,arg2)
        {
            var m=0,s1=arg1.toString(),s2=arg2.toString();
            try{m+=s1.split(".")[1].length}catch(e){}
            try{m+=s2.split(".")[1].length}catch(e){}
            return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
        }

        //除

        function accDiv(arg1,arg2){
            var t1=0,t2=0,r1,r2;
            try{t1=arg1.toString().split(".")[1].length}catch(e){}
            try{t2=arg2.toString().split(".")[1].length}catch(e){}
            with(Math){
                r1=Number(arg1.toString().replace(".",""))
                r2=Number(arg2.toString().replace(".",""))
                return (r1/r2)*pow(10,t2-t1);
            }
        }



        //点击按钮事件
        btns[i].onclick = function () {
            //清零功能实现
            if (this.index == 0) {
                inputs.focus();
                inputs.value = 0;
                arr[0] = "";
                arr[1] = "";
                arr[2] = "";
            }
            //如果用户之前点击的是等号，则将最后等号的数据存放在第一个数组中
            if (arr[2] == "=") {

                arr[0] = Number(inputs.value);
                arr[1] = "";
                arr[2] = "";
                if(this.index!=18){
                inputs.value = ""};
            }
            //如果数组中保存的是除号并且数组的第二个数分母是0，当用户点击加减乘除或者等号时，系统弹出警告提示，并且重置数组中的数据
            if (this.index == 3 || this.index == 7 || this.index == 11 || this.index == 15 || this.index == 19) {
                if (arr[1] == 0 && (arr[2] == "/"||arr[2] == "%")) {
                    alert("除数不可以为0");
                    arr[0] = "";
                    arr[1] = "";
                    arr[2] = "";
                    return
                }

            }
            //加减乘除等功能实现
            switch (this.index) {
                //求余
                case 1:
                    if (arr[1] != "" && arr[2] != "") {
                        inputs.focus();
                        arr[0] = cal();
                        arr[1] = "";
                    }
                    arr[2] = "%";
                    inputs.value = "";
                    break;
                //SIN
                case 2:
                    if(arr[1] != "" && arr[2] != "") {
                            inputs.focus();
                            arr[0] = cal();
                            arr[1] = "";
                            arr[2] = "";
                    }
                    if(arr[0]!=""&&arr[1] ==""&&arr[2] =="")
                    {
                        inputs.focus();
                        arr[2] = "SIN";
                        arr[0] = cal();
                        arr[2] = "=";
                        inputs.value = arr[0];
                    }
                    break;
                //加号
                case 3:
                    if (arr[1] != "" && arr[2] != "") {
                        inputs.focus();
                        arr[0] = cal();
                        arr[1] = "";
                    }
                    arr[2] = "+";
                    inputs.value = "";
                    break;
                //减号
                case 7:
                    if (arr[1] != "" && arr[2] != "") {
                        inputs.focus();
                        arr[0] = cal();
                        arr[1] = "";
                    }
                    else if (arr[0] == "" && arr[1] == "")
                    {
                        inputs.focus();
                        inputs.value = "-";
                        break;
                    }
                    arr[2] = "-";
                    inputs.value = "";
                    break;
                //乘号
                case 11:
                    if (arr[1] != "" && arr[2] != "") {
                        inputs.focus();
                        arr[0] = cal();
                        arr[1] = "";
                    }
                    arr[2] = "*";
                    inputs.value = "";
                    break;
                //除号
                case 15:
                    if (arr[1] != "" && arr[2] != "") {
                        inputs.focus();
                        arr[0] = cal();
                        arr[1] = "";
                    }
                    arr[2] = "/";
                    inputs.value = "";
                    break;
                //等号
                case 19:
                    if (arr[1] != "" && arr[2] != "") {
                        inputs.focus();
                        arr[0] = cal();
                        inputs.value = arr[0];
                        arr[1] = "";
                        arr[2] = "=";
                    }
                    break;
                default:
            }
            //用户点击数字及小数点实现
            switch (this.index) {
                //点击7,如果数组里面没有计算符号，就将数据保存到第一个数字中，如果有符号，就保存到第二个数字中
                case 4:
                    inputs.value = Number(inputs.value.concat("7"));
                    if (arr[2] != "") {
                        arr[1] = Number(inputs.value);
                    }
                    else {
                        arr[0] = Number(inputs.value);
                    }
                    break;
                //点击8
                case 5:
                    inputs.value = Number(inputs.value.concat("8"));
                    if (arr[2] != "") {
                        arr[1] = Number(inputs.value);
                    }
                    else {
                        arr[0] = Number(inputs.value);
                    }
                    break;
                //点击9
                case 6:
                    inputs.value = Number(inputs.value.concat("9"));
                    if (arr[2] != "") {
                        arr[1] = Number(inputs.value);
                    }
                    else {
                        arr[0] = Number(inputs.value);
                    }
                    break;
                //点击4
                case 8:
                    inputs.value = Number(inputs.value.concat("4"));
                    if (arr[2] != "") {
                        arr[1] = Number(inputs.value);
                    }
                    else {
                        arr[0] = Number(inputs.value);
                    }
                    break;
                //点击5
                case 9:
                    inputs.value = Number(inputs.value.concat("5"));
                    if (arr[2] != "") {
                        arr[1] = Number(inputs.value);
                    }
                    else {
                        arr[0] = Number(inputs.value);
                    }
                    break;
                //点击6
                case 10:
                    inputs.value = Number(inputs.value.concat("6"));
                    if (arr[2] != "") {
                        arr[1] = Number(inputs.value);
                    }
                    else {
                        arr[0] = Number(inputs.value);
                    }
                    break;
                //点击1
                case 12:
                    inputs.value = Number(inputs.value.concat("1"));
                    if (arr[2] != "") {
                        arr[1] = Number(inputs.value);
                    }
                    else {
                        arr[0] = Number(inputs.value);
                    }
                    break;
                //点击2
                case 13:
                    inputs.value = Number(inputs.value.concat("2"));
                    if (arr[2] != "") {
                        arr[1] = Number(inputs.value);
                    }
                    else {
                        arr[0] = Number(inputs.value);
                    }
                    break;
                //点击3
                case 14:
                    inputs.value = Number(inputs.value.concat("3"));
                    if (arr[2] != "") {
                        arr[1] = Number(inputs.value);
                    }
                    else {
                        arr[0] = Number(inputs.value);
                    }
                    break;
                //点击0
                case 16:
                    if(inputs.value.split(".").length==1) {
                        inputs.value = Number(inputs.value.concat("0"));
                    }
                    else {
                        inputs.value = inputs.value.concat("0");
                    }
                    if (arr[2] != "") {
                        arr[1] = inputs.value;
                    }
                    else {
                        arr[0] = inputs.value;
                    }
                    break;
                //点击.
                case 18:
                    if(inputs.value.split(".").length==1 &&inputs.value!="") {
                        inputs.value = inputs.value.concat(".");
                    }
                    break;
                    }
            if(inputs.value.length>10) {
                inputs.value = inputs.value.substr(0,10);
            }

        }

    }

}