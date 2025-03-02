window.onload = function() {
    let who = ['El perro', 'Mi abuela', 'El vecino', 'Mi pajaro'];
    let action = ['come', 'duerme', 'grita', 'canta'];
    let what = ['en mi casa', 'cuando', 'mientras','durante'];
    let when = ['cuando esta solo', 'mi perro come', 'yo me ducho', 'la siesta'];

    let rdm1 = Math.floor(Math.random() * who.length);
    let rdm2 = Math.floor(Math.random() * action.length);
    let rdm3 = Math.floor(Math.random() * what.length);
    let rdm4 = Math.floor(Math.random() * when.length);
  
    document.querySelector("#excuse").innerHTML = who[rdm1] + " " + action[rdm2] + " " + what[rdm3] + " " + when[rdm4];
    }  