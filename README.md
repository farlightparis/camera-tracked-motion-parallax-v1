# 📡 Camera-Tracked Motion Parallax V1 (`lava-ar-v6`)

**Interaktives 3D-Hologramm-System mit Mehrwinkel-Kamera-Sensorik & 61-Frame Perspektiv-Synthese**  
*Konzept & Systemarchitektur für Lava Grill (Essen)*

---

## 💡 Die Kern-Erfindung (Wie das System funktioniert)

Klassische Hologramm-Aufsteller (**Holo-Boxen / Transparente OLED-Vitrinen** oder **3D-LED-Rotoren**) haben eine physikalische Einschränkung: Das Gerät selbst ist starr montiert und zeigt ohne Sensorik nur ein flaches Bild oder ein fest ablaufendes Loop-Video.

**Camera-Tracked Motion Parallax V1** löst dieses Problem durch eine Echtzeit-Kameraschleife:

1. **Mehrwinkel-Kamera-Sensor am Gerät:** Eine Weitwinkel-Kamera (`-45°` links bis `+45°` rechts) erfasst Passanten, die vor oder neben dem Hologramm-Gerät stehen oder vorbeigehen.
2. **Echtzeit-Signal an den Hologramm-Projektor (60 FPS):** Sobald sich der Betrachter bewegt, berechnet der Sensor den exakten Blickwinkel $\theta \in [-45^\circ, +45^\circ]$ und sendet ein Synchronisations-Signal an die Hologramm-Einheit.
3. **61-Frame Perspektiv-Wechsel ("Foto-Matrix"):** Das Hologramm-Gerät schaltet verzögerungsfrei auf das exakt passende Perspektiv-Foto (`Frame #01` bis `Frame #61`) um und verschiebt gleichzeitig **5 Tiefenschichten** gegeneinander (*Anamorphic Motion Parallax*):
   - **Schicht 1 (Tiefen-Hintergrund `-Z`):** Verschiebt sich *entgegen* der Laufrichtung des Passanten (Fenster-Tiefeneffekt).
   - **Schicht 2 (3D-Laser-Drehteller):** Kippt perspektivisch zum Blickwinkel.
   - **Schicht 3 (Konvexes 3D-Relief-Gericht mit HDR-Farbverstärkung):** Ultra-kräftige Farben (`saturate(1.48) contrast(1.22)`) auf schwarzem Grund (reines Schwarz = 100 % transparent im Hologramm) inkl. wanderndem Glanzlicht (*Specular Light Sheen*).
   - **Schicht 4 (Volumetrische Lavaglut-Funken):** Schwebende Partikel im Raum.
   - **Schicht 5 (Vordergrund-Preis-Hologramm `+Z`):** Verschiebt sich in *positiver Parallaxe* vor das Gerät – dadurch entsteht für das menschliche Auge die zwingende optische Illusion, dass das Gericht frei vor einem in der Luft schwebt.
4. **Bewegungs-Impuls / Handgesten-Trigger:** Eine schnelle Bewegung vor der Kamera löst automatisch ein Signal zum Wechsel auf das nächste Gericht-Fotoset aus.

---

## 🚀 Live-Links

- **Live auf DuoQ:** [https://duoq.pages.dev/p/lava-ar-v6/](https://duoq.pages.dev/p/lava-ar-v6/)
- **Standalone GitHub Repository:** [https://github.com/farlightparis/camera-tracked-motion-parallax-v1](https://github.com/farlightparis/camera-tracked-motion-parallax-v1)

---

## 🛠️ Funktionen im Überblick

- **2 wählbare Hardware-Gehäuse:**
  - `💎 Holo-Box`: Transparente OLED-Glasvitrine mit Laser-Bodenprojektor und grüner Kamera-Sensoreinheit.
  - `🌀 LED-Rotor`: Rotierendes 4-Blatt-LED-Hologramm (*Hypervsn-Stil*) mit 2.400 RPM Lichtspur.
- **3 Steuerungs-Modi:**
  - `📹 Live-Kamera-Tracking`: Nutzt die echte Front-/Webcam via WebRTC, erkennt Kopf-/Körperbewegungen vor dem Bildschirm und steuert damit live den 3D-Winkel (`Frame #01` – `#61`).
  - `🚶 Passanten-Lauf`: Automatische Simulation eines Passanten, der von `-40°` links nach `+40°` rechts am Schaufenster vorbeigeht.
  - `🎚️ Manueller Winkel-Regler & Touch-Drag`: Stufenloses Testen jedes einzelnen Foto-Frames zwischen `-45°` und `+45°`.
- **6 Ultra-Vivid Hologramm-Gerichte + Komplette Speisekarte (92 Gerichte):**
  - Direktzugriff auf 6 Signature-Hologramme (*Spezial-Grillteller*, *Drehspieß Teller*, *Pizza Lava Ø 32 cm*, *Calzone Lava XXL*, *Dürüm & Lahmacun*, *Frischer Bauernsalat*) sowie die integrierte Speisekarte mit allen 92 Gerichten.
