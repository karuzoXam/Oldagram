# Oldagram

Dieses JavaScript-Projekt ist ein einfacher Instagram Post Renderer. Es nimmt eine Liste von Post-Objekten und rendert sie auf einer Webseite. Jeder Post kann ein Bild, einen Benutzernamen, einen Standort, ein Profilbild, einen Kommentar und eine Anzahl von Likes enthalten.

## Funktionen

- **Erstellen von Posts**: Die Funktion `createPost` nimmt mehrere Parameter (wie Name, Standort, Profilbild, Postbild, ID, Kommentar, Likes und Benutzername) und gibt eine HTML-Zeichenkette zurück, die den Post darstellt.

- **Rendern von Posts**: Die Funktion `renderPost` nimmt die von `createPost` zurückgegebene HTML-Zeichenkette und fügt sie in das DOM ein.

- **Likes erhöhen**: Die Funktion `increaseLikes` erhöht die Anzahl der Likes für einen bestimmten Post.

- **Post-Bild liken**: Die Funktion `likePostImage` fügt einen Event Listener hinzu, der auf Doppelklicks auf das Post-Bild reagiert und die Funktion `increaseLikes` aufruft.

- **Like-Button für Posts**: Die Funktion `likePostButton` fügt einen Event Listener hinzu, der auf Klicks auf den Like-Button reagiert und die Funktion `increaseLikes` aufruft.

- **Benutzerdaten abrufen**: Die Funktion `getUserData` durchläuft das Array von Post-Objekten, erstellt für jedes Objekt einen Post und rendert ihn.

## Verwendung

Zum Ausführen des Codes einfach die Funktion `getUserData(posts)` aufrufen. Dabei ist `posts` das Array von Post-Objekten. Danach die Funktionen `likePostImage()` und `likePostButton()` aufrufen, um die Event Listener für das Liken von Posts hinzuzufügen.

## Beispiel

Ein Beispiel für ein Post-Objekt könnte folgendermaßen aussehen:

```javascript
{
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
    id: 1
}
