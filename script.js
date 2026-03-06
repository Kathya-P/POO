const quizData = [
  {
    type: "mc",
    topic: "introduccion",
    question: "Un paradigma de programacion es:",
    options: [
      "Una forma o modelo de pensar como se disenan los programas",
      "Un conjunto de reglas sintacticas de un lenguaje",
      "Un entorno de desarrollo integrado",
      "Un patron de diseno especifico",
    ],
    answerIndex: 0,
    answerText: "Una forma o modelo de pensar como se disenan los programas.",
  },
  {
    type: "mc",
    topic: "introduccion",
    question: "La POO es un modelo de programacion que usa:",
    options: [
      "Objetos ligados mediante mensajes",
      "Funciones organizadas en modulos independientes",
      "Procedimientos que comparten variables globales",
      "Clases abstractas sin instancias",
    ],
    answerIndex: 0,
    answerText: "Objetos ligados mediante mensajes para resolver problemas.",
  },
  {
    type: "mc",
    topic: "introduccion",
    question: "La caracteristica principal de la POO es:",
    options: [
      "Llevar elementos del mundo real a codigo",
      "Organizar el codigo en funciones reutilizables",
      "Separar la logica de la interfaz grafica",
      "Definir el flujo de ejecucion de forma secuencial",
    ],
    answerIndex: 0,
    answerText: "Llevar elementos del mundo real a codigo que los represente.",
  },
  {
    type: "mc",
    topic: "introduccion",
    question: "En el ejemplo de empleados, un atributo seria:",
    options: ["Nombre y apellido", "Calcular salario", "Generar reporte", "Asignar turno"],
    answerIndex: 0,
    answerText: "Nombre y apellido.",
  },
  {
    type: "tf",
    topic: "introduccion",
    question: "La POO utiliza objetos que se comunican mediante mensajes.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  {
    type: "short",
    topic: "introduccion",
    question: "Define paradigma de programacion en una frase.",
    answerText: "Forma o modelo de pensar como se disenan y construyen programas.",
    keywords: ["forma", "modelo", "pensar", "disenan", "construyen", "programas"],
    minMatches: 2,
  },
  {
    type: "short",
    topic: "introduccion",
    question: "Menciona dos paradigmas de programacion.",
    answerText: "Ej: estructurada, orientada a objetos, orientada a eventos.",
    keywords: ["estructurada", "orientada a objetos", "orientada a eventos"],
    minMatches: 2,
  },
  {
    type: "tf",
    topic: "introduccion",
    question: "La programacion estructurada es un paradigma mencionado.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  {
    type: "tf",
    topic: "introduccion",
    question: "La programacion orientada a eventos es un paradigma mencionado.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  {
    type: "tf",
    topic: "introduccion",
    question: "La POO busca representar elementos del mundo real en codigo.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  {
    type: "mc",
    topic: "introduccion",
    question: "El origen de la POO se relaciona con:",
    options: [
      "Dificultad para modificar software cuando cambiaban requisitos",
      "Falta de memoria en los equipos de la epoca",
      "Ausencia de compiladores eficientes",
      "Incompatibilidad entre sistemas operativos",
    ],
    answerIndex: 0,
    answerText: "Dificultad para modificar software cuando cambiaban requisitos.",
  },
  {
    type: "mc",
    topic: "introduccion",
    question: "Otra razon del origen de la POO fue que:",
    options: [
      "La persona que modificaba no siempre era el autor original",
      "Los lenguajes no soportaban funciones con parametros",
      "No habia estandares para documentar el codigo",
      "Los programas no podian tener mas de un modulo",
    ],
    answerIndex: 0,
    answerText: "La persona que modificaba no siempre era el autor original.",
  },
  {
    type: "tf",
    topic: "introduccion",
    question: "La POO usa una metodologia que facilita modificar el software.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  {
    type: "mc",
    topic: "introduccion",
    question: "Un objeto potencial tiene:",
    options: [
      "Atributos y metodos",
      "Solo atributos sin comportamiento asociado",
      "Solo metodos estaticos sin estado",
      "Unicamente una interfaz publica",
    ],
    answerIndex: 0,
    answerText: "Atributos y metodos.",
  },
  {
    type: "tf",
    topic: "introduccion",
    question: "Las interrelaciones entre objetos se conducen por mensajes.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  {
    type: "mc",
    topic: "introduccion",
    question: "En el ejemplo del banco, IngresarDinero es un:",
    options: ["Metodo", "Atributo", "Clase", "Parametro"],
    answerIndex: 0,
    answerText: "Metodo.",
  },
  {
    type: "mc",
    topic: "introduccion",
    question: "En el ejemplo del banco, saldo es un:",
    options: ["Atributo", "Metodo", "Constructor", "Instancia"],
    answerIndex: 0,
    answerText: "Atributo.",
  },
  {
    type: "tf",
    topic: "introduccion",
    question: "Un programa en POO es un conjunto de objetos que dialogan entre si.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  {
    type: "short",
    topic: "introduccion",
    question: "Menciona dos atributos del ejemplo de empleados.",
    answerText: "Ej: nombres y apellidos, categoria de empleado.",
    keywords: ["nombres", "apellidos", "categoria"],
    minMatches: 2,
  },
  {
    type: "tf",
    topic: "introduccion",
    question: "Un objeto potencial responde a mensajes mediante metodos.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero.",
  },
  // ===== T2: Java + NetBeans (Lab) =====
  // --- NetBeans IDE ---
  {
    type: "mc",
    topic: "java",
    question: "Segun la presentacion, el IDE utilizado para trabajar con Java es:",
    options: [
      "Apache NetBeans IDE",
      "IntelliJ IDEA",
      "Visual Studio Code",
      "Eclipse IDE",
    ],
    answerIndex: 0,
    answerText: "Apache NetBeans IDE.",
  },
  {
    type: "mc",
    topic: "java",
    question: "En NetBeans, la seccion 'Proyectos/Paquetes' sirve para:",
    options: [
      "Organizar tus archivos",
      "Ver los resultados de la consola",
      "Escribir la logica del programa",
      "Configurar las dependencias del proyecto",
    ],
    answerIndex: 0,
    answerText: "Proyectos/Paquetes: aqui organizas tus archivos.",
  },
  {
    type: "mc",
    topic: "java",
    question: "En NetBeans, el 'Editor de Codigo' es donde:",
    options: [
      "Escribes la logica",
      "Organizas los paquetes y clases",
      "Ves los resultados de ejecucion",
      "Configuras las propiedades del proyecto",
    ],
    answerIndex: 0,
    answerText: "Editor de Codigo: donde escribes la logica.",
  },
  {
    type: "mc",
    topic: "java",
    question: "En NetBeans, la 'Consola (Output)' es donde:",
    options: [
      "Ves los resultados",
      "Organizas los archivos del proyecto",
      "Escribes el codigo fuente",
      "Configuras el entorno Java",
    ],
    answerIndex: 0,
    answerText: "Consola (Output): donde ves los resultados.",
  },
  // --- Anatomia de programa basico ---
  {
    type: "mc",
    topic: "java",
    question: "En la anatomia de un programa basico en Java, el punto de inicio es:",
    options: [
      "public static void main(String[] args)",
      "public class NombreClase",
      "public void iniciar()",
      "static void run()",
    ],
    answerIndex: 0,
    answerText: "El metodo main es el punto de inicio. Todo arranca ahi.",
  },
  {
    type: "mc",
    topic: "java",
    question: "El comando para imprimir texto en pantalla en Java es:",
    options: [
      "System.out.println()",
      "System.out.print()",
      "Console.writeLine()",
      "out.print()",
    ],
    answerIndex: 0,
    answerText: "System.out.println() es el comando para imprimir texto en pantalla.",
  },
  {
    type: "tf",
    topic: "java",
    question: "Las llaves { } definen el inicio y fin del bloque en Java.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Las llaves { } definen inicio y fin del bloque.",
  },
  {
    type: "short",
    topic: "java",
    question: "En el ejemplo basico, como se llama la clase? (public class ___)",
    answerText: "HolaMundo.",
    keywords: ["holamundo"],
    minMatches: 1,
  },
  // --- Variables ---
  {
    type: "mc",
    topic: "java",
    question: "En Java, el tipo de dato para numeros enteros (ej: edad = 20) es:",
    options: ["int", "double", "long", "short"],
    answerIndex: 0,
    answerText: "int: numeros enteros.",
  },
  {
    type: "mc",
    topic: "java",
    question: "En Java, el tipo de dato para numeros con decimales (ej: promedio = 8.5) es:",
    options: ["double", "float", "int", "long"],
    answerIndex: 0,
    answerText: "double: numeros con decimales.",
  },
  {
    type: "mc",
    topic: "java",
    question: "En Java, el tipo de dato para texto (ej: nombre = 'Juan') es:",
    options: ["String", "char", "Text", "varchar"],
    answerIndex: 0,
    answerText: "String: texto.",
  },
  {
    type: "mc",
    topic: "java",
    question: "En Java, el tipo de dato para verdadero/falso (ej: activo = true) es:",
    options: ["boolean", "bit", "int", "char"],
    answerIndex: 0,
    answerText: "boolean: verdadero/falso.",
  },
  {
    type: "short",
    topic: "java",
    question: "Que tipo de dato usarias para guardar la edad de una persona en Java?",
    answerText: "int (numero entero).",
    keywords: ["int"],
    minMatches: 1,
  },
  // --- Clase Scanner ---
  {
    type: "mc",
    topic: "java",
    question: "Para leer datos del usuario en Java se usa la clase:",
    options: ["Scanner", "BufferedReader", "InputReader", "Console"],
    answerIndex: 0,
    answerText: "Clase Scanner.",
  },
  {
    type: "mc",
    topic: "java",
    question: "Para usar Scanner, primero hay que importar:",
    options: [
      "java.util.Scanner",
      "java.io.Scanner",
      "java.lang.Scanner",
      "java.util.Input",
    ],
    answerIndex: 0,
    answerText: "import java.util.Scanner;",
  },
  {
    type: "mc",
    topic: "java",
    question: "Para crear un objeto Scanner que lea del teclado se escribe:",
    options: [
      "Scanner sc = new Scanner(System.in)",
      "Scanner sc = new Scanner(System.out)",
      "Scanner sc = Scanner.getInstance()",
      "Scanner sc = new Scanner(stdin)",
    ],
    answerIndex: 0,
    answerText: "Scanner sc = new Scanner(System.in);",
  },
  {
    type: "mc",
    topic: "java",
    question: "Para leer una linea completa de texto con Scanner se usa:",
    options: ["sc.nextLine()", "sc.nextInt()", "sc.readLine()", "sc.getString()"],
    answerIndex: 0,
    answerText: "sc.nextLine() lee una linea completa de texto.",
  },
  {
    type: "tf",
    topic: "java",
    question: "System.out.print() muestra texto SIN saltar de linea al final.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. print() no salta linea; println() si.",
  },
  // --- Operadores ---
  {
    type: "mc",
    topic: "java",
    question: "En Java, el operador + representa:",
    options: ["Suma", "Concatenacion", "Incremento", "Asignacion"],
    answerIndex: 0,
    answerText: "Operador +: suma.",
  },
  {
    type: "mc",
    topic: "java",
    question: "En Java, el operador % representa:",
    options: ["Modulo (residuo)", "Division entera", "Exponenciacion", "Asignacion compuesta"],
    answerIndex: 0,
    answerText: "Operador %: modulo (residuo).",
  },
  {
    type: "mc",
    topic: "java",
    question: "En Java, el operador = representa:",
    options: [
      "Asignacion (guardar valor)",
      "Comparacion de igualdad",
      "Igualdad estricta",
      "Declaracion de variable",
    ],
    answerIndex: 0,
    answerText: "Operador =: asignacion (guardar valor).",
  },
  {
    type: "mc",
    topic: "java",
    question: "En Java, el operador * representa:",
    options: ["Multiplicacion", "Division", "Potencia", "Modulo"],
    answerIndex: 0,
    answerText: "Operador *: multiplicacion.",
  },
  {
    type: "mc",
    topic: "java",
    question: "En Java, el operador / representa:",
    options: ["Division", "Division entera", "Modulo", "Multiplicacion"],
    answerIndex: 0,
    answerText: "Operador /: division.",
  },
  {
    type: "mc",
    topic: "java",
    question: "En el ejemplo de operadores, si base=10 y altura=5, el area del triangulo es:",
    options: ["25", "50", "15", "20"],
    answerIndex: 0,
    answerText: "area = (base * altura) / 2 = (10*5)/2 = 25.",
  },
  // --- Toma de decisiones ---
  {
    type: "mc",
    topic: "java",
    question: "En 'toma de decisiones', el codigo elige un camino basandose en:",
    options: [
      "Una condicion",
      "Un contador de iteraciones",
      "El tipo de dato de la variable",
      "El nombre del metodo activo",
    ],
    answerIndex: 0,
    answerText: "El codigo elige basandose en una condicion.",
  },
  {
    type: "mc",
    topic: "java",
    question: "En el ejemplo de decisiones, si edad >= 18, se imprime:",
    options: [
      "Mayor de edad",
      "Menor de edad",
      "Edad invalida",
      "No imprime nada",
    ],
    answerIndex: 0,
    answerText: "Si edad >= 18, imprime 'Mayor de edad'.",
  },
  {
    type: "mc",
    topic: "java",
    question: "La estructura de decision en Java usa las palabras clave:",
    options: [
      "if / else",
      "switch / case",
      "for / while",
      "try / catch",
    ],
    answerIndex: 0,
    answerText: "Se usa if / else para tomar decisiones.",
  },
  {
    type: "tf",
    topic: "java",
    question: "En el ejemplo, si la edad es 15, se imprime 'Menor de edad'.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. 15 < 18, entonces entra al else e imprime 'Menor de edad'.",
  },
  // --- Ciclos ---
  {
    type: "mc",
    topic: "java",
    question: "El ciclo FOR se usa cuando:",
    options: [
      "Sabes cuantas veces repetir",
      "Repites hasta que una condicion cambie",
      "Quieres recorrer los caracteres de un String",
      "Necesitas una condicion de parada variable",
    ],
    answerIndex: 0,
    answerText: "FOR: cuando sabes cuantas veces repetir.",
  },
  {
    type: "mc",
    topic: "java",
    question: "El ciclo WHILE se usa cuando:",
    options: [
      "Repites hasta que algo cambie",
      "Sabes exactamente cuantas veces repetir",
      "Necesitas un contador entero desde 0",
      "Quieres iterar sobre un arreglo",
    ],
    answerIndex: 0,
    answerText: "WHILE: cuando repites hasta que algo cambie.",
  },
  {
    type: "mc",
    topic: "java",
    question: "En el ejemplo 'for (int i = 1; i <= 5; i++)', cuantas veces se repite el ciclo?",
    options: ["5", "4", "6", "10"],
    answerIndex: 0,
    answerText: "Se repite 5 veces (i = 1, 2, 3, 4, 5).",
  },
  {
    type: "short",
    topic: "java",
    question: "Que imprime el ciclo: for (int i=1; i<=5; i++) { System.out.println('Numero: '+i); } en la primera iteracion?",
    answerText: "Numero: 1",
    keywords: ["numero", "1"],
    minMatches: 2,
  },
  // --- Resumen de sintaxis ---
  {
    type: "mc",
    topic: "java",
    question: "En el resumen de sintaxis, para imprimir se usa:",
    options: [
      "System.out.println('Texto')",
      "Console.log('Texto')",
      "print('Texto')",
      "echo 'Texto'",
    ],
    answerIndex: 0,
    answerText: "Imprimir: System.out.println('Texto');",
  },
  {
    type: "mc",
    topic: "java",
    question: "En el resumen de sintaxis, la declaracion de una variable entera es:",
    options: [
      "int numero = 10;",
      "var numero = 10;",
      "numero := 10;",
      "let numero = 10;",
    ],
    answerIndex: 0,
    answerText: "Variables: int numero = 10;",
  },
  {
    type: "mc",
    topic: "java",
    question: "En el resumen de sintaxis, para leer input se crea un:",
    options: [
      "Scanner sc = new Scanner(System.in)",
      "Input in = new Input()",
      "Reader r = new Reader()",
      "BufferedReader br = new BufferedReader()",
    ],
    answerIndex: 0,
    answerText: "Input: Scanner sc = new Scanner(System.in); sc.nextLine();",
  },
  {
    type: "mc",
    topic: "java",
    question: "En el resumen de sintaxis, la estructura de condicion incluye:",
    options: [
      "if (condicion) { ... } else { ... }",
      "switch (valor) { case: ... }",
      "when (condicion) { ... }",
      "check (condicion) { ... }",
    ],
    answerIndex: 0,
    answerText: "Condicion: if (condicion) { ... } else { ... }",
  },
  {
    type: "mc",
    topic: "java",
    question: "En el resumen de sintaxis, la estructura de ciclo mostrada es:",
    options: [
      "for (inicio; fin; paso) { ... }",
      "repeat (n) { ... }",
      "loop (condicion) { ... }",
      "each (item) { ... }",
    ],
    answerIndex: 0,
    answerText: "Ciclo: for (inicio; fin; paso) { ... }",
  },
  {
    type: "short",
    topic: "java",
    question: "Cual es el IDE mencionado en la presentacion?",
    answerText: "Apache NetBeans IDE.",
    keywords: ["netbeans"],
    minMatches: 1,
  },
  {
    type: "mc",
    topic: "fases",
    question: "En el sistema de control de inventarios, el problema mencionado es:",
    options: [
      "Perdidas por mal control",
      "Falta de personal capacitado en el area",
      "Ausencia de requisitos funcionales definidos",
      "Dificultad para modelar las clases del sistema",
    ],
    answerIndex: 0,
    answerText: "Problema: Perdidas por mal control.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "En el sistema de control de inventarios, los actores son:",
    options: [
      "Bodeguero y Administrador",
      "Cliente y Proveedor",
      "Producto y Entrada",
      "Historial y Salida",
    ],
    answerIndex: 0,
    answerText: "Actores: Bodeguero y Administrador.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "En el sistema de control de inventarios, los objetos mencionados incluyen:",
    options: [
      "Producto, Entrada y Salida",
      "Bodeguero, Administrador y Stock",
      "Consulta, Historial y Diagnostico",
      "Proveedor, Cliente y Compra",
    ],
    answerIndex: 0,
    answerText: "Objetos: Producto, Entrada y Salida.",
  },
  {
    type: "tf",
    topic: "fases",
    question: "En el sistema de inventarios, 'Actualizar stock' se menciona como un requisito funcional.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Funcionales: Actualizar stock.",
  },
  {
    type: "tf",
    topic: "fases",
    question: "En el sistema de inventarios, 'Exactitud' se menciona como un requisito no funcional.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. No funcionales: Exactitud.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "En el sistema de historial clinico electronico, el problema mencionado es:",
    options: [
      "Expedientes fisicos dificiles de manejar",
      "Dificultad para controlar el stock de insumos medicos",
      "Falta de comunicacion entre el personal de salud",
      "Ausencia de un sistema de cobros automatizado",
    ],
    answerIndex: 0,
    answerText: "Problema: Expedientes fisicos dificiles de manejar.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "En el sistema de historial clinico electronico, los actores mencionados son:",
    options: [
      "Medico, Enfermera y Paciente",
      "Medico y Administrador",
      "Consulta, Diagnostico e Historial",
      "Paciente, Historial y Receta",
    ],
    answerIndex: 0,
    answerText: "Actores: Medico, Enfermera y Paciente.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "En el sistema de historial clinico electronico, los objetos mencionados incluyen:",
    options: [
      "Historial, Consulta y Diagnostico",
      "Medico, Enfermera y Paciente",
      "Receta, Cita y Turno",
      "Historial, Factura y Pago",
    ],
    answerIndex: 0,
    answerText: "Objetos: Historial, Consulta y Diagnostico.",
  },
  {
    type: "tf",
    topic: "fases",
    question: "En el sistema de historial clinico electronico, 'Registrar consultas' se menciona como funcional.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Funcionales: Registrar consultas.",
  },
  {
    type: "tf",
    topic: "fases",
    question: "En el sistema de historial clinico electronico, 'Confidencialidad' y 'respaldo' se mencionan como no funcionales.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. No funcionales: Confidencialidad, respaldo.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "UML significa:",
    options: [
      "Unified Modeling Language",
      "Universal Machine Language",
      "Unified Module Layout",
      "User Modeling List",
    ],
    answerIndex: 0,
    answerText: "UML (Unified Modeling Language).",
  },
  {
    type: "short",
    topic: "fases",
    question: "En una frase, que es UML segun la presentacion?",
    answerText:
      "Un lenguaje estandar para escribir planos de software; sirve para visualizar, especificar, construir y documentar artefactos de un sistema.",
    keywords: [
      "lenguaje",
      "estandar",
      "planos",
      "software",
      "visualizar",
      "especificar",
      "construir",
      "documentar",
    ],
    minMatches: 2,
  },
  {
    type: "mc",
    topic: "fases",
    question: "Segun la definicion mostrada, UML puede utilizarse para:",
    options: [
      "Visualizar, especificar, construir y documentar",
      "Analizar, disenar, codificar y probar",
      "Compilar, ejecutar, depurar y desplegar",
      "Modelar, instanciar, heredar y encapsular",
    ],
    answerIndex: 0,
    answerText: "UML puede utilizarse para visualizar, especificar, construir y documentar.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "Una herramienta para modelado UML mencionada es:",
    options: ["ArgoUML", "StarUML", "Draw.io (diagrams.net)", "Visual Paradigm"],
    answerIndex: 0,
    answerText: "Herramientas: ArgoUML y Draw.io (diagrams.net).",
  },
  {
    type: "mc",
    topic: "fases",
    question: "Otra herramienta para modelado UML mencionada es:",
    options: ["Draw.io (diagrams.net)", "ArgoUML", "Lucidchart", "StarUML"],
    answerIndex: 0,
    answerText: "Herramientas: Draw.io (diagrams.net).",
  },
  {
    type: "mc",
    topic: "fases",
    question: "En POO se empieza a pensar en:",
    options: [
      "Objetos, no en funciones",
      "Clases abstractas, no en instancias",
      "Interfaces, no en implementaciones",
      "Herencia, no en composicion",
    ],
    answerIndex: 0,
    answerText: "En POO se empieza a pensar en objetos, no en funciones.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "Segun el 'cambio de mentalidad', el proceso de desarrollo combina:",
    options: [
      "Analisis, Diseno y Construccion",
      "Analisis, Implementacion y Pruebas",
      "Diseno, Documentacion y Despliegue",
      "Planificacion, Ejecucion y Cierre",
    ],
    answerIndex: 0,
    answerText: "Analisis (entender), Diseno (modelar) y Construccion (ejecutar).",
  },
  {
    type: "short",
    topic: "fases",
    question: "Escribe las tres etapas del proceso: Analisis (___), Diseno (___), Construccion (___).",
    answerText: "Analisis (Entender), Diseno (Modelar), Construccion (Ejecutar).",
    keywords: ["analisis", "entender", "diseno", "modelar", "construccion", "ejecutar"],
    minMatches: 3,
  },
  {
    type: "mc",
    topic: "fases",
    question: "Fase 1 (Analisis del problema) busca principalmente:",
    options: [
      "Entender que se necesita resolver",
      "Identificar las clases y objetos del sistema",
      "Modelar las relaciones entre clases",
      "Traducir el diseno a codigo",
    ],
    answerIndex: 0,
    answerText: "Fase 1: entender que se necesita resolver.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "En la fase de analisis del problema, una actividad clave es:",
    options: [
      "Analizar requisitos funcionales y no funcionales",
      "Crear los diagramas UML de clases",
      "Codificar las clases identificadas",
      "Disenar las pruebas unitarias del sistema",
    ],
    answerIndex: 0,
    answerText: "En analisis se analizan requisitos funcionales y no funcionales.",
  },
  {
    type: "tf",
    topic: "fases",
    question: "En la fase 1 se identifican actores (usuarios) del sistema.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Se reconocen actores del sistema (usuarios).",
  },
  {
    type: "tf",
    topic: "fases",
    question: "En la fase 1 tambien se detectan posibles objetos del mundo real.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Se detectan posibles objetos del mundo real.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "En el caso de estudio del 'Sistema Academico', el problema planteado es:",
    options: [
      "Gestionar la inscripcion de alumnos de manera eficiente",
      "Controlar el inventario de materiales academicos",
      "Registrar expedientes clinicos de estudiantes",
      "Automatizar la generacion de reportes de notas",
    ],
    answerIndex: 0,
    answerText: "Problema: gestionar la inscripcion de alumnos de manera eficiente.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "En el caso de estudio del sistema academico, los actores identificados son:",
    options: [
      "Estudiantes y Administracion",
      "Docentes y Administracion",
      "Estudiantes, Docentes y Coordinacion",
      "Alumno, Carrera y Materia",
    ],
    answerIndex: 0,
    answerText: "Actores identificados: Estudiantes y Administracion.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "Fase 2 (Identificacion de clases y objetos) consiste en:",
    options: [
      "Definir que entidades formaran el sistema",
      "Entender los requisitos del cliente",
      "Establecer como interactuan las clases",
      "Traducir el diseno al lenguaje elegido",
    ],
    answerIndex: 0,
    answerText: "Fase 2: definir que entidades (clases/objetos) formaran el sistema.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "Segun la diapositiva, una clase es:",
    options: [
      "Los planos de las entidades",
      "Las instancias de los objetos en memoria",
      "Los datos que describen al objeto",
      "Las acciones que puede realizar el objeto",
    ],
    answerIndex: 0,
    answerText: "Clases: los planos de las entidades.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "Segun la diapositiva, los atributos son:",
    options: [
      "Datos que describen al objeto",
      "Acciones que el objeto puede realizar",
      "Los planos que definen la clase",
      "Las relaciones entre objetos",
    ],
    answerIndex: 0,
    answerText: "Atributos: datos que describen al objeto.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "Segun la diapositiva, los metodos son:",
    options: [
      "Acciones que el objeto puede realizar",
      "Datos que describen al objeto",
      "Los planos que definen la clase",
      "Las relaciones de herencia entre clases",
    ],
    answerIndex: 0,
    answerText: "Metodos: acciones que el objeto puede realizar.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "En el ejemplo de la clase Alumno, un atributo (dato) es:",
    options: ["carnet", "inscribirse()", "mostrarDatos()", "herencia"],
    answerIndex: 0,
    answerText: "Atributos (datos) incluyen carnet, nombre y carrera.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "En el ejemplo de la clase Alumno, un metodo (comportamiento) es:",
    options: ["inscribirse()", "carrera", "nombre", "carnet"],
    answerIndex: 0,
    answerText: "Metodos (comportamiento) incluyen inscribirse() y mostrarDatos().",
  },
  {
    type: "mc",
    topic: "fases",
    question: "Fase 3 (Diseno del sistema / OOD) se enfoca en:",
    options: [
      "Establecer como interactuan las clases",
      "Identificar los objetos del mundo real",
      "Traducir el diseno a codigo Java",
      "Verificar que el sistema funcione correctamente",
    ],
    answerIndex: 0,
    answerText: "Fase 3: establecer como interactuan las clases.",
  },
  {
    type: "tf",
    topic: "fases",
    question: "En el diseno (OOD) se crean diagramas UML.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Se crean diagramas UML.",
  },
  {
    type: "tf",
    topic: "fases",
    question: "En el diseno (OOD) se define encapsulamiento y visibilidad.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Se define encapsulamiento y visibilidad.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "En relaciones de diseno, la relacion 'es un' (jerarquia) corresponde a:",
    options: ["Herencia", "Asociacion", "Composicion", "Agregacion"],
    answerIndex: 0,
    answerText: "Herencia: relacion 'es un' (jerarquia).",
  },
  {
    type: "mc",
    topic: "fases",
    question: "La relacion 'parte de' (dependencia fuerte) corresponde a:",
    options: ["Composicion", "Asociacion", "Herencia", "Agregacion"],
    answerIndex: 0,
    answerText: "Composicion: relacion 'parte de' (dependencia fuerte).",
  },
  {
    type: "mc",
    topic: "fases",
    question: "La relacion 'tiene un' (dependencia debil) corresponde a:",
    options: ["Agregacion", "Composicion", "Herencia", "Asociacion"],
    answerIndex: 0,
    answerText: "Agregacion: relacion 'tiene un' (dependencia debil).",
  },
  {
    type: "mc",
    topic: "fases",
    question: "Una conexion basica entre clases corresponde a:",
    options: ["Asociacion", "Herencia", "Composicion", "Polimorfismo"],
    answerIndex: 0,
    answerText: "Asociacion: conexion basica entre clases.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "Fase 4 (Implementacion / Codificacion) consiste en:",
    options: [
      "Traducir el diseno a un lenguaje orientado a objetos",
      "Establecer como interactuan las clases",
      "Definir las entidades del sistema",
      "Verificar que cada clase funcione correctamente",
    ],
    answerIndex: 0,
    answerText: "Implementacion: traducir el diseno a un lenguaje orientado a objetos.",
  },
  {
    type: "tf",
    topic: "fases",
    question: "En la implementacion se implementan conceptos como encapsulamiento, herencia, polimorfismo y abstraccion.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Se implementan esos conceptos en codigo.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "Fase 5 (Pruebas) busca:",
    options: [
      "Verificar que el programa funcione correctamente",
      "Identificar clases y objetos del sistema",
      "Modelar las relaciones entre clases",
      "Traducir el diseno al lenguaje de programacion",
    ],
    answerIndex: 0,
    answerText: "Pruebas: verificar que el programa funcione correctamente.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "En la jerarquia de pruebas, las pruebas unitarias sirven para:",
    options: [
      "Verificar por clase o metodo individual",
      "Verificar la interaccion entre objetos",
      "Validar el funcionamiento completo del sistema",
      "Corregir errores detectados en produccion",
    ],
    answerIndex: 0,
    answerText: "Pruebas unitarias: verificar por clase o metodo individual.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "En la jerarquia de pruebas, las pruebas de integracion sirven para:",
    options: [
      "Verificar la interaccion entre objetos",
      "Verificar por clase o metodo individual",
      "Validar el funcionamiento completo del sistema",
      "Probar el rendimiento bajo carga maxima",
    ],
    answerIndex: 0,
    answerText: "Pruebas de integracion: verificar la interaccion entre objetos.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "En la jerarquia de pruebas, las pruebas del sistema sirven para:",
    options: [
      "Validar el funcionamiento completo",
      "Verificar por clase o metodo individual",
      "Verificar la interaccion entre dos objetos",
      "Revisar los requisitos funcionales iniciales",
    ],
    answerIndex: 0,
    answerText: "Pruebas del sistema: validacion del funcionamiento completo.",
  },
  {
    type: "tf",
    topic: "fases",
    question: "En POO es clave probar cada clase de forma independiente.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Es clave probar cada clase de forma independiente.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "Fase 6 (Mantenimiento y mejora) ocurre:",
    options: [
      "Despues de la entrega (evolucion del sistema)",
      "Antes del analisis de requisitos",
      "Simultaneamente con la fase de diseno",
      "Justo antes de la codificacion",
    ],
    answerIndex: 0,
    answerText: "Mantenimiento: evolucion del sistema despues de la entrega.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "Una actividad de mantenimiento y mejora mencionada es:",
    options: ["Correccion de errores (bugs)", "Creacion de nuevos diagramas UML", "Re-identificacion de actores", "Reescritura del analisis de requisitos"],
    answerIndex: 0,
    answerText: "Mantenimiento incluye correccion de errores (bugs).",
  },
  {
    type: "mc",
    topic: "fases",
    question: "Otra actividad de mantenimiento y mejora mencionada es:",
    options: ["Refactorizacion", "Pruebas unitarias", "Analisis de requisitos", "Modelado UML"],
    answerIndex: 0,
    answerText: "Mantenimiento incluye refactorizacion (mejorar estructura interna).",
  },
  {
    type: "tf",
    topic: "fases",
    question: "Refactorizacion significa mejorar la estructura interna del codigo.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Refactorizacion: mejorar la estructura interna.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "Fase 7 (Documentacion) tiene como objetivo:",
    options: [
      "Facilitar el uso y el futuro mantenimiento",
      "Identificar las entidades del sistema",
      "Verificar que el codigo no tenga errores",
      "Optimizar el rendimiento del sistema",
    ],
    answerIndex: 0,
    answerText: "Documentacion: facilitar el uso y el futuro mantenimiento.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "Un ejemplo de documentacion del codigo mencionado es:",
    options: ["Javadoc / Comentarios", "Diagramas de secuencia UML", "Pruebas unitarias automatizadas", "Refactorizacion del codigo"],
    answerIndex: 0,
    answerText: "Docs del codigo: Javadoc / comentarios.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "Segun la diapositiva, un sistema no documentado es:",
    options: [
      "Dificil de mantener",
      "Mas facil de refactorizar",
      "Mejor encapsulado internamente",
      "Mas independiente de otros modulos",
    ],
    answerIndex: 0,
    answerText: "Un sistema no documentado es dificil de mantener.",
  },
  {
    type: "mc",
    topic: "fases",
    question: "En el resumen rapido, 'Analisis' significa:",
    options: [
      "Comprender el problema",
      "Definir clases y objetos",
      "Modelar relaciones entre clases",
      "Verificar el funcionamiento",
    ],
  },
  {
    type: "mc",
    topic: "fases",
    question: "En el resumen rapido, 'Identificacion' significa:",
    options: [
      "Definir clases y objetos",
      "Comprender el problema",
      "Modelar relaciones entre clases",
      "Codificar (Java/Python)",
    ],
  },
  {
    type: "mc",
    topic: "fases",
    question: "En el resumen rapido, 'Diseno' significa:",
    options: [
      "Modelar relaciones",
      "Comprender el problema",
      "Definir clases y objetos",
      "Verificar el funcionamiento",
    ],
  },
  {
    type: "mc",
    topic: "fases",
    question: "En el resumen rapido, 'Implementacion' significa:",
    options: [
      "Codificar (Java/Python)",
      "Modelar relaciones entre clases",
      "Definir clases y objetos",
      "Comprender el problema",
    ],
  },
  {
    type: "mc",
    topic: "fases",
    question: "En el resumen rapido, 'Pruebas' significa:",
    options: [
      "Verificar funcionamiento",
      "Codificar (Java/Python)",
      "Modelar relaciones entre clases",
      "Comprender el problema",
    ],
  },
  {
    type: "mc",
    topic: "fases",
    question: "En el resumen rapido, 'Mantenimiento' significa:",
    options: [
      "Mejorar y corregir",
      "Verificar funcionamiento",
      "Definir clases y objetos",
      "Modelar relaciones entre clases",
    ],
  },
  {
    type: "mc",
    topic: "fases",
    question: "En el resumen rapido, 'Documentacion' significa:",
    options: [
      "Explicar el sistema",
      "Mejorar y corregir",
      "Verificar funcionamiento",
      "Codificar (Java/Python)",
    ],
  },
  // ===== T4: Pilares de la POO =====
  // --- Introduccion a los pilares ---
  {
    type: "mc",
    topic: "pilares",
    question: "Los pilares de la POO permiten crear codigo:",
    options: [
      "Limpio, sensible, legible y resiliente",
      "Rapido, concurrente y sin acoplamiento",
      "Declarativo, inmutable y funcional",
      "Modular, compilado y tipado estaticamente",
    ],
    answerIndex: 0,
    answerText: "Estos principios permiten crear codigo limpio, sensible, legible y resiliente.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "Cuantos pilares de la POO se presentan en la clase?",
    options: ["4", "3", "5", "2"],
    answerIndex: 0,
    answerText: "Son 4 pilares: Abstraccion, Encapsulamiento, Herencia y Polimorfismo.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "El pilar que se asocia con 'Gestionar la complejidad' es:",
    options: ["Abstraccion", "Encapsulamiento", "Herencia", "Polimorfismo"],
    answerIndex: 0,
    answerText: "Abstraccion: Gestionar la complejidad.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "El pilar que se asocia con 'Proteger y agrupar' es:",
    options: ["Encapsulamiento", "Abstraccion", "Herencia", "Polimorfismo"],
    answerIndex: 0,
    answerText: "Encapsulamiento: Proteger y agrupar.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "El pilar que se asocia con 'Jerarquia y reutilizacion' es:",
    options: ["Herencia", "Abstraccion", "Encapsulamiento", "Polimorfismo"],
    answerIndex: 0,
    answerText: "Herencia: Jerarquia y reutilizacion.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "El pilar que se asocia con 'Flexibilidad y multiples formas' es:",
    options: ["Polimorfismo", "Herencia", "Encapsulamiento", "Abstraccion"],
    answerIndex: 0,
    answerText: "Polimorfismo: Flexibilidad y multiples formas.",
  },
  // --- Abstraccion ---
  {
    type: "mc",
    topic: "pilares",
    question: "La Abstraccion se define como:",
    options: [
      "La capacidad de diferenciar entre las propiedades externas de una entidad y los detalles de su composicion interna",
      "El mecanismo que agrupa datos y operaciones en una clase protegiendolos",
      "El proceso por el cual un objeto adquiere propiedades de otro",
      "La capacidad de que una misma operacion actue diferente segun el objeto",
    ],
    answerIndex: 0,
    answerText: "Diferenciar propiedades externas de los detalles de composicion interna.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "El concepto clave de la Abstraccion es centrarse en:",
    options: [
      "'Que hace' el objeto, ignorando 'como' lo hace internamente",
      "'Como' esta implementado internamente el objeto",
      "Cuales atributos privados posee el objeto",
      "Que clases pueden heredar del objeto",
    ],
    answerIndex: 0,
    answerText: "Centrarse en 'que hace' el objeto, ignorando 'como' lo hace internamente.",
  },
  {
    type: "tf",
    topic: "pilares",
    question: "Un beneficio de la Abstraccion es que aisla el uso del componente de su fabricacion.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Aisla el uso del componente de su fabricacion.",
  },
  {
    type: "tf",
    topic: "pilares",
    question: "La Abstraccion es la base de los Tipos Abstractos de Datos (TAD).",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Es base de los TAD.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "En el diagrama de Abstraccion, el objeto se representa como una:",
    options: ["Caja Negra", "Caja Blanca", "Interfaz Abstracta", "Clase Concreta"],
    answerIndex: 0,
    answerText: "Se representa como una Caja Negra: Entrada/Uso → Caja Negra → Salida/Resultado.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "En el ejemplo del coche, la INTERFAZ (lo que vemos) es:",
    options: [
      "El volante y los pedales",
      "El motor y la inyeccion de combustible",
      "La caja de cambios",
      "El sistema electrico",
    ],
    answerIndex: 0,
    answerText: "El conductor usa el volante y los pedales (interfaz). Ignora la complejidad mecanica.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "En el ejemplo de Abstraccion, la IMPLEMENTACION (lo que ignoramos) es:",
    options: [
      "La inyeccion de combustible y la mecanica interna",
      "El volante",
      "Los pedales",
      "El color del coche",
    ],
    answerIndex: 0,
    answerText: "No necesitamos entender la inyeccion de combustible para conducir (implementacion oculta).",
  },
  {
    type: "tf",
    topic: "pilares",
    question: "La Abstraccion crea Niveles de Abstraccion para visualizar sistemas complejos.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Crea niveles de abstraccion para visualizar sistemas complejos.",
  },
  // --- Encapsulamiento ---
  {
    type: "mc",
    topic: "pilares",
    question: "El Encapsulamiento se define como:",
    options: [
      "Mecanismo que agrupa datos y operaciones en una unidad (Clase) y los protege de interferencias externas",
      "La capacidad de diferenciar propiedades externas de los detalles internos de la clase",
      "El proceso por el que un objeto adquiere propiedades de otro para reutilizar codigo",
      "La capacidad de que una misma interfaz ejecute multiples comportamientos distintos",
    ],
    answerIndex: 0,
    answerText: "Agrupa datos y operaciones en una Clase y los protege de interferencias externas.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "En Encapsulamiento, la 'Ocultacion de datos' significa:",
    options: [
      "No se puede acceder directamente a los datos",
      "Los datos se replican entre clases relacionadas",
      "Los datos se exponen solo a las subclases",
      "Los datos son accesibles desde cualquier clase del paquete",
    ],
    answerIndex: 0,
    answerText: "Ocultacion de datos: No se puede acceder directamente.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "El 'Acceso Controlado' en Encapsulamiento significa que se accede:",
    options: [
      "Solo a traves de la interfaz definida",
      "Directamente a las variables",
      "Mediante herencia exclusivamente",
      "Sin restricciones",
    ],
    answerIndex: 0,
    answerText: "Acceso Controlado: Solo a traves de la interfaz definida.",
  },
  {
    type: "tf",
    topic: "pilares",
    question: "Un proposito del Encapsulamiento es la Seguridad: evitar alteraciones accidentales.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Seguridad: Evita alteraciones accidentales.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "La Interfaz Publica en Encapsulamiento es:",
    options: [
      "Visible para todos los usuarios externos y define COMO se usa el objeto",
      "Un conjunto de datos privados",
      "Solo accesible por la propia clase",
      "No permite modificar la implementacion",
    ],
    answerIndex: 0,
    answerText: "Interfaz Publica: visible para todos, define COMO se usa el objeto.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "Los 'Miembros Privados' en Encapsulamiento son:",
    options: [
      "Datos y metodos internos ocultos, solo accesibles por la propia clase",
      "Metodos visibles para todos los usuarios",
      "Variables que cualquier clase puede modificar",
      "Interfaces que define el usuario",
    ],
    answerIndex: 0,
    answerText: "Datos y metodos internos ocultos, solo accesibles por la propia clase.",
  },
  {
    type: "tf",
    topic: "pilares",
    question: "La Interfaz Publica permite modificar la implementacion interna sin romper el codigo externo.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Permite modificar la implementacion interna sin romper el codigo externo.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "En el ejemplo del coche con Encapsulamiento, si ocultamos la complejidad interna (Privado):",
    options: [
      "Podemos cambiar el motor sin tener que cambiar el volante (Publico)",
      "Debemos cambiar todo el coche",
      "El volante deja de funcionar",
      "No se puede conducir",
    ],
    answerIndex: 0,
    answerText: "Podemos cambiar el motor del coche sin tener que cambiar el volante.",
  },
  {
    type: "tf",
    topic: "pilares",
    question: "Los Miembros Privados garantizan la integridad de los datos.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Garantiza la integridad de los datos.",
  },
  // --- Herencia ---
  {
    type: "mc",
    topic: "pilares",
    question: "La Herencia es el proceso por el cual:",
    options: [
      "Un objeto adquiere las propiedades de otro, compartiendo informacion y evitando redundancia",
      "Una clase agrupa datos y operaciones ocultando los detalles internos",
      "Una misma operacion actua diferente dependiendo del objeto receptor",
      "Se diferencia entre las propiedades visibles y los detalles de implementacion",
    ],
    answerIndex: 0,
    answerText: "Un objeto adquiere propiedades de otro, compartiendo informacion y evitando redundancia.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "En Herencia, la SUPERCLASE tambien se llama:",
    options: ["Generalizacion", "Especializacion", "Clase Base", "Clase Abstracta"],
    answerIndex: 0,
    answerText: "SUPERCLASE = Generalizacion (contiene atributos comunes).",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "En Herencia, la SUBCLASE tambien se llama:",
    options: ["Especializacion", "Generalizacion", "Superclase", "Clase Padre"],
    answerIndex: 0,
    answerText: "SUBCLASE = Especializacion (atributos comunes + atributos unicos).",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "Un beneficio de la Herencia es:",
    options: [
      "Reutilizacion de codigo: 'No reinventar la rueda'",
      "Ocultar la implementacion interna de una clase",
      "Ejecutar una misma operacion de distintas formas",
      "Aislar el 'que hace' del 'como lo hace'",
    ],
    answerIndex: 0,
    answerText: "Reutilizacion de codigo: 'No reinventar la rueda'.",
  },
  {
    type: "tf",
    topic: "pilares",
    question: "Una subclase es siempre un tipo especifico de su superclase.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Una subclase es siempre un tipo especifico de su superclase.",
  },
  {
    type: "tf",
    topic: "pilares",
    question: "La Herencia permite crecimiento lineal de la complejidad.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Beneficio: crecimiento lineal de la complejidad.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "En el ejemplo de Herencia, la Clase Base es:",
    options: ["VEHICULO", "CAMION", "AUTOBUS", "TURISMO"],
    answerIndex: 0,
    answerText: "VEHICULO es la Clase Base con atributos: Ruedas, Motor, Carroceria.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "En el ejemplo, CAMION hereda de Vehiculo y añade:",
    options: [
      "Cabina independiente y Caja de carga",
      "Asientos multiples y Pasillo central",
      "Maletero pequeño y 5 Plazas",
      "Solo Ruedas",
    ],
    answerIndex: 0,
    answerText: "CAMION: Hereda todo de Vehiculo + Cabina independiente + Caja de carga.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "En el ejemplo, AUTOBUS hereda de Vehiculo y añade:",
    options: [
      "Asientos multiples y Pasillo central",
      "Cabina independiente y Caja de carga",
      "Maletero pequeño y 5 Plazas",
      "Solo Motor",
    ],
    answerIndex: 0,
    answerText: "AUTOBUS: Hereda todo de Vehiculo + Asientos multiples + Pasillo central.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "En el ejemplo, TURISMO/COCHE hereda de Vehiculo y añade:",
    options: [
      "Maletero pequeño y 5 Plazas",
      "Cabina independiente y Caja de carga",
      "Asientos multiples y Pasillo central",
      "Solo Carroceria",
    ],
    answerIndex: 0,
    answerText: "TURISMO/COCHE: Hereda todo de Vehiculo + Maletero pequeño + 5 Plazas.",
  },
  {
    type: "tf",
    topic: "pilares",
    question: "Cada subclase es una concrecion de la clase base, añadiendo sus propias caracteristicas unicas.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Cada subclase concreta la clase base con caracteristicas unicas.",
  },
  // --- Polimorfismo ---
  {
    type: "mc",
    topic: "pilares",
    question: "El Polimorfismo es la capacidad de que:",
    options: [
      "Una operacion con el mismo nombre actue diferente segun el objeto",
      "Un objeto adquiera propiedades de una clase base",
      "Una clase agrupe datos y los proteja de acceso externo",
      "Se diferencien las propiedades visibles de las internas",
    ],
    answerIndex: 0,
    answerText: "Una operacion (mismo nombre) actua diferente dependiendo del objeto sobre el que se aplica.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "La frase que resume Polimorfismo es:",
    options: [
      "'Una interfaz, multiples metodos'",
      "'No reinventar la rueda'",
      "'Que hace vs Como lo hace'",
      "'Proteger y agrupar'",
    ],
    answerIndex: 0,
    answerText: "'Una interfaz, multiples metodos'.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "En Polimorfismo, los pasos son: 1) El programador envia una orden general, 2) El sistema determina el tipo de objeto, 3):",
    options: [
      "Se ejecuta la accion especifica correcta para ese objeto",
      "Se hereda la accion de la clase padre",
      "Se encapsula internamente la operacion",
      "Se abstrae el resultado de la operacion",
    ],
    answerIndex: 0,
    answerText: "Paso 3: Se ejecuta la accion especifica correcta para ese objeto.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "En el ejemplo del comando Abrir(), si el objeto es PUERTA, la accion es:",
    options: [
      "Gira el pomo y empuja",
      "Desliza el panel verticalmente",
      "Inicia registro en base de datos",
      "Ejecuta el metodo heredado por defecto",
    ],
    answerIndex: 0,
    answerText: "PUERTA: Gira el pomo y empuja.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "En el ejemplo del comando Abrir(), si el objeto es VENTANA, la accion es:",
    options: [
      "Desliza el panel verticalmente",
      "Gira el pomo y empuja",
      "Inicia registro en base de datos",
      "Minimiza la ventana",
    ],
    answerIndex: 0,
    answerText: "VENTANA: Desliza el panel verticalmente.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "En el ejemplo del comando Abrir(), si el objeto es CUENTA BANCARIA, la accion es:",
    options: [
      "Inicia registro en base de datos",
      "Gira el pomo y empuja",
      "Desliza el panel verticalmente",
      "Muestra el balance actual",
    ],
    answerIndex: 0,
    answerText: "CUENTA BANCARIA: Inicia registro en base de datos.",
  },
  {
    type: "tf",
    topic: "pilares",
    question: "La misma orden 'Abrir()' genera tres ejecuciones mecanicas totalmente distintas.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. La misma orden genera ejecuciones totalmente distintas segun el objeto.",
  },
  // --- Integracion de los pilares ---
  {
    type: "mc",
    topic: "pilares",
    question: "En la integracion de pilares, Abstraccion se describe como:",
    options: [
      "Diseno enfocado en lo relevante",
      "Integridad y mantenimiento",
      "Reutilizacion y estructura",
      "Flexibilidad y adaptacion",
    ],
    answerIndex: 0,
    answerText: "Abstraccion: Diseno enfocado en lo relevante.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "En la integracion de pilares, Encapsulamiento se describe como:",
    options: [
      "Integridad y mantenimiento",
      "Diseno enfocado en lo relevante",
      "Reutilizacion y estructura",
      "Flexibilidad y adaptacion",
    ],
    answerIndex: 0,
    answerText: "Encapsulamiento: Integridad y mantenimiento.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "En la integracion de pilares, Herencia se describe como:",
    options: [
      "Reutilizacion y estructura",
      "Diseno enfocado en lo relevante",
      "Integridad y mantenimiento",
      "Flexibilidad y adaptacion",
    ],
    answerIndex: 0,
    answerText: "Herencia: Reutilizacion y estructura.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "En la integracion de pilares, Polimorfismo se describe como:",
    options: [
      "Flexibilidad y adaptacion",
      "Diseno enfocado en lo relevante",
      "Integridad y mantenimiento",
      "Reutilizacion y estructura",
    ],
    answerIndex: 0,
    answerText: "Polimorfismo: Flexibilidad y adaptacion.",
  },
  // --- Resumen ---
  {
    type: "mc",
    topic: "pilares",
    question: "Segun el resumen, POO ajusta el lenguaje al problema y une:",
    options: [
      "Datos y funciones en Objetos",
      "Clases y paquetes en modulos",
      "Variables y constantes",
      "Interfaces y protocolos",
    ],
    answerIndex: 0,
    answerText: "POO: une datos y funciones en Objetos.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "Segun el resumen, Clase vs Objeto es:",
    options: [
      "Molde logico (Clase) vs Instancia fisica en memoria (Objeto)",
      "Codigo fuente vs Codigo compilado",
      "Metodo vs Funcion",
      "Variable vs Constante",
    ],
    answerIndex: 0,
    answerText: "Clase = Molde logico; Objeto = Instancia fisica en memoria.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "Segun el resumen, Abstraccion se resume como:",
    options: [
      "Que vs Como: diferencia propiedades externas de detalles internos",
      "Seguridad: agrupa y protege datos",
      "Reutilizacion: generalizacion jerarquica",
      "Flexibilidad: interfaz general",
    ],
    answerIndex: 0,
    answerText: "Abstraccion (Que vs Como): Diferencia propiedades externas de detalles internos.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "Segun el resumen, Encapsulamiento se resume como:",
    options: [
      "Seguridad: agrupa y protege datos; acceso solo via interfaz publica",
      "Que vs Como: diferencia propiedades externas",
      "Reutilizacion: generalizacion jerarquica",
      "Flexibilidad: multiples acciones",
    ],
    answerIndex: 0,
    answerText: "Encapsulamiento (Seguridad): Agrupa y protege datos; acceso solo via interfaz publica.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "Segun el resumen, Herencia se resume como:",
    options: [
      "Reutilizacion: mecanismo de generalizacion/especializacion jerarquica",
      "Seguridad: agrupa y protege datos",
      "Que vs Como: diferencia propiedades",
      "Flexibilidad: interfaz general",
    ],
    answerIndex: 0,
    answerText: "Herencia (Reutilizacion): Mecanismo de generalizacion/especializacion jerarquica.",
  },
  {
    type: "mc",
    topic: "pilares",
    question: "Segun el resumen, Polimorfismo se resume como:",
    options: [
      "Flexibilidad: capacidad de una interfaz general para ejecutar multiples acciones especificas",
      "Seguridad: proteger datos",
      "Reutilizacion: herencia jerarquica",
      "Que vs Como: diferenciar propiedades",
    ],
    answerIndex: 0,
    answerText: "Polimorfismo (Flexibilidad): Interfaz general para ejecutar multiples acciones especificas.",
  },
  // --- Preguntas cortas (short) ---
  {
    type: "short",
    topic: "pilares",
    question: "Menciona los 4 pilares de la POO.",
    answerText: "Abstraccion, Encapsulamiento, Herencia y Polimorfismo.",
    keywords: ["abstraccion", "encapsulamiento", "herencia", "polimorfismo"],
    minMatches: 4,
  },
  {
    type: "short",
    topic: "pilares",
    question: "Que pilar se define como 'Una interfaz, multiples metodos'?",
    answerText: "Polimorfismo.",
    keywords: ["polimorfismo"],
    minMatches: 1,
  },
  {
    type: "short",
    topic: "pilares",
    question: "Que pilar agrupa datos y operaciones en una Clase protegiendo de interferencias externas?",
    answerText: "Encapsulamiento.",
    keywords: ["encapsulamiento"],
    minMatches: 1,
  },
  {
    type: "short",
    topic: "pilares",
    question: "Cual es la Clase Base en el ejemplo de Herencia con vehiculos?",
    answerText: "Vehiculo.",
    keywords: ["vehiculo"],
    minMatches: 1,
  },
  // ===== T5: Clases y Metodos en Java =====
  // --- Paquetes ---
  {
    type: "mc",
    topic: "clases",
    question: "Un paquete (Package) en Java es:",
    options: [
      "Un contenedor de clases utilizado para ordenar el codigo de forma consistente",
      "Un conjunto de objetos instanciados en tiempo de ejecucion",
      "Un archivo binario que agrupa clases compiladas",
      "Una interfaz que define los servicios de un modulo",
    ],
    answerIndex: 0,
    answerText: "Un paquete es un contenedor de clases para ordenar el codigo segun los servicios implementados.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "Para definir el paquete al que pertenece una clase se usa:",
    options: [
      "package MiPaquete;",
      "import MiPaquete;",
      "include MiPaquete;",
      "using MiPaquete;",
    ],
    answerIndex: 0,
    answerText: "Definicion del contenedor: package MiPaquete;",
  },
  {
    type: "mc",
    topic: "clases",
    question: "Para usar contenedores (paquetes) externos se escribe:",
    options: [
      "import OtroPaquete;",
      "package OtroPaquete;",
      "include OtroPaquete;",
      "require OtroPaquete;",
    ],
    answerIndex: 0,
    answerText: "Uso de contenedores externos: import OtroPaquete;",
  },
  // --- Bibliotecas Estandar ---
  {
    type: "mc",
    topic: "clases",
    question: "La biblioteca java.lang contiene:",
    options: [
      "Funciones basicas",
      "Utilidades y colecciones",
      "Archivos y flujos",
      "Bases de datos",
    ],
    answerIndex: 0,
    answerText: "java.lang: Funciones basicas.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "La biblioteca java.util contiene:",
    options: [
      "Utilidades y colecciones",
      "Funciones basicas",
      "GUI basica",
      "Redes",
    ],
    answerIndex: 0,
    answerText: "java.util: Utilidades y colecciones.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "La biblioteca java.io se usa para:",
    options: [
      "Archivos y flujos",
      "Bases de datos",
      "Fechas y horas",
      "GUI avanzada",
    ],
    answerIndex: 0,
    answerText: "java.io: Archivos y flujos.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "La biblioteca java.sql se usa para:",
    options: [
      "Bases de datos",
      "Archivos y flujos",
      "Funciones basicas",
      "Redes",
    ],
    answerIndex: 0,
    answerText: "java.sql: Bases de datos.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "La biblioteca javax.swing se usa para:",
    options: [
      "GUI avanzada",
      "GUI basica",
      "Redes",
      "Fechas y horas",
    ],
    answerIndex: 0,
    answerText: "javax.swing: GUI avanzada.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "La biblioteca java.net se usa para:",
    options: ["Redes", "GUI basica", "Archivos y flujos", "Funciones basicas"],
    answerIndex: 0,
    answerText: "java.net: Redes.",
  },
  // --- Control de Acceso: Visibilidad ---
  {
    type: "mc",
    topic: "clases",
    question: "El modificador 'private' permite acceso solo desde:",
    options: [
      "Un metodo implementado dentro de la misma clase",
      "Subclases que hereden de la misma clase",
      "Clases del mismo paquete exclusivamente",
      "Cualquier clase que importe el mismo paquete",
    ],
    answerIndex: 0,
    answerText: "private: Solo desde un metodo implementado dentro de la misma clase.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "El modificador 'protected' permite acceso desde:",
    options: [
      "Subclases (herencia) o clases del mismo paquete",
      "Solo la misma clase donde esta definido",
      "Cualquier clase del proyecto sin restriccion",
      "Solo clases que implementen la misma interfaz",
    ],
    answerIndex: 0,
    answerText: "protected: Desde subclases (herencia) o clases del mismo paquete.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "El modificador 'public' permite acceso desde:",
    options: [
      "Un metodo implementado en cualquier clase",
      "Solo la misma clase donde se declara",
      "Solo subclases directas de la clase",
      "Solo clases del mismo paquete",
    ],
    answerIndex: 0,
    answerText: "public: Desde un metodo implementado en cualquier clase.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "En el diagrama de visibilidad, el nivel mas restrictivo es:",
    options: ["private", "protected", "default (sin modificador)", "public"],
    answerIndex: 0,
    answerText: "private es el mas restrictivo: solo la misma clase.",
  },
  // --- Anatomia de los Metodos ---
  {
    type: "mc",
    topic: "clases",
    question: "Las 4 partes de la anatomia de un metodo en Java son:",
    options: [
      "Visibilidad, Retorno, Nombre, Parametros",
      "Modificador, Tipo, Identificador, Cuerpo",
      "Acceso, Tipo de dato, Bloque, Retorno",
      "Firma, Cuerpo, Excepcion, Retorno",
    ],
    answerIndex: 0,
    answerText: "Visibilidad + Retorno + Nombre (Identificador) + Parametros (Datos recibidos).",
  },
  {
    type: "mc",
    topic: "clases",
    question: "En 'public void miMetodo(int parametro)', 'void' representa:",
    options: [
      "El retorno (tipo de dato o void = sin retorno)",
      "La visibilidad",
      "El nombre del metodo",
      "El parametro",
    ],
    answerIndex: 0,
    answerText: "void es el Retorno: indica que no devuelve ningun valor.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "En 'public void miMetodo(int parametro)', 'public' representa:",
    options: [
      "La visibilidad",
      "El retorno",
      "El nombre",
      "El parametro",
    ],
    answerIndex: 0,
    answerText: "public es la Visibilidad del metodo.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "En 'public void miMetodo(int parametro)', '(int parametro)' representa:",
    options: [
      "Los parametros (datos recibidos)",
      "El retorno",
      "La visibilidad",
      "El nombre del metodo",
    ],
    answerIndex: 0,
    answerText: "Parametros: los datos recibidos por el metodo.",
  },
  // --- Clasificacion de Metodos ---
  {
    type: "mc",
    topic: "clases",
    question: "Los 4 propositos fundamentales de metodos en el diseno de clases son:",
    options: [
      "Constructores, Consultores (Getters), Modificadores (Setters), Analizadores",
      "Publicos, Privados, Protegidos, Por defecto",
      "Estaticos, Finales, Abstractos, Sincronizados",
      "Inicializadores, Accesores, Mutadores, Calculadores",
    ],
    answerIndex: 0,
    answerText: "1. Constructores, 2. Consultores (Getters), 3. Modificadores (Setters), 4. Analizadores.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "Los metodos Constructores sirven para:",
    options: [
      "Inicializacion del objeto",
      "Lectura de datos",
      "Escritura de datos",
      "Logica de negocio",
    ],
    answerIndex: 0,
    answerText: "Constructores: Inicializacion del objeto.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "Los metodos Consultores (Getters) sirven para:",
    options: [
      "Lectura de datos",
      "Inicializacion del objeto",
      "Escritura de datos",
      "Logica de negocio",
    ],
    answerIndex: 0,
    answerText: "Consultores (Getters): Lectura de datos.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "Los metodos Modificadores (Setters) sirven para:",
    options: [
      "Escritura de datos",
      "Lectura de datos",
      "Inicializacion del objeto",
      "Logica de negocio",
    ],
    answerIndex: 0,
    answerText: "Modificadores (Setters): Escritura de datos.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "Los metodos Analizadores sirven para:",
    options: [
      "Logica de negocio y algoritmos",
      "Lectura de datos",
      "Escritura de datos",
      "Inicializacion del objeto",
    ],
    answerIndex: 0,
    answerText: "Analizadores: Logica de negocio y algoritmos.",
  },
  // --- Metodos Constructores ---
  {
    type: "mc",
    topic: "clases",
    question: "Un Constructor es el primer metodo que se ejecuta al:",
    options: [
      "Instanciar un objeto",
      "Invocar un metodo de la clase",
      "Importar el paquete de la clase",
      "Heredar de una superclase",
    ],
    answerIndex: 0,
    answerText: "Es el primer metodo al instanciar un objeto. Su uso principal es inicializar los atributos.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "Una regla clave del Constructor es que debe tener:",
    options: [
      "El mismo nombre de la clase",
      "Retorno tipo void",
      "Retorno tipo int",
      "Visibilidad private",
    ],
    answerIndex: 0,
    answerText: "Debe tener el mismo nombre de la clase.",
  },
  {
    type: "tf",
    topic: "clases",
    question: "El Constructor no posee retorno (ni siquiera void).",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. No posee retorno, ni siquiera void.",
  },
  {
    type: "tf",
    topic: "clases",
    question: "El Constructor debe tener visibilidad publica.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Visibilidad publica.",
  },
  // --- Encapsulamiento: Getters y Setters ---
  {
    type: "mc",
    topic: "clases",
    question: "En Encapsulamiento, los Getters (Consultores) sirven para:",
    options: [
      "Obtener/leer el valor de un atributo privado",
      "Modificar el valor de un atributo privado",
      "Inicializar el objeto",
      "Ejecutar logica de negocio",
    ],
    answerIndex: 0,
    answerText: "Getter (Consultor): lee el valor de un atributo privado.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "En Encapsulamiento, los Setters (Modificadores) sirven para:",
    options: [
      "Cambiar/escribir el valor de un atributo privado",
      "Leer el valor de un atributo",
      "Inicializar el objeto",
      "Eliminar el objeto",
    ],
    answerIndex: 0,
    answerText: "Setter (Modificador): cambia el valor de un atributo privado.",
  },
  {
    type: "tf",
    topic: "clases",
    question: "Los atributos deben ser privados y el acceso se gestiona exclusivamente a traves de metodos publicos.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Atributos privados, acceso via metodos publicos (getters/setters).",
  },
  {
    type: "mc",
    topic: "clases",
    question: "Un ejemplo de Getter es:",
    options: [
      "public int getAtributo1() { return this.atributo1; }",
      "public void setAtributo1(int a) { this.atributo1 = a; }",
      "public MiClase() { this.atributo1 = 0; }",
      "public int calcularMayor() { ... }",
    ],
    answerIndex: 0,
    answerText: "Getter: public int getAtributo1() { return this.atributo1; }",
  },
  {
    type: "mc",
    topic: "clases",
    question: "Un ejemplo de Setter es:",
    options: [
      "public void setAtributo1(int a) { this.atributo1 = a; }",
      "public int getAtributo1() { return this.atributo1; }",
      "public MiClase() { this.atributo1 = 0; }",
      "public static long factorial(long n) { ... }",
    ],
    answerIndex: 0,
    answerText: "Setter: public void setAtributo1(int a) { this.atributo1 = a; }",
  },
  // --- Metodos Analizadores ---
  {
    type: "mc",
    topic: "clases",
    question: "Los metodos Analizadores implementan:",
    options: [
      "Los algoritmos y la 'inteligencia' del negocio",
      "La inicializacion de los atributos del objeto",
      "La lectura de un atributo privado",
      "La escritura controlada de un atributo",
    ],
    answerIndex: 0,
    answerText: "Implementan los algoritmos y la 'inteligencia' del negocio. Toman decisiones.",
  },
  {
    type: "tf",
    topic: "clases",
    question: "Los metodos Analizadores no solo leen o escriben datos; toman decisiones.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. No solo leen o escriben datos; toman decisiones.",
  },
  // --- Sentencia static ---
  {
    type: "mc",
    topic: "clases",
    question: "La sentencia 'static' define atributos y metodos que pueden ser accedidos:",
    options: [
      "Sin requerir una instancia",
      "Solo desde la misma clase donde se declara",
      "Solo desde subclases directas",
      "Solo con permisos de visibilidad publica",
    ],
    answerIndex: 0,
    answerText: "static: acceso sin requerir una instancia.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "Un ejemplo de uso de static es:",
    options: [
      "Math.sin() o metodos de utilidad",
      "Un constructor por defecto",
      "Un getter que accede a un atributo privado",
      "Un setter que modifica un atributo de instancia",
    ],
    answerIndex: 0,
    answerText: "Ejemplo: Math.sin() o metodos de utilidad.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "Para llamar un metodo static sin crear un objeto se escribe:",
    options: [
      "MiClase.factorial(3)",
      "new MiClase().factorial(3)",
      "this.factorial(3)",
      "super.factorial(3)",
    ],
    answerIndex: 0,
    answerText: "Uso directo: MiClase.factorial(3); sin instanciar.",
  },
  // --- Sentencia final ---
  {
    type: "mc",
    topic: "clases",
    question: "La sentencia 'final' define atributos que actuan como:",
    options: [
      "Constantes que no pueden cambiar su valor durante la ejecucion",
      "Variables de instancia que se reinician en cada objeto",
      "Metodos que no pueden ser sobrescritos por subclases",
      "Clases que no pueden ser instanciadas directamente",
    ],
    answerIndex: 0,
    answerText: "final: constantes, no pueden cambiar su valor durante la ejecucion.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "Un uso comun de 'final' es para:",
    options: [
      "Valores fijos universales como PI, configuraciones de sistema o IDs inmutables",
      "Crear objetos temporales",
      "Definir constructores",
      "Leer datos del usuario",
    ],
    answerIndex: 0,
    answerText: "Uso comun: PI, configuraciones de sistema, IDs inmutables.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "Un ejemplo de declaracion con final y static es:",
    options: [
      "public final static int UNO = 1;",
      "private int uno = 1;",
      "public void uno() {}",
      "final class UNO {}",
    ],
    answerIndex: 0,
    answerText: "public final static int UNO = 1; (constante estatica inmutable).",
  },
  // --- Bajo Acoplamiento ---
  {
    type: "mc",
    topic: "clases",
    question: "Los dos pilares de un Diseno Robusto son:",
    options: [
      "Bajo Acoplamiento y Alta Cohesion",
      "Herencia y Polimorfismo",
      "Abstraccion y Encapsulamiento",
      "Public y Private",
    ],
    answerIndex: 0,
    answerText: "Bajo Acoplamiento (Independencia) y Alta Cohesion (Enfoque).",
  },
  {
    type: "mc",
    topic: "clases",
    question: "Bajo Acoplamiento significa que los subsistemas estan:",
    options: [
      "Unidos de forma minima (Independencia)",
      "Fuertemente conectados",
      "Sin metodos publicos",
      "Sin atributos privados",
    ],
    answerIndex: 0,
    answerText: "Bajo Acoplamiento: subsistemas unidos de forma minima = Independencia.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "Acoplamiento equivale a:",
    options: ["Dependencia", "Cohesion", "Herencia", "Abstraccion"],
    answerIndex: 0,
    answerText: "Acoplamiento = Dependencia.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "Una clase tiene bajo acoplamiento cuando puede funcionar:",
    options: [
      "Con minimos cambios aunque otras clases del sistema cambien",
      "Solo si todas las clases estan conectadas",
      "Sin ningun metodo",
      "Solo con metodos static",
    ],
    answerIndex: 0,
    answerText: "Bajo acoplamiento: funciona con minimos cambios aunque otras clases cambien.",
  },
  {
    type: "tf",
    topic: "clases",
    question: "Si una clase cambia y las demas no se rompen, hay bajo acoplamiento.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Si una clase cambia, las demas no se rompen = bajo acoplamiento.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "En el ejemplo de acoplamiento, Alto Acoplamiento (mal diseno) es cuando:",
    options: [
      "La clase Pedido crea sus propias dependencias con 'new'",
      "La clase recibe la dependencia por parametro",
      "La clase no tiene metodos",
      "La clase usa solo atributos static",
    ],
    answerIndex: 0,
    answerText: "Alto acoplamiento: la clase Pedido crea sus propias dependencias (new ServicioNotificacion()).",
  },
  {
    type: "mc",
    topic: "clases",
    question: "En el ejemplo, Bajo Acoplamiento (buen diseno) es cuando:",
    options: [
      "La clase solo conoce lo que necesita (recibe la dependencia por parametro)",
      "La clase crea todos los objetos internamente",
      "La clase no tiene constructor",
      "La clase tiene todos los metodos static",
    ],
    answerIndex: 0,
    answerText: "Bajo acoplamiento: la clase solo conoce lo que necesita (inyeccion).",
  },
  // --- Alta Cohesion ---
  {
    type: "mc",
    topic: "clases",
    question: "Alta Cohesion significa que las propiedades y servicios de una clase son:",
    options: [
      "Consistentes con un unico proposito",
      "Lo mas variados posible",
      "Todos publicos",
      "Todos estaticos",
    ],
    answerIndex: 0,
    answerText: "Alta Cohesion: propiedades y servicios consistentes con un unico proposito.",
  },
  {
    type: "tf",
    topic: "clases",
    question: "En Alta Cohesion, la clase tiene una unica responsabilidad y sus metodos trabajan sobre los mismos datos.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Unica responsabilidad; metodos trabajan sobre los mismos datos.",
  },
  {
    type: "tf",
    topic: "clases",
    question: "En Alta Cohesion, cada metodo aporta directamente a la responsabilidad de la clase.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Cada metodo aporta directamente a esa responsabilidad.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "En el ejemplo de cohesion, Alta Cohesion (Buen Diseno) es la clase:",
    options: [
      "ConversorTemperatura (celsiusAFahrenheit, fahrenheitACelsius)",
      "Utilidades (convertirTemperatura, imprimir, generarNumero)",
      "Una clase con metodos sin relacion",
      "Una clase 'Dios' que hace demasiado",
    ],
    answerIndex: 0,
    answerText: "Alta Cohesion: ConversorTemperatura. Todos usan 'valor' y sirven para convertir.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "En el ejemplo de cohesion, Baja Cohesion (Mal Diseno) es la clase:",
    options: [
      "Utilidades (metodos sin relacion, clase 'Dios' que hace demasiado)",
      "ConversorTemperatura",
      "Una clase con un solo metodo",
      "Una clase abstracta",
    ],
    answerIndex: 0,
    answerText: "Baja Cohesion: Utilidades (metodos sin relacion, clase 'Dios').",
  },
  // --- Resumen Estructural ---
  {
    type: "mc",
    topic: "clases",
    question: "En el Resumen Estructural, el orden de la arquitectura POO es:",
    options: [
      "Paquetes -> Clases -> Visibilidad + Modificadores -> Metodos -> Calidad -> Software Robusto",
      "Clases -> Paquetes -> Metodos -> Variables",
      "Main -> Clases -> Objetos -> Herencia",
      "Import -> Package -> Public -> Void",
    ],
    answerIndex: 0,
    answerText: "Paquetes > Clases > Visibilidad + Modificadores (Static, Final) > Metodos > Calidad > Software Robusto.",
  },
  {
    type: "mc",
    topic: "clases",
    question: "En el Resumen Estructural, los tipos de Metodos son:",
    options: [
      "Constructores, Getters, Setters, Analizadores",
      "Public, Private, Protected, Default",
      "Static, Final, Abstract, Native",
      "Int, Double, String, Boolean",
    ],
    answerIndex: 0,
    answerText: "Metodos: Constructores, Getters, Setters, Analizadores.",
  },
  // --- Preguntas cortas (short) ---
  {
    type: "short",
    topic: "clases",
    question: "Que palabra clave se usa para definir un paquete en Java?",
    answerText: "package.",
    keywords: ["package"],
    minMatches: 1,
  },
  {
    type: "short",
    topic: "clases",
    question: "Como se llaman los metodos que protegen los datos internos con getters y setters?",
    answerText: "Consultores (Getters) y Modificadores (Setters).",
    keywords: ["getter", "setter"],
    minMatches: 1,
  },
  {
    type: "short",
    topic: "clases",
    question: "Que palabra clave hace que un atributo sea constante e inmutable?",
    answerText: "final.",
    keywords: ["final"],
    minMatches: 1,
  },
  {
    type: "short",
    topic: "clases",
    question: "Que palabra clave permite acceder a un metodo sin crear instancia?",
    answerText: "static.",
    keywords: ["static"],
    minMatches: 1,
  },
  {
    type: "short",
    topic: "clases",
    question: "Cuales son los dos principios de un diseno robusto?",
    answerText: "Bajo Acoplamiento y Alta Cohesion.",
    keywords: ["acoplamiento", "cohesion"],
    minMatches: 2,
  },
  // ===== T6: Encapsulamiento - Getters/Setters =====
  // --- Problema: esquema procedimental ---
  {
    type: "mc",
    topic: "encapsulamiento",
    question: "En el esquema procedimental, la proteccion de datos es:",
    options: ["Minima", "Maxima", "Moderada (depende del contexto)", "Garantizada por el compilador"],
    answerIndex: 0,
    answerText: "En el esquema procedimental, la proteccion de datos es minima.",
  },
  {
    type: "tf",
    topic: "encapsulamiento",
    question: "En el esquema procedimental, cualquier subrutina puede alterar los valores globales sin restricciones.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Acceso indiscriminado: cualquier subrutina puede alterar los valores globales.",
  },
  // --- Efecto Mariposa ---
  {
    type: "mc",
    topic: "encapsulamiento",
    question: "El 'Efecto Mariposa de un Error' muestra la secuencia:",
    options: [
      "Estado Inicial -> Error Humano -> Fallo Sistemico",
      "Fallo Sistemico -> Error Humano -> Estado Inicial",
      "Compilacion -> Ejecucion -> Resultado",
      "Diseno -> Implementacion -> Pruebas",
    ],
    answerIndex: 0,
    answerText: "Estado Inicial > Error Humano > Fallo Sistemico.",
  },
  {
    type: "tf",
    topic: "encapsulamiento",
    question: "Segun la presentacion, 'por un simple descuido de digitacion... pone a mal funcionar a toda la aplicacion'.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Un simple descuido puede poner a mal funcionar toda la aplicacion.",
  },
  // --- Objetos vulnerables ---
  {
    type: "mc",
    topic: "encapsulamiento",
    question: "En una clase mal disenada, los atributos son como:",
    options: [
      "Variables globales internas",
      "Constantes de solo lectura compartidas",
      "Metodos estaticos de clase",
      "Interfaces publicas del objeto",
    ],
    answerIndex: 0,
    answerText: "Las clases poseen atributos (variables globales internas).",
  },
  {
    type: "mc",
    topic: "encapsulamiento",
    question: "Si el acceso a los atributos no se restringe, el error es que:",
    options: [
      "Cualquier clase puede alterar el valor del atributo de otro objeto",
      "La clase no puede compilar",
      "Los metodos dejan de funcionar",
      "El objeto se elimina automaticamente",
    ],
    answerIndex: 0,
    answerText: "Permitir que cualquier clase altere el valor del atributo de otro objeto.",
  },
  {
    type: "mc",
    topic: "encapsulamiento",
    question: "Un ejemplo de acceso indebido es cuando se puede:",
    options: [
      "Acceder y modificar directamente la cedula de un Empleado",
      "Llamar a un metodo getter del objeto",
      "Crear una instancia de la clase Empleado",
      "Usar un setter para modificar el sueldo",
    ],
    answerIndex: 0,
    answerText: "Ejemplo: Acceder y modificar directamente la cedula de un Empleado.",
  },
  // --- La solucion: Encapsulamiento ---
  {
    type: "mc",
    topic: "encapsulamiento",
    question: "La solucion al problema de acceso indebido es:",
    options: [
      "Encapsulamiento",
      "Herencia",
      "Polimorfismo",
      "Abstraccion",
    ],
    answerIndex: 0,
    answerText: "La solucion: Encapsulamiento.",
  },
  {
    type: "mc",
    topic: "encapsulamiento",
    question: "El encapsulamiento hace referencia a:",
    options: [
      "Ocultar los detalles de implementacion internos del objeto a los demas",
      "Crear multiples subclases",
      "Ejecutar operaciones con el mismo nombre",
      "Definir paquetes y bibliotecas",
    ],
    answerIndex: 0,
    answerText: "Ocultar los detalles de implementacion internos del objeto a los demas.",
  },
  {
    type: "tf",
    topic: "encapsulamiento",
    question: "El encapsulamiento asegura que la informacion del objeto este segura del mundo exterior.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. Asegura que la informacion este segura del mundo exterior.",
  },
  // --- Niveles de Visibilidad ---
  {
    type: "mc",
    topic: "encapsulamiento",
    question: "El nivel de visibilidad 'Publico (public)' significa:",
    options: [
      "Visible interior y exteriormente, accesible desde cualquier clase y paquete",
      "Visible solo al interior de la clase",
      "Visible solo en el mismo paquete",
      "Visible solo desde subclases",
    ],
    answerIndex: 0,
    answerText: "Publico: visible interior y exteriormente, accesible desde cualquier clase y paquete.",
  },
  {
    type: "mc",
    topic: "encapsulamiento",
    question: "El nivel de visibilidad 'Privado (private)' significa:",
    options: [
      "Visible solo al interior de la clase donde se define",
      "Visible desde cualquier clase",
      "Visible desde subclases",
      "Visible en todo el paquete",
    ],
    answerIndex: 0,
    answerText: "Privado: visible solo al interior de la clase donde se define.",
  },
  // --- Sintaxis en Java ---
  {
    type: "mc",
    topic: "encapsulamiento",
    question: "En la sintaxis de encapsulamiento, un atributo protegido se declara como:",
    options: [
      "private String atributo;",
      "public String atributo;",
      "protected String atributo;",
      "String atributo;",
    ],
    answerIndex: 0,
    answerText: "private String atributo; (atributo protegido / cerrojo).",
  },
  {
    type: "mc",
    topic: "encapsulamiento",
    question: "Un metodo accesible (puerta) se declara como:",
    options: [
      "public void metodo() { // logica interna }",
      "private void metodo() { // logica interna }",
      "void metodo() { // logica interna }",
      "static void metodo() { // logica interna }",
    ],
    answerIndex: 0,
    answerText: "public void metodo(): metodo accesible (puerta).",
  },
  {
    type: "tf",
    topic: "encapsulamiento",
    question: "No es posible definir una clase con nivel de visibilidad privado.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. No es posible definir una clase con nivel de visibilidad privado.",
  },
  // --- El Compilador como Guardian ---
  {
    type: "mc",
    topic: "encapsulamiento",
    question: "Si intentamos hacer e1.apellido = 'Perez Sosa' y apellido es private, ocurre:",
    options: [
      "Error de compilacion: apellido has private access in Empleado",
      "Se modifica el valor sin problemas",
      "Se ignora la asignacion",
      "Se lanza una excepcion en tiempo de ejecucion",
    ],
    answerIndex: 0,
    answerText: "Error de compilacion. Java impide la ejecucion: no se puede modificar un atributo privado.",
  },
  {
    type: "tf",
    topic: "encapsulamiento",
    question: "Java actua como 'guardian' impidiendo la ejecucion si se intenta acceder a un atributo privado desde fuera.",
    options: ["Verdadero", "Falso"],
    answerIndex: 0,
    answerText: "Verdadero. El compilador impide modificar el valor de un atributo privado desde fuera.",
  },
  // --- Getters y Setters ---
  {
    type: "mc",
    topic: "encapsulamiento",
    question: "Si los atributos son privados, usamos metodos publicos como:",
    options: ["Puertas (Getters y Setters)", "Metodos estaticos", "Constructores adicionales", "Interfaces de herencia"],
    answerIndex: 0,
    answerText: "Si son privados, usamos metodos publicos como puertas (Getters y Setters).",
  },
  {
    type: "mc",
    topic: "encapsulamiento",
    question: "Los Metodos Accesores (Get) permiten:",
    options: [
      "Obtener el valor (Lectura)",
      "Establecer el valor (Escritura)",
      "Inicializar el objeto",
      "Eliminar el atributo",
    ],
    answerIndex: 0,
    answerText: "Metodos Accesores (Get): Permiten obtener el valor (Lectura).",
  },
  {
    type: "mc",
    topic: "encapsulamiento",
    question: "Los Metodos Modificadores (Set) permiten:",
    options: [
      "Establecer el valor (Escritura)",
      "Obtener el valor (Lectura)",
      "Compilar la clase",
      "Definir el paquete",
    ],
    answerIndex: 0,
    answerText: "Metodos Modificadores (Set): Permiten establecer el valor (Escritura).",
  },
  // --- Clase Empleado ---
  {
    type: "mc",
    topic: "encapsulamiento",
    question: "En la clase Empleado, los atributos 'cedula' y 'sueldoXHora' representan:",
    options: [
      "Estado (Privado)",
      "Comportamiento (Publico)",
      "Constantes del sistema (Final)",
      "Metodos de clase (Static)",
    ],
  },
  {
    type: "mc",
    topic: "encapsulamiento",
    question: "En la clase Empleado, getCedula() y setSueldoXHora() representan:",
    options: [
      "Comportamiento (Publico)",
      "Estado (Privado)",
      "Constantes (Final)",
      "Paquetes (Package)",
    ],
    answerIndex: 0,
    answerText: "Los metodos publicos getCedula() y setSueldoXHora() = Comportamiento (Publico).",
  },
  {
    type: "mc",
    topic: "encapsulamiento",
    question: "En la clase Empleado, getCedula() retorna:",
    options: [
      "return cedula; (el valor del atributo privado)",
      "void (no retorna nada)",
      "Un nuevo objeto Empleado",
      "El nombre de la clase",
    ],
    answerIndex: 0,
    answerText: "public String getCedula() { return cedula; }",
  },
  {
    type: "mc",
    topic: "encapsulamiento",
    question: "En la clase Empleado, setSueldoXHora(double sueldo) hace:",
    options: [
      "this.sueldoXHora = sueldo; (asigna el valor al atributo privado)",
      "Retorna el sueldo",
      "Elimina el atributo",
      "Crea un nuevo empleado",
    ],
    answerIndex: 0,
    answerText: "public void setSueldoXHora(double sueldo) { this.sueldoXHora = sueldo; }",
  },
  // --- Tres pilares del encapsulamiento ---
  {
    type: "mc",
    topic: "encapsulamiento",
    question: "Los tres pilares del Encapsulamiento son:",
    options: [
      "Seguridad, Mantenimiento y Modularidad",
      "Abstraccion, Herencia y Polimorfismo",
      "Public, Private y Protected",
      "Ocultacion, Acceso Controlado e Interfaz Publica",
    ],
    answerIndex: 0,
    answerText: "Seguridad, Mantenimiento y Modularidad.",
  },
  {
    type: "mc",
    topic: "encapsulamiento",
    question: "El pilar de 'Seguridad' en encapsulamiento significa:",
    options: [
      "Proteccion de datos contra modificaciones no autorizadas o erroneas",
      "Capacidad de cambiar la implementacion interna",
      "Interaccion a traves de servicios definidos",
      "Crear multiples instancias",
    ],
    answerIndex: 0,
    answerText: "Seguridad: Proteccion de datos contra modificaciones no autorizadas o erroneas.",
  },
  {
    type: "mc",
    topic: "encapsulamiento",
    question: "El pilar de 'Mantenimiento' en encapsulamiento significa:",
    options: [
      "Capacidad de cambiar la implementacion interna sin romper el codigo externo (Desacoplamiento)",
      "Proteccion contra modificaciones no autorizadas",
      "Interaccion a traves de servicios",
      "Herencia jerarquica",
    ],
    answerIndex: 0,
    answerText: "Mantenimiento: Cambiar la implementacion interna sin romper el codigo externo (Desacoplamiento).",
  },
  {
    type: "mc",
    topic: "encapsulamiento",
    question: "El pilar de 'Modularidad' en encapsulamiento significa:",
    options: [
      "Los componentes interactuan a traves de servicios definidos, no de datos crudos",
      "Proteccion contra modificaciones no autorizadas",
      "Capacidad de cambiar la implementacion",
      "Crear variables globales",
    ],
    answerIndex: 0,
    answerText: "Modularidad: Los componentes interactuan a traves de servicios definidos, no de datos crudos.",
  },
  // --- Preguntas cortas (short) ---
  {
    type: "short",
    topic: "encapsulamiento",
    question: "Cual es la solucion al problema de acceso indebido a los atributos?",
    answerText: "Encapsulamiento.",
    keywords: ["encapsulamiento"],
    minMatches: 1,
  },
  {
    type: "short",
    topic: "encapsulamiento",
    question: "Como se llaman los metodos que permiten leer un atributo privado?",
    answerText: "Getters (Accesores).",
    keywords: ["getter", "accesor"],
    minMatches: 1,
  },
  {
    type: "short",
    topic: "encapsulamiento",
    question: "Como se llaman los metodos que permiten modificar un atributo privado?",
    answerText: "Setters (Modificadores).",
    keywords: ["setter", "modificador"],
    minMatches: 1,
  },
  {
    type: "short",
    topic: "encapsulamiento",
    question: "Cuales son los tres pilares del encapsulamiento?",
    answerText: "Seguridad, Mantenimiento y Modularidad.",
    keywords: ["seguridad", "mantenimiento", "modularidad"],
    minMatches: 3,
  },
];

const TOPIC_LABELS = {
  all: "Todos los temas",
  introduccion: "T1: Introduccion a POO",
  java: "T2: Java + NetBeans (Lab)",
  fases: "T3: Fases + UML (Clase 01)",
  pilares: "T4: Pilares de la POO",
  clases: "T5: Clases y Metodos en Java",
  encapsulamiento: "T6: Encapsulamiento - Getters/Setters",
};

const TOPIC_ORDER = ["all", "introduccion", "java", "fases", "pilares", "clases", "encapsulamiento"];

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const shortContainer = document.getElementById("short-container");
const shortAnswer = document.getElementById("short-answer");
const feedback = document.getElementById("feedback");
const countLabel = document.getElementById("question-count");
const progressFill = document.getElementById("progress-fill");
const topicTitle = document.getElementById("topic-title");
const topicSelect = document.getElementById("topic-select");
const shuffleButton = document.getElementById("shuffle-btn");
const checkButton = document.getElementById("check-btn");
const showButton = document.getElementById("show-btn");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const quizApp = document.getElementById("quiz-app");
const quizBody = document.getElementById("quiz-body");
const finalScreen = document.getElementById("final-screen");
const reviewButton = document.getElementById("review-btn");
const statsTotal = document.getElementById("stats-total");
const statsAnswered = document.getElementById("stats-answered");
const statsCorrect = document.getElementById("stats-correct");
const statsIncorrect = document.getElementById("stats-incorrect");
const statsUnanswered = document.getElementById("stats-unanswered");
const statsScore = document.getElementById("stats-score");
const statsAccuracyAnswered = document.getElementById("stats-accuracy-answered");
const statsAccuracy = document.getElementById("stats-accuracy");

const segCorrect = document.getElementById("seg-correct");
const segIncorrect = document.getElementById("seg-incorrect");
const segUnanswered = document.getElementById("seg-unanswered");

const topicStats = document.getElementById("topic-stats");
const topicReco = document.getElementById("topic-reco");

let currentIndex = 0;
let currentQuestionIndex = 0;
let currentTopic = "introduccion";
let filteredIndices = [];
let isFinalShown = false;
const userAnswers = Array.from({ length: quizData.length }, () => ({
  value: null,
  isCorrect: null,
  checked: false,
}));

function showFinalScreen() {
  isFinalShown = true;
  updateStats();

  quizApp.classList.add("hidden");
  finalScreen.classList.remove("hidden");
  hideShortAnswer();

  finalScreen.scrollIntoView({ behavior: "smooth", block: "start" });
}

function hideFinalScreen() {
  isFinalShown = false;
  finalScreen.classList.add("hidden");
  quizApp.classList.remove("hidden");
  quizApp.scrollIntoView({ behavior: "smooth", block: "start" });
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildOptions(question, savedValue, questionIndex) {
  optionsContainer.innerHTML = "";
  const groupName = "answer";

  question.options.forEach((option, index) => {
    const optionId = `option-${index}`;
    const wrapper = document.createElement("label");
    wrapper.className = "option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = groupName;
    input.id = optionId;
    input.value = index;
    if (savedValue !== null && Number(savedValue) === index) {
      input.checked = true;
    }

    const text = document.createElement("span");
    text.textContent = option;

    input.addEventListener("change", () => {
      userAnswers[questionIndex].value = index;
      userAnswers[questionIndex].isCorrect = null;
      userAnswers[questionIndex].checked = false;
      feedback.textContent = "";
      feedback.className = "feedback";
      updateStats();
    });

    wrapper.appendChild(input);
    wrapper.appendChild(text);
    optionsContainer.appendChild(wrapper);
  });
}

function showShortAnswer(savedValue) {
  shortContainer.classList.remove("hidden");
  shortAnswer.value = savedValue || "";
}

function hideShortAnswer() {
  shortContainer.classList.add("hidden");
  shortAnswer.value = "";
}

function updateProgress() {
  const total = filteredIndices.length;
  const index = currentIndex + 1;
  countLabel.textContent = `${index} / ${total}`;
  progressFill.style.width = `${(index / total) * 100}%`;
}

function buildTopicOptions() {
  const topicsInData = new Set(quizData.map((item) => item.topic));
  const orderedTopics = TOPIC_ORDER.filter((topic) =>
    topic === "all" ? true : topicsInData.has(topic)
  );

  topicSelect.innerHTML = "";
  orderedTopics.forEach((topic) => {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = TOPIC_LABELS[topic] || topic;
    topicSelect.appendChild(option);
  });

  if (!orderedTopics.includes(currentTopic)) {
    currentTopic = orderedTopics.find((t) => t !== "all") || orderedTopics[0] || "introduccion";
  }

  topicSelect.value = currentTopic;
  updateTopicTitle();
}

function updateTopicTitle() {
  topicTitle.textContent = TOPIC_LABELS[currentTopic] || "Tema";
}

function shuffleIndices(indices) {
  for (let i = indices.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
}

function buildFilteredIndices() {
  if (currentTopic === "all") {
    filteredIndices = quizData.map((_, index) => index);
    return;
  }

  filteredIndices = quizData
    .map((item, index) => (item.topic === currentTopic ? index : null))
    .filter((index) => index !== null);

  if (filteredIndices.length === 0) {
    filteredIndices = quizData.map((_, index) => index);
  }
}

function showFeedback(isCorrect, correctAnswer, showOnly = false) {
  if (showOnly) {
    feedback.textContent = `Respuesta correcta: ${correctAnswer}`;
    feedback.className = "feedback";
    return;
  }

  if (isCorrect) {
    feedback.textContent = `Correcta. ${correctAnswer}`;
    feedback.className = "feedback correct";
  } else {
    feedback.textContent = `Incorrecta. Respuesta correcta: ${correctAnswer}`;
    feedback.className = "feedback incorrect";
  }
}

function evaluateShortAnswer(question, userValue) {
  if (!userValue) {
    return false;
  }

  const normalized = normalizeText(userValue);
  let matches = 0;

  question.keywords.forEach((keyword) => {
    const normalizedKeyword = normalizeText(keyword);
    if (normalized.includes(normalizedKeyword)) {
      matches += 1;
    }
  });

  return matches >= (question.minMatches || 1);
}

function renderQuestion() {
  currentQuestionIndex = filteredIndices[currentIndex];
  const question = quizData[currentQuestionIndex];
  const savedValue = userAnswers[currentQuestionIndex].value;

  questionText.textContent = question.question;
  feedback.textContent = "";
  feedback.className = "feedback";

  if (question.type === "short") {
    optionsContainer.innerHTML = "";
    showShortAnswer(savedValue);
  } else {
    hideShortAnswer();
    buildOptions(question, savedValue, currentQuestionIndex);
  }

  if (savedValue !== null && savedValue !== undefined && question.type !== "short") {
    if (userAnswers[currentQuestionIndex].checked) {
      const isCorrect = Number(savedValue) === question.answerIndex;
      showFeedback(isCorrect, question.answerText);
    }
  }

  const isLast = currentIndex === filteredIndices.length - 1;

  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = false;
  nextButton.textContent = isLast ? "Finalizar" : "Siguiente";

  updateProgress();
  updateStats();
  animateQuestion();
}

function updateStats() {
  const indices = filteredIndices.length ? filteredIndices : quizData.map((_, i) => i);
  const total = indices.length;
  let answered = 0;
  let correct = 0;

  indices.forEach((index) => {
    const entry = userAnswers[index];
    if (entry.value !== null && entry.value !== undefined && entry.checked) {
      answered += 1;
      if (entry.isCorrect) {
        correct += 1;
      }
    }
  });

  const incorrect = answered - correct;
  const unanswered = total - answered;
  const accuracyTotal = total > 0 ? Math.round((correct / total) * 100) : 0;
  const accuracyAnswered = answered > 0 ? Math.round((correct / answered) * 100) : 0;

  statsTotal.textContent = total;
  statsAnswered.textContent = answered;
  statsCorrect.textContent = correct;
  statsIncorrect.textContent = incorrect;
  statsUnanswered.textContent = unanswered;
  statsScore.textContent = `${correct} / ${total}`;
  statsAccuracyAnswered.textContent = `${accuracyAnswered}%`;
  statsAccuracy.textContent = `${accuracyTotal}%`;

  if (total > 0) {
    const correctWidth = (correct / total) * 100;
    const incorrectWidth = (incorrect / total) * 100;
    const unansweredWidth = (unanswered / total) * 100;

    segCorrect.style.width = `${correctWidth}%`;
    segIncorrect.style.width = `${incorrectWidth}%`;
    segUnanswered.style.width = `${unansweredWidth}%`;

    segCorrect.title = `Correctas: ${correct}`;
    segIncorrect.title = `Incorrectas: ${incorrect}`;
    segUnanswered.title = `Sin responder: ${unanswered}`;
  } else {
    segCorrect.style.width = "0";
    segIncorrect.style.width = "0";
    segUnanswered.style.width = "0";
  }

  // Per-topic breakdown (within current quiz scope)
  const perTopic = new Map();
  indices.forEach((index) => {
    const item = quizData[index];
    const topic = item.topic || "(sin tema)";
    if (!perTopic.has(topic)) {
      perTopic.set(topic, { total: 0, answered: 0, correct: 0 });
    }
    const stats = perTopic.get(topic);
    stats.total += 1;

    const entry = userAnswers[index];
    if (entry.value !== null && entry.value !== undefined && entry.checked) {
      stats.answered += 1;
      if (entry.isCorrect) {
        stats.correct += 1;
      }
    }
  });

  const topicEntries = Array.from(perTopic.entries())
    .map(([topic, s]) => {
      const incorrectLocal = s.answered - s.correct;
      const unansweredLocal = s.total - s.answered;
      const scoreRate = s.total > 0 ? s.correct / s.total : 0;
      const accuracyLocal = s.total > 0 ? Math.round(scoreRate * 100) : 0;
      return {
        topic,
        label: TOPIC_LABELS[topic] || topic,
        total: s.total,
        correct: s.correct,
        incorrect: incorrectLocal,
        unanswered: unansweredLocal,
        accuracy: accuracyLocal,
        scoreRate,
      };
    })
    .sort((a, b) => a.label.localeCompare(b.label, "es"));

  let weakest = null;
  for (const entry of topicEntries) {
    if (!weakest) {
      weakest = entry;
      continue;
    }
    if (entry.scoreRate < weakest.scoreRate) {
      weakest = entry;
    } else if (entry.scoreRate === weakest.scoreRate && entry.total > weakest.total) {
      weakest = entry;
    }
  }

  if (topicStats) {
    topicStats.innerHTML = "";
    topicEntries.forEach((t) => {
      const row = document.createElement("div");
      row.className = "topic-summary-row";
      if (weakest && weakest.topic === t.topic && topicEntries.length > 1) {
        row.classList.add("badge");
      }

      const cTopic = document.createElement("div");
      cTopic.className = "cell topic";
      cTopic.textContent = t.label;

      const cOk = document.createElement("div");
      cOk.className = "cell";
      cOk.textContent = String(t.correct);

      const cBad = document.createElement("div");
      cBad.className = "cell";
      cBad.textContent = String(t.incorrect);

      const cNa = document.createElement("div");
      cNa.className = "cell";
      cNa.textContent = String(t.unanswered);

      const cPct = document.createElement("div");
      cPct.className = "cell";
      cPct.textContent = `${t.accuracy}%`;

      row.appendChild(cTopic);
      row.appendChild(cOk);
      row.appendChild(cBad);
      row.appendChild(cNa);
      row.appendChild(cPct);
      topicStats.appendChild(row);
    });
  }

  if (topicReco) {
    if (!weakest) {
      topicReco.textContent = "";
    } else if (topicEntries.length === 1) {
      topicReco.textContent = `Tema a reforzar: ${weakest.label} (tuviste ${weakest.accuracy}% en este tema).`;
    } else {
      topicReco.textContent = `Tema a reforzar: ${weakest.label} (es donde tuviste menor rendimiento: ${weakest.accuracy}%).`;
    }
  }

  if (!isFinalShown && answered === total && total > 0) {
    showFinalScreen();
  }
}

function checkAnswer() {
  const question = quizData[currentQuestionIndex];
  const userValue = userAnswers[currentQuestionIndex].value;

  if (question.type === "short") {
    if (!userValue) {
      feedback.textContent = "Escribe tu respuesta antes de revisar.";
      feedback.className = "feedback warning";
      return;
    }
    const isCorrect = evaluateShortAnswer(question, userValue);
    userAnswers[currentQuestionIndex].isCorrect = isCorrect;
    userAnswers[currentQuestionIndex].checked = true;
    showFeedback(isCorrect, question.answerText);
    updateStats();
    return;
  }

  if (userValue === null || userValue === undefined) {
    feedback.textContent = "Selecciona una opcion antes de revisar.";
    feedback.className = "feedback warning";
    return;
  }

  const isCorrect = Number(userValue) === question.answerIndex;
  userAnswers[currentQuestionIndex].isCorrect = isCorrect;
  userAnswers[currentQuestionIndex].checked = true;
  showFeedback(isCorrect, question.answerText);
  updateStats();
}

function showCorrectAnswer() {
  const question = quizData[currentQuestionIndex];
  showFeedback(false, question.answerText, true);
}

function animateQuestion() {
  questionText.classList.remove("fade-in");
  void questionText.offsetWidth;
  questionText.classList.add("fade-in");
}

checkButton.addEventListener("click", checkAnswer);
showButton.addEventListener("click", showCorrectAnswer);
shuffleButton.addEventListener("click", () => {
  if (isFinalShown) {
    hideFinalScreen();
  }
  if (filteredIndices.length < 2) {
    return;
  }

  shuffleIndices(filteredIndices);
  currentIndex = 0;
  renderQuestion();
});
shortAnswer.addEventListener("input", () => {
  const value = shortAnswer.value;
  userAnswers[currentQuestionIndex].value = value.trim() ? value : null;
  userAnswers[currentQuestionIndex].checked = false;
  userAnswers[currentQuestionIndex].isCorrect = null;
  feedback.textContent = "";
  feedback.className = "feedback";
  updateStats();
});
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    renderQuestion();
  }
});
nextButton.addEventListener("click", () => {
  if (isFinalShown) {
    return;
  }

  const isLast = currentIndex === filteredIndices.length - 1;
  if (isLast) {
    showFinalScreen();
    return;
  }

  currentIndex += 1;
  renderQuestion();
});
reviewButton.addEventListener("click", () => {
  hideFinalScreen();
});

topicSelect.addEventListener("change", (event) => {
  if (isFinalShown) {
    hideFinalScreen();
  }
  currentTopic = event.target.value;
  updateTopicTitle();
  currentIndex = 0;
  buildFilteredIndices();
  renderQuestion();
});

buildTopicOptions();
buildFilteredIndices();
renderQuestion();
