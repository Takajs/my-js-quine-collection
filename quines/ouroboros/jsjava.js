(function ouroboros() {
    let q = 34;
    let f = 10;
    let r = '';
    let l = [
      "    ",
      "            ",
      "=============<<<<<<<< JavaScript Code >>>>>>>>=============",
      "(function ouroboros() {",
      "  let q = 34;",
      "  let f = 10;",
      "  let r = '';",
      "  let l = [",
      "  ];",
      "  r = l.slice(15, 19).join(String.fromCharCode(f)) + String.fromCharCode(f);",
      "  r += l.map(val => l[1] + String.fromCharCode(q) + val + String.fromCharCode(q) + ',' + String.fromCharCode(f)).join('');",
      "  r += l.slice(19, 31).join(String.fromCharCode(f));",
      "  console.log(r);",
      "})();",
      "================<<<<<<<< Java Code >>>>>>>>================",
      "public class Ouroboros {",
      "    public static void main (String[] args) {",
      "        char q = 34;",
      "        String[] l = {",
      "        };",
      "        for (int i = 3; i < 8; i++) {",
      "            System.out.println(l[i]);",
      "        }",
      "        for (int i = 0; i < l.length; i++) {",
      "            System.out.println(l[0] + q + l[i] + q + ',');",
      "        }",
      "        for (int i = 8; i < 14; i++) {",
      "            System.out.println(l[i]);",
      "        }",
      "    }",
      "}",
    ];
    r = l.slice(15, 19).join(String.fromCharCode(f)) + String.fromCharCode(f);
    r += l.map(val => l[1] + String.fromCharCode(q) + val + String.fromCharCode(q) + ',' + String.fromCharCode(f)).join('');
    r += l.slice(19, 31).join(String.fromCharCode(f));
    console.log(r);
  })();