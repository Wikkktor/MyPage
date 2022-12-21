from typing import Optional
from pydantic import BaseModel, Field, EmailStr


class User(BaseModel):
    username: str
    password: str


class Todo(BaseModel):
    title: str = Field(min_length=1)
    priority: int = Field(gt=0, lt=6)


class Token(BaseModel):
    access_token: str
    token_type: str


# FOR LEARNING / EXERCISING PURPOSES


class UserIn(BaseModel):
    username: str
    password: str
    email: EmailStr
    full_name: str | None = None


class UserOut(BaseModel):
    username: str
    email: EmailStr
    full_name: str | None = None
