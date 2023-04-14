//base de datos local de preguntas
const bd_juego = [
    {
        id:0,
        pregunta:"Elige la función de la lengua que predomina en el siguiente ejemplo: 'Luisa, ¿puedes limpiar la mesa y lavar los trastes por favor?'",
        op0:"Metalingüística.",
        op1:"Apelativa.",
        op2:"Referencial.",
        op3:"Sintomática.",
        correcta:"1"
    },
    {
        id:1,
        pregunta:"Identifica el enunciado en el que la lengua está usada en su función poética.",
        op0:"Era apenas una niña cuando la vi por primera vez.",
        op1:"A las tres en punto moriría un transeúnte.",
        op2:"Las nieves del tiempo platearon mi sien.",
        op3:"Chopin soñó que estaba muerto en el lago.",
        correcta:"2"
    },
    {
        id:2,
        pregunta:"¿Qué modo discursivo predomina en el siguiente párrafo?: 'El alcoholismo es una enfermedad progresiva y crónica, que presenta síntomas que van desde el malestar hasta el dolor intenso. Depende de varios factores, principalmente de la predisposición genética y de la influencia del medio ambiente familiar y social. Pese a que afecta todo el cuerpo y provoca una variedad de problemas médicos, los principales síntomas se manifiestan en el sistema nervioso. A través de éste, en especial del cerebro, la adicción produce diversos trastornos en el pensamiento, las emociones y la conducta del enfermo.'",
        op0:"Instrucción.",
        op1:"Descripción.",
        op2:"Enumeración.",
        op3:"Explicación.",
        correcta:"1"
    },
    {
        id:3,
        pregunta:"¿Qué modo discursivo predomina en el siguiente ejemplo?: 'El libro comprende tres capítulos, con cinco subtemas cada uno. Sin embargo, no tiene consistencia. Esto se corrobora, en primer lugar, porque carece de un apartado de conclusiones. En segundo lugar, no cita las fuentes bibliográficas en las que se apoya. Esto hace que el texto sea de poco fiar.'",
        op0:"Enumeración.",
        op1:"Descripción.",
        op2:"Argumentación.",
        op3:"Narración.",
        correcta:"2"
    },
    {
        id:4,
        pregunta:"Entre las décadas de los ochenta y los noventa existe una relación de",
        op0:"Complementación.",
        op1:"Integración.",
        op2:"Continuación.",
        op3:"Oposición.",
        correcta:"2",
        a:"\lectura7.php"
    },
    {
        id:5,
        pregunta:"En la década de los noventa",
        op0:"Son importantes los programas de televisión.",
        op1:"Se ha dado un progreso espectacular.",
        op2:"Se ha dado el retorno hacia la irracionalidad.",
        op3:"Han disminuido las desigualdades sociales.",
        correcta:"2",
        a:"\lectura7.php"
    },
    {
        id:6,
        pregunta:"La comparación entre los noventa y el último capítulo de un programa de televisión se debe a que ambos",
        op0:"Contienen la evolución del progreso.",
        op1:"Auguran el germen de un espacio nuevo.",
        op2:"Cumplen la ratificación del milenio.",
        op3:"Repiten los fragmentos más reconocidos.",
        correcta:"3",
        a:"\lectura7.php"
    },
    {
        id:7,
        pregunta:"Los documentos del ritual del Nayar son",
        op0:"Reseñas y documentales.",
        op1:"Documentales y fotografías.",
        op2:"Reseñas y fotografías.",
        op3:"Documentales y artículos.",
        correcta:"1",
        a:"\lectura7.php"
    },
    {
        id:8,
        pregunta:"Los borrados para realizar la Judea utilizan",
        op0:"Olote, varas de otate, sables de madera y cúpula.",
        op1:"Olote, varas de otate, sables de madera y máscaras.",
        op2:"Tocados, olote, varas de otate, máscaras y sables de madera.",
        op3:"Varas de otate, olote, sables de madera y peyote.",
        correcta:"3",
        a:"\lectura7.php"
    },
    {
        id:9,
        pregunta:"Al ser capturado el niño los demonios se autodestruyen puesto que",
        op0:"Deben acabarse entre ellos mismos.",
        op1:"Quieren dominar a los pobladores.",
        op2:"No hay un orden superior que los controle.",
        op3:"Representan las fuerzas del inframundo.",
        correcta:"2",
        a:"\lectura7.php"
    },
    {
        id:10,
        pregunta:"Hay un SUJETO TÁCITO O IMPLÍCITO en:",
        op0:"Somos nada frente a la muerte infausta.",
        op1:"Feliz aquél que busca a Dios en sí mismo.",
        op2:"¡Señor!, tiembla mi alma ante tu grandeza.",
        op3:"Yo he subido más alto, mucho más alto.",
        correcta:"0"
    },
    {
        id:11,
        pregunta:"Elige la opción que contiene sujeto y predicado.",
        op0:"Es útil la computadora.",
        op1:"Las pirámides de Teotihuacán.",
        op2:"Hoy, mañana y siempre.",
        op3:"Las cuentas del gran capitán.",
        correcta:"0"
    },
    {
        id:12,
        pregunta:"Existe un error de concordancia en:",
        op0:"Los checoslovacos combatían en las calles y se oponían a la dictadura.",
        op1:"Un sinnúmero de feligreses acudió a la Villa.",
        op2:"La creación de muchas cosas no se tenían contempladas.",
        op3:"El constante flujo y reflujo de divisas provocó alarma.",
        correcta:"2"
    },
    {
        id:13,
        pregunta:"Elige el párrafo con la mejor redacción.",
        op0:"En este orden, la posibilidad y el origen del conocimiento son algunos problemas a considerar. Presenta el conocimiento, para iniciar, así una vertiente filosófica que no podemos soslayar si queremos profundizar en el tema.",
        op1:"Así, la posibilidad y el origen del conocimiento son algunos problemas a considerar que presenta el conocimiento. Para iniciar, una vertiente filosófica que no podemos soslayar si queremos profundizar en el tema.",
        op2:"El conocimiento, en el inicio, ofrece una vertiente filosófica que no podemos soslayar si queremos profundizar en el tema. De modo que la posibilidad y el origen del conocimiento son algunos problemas a considerar.",
        op3:"El conocimiento, en principio, ofrece una vertiente filosófica que no podemos soslayar si queremos profundizar en el tema. En este orden, la posibilidad y el origen del conocimiento son algunos problemas clave.",
        correcta:"3"
    },
    {
        id:14,
        pregunta:"De acuerdo con la relación d: ANALOGÍA entre las palabras e: letras mayúsculas, señala la opció: que presenta una relación semejant: en la pregunta siguiente: BIEN – VALOR",
        op0:"Gula – pecado",
        op1:"Verdad – escándalo",
        op2:"Poder – orgullo",
        op3:"Sereno – serenidad",
        correcta:"0"
    },
    {
        id:15,
        pregunta:"Sinónimo de AVATAR",
        op0:"Destino.",
        op1:"Cambio.",
        op2:"Tragedia.",
        op3:"Aflicción.",
        correcta:"1"
    },
    {
        id:16,
        pregunta:"Elige la opción con la ortografía correcta.",
        op0:"El rebaño avanza sin cesar y ellos comienzan a rezagarse.",
        op1:"El rebaño avanza sin cesar y ellos comiensan a resagarze.",
        op2:"El rebaño avanza sin cezar y ellos comienzan a rezagarce.",
        op3:"El rebaño avanza sin cesar y ellos comienzan a resagarse.",
        correcta:"0"
    },
    {
        id:17,
        pregunta:"Elige la opción que presenta el párrafo con la puntuación apropiada.",
        op0:"El Coronel Juan Morales, se apodera de un cañón montado en uno de los ángulos, y aprovechándose de la confusión de los defensores, introduce a la fortaleza un buen número de soldados. Vuelve los cañones hacia el interior. Y empieza a disparar. Los tejanos se retiran al convento y a la iglesia, protegiéndose en barricadas de sacos de arena.",
        op1:"El Coronel Juan Morales se apodera de un cañón montado, en uno de los ángulos y aprovechándose, de la confusión de los defensores, introduce a la fortaleza. Un buen número de soldados. Vuelve los cañones hacia el interior y empieza a disparar. Los tejanos se retiran al convento y a la iglesia, protegiéndose en barricadas de sacos de arena.",
        op2:"El Coronel Juan Morales se apodera de un cañón montado en uno de los ángulos y aprovechándose de la confusión de los defensores, introduce a la fortaleza un buen número de soldados. Vuelve los cañones hacia el interior y empieza a disparar. Los tejanos se retiran al convento y a la iglesia, protegiéndose en barricadas de sacos de arena.",
        op3:"El Coronel Juan Morales se apodera de un cañón, montado en uno de los ángulos y aprovechándose de la confusión de los defensores, introduce a la fortaleza, un buen número de soldados. Vuelve los cañones hacia el interior y empieza a disparar. Los tejanos se retiran, al convento y a la iglesia. Protegiéndose en barricadas de sacos de arena.",
        correcta:"2"
    },
    {
        id:18,
        pregunta:"Al simplificar la expresión algebraica –3x – [–2(4x – 3) – (9 – x)] se obtiene",
        op0:"6x + 3",
        op1:"4x + 3",
        op2:"10x + 3",
        op3:"6x + 12",
        correcta:"1"
    },
    {
        id:19,
        pregunta:"Factoriza la siguiente expresión n^6 -3n^3 18",
        op0:"(n^3 + 3)(n^3 – 6)",
        op1:"(n^3 – 3)(n^3 + 6)",
        op2:"(n^2 + 3)(n^3 – 6)",
        op3:"(n^3 + 3)(n^3 + 6)",
        correcta:"0"
    },
    {
        id:20,
        pregunta:"Los valores que satisfacen la ecuación x^2 + 3x + 2 = 0, son",
        op0:"1 y 2",
        op1:"2 y 3",
        op2:"–1 y –2",
        op3:"–3 y 2",
        correcta:"2"
    },
    {
        id:21,
        pregunta:"Si resuelves la desigualdad -2x + 6 ≥ 16 obtienes",
        op0:"x < 5",
        op1:"x ≥ 5",
        op2:"x ≤ -5",
        op3:"x = 5",
        correcta:"2"
    },
    {
        id:22,
        pregunta:"La solución al sistema de ecuaciones",
        op0:"(–2, 3, 5)",
        op1:"(2, 4, 5)",
        op2:"(–2, 4, 5)",
        op3:"(2, 3, –5)",
        correcta:"2",
        img:"ecuaciones.png"
    },
    {
        id:23,
        pregunta:"Si S = {1, 2} y Q = {2, 3, 4}, ¿cuál es el rango de la función f: S → Q definida por f(x) = x + 1?",
        op0:"{2, 3}",
        op1:"{2, 4}",
        op2:"{1, 3}",
        op3:"{2, 3, 4}",
        correcta:"0"
    },
    {
        id:24,
        pregunta:"¿Cuál es la longitud del lado q en el siguiente triángulo?",
        op0:"–6",
        op1:"6",
        op2:"9",
        op3:"7",
        correcta:"1",
        img:"angulo.png"
    },
    {
        id:25,
        pregunta:"Para encontrar la medida de los ángulos internos de un triángulo oblicuángulo cuando se conocen las medidas de sus lados se utiliza",
        op0:"La ley de los cosenos.",
        op1:"La ley de los senos.",
        op2:"El teorema de Pitágoras.",
        op3:"La razón trigonométrica tangente.",
        correcta:"0"
    },
    {
        id:26,
        pregunta:"Calcula la distancia del punto A (6, 1) al punto B (1, 1)",
        op0:"7",
        op1:"6",
        op2:"5",
        op3:"4",
        correcta:"2"
    },
    {
        id:27,
        pregunta:"Encuentra las coordenadas del punto medio entre los puntos (0, 2) y (4, 6).",
        op0:"(2, 3)",
        op1:"(2, 4)",
        op2:"(1, 4)",
        op3:"(3, 3)",
        correcta:"1"
    },
    {
        id:28,
        pregunta:"La pendiente de la recta 3x + 6y – 1 = 0 es",
        op0:"3",
        op1:"-1/2",
        op2:"1/2",
        op3:"3",
        correcta:"1"
    },
    {
        id:29,
        pregunta:"La ecuación ordinaria de la mediana del siguiente triángulo, trazada desde el vértice A es",
        op0:"y = -2x +3",
        op1:"y = -x + 3",
        op2:"y = -1/4x +3",
        op3:"y = 1/2x",
        correcta:"1",
        img:"ab.png"
    },
    {
        id:30,
        pregunta:"La ecuación ordinaria de la mediatriz del siguiente triángulo trazada desde el lado AB es",
        op0:"y = -3x + 6",
        op1:"y = -3x +7",
        op2:"y = -2x +5",
        op3:"y = -2x +6",
        correcta:"2",
        img:"trian.png"
    },
    {
        id:31,
        pregunta:"El foco de la parábola y^2 - 8x = 0  es el punto:",
        op0:"(8,0)",
        op1:"(2,0)",
        op2:"(0,-2)",
        op3:"(0,-8)",
        correcta:"1"
    },
    {
        id:32,
        pregunta:"¿Cuál es la ecuación de una elipse horizontal con centro en (2, 1)?",
        op0:"((x-2)^2 /64) + ((y-1)^2 /144 = 1)",
        op1:"((x-2)^2 /144) + ((y-1)^2 /64 = 1)",
        op2:"((x+2)^2 /144) + ((y+1)^2 /64 = 1)",
        op3:"((x+2)^2 /16) + ((y+1)^2 /25 = 1)",
        correcta:"1"
    },
    {
        id:33,
        pregunta:"La ecuación de la hipérbola centrada en el origen con lado recto 10 y vértice V( 0, –9) es",
        op0:"9x^2 -5y^2 = 405",
        op1:"5y^2 -9x^2 = 405",
        op2:"9x^2 -10y^2 = 90",
        op3:"10x^2 -9y^2 = 90",
        correcta:"1"
    },
    {
        id:34,
        pregunta:"De las siguientes ecuaciones, ¿cuál representa una hipérbola que pasa por el punto A(–8, 0) y B(8, 0)?",
        op0:"x^2 -64y^2 -8 = 0",
        op1:"x^2 -8y^2 -62 = 0",
        op2:"x^2 -y^2 -8x -12y -1 = 0",
        op3:"x^2 -64y^2 -64 = 0",
        correcta:"3"
    },
    {
        id:35,
        pregunta:"Si en la ecuación Ax^2 Bxy Cy^2 Dx Ey F = 0 el discriminante B^2 -4AC es positivo,onc^2es la ecuación representa una",
        op0:"Circunferencia.",
        op1:"Parábola.",
        op2:"Elipse.",
        op3:"Hipérbola.",
        correcta:"3"
    },
    {
        id:36,
        pregunta:"La ecuación x^2 + 4xy + 4y^2 - 74x + 2y + 94 = 0 es una",   
        op0:"Circunferencia.",
        op1:"Parábola.",
        op2:"Elipse.",
        op3:"Hipérbola.",
        correcta:"1"
    },
    {
        id:37,
        pregunta:"El límite de la función f(x) = 4 cuando x tiende a – 2, es igual a",
        op0:"–2",
        op1:"0",
        op2:"2",
        op3:"4",
        correcta:"3"
    },
    {
        id:38,
        pregunta:"¿Cuál es el resultado?",
        op0:"–1",
        op1:"0",
        op2:"1",
        op3:"2",
        correcta:"1",
        img:"limi.png"
    },
    {
        id:39,
        pregunta:"La derivada de la expresión",
        op0:"2x^1/2 + 6x^1/3",
        op1:"x^1/2 + 2x^1/3",
        op2:"-x^(-1/2) - 2x^(-2/3)",
        op3:"1/x^1/2 + 2/x^(2/3)",
        correcta:"3",
        img:"deri.png"
    },
    {
        id:40,
        pregunta:"La derivada de y = ln(x^2 + 5) es",
        op0:"1/(x^2 +5)",
        op1:"2x/(x+5)",
        op2:"2x/(x^2 5)",
        op3:"2x/(x^2+5)",
        correcta:"3"
    },
    {
        id:41,
        pregunta:"La función f(x) = x^3 -3x^2 +1 tiene un mínimo en el punto de abscisa",
        op0:"0",
        op1:"1",
        op2:"2",
        op3:"3",
        correcta:"2"
    },
    {
        id:42,
        pregunta:"¿Cuál es la integral definida?",
        op0:"2",
        op1:"3",
        op2:"6",
        op3:"4",
        correcta:"0",
        img:"inte.png"
    },
    {
        id:43,
        pregunta:"La solución de la integral indefinida es",
        op0:"e^(x^2 +4x +3) + C",
        op1:"-1/2e^(-(x^2 +4x +3)) + C",
        op2:"1/2e^(-(x^2 +4x +3)) + C",
        op3:"1/2e`(x^2 +4x +3) + C",
        correcta:"3",
        img:"defi.png"
    },
    {
        id:44,
        pregunta:"Del movimiento de un coche se obtuvo la siguiente gráfica de distancia recorrida (d) en función del tiempo empleado (t); indica las secciones donde el movimiento es uniforme, acelerado o que el objeto está en reposo.",
        op0:"Movimiento uniforme: II y III; movimiento acelerado: I; reposo: IV.",
        op1:"Movimiento uniforme: I y III; movimiento acelerado: II; reposo: IV.",
        op2:"Movimiento uniforme: III; movimiento acelerado: I; reposo: II y IV.",
        op3:"Movimiento uniforme: II; movimiento acelerado: I y III; reposo: IV.",
        correcta:"3",
        img:"ace.png"
    },
    {
        id:45,
        pregunta:"Estimando la aceleración de la gravedad igual a 9.8 m/s2 y despreciando la fricción del aire, calcula el tiempo requerido para que una piedra lanzada directamente hacia arriba con una velocidad inicial de 39.2 m/s alcance su punto más alto.",
        op0:"4.0 s",
        op1:"8.0 s",
        op2:"9.8 s",
        op3:"39.2 s",
        correcta:"0"
    },
    {
        id:46,
        pregunta:"Un trío de caballos jala una carreta en la misma dirección, la cual tiene un peso de 500 kg. Cada uno de los caballos ejerce una fuerza de 1,500 N sobre la carreta. Si no hay fricción entre la carreta y el suelo, la fuerza total con la que ésta es jalada es de ________ N.",
        op0:"3",
        op1:"300",
        op2:"1,500",
        op3:"4,500",
        correcta:"3"
    },
    {
        id:47,
        pregunta:"Sobre un cuerpo se aplicaron diferentes fuerzas en dirección horizontal y con el mismo sentido, provocando que el objeto experimentara distintas aceleraciones. Basándote en la gráfica de los resultados obtenidos y despreciando la acción ejercida por la fricción entre el objeto y la superficie de contacto, ¿cuál es la masa del objeto?",
        op0:"1.6 kg",
        op1:"2.5 kg",
        op2:"3.2 kg",
        op3:"4.0 kg",
        correcta:"1",
        img:"fuerza.png"
    },
    {
        id:48,
        pregunta:"La ecuación que permite calcular la energía cinética de una partícula de masa m y velocidad v es",
        op0:"Ec = mv",
        op1:"Ec = 2mv^2",
        op2:"Ec = mv/2",
        op3:"Ec = 1/2mv^2",
        correcta:"3"
    },
    {
        id:49,
        pregunta:"Una bala de cañón de 7.0 kg se dispara verticalmente hacia arriba con una rapidez de 120 m/s. ¿Cuánta energía cinética tiene al salir y cuánta energía potencial tiene en el punto más alto de la trayectoria?",
        op0:"50,400 J, 50,400 J",
        op1:"420 J, 420 J",
        op2:"50,400 J, cero J",
        op3:"420 J, cero J",
        correcta:"0"
    },
    {
        id:50,
        pregunta:"Un sistema está en equilibrio térmico cuando",
        op0:"En un proceso su temperatura no varía.",
        op1:"Su temperatura es igual a la de otro sistema con el que está en contacto térmico.",
        op2:"Sus propiedades termodinámicas no cambian.",
        op3:"Su volumen y su presión permanecen constantes.",
        correcta:"1"
    },
    {
        id:51,
        pregunta:"Para convertir un valor de temperatura Celsius T a su valor equivalente en la escala Kelvin de temperaturas, se emplea la expresión",
        op0:"T-32 / 1.8",
        op1:"T + 273",
        op2:"T - 273",
        op3:"1.8(T + 273)",
        correcta:"1"
    },
    {
        id:52,
        pregunta:"A la cantidad de calor que necesita un gramo de una sustancia para elevar su temperatura un grado Celsius, se le conoce como",
        op0:"Capacidad térmica.",
        op1:"Calor latente de fusión.",
        op2:"Calor latente de vaporización.",
        op3:"Capacidad térmica específica.",
        correcta:"3"
    },
    {
        id:53,
        pregunta:"Una onda formada en una cuerda tiene una longitud de onda de 10 cm y un periodo de 2 s, ¿con qué velocidad se propaga?",
        op0:"20.00 cm/s",
        op1:"0.25 cm/s",
        op2:"5.00 cm/s",
        op3:"2.00 cm/s",
        correcta:"2"
    },
    {
        id:54,
        pregunta:"Dos ondas de la misma frecuencia pueden interferir de manera constructiva o destructiva, esto depende de",
        op0:"La amplitud de ambas ondas.",
        op1:"La fase relativa entre ambas ondas.",
        op2:"Que ambas ondas sean longitudinales.",
        op3:"Que ambas ondas sean transversales.",
        correcta:"1"
    },
    {
        id:55,
        pregunta:"La interferencia de dos ondas puede generar franjas claras y obscuras, es decir, la energía se distribuye fuera de ciertas áreas y dentro de otras, ello se debe a la conservación de la",
        op0:"Polarización.",
        op1:"Difracción.",
        op2:"Energía.",
        op3:"Longitud de onda.",
        correcta:"2"
    },
    {
        id:56,
        pregunta:"Un aislante eléctrico es un material que",
        op0:"No contiene ninguna corriente eléctrica.",
        op1:"Hace difícil el flujo de corriente eléctrica.",
        op2:"No puede ser un elemento puro químicamente.",
        op3:"Tiene más electrones que protones en su superficie.",
        correcta:"1"
    },
    {
        id:57,
        pregunta:"A una resistencia eléctrica R se aplica una diferencia de potencial V, por lo que circula por la resistencia una corriente eléctrica I. Si R y V cambian su valor al doble, ambos simultáneamente, entonces el valor de la corriente eléctrica se",
        op0:"Reduce a la mitad.",
        op1:"Mantiene sin cambio.",
        op2:"Incrementa al doble.",
        op3:"Incrementa al cuádruple.",
        correcta:"1"
    },
    {
        id:58,
        pregunta:"El índice de refracción del cuarzo es 1.544. ¿Con qué velocidad se propaga la luz en él?",
        op0:"194,300 Km/s",
        op1:"19,430 Km/s",
        op2:"1,943 Km/s",
        op3:"194 Km/s",
        correcta:"0"
    },
    {
        id:59,
        pregunta:"¿En qué áreas recibió Madame Curie el premio Nobel?",
        op0:"Física y Biología.",
        op1:"Medicina y Química.",
        op2:"Química y Biología.",
        op3:"Física y Química.",
        correcta:"3"
    },
    {
        id:60,
        pregunta:"¿Cuál es el enunciado verdadero?",
        op0:"El aire es un compuesto y el cloruro de sodio es una mezcla.",
        op1:"El cloruro de sodio es un elemento y la plata es un compuesto.",
        op2:"El aire es una mezcla y la plata es un compuesto.",
        op3:"El cloruro de sodio es un compuesto y el aire es una mezcla.",
        correcta:"3"
    },
    {
        id:61,
        pregunta:"Las fórmulas del monóxido de carbono, hidróxido de magnesio y el sulfato de aluminio respectivamente son",
        op0:"CO2 – MnOH – Al2 (SO4)3",
        op1:"CO – Mg(OH)2 – Al2 (SO3)2",
        op2:"CO2 – Mn(OH)2 – AlSO4",
        op3:"CO – Mg(OH)2 – Al2 (SO4)3",
        correcta:"3"
    },
    {
        id:62,
        pregunta:"La cantidad de mL de HCl concentrado (37% en peso y d= 1,14 g/mL) que deberá medirse para preparar 250 mL de HCl(ac) 1,4 M es",
        op0:"34.5",
        op1:"30.3",
        op2:"14.6",
        op3:"12.6",
        correcta:"1"
    },
    {
        id:63,
        pregunta:"Al enlace que une a las moléculas de agua se le denomina",
        op0:"Covalente.",
        op1:"Iónico.",
        op2:"Coordinado.",
        op3:"Puente de hidrógeno.",
        correcta:"3"
    },
    {
        id:64,
        pregunta:"Propiedad del agua gracias a la cual un insecto puede caminar sobre ella:",
        op0:"Densidad.",
        op1:"Tensión superficial.",
        op2:"Polaridad de la molécula.",
        op3:"Formación de puentes de hidrógeno.",
        correcta:"1"
    },
    {
        id:65,
        pregunta:"La solución cuyo pH es de 2 es una sustancia:",
        op0:"Neutra.",
        op1:"Básica.",
        op2:"Alcalina.",
        op3:"Ácida.",
        correcta:"3"
    },
    {
        id:66,
        pregunta:"Los desechos producidos por hospitales y rastros que contaminan el agua se clasifican como",
        op0:"Físicos y biológicos.",
        op1:"Físicos y químicos.",
        op2:"Mecánicos y químicos.",
        op3:"Químicos y biológicos.",
        correcta:"3"
    },
    {
        id:67,
        pregunta:"En el aire que respiramos, el elemento gaseoso que se encuentra en mayor cantidad es el",
        op0:"Hidrógeno.",
        op1:"Nitrógeno.",
        op2:"Oxígeno.",
        op3:"Ozono.",
        correcta:"1"
    },
    {
        id:68,
        pregunta:"El nitrógeno reacciona con el oxígeno en el motor de un automóvil para formar monóxido de nitrógeno (NO) y dióxido de nitrógeno (NO2). Las ecuaciones balanceadas que representan las reacciones son:",
        op0:"N2 + O2 → NO | N2 + O2 → NO2",
        op1:"N + O → NO | 2N + 2O → NO2",
        op2:"N2 + O2  → 2NO | N2 + O2 → 2NO2",
        op3:"N2 + O2  → 2NO | N2 + 2O2 → 2NO2",
        correcta:"3"
    },
    {
        id:69,
        pregunta:"Para la formación de un mol de cada uno de los siguientes gases a partir de sus elementos, ¿cuál reacción es la más exotérmica?",
        op0:"CO ∆Hº = -110.5kJ / mol",
        op1:"NO2 ∆Hº = +33.2kJ / mol",
        op2:"SO2 ∆Hº = -296.8kJ / mol",
        op3:"SO3 ∆Hº = -395.7kJ / mol",
        correcta:"3"
    },
    {
        id:70,
        pregunta:"Estructura de forma alargada constituida por una doble membrana, que interviene en la síntesis del ATP:",
        op0:"Lisosoma.",
        op1:"Aparato de Golgi.",
        op2:"Ribosoma.",
        op3:"Mitocondria.",
        correcta:"3"
    },
    {
        id:71,
        pregunta:"El proceso fotosintético que realizan los organismos es importante para los seres vivos porque produce moléculas para la vida como",
        op0:"Glucosa y bióxido de carbono.",
        op1:"Oxígeno y bióxido de carbono.",
        op2:"Glucosa y oxígeno.",
        op3:"Oxígeno y fósforo.",
        correcta:"2"
    },
    {
        id:72,
        pregunta:"La respiración es el proceso por el cual los organismos",
        op0:"Elaboran sus nutrientes.",
        op1:"Expulsan dióxido de carbono a la atmósfera.",
        op2:"Transforman compuestos orgánicos en inorgánicos.",
        op3:"Obtienen energía.",
        correcta:"3"
    },
    {
        id:73,
        pregunta:"Una célula presenta un número cromosómico con 46 XX; durante la mitosis, al dividirse, es de esperarse que forme células con",
        op0:"23 X.",
        op1:"23 XX.",
        op2:"46 XX.",
        op3:"46 XY.",
        correcta:"2"
    },
    {
        id:74,
        pregunta:"¿Cuál o cuáles de las siguientes son ventajas biológicas de la reproducción sexual?",
        op0:"III",
        op1:"I y II",
        op2:"I, II y III",
        op3:"II y III",
        correcta:"3",
        img:"pro.png"
    },
    {
        id:75,
        pregunta:"Cambio genético heredable:",
        op0:"Alteración.",
        op1:"Mutación.",
        op2:"Replicación.",
        op3:"Transcripción.",
        correcta:"1"
    },
    {
        id:76,
        pregunta:"En la actualidad, es la teoría más aceptada sobre el origen de los seres vivos:",
        op0:"Creacionista.",
        op1:"Endosimbiótica.",
        op2:"Vitalista.",
        op3:"Quimiosintética.",
        correcta:"3"
    },
    {
        id:77,
        pregunta:"¿Cuál es la premisa de la Teoría de Lamarck sobre la evolución de las especies?",
        op0:"La selección natural y la mutación son las causas de la evolución de las especies.",
        op1:"Los organismos actuales son el resultado de un largo proceso de adaptación y selección.",
        op2:"Los organismos mejor adaptados son los que dejan mayor número de descendientes.",
        op3:"La herencia de los caracteres adquiridos y la ley del uso y el desuso de los órganos.",
        correcta:"3"
    },
    {
        id:78,
        pregunta:"Son productores primarios:",
        op0:"Bacterias y hongos.",
        op1:"Hongos y algas.",
        op2:"Amibas y hongos.",
        op3:"Pastos y algas.",
        correcta:"3"
    },
    {
        id:79,
        pregunta:"Es la actividad humana que deteriora la calidad del suelo de los ecosistemas:",
        op0:"Crianza comercial de ganado vacuno y porcino.",
        op1:"Desecho de productos industriales en rellenos sanitarios.",
        op2:"Consumo de combustibles fósiles y emisión de CO y CO2.",
        op3:"Caza sin límite de especies en peligro de extinción.",
        correcta:"1"
    },
    {
        id:80,
        pregunta:"Países que practicaron un nacionalismo agresivo, autoritario y conservador, que difundieron el culto a los valores nacionales, el militarismo, la superioridad de la nación y la inferioridad de otros pueblos.",
        op0:"Inglaterra y Francia.",
        op1:"Rusia y Turquía.",
        op2:"Alemania e Italia.",
        op3:"Alemania y Rusia.",
        correcta:"2"
    },
    {
        id:81,
        pregunta:"Se le da el nombre de imperialismo al fenómeno de",
        op0:"Expansión del capitalismo ocurrido en el último tercio del siglo XIX.",
        op1:"Conquista y colonización europea del siglo XVI.",
        op2:"Dominación señorial en la Rusia zarista.",
        op3:"Restauración de las monarquías absolutas y la intolerancia religiosa.",
        correcta:"0"
    },
    {
        id:82,
        pregunta:"El motivo inmediato que ocasionó la salida de Rusia de la Primera Guerra Mundial fue la",
        op0:"Derrota en la batalla de los montes Tannemberg.",
        op1:"Firma del tratado de Brest-Litovsk.",
        op2:"Revolución bolchevique.",
        op3:"Derrota en Gallípoli.",
        correcta:"2"
    },
    {
        id:83,
        pregunta:"La crisis económica de 1929 en Estados Unidos de América se produjo debido a",
        op0:"Los problemas con la Unión de Repúblicas Soviéticas Socialistas.",
        op1:"La crisis de la Bolsa de Valores.",
        op2:"La rivalidad con Alemania.",
        op3:"El surgimiento del fascismo.",
        correcta:"1"
    },
    {
        id:84,
        pregunta:"Ordena cronológicamente los siguientes acontecimientos relacionados con la Segunda Guerra Mundial.",
        op0:"I, IV, V, II y III",
        op1:"II, V, I, III y IV",
        op2:"III, I, IV, V y II",
        op3:"IV, III, I, II y V",
        correcta:"0",
        img:"sgm.png"
    },
    {
        id:85,
        pregunta:"Alianzas económico-políticas e ideológicas con fines defensivos que se formaron como consecuencia de la rivalidad entre la Unión de Repúblicas Soviéticas Socialistas y Estados Unidos de América durante la guerra fría:",
        op0:"La OTAN y la ONU.",
        op1:"La ONU y el Pacto de Varsovia.",
        op2:"El OMC y la OEA.",
        op3:"El Pacto de Varsovia y la OTAN.",
        correcta:"3"
    },
    {
        id:86,
        pregunta:"Al desembarco de armamento en Cuba que incluía proyectiles, cohetes, botes de patrulla y cazas mig, así como técnicos e instructores de la Unión de Repúblicas Soviéticas Socialistas, se le conoció con el nombre de la",
        op0:"Enmienda Platt.",
        op1:"Crisis de los misiles.",
        op2:"Guerra de las Potencias.",
        op3:"Guerra de las galaxias.",
        correcta:"1"
    },
    {
        id:87,
        pregunta:"La revuelta obrera de Berlín (1953) y las revoluciones húngara (1956) y checoslovaca (1968) fueron luchas contra",
        op0:"La presencia militar de los Estados Unidos de América.",
        op1:"El imperialismo británico.",
        op2:"El autoritarismo comunista soviético.",
        op3:"La cortina de hierro.",
        correcta:"2"
    },
    {
        id:88,
        pregunta:"Ordena cronológicamente los siguientes acontecimientos.",
        op0:"I, IV, III, II y V",
        op1:"II, I, IV, V y III",
        op2:"II, V, I, III y IV",
        op3:"III, V, IV, II y I",
        correcta:"2",
        img:"israel1.png"
    },
    {
        id:89,
        pregunta:"Hecho que se consideró como el inicio de los cambios políticos a finales del siglo XX en la Europa del Este:",
        op0:"La paz armada.",
        op1:"La Guerra Fría.",
        op2:"La desaparición del muro de Berlín.",
        op3:"La Guerra de los Balcanes.",
        correcta:"2"
    },
    {
        id:90,
        pregunta:"Objetivo primordial de la Conspiración de Querétaro:",
        op0:"Constituir una junta gubernativa que tomara el poder a nombre de Fernando VII.",
        op1:"Llevar al poder al corregidor Don Miguel Domínguez.",
        op2:"Crear una confederación de estados americanos encabezada por Simón Bolívar.",
        op3:"Establecer una república democrática gobernada por Fray Vicente de Santamaría.",
        correcta:"0"
    },
    {
        id:91,
        pregunta:"Durante los primeros años de vida independiente nacieron en México varios grupos políticos con distintos planteamientos, algunos de ellos eran",
        op0:"Monarquistas, socialistas y centralistas.",
        op1:"Liberales, comunistas y conservadores.",
        op2:"Monarquistas, republicanos y anarquistas.",
        op3:"Federalistas, centralistas y monarquistas.",
        correcta:"3"
    },
    {
        id:92,
        pregunta:"La Constitución de 1857 fue",
        op0:"Conservadora.",
        op1:"Liberal.",
        op2:"Centralista.",
        op3:"Unicameral.",
        correcta:"1"
    },
    {
        id:93,
        pregunta:"Uno de los problemas que enfrentó la República restaurada fue",
        op0:"La carencia de capital para modernizar el país.",
        op1:"El enfrentamiento político con la Iglesia protestante.",
        op2:"El rompimiento de las relaciones diplomáticas con los Estados Unidos de América.",
        op3:"El interés del capital estadounidense por invertir en México.",
        correcta:"0"
    },
    {
        id:94,
        pregunta:"¿Cómo se llamó el grupo político que destacó durante el gobierno de Porfirio Díaz?",
        op0:"Los liberales.",
        op1:"Los Contemporáneos.",
        op2:"Los Científicos.",
        op3:"Los antirreleccionistas.",
        correcta:"2"
    },
    {
        id:95,
        pregunta:"El Partido Antirreeleccionista, la Decena Trágica, el Plan de San Luis, los Tratados de Ciudad Juárez, el sufragio efectivo, la sucesión presidencial de 1910 y el Partido Reyista se asocian a",
        op0:"El movimiento zapatista.",
        op1:"La dictadura huertista.",
        op2:"El régimen porfirista.",
        op3:"El movimiento maderista.",
        correcta:"3"
    },
    {
        id:96,
        pregunta:"Partido político con el que Plutarco Elías Calles logró debilitar el caudillismo.",
        op0:"Partido Nacional Revolucionario.",
        op1:"Partido Antirreeleccionista.",
        op2:"Partido Liberal Mexicano.",
        op3:"Partido Nacional Democrático.",
        correcta:"0"
    },
    {
        id:97,
        pregunta:"Se conoce como Maximato al periodo en el cual el poder lo tuvo",
        op0:"Álvaro Obregón.",
        op1:"Lázaro Cárdenas.",
        op2:"Plutarco Elías Calles.",
        op3:"Luis N. Morones.",
        correcta:"2"
    },
    {
        id:98,
        pregunta:"La posición de México ante la Segunda Guerra Mundial fue",
        op0:"Romper relaciones diplomáticas con los aliados.",
        op1:"No intervenir en ningún bando.",
        op2:"Vender petróleo a ambos contendientes.",
        op3:"Romper relaciones con las potencias del eje.",
        correcta:"3"
    },
    {
        id:99,
        pregunta:"Política económica que aplicó el gobierno de México de 1970-1982:",
        op0:"Corrupción de gobierno.",
        op1:"Avance económico.",
        op2:"Expansión comercial.",
        op3:"Desarrollo compartido.",
        correcta:"3"
    },
    {
        id:100,
        pregunta:"Cuando el usuario de la lengua muestra sensibilidad sociolingüística para escoger el lenguaje apropiado a su comunicación, reconocemos una propiedad textual denominada",
        op0:"Lengua culta.",
        op1:"Lógica gramatical.",
        op2:"Lingüística.",
        op3:"Adecuación.",
        correcta:"3"
    },
    {
        id:101,
        pregunta:"Obra que se ha concebido para que las acciones sean representadas por actores mediante el diálogo.",
        op0:"Texto dramático.",
        op1:"Ensayo.",
        op2:"Texto épico.",
        op3:"Novela.",
        correcta:"0"
    },
    {
        id:102,
        pregunta:"Elige las características propias del poema lírico:",
        op0:"Objetividad, profundidad y extensión",
        op1:"Argumentación, objetividad y ejemplificación",
        op2:"Individualismo y subjetividad",
        op3:"Veracidad, exactitud y desenlace",
        correcta:"2"
    },
    {
        id:103,
        pregunta:"Género literario que aborda asuntos heroicos, sus personajes se inspiran en figuras históricas y simbolizan valores universales de la colectividad.",
        op0:"Lírico.",
        op1:"Épico.",
        op2:"Dramático.",
        op3:"Didáctico.",
        correcta:"1"
    },
    {
        id:104,
        pregunta:"Escritor representante del Realismo español.",
        op0:"Camilo José Cela.",
        op1:"Miguel de Unamuno.",
        op2:"Benito Pérez Galdós.",
        op3:"Ramón del Valle Inclán.",
        correcta:"2"
    },
    {
        id:105,
        pregunta:"La obra Papá Goriot escrita por Honorato de Balzac, forma parte de",
        op0:"La divina comedia.",
        op1:"Grandes comedias.",
        op2:"Novelas ejemplares.",
        op3:"La comedia humana.",
        correcta:"3"
    },
    {
        id:106,
        pregunta:"Poeta mexicano de la segunda mitad del siglo XX, ganador del premio Nobel.",
        op0:"Carlos Fuentes.",
        op1:"Jaime Sabines.",
        op2:"Octavio Paz.",
        op3:"Carlos Monsiváis.",
        correcta:"2"
    },
    {
        id:107,
        pregunta:"Característica fundamental de la narración.",
        op0:"Argumentar una enseñanza moral.",
        op1:"Exaltar las virtudes de los protagonistas.",
        op2:"Describir lugares y personas.",
        op3:"Referir acontecimientos de lugares y personas.",
        correcta:"3"
    },
    {
        id:108,
        pregunta:"Un cuento se diferencia de una novela porque el cuento tiene",
        op0:"Amplio desarrollo psicológico de los personajes.",
        op1:"Desarrollo elaborado y rápido desenlace.",
        op2:"Brevedad y rápido desenlace.",
        op3:"Intensidad y múltiples hilos narrativos.",
        correcta:"2"
    },
    {
        id:109,
        pregunta:"La siguientes es una ficha: 'Fernández Moreno, Cesar. América Latina en su literatura, México, Siglo Veintiuno Editores, 1976, p. 25.'",
        op0:"Bibliográfica.",
        op1:"De resumen.",
        op2:"Hemerográfica.",
        op3:"De Cita.",
        correcta:"0"
    },
    {
        id:110,
        pregunta:"Si en el huso horario 0° son las 20:00 horas, ¿qué hora será en la Ciudad de Tijuana, México, cuyo huso horario es de 120° W?",
        op0:"10:00 hrs.",
        op1:"11:00 hrs.",
        op2:"12:00 hrs.",
        op3:"13:00 hrs.",
        correcta:"2"
    },
    {
        id:111,
        pregunta:"El estado de Chihuahua está recorrido por la Sierra",
        op0:"Madre Oriental.",
        op1:"Volcánica Transversal.",
        op2:"San Pedro Mártir.",
        op3:"Madre Occidental.",
        correcta:"3"
    },
    {
        id:112,
        pregunta:"País que ocupa el primer lugar en la producción de cobre:",
        op0:"Australia.",
        op1:"Chile.",
        op2:"China.",
        op3:"Perú.",
        correcta:"1"
    },
    {
        id:113,
        pregunta:"Las corrientes frías se relacionan con los grandes bancos pesqueros de especies altamente cotizadas como",
        op0:"Camarón y jaiba.",
        op1:"Jaiba y salmón.",
        op2:"Salmón y bacalao.",
        op3:"Ostión y camarón.",
        correcta:"2"
    },
    {
        id:114,
        pregunta:"La taiga es una región natural que se localiza en el",
        op0:"Sur de Estados Unidos de América, centro de Europa y Malasia.",
        op1:"Norte de Chile, norte de Suráfrica y Australia.",
        op2:"Norte de México, sur de Italia y sur de India.",
        op3:"Centro de Canadá, norte de Europa y Siberia.",
        correcta:"3"
    },
    {
        id:115,
        pregunta:"El aumento y retención del bióxido de carbono en la parte inferior de la atmósfera, ocasionado por la actividad industrial y los medios de transporte, está generando",
        op0:"El cambio global del agua.",
        op1:"El cambio climático global.",
        op2:"La alteración del viento.",
        op3:"La modificación del relieve.",
        correcta:"1"
    },
    {
        id:116,
        pregunta:"En la distribución poblacional actual de México influye",
        op0:"La existencia de amplios litorales.",
        op1:"El desarrollo de la frontera norte.",
        op2:"La pesca en las costas del Golfo.",
        op3:"El desarrollo petrolero del sureste.",
        correcta:"1"
    },
    {
        id:117,
        pregunta:"Son algunas características que distinguen a un país subdesarrollado:",
        op0:"I, IV y V",
        op1:"I, III y IV",
        op2:"II, III y V",
        op3:"III, IV y V",
        correcta:"0",
        img:"econo.png"
    },
    {
        id:118,
        pregunta:"La formación de nuevos países en Europa se asocia principalmente con la",
        op0:"Caída del socialismo.",
        op1:"Dependencia económica.",
        op2:"Regionalización económica.",
        op3:"Economía centralizada.",
        correcta:"0"
    },
    {
        id:119,
        pregunta:"Los estados de la República Mexicana que tienen un bajo grado de desarrollo industrial son",
        op0:"Morelos, México y Puebla.",
        op1:"Tlaxcala, Querétaro y Guanajuato.",
        op2:"Veracruz, Tabasco y Yucatán.",
        op3:"Guerrero, Oaxaca y Chiapas.",
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
        const textA = document.createTextNode(" Lectura ")
        a.href = pregunta.a;
        a.setAttribute('target', '_blank')
        contenedor.appendChild(a);
        contenedor.appendChild(br2)
        a.appendChild(textA)
    }
    
    //vamos a crear los tres labels
    //Lo vamos a hacer mediante una funciòn.
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

//creo la funciòn que que retornará el label con todo su contenido
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

function testStart(){
    overheader.classList.remove("hide");
    containerMain.classList.remove("hide");
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
    if (mls > 99) {
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
 
    time.innerHTML = `${ht}:${mt}:${st}.${mlst}`;
 };
 function reset() {
    clearInterval(timeStarted);
    time.innerHTML = "03:00:00.00"
    h = 3;
    m = 0;
    s = 0;
    mls = 0;
 }
 function stop() {
    clearInterval(timeStarted);
 }
