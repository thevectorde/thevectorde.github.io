---
title: "WhisperPair: Kritische Lücke in Google Fast Pair ermöglicht Hijacking von Bluetooth-Kopfhörer"
date: '2026-01-23T16:05:12+01:00'
description: WhisperPair ist ein Angriff auf die Google-Fast-Pair-Funktion von Bluetooth-Geräten. Forscher der KU Leuven zeigen, wie Angreifer Kopfhörer oder Lautsprecher in Sekunden übernehmen und orten können, ganz ohne Nutzerinteraktion.
image: images/posts/whisperpair.jpg
caption: Photo by Daniel Romero on Unsplash
categories:
  - IT-Security
tags:
  - feature
  - Google
  - Cyberangriff
  - Bluetooth
draft: false
author: Pius
---
WhisperPair ist ein praktischer Angriff, der eine schwere Schwachstelle in der Google Fast Pair-Implementierung von Bluetooth-Accessoires ausnutzt. Forscher der KU Leuven haben gezeigt, wie Angreifer drahtlose Kopfhörer oder Lautsprecher in Sekunden übernehmen und sogar orten können und das ganz ohne User-Interaktion.
​

### Der Angriff im Detail
Angreifer senden eine Fast Pair-Nachricht an das Accessoire, das nicht im Pairing-Modus sein muss, da viele Geräte diesen Check ignorieren. Nach der Antwort folgt ein normales Bluetooth-Pairing, das dem Angreifer volle Kontrolle gibt. Das Ergebniss: Volle Kontrolle über Mikrofon, Lautstärke und Audio nach nur 10 Sekunden.

Noch perfider: Bei nie mit Android gepairten Geräten kann der Angreifer seinen Account Key als Owner Key speichern und dann mit dem Google Find Hub Network das Gerät tracken. 

## Betroffene Geräte und Hersteller

68% der 25 getesteten Flagship-Modelle sind vulnerabel, trotz Google-Zertifizierung:

| Hersteller | Beispiele |
|------------|-----------|
| Sony | WH-1000XM6, WF-1000XM5 |
| Jabra | Elite 8 Active, Elite 10 |
| Anker Soundcore | Liberty 4 |
| Google | Pixel Buds Pro 2 |
| OnePlus | Buds Pro 3 |

Eine vollständige Liste der bekannten Geräte finden sie [whisperpair.eu](https://whisperpair.eu).

### Systemisches Versagen bei Google und Herstellern
Die Studie zeigt, dass mehrere Geräte, Hersteller und Chipsets betroffen sind. Diese Geräte haben sowohl die Qualitätssicherungstests der Hersteller als auch den Google-Zertifizierungsprozess bestanden, was ein ein systemisches Versagen belegt statt eines einzelnen Entwicklerfehlers.

Denn obwohl Geräte vor Aktivierung der Fast Pair-Funktion einen Zertifizierungsprozess durchlaufen müssen, gelangten unsichere Implementierungen massenhaft auf den Markt. Dies offenbart eine Kette von Compliance-Fehlern bei Google Fast Pair: Die Schwachstelle wurde auf allen drei Ebenen übersehen, bei Implementierung, Validierung und Zertifizierung.

Auch iPhone-Nutzer sind von der Schwachstelle betroffen, da die Fast-Pair-Funktion direkt in der Hardware implementiert ist.

### Schutz und Mitigation
Nur durch ein Firmware-Update des Herstellers kann die Schwachstelle behoben werden, da Fast Pair vom Nutzer nicht deaktiviert werden kann. Daher sollten die Geräte überprüft und verfügbare Updates installiert werden, da das Risiko bis zur Aktualisierung bestehen bleibt.