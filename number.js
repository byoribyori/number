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
        var random = Math.floor(Math.random() * 1000 + 1);
        var mom = random + '';
        if (random === 1000 || random <= 101) {
        } else {
            if (mom[0] === '0' || mom[1] === '0') {
            } else {
                if (mom[0] === mom[1] || mom[0] === mom[2]) {
                } else {
                    if (mom[1] === mom[2] || mom[2] === '0') {
                    } else {
                        var ok = true;
                        console.log(random);
                    }
                }
            }
        }
    }

    button.onclick = () => {
        var mm = yosou.value + '';
        if (isNaN(yosou.value) === true || mm.length != 3) {
            alert('できません');
            ct();
            return;
        }
        if ((mm[0] === '0' || mm[1] === '0') || mm[2] === '0') {
            alert('0はありません');
            ct();
            return;
        }
        if (end === 1) {
            return;
        }
        if ((mm[0] === mm[1] || mm[0] === mm[2]) || mm[1] === mm[2]) {
            alert('同じ数は2回使えません');
            ct();
            return;
    }
     
        var o = 0;
        var v = 0;

        if (mom[0] === mm[0]) {
            var o = o + 1;
        }
        if (mom[0] === mm[1] || mom[0] === mm[2]) {
            var v = v + 1;
        }
        if (mom[1] === mm[1]) {
            var o = o + 1;
        }
        if (mom[1] === mm[0] || mom[1] === mm[2]) {
            var v = v + 1;
        }
        if (mom[2] === mm[2]) {
            var o = o + 1;
        }
        if (mom[2] === mm[0] || mom[2] === mm[1]) {
            var v = v + 1;
        }

        function result (){
            alert('正解!\n  記録は' + kaisuu + '回');
        }
        function xxx (){
            alert('GAMEOVER!\n  正解は' + random + 'でした');
        }
        if (o === 3) {
            var paragragh = document.createElement('h4');
            paragragh.innerText += mm + ' 〇〇〇';
            resultDivided.appendChild(paragragh);
            var paragragh = document.createElement('a');
            paragragh.href = 'https://byoribyori.github.io/number/number';
            paragragh.innerText += 'もう一度';
            resultDivided.appendChild(paragragh);
            var paragragh = document.createElement('br');
            resultDivided.appendChild(paragragh);
            var paragragh = document.createElement('a');
            paragragh.href = 'https://byoribyori.github.io/number/numberup';
            paragragh.innerText += '4桁verへ';
            resultDivided.appendChild(paragragh);
           
            end++
            setTimeout(result, 0);
        } else {
            var paragragh = document.createElement('p');
            if (kaisuu === 9) {
                paragragh.innerText += mm + ' 〇は' + o + ' △は' + v + '　　　　　　　残念...';
            } else {
                if (kaisuu > 5) {
                    paragragh.innerText += mm + ' 〇は' + o + ' △は' + v + '　　　　　　　あと' + (9 - kaisuu) + '回\n';
                } else {
                    paragragh.innerText += mm + ' 〇は' + o + ' △は' + v + '\n';
                }
            }
            resultDivided.appendChild(paragragh);
            if (kaisuu > 8) {
                var paragragh = document.createElement('h4');
                paragragh.innerText += '正解は ' + random;
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
