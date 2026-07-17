from fastapi import FastAPI
from fastapi.responses import HTMLResponse

from app.api.status import router as status_router
from app.api.containers import router as container_router


app = FastAPI(
    title="Pop!_OS Internet Sharing Platform",
    version="0.1.0",
)
app.include_router(container_router, prefix="/api", tags=["Docker"])
app.include_router(status_router, prefix="/api", tags=["System"])


@app.get("/", response_class=HTMLResponse)
def home():
    return """
    <html>
        <head>
            <title>Pop!_OS Internet Sharing</title>
        </head>
        <body>
            <h1>🚀 Pop!_OS Internet Sharing Platform</h1>
            <p>Backend is running successfully.</p>
        </body>
    </html>
    """
