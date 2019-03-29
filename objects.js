<<<<<<< HEAD
/* anonymes Objekt */
let person = {
    name: "Müller",
    vorname: "Kevin",
    alter: 29,
    getName: function () {
        let vollName = this.name + " " + this.vorname;
        return vollName;
    }
}
output1.innerHTML = person.getName();

/* Konstruktor zum Erstellen von Objekten */
function Adresse(straße, hausnummer, plz, ort) {
    this.Straße = straße;
    this.Hausnummer = hausnummer;
    this.PLZ = plz;
    this.Ort = ort;
}
let kevinsAdresse = new Adresse("Hauptstraße", 40, 84489, "Burghausen");

/* dynamisches Hinzufügen von Eigenschaften */
person.Adresse = kevinsAdresse;
output2.innerHTML = "Kevin wohnt in " + person.Adresse.Straße + ", Hausnummer " + person.Adresse.Hausnummer;

/* alles Eigenschaften vom Objekt ausgeben */
for (let i in person) {
    output3.innerHTML += "Objekt person." + i + " = " + person[i] + "<br>";
}

/* auf bestimmte Eigenschaften vom Objekt zugreifen */
with(person) {
    output4.innerHTML = vorname + " ist " + alter + " alt";
}

/* Operator instanceof */
if (kevinsAdresse instanceof Adresse) {
    output5.innerHTML = "Die Adresse von Kevin ist richtig";
} else {
    output5.innerHTML = "Kevin ist umgezogen";
}

/* Prüfen, ob ein Objekt bestimmte Eigenschaften hat */
if(kevinsAdresse.PLZ) {
    output6.innerHTML = "PLZ angegeben";
}

/* nicht alle Eigenschaften dem Konstruktor übergeben */
let treffAdresse = new Adresse("Nebenstraße");
for (let i in treffAdresse) {
    output7.innerHTML += "Objekt treffAdresse." + i + " = " + treffAdresse[i] + "<br>";
=======
/* anonymes Objekt */
let person = {
    name: "Müller",
    vorname: "Kevin",
    alter: 29,
    getName: function () {
        let vollName = this.name + " " + this.vorname;
        return vollName;
    }
}
output1.innerHTML = person.getName();

/* Konstruktor zum Erstellen von Objekten */
function Adresse(straße, hausnummer, plz, ort) {
    this.Straße = straße;
    this.Hausnummer = hausnummer;
    this.PLZ = plz;
    this.Ort = ort;
}
let kevinsAdresse = new Adresse("Hauptstraße", 40, 84489, "Burghausen");

/* dynamisches Hinzufügen von Eigenschaften */
person.Adresse = kevinsAdresse;
output2.innerHTML = "Kevin wohnt in " + person.Adresse.Straße + ", Hausnummer " + person.Adresse.Hausnummer;

/* alles Eigenschaften vom Objekt ausgeben */
for (let i in person) {
    output3.innerHTML += "Objekt person." + i + " = " + person[i] + "<br>";
}

/* auf bestimmte Eigenschaften vom Objekt zugreifen */
with(person) {
    output4.innerHTML = vorname + " ist " + alter + " alt";
}

/* Operator instanceof */
if (kevinsAdresse instanceof Adresse) {
    output5.innerHTML = "Die Adresse von Kevin ist richtig";
} else {
    output5.innerHTML = "Kevin ist umgezogen";
}

/* Prüfen, ob ein Objekt bestimmte Eigenschaften hat */
if(kevinsAdresse.PLZ) {
    output6.innerHTML = "PLZ angegeben";
}

/* nicht alle Eigenschaften dem Konstruktor übergeben */
let treffAdresse = new Adresse("Nebenstraße");
for (let i in treffAdresse) {
    output7.innerHTML += "Objekt treffAdresse." + i + " = " + treffAdresse[i] + "<br>";
>>>>>>> f07222947c44ff5e63d5784e2015a0f0fe88598b
}      