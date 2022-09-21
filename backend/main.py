from fastapi import FastAPI, APIRouter, Request
from starlette.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
import models
from database import engine

root_router = APIRouter()
app = FastAPI()

models.Base.metadata.create_all(bind=engine)
TEMPLATES = Jinja2Templates(directory="templates")


@app.get('/', status_code=200)
async def test(
        request: Request
        ):
    """
    Root get
    """
    return TEMPLATES.TemplateResponse(
        "index.html",
        {"request": request}
    )


if __name__ == "__main__":
    # Use this for debugging purposes only
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000, log_level="debug")