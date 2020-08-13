let oEmp = {
    num1 : '',
    operator : '',
    num2 : ''
}

let txtBox = document.getElementById("tCal");

const setNum = (val) => {
    if(oEmp.num1 == '') txtBox.setAttribute("value", "");
    if(oEmp.operator == ''){
        oEmp.num1 += val;
    }else{
        oEmp.num2 += val;
    }

    let txtVal = txtBox.getAttribute("value");
    txtVal += val;
    txtBox.setAttribute("value", txtVal);
}

const setOpe = (val) => {
    if(oEmp.num1 != ''){
        if(oEmp.num2 == ''){
            oEmp.operator = val;
            let txtVal = txtBox.getAttribute("value");
            txtVal += val;
            txtBox.setAttribute("value", txtVal);
        }else{
            let num1 = parseFloat(oEmp.num1);
            let num2 = parseFloat(oEmp.num2);
            let total = 0;
            if(oEmp.operator == '+') total = num1 + num2;
            if(oEmp.operator == '-') total = num1 - num2;
            if(oEmp.operator == '/') total = num1 / num2;
            if(oEmp.operator == '*') total = num1 * num2;

            oEmp.num1 = total;
            oEmp.operator = val;
            oEmp.num2 = '';

            let txtVal = txtBox.getAttribute("value");
            txtVal = total + val;
            txtBox.setAttribute("value", txtVal);
        }
    }
}

const del = () => {
    oEmp.num1 = '';
    oEmp.num2 = '';
    oEmp.operator = '';

    txtBox.setAttribute("value", "");
}

const actions = () => {
    if(oEmp.num2 != ''){
        let num1 = parseFloat(oEmp.num1);
        let num2 = parseFloat(oEmp.num2);
        let total = 0;
        if(oEmp.operator == '+') total = num1 + num2;
        if(oEmp.operator == '-') total = num1 - num2;
        if(oEmp.operator == '/') total = num1 / num2;
        if(oEmp.operator == '*') total = num1 * num2;

        txtBox.setAttribute("value", total);
    }

    oEmp.num1 = '';
    oEmp.num2 = '';
    oEmp.operator = '';
}