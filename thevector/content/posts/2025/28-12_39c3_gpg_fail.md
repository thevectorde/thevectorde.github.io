---
title: "39C3: Schwere Parsing-Fehler erschüttern GnuPG und Co."
date: '2025-12-27T23:26:12+01:00'
description: Auf dem 39. Chaos Communication Congress haben die Sicherheitsforscher Lexi und Liam eine erschreckende Bilanz ihrer Untersuchungen von PGP-Implementierungen gezogen. Unter dem Titel „To sign or not to sign“ präsentierten sie insgesamt 14 Schwachstellen, die zeigen, dass nicht die Kryptografie das Problem ist, sondern der morsche Unterbau der Implementierungen.
image: images/posts/39C3_venue.jpeg
caption: 39C3 - Foto von Arne Bauer

categories:
  - News
  - Security
tags:
  - feature
  - 39C3
  - Chaos Computer Club
  - GnuPG
draft: false
author: Arne
---
Die Kryptografie von Tools wie GnuPG gilt gemeinhin als sicher. Doch was hilft ein unknackbares Schloss, wenn die Türangeln aus Sperrholz bestehen? Dieser Metapher bedienten sich Lexi und Liam bei ihrem Vortrag auf dem 39C3. Ihr Blick hinter die Kulissen der gängigen Implementierungen förderte fundamentale Fehler im Parsing-Prozess zutage, die es Angreifern ermöglichen, Signaturen zu fälschen, das Vertrauensmodell auszuhebeln oder sogar Schadcode auszuführen.

### Wenn „Good Signature“ zur Illusion wird

Einer der Schwerpunkte des Vortrags lag auf der Manipulation von Klartext-Signaturen. Die Forscher demonstrierten, wie sich durch Header-Injektionen beliebiger Text in signierte Dokumente einschleusen lässt. Da bestimmte Header-Zeilen wie der `NotDashEscaped`-Header nicht Teil der mathematischen Signatur sind, validiert GPG das Dokument weiterhin als echt, während der Nutzer manipulierte Inhalte liest.

Noch subtiler sind Angriffe, die auf der unterschiedlichen Interpretation von Steuerzeichen basieren. Durch den Einsatz von Null-Bytes (\0) oder vertikalen Tabulatoren im C-String-Parsing von GnuPG kann ein Angreifer erreichen, dass die Software eine gültige Signatur für einen Text anzeigt, der visuell völlig anders aussieht als das, was der Parser tatsächlich verarbeitet hat.

### Der Super-GAU: Falsches Vertrauen durch Cache-Manipulation

Besonders kritisch ist eine Lücke im Vertrauensmodell. Über sogenannte Trust Packets und das darin enthaltene Signature Cache-Bit lässt sich GnuPG dazu verleiten, die mathematische Korrektheit einer Signatur gar nicht erst zu prüfen. Wenn dieses Bit gesetzt ist, vertraut GPG einfach der Information, die Signatur sei bereits verifiziert. Die Forscher untermauerten dies mit einem Proof-of-Concept, bei dem sie eine valide Signatur des mysteriösen Bitcoin-Erfinders Satoshi Nakamoto vorgaukelten.

### Auch Alternativen wie age und minisign betroffen

GnuPG steht mit seinen Problemen nicht allein da. Auch die Werkzeuge Age und Minisign wurden von den Forschern zerlegt.
In dem als GPG-Alternative gefeierten Tool Age fanden die Forscher eine Path-Traversal-Lücke im Plugin-System. Über manipulierte Empfängernamen konnte die Ausführung beliebiger Binärdateien erzwungen werden. Die Lücke wurde inzwischen behoben. 
In Minisign führten Fehler bei der Handhabung von C-Strings dazu, dass eigentlich vertrauenswürdige Kommentare durch Carriage-Return-Injektionen manipuliert werden konnten.

Innerhalb von GnuPG selbst stießen die Forscher zudem auf klassische Speicherfehler. Ein Double-Increment-Bug beim Parsen von ASCII-Armor-Daten führt zu einem Integer-Overflow, der theoretisch zur Ausführung von Code ausgenutzt werden kann. Zudem ermöglicht eine uninitialisierte Variable ein ungewolltes Downgrade auf den veralteten SHA-1-Algorithmus.

### Fazit: „Schauen Sie genau hin“

Die Forscher raten Nutzern zur Vorsicht. Ein bloßes Vertrauen auf die Statusmeldung „Good Signature“ reicht oft nicht aus, da diese nicht garantiert, dass der angezeigte Text auch der signierte Text ist. Ein praktischer Workaround sei die Nutzung von `--decrypt` anstelle von `--verify`, um zu sehen, was die Engine tatsächlich als verifizierten Output ausgibt.

Zudem sollte die Option `--import-options restore` niemals bei Dateien aus unsicheren Quellen verwendet werden, um die Einschleusung manipulierter Trust-Pakete zu verhindern. Viele der vorgestellten Lücken waren zum Zeitpunkt des Talks noch ungepatcht, weshalb dringende Aufmerksamkeit für kommende GnuPG-Updates geboten ist.

---
Den Vortrag findet ihr [hier](https://media.ccc.de/v/39c3-to-sign-or-not-to-sign-practical-vulnerabilities-i).    
Eine Website mit weiteren Informationen der Sicherehitsforscher findet ihr [hier](https://gpg.fail/).