# Cuentas Claras: guía de instalación

Oct 16, 2026 · @Bolognaise

## Qué vas a montar

Una app instalada en tu iPhone y en tu ordenador que guarda tus datos en una hoja de Google tuya. No depende de Claude y es gratis. Calcula unos 30 minutos y hazlo desde el ordenador.

| Pieza | Dónde vive | Para qué sirve |
| --- | --- | --- |
| La app (carpeta `cuentas-claras` del zip) | GitHub Pages, gratis | Es lo que abres en el móvil y el ordenador |
| El script (`Codigo.gs`) | Tu hoja de Google | Guarda tus datos y los reparte entre tus dispositivos |
| La clave de Gemini (opcional) | Tu cuenta de Google | Leer los tickets con una foto |

Necesitas tu cuenta de Google (la de Gmail vale), una cuenta gratuita de GitHub y los dos archivos que te he pasado: `cuentas-claras-app.zip` y `Codigo.gs`.

## Paso 1. Prepara tu hoja de Google

Al terminar tendrás una dirección que acaba en `/exec`. Es la que conecta la app con tu hoja.

1. Abre [sheets.new](https://sheets.new) para crear una hoja nueva y llámala «Cuentas Claras».
2. En el menú, entra en **Extensiones → Apps Script**.
3. Borra el código que aparece, pega **todo** el contenido de `Codigo.gs` y pulsa el icono de guardar.
4. Arriba a la derecha, pulsa **Implementar → Nueva implementación**. En el engranaje de «Seleccionar tipo», elige **Aplicación web**.
5. Rellena así y pulsa **Implementar**:
   - Ejecutar como: **Yo** (tu correo)
   - Quién tiene acceso: **Cualquier usuario**
6. Google te pedirá permiso. Pulsa **Autorizar acceso** y elige tu cuenta. Si aparece «Google no ha verificado esta aplicación», pulsa **Configuración avanzada → Ir a … (no seguro) → Permitir**. Sale porque el script lo has creado tú y no ha pasado por la revisión de Google.
7. Copia la **URL de la aplicación web** (acaba en `/exec`) y guárdala.

Para comprobarlo, abre esa URL en el navegador: tiene que salir un texto que dice «El script funciona».

El acceso «Cualquier usuario» hace falta para que la app pueda llamar al script sin pedirte iniciar sesión. Nadie puede leer ni cambiar tus datos sin la clave que aparece en la línea `CLAVE` al principio del script. Guárdala también: la necesitarás en el paso 3.

## Paso 2. Publica la app en GitHub Pages

Al terminar tendrás la dirección de tu app, del tipo `https://TU-USUARIO.github.io/cuentas-claras/`.

1. Descomprime `cuentas-claras-app.zip`. Tendrás una carpeta `cuentas-claras` con 6 archivos.
2. Crea una cuenta gratuita en [github.com](https://github.com) si no tienes.
3. Pulsa **+ → New repository**. Nombre: `cuentas-claras`. Marca **Public** y pulsa **Create repository**.
4. En la página del repositorio, pulsa el enlace **uploading an existing file**. Arrastra los 6 archivos de dentro de la carpeta (no la carpeta entera) y pulsa **Commit changes**.
5. Entra en **Settings → Pages**. En «Build and deployment», elige Source **Deploy from a branch**, rama **main** y carpeta **/ (root)**. Pulsa **Save**.
6. Espera uno o dos minutos y recarga. Arriba aparecerá «Your site is live at…» con la dirección de tu app.

El repositorio tiene que ser público para usar GitHub Pages gratis. Lo único público es el código de la app: tus datos están en tu hoja de Google y las claves se guardan solo en tus dispositivos.

## Paso 3. Instálala y conecta tu hoja

Empieza por el ordenador y luego pasa la configuración al iPhone con un código, sin escribir nada.

**En el ordenador**

1. Abre la dirección de tu app en Chrome o Edge y pulsa el icono de instalar de la barra de direcciones. En Safari para Mac: **Archivo → Añadir al Dock**.
2. En la app, toca la etiqueta **Sin sincronizar** de arriba a la derecha (o **Plan → Hoja de Google**).
3. Pega la URL del paso 1 y la clave, y pulsa **Probar y guardar**. La etiqueta pasará a **Sincronizado**.
4. Vuelve a **Plan → Hoja de Google** y pulsa **Copiar código**. Envíatelo al iPhone, por ejemplo en una nota o un mensaje a ti mismo.

**En el iPhone**

1. Abre la dirección de tu app en **Safari** (tiene que ser Safari).
2. Pulsa **Compartir → Añadir a pantalla de inicio → Añadir**.
3. Abre la app **desde el icono nuevo**, no desde Safari. En el iPhone, la app instalada guarda sus datos aparte de Safari.
4. Toca **Sin sincronizar**, pega el código en «¿Ya lo configuraste en otro dispositivo?» y pulsa **Probar y guardar**.

El código incluye la clave del script y la de Gemini si ya la has puesto. No se lo pases a nadie.

## Paso 4. Activa la lectura de tickets

Con una clave gratuita de Gemini, la app lee los productos y precios de la foto del ticket. Es opcional: sin ella puedes apuntar a mano y con tus productos habituales.

1. Entra en [aistudio.google.com/apikey](https://aistudio.google.com/apikey) con tu cuenta de Google.
2. Pulsa **Create API key**, acepta las condiciones y copia la clave (empieza por `AIza`).
3. En la app: **Plan → Leer tickets con Gemini**, pega la clave y pulsa **Probar y guardar**.
4. Al apuntar un gasto aparecerá **Leer ticket con foto**. Haz la foto de cerca, recta y con buena luz, revisa los productos y guarda.

La app elige sola el modelo Gemini Flash más reciente que tu clave pueda usar. Google ya no publica un límite fijo para el uso gratuito; para los modelos Flash habla de unos pocos miles de peticiones al día, de sobra para tus tickets ([fuente](https://geotoolbox.ai/blog/gemini-api-pricing.md)). El límite real de tu cuenta aparece en AI Studio ([límites de Gemini](https://ai.google.dev/gemini-api/docs/rate-limits)).

Con la clave gratuita, Google puede usar lo que envías para mejorar sus modelos, y alguna persona puede revisarlo. Un ticket del súper no suele tener datos sensibles, pero no fotografíes documentos con tu nombre, DNI o datos bancarios.

## Uso diario y problemas frecuentes

La app funciona sin conexión. Lo que apuntes se guarda en el dispositivo y se sube solo al volver la conexión; mientras tanto, la etiqueta de arriba muestra cuántos cambios faltan por subir. Si cambias lo mismo en dos dispositivos, se queda el cambio más reciente.

En tu hoja aparecen las pestañas **Movimientos**, **Productos**, **Pagos fijos** y **Objetivos**, que se rehacen solas en cada sincronización. Puedes leerlas, filtrarlas o descargarlas como Excel, pero lo que edites a mano en ellas se sobrescribe. La pestaña oculta `_datos` es la que guarda todo: no la toques.

| Si ves esto | Haz esto |
| --- | --- |
| «La clave no coincide con la del script» | Copia la clave exacta de la línea `CLAVE` del script, sin espacios |
| «Tu hoja no responde como se esperaba» | En Apps Script, **Implementar → Gestionar implementaciones**: revisa que sea Aplicación web con acceso «Cualquier usuario» y usa la URL que acaba en `/exec` |
| Has cambiado el código del script | **Implementar → Gestionar implementaciones → lápiz → Versión: Nueva versión → Implementar**. Así la URL no cambia |
| No aparece «Leer ticket con foto» | Falta la clave de Gemini en ese dispositivo (paso 4) |
| «Has llegado al límite gratuito de Gemini» | Espera un rato y vuelve a intentarlo, o apunta el ticket a mano |
| En el iPhone no salen tus datos | Abre la app desde el icono de la pantalla de inicio y conecta la hoja ahí |

**Actualizar la app:** sube el nuevo `index.html` al repositorio con **Add file → Upload files** y, en `sw.js`, cambia `cc-v1` por `cc-v2`. Cada dispositivo recibe la versión nueva la próxima vez que abra la app con conexión.
