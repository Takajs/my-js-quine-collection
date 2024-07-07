# How to run a (JS) Quine
_This method does not work with Quines that use eval(), look at the end of the page for that._

1. Open Chrome and press `F12`.
2. Select `Console`.
3. Paste your Quine's code and press Enter.

## How to run an HTML Quine

1. Open Chrome.
2. Drop the `.html` file of your Quine into the browser.

### Alternative to run a (JS) eval-quine:

1. Move to the folder it is located using `cd`.
2. Delete any already existing `output.txt` file.
3. Use ` node .\programName.js >> output.txt 2>&1` to run the desired quine, changing `programName` for the actual quine's name.
4. Now you have the output of the program in `output.txt`. If you compare the content generated with the sourcecode of the quine you run... They are the same!