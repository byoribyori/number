(function () {
    const yosou = document.getElementById('yosouinput');
    const button = document.getElementById('button');
    const resultDivided = document.getElementById('result-area');
    var kaisuu = 0;
    var end = 0;

    function ct() {
        var inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].type == "tel") {
                inputs[i].value = "";
            }
        }
    }

    var ok = false;
    while (ok === false) {
        var random = Math.floor(Math.random() * 10000 + 1);
        var mom = random + '';
        if (random === 10000 || random < 1023) {
        } else {
            if (mom[0] === '0' || mom[1] === '0') {
            } else {
                if (mom[2] === '0' || mom[3] === '0') {
                } else {
                    if (mom[0] === mom[1] || mom[0] === mom[2]) {
                    } else {
                        if (mom[0] === mom[3] || mom[1] === mom[2]) {
                        } else {
                            if (mom[1] === mom[3] || mom[2] === mom[3]) {
                            } else {
                                var ok = true;
                            }
                        }
                    }
                }
            }
        }
    }

    button.onclick = () => {
        var mm = yosou.value + '';
        if (isNaN(yosou.value) === true || mm.length != 4) {
            alert('できません');
            ct();
            return;
        }
        if((mm[0] === '0' || mm[1] === '0') || (mm[2] === '0' || mm[3] === '0')){
            alert('0はありません');
            ct();
            return;
        }
        if(end === 1){
            return;
        }
        var onaji = true;
        if (mm[0] === mm[1] || mm[0] === mm[2]) {
        } else {
            if (mm[0] === mm[3] || mm[1] === mm[2]) {
            } else {
                if (mm[1] === mm[3] || mm[2] === mm[3]) {
                } else {
                    var onaji = false;
                }
            }
        }
        if (onaji === true) {
            alert('同じ数は2回使えません');
            ct();
            return;
        }
        var o = 0;
        var v = 0;

        if (mom[0] === mm[0]) {
            var o = o + 1;
        }
        if ((mom[0] === mm[1] || mom[0] === mm[2]) || mom[0] === mm[3]) {
            var v = v + 1;
        }
        if (mom[1] === mm[1]) {
            var o = o + 1;
        }
        if ((mom[1] === mm[0] || mom[1] === mm[2]) || mom[1] === mm[3]) {
            var v = v + 1;
        }
        if (mom[2] === mm[2]) {
            var o = o + 1;
        }
        if ((mom[2] === mm[0] || mom[2] === mm[1]) || mom[2] === mm[3]) {
            var v = v + 1;
        }
        if (mom[3] === mm[3]) {
            var o = o + 1;
        }
        if ((mom[3] === mm[0] || mom[3] === mm[1]) || mom[3] === mm[2]) {
            var v = v + 1;
        }

        function result (){
            alert('正解!\n  記録は' + kaisuu + '回');
        }
        function xxx (){
            alert('GAMEOVER!\n  正解は' + random + 'でした');
        }
        
        if (o === 4) {
            var paragragh = document.createElement('h4');
            paragragh.innerText += mm + ' 〇〇〇〇';
            resultDivided.appendChild(paragragh);
            var paragragh = document.createElement('a');
            paragragh.href = 'https://byoribyori.github.io/number/numberup';
            paragragh.innerText += 'もう一度';
            resultDivided.appendChild(paragragh);
            end++
            setTimeout(result, 0);
        } else {
            var paragragh = document.createElement('p');
            if (kaisuu === 14) {
                paragragh.innerText += mm + ' 〇は' + o + ' △は' + v + '　　　　　　　残念...';
            } else {
                if (kaisuu > 10) {
                    paragragh.innerText += mm + ' 〇は' + o + ' △は' + v + '　　　　　　　あと' + (14 - kaisuu) + '回\n';
                } else {
                    paragragh.innerText += mm + ' 〇は' + o + ' △は' + v + '\n';
                }
            }
            resultDivided.appendChild(paragragh);
            if (kaisuu > 13) {
                var paragragh = document.createElement('h4');
                paragragh.innerText += '正解は ' + random;
                resultDivided.appendChild(paragragh);
                var paragragh = document.createElement('a');
                var paragragh = document.createElement('a');
                paragragh.href = 'https://byoribyori.github.io/number/number';
                paragragh.innerText += '3桁verからやりなおしだ';
                resultDivided.appendChild(paragragh);
                var paragragh = document.createElement('br');
                resultDivided.appendChild(paragragh);
                var paragragh = document.createElement('a');
                paragragh.href = 'https://byoribyori.github.io/number/numberup';
                paragragh.innerText += 'もう一度';
                resultDivided.appendChild(paragragh);
                end++
                setTimeout(xxx, 0);
            }
        }
        kaisuu++;
        ct();
    }

    document.onkeydown = function (e) {
        if (e.keyCode === 13) {
         button.onclick();
        }
    }
}());
