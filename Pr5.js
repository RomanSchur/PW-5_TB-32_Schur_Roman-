function calculate_1() {
    let converter_1 = parseFloat(document.getElementById("1").value);
    let recover_1 = parseFloat(document.getElementById("2").value);
    let converter_2 = parseFloat(document.getElementById("3").value);
    let recover_2 = parseFloat(document.getElementById("4").value);
    let converter_3 = parseFloat(document.getElementById("5").value);
    let recover_3 = parseFloat(document.getElementById("6").value);
    let converter_4 = parseFloat(document.getElementById("7").value);
    let recover_4 = parseFloat(document.getElementById("8").value);
    let converter_5 = parseFloat(document.getElementById("9").value);
    let recover_5 = parseFloat(document.getElementById("10").value);
    if (isNaN(converter_1) || isNaN(converter_2) || isNaN(converter_3) || isNaN(converter_4) || isNaN(recover_1) || isNaN(recover_2) || isNaN(recover_3) || isNaN(recover_4) || isNaN(recover_4) || isNaN(recover_5) || isNaN(converter_5)){
        alert("Потрібно заповнити всі поля!");
        return;
    }
    let Woc = converter_1+converter_2+converter_3+converter_4+converter_5; //Частота відмов одноколової системи
    let Toc = (converter_1*recover_1+converter_2*recover_2+converter_3*recover_3+converter_4*recover_4+converter_5*recover_5)/Woc;//Середня тривалість відновлення
    let KAos = (Woc+Toc)/8760;                 //Коефіцієнт аварійного простою
    let KPos = 1.2*43/8760;                    //Коефіцієнт планового простою
    let Wdk = 2*Woc*(KAos+KPos);               //Частота відмов одночасно двох кіл двоколової системи
    let Wdc = Wdk+0.02;                               //Частота відмов двоколової системи з урахуванням вимикача


    document.getElementById("res_1").innerHTML = `
        <h3>Результати розрахунків</h3>
        <ul>
            <li><h3>Частота відмов одноколової системи: ${Woc.toFixed(3)} рік</h3></li>
            <li><h3>Середня тривалість відновлення: ${Toc.toFixed(3)} год</h3></li>
            <li><h3>Коефіцієнт аварійного простою: ${KAos.toFixed(3)}</h3></li>
            <li><h3>Коефіцієнт планового простою: ${KPos.toFixed(3)}</h3></li>
            <li><h3>Частота відмов одночасно двох кіл двоколової системи: ${Wdk.toFixed(3)} рік</h3></li>
            <li><h3>Частота відмов двоколової системи з урахуванням вимикача: ${Wdc.toFixed(3)} рік</h3></li>
        </ul>`;
}
function calculate_2() {
    let price_1 = parseFloat(document.getElementById("11").value);
    let price_2 = parseFloat(document.getElementById("12").value);

    if (isNaN(price_1) || isNaN(price_2)){
        alert("Потрібно заповнити всі поля!");
        return;
    }
    let Ma = 0.01*45*Math.pow(10, -3)*5.12*Math.pow(10, 3)*6451;//Математичне сподівання планового недовідпущення
    let Mp = 4*Math.pow(10, -3)*5.12*Math.pow(10, 3)*6451;//Математичне сподівання аварійного недовідпущення
    let M = price_1*Ma+price_2*Mp;//Збитки

    document.getElementById("res_2").innerHTML = `
        <h3>Результати розрахунків</h3>
        <ul>
            <li><h3>Математичне сподівання планового недовідпущення електроенергії: ${Ma.toFixed(3)} кВт*год</h3></li>
            <li><h3>Математичне сподівання аварійного недовідпущення електроенергії: ${Mp.toFixed(3)} кВт*год</h3></li>
            <li><h3>Збитки: ${M.toFixed(3)} грн</h3></li>
    </ul>`;
}