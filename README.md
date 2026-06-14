# UniSuite Django

Proyecto migrado a Django con HTML, CSS y JavaScript separados.

## Ejecutar localmente

```bash
./scripts/runserver.sh
```

El script crea `.venv` si no existe, activa el ambiente virtual, instala `requirements.txt`, aplica migraciones y levanta Django en `http://127.0.0.1:8000/`.

## Despliegue

El `Procfile` deja programado el arranque activando `.venv` antes de ejecutar migraciones y `gunicorn`.

## Correo del formulario de contacto

Configura las variables de entorno indicadas en `.env.example`. Las principales son:

- `EMAIL_HOST_USER` y `EMAIL_HOST_PASSWORD`: cuenta SMTP desde la que se envian los mensajes.
- `EMAIL_FROM_ADDRESS`: correo que aparece como remitente.
- `CONTACT_TEAM_EMAIL`: correo del equipo que recibe los mensajes.

Para Gmail, `EMAIL_HOST_PASSWORD` debe ser una contrasena de aplicacion, no la contrasena normal de la cuenta. En Render, agrega estas variables desde **Environment**; el archivo `.env` local esta excluido de Git.
