from fastapi import FastAPI, APIRouter, Request, File, UploadFile, Form
from fastapi.templating import Jinja2Templates
from app import models
from typing import Dict, Any
from app.database import engine
from app.routers import auth, todos, users
from fastapi.middleware.cors import CORSMiddleware
from fastapi_mail import FastMail, MessageSchema, MessageType
from passwords import conf
from fastapi.responses import JSONResponse
from PIL import Image
import io

root_router = APIRouter()
app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
    return {"message": "Test success!"}


@app.post('/email-grupalucrum', status_code=200)
async def email(data: Dict[Any, Any]):
    section1 = ''
    for key, val in data['formInputs']['section1'].items():
        if val:
            section1 += f"{key} <br>"
    
    section2 = ''
    for key, val in data['formInputs']['section3'].items():
        section2 += f"{key} - {val} <br>" 
    
    msg = f"""
    <h2>Wybrane typy:</h2> <br>
    {section1}
    <br>
    Zakres budżetu: {data['formInputs']['rangeAmount']} <br>
    <br>
    <h3>DANE:</h3> <br>
    {section2}
    """
    message = MessageSchema(
        subject="Grupa Lucrum Wiadomość",
        recipients=["kontakt@grupalucrum.pl",],
        body=msg,
        subtype=MessageType.html)

    fm = FastMail(conf)
    await fm.send_message(message)
    return JSONResponse(status_code=200, content={"message": "email has been sent"}) 



@app.post('/email-kariera', status_code=200)
async def sendCV(
    name: str = Form(...),
    lastname: str = Form(...), 
    email: str = Form(...), 
    message: str = Form(...), 
    file: UploadFile = File(...)):

    msg = f"""
    <h1>Ktoś przesłał CV</h1> 
    <br>
    Imię: {name} <br>
    Naziwsko: {lastname} <br>
    Email: {email} <br>
    Wiadomość: {message}
    """

    message = MessageSchema(
        subject="Grupa Lucrum Wiadomość",
        recipients=["kontakt@grupalucrum.pl",],
        body=msg,
        subtype=MessageType.html,
        attachments=[file,])

    fm = FastMail(conf)
    await fm.send_message(message)
    return JSONResponse(status_code=200, content={"message": "email has been sent"}) 

if __name__ == "__main__":
    # Use this for debugging purposes only
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000, log_level="debug")