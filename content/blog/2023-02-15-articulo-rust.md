---
title: ¿Por que deberías aprender Rust?
date: 2023-01-13T12:00:06+09:00
author: Craw Katt
description: Artículo de Rust.
draft: false
tags:
  - nuevo
  - bienvenida
  - saludo
categories:
  - mensajes
series:
  - ""
image: images/blog/coding.jpg
icon: images/icons/search.svg
---
Rust es un lenguaje de programación moderno y de alto rendimiento que se ha ganado una gran popularidad en los últimos años. A menudo se describe como un reemplazo más seguro y más rápido para C++ y un lenguaje más escalable y flexible que JavaScript. A continuación, te proporcionamos una guía para instalar Rust en tu ordenador y explicamos por qué puede ser una mejor opción que otros lenguajes de programación populares.

¿Por qué Rust es mejor que C++ y JavaScript?

Rust ofrece una serie de ventajas sobre otros lenguajes de programación populares como C++ y JavaScript.

**Seguridad:** A diferencia de C++, Rust es un lenguaje de programación que se enfoca en la seguridad, lo que significa que se han tomado medidas especiales para prevenir errores comunes de programación, como los problemas de punteros nulos y la corrupción de memoria. Esto hace que Rust sea más seguro que C++ en muchos casos.

**Rendimiento:** Rust es conocido por su alto rendimiento, lo que lo hace ideal para aplicaciones que requieren una gran cantidad de procesamiento. En muchos casos, Rust puede ser más rápido que C++ gracias a su sistema de administración de memoria y otros mecanismos de optimización.

**Flexibilidad:** A diferencia de JavaScript, Rust es un lenguaje de programación de bajo nivel que ofrece un control más cercano del hardware subyacente. Esto lo hace ideal para aplicaciones de sistema, como controladores de dispositivos y sistemas operativos, así como para aplicaciones web de alto rendimiento.

**Escalabilidad:** Rust es un lenguaje de programación altamente escalable que es fácil de mantener a medida que crece el tamaño de tu código base. A medida que tu proyecto se hace más grande, Rust te permite organizar tu código en módulos y paquetes para una mayor facilidad de mantenimiento.

#### Windows:

Visita la página oficial de Rust en https://www.rust-lang.org/es. En el menú principal, haz clic en "Instalación" y selecciona la opción correspondiente para Windows.

Descarga el instalador de Rust para Windows y haz doble clic en el archivo para abrirlo y comenzar la instalación.

Sigue las instrucciones del instalador y acepta los términos de la licencia.

Una vez que la instalación esté completa, abre tu terminal o línea de comandos y escribe "rustc --version" para verificar que Rust se haya instalado correctamente.

#### MacOS:

Visita la página oficial de Rust en https://www.rust-lang.org/es. En el menú principal, haz clic en "Instalación" y selecciona la opción correspondiente para macOS.

Copia el comando de instalación que se muestra en la página oficial de Rust.

Abre la aplicación "Terminal" en tu Mac.

Pega el comando de instalación en la terminal y presiona "Enter".

Sigue las instrucciones del instalador y acepta los términos de la licencia.

Una vez que la instalación esté completa, abre tu terminal o línea de comandos y escribe "rustc --version" para verificar que Rust se haya instalado correctamente.

#### Linux:

Visita la página oficial de Rust en https://www.rust-lang.org/es. En el menú principal, haz clic en "Instalación" y selecciona la opción correspondiente para tu distribución de Linux.

Abre una terminal en tu distribución de Linux.

Copia el comando de instalación que se muestra en la página oficial de Rust.

Pega el comando de instalación en la terminal y presiona "Enter".

Sigue las instrucciones del instalador y acepta los términos de la licencia.

Una vez que la instalación esté completa, abre tu terminal o línea de comandos y escribe "rustc --version" para verificar que Rust se haya instalado correctamente.

### Crear un Proyecto en Rust
Antes de comenzar a escribir código en Rust, primero tenemos que crear un proyecto con el gestor de paquetes *cargo*. 

Si vienes de Python o JavaScript con NodeJS te serán familiares los gestores *pip* y *npm*, *cargo* es el equivalente a las herramientas mencionadas anteriormente.

Para construir nuestro proyecto de Rust usando cargo debemos abrir una terminal de comandos y ejecutar el comando:

```bash
 
 cargo new <nombre-de-tu-proyecto>
  
```

```bash
 
 cargo new hola_mundo
 
```

#### Hola, mundo
El programa "Hola, mundo" es un clásico en la programación, y es una excelente manera de comenzar a aprender un nuevo lenguaje. Aquí está el código para imprimir "Hola, mundo" en Rust:

```rust

 fn main() {
     println!("Hola, mundo!");
 }
 
```

Este código define una función llamada "main" que imprime "Hola, mundo!" en la consola.

#### Variables y tipos de datos
Rust es un lenguaje de programación con tipos de datos estáticos, lo que significa que debes declarar el tipo de una variable antes de usarla. Aquí hay algunos ejemplos de cómo declarar variables en Rust:

```rust
 
 // Declarar una variable entera
 let x: i32 = 42;

 // Declarar una variable flotante
 let y: f64 = 3.14;

 // Declarar una variable booleana
 let z: bool = true;

 // Declarar una cadena de caracteres
 let s: &str = "Hola, mundo!";
 
```

#### Funciones
Las funciones son bloques de código reutilizable en Rust. Aquí hay un ejemplo de cómo definir una función en Rust:

```rust
 
 // Definir una función que devuelve la suma de dos números
 fn sumar(a: i32, b: i32) -> i32 {
     a + b
 }

 // Llamar a la función y guardar el resultado en una variable
 let resultado = sumar(1, 2);

 // Imprimir el resultado
 println!("El resultado es: {}", resultado);
 
```

#### Estructuras de datos
Rust también admite estructuras de datos, que son una colección de variables con diferentes tipos de datos. Aquí hay un ejemplo de cómo definir una estructura de datos en Rust:

```rust

 // Definir una estructura de datos
 struct Persona {
     nombre: String,
     edad: i32,
 }

 // Crear una instancia de la estructura de dato s
 let persona = Persona { 
     nombre: String::from("Juan"), 
     edad: 30 
  }; 

 // Imprimir los datos de la person a
 println!("{} tiene {} años.", persona.nombre, persona.edad) ; 
 
```
### Ponte a Prueba
En el siguiente ejercio, declaramos tres variables diferentes: una entera, una flotante y una cadena de caracteres. Luego imprimimos el valor de cada variable en la consola

```rust
 
 fn main() {
     // Declaración de una variable entera
     // Tú código aquí : crea una nueva variable y asígnale un valor, y luego imprime el valor de la variable.

     // Declaración de una variable flotante
     // Tú código aquí : crea una nueva variable y asígnale un valor, y luego imprime el valor de la variable.

     // Declaración de una cadena de caracteres
     // Tú código aquí : crea una nueva variable y asígnale un valor, y luego imprime el valor de la variable.

     // Imprimir las variables
     // Tú código aquí : imprime el valor de las variables en la consola.
     
 }
 
```
Para completar el ejercicio, te invito a crear una nueva variable y asignarle un valor de tu elección. Luego, imprime el valor de la nueva variable en la consola utilizando la función "println".

### Conclusiones
Rust es un lenguaje de programación poderoso y seguro que es excelente para escribir aplicaciones de sistema de alto rendimiento. En este artículo, te mostré cómo instalar Rust y te di algunos ejemplos de cómo escribir código en Rust. Espero que esto te haya ayudado a comenzar a programar en Rust. ¡Buena suerte!
