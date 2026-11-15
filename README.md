# Boda de Fabiana & Fernando | 27 de Febrero de 2027 💍

Sitio web oficial de la invitación de boda de **Fabiana & Fernando** en Castañeda / Puente Viesgo (Cantabria, España). Diseñado para verse de forma óptima tanto en ordenadores de escritorio como en dispositivos móviles (smartphone y tablet).

---

## 📁 Estructura del Proyecto

```text
bodaFF/
├── .gitignore                     # Configuración de exclusión para Git (ignora tmp/, logs, etc.)
├── index.html                     # Página principal de la invitación (Hero, Cuenta atrás, El Día, Hotel, Cómo llegar, Vestimenta, Lluvia de sobres, RSVP)
├── cantabria.html                 # Página dedicada a la guía de viaje de Cantabria para invitados
├── package.json                   # Configuración de scripts para npm
├── start-local-server.bat         # Acceso rápido en Windows para iniciar el servidor local con un doble clic
├── google-sheet-script.js         # Código de Google Apps Script para registrar respuestas del RSVP en Google Sheets
├── assets/
│   └── images/                    # Recursos visuales limpios y optimizados
│       ├── logo-marron.png        # Logo oficial de la boda (marrón / tierra)
│       ├── FotoMain.jpeg          # Fotografía principal de los novios
│       ├── colegiata-castaneda.jpg # Fotografía a color de la Colegiata de Castañeda (Ceremonia)
│       ├── la-finca-de-san-juan.jpg # Fotografía de la Finca de San Juan (Celebración)
│       ├── piscina-exterior-balneario.jpg # Fotografía del Balneario de Puente Viesgo (Alojamiento)
│       └── cantabria/             # Fotografías de la guía turística de Cantabria
│           ├── cantabria-1.jpg    # Costa Quebrada (Playa de la Arnía)
│           ├── cantabria-2.webp   # Santander y Palacio de la Magdalena
│           ├── cantabria-3.jpg    # Liébana y Picos de Europa (Potes)
│           ├── cantabria-4.jpg    # Playas de Ribamontán (Langre y Somo)
│           └── cantabria-5.jpg    # San Vicente de la Barquera y Comillas
└── tmp/                           # [IGNORADO EN GIT] Borradores y duplicados pendientes de eliminar
```

---

## 🚀 Cómo Ejecutar el Proyecto en Local

### Opción 1: Con Python (Recomendado en Windows si no tienes Node instalado)

Abre la terminal en la carpeta del proyecto y ejecuta:
```powershell
python -m http.server 3000 --bind 0.0.0.0
```
Y abre en tu navegador: [http://localhost:3000](http://localhost:3000)

---

### Opción 2: Doble Clic en Windows

Simplemente haz doble clic sobre el archivo ejecutable:
```text
start-local-server.bat
```

---

### Opción 3: Con Node.js y npm

```bash
npm start
```
o
```bash
npm run dev
```

---

## 📱 Cómo Probar la Web en tu Móvil (Misma red Wi-Fi)

1. Conecta tu teléfono móvil a la **misma red Wi-Fi** que el ordenador.
2. Abre el navegador de tu móvil (Chrome, Safari, etc.) e introduce:
   ```text
   http://192.168.68.77:3000
   ```
   *(Si cambia la red Wi-Fi o estás en otro router, consulta tu IP ejecutando `ipconfig` en PowerShell).*

---

## 📝 Configuración de Google Sheets (RSVP / Confirmación)

El formulario de confirmación de asistencia en `index.html` incluye la pregunta sobre si se necesita plaza en el autobús de la boda y envía los datos automáticamente a Google Sheets:

1. Crea una hoja nueva en [Google Drive](https://drive.google.com).
2. Pon estos encabezados en la **Fila 1**:
   - `A: Fecha y Hora`
   - `B: Nombre y Apellidos`
   - `C: ¿Asiste?`
   - `D: ¿Tiene Acompañante?`
   - `E: Nombre Acompañante`
   - `F: ¿Necesita Autobús?`
   - `G: Información Adicional (Alergias / Peticiones)`
3. En la barra superior de Google Sheets, ve a **Extensiones > Apps Script**.
4. Pega todo el código que se encuentra en [google-sheet-script.js](google-sheet-script.js).
5. Haz clic en **Implementar > Nueva implementación**:
   - **Tipo**: *Aplicación web*.
   - **Ejecutar como**: *Yo*.
   - **Quién tiene acceso**: *Cualquiera*.
6. Copia la URL terminada en `/exec` y pégala en `index.html` en la variable:
   ```javascript
   const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx.../exec";
   ```

---

## 📤 Subir Cambios a GitHub

Para sincronizar este proyecto con tu repositorio en GitHub:

```powershell
git add .
git commit -m "Organizar assets limpios y preparar web oficial para GitHub"
git push origin main
```
*(Nota: la carpeta `tmp/` no se subirá porque está excluida en `.gitignore`).*
