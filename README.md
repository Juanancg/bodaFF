# Boda de Fabiana & Fernando 💍

Sitio web oficial de la invitación de boda (27 de Febrero de 2027).

---

## 🚀 Probar en Local

### Opción 1: Con Python (Recomendada)
Ejecuta en la terminal dentro de la carpeta del proyecto:
```powershell
python -m http.server 3000 --bind 0.0.0.0
```
Abre en tu navegador: [http://localhost:3000](http://localhost:3000)

### Opción 2: Doble Clic en Windows
Haz doble clic sobre el archivo:
```text
start-local-server.bat
```

### Probar desde el móvil (misma Wi-Fi)
Entra desde el navegador de tu móvil a:
```text
http://<TU_IP_LOCAL>:3000
```
*(Consulta tu IP ejecutando `ipconfig` en la terminal, ej: `http://192.168.68.77:3000`).*

---

## 📝 Configuración de Google Sheets (RSVP)

Para registrar las confirmaciones de los invitados en tu propio Google Sheets:

1. Crea una hoja nueva en [Google Drive](https://drive.google.com).
2. Escribe estos encabezados en la **Fila 1**:
   - `A`: Fecha y Hora
   - `B`: Nombre y Apellidos
   - `C`: ¿Asiste?
   - `D`: ¿Tiene Acompañante?
   - `E`: Nombre Acompañante
   - `F`: ¿Necesita Autobús?
   - `G`: Información Adicional (Alergias / Peticiones)
3. En la hoja, abre en el menú superior: **Extensiones > Apps Script**.
4. Borra lo que haya y pega el contenido del archivo [google-sheet-script.js](google-sheet-script.js).
5. Haz clic en **Implementar > Nueva implementación**:
   - **Tipo**: *Aplicación web*.
   - **Ejecutar como**: *Yo*.
   - **Quién tiene acceso**: *Cualquiera*.
6. Copia la URL terminada en `/exec` y pégala en [index.html](index.html) en la variable:
   ```javascript
   const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/.../exec";
   ```
