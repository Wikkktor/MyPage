from pathlib import Path
from fastapi import FastAPI, APIRouter, Request, Depends
from sqlalchemy.orm import Session
from fastapi.templating import Jinja2Templates
import models
from database import engine, get_db

root_router = APIRouter()
app = FastAPI()

models.Base.metadata.create_all(bind=engine)


@app.get('/', status_code=200)
async def test(
        db: Session = Depends(get_db)
):
    return  db.query(models.Todos).all()
