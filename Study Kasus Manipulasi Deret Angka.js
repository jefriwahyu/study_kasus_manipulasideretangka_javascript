function deretangka(n){
  var hasilDeretAngka = '';
  for(var i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      hasilDeretAngka += 'NIO ';
    } else if (i % 5 === 0) {
      hasilDeretAngka += 'MIC ';
    } else {
      hasilDeretAngka += i+' ';
    }
  }
  return hasilDeretAngka;
}

console.log(deretangka(10));
console.log(deretangka(20));
console.log(deretangka(30));
