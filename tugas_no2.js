class Kendaraan {
  constructor(totalroda, kecepatanperjam) {
    this.totalroda = totalroda;
    this.kecepatanperjam = kecepatanperjam;
  }
}

class Mobil extends Kendaraan {
  constructor(totalroda, kecepatanperjam, kecepatanbaru) {
    super(totalroda, kecepatanperjam);
    this.kecepatanbaru = kecepatanbaru;
  }

  berjalan() {
    return this.tambahkecepatan(10);
  }

  tambahkecepatan(kecepatanbaru) {
    return (this.kecepatanperjam += kecepatanbaru);
  }
}

const mobilcepat = new Mobil(4, 90);
mobilcepat.berjalan();
mobilcepat.berjalan();
mobilcepat.berjalan();

const mobillamban = new Mobil(6, 40);
mobillamban.berjalan();

console.log(mobilcepat);
console.log(mobillamban);
