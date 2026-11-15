/**
 * =====================================================================
 * CÓDIGO GOOGLE APPS SCRIPT PARA CONFIRMACIÓN DE ASISTENCIA (RSVP)
 * Boda de Fabiana & Fernando
 * =====================================================================
 * 
 * INSTRUCCIONES RÁPIDAS (2 MINUTOS):
 * 1. Abre Google Drive y crea una nueva hoja de cálculo (Google Sheet) llamada "Boda Fabiana y Fernando - Asistencia".
 * 2. En la fila 1, pon estos encabezados en las columnas A hasta G:
 *    A: Fecha y Hora
 *    B: Nombre y Apellidos
 *    C: ¿Asiste?
 *    D: ¿Tiene Acompañante?
 *    E: Nombre Acompañante
 *    F: ¿Necesita Autobús?
 *    G: Información Adicional (Alergias / Peticiones)
 * 
 * 3. En el menú superior de la hoja, haz clic en:
 *    "Extensiones" -> "Apps Script"
 * 
 * 4. Borra el código existente y pega TODO el código que ves a continuación.
 * 
 * 5. Haz clic en "Implementar" (botón azul arriba a la derecha) -> "Nueva implementación".
 *    - Selecciona tipo: "Aplicación web".
 *    - Descripción: "RSVP Boda Fabiana y Fernando".
 *    - Ejecutar como: "Yo" (tu cuenta de Google).
 *    - Quién tiene acceso: "Cualquiera" (IMPORTANTE: Debe ser "Cualquiera" para que los invitados puedan enviar sus respuestas).
 * 
 * 6. Haz clic en "Implementar" y copia la URL proporcionada (termina en `/exec`).
 * 
 * 7. Abre tu archivo `index.html`, busca la línea:
 *    const GOOGLE_SCRIPT_URL = "";
 *    y pega tu URL entre las comillas. ¡Listo!
 */

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    // Usa la primera pestaña de la hoja de cálculo
    var sheet = ss.getSheets()[0];
    
    // Parsear datos recibidos (acepta JSON o parámetros de formulario)
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }
    
    var fecha = data.fechaRegistro || new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" });
    var nombre = data.nombre || "";
    var asistencia = data.asistencia || "Si";
    var tieneAcompanante = data.tieneAcompanante || "No";
    var nombreAcompanante = data.nombreAcompanante || "";
    var necesitaAutobus = data.necesitaAutobus || "Si";
    var informacion = data.informacion || "";
    
    // Añadir fila a la hoja
    sheet.appendRow([
      fecha,
      nombre,
      asistencia,
      tieneAcompanante,
      nombreAcompanante,
      necesitaAutobus,
      informacion
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Respuesta guardada correctamente"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Servicio de recepción de confirmaciones para la Boda de Fabiana & Fernando activo.");
}
