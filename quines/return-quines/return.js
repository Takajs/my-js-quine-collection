//Different sintaxis for the "same" quine (to be used in browser console, since it uses the return statement, not a console.log):

$=_=>`$=${$};$()`;$()
($=()=>`($=${$})()`)()
(func=()=>`(func=${func})()`)()

//They can be used to transmit copies of arbitrary information:
(func=()=>`(func=${func})("A")`)("A")
(func=()=>`(func=${func})("B")`)("B")
 