//base de datos local de preguntas


const bd_juego_O = [
    {
        id:96,
        pregunta:"Se tienen 5 bolsas de sal, cada una con 1.5 Oz. Si se desea repartir su contenido entre 15 personas ¿Cuántos gramos le corresponden a cada persona? Considera: 1 oz = 28.34g.",
        op0:"A) 28.34",
        op1:"B) 14.17",
        op2:"C) 56.68",
        op3:"D) 42.51",
        correcta:"1"
    },
    {
        id:97,
        pregunta:"Al efectuar la operación (2x + 3y - 4z) (2x - 3y + 4z) se obtiene",
        op0:"A) 4x^2 - 9y^2 - 16z^2",
        op1:"B) 4x^2 - 9y^2 - 6xy + 16z^2",
        op2:"C) 4x^2 + 9y^2 - 24yz + 16^z",
        op3:"D) 4x^2 - 9y^2 + 24yz - 16z^2",
        correcta:"0"
    },
    {
        id:98,
        pregunta:"El desarrollo del binomio (2a + 3ab)^2 es:",
        op0:"A) a^2 + 6a^2b + 9a^2b^2",
        op1:"B) a^2 + 2a^2b + a^2b^2",
        op2:"C) 4a^2 + 4a^2b + a^2b^2",
        op3:"D) 4a^2 + 12a^2b + 9a^2b^2",
        correcta:"3"
    },
    {
        id:99,
        pregunta:"La expresión (4a^2 - 9b^2)/(2a - 3b) se simplifica como:",
        op0:"A) 1/(2a - 3b)",
        op1:"B) 1/(2a + 3b)",
        op2:"C) 2a - 3b",
        op3:"D) 2a + 3b",
        correcta:"3"
    },
    {
        id:100,
        pregunta:"La solución de la siguiente ecuación es",
        op0:"A) a = 1",
        op1:"B) a = 3",
        op2:"C) a = 4",
        op3:"D) a = 5",
        correcta:"0",
        img:"img/a.png"
    },
    {
        id:101,
        pregunta:"Determina la solución de la siguiente desigualdad",
        op0:"A) x ≥ 10/3",
        op1:"B) x ≤ -10/3",
        op2:"C) x ≤ 10/3",
        op3:"D) x ≥ -10/3",
        correcta:"2",
        img:"img/3x.png"
    },
    {
        id:102,
        pregunta:"Plantea matemáticamente el siguiente problema. ¿Cuántas gallinas y borregos tenemos en un corral, si se sabe que hay 60 cabezas y 150 patas?",
        op0:"A) x + y = 150 | 2x + 4y = 60",
        op1:"B) 2x + 2y = 60 | x + 4y = 150",
        op2:"C) x + y = 60 | 2x - 4y = 150",
        op3:"D) x + y = 60 | 2x + 4y = 150",
        correcta:"3"
    },
    {
        id:103,
        pregunta:"Si f(x) = x^2 - 1 entonces f(x + 2) es igual a:",
        op0:"A) x^2 + 4x + 3",
        op1:"B) x^2 + 3",
        op2:"C) x^2 + 2x + 3",
        op3:"D) x^2 + 4x + 1",
        correcta:"0"
    },
    {
        id:104,
        pregunta:"Expresa (3/8)π en grados",
        op0:"A) 67.5Â°",
        op1:"B) 65.0Â°",
        op2:"C) 76.0Â°",
        op3:"D) 76.5Â°",
        correcta:"0"
    },
    {
        id:105,
        pregunta:"Dada la siguiente figura, determina el valor de h.",
        op0:"A) 44",
        op1:"B) 66",
        op2:"C) 72",
        op3:"D) 88",
        correcta:"1",
        img:"img/hola.png"
    },
    {
        id:106,
        pregunta:"¿Cuál es el dominio de la función f(x) = Ln (2x)?",
        op0:"A) (0, ∞)",
        op1:"B) (0, 2)",
        op2:"C) (2, ∞)",
        op3:"D) (2, ∞)",
        correcta:"0"
    },
    {
        id:107,
        pregunta:"Â¿Cuál es la distancia entre los puntos A (- 3, 5) y B (- 2, - 1)?",
        op0:"A) √15",
        op1:"B) √17",
        op2:"C) √35",
        op3:"D) √37",
        correcta:"3"
    },
    {
        id:108,
        pregunta:"¿Cuál es la ecuación de la recta que pasa por los puntos (1,2) y (5,4)?",
        op0:"A) x + 2y - 5 = 0",
        op1:"B) 2x - y + 3 = 0",
        op2:"C) x - 2y + 3 = 0",
        op3:"D) 2x - y - 5 = 0",
        correcta:"2"
    },
    {
        id:109,
        pregunta:"Es el lugar geométrico donde todos los puntos de un plano equidistan de un punto fijo llamado centro.",
        op0:"A) Elipse",
        op1:"B) Parábola",
        op2:"C) Circunferencia",
        op3:"D) Hipérbola",
        correcta:"2"
    },
    {
        id:110,
        pregunta:"¿Cuál es la ecuación de una parábola que tiene su vértice en V (1,0) y su foco en F (1,2)?",
        op0:"A) x^2 + 2x - 8y + 1 = 0",
        op1:"B) x^2 - 2x - 8y + 1 = 0",
        op2:"C) x^2 - 2x + 2y + 1 = 0",
        op3:"D) x^2 - 2x - 2y + 1 = 0",
        correcta:"1"
    },
    {
        id:111,
        pregunta:"La ecuación de la hipérbola centrada en el origen con lado recto 10 y vértice V( 0, -9) es:",
        op0:"A) 5y^2 - 9x^2 = 405",
        op1:"B) 45y^2 + 81x^2 = 405",
        op2:"C) 9y^2 - 10x^2 = 90",
        op3:"D) 10y^2 + 9x^2 = 90",
        correcta:"0"
    },
    {
        id:112,
        pregunta:"¿Cuál es el centro de la hipérbola (x-2)^2/25 - (y + 7)^2/9 = 1?",
        op0:"A) C (5,7)",
        op1:"B) C (-5,7)",
        op2:"C) C (2, -7)",
        op3:"D) C (-2, -7)",
        correcta:"3"
    },
    {
        id:113,
        pregunta:"La ecuación general de la circunferencia con centro (h, k) y radio r es:",
        op0:"A) x^2 + y^2 + Dx + Ey + F = 0",
        op1:"B) 2x^2 + y^2 + Dx + Ey + F = 0",
        op2:"C) x^2 - y^2 + Dx + Ey + F = 0",
        op3:"D) x^2 + 2y^2 + Dx + Ey + F = 0",
        correcta:"0"
    },
    {
        id:114,
        pregunta:"Calcula",
        op0:"A) - 8",
        op1:"B) 4",
        op2:"C) âˆž",
        op3:"D) 0",
        correcta:"0",
        img:"img/lim.png"
    },
    {
        id:115,
        pregunta:"La derivada es:",
        op0:"A) x^2e^x",
        op1:"B) 2xe^x",
        op2:"C) x^2e^x + 2xe^x",
        op3:"D) 2xe^x + x^2e^2",
        correcta:"3",
        img:"img/derivada.png"
    },
    {
        id:116,
        pregunta:"La derivada de la función f(x) 2e^2, es:",
        op0:"A) f'(x) = 2e^2",
        op1:"B) f'(x) = 2+e^x",
        op2:"C) f'(x) = e^2x",
        op3:"D) f'(x) = (e^2x)/2",
        correcta:"0"
    },
    {
        id:117,
        pregunta:"La abscisa del punto de inflexión de la función f(x) = x^3 - 6x^2 + 3 es",
        op0:"A) 1",
        op1:"B) -13",
        op2:"C) 2",
        op3:"D) -29",
        correcta:"2"
    },
    {
        id:118,
        pregunta:"¿Cuál es la segunda derivada de 2e^x?",
        op0:"A) 4e^(2x)",
        op1:"B) 8e^x",
        op2:"C) 2e^x",
        op3:"D) 2e^(2x)",
        correcta:"2"
    },
    {
        id:119,
        pregunta:"Al resolver la integral âˆ«(4x^3 + (sec^2)x)dx, se obtiene:",
        op0:"A) x^4 tan^2 x + C",
        op1:"B) x^4 - secxtanx + C",
        op2:"C) x^4 + tanx + C",
        op3:"D) 4x^4 + cosx",
        correcta:"2",
    }
]
const bd_juego_fis = [
    {
        id:0,
        pregunta:"Una persona camina 40 metros en 80 segundos, después se detiene 10s y finalmente recorre 20 metros en 10s. ¿Cuál es rapidez media?",
        op0:"A) 60m/s",
        op1:"B) 6m/s",
        op2:"C) 0.6m/s^2",
        op3:"D) 0.6m/s",
        correcta:"3"
    },
    {
        id:1,
        pregunta:"Un microondas de 1200W de potencia se coloca a una diferencia de potencial de 120V. Calcula la intensidad de corriente.",
        op0:"A) 1000A",
        op1:"B) 100A",
        op2:"C) 10A",
        op3:"D) 2A",
        correcta:"2"
    },
    {
        id:2,
        pregunta:"¿Cuál de los siguientes materiales sirve para medir la antigí¼edad de los fósiles?",
        op0:"A) Carbono 14",
        op1:"B) Carbono 12",
        op2:"C) Cobalto Co",
        op3:"D) Cromo Cr",
        correcta:"0"
    },
    {
        id:3,
        pregunta:"¿Cuál es el peso de un cuerpo de 10Kg?",
        op0:"A) 9.8N",
        op1:"B) 990N",
        op2:"C) 9800N",
        op3:"D) 98N",
        correcta:"3"
    },
    {
        id:4,
        pregunta:"Un gato hidráulico se utiliza para cambiar la llanta de un coche. Si se le aplica una fuerza de 80N en un área de 5cm2 sobre el émbolo del pistón y el auto se recarga en un área de 25cm2 Â¿Qué fuerza se genera?",
        op0:"A) 400N",
        op1:"B) 40N",
        op2:"C) 4000N",
        op3:"D) 20N",
        correcta:"0"
    },
    {
        id:5,
        pregunta:"En un cuerpo con MRU Â¿Cómo aumentas su velocidad?",
        op0:"A) Disminuyendo su cantidad de inercia",
        op1:"B) Aumentando su cantidad de inercia",
        op2:"C) Manteniendo una aceleración constante",
        op3:"D) Disminuyendo su aceleración",
        correcta:"0"
    },
    {
        id:6,
        pregunta:"Durante un experimento se ponen en contacto 200g de un determinado material a una temperatura de 20Â°C con otro de 100g del mismo material a 50Â°C Â¿Cuál es la temperatura de equilibrio entre los materiales?",
        op0:"A) 20°C",
        op1:"B) 30°C",
        op2:"C) 50°C",
        op3:"D) 70°C",
        correcta:"1"
    },
    {
        id:7,
        pregunta:"Cuáles de los siguientes son ejemplos de I- Reflexión II-Refracción",
        op0:"A) I-c, II-b",
        op1:"B) I-a, II-b",
        op2:"C) I-b, II-a",
        op3:"D) I-c, II-a",
        correcta:"2",
        img:"img/refraccion.png"
    },
    {
        id:8,
        pregunta:"Desde cierta altura se deja caer una piedra en un estanque Â¿Cómo son las ondas que se forman en el agua?",
        op0:"A) Las ondas son transversales, pues se desplazan de forma perpendicular con respecto a la dirección del movimiento",
        op1:"B) Las ondas son circulares, formando un ángulo agudo y tienen vibración.",
        op2:"C) Las ondas son paralelas, formando un ángulo agudo y tienen vibración.",
        op3:"D) Las ondas estacionarias, formando un ángulo perpendicular y al mismo tiempo tienen vibración.",
        correcta:"0"
    },
    {
        id:9,
        pregunta:"En un circuito impreso tenemos un circuito conectado en serie cuya resistencia total es de 10 Î© y le proporcionamos una diferencia de potencial de 6 V, calcula la corriente que fluye por el circuito.",
        op0:"A) 60 A",
        op1:"B) 1.6 A",
        op2:"C) 0.6 A",
        op3:"D) 360 A",
        correcta:"2"
    },
    {
        id:10,
        pregunta:"Se define como la velocidad con la que se realiza un trabajo.",
        op0:"A) Trabajo",
        op1:"B) Rapidez",
        op2:"C) Aceleración",
        op3:"D) Potencia",
        correcta:"3"
    },
    {
        id:11,
        pregunta:"La bomba atómica se basa en el principio de",
        op0:"A) Fisión nuclear",
        op1:"B) Fusión nuclear",
        op2:"C) Dalton",
        op3:"D)Albert Einstein",
        correcta:"0"
    }
]
const bd_juego_lit = [
    {
        id:12,
        pregunta:"El poeta________ inició la corriente modernista:",
        op0:"A)Rubén Darí­o",
        op1:"B) Amado Nervo",
        op2:"C) Manuel Acuña",
        op3:"D) Luis G. Urbina",
        correcta:"0"
    },
    {
        id:13,
        pregunta:"El editorial de un texto periodí­stico tiene mucha semejanza con el:",
        op0:"A) Artí­culo de opinión",
        op1:"B) Ficha bibliográfica",
        op2:"C) Ficha Hemerográfica",
        op3:"D) Cita textual",
        correcta:"0"
    },
    {
        id:14,
        pregunta:"Autor principal español del Realismo",
        op0:"A) Benito Pérez Galdós",
        op1:"B) Rubén Darí­o",
        op2:"C) Antonio Manchado",
        op3:"D) Juan Rulfo",
        correcta:"0"
    },
    {
        id:15,
        pregunta:"La narración en prosa relativamente breve, se le denomina",
        op0:"A) Mito",
        op1:"B) Novela",
        op2:"C) Cuento",
        op3:"D) Leyenda",
        correcta:"2"
    },
    {
        id:16,
        pregunta:"En un texto dramático ¿Qué personaje se opone al personaje principal?",
        op0:"A) Protagonista",
        op1:"B) Secundario",
        op2:"C) Ambiental",
        op3:"D) Antagonista",
        correcta:"3"
    },
    {
        id:17,
        pregunta:"En base al libro titulado la poética de Aristóteles elige la opción que tenga caracterí­sticas correctas:",
        op0:"A) Aristóteles decí­a: lo épico es lo Heroico, lo lirico es subjetivo y lo dramático es representativo",
        op1:"B) Aristóteles decí­a: lo épico es subjetivo, lo lirico es heroico y lo dramático es representativo",
        op2:"C) Aristóteles decí­a: lo épico es representativo, o lirico es subjetivo y lo dramático es heroico",
        op3:"D) Aristóteles decí­a: o épico es heroico, lo lirico es representativo y lo dramático es subjetivo",
        correcta:"0"
    },
    {
        id:18,
        pregunta:"¿Cuáles son las caracterí­sticas propias de la literatura contemporánea?  I-sus personajes tienen conflictos morales, psicológicos, sexuales y emocionales  II- describe fotográficamente mezclando elementos cotidianos con el realismo mágico  III- pedro paramo y rayuela son algunas de sus obras caracterí­sticas  IV-esta generación literaria es exclusivamente española  V- se opone a la crudeza de naturalismo  VI- exaltación de yo, subjetivismo",
        op0:"A) I, III, V",
        op1:"B) II, V, VI",
        op2:"C) I, II, III",
        op3:"D) I, III, VI",
        correcta:"2"
    },
    {
        id:19,
        pregunta:"¿Qué tipo de ficha es?: Revueltas, José 'la literatura' envuelta vol. 1. Número 2. Pág. 6-7",
        op0:"A) Ficha bibliográfica",
        op1:"B) Ficha Hemerográfica",
        op2:"C) Cita textual",
        op3:"D) Artí­culo de opinión",
        correcta:"1"
    },
    {
        id:20,
        pregunta:"Las caracterí­sticas de Realismo son:",
        op0:"A) Teocentrismo y la literatura caballeresca",
        op1:"B) Lo estético, bello y musical",
        op2:"C) La aplicación de método cientí­fico",
        op3:"D) Analiza y describe el comportamiento del hombre, deja a fantasí­a y hace una representación fiel de la realidad",
        correcta:"3"
    },
    {
        id:21,
        pregunta:"Escritor francés que escribió MADAME BOVARY",
        op0:"A) Juan Valera",
        op1:"B) Honore de Balzac",
        op2:"C) Gustave Flaubert",
        op3:"D) Benito Pérez Galdós",
        correcta:"2"
    }
]
const bd_juego_qui = [
    {
        id:22,
        pregunta:"Compuesto que contiene la función de alcohol.",
        op0:"A) CH3-CH2-OH",
        op1:"B) CH3-CH2-Br",
        op2:"C) CH3-CH2-O-CH2-CH3",
        op3:"D) CH2=CH2",
        correcta:"0"
    },
    {
        id:23,
        pregunta:"¿Cuál es el ácido más fuerte?",
        op0:"A) NH4CL",
        op1:"B) H2SO4",
        op2:"C) CH3-COOH",
        op3:"D) NaOH",
        correcta:"1"
    },
    {
        id:24,
        pregunta:"Si el número atómico de un elemento es 25 y su masa atómica es 55, ¿Cuántos protones, electrones, neutrones contiene?",
        op0:"A) P=25, e= 25, n=30",
        op1:"B) P=30 e= 25, n=25",
        op2:"C) P=25, e=30 n= 25",
        op3:"D) P=30, e=25 n=30",
        correcta:"0"
    },
    {
        id:25,
        pregunta:"¿Qué condiciones favorecen la siguiente reacción CH4 + 2O2 => CO2 + H2O?",
        op0:"A) 50 atm",
        op1:"B) 30atm",
        op2:"C) 15atm",
        op3:"D) 5atm",
        correcta:"0"
    },
    {
        id:26,
        pregunta:"¿Cuál es un oxido básico?",
        op0:"A) CO2",
        op1:"B) NO2",
        op2:"C) SO3",
        op3:"D) CaO",
        correcta:"3"
    },
    {
        id:27,
        pregunta:"¿Cuál es a función de los lí­pidos?",
        op0:"A) Reserva de energí­a a corto plazo",
        op1:"B) Reserva de energí­a a largo pazo",
        op2:"C) Que se aprovechan todas sus carias",
        op3:"D) Contienen esteres de ácidos grasos y glicerol",
        correcta:"1"
    },
    {
        id:28,
        pregunta:"¿Cuál de los siguientes tiene una hibridación SP?",
        op0:"A) Hexano",
        op1:"B) Buteno",
        op2:"C) Propano",
        op3:"D) 2-propino",
        correcta:"3"
    },
    {
        id:29,
        pregunta:"De la siguiente configuración electrónica 1s22s22p4 ¿Cuántos electrones faltan para llegar a la familia de los gases nobles",
        op0:"A) Sumarle 4 electrones",
        op1:"B) Restarle 2 electrones",
        op2:"C) Sumarle 2 electrones",
        op3:"D) Sumare 3 electrones",
        correcta:"2"
    },
    {
        id:30,
        pregunta:"Compuesto que contiene la función éter.",
        op0:"A) CH3 - CH2 - CH2 - O - CH2 - CH3",
        op1:"B) CH3-CH2-OH",
        op2:"C) CH3-CH2-Br",
        op3:"D) CH2=CH2",
        correcta:"0"
    },
    {
        id:31,
        pregunta:"Clasifica los siguientes contaminantes en quí­micos biológicos y fí­sicos",
        op0:"A) I-a, d, II-b, e, III-c, f",
        op1:"B) I-ba, ll-ef, III-dc",
        op2:"C) I-de, II,bf, III, ca",
        op3:"D) I-bc, II-ab, III-fe",
        correcta:"0",
        img:"img/bacteria.png"
    },
    {
        id:32,
        pregunta:"¿Cuál es el número de oxidación de carbono en CaCO3?",
        op0:"A) -4",
        op1:"B) 4",
        op2:"C) 2",
        op3:"D) -2",
        correcta:"1"
    },
    {
        id:33,
        pregunta:"¿Qué pasa cuando aumentas a temperatura de un gas?",
        op0:"A) Aumenta a energí­a potencia y disminuye la energí­a cinética",
        op1:"B) Disminuye e volumen y a energí­a interna",
        op2:"C) Aumenta e volumen y aumenta la energí­a cinética",
        op3:"D) Disminuye a energí­a potencial y disminuye a energí­a interna",
        correcta:"2"
    },
    {
        id:34,
        pregunta:"Relaciona los tipos de soluciones",
        op0:"A) I-a, II-b, III-c, IV-d",
        op1:"B) I-b, II-c, III-d, IV-a",
        op2:"C) I-d, II-c, III-b, IV-a",
        op3:"D) I-c, II-a, III-d, IV-b",
        correcta:"0",
        img:"img/diluida.png"
    }
]
const bd_juego_geo = [
    {
        id:35,
        pregunta:"¿Qué estudia la Geografí­a?",
        op0:"A) Explicar la relación entre los elementos naturales y sociales del medio geográfico",
        op1:"B) Diferenciar las causas y efectos de los hechos y fenómenos geográficos",
        op2:"C) Conocer los efectos terrestres provocados por los fenómenos naturales",
        op3:"D) Localizar los elementos naturales y sociales sobre la superficie terrestre",
        correcta:"0"
    },
    {
        id:36,
        pregunta:"Selecciona las caracterí­sticas de paí­ses desarrollados: I-Escaza población infantil II-predominio de actividades primarias III-alto í­ndice de natalidad IV- actividades terciarias V- bajo ingreso per cápita.",
        op0:"A) I, IV",
        op1:"B) I, II, III",
        op2:"C) II, IV",
        op3:"D) I, IV",
        correcta:"3"
    },
    {
        id:37,
        pregunta:"Ubicar en el mapa las cordilleras de mundo",
        op0:"A) I-Rocosas, II-Alpes, III-Cáucaso",
        op1:"B) I-Altiplanicie, II-Balcanes, III-Himalaya",
        op2:"C) I-Cierra nevada, II- Balcanes, III-Rocosas",
        op3:"D) I-Sierra madre, II-Cárpatos, III-Urales",
        correcta:"0",
        img:"img/cordillera.png"
    },
    {
        id:38,
        pregunta:"La población Turca ¿A qué paí­s de la Unión Europea emigra?",
        op0:"A) Bélgica",
        op1:"B) Portugal",
        op2:"C) España",
        op3:"D) Alemania",
        correcta:"3"
    },
    {
        id:39,
        pregunta:"Principal fuente de abastecimiento de agua dulce para los continentes",
        op0:"A) Condensación",
        op1:"B) Escurrimiento",
        op2:"C) Precipitación",
        op3:"D)Los casquetes polares",
        correcta:"2"
    },
    {
        id:40,
        pregunta:"Debido a la colisión de las placas tectónicas se produce: I-Islas II-Plataforma continental III- Volcanes IV- Talud continental V- Rocas",
        op0:"A) I, III",
        op1:"B) I, II",
        op2:"C) III, IV",
        op3:"D) III, V",
        correcta:"0"
    },
    {
        id:41,
        pregunta:"De acuerdo a la gráfica de pirámide de edades el paí­s de__________________ tendrá problemas de mano de obra e inmigración",
        op0:"A) Alemania",
        op1:"B) España",
        op2:"C) Italia",
        op3:"D) Bélgica",
        correcta:"0",
        img:"img/alemania.png"
    },
    {
        id:42,
        pregunta:"¿Qué paí­s se creó al separarse Yugoslavia",
        op0:"A) Letonia",
        op1:"B) Republica checa",
        op2:"C) Croacia",
        op3:"D) Yemen",
        correcta:"2"
    },
    {
        id:43,
        pregunta:"A pesar de la extensión del litoral del pacifico ¿Qué causa la baja producción de pesca?: I-insuficiencia de puertos II-por la falta de personas para trabajar III-falta de inversión en la pesca IV-por las corrientes marinas frí­as",
        op0:"A) I, II",
        op1:"B) I, IV",
        op2:"C) III, IV",
        op3:"D) I, III",
        correcta:"3"
    },
    {
        id:44,
        pregunta:"La industria más importante en la ciudad de Monterrey es la",
        op0:"A) Farmacéutica",
        op1:"B) Petroquí­mica",
        op2:"C) Textil",
        op3:"D) Siderúrgica",
        correcta:"3"
    }
]
const bd_juego_es = [
    {
        id:45,
        pregunta:"¿Cuál es la idea principal del párrafo uno?",
        op0:"A) Darwin tení­a miedo de que sus hijos fueran enfermizos o débiles",
        op1:"B) Darwin y Emma eran primos hermanos",
        op2:"C) Darwin tuvo 10 hijos",
        op3:"D) Que la consanguinidad deteriora las siguientes generaciones",
        correcta:"0",
        a:"darwin.html"
    },
    {
        id:46,
        pregunta:"'El más relevante de los Darwin' sabí­a que la consanguinidad deteriora las siguientes generaciones. Las palabras entre comillas se refieren a:",
        op0:"A) Charles Darwin",
        op1:"B) El padre de Darwin",
        op2:"C) El hijo de Darwin",
        op3:"D) El abuelo de Darwin",
        correcta:"0",
        a:"darwin.html"
    },
    {
        id:47,
        pregunta:"¿Qué es la endogamia?",
        op0:"A) Revisa la consanguinidad en la ascendencia",
        op1:"B) Matrimonio entre hermanos",
        op2:"C) Mermar la fertilidad de los descendientes",
        op3:"D) Una enfermedad hereditaria",
        correcta:"0",
        a:"darwin.html"
    },
    {
        id:48,
        pregunta:"¿Quién fue el primero en estudiar los efectos de la endogamia?",
        op0:"A) El naturalista",
        op1:"B) El genetista",
        op2:"C) Los cientí­ficos de la actualidad",
        op3:"D) El padre de Darwin",
        correcta:"0",
        a:"darwin.html"
    },
    {
        id:49,
        pregunta:"¿Por qué la dinastí­a Darwin-wedgwood es perfecta para estudiar la endogamia?",
        op0:"A) Porque estas familias se emparentaron entre ellas durante muchas generaciones",
        op1:"B) Porque Darwin y Emma eran primos hermanos",
        op2:"C) Porque la calidad de su esperma era menor y los hombre de la familia eran menos fértiles",
        op3:"D) Por las condiciones de vida de los Darwin",
        correcta:"0",
        a:"darwin.html"
    },
    {
        id:50,
        pregunta:"¿Cuál es la oración con la ortografí­a correcta?: No te de_es re__elar porque las e_idencias no se pueden re_elar",
        op0:"A) b, b, v, v",
        op1:"B) b, v, v, b",
        op2:"D) v, b, v, b",
        op3:"C) v, v, b, b",
        correcta:"0"
    },
    {
        id:51,
        pregunta:"Función que se dirige a oyente y pretende causar una reacción en este",
        op0:"A) Función metalingüí­stica",
        op1:"B) Función referencial",
        op2:"C) Función apelativa",
        op3:"D) Función fática",
        correcta:"2"
    },
    {
        id:52,
        pregunta:"El pobre vagabundo recorre la urbe ¿vagabundo funciona cómo?",
        op0:"A) Núcleo del predicado",
        op1:"B) Adjetivo",
        op2:"C) Núcleo del sujeto",
        op3:"D) Sujeto",
        correcta:"2"
    },
    {
        id:53,
        pregunta:"¿Qué función de la lengua predomina en? 'hombre cohete......araña vuela y rompe su tela'",
        op0:"A) Poética",
        op1:"B) Fática",
        op2:"C) Referencial",
        op3:"D) Apelativa",
        correcta:"0"
    },
    {
        id:54,
        pregunta:"En la siguiente oración 'Cerro la puerta con cuidado' cumple la función de:",
        op0:"A) Complemento circunstancial de modo",
        op1:"B) Complemento directo",
        op2:"C) Complemento indirecto",
        op3:"D) Complemento circunstancial de tiempo",
        correcta:"0"
    },
    {
        id:55,
        pregunta:"En el siguiente enunciado, identifica la función de las palabras en mayúsculas. Considera el contexto: 'La señora Ramí­rez vio vagar sobre los labios de los jefes UNA SONRISA'",
        op0:"A) Predicado.",
        op1:"B) Objeto directo.",
        op2:"C) Objeto indirecto.",
        op3:"D) Objeto circunstancial",
        correcta:"1"
    },
    {
        id:56,
        pregunta:"Selecciona la opción que presenta un sujeto tácito o implí­cito.",
        op0:"A) Somos nada frente a la muerte infausta.",
        op1:"B) Feliz aquél que busca a Dios en sí­ mismo.",
        op2:"C) ¡Señor!, tiembla mi alma ante tu grandeza.",
        op3:"D) Yo he subido más alto, mucho más alto.",
        correcta:"0"
    },
    {
        id:57,
        pregunta:"¿Cuál es la forma del discurso del siguiente párrafo?: El vocablo Coyoacán es el resultado de una serie de transformaciones que en su escritura y transformaciones sufrió la palabra náhuatl, coyo-acan. La versión más aceptada es la que define como lugar de los que tienen o poseen coyotes basada en la explicación del topónimo original que se compone de tres Vocales en náhuatl: coyotl, coyote; hua, posesión y con, lugar.",
        op0:"A) Argumentativo",
        op1:"B) Narración",
        op2:"C) Descripción",
        op3:"D) Diálogo",
        correcta:"0"
    },
    {
        id:58,
        pregunta:"Elige el párrafo con la mejor redacción.",
        op0:"A) En este orden, la posibilidad y el origen del conocimiento son algunos problemas a considerar. Presenta el conocimiento, para iniciar, así­ una vertiente filosófica que no podemos soslayar si queremos profundizar en el tema.",
        op1:"B) Así­, la posibilidad y el origen del conocimiento son algunos problemas a considerar que presenta el conocimiento. Para iniciar, una vertiente filosófica que no podemos soslayar si queremos profundizar en el tema.",
        op2:"C) El conocimiento, en el inicio, ofrece una vertiente filosófica que no podemos soslayar si queremos profundizar en el tema. De modo que la posibilidad y el origen del conocimiento son algunos problemas a considerar.",
        op3:"D) El conocimiento, en principio, ofrece una vertiente filosófica que no podemos soslayar si queremos profundizar en el tema. En este orden, la posibilidad y el origen del conocimiento son algunos problemas clave.",
        correcta:"3"
    },
    {
        id:59,
        pregunta:"¿Cuál es la redacción correcta?",
        op0:"A) Habí­an mucha gente en la plaza",
        op1:"B) Hubieron muchos que estaban inconformes",
        op2:"C) Habí­a mucha gente en la plaza",
        op3:"D) Habí­an muchos inconformes.",
        correcta:"2"
    },
    {
        id:60,
        pregunta:"Indique la palabra con ortografí­a correcta.",
        op0:"A) Tanbien",
        op1:"B) Hiba",
        op2:"C) Compungido",
        op3:"D) Cancion",
        correcta:"2"
    },
    {
        id:61,
        pregunta:"Antónimo de niñez",
        op0:"A) Senil",
        op1:"B) Infancia",
        op2:"C) Adulto",
        op3:"D) Niño",
        correcta:"0"
    },
    {
        id:62,
        pregunta:"Cuál es la Analogí­a de Bóveda celeste es a azul como",
        op0:"A) Acantilado a vací­o",
        op1:"B) Acantilado a Libre",
        op2:"C) Mar a azul",
        op3:"D) Cielo a caí­da",
        correcta:"0"
    }
]
const bd_juego_bio = [
    {
        id:63,
        pregunta:"Si se hidroliza el ATP se obtiene:",
        op0:"A) ADP",
        op1:"B) 2ATP",
        op2:"C) ADN",
        op3:"D) ARP",
        correcta:"0"
    },
    {
        id:64,
        pregunta:"La que ordena, clasifica y da nombre a los organismos.",
        op0:"A) Ecologí­a",
        op1:"B) Morfologí­a",
        op2:"C) Taxonomí­a",
        op3:"D) Fisiologí­a",
        correcta:"2"
    },
    {
        id:65,
        pregunta:"Organismos de la misma especie que se encuentran en el mismo espacio y tiempo.",
        op0:"A) Comunidad",
        op1:"B) Ecologí­a",
        op2:"C) Población",
        op3:"D) Nicho",
        correcta:"2"
    },
    {
        id:66,
        pregunta:"Porque el cloroplasto tiene un metabolismo anaerobio",
        op0:"A) Porque capta fotones de ondas de luz",
        op1:"B) Produce dióxido de carbono",
        op2:"C) Produce ATP",
        op3:"D) Produce demasiado oxigeno",
        correcta:"0"
    },
    {
        id:67,
        pregunta:"Relaciona las columnas:",
        op0:"A) Ib, IIa, IIIc, IVe, Vd",
        op1:"B) Ic, IIa, IIIe, IVb, Vd",
        op2:"C) Ib, IIa, IIIe, IVc, Vd",
        op3:"D) Ia, IIb, IIIe, IVc, Vd",
        correcta:"2",
        img:"img/mito.png"
    },
    {
        id:68,
        pregunta:"Relaciona las columnas:",
        op0:"A) Ic, IIb, IIIa",
        op1:"B) Ib, IIa, IIIc",
        op2:"C) Ib, IIc, IIIa",
        op3:"D) Ic, IIa, IIIb",
        correcta:"2",
        img:"img/lamark.png"
    },
    {
        id:69,
        pregunta:"Es la fase en la que los cromosomas se encuentran alineados en el huso acromático.",
        op0:"A) Profase",
        op1:"B) Anafase",
        op2:"C) Metafase",
        op3:"D) Telofase",
        correcta:"2"
    },
    {
        id:70,
        pregunta:"La______________ sirve para la evolución:",
        op0:"A) Mutación",
        op1:"B) Bipartición",
        op2:"C) Esporulación",
        op3:"D) Partenogénesis",
        correcta:"0"
    },
    {
        id:71,
        pregunta:"¿Cuáles eran las caracterí­sticas de la tierra primitiva?",
        op0:"A) Similar a la tierra actual",
        op1:"B) Erupciones volcánicas, tormentas eléctricas y oxigeno de carácter reductor",
        op2:"C) Similar a la tierra actual, con dióxido de carbono y metano",
        op3:"D) Oxigeno reductor, similar a la tierra actual",
        correcta:"1"
    },
    {
        id:72,
        pregunta:"¿En cuál de los siguientes climas hay una mayor variabilidad de especies?",
        op0:"A) Desierto",
        op1:"B) Tundra",
        op2:"C) Estepa",
        op3:"D) Selva",
        correcta:"3"
    },
    {
        id:73,
        pregunta:"Es un tipo de enfermedad ligada a los cromosomas sexuales:",
        op0:"A) Hemofilia",
        op1:"B) Amofilia",
        op2:"C) Trisomí­a",
        op3:"D) Fenilcetonuria",
        correcta:"0"
    },
    {
        id:74,
        pregunta:"La reproducción sexual se caracteriza por",
        op0:"A) Fusión de células haploides especializadas",
        op1:"B) Que el desarrollo se realiza dentro de uno de los progenitores",
        op2:"C) Se realiza a partir de células diploides",
        op3:"D) Se requiere de un solo progenitor",
        correcta:"0"
    },
    {
        id:75,
        pregunta:"Caracterí­stica de la membrana celular",
        op0:"A) Permeable",
        op1:"B) Semipermeable",
        op2:"C) Porosa",
        op3:"D) Lisa",
        correcta:"1"
    }
]
const bd_juego_hu = [
    {
        id:76,
        pregunta:"¿Cuál fue la consecuencia polí­tica de la ilustración?",
        op0:"A) Despotismo ilustrado",
        op1:"B) Absolutismo",
        op2:"C) Ludismo",
        op3:"D) Cartismo",
        correcta:"0"
    },
    {
        id:77,
        pregunta:"Causas de la segunda revolución cientí­fica y tecnologí­a",
        op0:"A) Máquina de vapor",
        op1:"B) Uso del carbón",
        op2:"C) Robótica",
        op3:"D) Electricidad y petróleo",
        correcta:"3"
    },
    {
        id:78,
        pregunta:"El desempleo, la inflación de los productos, la nacionalización de los bancos y el fin de las importaciones. Son caracterí­sticas de:",
        op0:"A) Devaluación del peso mexicano",
        op1:"B) Crack de Wall Street",
        op2:"C) La gran guerra",
        op3:"D) Guerra frí­a",
        correcta:"1"
    },
    {
        id:79,
        pregunta:"¿En qué nos ayuda la Historia?",
        op0:"A) Para conocer las culturas",
        op1:"B) Para no perder nuestras costumbres y tradiciones",
        op2:"C) A conocer la culturas que se desarrollaron y entender el presente",
        op3:"D) Para entender nuestro futuro.",
        correcta:"2"
    },
    {
        id:80,
        pregunta:"Creador de la Teorí­a de la Relatividad",
        op0:"A) Nicola Tesla",
        op1:"B) Isaac Newton",
        op2:"C) Tomas Alba í‰dison",
        op3:"D) Albert Einstein",
        correcta:"3"
    },
    {
        id:81,
        pregunta:"¿Qué organismo creo la URSS para apoyar económicamente a los paí­ses socialistas?",
        op0:"A) Plan Marshall",
        op1:"B) COMECON",
        op2:"C) KOMINFORM",
        op3:"D) Pacto de Varsovia",
        correcta:"1"
    },
    {
        id:82,
        pregunta:"Paí­ses que apoyaron a la independencia de las 13 colonias",
        op0:"A) Francia y España",
        op1:"B) Alemania e Inglaterra",
        op2:"C) Francia y Alemania",
        op3:"D) Alemania e Inglaterra",
        correcta:"0"
    },
    {
        id:83,
        pregunta:"Rey que participo en la unificación de Italia",
        op0:"A) Piamonte-Cerdaña",
        op1:"B) Alfonso VII",
        op2:"C) José Bonaparte",
        op3:"D) Fernando III de castilla",
        correcta:"0"
    },
    {
        id:84,
        pregunta:"¿Qué ayudó al desarrollo a finales de siglo XX en la tecnologí­a actual?",
        op0:"A) Biotecnologí­a",
        op1:"B) Robotización",
        op2:"C) Máquina de vapor",
        op3:"D) La electricidad",
        correcta:"1"
    },
    {
        id:85,
        pregunta:"Paí­ses que practicaron un nacionalismo agresivo, autoritario y conservador, que difundieron el culto a los valores nacionales, el militarismo, la superioridad de la nación y la inferioridad de otros pueblos.",
        op0:"A) Inglaterra y Francia.",
        op1:"B) Rusia y Turquí­a.",
        op2:"C) Alemania e Italia.",
        op3:"D) Alemania y Rusia.",
        correcta:"2"
    }
]
const bd_juego_hm = [
    {
        id:86,
        pregunta:"Relaciona las columnas",
        op0:"A) A3, B1, C4, D2, E5",
        op1:"B) A4, B2, C5, D1, E3",
        op2:"C) A1, B2, C3, D4, E5",
        op3:"D) A3, B1, C5, D2, E4",
        correcta:"0",
        img:"img/hernan.png"
    },
    {
        id:87,
        pregunta:"En el porfiriano que sectores se desarrollaron",
        op0:"A) Ferrocarriles, industria textil, minas",
        op1:"B) Ferrocarriles, carreteras, industria textil",
        op2:"C) Educación, industria textil y carreteras",
        op3:"D) Comercio, creación de la banca, petróleo",
        correcta:"0"
    },
    {
        id:88,
        pregunta:"Causas internas de la independencia",
        op0:"A) Reformas borbónicas",
        op1:"B) Invasión de Napoleón a España",
        op2:"C) Criollos subyugados, subestimados y relegados",
        op3:"D) Pensamientos de la ilustración",
        correcta:"2"
    },
    {
        id:89,
        pregunta:"¿Qué sistema impone el gobierno de Lázaro Cárdenas?",
        op0:"A) Unidad nacional",
        op1:"B) Desarrollo estabilizador",
        op2:"C) Presidencialismo",
        op3:"D) Neoliberalismo",
        correcta:"2"
    },
    {
        id:90,
        pregunta:"¿Cuáles son las caracterí­sticas de gobierno de Adolfo López mateo? I-La comisión nacional del libro de texto gratuito II-Reparto agrario III-Creación de la secretaria de educación publica IV- La devolución del territorio del Chamizal V- La creación del INPI â€œInstituto Nacional de Protección Infantilâ€ VI- La creación del IPN",
        op0:"A) I, II, III",
        op1:"B) I, II, IV",
        op2:"C) I, IV, V",
        op3:"D) IV, V, VI",
        correcta:"2"
    },
    {
        id:91,
        pregunta:"¿Cómo se llama la etapa económica que comprende desde el gobierno de Miguel de la Madrid hasta Carlos Salinas de Gortari?",
        op0:"A) Neoliberalismo",
        op1:"B) Desarrollo estabilizador",
        op2:"C) Desarrollo compartido",
        op3:"D) Milagro mexicano",
        correcta:"0"
    },
    {
        id:92,
        pregunta:"Etapa de México contemporáneo donde a economí­a tuvo un crecimiento de 7% anual.",
        op0:"A) Milagro mexicano",
        op1:"B) Desarrollo compartido",
        op2:"C) Neoliberalismo",
        op3:"D) Desarrollo estabilizador",
        correcta:"3"
    },
    {
        id:93,
        pregunta:"¿Qué caracterí­sticas tuvo la Constitución de 1857?",
        op0:"A) Conservador",
        op1:"B) Moderado",
        op2:"C) Liberal",
        op3:"D) Neutral",
        correcta:"2"
    },
    {
        id:94,
        pregunta:"Relaciona las columnas:",
        op0:"A) IC, 2A, 3D, 4B",
        op1:"B) 1A, 2B, 3C, 4D",
        op2:"C) 1B, 2A, 3D, 4C",
        op3:"D) 1B, 2A, 3D, 4C",
        correcta:"1",
        img:"img/etapa.png"
    },
    {
        id:95,
        pregunta:"Objetivo primordial de la Conspiración de Querétaro:",
        op0:"A) Constituir una junta gubernativa que tomara el poder a nombre de Fernando VII.",
        op1:"B) Llevar al poder al corregidor Don Miguel Domí­nguez.",
        op2:"C) Crear una confederación de estados americanos encabezada por Simón Bolí­var.",
        op3:"D) Establecer una república democrática gobernada por Fray Vicente de Santamarí­a.",
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
    parrafoxd.textContent = 'Â¡Obtuviste ' + cantiCorrectas + '/120!'
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
 
    time.innerHTML = `${ht}:${mt}:${st}`;
 };
 function reset() {
    clearInterval(timeStarted);
    time.innerHTML = "03:00:00"
    h = 3;
    m = 0;
    s = 0;
    mls = 0;
 }
 function stop() {
    clearInterval(timeStarted);
 }
