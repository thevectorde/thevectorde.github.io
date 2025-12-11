---
title: "Passwortmanager-Test: BSI und Verbraucherschützer sehen Mängel"
date: 2025-12-10T21:06:00+01:00
slug: /bsi-passwortmanager-mit-maengel/
description: Eine gemeinsame Untersuchung von BSI und Verbraucherzentrale NRW bescheinigt Passwortmanagern grundsätzlich einen hohen Nutzen, deckt aber Mängel bei Verschlüsselung und Datenschutz auf. Open-Source-Lösungen punkten bei der Datensparsamkeit.
image: images/passwortmanager.jpg
caption: Symbolbild Passwortmanager - Photo by Zulfugar Karimov

categories:
  - News
  - IT-Security
tags:
  - feature
  - IT-Security

draft: false
author: Arne
---

Passwortmanager sind für die IT-Sicherheit unverzichtbar, doch nicht alle Produkte schützen die digitalen Schlüssel gleichermaßen gut. Zu diesem Ergebnis kommt eine aktuelle Untersuchung des Bundesamts für Sicherheit in der Informationstechnik (BSI) in Kooperation mit der Verbraucherzentrale NRW (VZ NRW), die zehn populäre Anwendungen unter die Lupe genommen hat.

### Sicherheitslücken beim Hersteller-Zugriff

Während das BSI die Nutzung von Passwortmanagern generell empfiehlt, identifizierten die Prüfer bei einzelnen Produkten konkreten Nachbesserungsbedarf. Kritisch bewertet wurde, dass bei drei der zehn untersuchten Kandidaten die Passwörter so gespeichert wurden, dass der Hersteller theoretisch Zugriff auf die Daten erlangen könnte. Ein weiteres Manko: Nur zwei der zehn Produkte führen nach einer Änderung des Masterpassworts eine vollständige Neuverschlüsselung aller abhängigen Schlüssel durch, um potenzielle Angriffsvektoren zuverlässig auszuschließen.

Das BSI fordert von den Anbietern, den Zugriff auf Nutzerdaten technisch vollständig auszuschließen und auf etablierte Krypto-Standards zu setzen. Positiv vermerkte die Behörde, dass viele Hersteller im Dialog bereits Nachbesserungen angekündigt haben.

### Datenschutz: Open Source im Vorteil

Die parallel durchgeführte Datenschutzprüfung der VZ NRW zeigte deutliche Unterschiede im Umgang mit Nutzerdaten. Besonders gut schnitten hier die Open-Source-Lösungen KeePassXC und KeePass2Android ab. Da diese ihre Tresore primär lokal verwalten, gelten sie als besonders datenschutzfreundlich und erheben keine unnötigen personenbezogenen Daten.

Kommerzielle Anbieter fielen hingegen teilweise durch das Sammeln von Nutzungsdaten oder die Einbindung von Drittanbietern auf. So nutzen Dienste wie 1Password oder Avira laut ihren Hinweisen Daten auch für Marketingzwecke oder Analysen. Zudem kritisierten die Verbraucherschützer den Einsatz von "Dark Patterns": Bei mSecure und Avira wurden manipulative Designs im Registrierungsprozess gefunden, etwa um Zustimmungen zu Werbemaßnahmen oder biometrischen Funktionen zu erschleichen.

### Fazit: Nutzung bleibt empfehlenswert

Trotz der Kritik betont das BSI: Das Risiko, Opfer von Identitätsdiebstahl durch schwache oder wiederverwendete Passwörter zu werden, wiegt schwerer als die gefundenen Implementierungsmängel. Verbraucher sollten jedoch auf "Zero-Knowledge"-Architekturen achten und Updates zeitnah einspielen.

---
Die offizielle Pressemeldung des BSI ist unter folgendem Link zu finden: [BSI](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2025/251209_Verbesserungsbedarf_Passwortmanager.html)