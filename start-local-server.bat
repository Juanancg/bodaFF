@echo off
title Servidor Local Boda Fabi y Fer
echo ========================================================
echo   Servidor Local - Boda Fabi y Fer
echo ========================================================
echo.
echo Tu IP en la red Wi-Fi local es: 192.168.68.77
echo.
echo - Para ver la web en este ordenador:
echo   http://localhost:3000
echo.
echo - Para verla en tu movil (conectado a la misma Wi-Fi):
echo   http://192.168.68.77:3000
echo.
echo Pulsa Ctrl+C para detener el servidor en cualquier momento.
echo ========================================================
echo.

where npm >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Iniciando con npm / live-server...
    npm start
) else (
    echo Iniciando con Python...
    python -m http.server 3000 --bind 0.0.0.0
)
pause
