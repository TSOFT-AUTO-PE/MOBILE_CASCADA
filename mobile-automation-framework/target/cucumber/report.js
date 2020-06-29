$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("APP_MiMovistar.feature");
formatter.feature({
  "line": 1,
  "name": "APP_MiMovistar NOVUM",
  "description": "",
  "id": "app-mimovistar-novum",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "Comprar Paquete de Minutos (45 Minutos)",
  "description": "",
  "id": "app-mimovistar-novum;comprar-paquete-de-minutos-(45-minutos)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@APP_MiMovistar_TEST3"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "Se ingresa a la app Mi Movistar y se da click al boton empieza ahora",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "se selecciona el ingreso como titular",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "se ingresa el DNI \"\u003ccaso_prueba\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "se ingresa la contrasenia de 6 numeros \"\u003ccaso_prueba\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "se da click en el boton ingresar",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "se da click en el boton compra paquetes",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "se selecciona paquete de minutos",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "se agrega el paquete de 45 minutos",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "se visualiza las caracteristicas y se da click en el boton pagar",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "se visualiza la confirmacion de compra y se da click a volver a mi linea",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "se realiza el logout de la app",
  "keyword": "Then "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "app-mimovistar-novum;comprar-paquete-de-minutos-(45-minutos);",
  "rows": [
    {
      "cells": [
        "caso_prueba"
      ],
      "line": 57,
      "id": "app-mimovistar-novum;comprar-paquete-de-minutos-(45-minutos);;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 58,
      "id": "app-mimovistar-novum;comprar-paquete-de-minutos-(45-minutos);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 165226200,
  "status": "passed"
});
formatter.before({
  "duration": 40447703000,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Comprar Paquete de Minutos (45 Minutos)",
  "description": "",
  "id": "app-mimovistar-novum;comprar-paquete-de-minutos-(45-minutos);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@APP_MiMovistar_TEST3"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "Se ingresa a la app Mi Movistar y se da click al boton empieza ahora",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "se selecciona el ingreso como titular",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "se ingresa el DNI \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "se ingresa la contrasenia de 6 numeros \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "se da click en el boton ingresar",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "se da click en el boton compra paquetes",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "se selecciona paquete de minutos",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "se agrega el paquete de 45 minutos",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "se visualiza las caracteristicas y se da click en el boton pagar",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "se visualiza la confirmacion de compra y se da click a volver a mi linea",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "se realiza el logout de la app",
  "keyword": "Then "
});
formatter.match({
  "location": "steps_appMiMovistar.seIngresaALaAppMiMovistarYSeDaClickAlBotonEmpiezaAhora()"
});
formatter.result({
  "duration": 4445862000,
  "status": "passed"
});
formatter.match({
  "location": "steps_appMiMovistar.seSeleccionaElIngresoComoTitular()"
});
formatter.result({
  "duration": 4821079900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "steps_appMiMovistar.seIngresaElDNI(String)"
});
formatter.result({
  "duration": 3750707100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 29
    },
    {
      "val": "1",
      "offset": 40
    }
  ],
  "location": "steps_appMiMovistar.seIngresaLaContraseniaDeNumeros(int,String)"
});
formatter.result({
  "duration": 1678787700,
  "status": "passed"
});
formatter.match({
  "location": "steps_appMiMovistar.seDaClickEnElBotonIngresar()"
});
formatter.result({
  "duration": 1917578600,
  "status": "passed"
});
formatter.match({
  "location": "steps_appMiMovistar.seDaClickEnElBotonCompraPaquetes()"
});
formatter.result({
  "duration": 27452737800,
  "status": "passed"
});
formatter.match({
  "location": "steps_appMiMovistar.seSeleccionaPaqueteDeMinutos()"
});
formatter.result({
  "duration": 8806867200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 24
    }
  ],
  "location": "steps_appMiMovistar.seAgregaElPaqueteDeMinutos(int)"
});
formatter.result({
  "duration": 2344419500,
  "status": "passed"
});
formatter.match({
  "location": "steps_appMiMovistar.seVisualizaLasCaracteristicasYSeDaClickEnElBotonPagar()"
});
formatter.result({
  "duration": 2087274200,
  "status": "passed"
});
formatter.match({
  "location": "steps_appMiMovistar.seVisualizaLaConfirmacionDeCompraYSeDaClickAVolverAMiLinea()"
});
formatter.result({
  "duration": 6035126000,
  "status": "passed"
});
formatter.match({
  "location": "steps_appMiMovistar.seRealizaElLogoutDeLaApp()"
});
formatter.result({
  "duration": 5803212700,
  "status": "passed"
});
formatter.after({
  "duration": 2939122200,
  "status": "passed"
});
});