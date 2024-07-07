const charCode = 34;
const code = [
    "const charCode = 34;",
    "const code = [",
    "",
    "];",
    "for (let i = 0; i < 2; i++) console.log(code[i])",
    "for (let i = 0; i < code.length; i++) console.log(code[2] + '' + String.fromCharCode(charCode) + code[i] + String.fromCharCode(charCode) + ',');",
    "for (let i = 3; i < code.length; i++) console.log(code[i])"
];
for (let i = 0; i < 2; i++) console.log(code[i]);
for (let i = 0; i < code.length; i++) console.log(code[2] + '' + String.fromCharCode(charCode) + code[i] + String.fromCharCode(charCode) + ',');
for (let i = 3; i < code.length; i++) console.log(code[i])