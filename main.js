let tempScale = 'C';
let temp = 600;
let alfa = 1;
let cool_front = 'верхний';
let temp1 = temp;
let iRegime_heat_transfer;
let alfa1 = alfa
let iChart;
let iRegime_flow
let btn =document.getElementById('run')
let otvet =''
btn.addEventListener('click',runCalc)

function runCalc(e){
    console.log('run')

   let arr = Array.from(document.querySelectorAll('input')).filter(inputElement =>{
      if (inputElement.value==''){
          alert('Введите'+inputElement.placeholder)
          return inputElement
      }
    });
    console.log(arr.length)
    if (arr.length==0){
        otvet='';
        temp =document.getElementById('Temp').value
        alfa =document.getElementById('alfa').value

        tempScale = document.querySelector('input[name="drone"]:checked').value;
        cool_front = document.querySelector('input[name="drone1"]:checked').value;
        console.log('tempScale',tempScale)
        console.log('cool_front',cool_front)
        console.log('temp',temp)
        console.log('alfa',alfa)
        test()
        document.getElementById('otvet').innerText=otvet;
    }
}


let alfavCRIT = 0.7;
function test() {
    sub1()
    if (iChart == 1){
        console.log('Карта нормальных режимов течения')
        otvet+='*Карта нормальных режимов течения;\n';
    }else {
        console.log('Карта режимов течения у "горячей стенки"');
        otvet+='*Карта режимов течения у "горячей стенки";\n';
    }
    switch (iRegime_flow) {
        case 1:
            console.log('Режим малого пузыря')
            otvet+='*Режим малого пузыря;\n';
            break;
        case 2:
            console.log('малые пузыри в alfa=0.2, остальной парсоставляют большие пузыри');
            otvet+='*малые пузыри в alfa=0.2, остальной парсоставляют большие пузыри;\n';
            break;
        case 3:
            console.log('пенно-турбулентный режим')
            break;
        case 4:
            console.log('режим плёночного течения (возможен унос)')
            otvet+='*режим плёночного течения (возможен унос);\n';
            break;
        case 5:
            console.log('однофазный пар')
            otvet+='*однофазный пар;\n';
            break;
        case 6:
            console.log('режим скользящей плёнки (возможен унос)')
            otvet+='*режим скользящей плёнки (возможен унос);\n';
            break;
        case 7:
            console.log('режим верхнего затопления')
            otvet+='*режим верхнего затопления;\n';

            break;
        case 8:
            console.log('обращённо-кольцевой режим')
            otvet+='*обращённо-кольцевой режим;\n';
            break;
        case 9:
            console.log('режим течения жидких кластеров (возможен унос)')
            otvet+='*режим течения жидких кластеров (возможен унос);\n';
            break;

        default:
            console.log("Нет таких значений");
    }

    switch (iRegime_heat_transfer) {
        case 1:
            console.log('Одна фаза: пар')
            otvet+='*Одна фаза: пар;\n';
            break;
        case 2:
            console.log('Дисперсное течение пленочное кипение (DFFB)')
            otvet+='*Дисперсное течение пленочное кипение (DFFB);\n';

            break;
        case 3:
            console.log('Переход от (DFFB) к обращенно-кольцевому')
            otvet+='*Переход от (DFFB) к обращенно-кольцевому;\n';
            break;
        case 4:
            console.log('Переход к (DFFB)')
            otvet+='*Переход к (DFFB);\n';
            break;
        case 5:
            console.log('Одна фаза: пар')
            otvet+='*Одна фаза: пар;\n';
            break;
        case 6:
            console.log('Переходное кипение')
            otvet+='*Переходное кипение;\n';
            break;
        case 7:
            console.log('Переохлажденное пузырьковое кипение')
            otvet+='*Переохлажденное пузырьковое кипение;\n';
            break;
        case 8:
            console.log('Пузырьковое кипение')
            otvet+='*Пузырьковое кипение;\n';
            break;
        case 9:
            console.log('Одна фаза: жидкость')
            otvet+='*Одна фаза: жидкость;\n';
            break;

        default:
            console.log("Нет таких значений");
    }



}




function sub1() {

    switch (tempScale) {
        case 'C':
            console.log('c');
            break;
        case 'R':
            temp = (5.0 / 4.0) * temp
            break;
        case 'F':
            temp = (5.0 / 9.0) * (temp - 32.0)
            break;
        case 'K':
            temp = temp - 273.15
            break;

        default:
            console.log("Нет таких значений");
    }

    if (temp < 550) {
        iChart = 1;
        sub2()
    } else {
        iChart = 2
        sub3()
    }
    sub4()
}

function sub2() {


    if (alfa <= 0.2) {
        iRegime_flow = 1
        return iRegime_flow
    } else if (alfa<= 0.5) {
        iRegime_flow = 2
        return iRegime_flow

    } else if (alfa < alfavCRIT) {
        iRegime_flow = 3
        return iRegime_flow
    } else if (alfa < 1.0) {
        iRegime_flow = 4
        return iRegime_flow
    } else {
        iRegime_flow = 5
        return iRegime_flow
    }
}

function sub3() {
    let Tsat = 370.0;
    if (cool_front == 'верхний') {
        if (alfa > 0.8) {
            iRegime_flow = 6
            return
        } else {
            iRegime_flow = 7
            return
        }
    } else if (cool_front == 'нижний') {
        console.log("sssss")
        if (temp < Tsat) {
            iRegime_flow = 8

            return
        } else {
            iRegime_flow = 9
            console.log(iRegime_flow)
            return
        }

    }
}

function sub4() {
    let Tchf = 600.0;
    let Tmin = 550.0;
    let Tsat = 370.0;
    let Tliq = 400.0;
    let alfaLIQ = 0.1;
    if (alfa > 0.9999) {
        iRegime_heat_transfer = 1
    } else {
        if (temp > Tmin) {
            if (alfa > 0.8) {
                iRegime_heat_transfer = 2
            } else {
                iRegime_heat_transfer = 3
            }
        } else {
            if (alfaLIQ > 0.0025) {
                if (temp > Tchf) {
                    iRegime_heat_transfer = 4
                } else {
                    iRegime_heat_transfer = 5
                }
            } else {
                if (temp > Tchf) {
                    iRegime_heat_transfer = 6
                } else {
                    if (temp > Tmin) {
                        if (Tliq > Tsat) {
                            iRegime_heat_transfer = 7
                        } else {
                            iRegime_heat_transfer = 8
                        }
                    } else {
                        iRegime_heat_transfer = 9
                    }
                }
            }
        }
    }
}
