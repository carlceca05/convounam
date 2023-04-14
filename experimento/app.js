//base de datos local de preguntas


const bd_juego_O = [
    {
        id:96,
        pregunta:"Se tienen 5 bolsas de sal, cada una con 1.5 oz. Si se desea repartir su contenido entre 15 personas Â¿CuÃ¡ntos gramos le corresponden a cada persona? Considera: 1 oz = 28.34g.",
        op0:"28.34",
        op1:"14.17",
        op2:"56.68",
        op3:"42.51",
        correcta:"1"
    },
    {
        id:97,
        pregunta:"Al efectuar la operaciÃ³n (2x + 3y â€“ 4z) (2x â€“ 3y + 4z) se obtiene",
        op0:"4x^2 â€“ 9y^2 â€“ 16z^2",
        op1:"4x^2 â€“ 9y^2 â€“ 6xy + 16z^2",
        op2:"4x^2 + 9y^2 â€“ 24yz + 16^z",
        op3:"4x^2 â€“ 9y^2 + 24yz â€“ 16z^2",
        correcta:"0"
    },
    {
        id:98,
        pregunta:"El desarrollo del binomio (2a + 3ab)^2 es:",
        op0:"a^2 + 6a^2b + 9a^2b^2",
        op1:"a^2 + 2a^2b + a^2b^2",
        op2:"4a^2 + 4a^2b + a^2b^2",
        op3:"4a^2 + 12a^2b + 9a^2b^2",
        correcta:"3"
    },
    {
        id:99,
        pregunta:"La expresiÃ³n (4a^2âˆ’9b^2)/(2aâˆ’3b) se simplifica como:",
        op0:"1/(2a-3b)",
        op1:"1/(2a+3b)",
        op2:"2a - 3b",
        op3:"2a + 3b",
        correcta:"3"
    },
    {
        id:100,
        pregunta:"La soluciÃ³n de la siguiente ecuaciÃ³n es",
        op0:"a = 1",
        op1:"a = 3",
        op2:"a = 4",
        op3:"a = 5",
        correcta:"0",
        img:"a.png"
    },
    {
        id:101,
        pregunta:"Determina la soluciÃ³n de la siguiente desigualdad",
        op0:"xâ‰¥10/3",
        op1:"x â‰¤ -10/3",
        op2:"x â‰¤ 10/3",
        op3:"xâ‰¥-10/3",
        correcta:"2",
        img:"3x.png"
    },
    {
        id:102,
        pregunta:"Plantea matemÃ¡ticamente el siguiente problema. Â¿CuÃ¡ntas gallinas y borregos tenemos en un corral, si se sabe que hay 60 cabezas y 150 patas?",
        op0:"x + y = 150 | 2x + 4y = 60",
        op1:"2x + 2y = 60 | x + 4y = 150",
        op2:"x + y = 60 | 2x â€“ 4y = 150",
        op3:"x + y = 60 | 2x + 4y = 150",
        correcta:"3"
    },
    {
        id:103,
        pregunta:"Si f(x) = x^2 â€“ 1 entonces f(x + 2) es igual a:",
        op0:"x^2 + 4x + 3",
        op1:"x^2 + 3",
        op2:"x^2 + 2x + 3",
        op3:"x^2 + 4x + 1",
        correcta:"0"
    },
    {
        id:104,
        pregunta:"Expresa (3/8)Ï€ en grados",
        op0:"67.5Â°",
        op1:"65.0Â°",
        op2:"76.0Â°",
        op3:"76.5Â°",
        correcta:"0"
    },
    {
        id:105,
        pregunta:"Dada la siguiente figura, determina el valor de h.",
        op0:"44",
        op1:"66",
        op2:"72",
        op3:"88",
        correcta:"1",
        img:"hola.png"
    },
    {
        id:106,
        pregunta:"Â¿CuÃ¡l es el dominio de la funciÃ³n f(x) = Ln (2x)?",
        op0:"(0, âˆž)",
        op1:"(0, 2)",
        op2:"(2, âˆž)",
        op3:"(2, âˆž)",
        correcta:"0"
    },
    {
        id:107,
        pregunta:"Â¿CuÃ¡l es la distancia entre los puntos A (â€“ 3, 5) y B (â€“ 2, â€“ 1)?",
        op0:"âˆš15",
        op1:"âˆš17",
        op2:"âˆš35",
        op3:"âˆš37",
        correcta:"3"
    },
    {
        id:108,
        pregunta:"Â¿CuÃ¡l es la ecuaciÃ³n de la recta que pasa por los puntos (1,2) y (5,4)?",
        op0:"x + 2y â€“ 5 = 0",
        op1:"2x â€“ y + 3 = 0",
        op2:"x â€“ 2y + 3 = 0",
        op3:"2x â€“ y â€“ 5 = 0",
        correcta:"2"
    },
    {
        id:109,
        pregunta:"Es el lugar geomÃ©trico donde todos los puntos de un plano equidistan de un punto fijo llamado centro.",
        op0:"Elipse",
        op1:"ParÃ¡bola",
        op2:"Circunferencia",
        op3:"HipÃ©rbola",
        correcta:"2"
    },
    {
        id:110,
        pregunta:"Â¿CuÃ¡l es la ecuaciÃ³n de una parÃ¡bola que tiene su vÃ©rtice en V (1,0) y su foco en F (1,2)?",
        op0:"x^2 + 2x â€“ 8y + 1 = 0",
        op1:"x^2 â€“ 2x â€“ 8y + 1 = 0",
        op2:"x^2 â€“ 2x + 2y + 1 = 0",
        op3:"x^2 â€“ 2x â€“ 2y + 1 = 0",
        correcta:"1"
    },
    {
        id:111,
        pregunta:"La ecuaciÃ³n de la hipÃ©rbola centrada en el origen con lado recto 10 y vÃ©rtice V( 0, â€“9) es:",
        op0:"5y^2 - 9x^2 = 405",
        op1:"45y^2 + 81x^2 = 405",
        op2:"9y^2 - 10x^2 = 90",
        op3:"10y^2 + 9x^2 = 90",
        correcta:"0"
    },
    {
        id:112,
        pregunta:"Â¿CuÃ¡l es el centro de la hipÃ©rbola (xâˆ’2)^2/25 â€“ (y + 7)^2/9 = 1?",
        op0:"C (5,7)",
        op1:"C (â€“5,7)",
        op2:"C (2, â€“7)",
        op3:"C (â€“2, â€“7)",
        correcta:"3"
    },
    {
        id:113,
        pregunta:"La ecuaciÃ³n general de la circunferencia con centro (h, k) y radio r es:",
        op0:"x^2 + y^2 + Dx + Ey + F = 0",
        op1:"2x^2 + y^2 + Dx + Ey + F = 0",
        op2:"x^2 â€“ y^2 + Dx + Ey + F = 0",
        op3:"x^2 + 2y^2 + Dx + Ey + F = 0",
        correcta:"0"
    },
    {
        id:114,
        pregunta:"Calcula",
        op0:"â€“ 8",
        op1:"4",
        op2:"âˆž",
        op3:"0",
        correcta:"0",
        img:"lim.png"
    },
    {
        id:115,
        pregunta:"La derivada es:",
        op0:"x^2e^x",
        op1:"2xe^x",
        op2:"x^2e^x + 2xe^x",
        op3:"2xe^x + x^2e^2",
        correcta:"3",
        img:"derivada.png"
    },
    {
        id:116,
        pregunta:"La derivada de la funciÃ³n f(x) 2e^2, es:",
        op0:"f'(x) = 2e^2",
        op1:"f'(x) = 2+e^x",
        op2:"f'(x) = e^2x",
        op3:"f'(x) = (e^2x)/2",
        correcta:"0"
    },
    {
        id:117,
        pregunta:"La abscisa del punto de inflexiÃ³n de la funciÃ³n f(x) = x^3 - 6x^2 + 3 es",
        op0:"1",
        op1:"-13",
        op2:"2",
        op3:"-29",
        correcta:"2"
    },
    {
        id:118,
        pregunta:"Â¿CuÃ¡l es la segunda derivada de 2e^x?",
        op0:"4e^(2x)",
        op1:"8e^x",
        op2:"2e^x",
        op3:"2e^(2x)",
        correcta:"2"
    },
    {
        id:119,
        pregunta:"Al resolver la integral âˆ«(4x^3 + (sec^2)x)dx, se obtiene:",
        op0:"x^4 tan^2 x + C",
        op1:"x^4 - secxtanx + C",
        op2:"x^4 + tanx + C",
        op3:"4x^4 + cosx",
        correcta:"2",
    }
]
const bd_juego_fis = [
    {
        id:0,
        pregunta:"Una persona camina 40 metros en 80 segundos, despuÃ©s se detiene 10s y finalmente recorre 20 metros en 10s. Â¿CuÃ¡l es rapidez media?",
        op0:"60m/s",
        op1:"6m/s",
        op2:"0.6m/s^2",
        op3:"0.6m/s",
        correcta:"3"
    },
    {
        id:1,
        pregunta:"Un microondas de 1200W de potencia se coloca a una diferencia de potencial de 120V. Calcula la intensidad de corriente.",
        op0:"1000A",
        op1:"100A",
        op2:"10A",
        op3:"2A",
        correcta:"2"
    },
    {
        id:2,
        pregunta:"Â¿CuÃ¡l de los siguientes materiales sirve para medir la antigÃ¼edad de los fÃ³siles?",
        op0:"Carbono 14",
        op1:"Carbono 12",
        op2:"Cobalto Co",
        op3:"Cromo Cr",
        correcta:"0"
    },
    {
        id:3,
        pregunta:"Â¿CuÃ¡l es el peso de un cuerpo de 10Kg?",
        op0:"9.8N",
        op1:"990N",
        op2:"9800N",
        op3:"98N",
        correcta:"3"
    },
    {
        id:4,
        pregunta:"Un gato hidrÃ¡ulico se utiliza para cambiar la llanta de un coche. Si se le aplica una fuerza de 80N en un Ã¡rea de 5cm2 sobre el Ã©mbolo del pistÃ³n y el auto se recarga en un Ã¡rea de 25cm2 Â¿QuÃ© fuerza se genera?",
        op0:"400N",
        op1:"40N",
        op2:"4000N",
        op3:"20N",
        correcta:"0"
    },
    {
        id:5,
        pregunta:"En un cuerpo con MRU Â¿CÃ³mo aumentas su velocidad?",
        op0:"Disminuyendo su cantidad de inercia",
        op1:"Aumentando su cantidad de inercia",
        op2:"Manteniendo una aceleraciÃ³n constante",
        op3:"Disminuyendo su aceleraciÃ³n",
        correcta:"0"
    },
    {
        id:6,
        pregunta:"Durante un experimento se ponen en contacto 200g de un determinado material a una temperatura de 20Â°C con otro de 100g del mismo material a 50Â°C Â¿CuÃ¡l es la temperatura de equilibrio entre los materiales?",
        op0:"20Â°C",
        op1:"30Â°C",
        op2:"50Â°C",
        op3:"70Â°C",
        correcta:"1"
    },
    {
        id:7,
        pregunta:"CuÃ¡les de los siguientes son ejemplos de I- ReflexiÃ³n II-RefracciÃ³n",
        op0:"I-c, II-b",
        op1:"I-a, II-b",
        op2:"I-b, II-a",
        op3:"I-c, II-a",
        correcta:"2",
        img:"refraccion.png"
    },
    {
        id:8,
        pregunta:"Desde cierta altura se deja caer una piedra en un estanque Â¿CÃ³mo son las ondas que se forman en el agua?",
        op0:"Las ondas son transversales, pues se desplazan de forma perpendicular con respecto a la direcciÃ³n del movimiento",
        op1:"Las ondas son circulares, formando un Ã¡ngulo agudo y tienen vibraciÃ³n.",
        op2:"Las ondas son paralelas, formando un Ã¡ngulo agudo y tienen vibraciÃ³n.",
        op3:"Las ondas estacionarias, formando un Ã¡ngulo perpendicular y al mismo tiempo tienen vibraciÃ³n.",
        correcta:"0"
    },
    {
        id:9,
        pregunta:"En un circuito impreso tenemos un circuito conectado en serie cuya resistencia total es de 10 Î© y le proporcionamos una diferencia de potencial de 6 V, calcula la corriente que fluye por el circuito.",
        op0:"60 A",
        op1:"1.6 A",
        op2:"0.6 A",
        op3:"360 A",
        correcta:"2"
    },
    {
        id:10,
        pregunta:"Se define como la velocidad con la que se realiza un trabajo.",
        op0:"Trabajo",
        op1:"Rapidez",
        op2:"AceleraciÃ³n",
        op3:"Potencia",
        correcta:"3"
    },
    {
        id:11,
        pregunta:"La bomba atÃ³mica se basa en el principio de",
        op0:"FisiÃ³n nuclear",
        op1:"FusiÃ³n nuclear",
        op2:"Dalton",
        op3:"Albert Einstein",
        correcta:"0"
    }
]
const bd_juego_lit = [
    {
        id:12,
        pregunta:"El poeta________ iniciÃ³ la corriente modernista:",
        op0:"RubÃ©n DarÃ­o",
        op1:"Amado Nervo",
        op2:"Manuel AcuÃ±a",
        op3:"Luis G. Urbina",
        correcta:"0"
    },
    {
        id:13,
        pregunta:"El editorial de un texto periodÃ­stico tiene mucha semejanza con el:",
        op0:"ArtÃ­culo de opiniÃ³n",
        op1:"Ficha bibliogrÃ¡fica",
        op2:"Ficha HemerogrÃ¡fica",
        op3:"Cita textual",
        correcta:"0"
    },
    {
        id:14,
        pregunta:"Autor principal espaÃ±ol del Realismo",
        op0:"Benito PÃ©rez GaldÃ³s",
        op1:"RubÃ©n DarÃ­o",
        op2:"Antonio Manchado",
        op3:"Juan Rulfo",
        correcta:"0"
    },
    {
        id:15,
        pregunta:"La narraciÃ³n en prosa relativamente breve, se le denomina",
        op0:"Mito",
        op1:"Novela",
        op2:"Cuento",
        op3:"Leyenda",
        correcta:"2"
    },
    {
        id:16,
        pregunta:"En un texto dramÃ¡tico Â¿QuÃ© personaje se opone al personaje principal?",
        op0:"Protagonista",
        op1:"Secundario",
        op2:"Ambiental",
        op3:"Antagonista",
        correcta:"3"
    },
    {
        id:17,
        pregunta:"En base al libro titulado la poÃ©tica de AristÃ³teles elige la opciÃ³n que tenga caracterÃ­sticas correctas:",
        op0:"AristÃ³teles decÃ­a: lo Ã©pico es lo Heroico, lo lirico es subjetivo y lo dramÃ¡tico es representativo",
        op1:"AristÃ³teles decÃ­a: lo Ã©pico es subjetivo, lo lirico es heroico y lo dramÃ¡tico es representativo",
        op2:"AristÃ³teles decÃ­a: lo Ã©pico es representativo, o lirico es subjetivo y lo dramÃ¡tico es heroico",
        op3:"AristÃ³teles decÃ­a: o Ã©pico es heroico, lo lirico es representativo y lo dramÃ¡tico es subjetivo",
        correcta:"0"
    },
    {
        id:18,
        pregunta:"Â¿CuÃ¡les son las caracterÃ­sticas propias de la literatura contemporÃ¡nea?  I-sus personajes tienen conflictos morales, psicolÃ³gicos, sexuales y emocionales  II- describe fotogrÃ¡ficamente mezclando elementos cotidianos con el realismo mÃ¡gico  III- pedro paramo y rayuela son algunas de sus obras caracterÃ­sticas  IV-esta generaciÃ³n literaria es exclusivamente espaÃ±ola  V- se opone a la crudeza de naturalismo  VI- exaltaciÃ³n de yo, subjetivismo",
        op0:"I,III,V",
        op1:"II,V,VI",
        op2:"I,II,III",
        op3:"I,III,VI",
        correcta:"2"
    },
    {
        id:19,
        pregunta:"Â¿QuÃ© tipo de ficha es?: Revueltas, JosÃ© â€œla literaturaâ€ envuelta vol. 1. NÃºmero 2. PÃ¡g. 6-7",
        op0:"Ficha bibliogrÃ¡fica",
        op1:"Ficha HemerogrÃ¡fica",
        op2:"Cita textual",
        op3:"ArtÃ­culo de opiniÃ³n",
        correcta:"1"
    },
    {
        id:20,
        pregunta:"Las caracterÃ­sticas de Realismo son:",
        op0:"Teocentrismo y la literatura caballeresca",
        op1:"Lo estÃ©tico, bello y musical",
        op2:"La aplicaciÃ³n de mÃ©todo cientÃ­fico",
        op3:"Analiza y describe el comportamiento del hombre, deja a fantasÃ­a y hace una representaciÃ³n fiel de la realidad",
        correcta:"3"
    },
    {
        id:21,
        pregunta:"Escritor francÃ©s que escribiÃ³ MADAME BOVARY",
        op0:"Juan Valera",
        op1:"Honore de Balzac",
        op2:"Gustave Flaubert",
        op3:"Benito PÃ©rez GaldÃ³s",
        correcta:"2"
    }
]
const bd_juego_qui = [
    {
        id:22,
        pregunta:"Compuesto que contiene la funciÃ³n de alcohol.",
        op0:"CH3-CH2-OH",
        op1:"CH3-CH2-Br",
        op2:"CH3-CH2-O-CH2-CH3",
        op3:"CH2=CH2",
        correcta:"0"
    },
    {
        id:23,
        pregunta:"CuÃ¡l es el Ã¡cido mÃ¡s fuerte",
        op0:"NH4CL",
        op1:"H2SO4",
        op2:"CH3-COOH",
        op3:"NaOH",
        correcta:"1"
    },
    {
        id:24,
        pregunta:"Si el nÃºmero atÃ³mico de un elemento es 25 y su masa atÃ³mica es 55, Â¿CuÃ¡ntos protones, electrones, neutrones contiene?",
        op0:"P=25, e= 25, n=30",
        op1:"P=30 e= 25, n=25",
        op2:"P=25, e=30 n= 25",
        op3:"P=30, e=25 n=30",
        correcta:"0"
    },
    {
        id:25,
        pregunta:"QuÃ© condiciones favorecen la siguiente reacciÃ³n CH4 + 2O2 => CO2 + H2O",
        op0:"50 atm",
        op1:"30atm",
        op2:"15atm",
        op3:"5atm",
        correcta:"0"
    },
    {
        id:26,
        pregunta:"Â¿CuÃ¡l es un oxido bÃ¡sico?",
        op0:"CO2",
        op1:"NO2",
        op2:"SO3",
        op3:"CaO",
        correcta:"3"
    },
    {
        id:27,
        pregunta:"Â¿CuÃ¡l es a funciÃ³n de los lÃ­pidos?",
        op0:"Reserva de energÃ­a a corto plazo",
        op1:"Reserva de energÃ­a a largo pazo",
        op2:"Que se aprovechan todas sus carias",
        op3:"Contienen esteres de Ã¡cidos grasos y glicerol",
        correcta:"1"
    },
    {
        id:28,
        pregunta:"Â¿CuÃ¡l de los siguientes tiene una hibridaciÃ³n SP?",
        op0:"Hexano",
        op1:"Buteno",
        op2:"Propano",
        op3:"2-propino",
        correcta:"3"
    },
    {
        id:29,
        pregunta:"De la siguiente configuraciÃ³n electrÃ³nica 1s22s22p4 Â¿CuÃ¡ntos electrones faltan para llegar a la familia de los gases nobles",
        op0:"Sumarle 4 electrones",
        op1:"Restarle 2 electrones",
        op2:"Sumarle 2 electrones",
        op3:"Sumare 3 electrones",
        correcta:"2"
    },
    {
        id:30,
        pregunta:"Compuesto que contiene la funciÃ³n Ã©ter.",
        op0:"CH3 - CH2 - CH2 - O - CH2 - CH3",
        op1:"CH3-CH2-OH",
        op2:"CH3-CH2-Br",
        op3:"CH2=CH2",
        correcta:"0"
    },
    {
        id:31,
        pregunta:"Clasifica los siguientes contaminantes en quÃ­micos biolÃ³gicos y fÃ­sicos",
        op0:"I-a, d, II-b, e, III-c, f",
        op1:"I-ba, ll-ef, III-dc",
        op2:"I-de, II,bf, III, ca",
        op3:"I-bc, II-ab, III-fe",
        correcta:"0",
        img:"bacteria.png"
    },
    {
        id:32,
        pregunta:"Â¿CuÃ¡l es el nÃºmero de oxidaciÃ³n de carbono en CaCO3?",
        op0:"-4",
        op1:"4",
        op2:"2",
        op3:"-2",
        correcta:"1"
    },
    {
        id:33,
        pregunta:"Â¿QuÃ© pasa cuando aumentas a temperatura de un gas?",
        op0:"Aumenta a energÃ­a potencia y disminuye la energÃ­a cinÃ©tica",
        op1:"Disminuye e volumen y a energÃ­a interna",
        op2:"Aumenta e volumen y aumenta la energÃ­a cinÃ©tica",
        op3:"Disminuye a energÃ­a potencial y disminuye a energÃ­a interna",
        correcta:"2"
    },
    {
        id:34,
        pregunta:"Relaciona los tipos de soluciones",
        op0:"I-a, II-b, III-c, IV-d",
        op1:"I-b, II-c, III-d, IV-a",
        op2:"I-d, II-c, III-b, IV-a",
        op3:"I-c, II-a, III-d, IV-b",
        correcta:"0",
        img:"diluida.png"
    }
]
const bd_juego_geo = [
    {
        id:35,
        pregunta:"Â¿QuÃ© estudia la GeografÃ­a?",
        op0:"Explicar la relaciÃ³n entre los elementos naturales y sociales del medio geogrÃ¡fico",
        op1:"Diferenciar las causas y efectos de los hechos y fenÃ³menos geogrÃ¡ficos",
        op2:"Conocer los efectos terrestres provocados por los fenÃ³menos naturales",
        op3:"Localizar los elementos naturales y sociales sobre la superficie terrestre",
        correcta:"0"
    },
    {
        id:36,
        pregunta:"Selecciona las caracterÃ­sticas de paÃ­ses desarrollados: I-Escaza poblaciÃ³n infantil II-predominio de actividades primarias III-alto Ã­ndice de natalidad IV- actividades terciarias V- bajo ingreso per cÃ¡pita.",
        op0:"I, IV",
        op1:"I,II,III",
        op2:"II,IV",
        op3:"I,IV",
        correcta:"3"
    },
    {
        id:37,
        pregunta:"Ubicar en el mapa las cordilleras de mundo",
        op0:"I-Rocosas, II-Alpes, III-CÃ¡ucaso",
        op1:"I-Altiplanicie, II-Balcanes, III-Himalaya",
        op2:"I-Cierra nevada, II- Balcanes, III-Rocosas",
        op3:"I-Sierra madre, II-CÃ¡rpatos, III-Urales",
        correcta:"0",
        img:"cordillera.png"
    },
    {
        id:38,
        pregunta:"La poblaciÃ³n Turca Â¿A quÃ© paÃ­s de la UniÃ³n Europea emigra?",
        op0:"BÃ©lgica",
        op1:"Portugal",
        op2:"EspaÃ±a",
        op3:"Alemania",
        correcta:"3"
    },
    {
        id:39,
        pregunta:"Principal fuente de abastecimiento de agua dulce para los continentes",
        op0:"CondensaciÃ³n",
        op1:"Escurrimiento",
        op2:"PrecipitaciÃ³n",
        op3:"Los casquetes polares",
        correcta:"2"
    },
    {
        id:40,
        pregunta:"Debido a la colisiÃ³n de las placas tectÃ³nicas se produce: I-Islas II-Plataforma continental III- Volcanes IV- Talud continental V- Rocas",
        op0:"I, III",
        op1:"I, II",
        op2:"III, IV",
        op3:"III, V",
        correcta:"0"
    },
    {
        id:41,
        pregunta:"De acuerdo a la grÃ¡fica de pirÃ¡mide de edades el paÃ­s de__________________ tendrÃ¡ problemas de mano de obra e inmigraciÃ³n",
        op0:"Alemania",
        op1:"EspaÃ±a",
        op2:"Italia",
        op3:"BÃ©lgica",
        correcta:"0",
        img:"alemania.png"
    },
    {
        id:42,
        pregunta:"Â¿QuÃ© paÃ­s se creÃ³ al separarse Yugoslavia",
        op0:"Letonia",
        op1:"Republica checa",
        op2:"Croacia",
        op3:"Yemen",
        correcta:"2"
    },
    {
        id:43,
        pregunta:"A pesar de la extensiÃ³n del litoral del pacifico Â¿QuÃ© causa la baja producciÃ³n de pesca?: I-insuficiencia de puertos II-por la falta de personas para trabajar III-falta de inversiÃ³n en la pesca IV-por las corrientes marinas frÃ­as",
        op0:"I, II",
        op1:"I,IV",
        op2:"III,IV",
        op3:"I,III",
        correcta:"3"
    },
    {
        id:44,
        pregunta:"La industria mÃ¡s importante en la ciudad de Monterrey es la",
        op0:"FarmacÃ©utica",
        op1:"PetroquÃ­mica",
        op2:"Textil",
        op3:"SiderÃºrgica",
        correcta:"3"
    }
]
const bd_juego_es = [
    {
        id:45,
        pregunta:"Â¿CuÃ¡l es la idea principal del pÃ¡rrafo uno?",
        op0:"Darwin tenÃ­a miedo de que sus hijos fueran enfermizos o dÃ©biles",
        op1:"Darwin y Emma eran primos hermanos",
        op2:"Darwin tuvo 10 hijos",
        op3:"Que la consanguinidad deteriora las siguientes generaciones",
        correcta:"0",
        a:"https://unidior.com/esquiz/comprension/lectura3"
    },
    {
        id:46,
        pregunta:"'El mÃ¡s relevante de los Darwin' sabÃ­a que la consanguinidad deteriora las siguientes generaciones. Las palabras entre comillas se refieren a:",
        op0:"Charles Darwin",
        op1:"El padre de Darwin",
        op2:"El hijo de Darwin",
        op3:"El abuelo de Darwin",
        correcta:"0",
        a:"https://unidior.com/esquiz/comprension/lectura3"
    },
    {
        id:47,
        pregunta:"Â¿QuÃ© es la endogamia?",
        op0:"Revisa la consanguinidad en la ascendencia",
        op1:"Matrimonio entre hermanos",
        op2:"Mermar la fertilidad de los descendientes",
        op3:"Una enfermedad hereditaria",
        correcta:"0",
        a:"https://unidior.com/esquiz/comprension/lectura3"
    },
    {
        id:48,
        pregunta:"Â¿QuiÃ©n fue el primero en estudiar los efectos de la endogamia?",
        op0:"El naturalista",
        op1:"El genetista",
        op2:"Los cientÃ­ficos de la actualidad",
        op3:"El padre de Darwin",
        correcta:"0",
        a:"https://unidior.com/esquiz/comprension/lectura3"
    },
    {
        id:49,
        pregunta:"Â¿Por quÃ© la dinastÃ­a Darwin-wedgwood es perfecta para estudiar la endogamia?",
        op0:"Porque estas familias se emparentaron entre ellas durante muchas generaciones",
        op1:"Porque Darwin y Emma eran primos hermanos",
        op2:"Porque la calidad de su esperma era menor y los hombre de la familia eran menos fÃ©rtiles",
        op3:"Por las condiciones de vida de los Darwin",
        correcta:"0",
        a:"https://unidior.com/esquiz/comprension/lectura3"
    },
    {
        id:50,
        pregunta:"Â¿CuÃ¡l es la oraciÃ³n con la ortografÃ­a correcta?: No te de_es re__elar porque las e_idencias no se pueden re_elar",
        op0:"b, b, v, v",
        op1:"b, v, v, b",
        op2:"v, b, v, b",
        op3:"v, v, b, b",
        correcta:"0"
    },
    {
        id:51,
        pregunta:"FunciÃ³n que se dirige a oyente y pretende causar una reacciÃ³n en este",
        op0:"FunciÃ³n metalingÃ¼Ã­stica",
        op1:"FunciÃ³n referencial",
        op2:"FunciÃ³n apelativa",
        op3:"FunciÃ³n fÃ¡tica",
        correcta:"2"
    },
    {
        id:52,
        pregunta:"El pobre vagabundo recorre la urbe Â¿vagabundo funciona cÃ³mo?",
        op0:"NÃºcleo del predicado",
        op1:"Adjetivo",
        op2:"NÃºcleo del sujeto",
        op3:"Sujeto",
        correcta:"2"
    },
    {
        id:53,
        pregunta:"Â¿QuÃ© funciÃ³n de la lengua predomina en? 'hombre cohete......araÃ±a vuela y rompe su tela'",
        op0:"PoÃ©tica",
        op1:"FÃ¡tica",
        op2:"Referencial",
        op3:"Apelativa",
        correcta:"0"
    },
    {
        id:54,
        pregunta:"En la siguiente oraciÃ³n â€œCerro la puerta con cuidadoâ€ cumple la funciÃ³n de:",
        op0:"Complemento circunstancial de modo",
        op1:"Complemento directo",
        op2:"Complemento indirecto",
        op3:"Complemento circunstancial de tiempo",
        correcta:"0"
    },
    {
        id:55,
        pregunta:"En el siguiente enunciado, identifica la funciÃ³n de las palabras en mayÃºsculas. Considera el contexto: â€œLa seÃ±ora RamÃ­rez vio vagar sobre los labios de los jefes UNA SONRISAâ€",
        op0:"Predicado.",
        op1:"Objeto directo.",
        op2:"Objeto indirecto.",
        op3:"Objeto circunstancial",
        correcta:"1"
    },
    {
        id:56,
        pregunta:"Selecciona la opciÃ³n que presenta un sujeto tÃ¡cito o implÃ­cito.",
        op0:"Somos nada frente a la muerte infausta.",
        op1:"Feliz aquÃ©l que busca a Dios en sÃ­ mismo.",
        op2:"Â¡SeÃ±or!, tiembla mi alma ante tu grandeza.",
        op3:"Yo he subido mÃ¡s alto, mucho mÃ¡s alto.",
        correcta:"0"
    },
    {
        id:57,
        pregunta:"Â¿CuÃ¡l es la forma del discurso del siguiente pÃ¡rrafo?: El vocablo CoyoacÃ¡n es el resultado de una serie de transformaciones que en su escritura y transformaciones sufriÃ³ la palabra nÃ¡huatl, coyo-acan. La versiÃ³n mÃ¡s aceptada es la que define como lugar de los que tienen o poseen coyotes basada en la explicaciÃ³n del topÃ³nimo original que se compone de tres Vocales en nÃ¡huatl: coyotl, coyote; hua, posesiÃ³n y con, lugar.",
        op0:"Argumentativo",
        op1:"NarraciÃ³n",
        op2:"DescripciÃ³n",
        op3:"DiÃ¡logo",
        correcta:"0"
    },
    {
        id:58,
        pregunta:"Elige el pÃ¡rrafo con la mejor redacciÃ³n.",
        op0:"En este orden, la posibilidad y el origen del conocimiento son algunos problemas a considerar. Presenta el conocimiento, para iniciar, asÃ­ una vertiente filosÃ³fica que no podemos soslayar si queremos profundizar en el tema.",
        op1:"AsÃ­, la posibilidad y el origen del conocimiento son algunos problemas a considerar que presenta el conocimiento. Para iniciar, una vertiente filosÃ³fica que no podemos soslayar si queremos profundizar en el tema.",
        op2:"El conocimiento, en el inicio, ofrece una vertiente filosÃ³fica que no podemos soslayar si queremos profundizar en el tema. De modo que la posibilidad y el origen del conocimiento son algunos problemas a considerar.",
        op3:"El conocimiento, en principio, ofrece una vertiente filosÃ³fica que no podemos soslayar si queremos profundizar en el tema. En este orden, la posibilidad y el origen del conocimiento son algunos problemas clave.",
        correcta:"3"
    },
    {
        id:59,
        pregunta:"Â¿CuÃ¡l es la redacciÃ³n correcta?",
        op0:"HabÃ­an mucha gente en la plaza",
        op1:"Hubieron muchos que estaban inconformes",
        op2:"HabÃ­a mucha gente en la plaza",
        op3:"HabÃ­an muchos inconformes.",
        correcta:"2"
    },
    {
        id:60,
        pregunta:"Indique la palabra con ortografÃ­a correcta.",
        op0:"Tanbien",
        op1:"Hiba",
        op2:"Compungido",
        op3:"Cancion",
        correcta:"2"
    },
    {
        id:61,
        pregunta:"AntÃ³nimo de niÃ±ez",
        op0:"Senil",
        op1:"Infancia",
        op2:"Adulto",
        op3:"NiÃ±o",
        correcta:"0"
    },
    {
        id:62,
        pregunta:"CuÃ¡l es la AnalogÃ­a de BÃ³veda celeste es a azul como",
        op0:"Acantilado a vacÃ­o",
        op1:"Acantilado a Libre",
        op2:"Mar a azul",
        op3:"Cielo a caÃ­da",
        correcta:"0"
    }
]
const bd_juego_bio = [
    {
        id:63,
        pregunta:"Si se hidroliza el ATP se obtiene:",
        op0:"ADP",
        op1:"2ATP",
        op2:"ADN",
        op3:"ARP",
        correcta:"0"
    },
    {
        id:64,
        pregunta:"La que ordena, clasifica y da nombre a los organismos.",
        op0:"EcologÃ­a",
        op1:"MorfologÃ­a",
        op2:"TaxonomÃ­a",
        op3:"FisiologÃ­a",
        correcta:"2"
    },
    {
        id:65,
        pregunta:"Organismos de la misma especie que se encuentran en el mismo espacio y tiempo.",
        op0:"Comunidad",
        op1:"EcologÃ­a",
        op2:"PoblaciÃ³n",
        op3:"Nicho",
        correcta:"2"
    },
    {
        id:66,
        pregunta:"Porque el cloroplasto tiene un metabolismo anaerobio",
        op0:"Porque capta fotones de ondas de luz",
        op1:"Produce diÃ³xido de carbono",
        op2:"Produce ATP",
        op3:"Produce demasiado oxigeno",
        correcta:"0"
    },
    {
        id:67,
        pregunta:"Relaciona las columnas:",
        op0:"Ib, IIa, IIIc, IVe, Vd",
        op1:"Ic, IIa, IIIe, IVb, Vd",
        op2:"Ib, IIa, IIIe, IVc, Vd",
        op3:"Ia, IIb, IIIe, IVc, Vd",
        correcta:"2",
        img:"mito.png"
    },
    {
        id:68,
        pregunta:"Relaciona las columnas:",
        op0:"Ic, IIb, IIIa",
        op1:"Ib, IIa, IIIc",
        op2:"Ib, IIc, IIIa",
        op3:"Ic, IIa, IIIb",
        correcta:"2",
        img:"lamark.png"
    },
    {
        id:69,
        pregunta:"Es la fase en la que los cromosomas se encuentran alineados en el huso acromÃ¡tico.",
        op0:"Profase",
        op1:"Anafase",
        op2:"Metafase",
        op3:"Telofase",
        correcta:"2"
    },
    {
        id:70,
        pregunta:"La______________ sirve para la evoluciÃ³n:",
        op0:"MutaciÃ³n",
        op1:"BiparticiÃ³n",
        op2:"EsporulaciÃ³n",
        op3:"PartenogÃ©nesis",
        correcta:"0"
    },
    {
        id:71,
        pregunta:"Â¿CuÃ¡les eran las caracterÃ­sticas de la tierra primitiva?",
        op0:"Similar a la tierra actual",
        op1:"Erupciones volcÃ¡nicas, tormentas elÃ©ctricas y oxigeno de carÃ¡cter reductor",
        op2:"Similar a la tierra actual, con diÃ³xido de carbono y metano",
        op3:"Oxigeno reductor, similar a la tierra actual",
        correcta:"1"
    },
    {
        id:72,
        pregunta:"Â¿En cuÃ¡l de los siguientes climas hay una mayor variabilidad de especies?",
        op0:"Desierto",
        op1:"Tundra",
        op2:"Estepa",
        op3:"Selva",
        correcta:"3"
    },
    {
        id:73,
        pregunta:"Es un tipo de enfermedad ligada a los cromosomas sexuales:",
        op0:"Hemofilia",
        op1:"Amofilia",
        op2:"TrisomÃ­a",
        op3:"Fenilcetonuria",
        correcta:"0"
    },
    {
        id:74,
        pregunta:"La reproducciÃ³n sexual se caracteriza por",
        op0:"FusiÃ³n de cÃ©lulas haploides especializadas",
        op1:"Que el desarrollo se realiza dentro de uno de los progenitores",
        op2:"Se realiza a partir de cÃ©lulas diploides",
        op3:"Se requiere de un solo progenitor",
        correcta:"0"
    },
    {
        id:75,
        pregunta:"CaracterÃ­stica de la membrana celular",
        op0:"Permeable",
        op1:"Semipermeable",
        op2:"Porosa",
        op3:"Lisa",
        correcta:"1"
    }
]
const bd_juego_hu = [
    {
        id:76,
        pregunta:"Â¿CuÃ¡l fue la consecuencia polÃ­tica de la ilustraciÃ³n?",
        op0:"Despotismo ilustrado",
        op1:"Absolutismo",
        op2:"Ludismo",
        op3:"Cartismo",
        correcta:"0"
    },
    {
        id:77,
        pregunta:"Causas de la segunda revoluciÃ³n cientÃ­fica y tecnologÃ­a",
        op0:"MÃ¡quina de vapor",
        op1:"Uso del carbÃ³n",
        op2:"RobÃ³tica",
        op3:"Electricidad y petrÃ³leo",
        correcta:"3"
    },
    {
        id:78,
        pregunta:"El desempleo, la inflaciÃ³n de los productos, la nacionalizaciÃ³n de los bancos y el fin de las importaciones. Son caracterÃ­sticas de:",
        op0:"DevaluaciÃ³n del peso mexicano",
        op1:"Crack de Wall Street",
        op2:"La gran guerra",
        op3:"Guerra frÃ­a",
        correcta:"1"
    },
    {
        id:79,
        pregunta:"Â¿En quÃ© nos ayuda la Historia?",
        op0:"Para conocer las culturas",
        op1:"Para no perder nuestras costumbres y tradiciones",
        op2:"A conocer la culturas que se desarrollaron y entender el presente",
        op3:"Para entender nuestro futuro.",
        correcta:"2"
    },
    {
        id:80,
        pregunta:"Creador de la TeorÃ­a de la Relatividad",
        op0:"Nicola Tesla",
        op1:"Isaac Newton",
        op2:"Tomas Alba Ã‰dison",
        op3:"Albert Einstein",
        correcta:"3"
    },
    {
        id:81,
        pregunta:"Â¿QuÃ© organismo creo la URSS para apoyar econÃ³micamente a los paÃ­ses socialistas?",
        op0:"Plan Marshall",
        op1:"COMECON",
        op2:"KOMINFORM",
        op3:"Pacto de Varsovia",
        correcta:"1"
    },
    {
        id:82,
        pregunta:"PaÃ­ses que apoyaron a la independencia de las 13 colonias",
        op0:"Francia y EspaÃ±a",
        op1:"Alemania e Inglaterra",
        op2:"Francia y Alemania",
        op3:"Alemania e Inglaterra",
        correcta:"0"
    },
    {
        id:83,
        pregunta:"Rey que participo en la unificaciÃ³n de Italia",
        op0:"Piamonte-CerdaÃ±a",
        op1:"Alfonso VII",
        op2:"JosÃ© Bonaparte",
        op3:"Fernando III de castilla",
        correcta:"0"
    },
    {
        id:84,
        pregunta:"Â¿QuÃ© ayudÃ³ al desarrollo a finales de siglo XX en la tecnologÃ­a actual?",
        op0:"BiotecnologÃ­a",
        op1:"RobotizaciÃ³n",
        op2:"MÃ¡quina de vapor",
        op3:"La electricidad",
        correcta:"1"
    },
    {
        id:85,
        pregunta:"PaÃ­ses que practicaron un nacionalismo agresivo, autoritario y conservador, que difundieron el culto a los valores nacionales, el militarismo, la superioridad de la naciÃ³n y la inferioridad de otros pueblos.",
        op0:"Inglaterra y Francia.",
        op1:"Rusia y TurquÃ­a.",
        op2:"Alemania e Italia.",
        op3:"Alemania y Rusia.",
        correcta:"2"
    }
]
const bd_juego_hm = [
    {
        id:86,
        pregunta:"Relaciona las columnas",
        op0:"A3, B1, C4, D2, E5",
        op1:"A4, B2, C5, D1, E3",
        op2:"A1, B2, C3, D4, E5",
        op3:"A3, B1, C5, D2, E4",
        correcta:"0",
        img:"hernan.png"
    },
    {
        id:87,
        pregunta:"En el porfiriano que sectores se desarrollaron",
        op0:"Ferrocarriles, industria textil, minas",
        op1:"Ferrocarriles, carreteras, industria textil",
        op2:"EducaciÃ³n, industria textil y carreteras",
        op3:"Comercio, creaciÃ³n de la banca, petrÃ³leo",
        correcta:"0"
    },
    {
        id:88,
        pregunta:"Causas internas de la independencia",
        op0:"Reformas borbÃ³nicas",
        op1:"InvasiÃ³n de NapoleÃ³n a EspaÃ±a",
        op2:"Criollos subyugados, subestimados y relegados",
        op3:"Pensamientos de la ilustraciÃ³n",
        correcta:"2"
    },
    {
        id:89,
        pregunta:"Â¿QuÃ© sistema impone el gobierno de LÃ¡zaro CÃ¡rdenas?",
        op0:"Unidad nacional",
        op1:"Desarrollo estabilizador",
        op2:"Presidencialismo",
        op3:"Neoliberalismo",
        correcta:"2"
    },
    {
        id:90,
        pregunta:"Â¿CuÃ¡les son las caracterÃ­sticas de gobierno de Adolfo LÃ³pez mateo? I-La comisiÃ³n nacional del libro de texto gratuito II-Reparto agrario III-CreaciÃ³n de la secretaria de educaciÃ³n publica IV- La devoluciÃ³n del territorio del Chamizal V- La creaciÃ³n del INPI â€œInstituto Nacional de ProtecciÃ³n Infantilâ€ VI- La creaciÃ³n del IPN",
        op0:"I,II,III",
        op1:"I,II,IV",
        op2:"I,IV,V",
        op3:"IV,V,VI",
        correcta:"2"
    },
    {
        id:91,
        pregunta:"Â¿CÃ³mo se llama la etapa econÃ³mica que comprende desde el gobierno de Miguel de la Madrid hasta Carlos Salinas de Gortari?",
        op0:"Neoliberalismo",
        op1:"Desarrollo estabilizador",
        op2:"Desarrollo compartido",
        op3:"Milagro mexicano",
        correcta:"0"
    },
    {
        id:92,
        pregunta:"Etapa de MÃ©xico contemporÃ¡neo donde a economÃ­a tuvo un crecimiento de 7% anual.",
        op0:"Milagro mexicano",
        op1:"Desarrollo compartido",
        op2:"Neoliberalismo",
        op3:"Desarrollo estabilizador",
        correcta:"3"
    },
    {
        id:93,
        pregunta:"Â¿QuÃ© caracterÃ­sticas tuvo la ConstituciÃ³n de 1857?",
        op0:"Conservador",
        op1:"Moderado",
        op2:"Liberal",
        op3:"Neutral",
        correcta:"2"
    },
    {
        id:94,
        pregunta:"Relaciona las columnas:",
        op0:"IC, 2A, 3D, 4B",
        op1:"1A, 2B, 3C, 4D",
        op2:"1B, 2A, 3D, 4C",
        op3:"1B, 2A, 3D, 4C",
        correcta:"1",
        img:"etapa.png"
    },
    {
        id:95,
        pregunta:"Objetivo primordial de la ConspiraciÃ³n de QuerÃ©taro:",
        op0:"Constituir una junta gubernativa que tomara el poder a nombre de Fernando VII.",
        op1:"Llevar al poder al corregidor Don Miguel DomÃ­nguez.",
        op2:"Crear una confederaciÃ³n de estados americanos encabezada por SimÃ³n BolÃ­var.",
        op3:"Establecer una repÃºblica democrÃ¡tica gobernada por Fray Vicente de SantamarÃ­a.",
        correcta:"0"
    }
]
const bd_juego_0 = []
const bd_juego = bd_juego_0.concat(bd_juego_fis,bd_juego_lit,bd_juego_qui,bd_juego_geo,bd_juego_es,bd_juego_bio,bd_juego_hu,bd_juego_hm,bd_juego_O);
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
    //Lo vamos a hacer mediante una funciÃ²n.
    // A dicha funciÃ³n le envio el numero de label y la opcion
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

//creo la funciÃ²n que que retornarÃ¡ el label con todo su contenido
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

//FunciÃ³n que carga la opciÃ³n elegida en el arreglo respuestas.
function seleccionar(pos, opElegida){
    respuestas[pos] = opElegida;
}



//botÃ³n corregir
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
    //colocamos la cantidad que acerto y las que no acertÃ³

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
    parrafoxd.textContent = 'Â¡Obtuviste ' + cantiCorrectas + '/120!'
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