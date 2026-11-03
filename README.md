# Cuentas Claras: guía de instalación

Actualizada el 4 nov 2026 · @Bolognaise

## Qué vas a montar

Una app instalada en tu iPhone y en tu ordenador que guarda tus datos en una hoja de Google tuya. No depende de Claude y es gratis. Calcula unos 30 minutos y hazlo desde el ordenador.

| Pieza | Dónde vive | Para qué sirve |
| --- | --- | --- |
| La app (carpeta `cuentas-claras` del zip) | GitHub Pages, gratis | Es lo que abres en el móvil y el ordenador |
| El script (`Codigo.gs`) | Tu hoja de Google | Guarda tus datos y los reparte entre tus dispositivos |
| La clave de Gemini (opcional) | Tu cuenta de Google | Leer los tickets con una foto |
| El atajo de Siri (opcional) | La app Atajos del iPhone | Apuntar un gasto hablando: «Oye Siri, apunta un gasto» |

Necesitas tu cuenta de Google (la de Gmail vale), una cuenta gratuita de GitHub y los dos archivos que te he pasado: `cuentas-claras-app.zip` y `Codigo.gs`.

## Paso 1. Prepara tu hoja de Google

Al terminar tendrás una dirección que acaba en `/exec` y una clave. Son las que conectan la app con tu hoja.

1. Abre [sheets.new](https://sheets.new) para crear una hoja nueva y llámala «Cuentas Claras».
2. En el menú, entra en **Extensiones → Apps Script**.
3. Borra el código que aparece, pega **todo** el contenido de `Codigo.gs`.
4. **Cambia la clave.** En la línea `const CLAVE = 'CAMBIA-ESTA-CLAVE';`, sustituye `CAMBIA-ESTA-CLAVE` por una clave inventada por ti: letras y números, sin espacios ni tildes, cuanto más larga mejor (por ejemplo, tres palabras y unos números). Deja las comillas. Con la clave de ejemplo el script no funciona.
5. Pulsa el icono de guardar.
6. Arriba a la derecha, pulsa **Implementar → Nueva implementación**. En el engranaje de «Seleccionar tipo», elige **Aplicación web**.
7. Rellena así y pulsa **Implementar**:
   - Ejecutar como: **Yo** (tu correo)
   - Quién tiene acceso: **Cualquier usuario**
8. Google te pedirá permiso. Pulsa **Autorizar acceso** y elige tu cuenta. Si aparece «Google no ha verificado esta aplicación», pulsa **Configuración avanzada → Ir a … (no seguro) → Permitir**. Sale porque el script lo has creado tú y no ha pasado por la revisión de Google.
9. Copia la **URL de la aplicación web** (acaba en `/exec`) y guárdala junto con tu clave.

Para comprobarlo, abre esa URL en el navegador: tiene que salir un texto que dice «El script funciona».

El acceso «Cualquier usuario» hace falta para que la app pueda llamar al script sin pedirte iniciar sesión. Nadie puede leer ni cambiar tus datos sin tu clave. Guárdala bien y no la compartas: la necesitarás en el paso 3 y en el paso 5.

## Paso 2. Publica la app en GitHub Pages

Al terminar tendrás la dirección de tu app, del tipo `https://TU-USUARIO.github.io/cuentas-claras/`.

1. Descomprime `cuentas-claras-app.zip`. Tendrás una carpeta `cuentas-claras` con `index.html`, `sw.js`, `manifest.webmanifest`, tres iconos (`icon-192.png`, `icon-512.png`, `apple-touch-icon.png`) y una carpeta `lib`.
2. Crea una cuenta gratuita en [github.com](https://github.com) si no tienes.
3. Pulsa **+ → New repository**. Nombre: `cuentas-claras`. Marca **Public** y pulsa **Create repository**.
4. En la página del repositorio, pulsa el enlace **uploading an existing file**. Arrastra todo lo que hay **dentro** de la carpeta, incluida la carpeta `lib` (no la carpeta `cuentas-claras` entera), y pulsa **Commit changes**. Arrastrar carpetas solo funciona desde el navegador del ordenador.
5. Entra en **Settings → Pages**. En «Build and deployment», elige Source **Deploy from a branch**, rama **main** y carpeta **/ (root)**. Pulsa **Save**.
6. Espera uno o dos minutos y recarga. Arriba aparecerá «Your site is live at…» con la dirección de tu app.

El repositorio tiene que ser público para usar GitHub Pages gratis. Lo único público es el código de la app: tus datos están en tu hoja de Google y las claves se guardan solo en tus dispositivos. Por eso **nunca subas `Codigo.gs` al repositorio**: lleva tu clave.

## Paso 3. Instálala y conecta tu hoja

Empieza por el ordenador y luego pasa la configuración al iPhone con un código, sin escribir nada.

**En el ordenador**

1. Abre la dirección de tu app en Chrome o Edge y pulsa el icono de instalar de la barra de direcciones. En Safari para Mac: **Archivo → Añadir al Dock**.
2. En la app, toca la etiqueta **Sin sincronizar** de arriba a la derecha (o **Plan → Hoja de Google**).
3. Pega la URL del paso 1 y tu clave, y pulsa **Probar y guardar**. La etiqueta pasará a **Sincronizado**.
4. Vuelve a **Plan → Hoja de Google** y pulsa **Copiar código**. Envíatelo al iPhone, por ejemplo en una nota o un mensaje a ti mismo.

**En el iPhone**

1. Abre la dirección de tu app en **Safari** (tiene que ser Safari).
2. Pulsa **Compartir → Añadir a pantalla de inicio → Añadir**.
3. Abre la app **desde el icono nuevo**, no desde Safari. En el iPhone, la app instalada guarda sus datos aparte de Safari.
4. Toca **Sin sincronizar**, pega el código en «¿Ya lo configuraste en otro dispositivo?» y pulsa **Probar y guardar**.

El código incluye la clave del script y la de Gemini si ya la has puesto. No se lo pases a nadie.

Por último, en **Plan → Cuentas**, toca cada cuenta y escribe cuánto tienes ahora en el banco y en efectivo. Con eso la app calcula «Puedes gastar hoy».

## Paso 4. Activa la lectura de tickets (opcional)

Con una clave gratuita de Gemini, la app lee los productos y precios de la foto del ticket. Sin ella puedes apuntar a mano, con favoritos o con tus productos habituales.

1. Entra en [aistudio.google.com/apikey](https://aistudio.google.com/apikey) con tu cuenta de Google.
2. Pulsa **Create API key**, acepta las condiciones y copia la clave (empieza por `AIza`).
3. En la app: **Plan → Leer tickets con Gemini**, pega la clave y pulsa **Probar y guardar**.
4. Al apuntar un gasto aparecerá **Leer ticket con foto**. Haz la foto de cerca, recta y con buena luz, revisa los productos y guarda.

La app elige sola el modelo Gemini Flash más reciente que tu clave pueda usar. Google ya no publica un límite fijo para el uso gratuito; para los modelos Flash habla de unos pocos miles de peticiones al día, de sobra para tus tickets ([fuente](https://geotoolbox.ai/blog/gemini-api-pricing.md)). El límite real de tu cuenta aparece en AI Studio ([límites de Gemini](https://ai.google.dev/gemini-api/docs/rate-limits)).

Con la clave gratuita, Google puede usar lo que envías para mejorar sus modelos, y alguna persona puede revisarlo. Un ticket del súper no suele tener datos sensibles, pero no fotografíes documentos con tu nombre, DNI o datos bancarios.

## Paso 5. Apunta gastos con Siri (opcional)

Dirás **«Oye Siri, apunta un gasto»**, Siri te preguntará **«¿Qué has gastado?»** y contestas como hablarías: «cinco cuarenta en el bar», «doce en Mercadona con tarjeta», «cena treinta a medias con Lucía», «ayer quince de gasolina». El gasto va a tu hoja y la app lo apunta y lo clasifica la próxima vez que la abres. Necesitas tener la hoja conectada (paso 3).

En la app, **Plan → Apuntar con Siri** tiene estos mismos pasos y botones para copiar la dirección y la clave. En el iPhone, abre la app **Atajos**, toca **+** y añade:

1. **Solicitar entrada** (búscala escribiendo «entrada»): tipo **Texto**, pregunta **¿Qué has gastado?**
2. **Obtener contenido de URL**: en URL pega la dirección `/exec` de tu script. Toca la flecha para ver más opciones: método **POST**, cuerpo de la solicitud **JSON**, y añade tres campos de tipo **Texto**:
   - `action` = `apuntar`
   - `key` = tu clave
   - `texto` = la variable **Entrada proporcionada** (mantén pulsado el campo para elegirla)
3. **Obtener valor de diccionario**: clave `mensaje`, en **Contenido de URL**.
4. **Mostrar resultado** con **Valor del diccionario**.
5. Ponle de nombre al atajo **Apunta un gasto**. Es la frase que dirás a Siri.

Los nombres de las acciones pueden variar un poco según la versión de iOS; si no encuentras una, busca «entrada», «URL» o «diccionario».

El mismo atajo sirve sin hablar: desde el botón de acción, tocando dos veces la parte trasera del iPhone (**Ajustes → Accesibilidad → Tocar → Toque posterior**) o con un widget de Atajos. Te saldrá un cuadro para escribir o dictar.

## Uso diario

- **Apuntar rápido:** el botón **+** abre un cuadro en el que escribes o dictas el gasto tal cual («3,50 café en el bar», «cena 30 a medias con Lucía»). La app saca el importe, la categoría, la fecha y la forma de pago. Tus **favoritos** (Plan → Favoritos) y lo que más repites se apuntan con un toque desde el inicio.
- **Para revisar:** lo que llega de Siri o del banco sin una categoría clara aparece en el inicio para que lo confirmes.
- **Gestos:** desliza un movimiento a la izquierda para borrarlo y a la derecha para repetirlo. Si te equivocas, toca **Deshacer**.
- **Importar del banco:** en **Plan → Importar del banco** subes el CSV o Excel que descargas de tu banco; se saltan los movimientos que ya tengas.
- **Copia de seguridad:** de vez en cuando, **Plan → Copia de seguridad (.json)**. Se restaura en **Plan → Restaurar una copia**.

La app funciona sin conexión. Lo que apuntes se guarda en el dispositivo y se sube solo al volver la conexión; mientras tanto, la etiqueta de arriba muestra cuántos cambios faltan por subir. Si cambias lo mismo en dos dispositivos, se queda el cambio más reciente.

En tu hoja aparecen las pestañas **Movimientos**, **Productos**, **Pagos fijos** y **Objetivos**, que se rehacen solas en cada sincronización. Puedes leerlas, filtrarlas o descargarlas como Excel, pero lo que edites a mano en ellas se sobrescribe. Lo que llega de Siri sale como «Siri (pendiente)» hasta que abres la app. La pestaña oculta `_datos` es la que guarda todo: no la toques.

## Problemas frecuentes

| Si ves esto | Haz esto |
| --- | --- |
| «La clave no coincide con la del script» | Copia la clave exacta de la línea `CLAVE` del script, sin espacios |
| «El script de tu hoja aún tiene la clave de ejemplo» | Cambia `CAMBIA-ESTA-CLAVE` por una clave tuya y publica una nueva versión (ver «Actualizar el script») |
| «Tu hoja no responde como se esperaba» | En Apps Script, **Implementar → Gestionar implementaciones**: revisa que sea Aplicación web con acceso «Cualquier usuario» y usa la URL que acaba en `/exec` |
| No aparece «Leer ticket con foto» | Falta la clave de Gemini en ese dispositivo (paso 4) |
| «Has llegado al límite gratuito de Gemini» | Espera un rato y vuelve a intentarlo, o apunta el ticket a mano |
| En el iPhone no salen tus datos | Abre la app desde el icono de la pantalla de inicio y conecta la hoja ahí |
| Siri dice que la clave no coincide | En el atajo, revisa el campo `key`: tiene que ser igual que la línea `CLAVE` del script |
| Lo que dices a Siri no aparece en la app | Abre la app con conexión y espera a que ponga «Sincronizado». Si sale en la hoja como «Siri (pendiente)», llegó bien |
| Exportar a Excel o PDF no funciona sin conexión | Falta la carpeta `lib` en el repositorio: súbela con sus tres archivos |

## Actualizar a una versión nueva

Tus datos no se pierden al actualizar: están en cada dispositivo y en la pestaña `_datos` de tu hoja. Solo hay dos cosas que **no** debes cambiar: la dirección de la app (el mismo repositorio de GitHub) y la implementación del script (para que la URL `/exec` siga siendo la misma).

**Antes de empezar**, abre la app, comprueba que pone **Sincronizado** y haz **Plan → Copia de seguridad (.json)**.

**Si cambia la app** (`index.html`, `sw.js`, `manifest.webmanifest` o la carpeta `lib`):

1. En tu repositorio de GitHub, entra en la carpeta donde está `index.html` y pulsa **Add file → Upload files**.
2. Arrastra solo los archivos que hayan cambiado. Los que tienen el mismo nombre se sustituyen solos. No toques los iconos.
3. Pulsa **Commit changes** con **Commit directly to the main branch** marcado.
4. Espera a que en la pestaña **Actions** salga el tic verde de «pages build and deployment».
5. Abre la app desde el icono. Si sigue la versión antigua, ciérrala del todo y vuelve a abrirla (a veces dos veces).

Si cambias el código tú mismo, sube también el número de la línea `const VERSION` de `sw.js` (por ejemplo, de `cc-v3` a `cc-v4`). Así cada dispositivo borra la copia antigua guardada y descarga la nueva.

**Si cambia el script** (`Codigo.gs`):

1. En tu hoja, entra en **Extensiones → Apps Script** y **copia tu línea `CLAVE`** actual (la que tiene tu clave) en una nota.
2. Borra todo el código, pega el nuevo y **vuelve a poner tu línea `CLAVE`** en lugar de la de ejemplo. Si la clave cambia, la app y el atajo de Siri dejarán de conectar.
3. Guarda.
4. Pulsa **Implementar → Gestionar implementaciones**, toca el **lápiz**, elige **Versión: Nueva versión** y pulsa **Implementar**. No uses «Nueva implementación»: crearía una URL distinta y tendrías que volver a ponerla en todos tus dispositivos y en el atajo.
5. Si Google pide permisos otra vez, acéptalos como en el paso 1.

Para comprobar que todo va bien, abre la app y mira que la etiqueta de arriba diga **Sincronizado**.
