//base de datos local de preguntas
const bd_juego = [
    {
        id:0,
        pregunta:"Elige la función de la lengua que predomina en el siguiente ejemplo: 'Luisa, ¿puedes limpiar la mesa y lavar los trastes por favor?'",
        op0:"A) Metalingüística",
        op1:"B) Sintomática",
        op2:"C) Referencial",
        op3:"D) Apelativa",
        correcta:"3"
    },
    {
        id:1,
        pregunta:"Identifica el enunciado en el que la lengua está usada en su función poética",
        op0:"A) A las tres en punto moriría un transeúnte",
        op1:"B) Chopin soñó que estaba muerto en el lago",
        op2:"C) Las nieves del tiempo platearon mi sien",
        op3:"D) Era apenas una niña cuando la vi por primera vez",
        correcta:"0"
    },
    {
        id:2,
        pregunta:"¿Qué modo discursivo predomina en el siguiente párrafo?: 'El alcoholismo es una enfermedad progresiva y crónica, que presenta sí­ntomas que van desde el malestar hasta el dolor intenso. Depende de varios factores, principalmente de la predisposición genética y de la influencia del medio ambiente familiar y social. Pese a que afecta todo el cuerpo y provoca una variedad de problemas médicos, los principales sí­ntomas se manifiestan en el sistema nervioso. A través de este, en especial del cerebro, la adicción produce diversos trastornos en el pensamiento, las emociones y la conducta del enfermo.'",
        op0:"A) Instrucción",
        op1:"B) Explicación",
        op2:"C) Enumeración",
        op3:"D) Descripción",
        correcta:"3"
    },
    {
        id:3,
        pregunta:"¿Qué modo discursivo predomina en el siguiente ejemplo?: 'El libro comprende tres capí­tulos, con cinco subtemas cada uno. Sin embargo, no tiene consistencia. Esto se corrobora, en primer lugar, porque carece de un apartado de conclusiones. En segundo lugar, no cita las fuentes bibliográficas en las que se apoya. Esto hace que el texto sea de poco fiar.'",
        op0:"A) Argumentación",
        op1:"B) Enumeración",
        op2:"C) Descripción",
        op3:"D) Narración",
        correcta:"0"
    },
    {
        id:4,
        pregunta:"Entre las décadas de los ochenta y los noventa existe una relación de",
        op0:"A) Complementación.",
        op1:"B) Integración.",
        op2:"C) Continuación.",
        op3:"D) Oposición.",
        correcta:"2",
        a:"recuerdos.html"
    },
    {
        id:5,
        pregunta:"En la década de los noventa",
        op0:"A) Son importantes los programas de televisión.",
        op1:"B) Se ha dado un progreso espectacular.",
        op2:"C) Se ha dado el retorno hacia la irracionalidad.",
        op3:"D) Han disminuido las desigualdades sociales.",
        correcta:"2",
        a:"recuerdos.html"
    },
    {
        id:6,
        pregunta:"La comparación entre los noventa y el último capí­tulo de un programa de televisión se debe a que ambos",
        op0:"A) Contienen la evolución del progreso",
        op1:"B) Auguran el germen de un espacio nuevo.",
        op2:"C) Cumplen la ratificación del milenio.",
        op3:"D) Repiten los fragmentos más reconocidos.",
        correcta:"3",
        a:"recuerdos.html"
    },
    {
        id:7,
        pregunta:"Los documentos del ritual del Nayar son",
        op0:"A) Reseñas y documentales.",
        op1:"B) Documentales y fotografí­as.",
        op2:"C) Reseñas y fotografí­as.",
        op3:"D) Documentales y artí­culos.",
        correcta:"1",
        a:"unritualsolarprehispanica.html"
    },
    {
        id:8,
        pregunta:"Los borrados para realizar la Judea utilizan",
        op0:"A) Olote, varas de otate, sables de madera y cúpula.",
        op1:"B) Olote, varas de otate, sables de madera y máscaras.",
        op2:"C) Tocados, olote, varas de otate, máscaras y sables de madera.",
        op3:"D) Varas de otate, olote, sables de madera y peyote.",
        correcta:"3",
        a:"unritualsolarprehispanica.html"
    },
    {
        id:9,
        pregunta:"Al ser capturado el niño los demonios se autodestruyen puesto que",
        op0:"A) Deben acabarse entre ellos mismos.",
        op1:"B) Quieren dominar a los pobladores.",
        op2:"C) No hay un orden superior que los controle.",
        op3:"D) Representan las fuerzas del inframundo.",
        correcta:"2",
        a:"unritualsolarprehispanica.html"
    },
    {
        id:10,
        pregunta:"Hay un SUJETO TíCITO O IMPLíCITO en:",
        op0:"A) Somos nada frente a la muerte infausta.",
        op1:"B) Feliz aquél que busca a Dios en sí­ mismo.",
        op2:"C) ¡Señor!, tiembla mi alma ante tu grandeza.",
        op3:"D) Yo he subido más alto, mucho más alto.",
        correcta:"0"
    },
    {
        id:11,
        pregunta:"Elige la opción que contiene sujeto y predicado.",
        op0:"A) Es útil la computadora.",
        op1:"B) Las pirámides de Teotihuacán.",
        op2:"C) Hoy, mañana y siempre.",
        op3:"D) Las cuentas del gran capitán.",
        correcta:"0"
    },
    {
        id:12,
        pregunta:"Existe un error de concordancia en:",
        op0:"A) Los checoslovacos combatí­an en las calles y se oponí­an a la dictadura.",
        op1:"B) Un sinnúmero de feligreses acudió a la Villa.",
        op2:"C) La creación de muchas cosas no se tení­an contempladas.",
        op3:"D) El constante flujo y reflujo de divisas provocó alarma.",
        correcta:"2"
    },
    {
        id:13,
        pregunta:"Elige el párrafo con la mejor redacción.",
        op0:"A) En este orden, la posibilidad y el origen del conocimiento son algunos problemas a considerar. Presenta el conocimiento, para iniciar, así­ una vertiente filosófica que no podemos soslayar si queremos profundizar en el tema.",
        op1:"B) Así­, la posibilidad y el origen del conocimiento son algunos problemas a considerar que presenta el conocimiento. Para iniciar, una vertiente filosófica que no podemos soslayar si queremos profundizar en el tema.",
        op2:"C) El conocimiento, en el inicio, ofrece una vertiente filosófica que no podemos soslayar si queremos profundizar en el tema. De modo que la posibilidad y el origen del conocimiento son algunos problemas a considerar.",
        op3:"D) El conocimiento, en principio, ofrece una vertiente filosófica que no podemos soslayar si queremos profundizar en el tema. En este orden, la posibilidad y el origen del conocimiento son algunos problemas clave.",
        correcta:"3"
    },
    {
        id:14,
        pregunta:"De acuerdo con la relación d: ANALOGíA entre las palabras e: letras mayúsculas, señala la opció: que presenta una relación semejant: en la pregunta siguiente: BIEN - VALOR",
        op0:"A) Gula - pecado",
        op1:"B) Verdad - escándalo",
        op2:"C) Poder - orgullo",
        op3:"D) Sereno - serenidad",
        correcta:"0"
    },
    {
        id:15,
        pregunta:"Sinónimo de AVATAR",
        op0:"A) Destino",
        op1:"B) Cambio",
        op2:"C) Tragedia",
        op3:"D) Aflicción",
        correcta:"1"
    },
    {
        id:16,
        pregunta:"Elige la opción con la ortografí­a correcta.",
        op0:"A) El rebaño avanza sin cesar y ellos comienzan a rezagarse.",
        op1:"B) El rebaño avanza sin cesar y ellos comiensan a resagarze.",
        op2:"C) El rebaño avanza sin cezar y ellos comienzan a rezagarce.",
        op3:"D) El rebaño avanza sin cesar y ellos comienzan a resagarse.",
        correcta:"0"
    },
    {
        id:17,
        pregunta:"Elige la opción que presenta el párrafo con la puntuación apropiada.",
        op0:"A) El Coronel Juan Morales, se apodera de un cañón montado en uno de los ángulos, y aprovechándose de la confusión de los defensores, introduce a la fortaleza un buen número de soldados. Vuelve los cañones hacia el interior. Y empieza a disparar. Los tejanos se retiran al convento y a la iglesia, protegiéndose en barricadas de sacos de arena.",
        op1:"B) El Coronel Juan Morales se apodera de un cañón montado, en uno de los ángulos y aprovechándose, de la confusión de los defensores, introduce a la fortaleza. Un buen número de soldados. Vuelve los cañones hacia el interior y empieza a disparar. Los tejanos se retiran al convento y a la iglesia, protegiéndose en barricadas de sacos de arena.",
        op2:"C) El Coronel Juan Morales se apodera de un cañón montado en uno de los ángulos y aprovechándose de la confusión de los defensores, introduce a la fortaleza un buen número de soldados. Vuelve los cañones hacia el interior y empieza a disparar. Los tejanos se retiran al convento y a la iglesia, protegiéndose en barricadas de sacos de arena.",
        op3:"D) El Coronel Juan Morales se apodera de un cañón, montado en uno de los ángulos y aprovechándose de la confusión de los defensores, introduce a la fortaleza, un buen número de soldados. Vuelve los cañones hacia el interior y empieza a disparar. Los tejanos se retiran, al convento y a la iglesia. Protegiéndose en barricadas de sacos de arena.",
        correcta:"2"
    },
    {
        id:18,
        pregunta:"Al simplificar la expresión algebraica -3x - [-2(4x - 3) - (9 - x)] se obtiene",
        op0:"A) 6x + 3",
        op1:"B) 4x + 3",
        op2:"C) 10x + 3",
        op3:"D) 6x + 12",
        correcta:"1"
    },
    {
        id:19,
        pregunta:"Factoriza la siguiente expresión n^6 -3n^3 18",
        op0:"A) (n^3 + 3)(n^3 - 6)",
        op1:"B) (n^3 - 3)(n^3 + 6)",
        op2:"C) (n^2 + 3)(n^3 - 6)",
        op3:"D) (n^3 + 3)(n^3 + 6)",
        correcta:"0"
    },
    {
        id:20,
        pregunta:"Los valores que satisfacen la ecuación x^2 + 3x + 2 = 0, son",
        op0:"A) 1 y 2",
        op1:"B) 2 y 3",
        op2:"C) -1 y -2",
        op3:"D) -3 y 2",
        correcta:"2"
    },
    {
        id:21,
        pregunta:"Si resuelves la desigualdad -2x + 6 ≥ 16 obtienes",
        op0:"A) x < 5",
        op1:"B) x ≤ 5",
        op2:"C) x ≤ -5",
        op3:"D) x = 5",
        correcta:"2"
    },
    {
        id:22,
        pregunta:"La solución al sistema de ecuaciones",
        op0:"A) (-2, 3, 5)",
        op1:"B) (2, 4, 5)",
        op2:"C) (-2, 4, 5)",
        op3:"D)(2, 3, -5)",
        correcta:"2",
        img:"img/ecuaciones.png"
    },
    {
        id:23,
        pregunta:"Si S = {1, 2} y Q = {2, 3, 4}, ¿Cuál es el rango de la función f: S - Q definida por f(x) = x + 1?",
        op0:"A) {2, 3}",
        op1:"B) {2, 4}",
        op2:"C) {1, 3}",
        op3:"D) {2, 3, 4}",
        correcta:"0"
    },
    {
        id:24,
        pregunta:"¿Cuál es la longitud del lado 'q' en el siguiente triángulo?",
        op0:"A) -6",
        op1:"B) 6",
        op2:"C) 9",
        op3:"D) 7",
        correcta:"1",
        img:"img/angulo.png"
    },
    {
        id:25,
        pregunta:"Para encontrar la medida de los ángulos internos de un triángulo oblicuángulo cuando se conocen las medidas de sus lados se utiliza",
        op0:"A) La ley de los cosenos.",
        op1:"B) La ley de los senos.",
        op2:"C) El teorema de Pitágoras.",
        op3:"D) La razón trigonométrica tangente.",
        correcta:"0"
    },
    {
        id:26,
        pregunta:"Calcula la distancia del punto A (6, 1) al punto B (1, 1)",
        op0:"A) 7",
        op1:"B) 6",
        op2:"C) 5",
        op3:"D) 4",
        correcta:"2"
    },
    {
        id:27,
        pregunta:"Encuentra las coordenadas del punto medio entre los puntos (0, 2) y (4, 6).",
        op0:"A) (2, 3)",
        op1:"B) (2, 4)",
        op2:"C) (1, 4)",
        op3:"D) (3, 3)",
        correcta:"1"
    },
    {
        id:28,
        pregunta:"La pendiente de la recta 3x + 6y - 1 = 0 es",
        op0:"A) 3",
        op1:"B) -1/2",
        op2:"C) 1/2",
        op3:"D) 3",
        correcta:"1"
    },
    {
        id:29,
        pregunta:"La ecuación ordinaria de la mediana del siguiente triángulo, trazada desde el vértice A es",
        op0:"A) y = -2x + 3",
        op1:"B) y = -x + 3",
        op2:"C) y = -1/4x + 3",
        op3:"D) y = 1/2x",
        correcta:"1",
        img:"img/ab.png"
    },
    {
        id:30,
        pregunta:"La ecuación ordinaria de la mediatriz del siguiente triángulo trazada desde el lado AB es",
        op0:"A) y = -3x + 6",
        op1:"B) y = -3x +7",
        op2:"C) y = -2x +5",
        op3:"D) y = -2x +6",
        correcta:"2",
        img:"img/trian.png"
    },
    {
        id:31,
        pregunta:"El foco de la parábola y^2 - 8x = 0  es el punto:",
        op0:"A) (8,0)",
        op1:"B) (2,0)",
        op2:"C) (0,-2)",
        op3:"D) (0,-8)",
        correcta:"1"
    },
    {
        id:32,
        pregunta:"¿Cuál es la ecuación de una elipse horizontal con centro en (2, 1)?",
        op0:"A) ((x-2)^2 /64) + ((y-1)^2 /144 = 1)",
        op1:"B) ((x-2)^2 /144) + ((y-1)^2 /64 = 1)",
        op2:"C) ((x+2)^2 /144) + ((y+1)^2 /64 = 1)",
        op3:"D) ((x+2)^2 /16) + ((y+1)^2 /25 = 1)",
        correcta:"1"
    },
    {
        id:33,
        pregunta:"La ecuación de la hipérbola centrada en el origen con lado recto 10 y vértice V( 0, -9) es",
        op0:"A) 9x^2 -5y^2 = 405",
        op1:"B) 5y^2 -9x^2 = 405",
        op2:"C) 9x^2 -10y^2 = 90",
        op3:"D) 10x^2 -9y^2 = 90",
        correcta:"1"
    },
    {
        id:34,
        pregunta:"De las siguientes ecuaciones, ¿Cuál representa una hipérbola que pasa por el punto A(-8, 0) y B(8, 0)?",
        op0:"A) x^2 -64y^2 -8 = 0",
        op1:"B) x^2 -8y^2 -62 = 0",
        op2:"C) x^2 -y^2 -8x -12y -1 = 0",
        op3:"D) x^2 -64y^2 -64 = 0",
        correcta:"3"
    },
    {
        id:35,
        pregunta:"Si en la ecuación Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0 el discriminante B^2 -4AC es positivo, entonces la ecuación representa una:",
        op0:"A) Circunferencia.",
        op1:"B) Parábola.",
        op2:"C) Elipse.",
        op3:"D) Hipérbola.",
        correcta:"3"
    },
    {
        id:36,
        pregunta:"La ecuación x^2 + 4xy + 4y^2 - 74x + 2y + 94 = 0 es una",   
        op0:"A) Circunferencia.",
        op1:"B) Parábola.",
        op2:"C) Elipse.",
        op3:"D) Hipérbola.",
        correcta:"1"
    },
    {
        id:37,
        pregunta:"El lí­mite de la función f(x) = 4 cuando x tiende a - 2, es igual a",
        op0:"A) -2",
        op1:"B) 0",
        op2:"C) 2",
        op3:"D) 4",
        correcta:"3"
    },
    {
        id:38,
        pregunta:"¿Cuál es el resultado?",
        op0:"A) -1",
        op1:"B) 0",
        op2:"C) 1",
        op3:"D) 2",
        correcta:"1",
        img:"img/limi.png"
    },
    {
        id:39,
        pregunta:"La derivada de la expresión",
        op0:"A) 2x^1/2 + 6x^1/3",
        op1:"B) x^1/2 + 2x^1/3",
        op2:"C) -x^(-1/2) - 2x^(-2/3)",
        op3:"D) 1/x^1/2 + 2/x^(2/3)",
        correcta:"3",
        img:"img/deri.png"
    },
    {
        id:40,
        pregunta:"La derivada de y = ln(x^2 + 5) es",
        op0:"A) 1/(x^2 +5)",
        op1:"B) 2x/(x+5)",
        op2:"C) 2x/(x^2 5)",
        op3:"D) 2x/(x^2+5)",
        correcta:"3"
    },
    {
        id:41,
        pregunta:"La función f(x) = x^3 -3x^2 +1 tiene un mí­nimo en el punto de abscisa",
        op0:"A) 0",
        op1:"B) 1",
        op2:"C) 2",
        op3:"D) 3",
        correcta:"2"
    },
    {
        id:42,
        pregunta:"¿Cuál es la integral definida?",
        op0:"A) 2",
        op1:"B) 3",
        op2:"C) 6",
        op3:"D) 4",
        correcta:"0",
        img:"img/inte.png"
    },
    {
        id:43,
        pregunta:"La solución de la integral indefinida es",
        op0:"A) e^(x^2 +4x +3) + C",
        op1:"B) -1/2e^(-(x^2 +4x +3)) + C",
        op2:"C) 1/2e^(-(x^2 +4x +3)) + C",
        op3:"D) 1/2e`(x^2 +4x +3) + C",
        correcta:"3",
        img:"img/defi.png"
    },
    {
        id:44,
        pregunta:"Del movimiento de un coche se obtuvo la siguiente gráfica de distancia recorrida (d) en función del tiempo empleado (t); indica las secciones donde el movimiento es uniforme, acelerado o que el objeto está en reposo.",
        op0:"A) Movimiento uniforme: II y III; movimiento acelerado: I; reposo: IV.",
        op1:"B) Movimiento uniforme: I y III; movimiento acelerado: II; reposo: IV.",
        op2:"C) Movimiento uniforme: III; movimiento acelerado: I; reposo: II y IV.",
        op3:"D) Movimiento uniforme: II; movimiento acelerado: I y III; reposo: IV.",
        correcta:"3",
        img:"img/ace.png"
    },
    {
        id:45,
        pregunta:"Estimando la aceleración de la gravedad igual a 9.8 m/s2 y despreciando la fricción del aire, calcula el tiempo requerido para que una piedra lanzada directamente hacia arriba con una velocidad inicial de 39.2 m/s alcance su punto más alto.",
        op0:"A) 4.0 s",
        op1:"B) 8.0 s",
        op2:"C) 9.8 s",
        op3:"D) 39.2 s",
        correcta:"0"
    },
    {
        id:46,
        pregunta:"Un trí­o de caballos jala una carreta en la misma dirección, la cual tiene un peso de 500 kg. Cada uno de los caballos ejerce una fuerza de 1,500 N sobre la carreta. Si no hay fricción entre la carreta y el suelo, la fuerza total con la que ésta es jalada es de ________ N.",
        op0:"A) 3",
        op1:"B) 300",
        op2:"C) 1,500",
        op3:"D) 4,500",
        correcta:"3"
    },
    {
        id:47,
        pregunta:"Sobre un cuerpo se aplicaron diferentes fuerzas en dirección horizontal y con el mismo sentido, provocando que el objeto experimentara distintas aceleraciones. Basándote en la gráfica de los resultados obtenidos y despreciando la acción ejercida por la fricción entre el objeto y la superficie de contacto, ¿Cuál es la masa del objeto?",
        op0:"A) 1.6 kg",
        op1:"B) 2.5 kg",
        op2:"C) 3.2 kg",
        op3:"D) 4.0 kg",
        correcta:"1",
        img:"img/fuerza.png"
    },
    {
        id:48,
        pregunta:"La ecuación que permite calcular la energí­a cinética de una partí­cula de masa m y velocidad v es",
        op0:"A) Ec = mv",
        op1:"B) Ec = 2mv^2",
        op2:"C) Ec = mv/2",
        op3:"D) Ec = 1/2mv^2",
        correcta:"3"
    },
    {
        id:49,
        pregunta:"Una bala de cañón de 7.0 kg se dispara verticalmente hacia arriba con una rapidez de 120 m/s. ¿Cuánta energí­a cinética tiene al salir y cuánta energí­a potencial tiene en el punto más alto de la trayectoria?",
        op0:"A) 50,400 J, 50,400 J",
        op1:"B) 420 J, 420 J",
        op2:"C) 50,400 J, cero J",
        op3:"D) 420 J, cero J",
        correcta:"0"
    },
    {
        id:50,
        pregunta:"Un sistema está en equilibrio térmico cuando",
        op0:"A) En un proceso su temperatura no varí­a.",
        op1:"B) Su temperatura es igual a la de otro sistema con el que está en contacto térmico.",
        op2:"C) Sus propiedades termodinámicas no cambian.",
        op3:"D) Su volumen y su presión permanecen constantes.",
        correcta:"1"
    },
    {
        id:51,
        pregunta:"Para convertir un valor de temperatura Celsius T a su valor equivalente en la escala Kelvin de temperaturas, se emplea la expresión",
        op0:"A) T-32 / 1.8",
        op1:"B) T + 273",
        op2:"C) T - 273",
        op3:"D) 1.8(T + 273)",
        correcta:"1"
    },
    {
        id:52,
        pregunta:"A la cantidad de calor que necesita un gramo de una sustancia para elevar su temperatura un grado Celsius, se le conoce como",
        op0:"A) Capacidad térmica.",
        op1:"B) Calor latente de fusión.",
        op2:"C) Calor latente de vaporización.",
        op3:"D) Capacidad térmica especí­fica.",
        correcta:"3"
    },
    {
        id:53,
        pregunta:"Una onda formada en una cuerda tiene una longitud de onda de 10 cm y un periodo de 2 s, ¿con qué velocidad se propaga?",
        op0:"A) 20.00 cm/s",
        op1:"B) 0.25 cm/s",
        op2:"C) 5.00 cm/s",
        op3:"D) 2.00 cm/s",
        correcta:"2"
    },
    {
        id:54,
        pregunta:"Dos ondas de la misma frecuencia pueden interferir de manera constructiva o destructiva, esto depende de",
        op0:"A) La amplitud de ambas ondas.",
        op1:"B) La fase relativa entre ambas ondas.",
        op2:"C) Que ambas ondas sean longitudinales.",
        op3:"D) Que ambas ondas sean transversales.",
        correcta:"1"
    },
    {
        id:55,
        pregunta:"La interferencia de dos ondas puede generar franjas claras y obscuras, es decir, la energí­a se distribuye fuera de ciertas áreas y dentro de otras, ello se debe a la conservación de la",
        op0:"A) Polarización.",
        op1:"B) Difracción.",
        op2:"C) Energí­a.",
        op3:"D) Longitud de onda.",
        correcta:"2"
    },
    {
        id:56,
        pregunta:"Un aislante eléctrico es un material que",
        op0:"A) No contiene ninguna corriente eléctrica.",
        op1:"B) Hace difí­cil el flujo de corriente eléctrica.",
        op2:"C) No puede ser un elemento puro quí­micamente.",
        op3:"D) Tiene más electrones que protones en su superficie.",
        correcta:"1"
    },
    {
        id:57,
        pregunta:"A una resistencia eléctrica R se aplica una diferencia de potencial V, por lo que circula por la resistencia una corriente eléctrica I. Si R y V cambian su valor al doble, ambos simultáneamente, entonces el valor de la corriente eléctrica se",
        op0:"A) Reduce a la mitad.",
        op1:"B) Mantiene sin cambio.",
        op2:"C) Incrementa al doble.",
        op3:"D) Incrementa al cuádruple.",
        correcta:"1"
    },
    {
        id:58,
        pregunta:"El í­ndice de refracción del cuarzo es 1.544. ¿Con qué velocidad se propaga la luz en él?",
        op0:"A) 194,300 Km/s",
        op1:"B) 19,430 Km/s",
        op2:"C) 1,943 Km/s",
        op3:"D) 194 Km/s",
        correcta:"0"
    },
    {
        id:59,
        pregunta:"¿En qué áreas recibió Madame Curie el premio Nobel?",
        op0:"A) Fí­sica y Biologí­a.",
        op1:"B) Medicina y Quí­mica.",
        op2:"C) Quí­mica y Biologí­a.",
        op3:"D) Fí­sica y Quí­mica.",
        correcta:"3"
    },
    {
        id:60,
        pregunta:"¿Cuál es el enunciado verdadero?",
        op0:"A) El aire es un compuesto y el cloruro de sodio es una mezcla.",
        op1:"B) El cloruro de sodio es un elemento y la plata es un compuesto.",
        op2:"C) El aire es una mezcla y la plata es un compuesto.",
        op3:"D) El cloruro de sodio es un compuesto y el aire es una mezcla.",
        correcta:"3"
    },
    {
        id:61,
        pregunta:"Las fórmulas del monóxido de carbono, hidróxido de magnesio y el sulfato de aluminio respectivamente son",
        op0:"A) CO2 - MnOH - Al2 (SO4)3",
        op1:"B) CO - Mg(OH)2 - Al2 (SO3)2",
        op2:"C) CO2 - Mn(OH)2 - AlSO4",
        op3:"D) CO - Mg(OH)2 - Al2 (SO4)3",
        correcta:"3"
    },
    {
        id:62,
        pregunta:"La cantidad de mL de HCl concentrado (37% en peso y d= 1,14 g/mL) que deberá medirse para preparar 250 mL de HCl(ac) 1,4 M es",
        op0:"A) 34.5",
        op1:"B) 30.3",
        op2:"C) 14.6",
        op3:"D) 12.6",
        correcta:"1"
    },
    {
        id:63,
        pregunta:"Al enlace que une a las moléculas de agua se le denomina",
        op0:"A) Covalente.",
        op1:"B) Iónico.",
        op2:"C) Coordinado.",
        op3:"D) Puente de hidrógeno.",
        correcta:"3"
    },
    {
        id:64,
        pregunta:"Propiedad del agua gracias a la cual un insecto puede caminar sobre ella:",
        op0:"A) Densidad.",
        op1:"B) Tensión superficial.",
        op2:"C) Polaridad de la molécula.",
        op3:"D) Formación de puentes de hidrógeno.",
        correcta:"1"
    },
    {
        id:65,
        pregunta:"La solución cuyo pH es de 2 es una sustancia:",
        op0:"A) Neutra.",
        op1:"B) Básica.",
        op2:"C) Alcalina.",
        op3:"D) Ácida.",
        correcta:"3"
    },
    {
        id:66,
        pregunta:"Los desechos producidos por hospitales y rastros que contaminan el agua se clasifican como",
        op0:"A) Fí­sicos y biológicos.",
        op1:"B) Fí­sicos y quí­micos.",
        op2:"C) Mecánicos y quí­micos.",
        op3:"D) Quí­micos y biológicos.",
        correcta:"3"
    },
    {
        id:67,
        pregunta:"En el aire que respiramos, el elemento gaseoso que se encuentra en mayor cantidad es el",
        op0:"A) Hidrógeno.",
        op1:"B) Nitrógeno.",
        op2:"C) Oxí­geno.",
        op3:"D) Ozono.",
        correcta:"1"
    },
    {
        id:68,
        pregunta:"El nitrógeno reacciona con el oxí­geno en el motor de un automóvil para formar monóxido de nitrógeno (NO) y dióxido de nitrógeno (NO2). Las ecuaciones balanceadas que representan las reacciones son:",
        op0:"A) N2 + O2 - NO | N2 + O2 - NO2",
        op1:"B) N + O - NO | 2N + 2O - NO2",
        op2:"C) N2 + O2  - 2NO | N2 + O2 - 2NO2",
        op3:"D) N2 + O2  - 2NO | N2 + 2O2 - 2NO2",
        correcta:"3"
    },
    {
        id:69,
        pregunta:"Para la formación de un mol de cada uno de los siguientes gases a partir de sus elementos, ¿Cuál reacción es la más exotérmica?",
        op0:"A) CO ∆Hº = -110.5kJ / mol",
        op1:"B) NO2 ∆Hº = +33.2kJ / mol",
        op2:"C) SO2 ∆Hº = -296.8kJ / mol",
        op3:"D) SO3 ∆Hº = -395.7kJ / mol",
        correcta:"3"
    },
    {
        id:70,
        pregunta:"Estructura de forma alargada constituida por una doble membrana, que interviene en la sí­ntesis del ATP:",
        op0:"A) Lisosoma.",
        op1:"B) Aparato de Golgi.",
        op2:"C) Ribosoma.",
        op3:"D) Mitocondria.",
        correcta:"3"
    },
    {
        id:71,
        pregunta:"El proceso fotosintético que realizan los organismos es importante para los seres vivos porque produce moléculas para la vida como",
        op0:"A) Glucosa y bióxido de carbono.",
        op1:"B) Oxí­geno y bióxido de carbono.",
        op2:"C) Glucosa y oxí­geno.",
        op3:"D) Oxí­geno y fósforo.",
        correcta:"2"
    },
    {
        id:72,
        pregunta:"La respiración es el proceso por el cual los organismos",
        op0:"A) Elaboran sus nutrientes.",
        op1:"B) Expulsan dióxido de carbono a la atmósfera.",
        op2:"C) Transforman compuestos orgánicos en inorgánicos.",
        op3:"D) Obtienen energí­a.",
        correcta:"3"
    },
    {
        id:73,
        pregunta:"Una célula presenta un número cromosómico con 46 XX; durante la mitosis, al dividirse, es de esperarse que forme células con",
        op0:"A) 23 X.",
        op1:"B) 23 XX.",
        op2:"C) 46 XX.",
        op3:"D) 46 XY.",
        correcta:"2"
    },
    {
        id:74,
        pregunta:"¿Cuál o cuáles de las siguientes son ventajas biológicas de la reproducción sexual?",
        op0:"A) III",
        op1:"B) I y II",
        op2:"C) I, II y III",
        op3:"D) II y III",
        correcta:"3",
        img:"img/pro.png"
    },
    {
        id:75,
        pregunta:"Cambio genético heredable:",
        op0:"A) Alteración.",
        op1:"B) Mutación.",
        op2:"C) Replicación.",
        op3:"D) Transcripción.",
        correcta:"1"
    },
    {
        id:76,
        pregunta:"En la actualidad, es la teorí­a más aceptada sobre el origen de los seres vivos:",
        op0:"A) Creacionista.",
        op1:"B) Endosimbiótica.",
        op2:"C) Vitalista.",
        op3:"D) Quimiosintética.",
        correcta:"3"
    },
    {
        id:77,
        pregunta:"¿Cuál es la premisa de la Teorí­a de Lamarck sobre la evolución de las especies?",
        op0:"A) La selección natural y la mutación son las causas de la evolución de las especies.",
        op1:"B) Los organismos actuales son el resultado de un largo proceso de adaptación y selección.",
        op2:"C) Los organismos mejor adaptados son los que dejan mayor número de descendientes.",
        op3:"D) La herencia de los caracteres adquiridos y la ley del uso y el desuso de los órganos.",
        correcta:"3"
    },
    {
        id:78,
        pregunta:"Son productores primarios:",
        op0:"A) Bacterias y hongos.",
        op1:"B) Hongos y algas.",
        op2:"C) Amibas y hongos.",
        op3:"D) Pastos y algas.",
        correcta:"3"
    },
    {
        id:79,
        pregunta:"Es la actividad humana que deteriora la calidad del suelo de los ecosistemas:",
        op0:"A) Crianza comercial de ganado vacuno y porcino.",
        op1:"B) Desecho de productos industriales en rellenos sanitarios.",
        op2:"C) Consumo de combustibles fósiles y emisión de CO y CO2.",
        op3:"D) Caza sin lí­mite de especies en peligro de extinción.",
        correcta:"1"
    },
    {
        id:80,
        pregunta:"Paí­ses que practicaron un nacionalismo agresivo, autoritario y conservador, que difundieron el culto a los valores nacionales, el militarismo, la superioridad de la nación y la inferioridad de otros pueblos.",
        op0:"A) Inglaterra y Francia.",
        op1:"B) Rusia y Turquí­a.",
        op2:"C) Alemania e Italia.",
        op3:"D) Alemania y Rusia.",
        correcta:"2"
    },
    {
        id:81,
        pregunta:"Se le da el nombre de imperialismo al fenómeno de",
        op0:"A) Expansión del capitalismo ocurrido en el último tercio del siglo XIX.",
        op1:"B) Conquista y colonización europea del siglo XVI.",
        op2:"C) Dominación señorial en la Rusia zarista.",
        op3:"D) Restauración de las monarquí­as absolutas y la intolerancia religiosa.",
        correcta:"0"
    },
    {
        id:82,
        pregunta:"El motivo inmediato que ocasionó la salida de Rusia de la Primera Guerra Mundial fue la",
        op0:"A) Derrota en la batalla de los montes Tannemberg.",
        op1:"B) Firma del tratado de Brest-Litovsk.",
        op2:"C) Revolución bolchevique.",
        op3:"D) Derrota en Gallí­poli.",
        correcta:"2"
    },
    {
        id:83,
        pregunta:"La crisis económica de 1929 en Estados Unidos de América se produjo debido a",
        op0:"A) Los problemas con la Unión de Repúblicas Soviéticas Socialistas.",
        op1:"B) La crisis de la Bolsa de Valores.",
        op2:"C) La rivalidad con Alemania.",
        op3:"D) El surgimiento del fascismo.",
        correcta:"1"
    },
    {
        id:84,
        pregunta:"Ordena cronológicamente los siguientes acontecimientos relacionados con la Segunda Guerra Mundial.",
        op0:"A) I, IV, V, II y III",
        op1:"B) II, V, I, III y IV",
        op2:"C) III, I, IV, V y II",
        op3:"D) IV, III, I, II y V",
        correcta:"0",
        img:"img/sgm.png"
    },
    {
        id:85,
        pregunta:"Alianzas económico-polí­ticas e ideológicas con fines defensivos que se formaron como consecuencia de la rivalidad entre la Unión de Repúblicas Soviéticas Socialistas y Estados Unidos de América durante la guerra frí­a:",
        op0:"A) La OTAN y la ONU.",
        op1:"B) La ONU y el Pacto de Varsovia.",
        op2:"C) El OMC y la OEA.",
        op3:"D) El Pacto de Varsovia y la OTAN.",
        correcta:"3"
    },
    {
        id:86,
        pregunta:"Al desembarco de armamento en Cuba que incluí­a proyectiles, cohetes, botes de patrulla y cazas mig, así­ como técnicos e instructores de la Unión de Repúblicas Soviéticas Socialistas, se le conoció con el nombre de la",
        op0:"A) Enmienda Platt.",
        op1:"B) Crisis de los misiles.",
        op2:"C) Guerra de las Potencias.",
        op3:"D) Guerra de las galaxias.",
        correcta:"1"
    },
    {
        id:87,
        pregunta:"La revuelta obrera de Berlí­n (1953) y las revoluciones húngara (1956) y checoslovaca (1968) fueron luchas contra",
        op0:"A) La presencia militar de los Estados Unidos de América.",
        op1:"B) El imperialismo británico.",
        op2:"C) El autoritarismo comunista soviético.",
        op3:"D) La cortina de hierro.",
        correcta:"2"
    },
    {
        id:88,
        pregunta:"Ordena cronológicamente los siguientes acontecimientos.",
        op0:"A) I, IV, III, II y V",
        op1:"B) II, I, IV, V y III",
        op2:"C) II, V, I, III y IV",
        op3:"D) III, V, IV, II y I",
        correcta:"2",
        img:"img/israel1.png"
    },
    {
        id:89,
        pregunta:"Hecho que se consideró como el inicio de los cambios polí­ticos a finales del siglo XX en la Europa del Este:",
        op0:"A) La paz armada.",
        op1:"B) La Guerra Frí­a.",
        op2:"C) La desaparición del muro de Berlí­n.",
        op3:"D) La Guerra de los Balcanes.",
        correcta:"2"
    },
    {
        id:90,
        pregunta:"Objetivo primordial de la Conspiración de Querétaro:",
        op0:"A) Constituir una junta gubernativa que tomara el poder a nombre de Fernando VII.",
        op1:"B) Llevar al poder al corregidor Don Miguel Domí­nguez.",
        op2:"C) Crear una confederación de estados americanos encabezada por Simón Bolí­var.",
        op3:"D) Establecer una república democrática gobernada por Fray Vicente de Santamarí­a.",
        correcta:"0"
    },
    {
        id:91,
        pregunta:"Durante los primeros años de vida independiente nacieron en México varios grupos polí­ticos con distintos planteamientos, algunos de ellos eran",
        op0:"A) Monarquistas, socialistas y centralistas.",
        op1:"B) Liberales, comunistas y conservadores.",
        op2:"C) Monarquistas, republicanos y anarquistas.",
        op3:"D)Federalistas, centralistas y monarquistas.",
        correcta:"3"
    },
    {
        id:92,
        pregunta:"La Constitución de 1857 fue",
        op0:"A) Conservadora.",
        op1:"B) Liberal.",
        op2:"C) Centralista.",
        op3:"D) Unicameral.",
        correcta:"1"
    },
    {
        id:93,
        pregunta:"Uno de los problemas que enfrentó la República restaurada fue",
        op0:"A) La carencia de capital para modernizar el paí­s.",
        op1:"B) El enfrentamiento polí­tico con la Iglesia protestante.",
        op2:"C) El rompimiento de las relaciones diplomáticas con los Estados Unidos de América.",
        op3:"D) El interés del capital estadounidense por invertir en México.",
        correcta:"0"
    },
    {
        id:94,
        pregunta:"¿Cómo se llamó el grupo polí­tico que destacó durante el gobierno de Porfirio Dí­az?",
        op0:"A) Los liberales.",
        op1:"B) Los Contemporáneos.",
        op2:"C) Los Cientí­ficos.",
        op3:"D) Los antirreleccionistas.",
        correcta:"2"
    },
    {
        id:95,
        pregunta:"El Partido Antirreeleccionista, la Decena Trágica, el Plan de San Luis, los Tratados de Ciudad Juárez, el sufragio efectivo, la sucesión presidencial de 1910 y el Partido Reyista se asocian a",
        op0:"A) El movimiento zapatista.",
        op1:"B) La dictadura huertista.",
        op2:"C) El régimen porfirista.",
        op3:"D) El movimiento maderista.",
        correcta:"3"
    },
    {
        id:96,
        pregunta:"Partido polí­tico con el que Plutarco Elí­as Calles logró debilitar el caudillismo.",
        op0:"A) Partido Nacional Revolucionario.",
        op1:"B) Partido Antirreeleccionista.",
        op2:"C) Partido Liberal Mexicano.",
        op3:"D) Partido Nacional Democrático.",
        correcta:"0"
    },
    {
        id:97,
        pregunta:"Se conoce como Maximato al periodo en el cual el poder lo tuvo",
        op0:"A) Álvaro Obregón.",
        op1:"B) Lázaro Cárdenas.",
        op2:"C) Plutarco Elí­as Calles.",
        op3:"D) Luis N. Morones.",
        correcta:"2"
    },
    {
        id:98,
        pregunta:"La posición de México ante la Segunda Guerra Mundial fue",
        op0:"A)Romper relaciones diplomáticas con los aliados.",
        op1:"B) No intervenir en ningún bando.",
        op2:"C) Vender petróleo a ambos contendientes.",
        op3:"D) Romper relaciones con las potencias del eje.",
        correcta:"3"
    },
    {
        id:99,
        pregunta:"Polí­tica económica que aplicó el gobierno de México de 1970-1982:",
        op0:"A) Corrupción de gobierno.",
        op1:"B) Avance económico.",
        op2:"C) Expansión comercial.",
        op3:"D) Desarrollo compartido.",
        correcta:"3"
    },
    {
        id:100,
        pregunta:"Cuando el usuario de la lengua muestra sensibilidad sociolingüí­stica para escoger el lenguaje apropiado a su comunicación, reconocemos una propiedad textual denominada",
        op0:"A) Lengua culta.",
        op1:"B) Lógica gramatical.",
        op2:"C) Lingüí­stica.",
        op3:"D) Adecuación.",
        correcta:"3"
    },
    {
        id:101,
        pregunta:"Obra que se ha concebido para que las acciones sean representadas por actores mediante el diálogo.",
        op0:"A) Texto dramático.",
        op1:"B) Ensayo.",
        op2:"C) Texto épico.",
        op3:"D) Novela.",
        correcta:"0"
    },
    {
        id:102,
        pregunta:"Elige las caracterí­sticas propias del poema lí­rico:",
        op0:"A) Objetividad, profundidad y extensión",
        op1:"B) Argumentación, objetividad y ejemplificación",
        op2:"C) Individualismo y subjetividad",
        op3:"D) Veracidad, exactitud y desenlace",
        correcta:"2"
    },
    {
        id:103,
        pregunta:"Género literario que aborda asuntos heroicos, sus personajes se inspiran en figuras históricas y simbolizan valores universales de la colectividad.",
        op0:"A) Lí­rico.",
        op1:"B) Épico.",
        op2:"C) Dramático.",
        op3:"D) Didáctico.",
        correcta:"1"
    },
    {
        id:104,
        pregunta:"Escritor representante del Realismo español.",
        op0:"A) Camilo José Cela.",
        op1:"B) Miguel de Unamuno.",
        op2:"C) Benito Pérez Galdós.",
        op3:"D) Ramón del Valle Inclán.",
        correcta:"2"
    },
    {
        id:105,
        pregunta:"La obra Papá Goriot escrita por Honorato de Balzac, forma parte de",
        op0:"A) La divina comedia.",
        op1:"B) Grandes comedias.",
        op2:"C) Novelas ejemplares.",
        op3:"D) La comedia humana.",
        correcta:"3"
    },
    {
        id:106,
        pregunta:"Poeta mexicano de la segunda mitad del siglo XX, ganador del premio Nobel.",
        op0:"A) Carlos Fuentes.",
        op1:"B) Jaime Sabines.",
        op2:"C) Octavio Paz.",
        op3:"D) Carlos Monsiváis.",
        correcta:"2"
    },
    {
        id:107,
        pregunta:"Caracterí­stica fundamental de la narración.",
        op0:"A) Argumentar una enseñanza moral.",
        op1:"B) Exaltar las virtudes de los protagonistas.",
        op2:"C) Describir lugares y personas.",
        op3:"D) Referir acontecimientos de lugares y personas.",
        correcta:"3"
    },
    {
        id:108,
        pregunta:"Un cuento se diferencia de una novela porque el cuento tiene",
        op0:"A) Amplio desarrollo psicológico de los personajes.",
        op1:"B) Desarrollo elaborado y rápido desenlace.",
        op2:"C) Brevedad y rápido desenlace.",
        op3:"D) Intensidad y múltiples hilos narrativos.",
        correcta:"2"
    },
    {
        id:109,
        pregunta:"La siguientes es una ficha: 'Fernández Moreno, Cesar. América Latina en su literatura, México, Siglo Veintiuno Editores, 1976, p. 25.'",
        op0:"A) Bibliográfica.",
        op1:"B) De resumen.",
        op2:"C) Hemerográfica.",
        op3:"D) De Cita.",
        correcta:"0"
    },
    {
        id:110,
        pregunta:"Si en el huso horario 0° son las 20:00 horas, ¿qué hora será en la Ciudad de Tijuana, México, cuyo huso horario es de 120° W?",
        op0:"A) 10:00 hrs.",
        op1:"B) 11:00 hrs.",
        op2:"C) 12:00 hrs.",
        op3:"D) 13:00 hrs.",
        correcta:"2"
    },
    {
        id:111,
        pregunta:"El estado de Chihuahua está recorrido por la Sierra",
        op0:"A) Madre Oriental.",
        op1:"B) Volcánica Transversal.",
        op2:"C) San Pedro Mártir.",
        op3:"D) Madre Occidental.",
        correcta:"3"
    },
    {
        id:112,
        pregunta:"Paí­s que ocupa el primer lugar en la producción de cobre:",
        op0:"A) Australia.",
        op1:"B) Chile.",
        op2:"C) China.",
        op3:"D) Perú.",
        correcta:"1"
    },
    {
        id:113,
        pregunta:"Las corrientes frí­as se relacionan con los grandes bancos pesqueros de especies altamente cotizadas como",
        op0:"A) Camarón y jaiba.",
        op1:"B) Jaiba y salmón.",
        op2:"C) Salmón y bacalao.",
        op3:"D) Ostión y camarón.",
        correcta:"2"
    },
    {
        id:114,
        pregunta:"La taiga es una región natural que se localiza en el",
        op0:"A) Sur de Estados Unidos de América, centro de Europa y Malasia.",
        op1:"B) Norte de Chile, norte de Suráfrica y Australia.",
        op2:"C) Norte de México, sur de Italia y sur de India.",
        op3:"D) Centro de Canadá, norte de Europa y Siberia.",
        correcta:"3"
    },
    {
        id:115,
        pregunta:"El aumento y retención del bióxido de carbono en la parte inferior de la atmósfera, ocasionado por la actividad industrial y los medios de transporte, está generando",
        op0:"A) El cambio global del agua.",
        op1:"B) El cambio climático global.",
        op2:"C) La alteración del viento.",
        op3:"D) La modificación del relieve.",
        correcta:"1"
    },
    {
        id:116,
        pregunta:"En la distribución poblacional actual de México influye",
        op0:"A) La existencia de amplios litorales.",
        op1:"B) El desarrollo de la frontera norte.",
        op2:"C) La pesca en las costas del Golfo.",
        op3:"D) El desarrollo petrolero del sureste.",
        correcta:"1"
    },
    {
        id:117,
        pregunta:"Son algunas caracterí­sticas que distinguen a un paí­s subdesarrollado:",
        op0:"A) I, IV y V",
        op1:"B) I, III y IV",
        op2:"C) II, III y V",
        op3:"D) III, IV y V",
        correcta:"0",
        img:"img/econo.png"
    },
    {
        id:118,
        pregunta:"La formación de nuevos paí­ses en Europa se asocia principalmente con la",
        op0:"A) Caí­da del socialismo.",
        op1:"B) Dependencia económica.",
        op2:"C) Regionalización económica.",
        op3:"D) Economí­a centralizada.",
        correcta:"0"
    },
    {
        id:119,
        pregunta:"Los estados de la República Mexicana que tienen un bajo grado de desarrollo industrial son",
        op0:"A) Morelos, México y Puebla.",
        op1:"B) Tlaxcala, Querétaro y Guanajuato.",
        op2:"C) Veracruz, Tabasco y Yucatán.",
        op3:"D) Guerrero, Oaxaca y Chiapas.",
        correcta:"3"
    }
]
//para guardar las respuestas elegidas

let respuestas = [];
//cantidad correctas
let cantiCorrectas = 0;

//pregunta acutal que debe ser cargada
let numPregunta = 0;

//Cargo una pregunta del JSON
function cargarPreguntas(){
    //tomo la pregunta actual de la bd
    const pregunta = bd_juego[numPregunta];
    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-pregunta";
    contenedor.id = pregunta.id;
    const h2 = document.createElement("h2");
    h2.textContent = pregunta.id + 1 + " - " + pregunta.pregunta;
    contenedor.appendChild(h2);
    const opciones = document.createElement("div");
    if (pregunta.hasOwnProperty("img")){
        const img = document.createElement("img");
        img.src = pregunta.img;
        contenedor.appendChild(img);
    }
    
    else if(pregunta.hasOwnProperty("a")){
        const br = document.createElement("br");
        const br2 = document.createElement("br");
        const a = document.createElement("a");
        const textA = document.createTextNode("Ver el texto")
        a.href = pregunta.a;
        a.setAttribute('target', '_blank')
        contenedor.appendChild(a);
        contenedor.appendChild(br2)
        a.appendChild(textA)
    }
    
    //vamos a crear los tres labels
    //Lo vamos a hacer mediante una funcií²n.
    // A dicha función le envio el numero de label y la opcion
    // el texto, de dicho label
    const label1 = crearLabel("0",pregunta.op0);
    const label2 = crearLabel("1",pregunta.op1);
    const label3 = crearLabel("2",pregunta.op2);
    const label4 = crearLabel("3",pregunta.op3);

    //agrego los labels al contendor de las opciones
    opciones.appendChild(label1);
    opciones.appendChild(label2);
    opciones.appendChild(label3);
    opciones.appendChild(label4);

    //agrego las opciones al contenedor principal
    contenedor.appendChild(opciones);
    document.getElementById("juego").appendChild(contenedor);
}

//creo la funcií²n que que retornará el label con todo su contenido
function crearLabel(num, txtOpcion){
    const label = document.createElement("label");
    label.id = "l" + numPregunta + num;
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.name = "p" + numPregunta;
    input.required = true
    input.setAttribute("onclick", "seleccionar(" + numPregunta+","+num+")");
    const span = document.createElement("span");
    const correccion = document.createElement("span");
    correccion.id = "p" + numPregunta + num;
    span.textContent = txtOpcion;
    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(correccion);

    return label;
}

//Mediante un for cargo todas las preguntas del JSON
for(i=0;i < bd_juego.length;i++){
    cargarPreguntas();
    //actualizo el numero de pregunta actual
    numPregunta++;
    if (numPregunta == 12){
       const tema = document.createElement("div")
    }
}

//Función que carga la opción elegida en el arreglo respuestas.
function seleccionar(pos, opElegida){
    respuestas[pos] = opElegida;
}



//botón corregir
let corregir = document.getElementById("corregir");
function corregirxd(){
    stop();
    const result = document.querySelector(".result-box");
    const buttonxd = document.getElementById("corregir");
    buttonxd.classList.add("hide")
    result.classList.remove("hide")
    const afterButton = document.querySelector(".buttonfinal");
    afterButton.classList.remove("hide")
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
    //desabilitamos todos los inputs
    let inputs = document.getElementsByTagName("input");
    for(i=0;i<inputs.length;i++){
        inputs[i].disabled = true;
    }

    //hacemos un scroll hacia arriba
    //colocamos la cantidad que acerto y las que no acertó

    //recorro el arreglo que tiene las respuestas y comparo
    for(i=0;i<bd_juego.length;i++){
        //cargo la pregunta
        const pregunta = bd_juego[i];
        if(pregunta.correcta == respuestas[i]){ //respuesta correcta
            cantiCorrectas++;
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta correcta";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        }

        else if(respuestas[i] == null){
            let id = "p" + i + respuestas[i];
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta incorrecta";
            document.getElementById(idCorreccion).className = "acierto";
        }

        else{//no acerto
            let id = "p" + i + respuestas[i];
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta incorrecta";
            document.getElementById(id).innerHTML = "&#x2715;";
            document.getElementById(id).className = "no-acierto";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        }
    }
    const resultadoP = document.getElementById("homeTitle");
    parrafoxd = document.createElement("h1");
    parrafoxd.textContent = '¡Obtuviste ' + cantiCorrectas + '/120!'
    resultadoP.appendChild(parrafoxd);
}

const containerMain = document.querySelector(".containerMain");
const homeContainer = document.querySelector(".home-box")
const overheader = document.querySelector(".overheader")
const containerFoo = document.querySelector(".containerFoo")

function testStart(){
    overheader.classList.remove("hide");
    containerMain.classList.remove("hide");
    containerFoo.classList.remove("hide")
    homeContainer.classList.add("hide");
    write();
    timeStarted = setInterval(write, 10);
}

function verRespuesta(){
    const result = document.querySelector(".result-box");
    result.classList.add("hide")
}

//clock

window.onload = () => {
    h = 0;
    m = 0;
    s = 0;
    mls = 0;
    timeStarted = 0;
    time = document.getElementById("time");
 };
 
 function write() {
    let ht, mt, st, mlst;
    mls++;
    if (mls > 60) {
       s++;
       mls = 0;
    }
    if (s > 59) {
       m++;
       s = 0;
    }
    if (m > 59) {
       h++;
       m = 0;
    }
    if (h > 24) h = 0;
    if (h == 3){
        corregirxd();
        reset();
    }
 
    mlst = ('0' + mls).slice(-2);
    st = ('0' + s).slice(-2);
    mt = ('0' + m).slice(-2);
    ht = ('0' + h).slice(-2);
 
    time.innerHTML = `${ht}:${mt}:${st}`;
    /*time.innerHTML = `${ht}:${mt}:${st}.${mlst}`;*/
 };
 function reset() {
    clearInterval(timeStarted);
    time.innerHTML = "03:00:00" /*   */
    /*time.innerHTML = "03:00:00.00"*/
    h = 3;
    m = 0;
    s = 0;
    /*mls = 0;*/
 }
 function stop() {
    clearInterval(timeStarted);
 }
