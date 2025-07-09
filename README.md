# 📚 Generador de Posts para CMS Blog en MongoDB

Este proyecto contiene un script en JavaScript diseñado para ejecutarse dentro de `mongosh`. El script genera 500 documentos simulando publicaciones de blog con atributos realistas como título, autor, contenido, tags, categoría, visitas, likes, entre otros.

Perfecto para practicar consultas avanzadas en MongoDB, modelado de documentos, filtrado, paginación, índices y agregaciones.

---

## 📌 Requisitos

- Tener instalado **MongoDB** (local o en la nube)
- Acceso a **mongosh** (Shell de MongoDB)

---

## ⚙️ ¿Qué hace el script?

- Crea (o usa) la base de datos `cms_blog_db`
- Genera 500 posts con campos como:
  - `titulo`
  - `contenido`
  - `autor`
  - `email_autor`
  - `fecha_publicacion`
  - `fecha_actualizacion`
  - `categoria`
  - `tags`
  - `estado`
  - `visitas`
  - `comentarios`
  - `likes`
  - `featured` (10% serán destacados)
- Inserta todos los documentos en la colección `posts`

---

## 🧪 Ejecución del script

1. Abre tu terminal.
2. Inicia MongoDB si lo usas localmente:
   ```bash
   mongod
En otra terminal, abre mongosh:
mongosh

Dentro de mongosh, ejecuta:
load('generadorPosts.js')
Asegúrate de tener el archivo generadorPosts.js en el mismo directorio desde donde abriste mongosh.

🗂 Campos generados en cada post

titulo	Título del post (varía por tema y parte)
contenido	Texto del post con introducción y lorem ipsum
autor	Nombre aleatorio del autor
email_autor	Correo generado a partir del nombre del autor
fecha_publicacion	Fecha aleatoria entre 2020 y 2025
fecha_actualizacion	Hasta 90 días después de la publicación
categoria	Categoría general (tecnología, salud, arte, etc.)
tags	Lista de 2 a 5 etiquetas
estado	Puede ser "publicado", "borrador" o "archivado"
visitas	Número aleatorio de visitas
comentarios	Número aleatorio de comentarios
likes	Número aleatorio de "me gusta"
featured	Booleano que indica si es destacado (10%)

📦 Resultado
Al finalizar, se imprimen:
  Total de documentos insertados
  Una muestra de 3 posts

También puedes ejecutar:
db.posts.find().limit(5).pretty()
Para ver más resultados directamente desde mongosh.

📥 Uso recomendado
Este script es ideal para:

Simular datos en sistemas CMS
Practicar búsquedas, filtros y paginación en MongoDB
Probar agregaciones por autor, categoría o tags
Crear dashboards ficticios
Demostraciones académicas

🧠 Autor
Desarrollado por Andrés Soto como parte de ejercicios de práctica profesional y proyectos personales para aprendizaje de MongoDB.

📃 Licencia
Este proyecto es de uso libre para fines educativos y personales. Puedes modificar y adaptarlo según tus necesidades.
