# UniSuite Django

Proyecto migrado a Django con HTML, CSS y JavaScript separados.

## Ejecutar localmente

```bash
./scripts/runserver.sh
```

El script crea `.venv` si no existe, activa el ambiente virtual, instala `requirements.txt`, aplica migraciones y levanta Django en `http://127.0.0.1:8000/`.

## Despliegue

El `Procfile` deja programado el arranque activando `.venv` antes de ejecutar migraciones y `gunicorn`.
