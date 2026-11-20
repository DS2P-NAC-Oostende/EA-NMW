// ===== TERUGVALLIJST =====
// Normaal haalt data.js de video's uit de Google Sheet "NMW – videolijst".
// Lukt dat niet (geen internet, Sheet onbereikbaar), dan gebruikt de app deze lijst.
// Houd hem gelijk aan de Sheet, anders zie je zonder verbinding een oude lijst.

const categorieen = [
    { id: "mdr-introductie", naam: "MDR Introductie" },
    { id: "contactmijnen",   naam: "Contactmijnen", fr: "Mines de contact" },
    { id: "invloedsmijnen",  naam: "Invloedsmijnen", fr: "Mines d'influence" }
];

const videos = [
    { id: "ie9zJ9sSdFc", titel: "MDR Introfilm", categorie: "mdr-introductie" },
    { id: "sPdkjUi8aUY", titel: "Grondmijnen", fr: "Mines terrestres", categorie: "contactmijnen" },
    { id: "VXo-F4G7Ais", titel: "Drijvende mijnen", fr: "Mines flottantes", categorie: "contactmijnen" },
    { id: "TcZv4BSV5vk", titel: "Verankerde mijnen", fr: "Mines ancrées", categorie: "contactmijnen" },
    { id: "5fQvyYfCIgA", titel: "Oefenmijnen", fr: "Mines d'entraînement", categorie: "contactmijnen" },
    { id: "TR8JqrFMIp4", titel: "Mine aérienne - Différentes mines d'influence", categorie: "invloedsmijnen" }
];
