(function () {
    const yosou = document.getElementById('yosouinput');
    const button = document.getElementById('button');
    const resultDivided = document.getElementById('result-area');
    var kaisuu = 0;
    var end = 0;
    var date = 0;
    var o,v,oo,vv;
    var haha = '';
    var hyouji = true;
    var ai = false;
    var mm = null;
    var ha = ['1234'];
    for (var i = 1235; i < 9877; i++) {
        var ii = i + '';
        if (ii[0] === '0' || ii[1] === '0') {
        } else {
            if (ii[2] === '0' || ii[3] === '0') {
            } else {
                if (ii[0] === ii[1] || ii[0] === ii[2]) {
                } else {
                    if (ii[0] === ii[3] || ii[1] === ii[2]) {
                    } else {
                        if (ii[1] === ii[3] || ii[2] === ii[3]) {
                        } else {
                            ha.push(ii);;
                        }
                    }
                }
            }
        }
    }
    var h = [ha.length];
    
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
        if (random === 10000 || random < 1234) {
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
        if (yosou.value === '01' || ai === true) {
            ai = true;
            ct();
            mm = ha[Math.floor(Math.random() * ha.length)]
        }
        if (kaisuu === 0) {
            date = Date.now();
       }
       if(ai === false){
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
        }}
        if(end === 1){
            return;
        }

        o = 0;
        v = 0;

        if (mom[0] === mm[0]) {
            o = o + 1;
        }
        if ((mom[0] === mm[1] || mom[0] === mm[2]) || mom[0] === mm[3]) {
            v = v + 1;
        }
        if (mom[1] === mm[1]) {
            o = o + 1;
        }
        if ((mom[1] === mm[0] || mom[1] === mm[2]) || mom[1] === mm[3]) {
            v = v + 1;
        }
        if (mom[2] === mm[2]) {
            o = o + 1;
        }
        if ((mom[2] === mm[0] || mom[2] === mm[1]) || mom[2] === mm[3]) {
            v = v + 1;
        }
        if (mom[3] === mm[3]) {
            o = o + 1;
        }
        if ((mom[3] === mm[0] || mom[3] === mm[1]) || mom[3] === mm[2]) {
            v = v + 1;
        }

        function result (){
            const da = Date.now();
            var sa = Math.round((da - date) / 1000);
            if (sa >= 60) {
                const byou = sa % 60;
                var sa = (sa - byou) / 60;
                alert('正解!\n  記録は' + kaisuu + '回です\n  ' + sa + '分' + byou + '秒かかりました');
            } else {
                alert('正解!\n  記録は' + kaisuu + '回です\n  ' + sa + '秒かかりました');
            }
        }
        function xxx (){
            alert('GAMEOVER!\n  正解は' + random + 'でした');
        }
        
        if (o === 4) {
            var paragragh = document.createElement('h4');
            paragragh.innerText += mm + ' 〇〇〇〇';
            resultDivided.appendChild(paragragh);
            if (h[kaisuu] === 1) {
                var paragragh = document.createElement('p');
                paragragh.innerText += mm + 'しかありません';
                resultDivided.appendChild(paragragh);
            } else {
                var paragragh = document.createElement('p');
                paragragh.innerText += '全部で' + h[kaisuu] + '通りありました';
                resultDivided.appendChild(paragragh);
            }
            var paragragh = document.createElement('a');
            paragragh.href = 'https://byoribyori.github.io/number/numberup';
            paragragh.innerText += 'もう一度';
            resultDivided.appendChild(paragragh);
            var paragragh = document.createElement('br');
            resultDivided.appendChild(paragragh);
            var paragragh = document.createElement('button');
            paragragh.id = 'miru';
            paragragh.onclick = function () {
                var paragragh = document.createElement('h5');
                paragragh.innerText += haha;
                resultDivided.appendChild(paragragh);
            }
            paragragh.innerText += '何通りか見る';
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
                var paragragh = document.createElement('br');
                resultDivided.appendChild(paragragh);
                var paragragh = document.createElement('button');
                paragragh.id = 'miru';
                paragragh.onclick = function () {
                    var paragragh = document.createElement('h5');
                    paragragh.innerText += haha;
                    resultDivided.appendChild(paragragh);
                }
                paragragh.innerText += '何通りか見る';
                resultDivided.appendChild(paragragh);
                end++
                setTimeout(xxx, 0);
            }
        }
        kaisuu++;
        ct();
        oo = o;
        vv = v;
        var hale = ha.length;
        for (e = 0; e < hale; e++) {
            o = 0;
            v = 0;
            var hai = ha[0];
            if (hai[0] === mm[0]) {
                o = o + 1;
            }
            if ((hai[0] === mm[1] || hai[0] === mm[2]) || hai[0] === mm[3]) {
                v = v + 1;
            }
            if (hai[1] === mm[1]) {
                o = o + 1;
            }
            if ((hai[1] === mm[0] || hai[1] === mm[2]) || hai[1] === mm[3]) {
                v = v + 1;
            }
            if (hai[2] === mm[2]) {
                o = o + 1;
            }
            if ((hai[2] === mm[0] || hai[2] === mm[1]) || hai[2] === mm[3]) {
                v = v + 1;
            }
            if (hai[3] === mm[3]) {
                o = o + 1;
            }
            if ((hai[3] === mm[0] || hai[3] === mm[1]) || hai[3] === mm[2]) {
                v = v + 1;
            }

            if (oo === o && vv === v) {
                ha.push(hai);
                ha.splice(0, 1);
            } else {
                ha.splice(0, 1);
            }
        }
        h.push(ha.length);
        if (hyouji != false && end === 0) {
            haha += '\n' + kaisuu + '回目  ' + ha.length + '通り\n' + ha + '\n';
        }
        if (ha.length === 1) {
            hyouji = false;
        }
        if(ai === true && end === 0){
            button.onclick();
        }
    }

    document.onkeydown = function (e) {
        if (e.keyCode === 13) {
         button.onclick();
        }
    }
}());
