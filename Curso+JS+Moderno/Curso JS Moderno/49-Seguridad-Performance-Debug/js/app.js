// ofuscar código
// https://obfuscator.io/

//desofuscar código
// https://beautifier.io/

const _0x4c10eb = _0x1a86;
(function (_0x35c7d4, _0xb58a7c) {
  const _0xe4096b = _0x1a86,
    _0x198c32 = _0x35c7d4();
  while (!![]) {
    try {
      const _0x5b5190 =
        -parseInt(_0xe4096b(0x182)) / 0x1 +
        (-parseInt(_0xe4096b(0x17d)) / 0x2) *
          (parseInt(_0xe4096b(0x196)) / 0x3) +
        -parseInt(_0xe4096b(0x18e)) / 0x4 +
        (parseInt(_0xe4096b(0x189)) / 0x5) *
          (parseInt(_0xe4096b(0x191)) / 0x6) +
        (-parseInt(_0xe4096b(0x173)) / 0x7) *
          (parseInt(_0xe4096b(0x195)) / 0x8) +
        (-parseInt(_0xe4096b(0x17b)) / 0x9) *
          (-parseInt(_0xe4096b(0x172)) / 0xa) +
        parseInt(_0xe4096b(0x190)) / 0xb;
      if (_0x5b5190 === _0xb58a7c) break;
      else _0x198c32["push"](_0x198c32["shift"]());
    } catch (_0x1d9c24) {
      _0x198c32["push"](_0x198c32["shift"]());
    }
  }
})(_0x47c1, 0x5c456);
const criptomonedasSelect = document[_0x4c10eb(0x16b)]("#criptomonedas"),
  monedaSelect = document[_0x4c10eb(0x16b)](_0x4c10eb(0x19a)),
  formulario = document[_0x4c10eb(0x16b)]("#formulario"),
  resultado = document[_0x4c10eb(0x16b)](_0x4c10eb(0x164)),
  objBusqueda = { moneda: "", criptomoneda: "" },
  obtenerCriptomonedas = (_0x20b22d) =>
    new Promise((_0x2674ac) => {
      _0x2674ac(_0x20b22d);
    });
document[_0x4c10eb(0x18b)](_0x4c10eb(0x185), () => {
  const _0x1e4681 = _0x4c10eb;
  consultarCriptomonedas(),
    formulario[_0x1e4681(0x18b)](_0x1e4681(0x199), submitFormulario),
    criptomonedasSelect["addEventListener"](_0x1e4681(0x175), leerValor),
    monedaSelect[_0x1e4681(0x18b)]("change", leerValor);
});
function consultarCriptomonedas() {
  const _0x12ef82 = _0x4c10eb,
    _0x12a194 = _0x12ef82(0x16d);
  fetch(_0x12a194)
    [_0x12ef82(0x183)]((_0xf34ae0) => _0xf34ae0[_0x12ef82(0x177)]())
    [_0x12ef82(0x183)]((_0x82a944) =>
      obtenerCriptomonedas(_0x82a944[_0x12ef82(0x17c)])
    )
    [_0x12ef82(0x183)]((_0x413288) => selectCriptomonedas(_0x413288))
    [_0x12ef82(0x17f)]((_0x18e326) => console[_0x12ef82(0x167)](_0x18e326));
}
function selectCriptomonedas(_0x564933) {
  const _0xf30ebc = _0x4c10eb,
    _0x42f212 = performance[_0xf30ebc(0x198)]();
  for (
    let _0x3a2b8a = 0x0;
    _0x3a2b8a < _0x564933[_0xf30ebc(0x166)];
    _0x3a2b8a++
  ) {
    const { FullName: _0x48a47c, Name: _0x186148 } =
        _0x564933[_0x3a2b8a][_0xf30ebc(0x181)],
      _0x19e06b = document[_0xf30ebc(0x184)](_0xf30ebc(0x19b));
    (_0x19e06b[_0xf30ebc(0x174)] = _0x186148),
      (_0x19e06b[_0xf30ebc(0x16e)] = _0x48a47c),
      criptomonedasSelect[_0xf30ebc(0x17e)](_0x19e06b);
  }
  const _0x58434a = performance["now"]();
  console[_0xf30ebc(0x167)](_0x58434a - _0x42f212);
}
function leerValor(_0x1fade6) {
  const _0x3b732a = _0x4c10eb;
  objBusqueda[_0x1fade6[_0x3b732a(0x188)][_0x3b732a(0x18a)]] =
    _0x1fade6[_0x3b732a(0x188)]["value"];
}
function submitFormulario(_0xe7626e) {
  const _0x1ce6ad = _0x4c10eb;
  _0xe7626e[_0x1ce6ad(0x197)]();
  const { moneda: _0x27f43f, criptomoneda: _0x280e81 } = objBusqueda;
  if (_0x27f43f === "" || _0x280e81 === "") {
    mostrarAlerta(_0x1ce6ad(0x168));
    return;
  }
  consultarAPI();
}
function mostrarAlerta(_0x50be4a) {
  const _0x1e2900 = _0x4c10eb,
    _0x1dfe58 = document["createElement"]("div");
  _0x1dfe58[_0x1e2900(0x194)]["add"](_0x1e2900(0x170)),
    (_0x1dfe58["textContent"] = _0x50be4a),
    formulario["appendChild"](_0x1dfe58),
    setTimeout(() => {
      const _0x339554 = _0x1e2900;
      _0x1dfe58[_0x339554(0x163)]();
    }, 0xbb8);
}
function _0x1a86(_0x715c7b, _0x2f0e65) {
  const _0x47c103 = _0x47c1();
  return (
    (_0x1a86 = function (_0x1a8609, _0x50187d) {
      _0x1a8609 = _0x1a8609 - 0x163;
      let _0x32ecb3 = _0x47c103[_0x1a8609];
      return _0x32ecb3;
    }),
    _0x1a86(_0x715c7b, _0x2f0e65)
  );
}
function consultarAPI() {
  const _0x589521 = _0x4c10eb,
    { moneda: _0x1ac9d3, criptomoneda: _0x356275 } = objBusqueda,
    _0x2d36f2 = _0x589521(0x186) + _0x356275 + _0x589521(0x18d) + _0x1ac9d3;
  mostrarSpinner();
  const _0x3a82b4 = performance["now"]();
  fetch(_0x2d36f2)
    ["then"]((_0x414a2f) => _0x414a2f[_0x589521(0x177)]())
    [_0x589521(0x183)]((_0xad44d2) => {
      const _0x19e680 = _0x589521;
      mostrarCotizacionHTML(_0xad44d2[_0x19e680(0x17a)][_0x356275][_0x1ac9d3]);
    });
  const _0x114b35 = performance[_0x589521(0x198)]();
  console[_0x589521(0x167)](_0x114b35 - _0x3a82b4);
}
function _0x47c1() {
  const _0x583299 = [
    "9HgpNPi",
    "Data",
    "10594sMMVfS",
    "appendChild",
    "catch",
    "</span>\x20</p>",
    "CoinInfo",
    "150675HDXBpn",
    "then",
    "createElement",
    "DOMContentLoaded",
    "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=",
    "El\x20Precio\x20es:\x20<span>\x20",
    "target",
    "190JFLJMi",
    "name",
    "addEventListener",
    "firstChild",
    "&tsyms=",
    "1100192WjDMQL",
    "spinner",
    "14322143RGJyyl",
    "31260BaWBmR",
    "removeChild",
    "</span></p>",
    "classList",
    "1082648norzsi",
    "165iiUwcY",
    "preventDefault",
    "now",
    "submit",
    "#moneda",
    "option",
    "remove",
    "#resultado",
    "<p>Precio\x20más\x20alto\x20del\x20día:\x20<span>",
    "length",
    "log",
    "Ambos\x20campos\x20son\x20obligatorios",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22bounce1\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22bounce2\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22bounce3\x22></div>\x20\x20\x20\x20\x0a\x20\x20\x20\x20",
    "\x20</span>",
    "querySelector",
    "<p>Última\x20Actualización:\x20<span>",
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD",
    "textContent",
    "add",
    "error",
    "%</span></p>",
    "1363310OCGENd",
    "28uJEBgq",
    "value",
    "change",
    "innerHTML",
    "json",
    "<p>Precio\x20más\x20bajo\x20del\x20día:\x20<span>",
    "<p>Variación\x20últimas\x2024\x20horas:\x20<span>",
    "DISPLAY",
  ];
  _0x47c1 = function () {
    return _0x583299;
  };
  return _0x47c1();
}
function mostrarCotizacionHTML(_0x1f190c) {
  const _0x41f359 = _0x4c10eb;
  limpiarHTML(), console["log"](_0x1f190c);
  const {
    PRICE: _0x45e11a,
    HIGHDAY: _0xba8df9,
    LOWDAY: _0x1708d7,
    CHANGEPCT24HOUR: _0x46fe84,
    LASTUPDATE: _0x17cc5d,
  } = _0x1f190c;
  debugger;
  const _0x6d8876 = document[_0x41f359(0x184)]("p");
  _0x6d8876["classList"]["add"]("precio"),
    (_0x6d8876[_0x41f359(0x176)] =
      _0x41f359(0x187) + _0x45e11a + _0x41f359(0x16a));
  const _0x42045c = document["createElement"]("p");
  _0x42045c["innerHTML"] = _0x41f359(0x165) + _0xba8df9 + _0x41f359(0x180);
  const _0x3be475 = document["createElement"]("p");
  _0x3be475[_0x41f359(0x176)] = _0x41f359(0x178) + _0x1708d7 + _0x41f359(0x180);
  const _0x5aff16 = document[_0x41f359(0x184)]("p");
  _0x5aff16[_0x41f359(0x176)] = _0x41f359(0x179) + _0x46fe84 + _0x41f359(0x171);
  const _0x26a021 = document[_0x41f359(0x184)]("p");
  _0x26a021[_0x41f359(0x176)] = _0x41f359(0x16c) + _0x17cc5d + _0x41f359(0x193);
  debugger;
  resultado[_0x41f359(0x17e)](_0x6d8876),
    resultado["appendChild"](_0x42045c),
    resultado[_0x41f359(0x17e)](_0x3be475),
    resultado[_0x41f359(0x17e)](_0x5aff16),
    resultado["appendChild"](_0x26a021),
    formulario[_0x41f359(0x17e)](resultado);
}
function mostrarSpinner() {
  const _0x1e6c7f = _0x4c10eb;
  limpiarHTML();
  const _0xef6f22 = document[_0x1e6c7f(0x184)]("div");
  _0xef6f22[_0x1e6c7f(0x194)][_0x1e6c7f(0x16f)](_0x1e6c7f(0x18f)),
    (_0xef6f22["innerHTML"] = _0x1e6c7f(0x169)),
    resultado[_0x1e6c7f(0x17e)](_0xef6f22);
}
function limpiarHTML() {
  const _0xedb3d9 = _0x4c10eb;
  while (resultado[_0xedb3d9(0x18c)]) {
    resultado[_0xedb3d9(0x192)](resultado["firstChild"]);
  }
}

// Otras medidas de seguridad

// -- Generales --

// -- No almacenar contraseñas en localStorage

// -- El DOM scripting ya escapa los datos y evita riesgos de seguridad, utilizar textContent la mayoría de las veces

// -- utilizar innerHTML solo cuando la fuente de los datos es segura

// -- Formularios --

// -- Validar  en el cliente ( javascript )  para retroalimentación en tiempo real, pero también en el servidor

// -- Si se deseas crear apps con autenticación de usuarios se puede utilizar JWT y AuthO

// -- Otras consideraciones --

// -- Cuando se trabaje con dependencias, utilizar una herramienta para verificar vulnerabilidades como snyk.io

// -- ofuscar el código si se considera necesario

// -- hashea información sensible con bcrypt
