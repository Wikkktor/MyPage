from fastapi import FastAPI, APIRouter, Request
from fastapi.templating import Jinja2Templates
from app import models
from app.database import engine
from app.routers import auth, todos, users

root_router = APIRouter()
app = FastAPI()

app.include_router(auth.router)
app.include_router(users.router)
app.include_router(todos.router)

models.Base.metadata.create_all(bind=engine)
TEMPLATES = Jinja2Templates(directory="templates")


@app.get('/api', status_code=200)
async def test(
        request: Request
        ):
    """
    Root get
    """
    return {"message": "Test success"}


if __name__ == "__main__":
    # Use this for debugging purposes only
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000, log_level="debug")