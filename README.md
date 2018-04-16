# Triten Spell Card Generator

This is a spell card generator for the tabletop RPG [Triten](https://www.fenrispublishing.com/triten.php).
This tool is currently in ALPHA and still being developed.

[Live Demo](https://alwaysmorehats.github.io/triten-spell-cards/)

I purposefully do not include any spell card information out of respect for the development team and
their design efforts. This tool expects you to have the PDF to create your own spell cards. If you
are interested in trying it, I have included some sample spells at the bottom of this document for
you to see how it works.

## Current Features

* Printable Spell Cards
* Able to Parse spell info from copy/pasting from the PDF
* Can Print a sheet of spell cards (may need to adjust margins on print options to get 3x3 cards)
* Data is translated to JSON to move between devices or people
  * To load JSON data, paste the JSON in the left box above "Parse JSON" and click that button
  * To send JSON data, copy the JSON from the right box above "Save JSON."
* Can save data in your browser's local storage
  * Click the "Save JSON" button to save your current data in local storage
  * This way you don't have to keep a copy of the JSON around.

## How to Run Locally

You need to have [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git),
[Node](https://nodejs.org/en/download/current/), and [NPM](https://www.npmjs.com/get-npm)
(which usually comes installed with Node) installed, and this repo downloaded. Once you have
downloaded, open a command line, and `cd` to the project folder. Then run the following:

```
npm install
npm start
```

This should start up the server. Then, go to http://localhost:3000 and the app should be running

### Hey I tried that and I got some node error

If you're on Windows and just installed Node and/or NPM, and got an error like
`'Node' is not recognized...` Please see their troubleshooting steps to fix it.

If you had Node/NPM installed, there may be a version difference affecting it. My versions were:

```
Node: v9.4.0
NPM:  v5.6.0
```

To find your version, run `node -v` and `npm -v`

## Future Features

* Manual card data entry (in case you don't have the PDF)
* Deleting cards
* Editing cards ???
  * You can kind of do this already. If you enter a spell with the same name and school, it updates
    the information of the matching spell.
* Card border toggle from rounded corners to straight corners