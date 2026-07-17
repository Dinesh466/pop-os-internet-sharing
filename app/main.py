from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI(
    title="Pop!_OS Internet Sharing Platform",
    version="0.1.0"
)

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
