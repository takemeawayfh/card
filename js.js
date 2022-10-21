function multi() {
    let inp1 = document.getElementById('inp_1').value;

    let res = inp1.split('').reverse().join('');
    let at = inp1.split('').join('');
    res = res.toLowerCase();
    at = at.toLowerCase();
    if (at == res) {
        alert(true);
    } else alert(false);
    console.log(at)
}