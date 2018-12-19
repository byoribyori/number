(function () {
  'use strict';
  const start = document.getElementById('start');
  start.onclick = () => { start() }
  window.onload = () => {
    var num = document.getElementById('number');
    num.focus();
  }
  var ans = [];
  var q9 = [];
  var before = 10, pe = 0;
  var date, Q;

  function start() {
    var number = document.getElementById('number').value;
    if (number < 1 || (number + '').indexOf('.') != -1) {
      return;
    }
    create();
    Q = ans.toString();
    ans.push(['あと２つ']);
    ans.push(['あと１つ']);
    document.getElementsByTagName('h2')[0].remove();
    document.getElementsByTagName('button')[0].remove();
    document.getElementsByTagName('input')[0].type = "hidden";
    var th1 = document.createElement('th');
    th1.id = "siki";
    th1.className = "siki";
    th1.innerText = ans[0][0];
    var th2 = document.createElement('th');
    th2.innerHTML = '<th><input class="an" disabled="disabled" type="tel"></th>';
    th2.className = "anser";
    th2.id = "anser";
    var tr = document.createElement('tr');
    tr.appendChild(th1);
    tr.appendChild(th2);
    var table = document.createElement('table');
    table.appendChild(tr);
    document.getElementById('area').appendChild(table);
    setTimeout(
      function () {
        document.getElementById('siki').innerText = ans[1][0];
        setTimeout(
          function () {
            document.getElementById('siki').innerText = ans[2][0];
            document.getElementById('anser').innerHTML = '<th><input id="an" class="an" maxlength="1" autocomplete="off" type="tel"></th>';
            document.getElementById('an').onkeyup = () => { anser(document.getElementById('an').value) };
            var an = document.getElementById('an');
            an.focus();
            date = Date.now();
          }, 1200);
      }, 1200);
  }

  function create() {
    var number = document.getElementById('number').value;
    var c1 = Math.floor(Math.random() * 9) + 1;
    var c2 = Math.floor(Math.random() * 9) + 1;
    switch (Math.floor(Math.random() * 3)) {
      case 0:
      case 1:
        var anser = c1 + c2;
        var symbol = '+';
        break;
      case 2:
        var anser = c1 - c2;
        var symbol = '-';
        break;
    }
    if (anser < 0 || anser > 9 || before === anser) {
      create();
    } else {
      ans.push([c1 + symbol + c2, anser]);
      before = anser;
      if (ans.length < number) {
        create();
      }
    }
  }

  function anser(value) {
    q9.push(value);
    if (Number(value) != ans[0][1]) {
      pe += 5;
    }
    if (ans.length === 3) {
      result();
    } else {
      document.getElementById('siki').innerText = ans[3][0];
      document.getElementById('an').value = '';
      ans.shift();
    }
  }

  function result() {
    var time = Math.round((Date.now() - date) / 1000);
    var table = document.getElementsByTagName('table');
    table[0].remove();
    var h1 = document.createElement('h1');
    h1.innerHTML = `${document.getElementById('number').value}問中 間違いは${pe / 5}問<br>`;
    h1.innerHTML += `<span class="time">${time + pe}秒</span><br>`;
    h1.innerHTML += `<button onclick="window.location.reload()">もう一度</button>`;
    document.getElementById('area').appendChild(h1);
    Q = Q.split(',');
    var table = document.createElement('table');
    table.innerHTML = '<tr><th class="aq">答え合わせ</th></tr>';
    area.appendChild(table);
    var table = document.createElement('table');
    for (var i = 0; i < Q.length / 2; i++) {
      var tr = document.createElement('tr');
      var th1 = document.createElement('th');
      th1.innerText = Q[i * 2];
      th1.className = "q";
      var th2 = document.createElement('th');
      th2.innerText = q9[i];
      th2.className = eval(Q[i * 2]) === Number(q9[i]) ? "ok" : "bad";
      tr.appendChild(th1);
      tr.appendChild(th2);
      table.appendChild(tr);
    }
    area.appendChild(table);
  }
})();
