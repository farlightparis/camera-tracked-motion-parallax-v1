// Speisekarte, abgetippt von der gedruckten Karte und am 2026-10-23 Zeile für Zeile
// gegen die Fotos geprüft. Reihenfolge, Nummern, Namen, Preise und Kürzel wie gedruckt.
//
// Ein Gericht: [Nr, Name, Allergene/Zusatzstoffe, Preis (Zahl oder [Preis1, Preis2]), Beschreibung, vegetarisch]
// Was der Gast beim Bestellen wählen kann (Soße, Beilage …), steht unten in `auswahlFuer`.

const e = ([nr, name, codes, preis, text = '', veg = false]) => ({
  nr,
  name,
  codes: codes ? codes.split(',') : [],
  preise: Array.isArray(preis) ? preis : [preis],
  text,
  veg,
})

const KEBAB = 'Kebabfleisch vom Drehspieß'
const GYROS = 'Gyrosfleisch vom Drehspieß'
const SALAT_BELAG = 'Eisberg, Gurken, Tomaten, Mais, Peperoni, Paprika, Weichkäse, Zwiebeln'

const NOTIZ_SOSSEN = 'Soßen: Tzatziki · Kräutersoße · Cocktailsoße · Knoblauchsoße'
const NOTIZ_TOPPINGS = 'Extra-Toppings für Döner je 1,00 €: Jalapeños · Feta · Mais · Rucola · Oliven · Granatapfel · Mozzarella'
const NOTIZ_BEILAGE = 'Zu jedem Fleischgericht wird eine Beilage serviert: Pommes · Kroketten · Bulgursalat'

// kurz = Vorsatz im Bestelltext, damit „Kebab“ eindeutig bleibt (z. B. „Calzone Kebab“)
export const kategorien = [
  {
    id: 'vorspeisen',
    titel: 'Vorspeisen',
    notiz: ['Zu allen Vorspeisen servieren wir Brot.'],
    gerichte: [
      [1, 'Tzatziki', 'A,C', 5.5, '', true],
      [2, 'Saganaki', 'A,C', 9.5, '', true],
      [3, 'Mozzarella Sticks', 'C,G,I,N', 7, '', true],
      [4, 'Peperoni', 'A,C', 4, '', true],
      [5, 'Pizzabrötchen', 'A,C,G', 7.5, 'Mit Tomatensoße und Käse belegt, pro Extra-Belag 1,50 €', true],
    ],
  },
  {
    id: 'salate',
    titel: 'Salate',
    notiz: ['Zu allen Salaten servieren wir Brot und Dressing nach Wahl.', 'Dressing: Kräutersoße · Cocktailsoße · Knoblauchsoße'],
    gerichte: [
      [6, 'Kebab-Salat', 'A,C,D,H,4,7,11', 10.5, `${KEBAB}, ${SALAT_BELAG}`],
      [7, 'Gyros-Salat', 'A,C,D,H,4', 11, `Gyros vom Drehspieß, ${SALAT_BELAG}`],
      [8, 'Hähnchen-Salat', 'C,G,I', 11, `Hähnchenbrustfilet, ${SALAT_BELAG}`],
      [9, 'Bauernsalat', 'G,I,O', 10, 'Eisberg, Tomaten, Gurken, Mais, Petersilie, verfeinert mit unserem hausgemachten Dressing', true],
      [10, 'Thunfisch-Salat', 'A,C,D,2,3,4,7,8', 11, `Thunfisch, ${SALAT_BELAG}`],
      [11, 'Mozzarella-Salat', 'A,C,D,G', 11.5, `Mozzarella, ${SALAT_BELAG}`, true],
    ],
  },
  {
    id: 'pizza',
    titel: 'Pizza',
    kurz: 'Pizza',
    notiz: ['Mit Tomatensoße und Käse belegt. Klein Ø 26 cm / Groß Ø 32 cm', 'Extra-Belag: klein 1,00 € · groß 2,00 €'],
    groessen: ['klein Ø 26 cm', 'groß Ø 32 cm'],
    gerichte: [
      [12, 'Margherita', 'A,C', [8, 9], '', true],
      [13, 'Kebab', 'A,C,H,4,7,11', [10, 12], `${KEBAB}, Zwiebeln`],
      [14, 'Gyros', 'A,C,4', [10, 12], `${GYROS}, Zwiebeln`],
      [15, 'Hähnchen', 'A,C', [10, 12], 'Hähnchenbrustfilet'],
      [16, 'Salami', 'A,C,1,2,3', [9, 11], 'Salami'],
      [17, 'Schinken', 'A,C,2,3,4,7,8', [9, 11], 'Schinken'],
      [18, 'Hawaii', 'A,C,2,4,7,8', [9.5, 11.5], 'Schinken, Ananas'],
      [19, 'Sucuk', 'A,C', [9.5, 12.5], 'Sucuk, Weichkäse'],
      [20, 'Tonno', 'A,C,F', [9.5, 11.5], 'Thunfisch, Zwiebeln'],
      [21, 'Vegetarisch', 'A,C', [9.5, 11.5], 'Paprika, Peperoni, Zwiebeln, Oliven, Mais, Weichkäse', true],
      [22, 'Lava', 'A,C,F,G,1,2,3,4,7,8,11', [10, 13], 'Schinken, Salami, Zwiebeln, Kebab- und Gyrosfleisch vom Drehspieß'],
      [23, 'Jalapeño', 'A,C,1,2,3', [9, 11], 'Jalapeños', true],
      [24, 'Spezial', 'A,C', [9.5, 11], 'frische Tomaten, Eisbergsalat', true],
    ],
  },
  {
    id: 'calzone',
    titel: 'Calzone',
    kurz: 'Calzone',
    notiz: ['Mit Tomatensoße und Käse belegt.'],
    gerichte: [
      [25, 'Kebab', 'A,C,H,4,7,11', 11.5, `${KEBAB}, Zwiebeln`],
      [26, 'Gyros', 'A,C,4', 11.5, `${GYROS}, Zwiebeln`],
      [27, 'Spezial', 'A,C,2,3,4,7,8,11', 11.5, 'Salami, Schinken, Peperoni, Weichkäse'],
      [28, 'Lava', 'A,C,D,H,4,7,11', 11.5, 'Kebab- oder Gyrosfleisch vom Drehspieß, Hollandaise'],
    ],
  },
  {
    id: 'rollo',
    titel: 'Rollo',
    kurz: 'Rollo',
    notiz: ['Mit Tomatensoße und Käse belegt.'],
    gerichte: [
      [29, 'Kebab', 'A,C,H,4,7,11', 12, `${KEBAB}, Zwiebeln`],
      [30, 'Gyros', 'A,C,H,4', 12, `${GYROS}, Zwiebeln`],
      [31, 'Spezial', 'A,C,1,2,3,4,7,8', 12, 'Salami, Schinken, Peperoni, Weichkäse'],
      [32, 'Vegetarisch', 'A,C', 12, 'Paprika, Peperoni, Zwiebeln, Mais, Weichkäse, Oliven', true],
    ],
  },
  {
    id: 'baguette',
    titel: 'Baguette',
    kurz: 'Baguette',
    notiz: ['Mit Käse, Salat und Kräutersoße belegt.'],
    gerichte: [
      [33, 'Kebab', 'A,C,D,H,4,7,11', 9, KEBAB],
      [34, 'Gyros', 'A,C,H,4', 10, GYROS],
      [35, 'Spezial', 'A,C,D,H,1,2,3,4,7,8,11', 10, 'Salami, Schinken, Zwiebeln, Weichkäse'],
      [36, 'Tonno', 'A,C,D,F,H', 9, 'Thunfisch, Zwiebeln'],
      [37, 'Vegetarisch', 'A,C', 8, 'Tomaten, Gurken, Weichkäse', true],
      [38, 'Lava', 'A,C,D,G,H', 9.5, 'Sucuk, Weichkäse, Peperoni, Zwiebeln'],
    ],
  },
  {
    id: 'ueberbacken',
    titel: 'Überbacken',
    kurz: 'Überbacken',
    notiz: ['Mit Käse überbacken.'],
    gerichte: [
      [39, 'Kebab', 'A,C,G,11', 12, `${KEBAB}, Sahnesoße`],
      [40, 'Gyros', 'A,C,G,H,11', 12, `${GYROS}, Sahnesoße`],
      [41, 'Hähnchen', 'A,C,H', 14, 'Hähnchenbrustfilet, Hollandaise'],
    ],
  },
  {
    id: 'schnitzel',
    titel: 'Schnitzel',
    notiz: ['Mit Salat und Beilage nach Wahl. Beilagen: Pommes · Kroketten · Bulgursalat', 'Soßen: Jägersoße · Hollandaise · Rahmsoße'],
    gerichte: [
      [42, 'Hähnchenschnitzel', 'A,C,D,H', 12, 'paniert'],
      [43, 'Schweineschnitzel', 'A,C,D,H', 11, 'paniert'],
      [44, 'Hähnchenschnitzel', 'A,C,D,H,9,10,11,14', 14, 'mit Soße nach Wahl'],
      [45, 'Schweineschnitzel', 'A,C,D,H,9,10,11,14', 13, 'mit Soße nach Wahl'],
    ],
  },
  {
    id: 'nudeln',
    titel: 'Nudeln',
    kurz: 'Nudeln',
    notiz: ['Auf Wunsch mit Penne oder Spaghetti.'],
    gerichte: [
      [46, 'Bolognese', 'A,C,D,H', 12],
      [47, 'Napoli', 'A,C', 12, 'Tomatensoße', true],
      [48, 'Lava', 'A,C,2,3,7,8', 13.5, 'Schinken, Sahnesoße'],
      [49, 'Spezial', 'A,C,H,10,14', 13.5, 'Hähnchenbrustfilet, Brokkoli, Sahnesoße'],
      [50, 'Kebab', 'A,C,H,4,7,11', 14, `${KEBAB}, Sahnesoße`],
    ],
  },
  {
    id: 'vegetarisch',
    titel: 'Vegetarische Gerichte',
    notiz: [NOTIZ_SOSSEN, NOTIZ_TOPPINGS],
    gerichte: [
      [51, 'Gemüse Pita', 'A,C,H,4,7,11', 8.5, 'Gemüse, Eisberg, Tomaten, Gurken, Zwiebeln, Soße nach Wahl', true],
      [52, 'Pita Vegetarisch', 'A,C', 7.5, 'Eisberg, Tomaten, Gurken, Zwiebeln, Mais, Peperoni, Weichkäse, Soße nach Wahl', true],
      [53, 'Dürüm Vegetarisch', 'A,C', 7.5, 'Eisberg, Tomaten, Gurken, Zwiebeln, Mais, Peperoni, Weichkäse, Soße nach Wahl', true],
      [54, 'Lahmacun Vegetarisch', 'A,G', 7, 'Salat, Weichkäse, Tzatziki', true],
    ],
  },
  {
    id: 'fleisch',
    titel: 'Fleischgerichte',
    notiz: [NOTIZ_SOSSEN, NOTIZ_TOPPINGS, NOTIZ_BEILAGE],
    gerichte: [
      [55, 'Lava Teller', 'C,H,4,7,11', 15, 'Lassen Sie sich überraschen'],
      [56, 'Ali Spezial', 'A,G', 11.5, `${KEBAB}, frische Tomaten, gebraten – scharf`],
      [57, 'Kebab Teller', 'C,H,4,7,11', 13, `${KEBAB}, Pommes, Salat, Tzatziki`],
      [58, 'Gyros Teller', 'C,4', 13, `${GYROS}, Pommes, Salat, Tzatziki`],
      [59, 'Kebab Box', 'A,C,H,4,7,11', 7, `${KEBAB}, Pommes, Soße nach Wahl`],
      [60, 'Gyros Box', 'A,C,H,4,7,11', 8, `${GYROS}, Pommes, Soße nach Wahl`],
      [61, 'Kebab Pita', 'A,C,H,4,7,11', 7.5, `${KEBAB}, Krautsalat, Tomaten, Gurken, Zwiebeln, Eisberg, Soße nach Wahl`],
      [62, 'Gyros Pita', 'A,C,H,4', 8.5, `${GYROS}, Krautsalat, Tomaten, Gurken, Zwiebeln, Eisberg, Soße nach Wahl`],
      [63, 'Sucuk Pita', 'A,C', 8, 'Sucuk, Krautsalat, Tomaten, Gurken, Zwiebeln, Eisberg, Soße nach Wahl'],
      [64, 'Dürüm Kebab', 'A,C,H,4,7,11', 8, `${KEBAB}, gemischter Salat, Soße nach Wahl`],
      [65, 'Dürüm Gyros', 'A,C,H,4', 9, `${GYROS}, gemischter Salat, Soße nach Wahl`],
      [66, 'Lahmacun Fleisch', 'A,C,H,4,7,11', 8, 'Kebab- oder Gyrosfleisch vom Drehspieß, Salat, Tzatziki'],
    ],
  },
  {
    id: 'grill',
    titel: 'Grill',
    notiz: [NOTIZ_SOSSEN, NOTIZ_BEILAGE],
    gerichte: [
      [67, 'Spezial Teller', 'A,C,F,I', 19.5, '1 Adana Kebab, 1 Lammkotelett, 1 Nackensteak, 1 Hähnchenbrustfilet, Gyros'],
      [68, 'Lammkotelett', '7,8,11', 17.5, '6 Lammkoteletts'],
      [69, 'Nackensteak', 'I', 15, '2 Nackensteaks'],
      [70, 'Hähnchenbrustfilet', 'I', 16.5, '3 gegrillte Hähnchenbrustfilets, gebratene Champignons und Zwiebeln'],
      [71, 'Adana Kebab', 'A,C,I', 19.5, '2 Adana Kebab, frische Tomaten, türkische Peperoni'],
      [72, 'Hähnchenspieß', 'I', 16.5, '2 Hähnchenspieße mit Gemüse'],
      [73, 'Schaschlik', 'I', 17.5, '2 Schaschlikspieße mit Gemüse'],
      [74, 'Lava Teller für 2 Personen', 'A,C,F,G,I', 36.5, '2 Lammkoteletts, 2 Nackensteaks, 2 Schnitzel, 2 Hähnchenbrustfilets, Kebab- oder Gyrosfleisch vom Drehspieß'],
    ],
  },
  {
    id: 'kids',
    titel: 'Für unsere Kids',
    gerichte: [
      [75, 'Pasta Bambini', 'A', 7, 'Pasta mit Tomatensoße', true],
      [76, 'Dino Teller', 'A,C,G', 7.5, 'Nuggets, Pommes'],
      [77, 'Mini Grill Teller', 'G,I', 7.5, 'Hähnchenbrustfilet, Pommes'],
      [78, 'Lava Monster', 'A,F,G,I', 8, 'Kebab- und Gyrosfleisch vom Drehspieß, Pommes'],
      [79, 'Piratenteller', 'A', 8.5, 'Lassen Sie sich überraschen'],
      [80, 'King Dumbo', 'A,I', 7.5, 'Currywurst mit Pommes & Curryketchup'],
    ],
  },
  {
    id: 'sossen',
    titel: 'Soßen',
    // Die gedruckte Karte nennt zwei Preise ohne Bezeichnung. TODO: mit dem Laden klären.
    groessen: ['klein', 'groß'],
    gerichte: [
      [81, 'Kräutersoße', 'C,G', [2, 3], '', true],
      [82, 'Tzatziki', 'G', [2, 3], '', true],
      [83, 'Hollandaise', 'C,G', [2, 3], '', true],
      [84, 'Cocktailsoße', 'C,G', [2, 3], '', true],
      [85, 'Knoblauchsoße', 'C,G', [2, 3], '', true],
      [86, 'Scharfe Soße', 'I', [2, 3], '', true],
      [87, 'Mayo', 'C', 1.5, '', true],
      [88, 'Ketchup', 'C', 1.5, '', true],
    ],
  },
  {
    id: 'beilagen',
    titel: 'Beilagen',
    gerichte: [
      [89, 'Pommes', '', 3.5, '', true],
      [90, 'Kroketten', 'A,C,G', 3, '', true],
      [91, 'Chicken Tenders', 'A,C', 7.5],
      [92, 'Bulgursalat, selbstgemacht', 'A', 6, '', true],
    ],
  },
  {
    // Steht auf keinem Foto der gedruckten Karte. Sobald die Liste vorliegt, hier eintragen —
    // eine leere Kategorie wird auf der Seite nicht angezeigt.
    id: 'getraenke',
    titel: 'Getränke',
    gerichte: [],
  },
].map((k) => ({ ...k, gerichte: k.gerichte.map(e) }))

/* ---------- Auswahl beim Bestellen ---------- */

const SOSSE = { id: 'sosse', titel: 'Soße', wahl: ['Tzatziki', 'Kräutersoße', 'Cocktailsoße', 'Knoblauchsoße'] }
const SOSSE_OPTIONAL = { ...SOSSE, optional: 'ohne Soße' }
const TOPPINGS = { id: 'toppings', titel: 'Extra-Toppings', mehrfach: true, aufpreis: 1, wahl: ['Jalapeños', 'Feta', 'Mais', 'Rucola', 'Oliven', 'Granatapfel', 'Mozzarella'] }
const BEILAGE = { id: 'beilage', titel: 'Beilage', wahl: ['Pommes', 'Kroketten', 'Bulgursalat'] }
const DRESSING = { id: 'dressing', titel: 'Dressing', wahl: ['Kräutersoße', 'Cocktailsoße', 'Knoblauchsoße'] }
const NUDEL = { id: 'nudel', titel: 'Nudeln', wahl: ['Penne', 'Spaghetti'], optional: 'egal' }
const SCHNITZEL_SOSSE = { id: 'sosse', titel: 'Soße', wahl: ['Jägersoße', 'Hollandaise', 'Rahmsoße'] }

// Was die gedruckte Karte zur Wahl stellt — so eng wie möglich an ihrem Wortlaut.
export function auswahlFuer(kat, g) {
  const nachWahl = g.text.includes('Soße nach Wahl')
  switch (kat.id) {
    case 'salate':
      return [DRESSING]
    case 'nudeln':
      return [NUDEL]
    case 'schnitzel':
      return g.nr >= 44 ? [SCHNITZEL_SOSSE, BEILAGE] : [BEILAGE]
    case 'vegetarisch':
      return nachWahl ? [SOSSE, TOPPINGS] : [TOPPINGS]
    case 'fleisch':
      if (g.nr >= 59) return nachWahl ? [SOSSE, TOPPINGS] : [TOPPINGS] // Box, Pita, Dürüm, Lahmacun
      return [SOSSE_OPTIONAL, BEILAGE] // Teller
    case 'grill':
      return [SOSSE_OPTIONAL, BEILAGE]
    default:
      return []
  }
}

/* ---------- Nachschlagen ---------- */

const index = new Map()
for (const k of kategorien) for (const g of k.gerichte) index.set(g.nr, { g, kat: k })
export const finde = (nr) => index.get(nr)

export const bestellName = (kat, g) => (kat.kurz && !g.name.startsWith(kat.kurz) ? `${kat.kurz} ${g.name}` : g.name)

export const allergene = {
  A: 'Gluten', B: 'Krebstiere', C: 'Ei', D: 'Fisch', E: 'Erdnüsse', F: 'Soja', G: 'Milch',
  H: 'Schalenfrüchte', I: 'Sellerie', M: 'Senf', N: 'Sesam', O: 'Sulfide', P: 'Lupinen', R: 'Weichtiere',
}

export const zusatzstoffe = {
  1: 'mit Farbstoff',
  2: 'mit Konservierungsstoff oder konserviert oder mit Nitritpökelsalz oder mit Nitrat oder mit Nitritpökelsalz und Nitrat',
  3: 'mit Antioxidationsmittel',
  4: 'mit Geschmacksverstärker',
  5: 'geschwefelt',
  6: 'geschwärzt',
  7: 'gewachst',
  8: 'mit Phosphat',
  9: 'mit Süßungsmittel(n)',
  10: 'Gewürze',
  11: 'Säuerungsmittel',
  12: 'Branntweinessig',
  13: 'Glukosesirup',
  14: 'mit Taurin',
}

export const codeText = (c) => allergene[c] ?? zusatzstoffe[c] ?? c

export const anzahlGerichte = kategorien.reduce((n, k) => n + k.gerichte.length, 0)
