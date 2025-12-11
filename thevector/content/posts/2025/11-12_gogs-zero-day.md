---
title: "Kritische Zero-Day-Schwachstelle in Gogs wird aktiv ausgenutzt"
date: '2025-12-11T23:26:57+01:00'

description: "Zero-Day-Schwachstelle in Git-Projekt Gogs entdeckt: Über 700 kompromittierte Instanzen im Netz sind betroffen. Ein Patch steht weiterhin aus."
image: images/posts/hacker_alarm.jpg
caption: Photo by Michael Geiger

categories:
  - News
  - IT-Security
tags:
  - IT-Security
  - Zero-Day
  - Git
  - Open Source

draft: false
author: Arne
---

Sicherheitsforscher von Wiz Research haben bei der Untersuchung einer Malware-Infektion eine aktive Zero-Day-Schwachstelle in Gogs entdeckt, einem beliebten selbstgehosteten Git-Service. Die als [CVE-2025-8110](https://www.cve.org/CVERecord?id=CVE-2025-8110) erfasste Schwachstelle ermöglicht authentifizierten Nutzern die Ausführung beliebigen Codes (Remote Code Execution, RCE) durch einen Symlink-Bypass einer bereits gepatchten Sicherheitslücke.

### Technische Details des Angriffs

CVE-2025-8110 umgeht die Absicherung einer früheren RCE-Schwachstelle (CVE-2024-55947), die ursprünglich von ManassehZhou entdeckt wurde. Die vorherige Lücke nutzte eine Path-Traversal-Schwäche in der PutContents-API aus, die es Angreifern ermöglichte, Dateien außerhalb des Repository-Verzeichnisses zu überschreiben. Die Maintainer hatten daraufhin Eingabevalidierungen für Pfadparameter implementiert. Symbolische Links wurden allerdings nicht berücksichtigt.

Der neue Bypass nutzt zwei Eigenschaften von Gogs: Erstens erlaubt Git und damit auch Gogs die Verwendung symbolischer Links in Repositories, die auf Objekte außerhalb des Repositorys verweisen können. Zweitens ermöglicht die Gogs-API Dateimodifikationen außerhalb des regulären Git-Protokolls, ohne das Ziel eines Symlinks zu validieren.

Die Angriffskette ist trivial für jeden Nutzer mit Repository-Erstellungsrechten. Dies ist standardmäßig aktiviert. Der Angreifer erstellt ein Standard-Git-Repository, commitet einen einzelnen symbolischen Link zu einem sensiblen Ziel, nutzt die PutContents-API zum Schreiben von Daten und überschreibt dabei `.git/config`, um beliebige Befehle auszuführen.

### Aktive Ausnutzung im großen Stil

Wiz Research identifizierte über 1.400 öffentlich exponierte Gogs-Server im Internet, von denen mehr als 700 Instanzen Kompromittierungsmerkmale aufweisen. Alle infizierten Instanzen zeigen dasselbe Muster. Repositories mit zufälligen 8-Zeichen-Namen, die innerhalb desselben kurzen Zeitfensters, um den 10. Juli 2025 herum, erstellt wurden.

Die Untersuchung der Malware offenbarte mehrere Obfuskationsschichten: UPX-Packing, in Go geschriebenen und mit dem garble-Tool kompilierten Code sowie die Verwendung des Supershell-Frameworks, einer Open-Source-Command-and-Control-Plattform, die eine Reverse-SSH-Shell über Webdienste etabliert. Die Forscher konnten den C2-Server der Angreifer unter der IP-Adresse 119.45.176.196 identifizieren. Zwei weitere Payload Server finden sich unter den IPs 106.53.108.81, sowie 119.91.42.53


Die vollständigen technischen Details sowie Indicators of Compromise finden sich im [Original-Blogbeitrag von Wiz Research](https://www.wiz.io/blog/wiz-research-gogs-cve-2025-8110-rce-exploit). Weitere Diskussionen zur Schwachstelle laufen auf der [Openwall-Mailingliste](https://www.openwall.com/lists/oss-security/2025/12/11/4), wo auch bestätigt wurde, dass die Forks Gitea und Forgejo vom Problem nicht betroffen sind. Bei beiden Forks wurde der relevante Code bereits 2019 umgeschrieben.
