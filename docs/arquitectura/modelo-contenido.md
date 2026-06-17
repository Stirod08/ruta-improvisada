# Modelo de Contenido

## Región

Representa una subregión de Antioquia.

Ejemplos:

- Oriente
- Suroeste
- Urabá
- Norte
- Occidente
- Nordeste
- Bajo Cauca
- Magdalena Medio
- Valle de Aburrá

Campos:

- nombre
- slug
- descripcion
- portada
- galeria
- municipios

---

## Municipio

Representa un municipio perteneciente a una región.

Campos:

- nombre
- slug
- region
- descripcion
- poblacion
- altitud
- temperatura
- clima
- gentilicio
- fundacion
- coordenadas
- portada
- galeria

---

## Lugar Turístico

Representa un atractivo turístico.

Campos:

- nombre
- slug
- municipio
- categoria
- descripcion
- ubicacion
- coordenadas
- horario
- costo
- recomendaciones
- portada
- galeria

Categorías iniciales:

- Cascada
- Mirador
- Embalse
- Parque Natural
- Monumento
- Pueblo Patrimonial
- Sendero

---

## Ruta

Representa un recorrido turístico.

Campos:

- nombre
- slug
- descripcion
- municipios
- distancia
- duracion
- dificultad
- portada

---

## Artículo

Representa contenido editorial del blog.

Campos:

- titulo
- slug
- fecha
- autor
- categoria
- resumen
- portada
