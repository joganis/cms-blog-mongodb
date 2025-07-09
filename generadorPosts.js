// Script para generar 500 posts de blog en MongoDB


use cms_blog_db

// Arrays para generar datos aleatorios
const titulos = [
  "Introducción a MongoDB", "Fundamentos de JavaScript", "Desarrollo Web Moderno",
  "Inteligencia Artificial en 2025", "Ciberseguridad Básica", "Programación con Python",
  "Diseño UX/UI", "Marketing Digital", "Blockchain Explicado", "Cloud Computing",
  "Machine Learning Práctico", "Desarrollo Mobile", "APIs REST", "DevOps Básico",
  "Análisis de Datos", "E-commerce Moderno", "Redes Sociales", "SEO Avanzado",
  "Startups Exitosas", "Tecnología 5G", "Internet de las Cosas", "Robótica",
  "Realidad Virtual", "Computación Cuántica", "Energías Renovables"
];

const autores = [
  "Ana García", "Carlos Rodríguez", "María López", "Juan Pérez", "Laura Martín",
  "Diego Silva", "Carmen Ruiz", "Antonio Morales", "Isabel Torres", "Miguel Ángel",
  "Patricia Herrera", "Roberto Jiménez", "Cristina Vargas", "Fernando Castro",
  "Alejandra Ramos", "Pablo Guerrero", "Mónica Delgado", "Andrés Vega",
  "Lucía Mendoza", "Daniel Ortega"
];

const categorias = [
  "Tecnología", "Programación", "Diseño", "Marketing", "Negocios",
  "Ciencia", "Educación", "Salud", "Deportes", "Viajes",
  "Gastronomía", "Arte", "Música", "Cine", "Literatura"
];

const tags = [
  "javascript", "python", "mongodb", "react", "nodejs", "css", "html",
  "vue", "angular", "machine-learning", "ai", "blockchain", "cybersecurity",
  "cloud", "aws", "azure", "docker", "kubernetes", "devops", "api",
  "frontend", "backend", "fullstack", "mobile", "ios", "android",
  "ux", "ui", "design", "marketing", "seo", "social-media"
];

const estados = ["publicado", "borrador", "archivado"];

// Función para generar fecha aleatoria entre 2020 y 2025
function fechaAleatoria() {
  const inicio = new Date(2020, 0, 1);
  const fin = new Date(2025, 5, 25);
  return new Date(inicio.getTime() + Math.random() * (fin.getTime() - inicio.getTime()));
}

// Función para generar email a partir del nombre
function generarEmail(nombre) {
  return nombre.toLowerCase().replace(/\s+/g, '.') + '@blog.com';
}

// Función para generar contenido aleatorio
function generarContenido(titulo) {
  const contenidos = [
    `Este artículo sobre ${titulo} explora los conceptos fundamentales y las mejores prácticas. `,
    `En esta guía completa de ${titulo}, analizaremos los aspectos más importantes. `,
    `Descubre todo lo que necesitas saber sobre ${titulo} en este tutorial paso a paso. `,
    `Una introducción práctica a ${titulo} con ejemplos reales y casos de uso. `,
    `Los secretos de ${titulo} revelados por expertos en la industria. `
  ];
  
  const base = contenidos[Math.floor(Math.random() * contenidos.length)];
  const extension = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  
  return base + extension;
}

// Generar 500 documentos
const posts = [];

for (let i = 0; i < 500; i++) {
  const titulo = titulos[Math.floor(Math.random() * titulos.length)] + " - Parte " + (i % 10 + 1);
  const autor = autores[Math.floor(Math.random() * autores.length)];
  const fechaPublicacion = fechaAleatoria();
  const fechaActualizacion = new Date(fechaPublicacion.getTime() + Math.random() * 90 * 24 * 60 * 60 * 1000); // hasta 90 días después
  
  // Seleccionar tags aleatorios (2-5 tags por post)
  const numTags = Math.floor(Math.random() * 4) + 2;
  const tagsSeleccionados = [];
  const tagsCopia = [...tags];
  
  for (let j = 0; j < numTags; j++) {
    const indice = Math.floor(Math.random() * tagsCopia.length);
    tagsSeleccionados.push(tagsCopia.splice(indice, 1)[0]);
  }
  
  const post = {
    titulo: titulo,
    contenido: generarContenido(titulo),
    autor: autor,
    email_autor: generarEmail(autor),
    fecha_publicacion: fechaPublicacion,
    fecha_actualizacion: fechaActualizacion,
    categoria: categorias[Math.floor(Math.random() * categorias.length)],
    tags: tagsSeleccionados,
    estado: estados[Math.floor(Math.random() * estados.length)],
    visitas: Math.floor(Math.random() * 10000),
    comentarios: Math.floor(Math.random() * 100),
    likes: Math.floor(Math.random() * 500),
    featured: Math.random() < 0.1 // 10% de probabilidad de ser destacado
  };
  
  posts.push(post);
}

// Insertar todos los documentos
db.posts.insertMany(posts);

// Verificar la inserción
print("Total de documentos insertados: " + db.posts.countDocuments());
print("Documentos de muestra:");
db.posts.find().limit(3).pretty();
