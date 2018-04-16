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

## Sample spells

```
SAMPLE SPELL I
Level: 4
MP Cost: 6
Range: 50 feet
Duration: Instant
Target: 1 target
Defense: Psychology
Effect: Lorem ipsum dolor sit amet, ex laoreet delicatissimi
his. Duo in dicunt vivendum contentiones. Dictas honestatis
est no, ad vim ferri nonumy possim. Eum legere ignota
moderatius ei, vel id vide vitae. Duo errem tamquam in,
zril facilisis at mel.

SAMPLE SPELL II
Level: 7
MP Cost: 14
Range: N/A
Duration: Sustained
Target: Self
Defense: N/A
Effect: Debet deseruisse sed an, mel ei probo laudem. Eu
clita minimum postulant duo, sea nostrud omnesque
constituto te, te natum democritum qui. Fierent electram
abhorreant est no, minim veniam rationibus ius eu, eu
viris tractatos pri. Duo altera partiendo delicatissimi
ne. Mutat prompta ius no, eos dicant prodesset
mnesarchum ad.
Special: This text will intentionally not
be displayed.

SAMPLE SPELL III
Level: 5
MP Cost: 7
Range: 50 feet
Duration: Instant
Target: 1 target
Defense: Block, Dodge
Effect: Ne tale omittam lobortis nec. Malis novum vivendum
eum id, sea ea audire oporteat. Cu elitr mandamus evertitur
vis, vis soluta democritum efficiantur ea. At maiorum
pericula cum. Oportere constituto ne sea.

SAMPLE SPELL IV
Level: 7
MP Cost: 12
Range: 50 feet
Duration: 3 rounds
Target: Sphere (25 feet)
Defense: N/A
Effect: Et has assueverit scriptorem. At viris molestiae
scribentur quo. Vel partem omnesque salutatus te, duo tota
percipitur consequuntur ei, et quas tantas cum. No sumo
etiam habemus nec, his stet iudico percipitur eu. Eam iusto
adversarium ei. Justo electram erroribus sed ad, cu sea
mollis legendos intellegam. Ad congue regione sit, tritani
quaeque luptatum an nec.
```
