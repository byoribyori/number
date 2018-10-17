(function () {
    const yosou = document.getElementById('yosouinput');
    const button = document.getElementById('button');
    var resultDivided = document.getElementById('result-area');
    var kaisuu = 0;
    var end = 0;
    var date = 0;
    var random, o, v, oo, vv, inputs, ikiru, kekka, paragrag;
    var haha = '';
    var hyouji = true;
    var kota = true;
    var ai = false;
    var sp = false;
    var na = false;
    var kotae = false;
    var mm = null;
    var ha = ['123'];
    for (var i = 124; i < 988; i++) {
        var ii = i + '';
        if (ii[0] === '0' || ii[1] === '0') {
        } else {
            if (ii[0] === ii[1] || ii[0] === ii[2]) {
            } else {
                if (ii[1] === ii[2] || ii[2] === '0') {
                } else {
                    ha.push(ii);
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
        random = Math.floor(Math.random() * 1000 + 1);
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
        if (kotae === true && kota === true) {
            mom = yosou.value;
            if (isNaN(yosou.value) === true || mom.length != 3) {
                alert('できません');
                ct();
                return;
            }
            if ((mom[0] === '0' || mom[1] === '0') || mom[2] === '0') {
                alert('0はありません');
                ct();
                return;
            }
            if ((mom[0] === mom[1] || mom[0] === mom[2]) || mom[1] === mom[2]) {
                alert('同じ数は2回使えません');
                ct();
                return;
            }
            paragragh = document.createElement('p');
            paragragh.innerText += '答えが設定されました';
            resultDivided.appendChild(paragragh);
            ct();
            kota = false;
            resultDivided.removeChild(paragrag);
        } else {
            if ((yosou.value === '00' && kota === true) && kaisuu === 0) {
                kotae = true;
                ct();
                paragrag = document.createElement('p');
                paragrag.innerText += '答えを設定できます';
                resultDivided.appendChild(paragrag);
            } else {
                if ((yosou.value === '01' || ai === true) && na === false) {
                    ai = true;
                    ct();
                    if (kaisuu === 0) {
                        mm = ha[Math.floor(Math.random() * ha.length)];
                        inputs = [];
                        for (i = 123; i < 988; i++) {
                            ii = i + '';
                            if (ii[0] === '0' || ii[1] === '0') {
                            } else {
                                if (ii[0] === ii[1] || ii[0] === ii[2]) {
                                } else {
                                    if (ii[1] === ii[2] || ii[2] === '0') {
                                    } else {
                                        inputs.push(ii);
                                    }
                                }
                            }
                        }
                    } else {
                        var saisyou = 10000;
                        var syou = 6000000;
                        if (ha.length < 3) {
                            mm = ha[0] + '';
                        } else {
                            var inp = [];
                            for (i = 0; i < inputs.length; i++) {
                                ikiru = 0;
                                inp = inputs[i];
                                for (var a = 0; a < ha.length; a++) {
                                    if (kaisuu === 1 && i === 0) {
                                    }
                                    var an = ha[a];
                                    o = 0;
                                    v = 0;
                                    if (inp[0] === an[0]) {
                                        o = o + 1;
                                    }
                                    if (inp[0] === an[1] || inp[0] === an[2]) {
                                        v = v + 1;
                                    }
                                    if (inp[1] === an[1]) {
                                        o = o + 1;
                                    }
                                    if (inp[1] === an[0] || inp[1] === an[2]) {
                                        v = v + 1;
                                    }
                                    if (inp[2] === an[2]) {
                                        o = o + 1;
                                    }
                                    if (inp[2] === an[0] || inp[2] === an[1]) {
                                        v = v + 1;
                                    }

                                    var hal = ha.length;
                                    for (var on = 0; on < hal; on++) {
                                        var kah = ha[on];
                                        oo = 0;
                                        vv = 0;
                                        if (kah[0] === inp[0]) {
                                            oo = oo + 1;
                                        }
                                        if (kah[0] === inp[1] || kah[0] === inp[2]) {
                                            vv = vv + 1;
                                        }
                                        if (kah[1] === inp[1]) {
                                            oo = oo + 1;
                                        }
                                        if (kah[1] === inp[0] || kah[1] === inp[2]) {
                                            vv = vv + 1;
                                        }
                                        if (kah[2] === inp[2]) {
                                            oo = oo + 1;
                                        }
                                        if (kah[2] === inp[0] || kah[2] === inp[1]) {
                                            vv = vv + 1;
                                        }

                                        if (o === oo && v === vv) {
                                            ikiru++;
                                        }
                                    }
                                }
                                if (ikiru < syou && ikiru != 0) {
                                    saisyou = inputs[i];
                                    syou = ikiru;
                                    mm = saisyou + '';
                                }
                            }
                        }
                    }
                } else {
                    if ((yosou.value === '02' || sp === true) && na === false) {
                        mm = ha[Math.floor(Math.random() * ha.length)];
                        sp = true;
                        ct();
                    } else {
                        na = true;
                        na = true;
                    }

                }

                if (kaisuu === 0) {
                    date = Date.now();
                }
                if (ai != true && sp != true) {
                    mm = yosou.value + '';
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
                    if ((mm[0] === mm[1] || mm[0] === mm[2]) || mm[1] === mm[2]) {
                        alert('同じ数は2回使えません');
                        ct();
                        return;
                    }
                }
                if (end === 1) {
                    return;
                }

                o = 0;
                v = 0;

                if (mom[0] === mm[0]) {
                    o = o + 1;
                }
                if (mom[0] === mm[1] || mom[0] === mm[2]) {
                    v = v + 1;
                }
                if (mom[1] === mm[1]) {
                    o = o + 1;
                }
                if (mom[1] === mm[0] || mom[1] === mm[2]) {
                    v = v + 1;
                }
                if (mom[2] === mm[2]) {
                    o = o + 1;
                }
                if (mom[2] === mm[0] || mom[2] === mm[1]) {
                    v = v + 1;
                }

                function result() {
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
                function xxx() {
                    alert('GAMEOVER!\n  正解は' + mom + 'でした');
                }
                if (o === 3) {
                    var paragragh = document.createElement('h4');
                    paragragh.innerText += mm + ' 〇〇〇';
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
                    paragragh.href = 'https://byoribyori.github.io/number/number';
                    paragragh.innerText += 'もう一度';
                    resultDivided.appendChild(paragragh);
                    var paragragh = document.createElement('br');
                    resultDivided.appendChild(paragragh);
                    var paragragh = document.createElement('a');
                    paragragh.href = 'https://byoribyori.github.io/number/numberup';
                    paragragh.innerText += '4桁verへ';
                    resultDivided.appendChild(paragragh);
                    if (haha.length != 0) {
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
                    }
                    end++
                    setTimeout(result, 0);
                } else {
                    kekka = mm + ' 〇は' + o + ' △は' + v;
                    var paragragh = document.createElement('p');
                    if (kaisuu === 9) {
                        paragragh.innerText += kekka + '　　　　　　　　残念...';
                    } else {
                        if (kaisuu > 5) {
                            paragragh.innerText += kekka + '　　　　　　　あと' + (9 - kaisuu) + '回';
                        } else {
                            paragragh.innerText += kekka;
                        }
                    }
                    resultDivided.appendChild(paragragh);
                    if (kaisuu > 8) {
                        var paragragh = document.createElement('h4');
                        paragragh.innerText += '正解は ' + random;
                        resultDivided.appendChild(paragragh);
                        var paragragh = document.createElement('a');
                        paragragh.href = 'https://byoribyori.github.io/number/number';
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
                    if (mm[0] === hai[0]) {
                        o = o + 1;
                    }
                    if (mm[0] === hai[1] || mm[0] === hai[2]) {
                        v = v + 1;
                    }
                    if (mm[1] === hai[1]) {
                        o = o + 1;
                    }
                    if (mm[1] === hai[0] || mm[1] === hai[2]) {
                        v = v + 1;
                    }
                    if (mm[2] === hai[2]) {
                        o = o + 1;
                    }
                    if (mm[2] === hai[0] || mm[2] === hai[1]) {
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
                    haha += '\n' + kekka + ' → → ' + ha.length + '通り\n' + ha + '\n';
                }
                if (ha.length === 1) {
                    hyouji = false;
                }
                if ((ai === true && end === 0) || (sp === true && end === 0)) {
                    button.onclick();
                }
            }
        }
    }

    document.onkeydown = function (e) {
        if (e.keyCode === 13) {
            button.onclick();
        }
    }
}());
