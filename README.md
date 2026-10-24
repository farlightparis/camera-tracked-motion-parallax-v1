# 📡 Camera-Tracked Motion Parallax V1 & ✋ "TocuH" 2.0 V1

**Zwei kameragesteuerte Schaufenster-Systeme für Lava Grill (Essen):**
1. **📡 Camera-Tracked Motion Parallax V1 (`index.html`)** – 3D-Hologramm-Gerät mit Mehrwinkel-Kamera-Sensorik & 61-Frame Perspektiv-Synthese
2. **✋ "TocuH" 2.0 V1 (`tocuh.html` / `/tocuh-2-v1/`)** – Berührungsloses Fast-Food-Touchscreen-Terminal hinter einer Glasscheibe (Monitor + Kamera-Steuerung)

---

## 🚀 Live-Links (DuoQ & GitHub Pages)

| Modul | Live auf DuoQ | Live auf GitHub Pages |
| :--- | :--- | :--- |
| **✋ "TocuH" 2.0 V1 (Monitor hinter Glas)** | [https://duoq.pages.dev/p/tocuh-2-v1/](https://duoq.pages.dev/p/tocuh-2-v1/) | [https://farlightparis.github.io/camera-tracked-motion-parallax-v1/tocuh.html](https://farlightparis.github.io/camera-tracked-motion-parallax-v1/tocuh.html) |
| **📡 Motion Parallax V1 (3D-Hologramm)** | [https://duoq.pages.dev/p/lava-ar-v6/](https://duoq.pages.dev/p/lava-ar-v6/) | [https://farlightparis.github.io/camera-tracked-motion-parallax-v1/](https://farlightparis.github.io/camera-tracked-motion-parallax-v1/) |
| **📦 GitHub Repository** | [https://github.com/farlightparis/camera-tracked-motion-parallax-v1](https://github.com/farlightparis/camera-tracked-motion-parallax-v1) | — |

---

## ✋ Modul 2: "TocuH" 2.0 V1 – Schaufenster-Kiosk hinter einer Glasscheibe

### 💡 Das Praxis-Konzept (Sofort mit Monitor + Kamera umsetzbar)
Ein normaler Monitor steht geschützt **hinter der Glasscheibe** des Restaurants. Eine **Kamera** (vor dem Monitor oder weiter hinten im Raum platziert) hat den Betrachter im Blick. Auf dem Monitor läuft ein modernes **Fast-Food-Bestellterminal** (wie man es von großen Fast-Food-Ketten kennt) – nur dass jeder Passant von außen **berührungslos durch die Glasscheibe hindurch** darin herumblättern und Gerichte auswählen kann:

- **✋ Air-Cursor mit 0,85s Hover-Klick (Dwell-Trigger):** Halte deine Hand kurz auf eine Kategorie, ein Gericht oder die Blätter-Balken – der goldene Ring füllt sich und löst den Klick aus.
- **👋 Air-Swipe Wisch-Geste (Links / Rechts):** Ein kurzes Winken vor der Kamera oder das Halten der Hand in die großen seitlichen **`◀ ZURÜCK BLÄTTERN` / `WEITER BLÄTTERN ▶`** Zonen blättert sofort zur nächsten Seite.
- **👌 Pinch-to-Click (MediaPipe Hands 21-Punkt-Tracking):** Daumen und Zeigefinger zusammenführen löst sofort einen Klick aus.
- **⚙️ Freie Kamera-Aufstellung (`⚙️ Kamera-Setup`):**
  - Auswahl zwischen mehreren angeschlossenen Kameras (Webcam / USB-Kamera).
  - **Spiegelung AN / AUS** umschaltbar (je nachdem, ob die Kamera am Monitor nach vorne schaut oder hinter dir steht).
  - **⛶ Vollbild-Button** für den Zweitmonitor hinter der Scheibe.
- **🧾 Schaufenster-Merkzettel:** Passanten können sich ihre Lieblingsgerichte vormerken und sehen unten sofort ihre **Bestellnummern (z. B. Nr. 67, Nr. 22)** für die Bestellung am Tresen.

---

## 📡 Modul 1: Camera-Tracked Motion Parallax V1 – 3D-Hologramm-Gerät

1. **Mehrwinkel-Kamera-Sensor am Gerät (`-45°` bis `+45°`):** Erfasst Passanten vor oder neben dem Hologramm-Gerät und sendet ein 60-FPS-Signal an den Projektor.
2. **61-Frame Perspektiv-Wechsel ("Foto-Matrix"):** Schaltet verzögerungsfrei zwischen `Frame #01` und `Frame #61` um und verschiebt **5 Tiefenschichten** mit ultra-kräftigen HDR-Farben (`saturate(1.48) contrast(1.22)`).
3. **2 wählbare Hardware-Gehäuse:** `💎 Holo-Box` (Transparente OLED-Vitrine) und `🌀 LED-Rotor` (2.400 RPM 3D-Propeller).
