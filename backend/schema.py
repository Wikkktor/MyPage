from typing import Optional
from pydantic import BaseModel, Field


class User(BaseModel):
    username: str
    password: str


class Todo(BaseModel):
    title: str = Field(min_length=1)
    description: Optional[str]
    priority: int = Field(gt=0, lt=6)


class Token(BaseModel):
    access_token: str
    token_type: str
