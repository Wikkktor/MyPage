from typing import Optional
from fastapi import APIRouter, Depends
from .auth import get_user_exception, get_password_hash, get_current_user
import schema
import models
from database import get_db
from sqlalchemy.orm import Session


router = APIRouter(
    prefix="/api/todos",
    tags=['todos'],
    responses={404: {"Description": "User was not found"}}
)