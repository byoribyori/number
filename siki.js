(function () {
  'use strict';
  var area = document.getElementById('area');
  var start = document.getElementById('start');
  var kaisuu = 0;
  var Dat = 0;
  var iti, ni, san, yon, go, Da, kotae, kar, ikkai, po, ke, mo, nn, D,br;
  var hinto = true;
  function ct() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == "text") {
        inputs[i].value = "";
      }
    }
  }
  function mon() {
    if (kaisuu === 0) {
      Da = Date.now();
    }
    function keisann() {
      var aaa = aa.value;
      if (aaa === '(' || aaa === '') {
      } else {
        return;
      }
      var bbb = bb.value;
      var ki = 0;
      for (var i = 0; i < bbb.length; i++) {
        if (((bbb[i] === '+') || (bbb[i] === '-')) || ((bbb[i] === '*') || (bbb[i] === '/'))) {
          ki++;
        }
      }
      if (ki != 1) {
        return;
      }
      ki = 0;
      var ccc = cc.value;
      for (i = 0; i < ccc.length; i++) {
        if (((ccc[i] === '+') || (ccc[i] === '-')) || ((ccc[i] === '*') || (ccc[i] === '/'))) {
          ki++;
        }
      }
      if (ki != 1) {
        return;
      }
      var ddd = dd.value;
      ki = 0;
      for (i = 0; i < ddd.length; i++) {
        if (((ddd[i] === '+') || (ddd[i] === '-')) || ((ddd[i] === '*') || (ddd[i] === '/'))) {
          ki++;
        }
      }
      if (ki != 1) {
        return;
      }
      var eee = ee.value;
      ki = 0;
      for (i = 0; i < eee.length; i++) {
        if (((eee[i] === '+') || (eee[i] === '-')) || ((eee[i] === '*') || (eee[i] === '/'))) {
          ki++;
        }
      }
      if (ki != 1) {
        return;
      }
      var fff = ff.value;
      if (fff === ')' || fff === '') {
      } else {
        return;
      }
      var siki = (aaa + iti + bbb + ni + ccc + san + ddd + yon + eee + go + fff);
      var kekka = eval(siki);
      if (kekka === kotae) {
        while (area.firstChild) {
          area.removeChild(area.firstChild);
        }
        if (kaisuu === 1) {
          D = Date.now();
          Dat += Math.floor((D - Da) / 1000);
          if(Dat > 59){
            var byou = Dat % 60;
            var fun = (Dat - byou) / 60;
          }
          var result = document.createElement('span');
          result.innerText = ikkai + '\n' + siki + '=' + kotae + '\n';
          area.appendChild(result);
          var date = document.createElement('span');
          if (fun) {
            date.innerText = '記録は' + fun + '分' + byou + '秒';
          } else {
            date.innerText = '記録は' + Dat + '秒';
          }
          area.appendChild(date);
          br = document.createElement('br');
          area.append(br);
          br = document.createElement('br');
          area.append(br)
          result = document.createElement('button');
          result.innerText = 'もう一度';
          result.className = 're';
          result.onclick = function () { window.location.reload(); }
          area.appendChild(result);
          document.cookie='kiroku=' + fun +' '+ byou;

        } else {
          ikkai = siki + '=' + kotae;
          kaisuu++;
          hinto = true;
          mon();
        }
      } else {
        var hazure = document.createElement('p');
        hazure.className = 'siki';
        hazure.innerText = siki + ' = ' + kekka;
        area.appendChild(hazure);
        Dat += 5;
      }
    }

    function k() {
      var end = false;
      var kari = 0;
      kar = 0;
      while (end === false) {
        iti = Math.floor(Math.random() * 9) + 1;
        ni = Math.floor(Math.random() * 9) + 1;
        san = Math.floor(Math.random() * 9) + 1;
        yon = Math.floor(Math.random() * 9) + 1;
        go = Math.floor(Math.random() * 9) + 1;
        var kigou = ['+', '-', '*', '/']
        po = kigou[Math.floor(Math.random() * 4)];
        ke = kigou[Math.floor(Math.random() * 4)];
        mo = kigou[Math.floor(Math.random() * 4)];
        nn = kigou[Math.floor(Math.random() * 4)];
        if (po === '+' || po === '-') {
          if (ke === '+' || ke === '-') {
            if (mo === '+' || mo === '-') {
              if (nn === '+' || nn === '-') {
                continue;
              }
            }
          }
        }

        var kako = Math.floor(Math.random() * 6);
        switch (kako) {
          case 0:
          case 1:
            kar = iti + po + ni + ke + san + mo + yon + nn + go;
            kari = eval(kar);
            break;
          case 2:
            kar = '(' + iti + po + ni + ')' + ke + san + mo + yon + nn + go;
            kari = eval(kar);
            break;
          case 3:
            kar = iti + po + '(' + ni + ke + san + ')' + mo + yon + nn + go;
            kari = eval(kar);
            break;
          case 4:
            kar = iti + po + ni + ke + '(' + san + mo + yon + ')' + nn + go;
            kari = eval(kar);
            break;
          case 5:
            kar = iti + po + ni + ke + san + mo + '(' + yon + nn + go + ')';
            kari = eval(kar);
            break;
        }

        if (kari > 0) {
          kari += ''
          if (kari.length === 1) {
            for (var o = 0; o < 2; o++) {
              var itii = kigou[o];
              for (var t = 0; t < 2; t++) {
                var nii = kigou[t];
                for (var th = 0; th < 2; th++) {
                  var sann = kigou[th];
                  for (var f = 0; f < 2; f++) {
                    var yonn = kigou[f];
                    if (eval(iti + itii + ni + nii + san + sann + yon + yonn + go) === Number(kari)) {
                      k();
                      return;
                    }
                  }
                }
              }
            }
            kotae = Number(kari);
            end = true;
          }
        }
      }
    }

    k();

    if (kaisuu === 0) {
      var title = document.createElement('h2');
      title.innerText = '+ - * / () を入れて式を完成させろ';
      br = document.createElement('br');
      area.append(title, br);
    } else {
      var atari = document.createElement('h2');
      atari.innerText = 'あたり!!';
      br = document.createElement('br');
      area.append(atari, br);
    }

    var a = document.createElement('input');
    a.type = 'text';
    a.id = 'one';
    a.className = 'one';
    a.maxLength = '1';
    area.appendChild(a);
    var aa = document.getElementById('one');

    var num = document.createElement('span');
    num.innerText = iti;
    area.appendChild(num);

    var b = document.createElement('input');
    b.type = 'text';
    b.id = 'two';
    b.className = 'two';
    b.maxLength = '3';
    area.appendChild(b);
    var bb = document.getElementById('two');

    num = document.createElement('span');
    num.innerText = ni;
    area.appendChild(num);

    var c = document.createElement('input');
    c.type = 'text';
    c.id = 'three';
    c.className = 'three';
    c.maxLength = '3';
    area.appendChild(c);
    var cc = document.getElementById('three');

    num = document.createElement('span');
    num.innerText = san;
    area.appendChild(num);

    var d = document.createElement('input');
    d.type = 'text';
    d.id = 'four';
    d.className = 'four';
    d.maxLength = '3';
    area.appendChild(d);
    var dd = document.getElementById('four');

    num = document.createElement('span');
    num.innerText = yon;
    area.appendChild(num);

    var e = document.createElement('input');
    e.type = 'text';
    e.id = 'five';
    e.className = 'five';
    e.maxLength = '3';
    area.appendChild(e);
    var ee = document.getElementById('five');

    num = document.createElement('span');
    num.innerText = go;
    area.appendChild(num);

    var f = document.createElement('input');
    f.type = 'text';
    f.id = 'six';
    f.className = 'six';
    f.maxLength = '1';
    area.appendChild(f);
    var ff = document.getElementById('six');

    num = document.createElement('span');
    num.innerText = '=' + kotae;
    area.appendChild(num);

    var g = document.createElement('input');
    g.type = 'button';
    g.value = '計算';
    g.className = 'button';
    g.onclick = function () {
      keisann();
    }
    area.appendChild(g);

    var clear = document.createElement('input');
    clear.type = 'button';
    clear.value = 'clear';
    clear.className = 'button';
    clear.onclick = function () {
      ct();
    }
    area.appendChild(clear);

    var clear = document.createElement('input');
    clear.type = 'button';
    clear.value = 'ヒント';
    clear.className = 'button';
    clear.onclick = function () {
      if (hinto === true) {
        hinto = false;
        Dat += 15;
        ct();
        var ran = Math.floor(Math.random() * 4);
        var inputs = document.getElementsByTagName("input");
        switch (ran) {
          case 0:
            inputs[1].value = po;
            break;
          case 1:
            inputs[2].value = ke;
            break;
          case 2:
            inputs[3].value = mo;
            break;
          case 3:
            inputs[4].value = nn;
            break;
        }
      }
    }
    area.appendChild(clear);

    var inp = document.getElementsByTagName('input');
    inp[1].focus();

    document.onkeydown = function (e) {
      if (e.keyCode === 13) {
        keisann();
      }
    }
  }
  start.onclick = () => {
    while (area.firstChild) {
      area.removeChild(area.firstChild);
    }
    mon();
  }
}());
