from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, status
from .auth import get_user_exception, get_password_hash, get_current_user
from app import schema
from app import models
from app.database import get_db
from sqlalchemy.orm import Session

router = APIRouter(
    prefix="/api/todos",
    tags=['todos'],
    responses={404: {"Description": "User was not found"}}
)


@router.get("/")
def get_todos(
        db: Session = Depends(get_db),
        user: dict = Depends(get_current_user),
):
    if user is None:
        raise get_user_exception()
    return db.query(models.Todos).filter(models.Todos.owner_id == int(user.get("id"))).all()


@router.post("/")
def create_todo(
        todo: schema.Todo,
        db: Session = Depends(get_db),
        user: dict = Depends(get_current_user),
):
    if user is None:
        raise get_user_exception()
    todo_model = models.Todos()
    todo_model.title = todo.title
    todo_model.priority = todo.priority
    todo_model.owner_id = user.get("id")
    db.add(todo_model)
    db.commit()
    return success()


@router.put("/{todo_id}")
def update_todo(
        todo: schema.Todo,
        todo_id: int,
        db: Session = Depends(get_db),
        user: dict = Depends(get_current_user),
):
    if user is None:
        raise get_user_exception()
    todo_model = db.query(models.Todos) \
        .filter(models.Todos.id == todo_id, models.Todos.owner_id == user.get("id")).first()
    if not todo_model:
        raise does_not_exist()
    todo_model.title = todo.title
    todo_model.priority = todo.priority
    todo_model.owner_id = user.get("id")
    db.add(todo_model)
    db.commit()
    return success()


@router.delete('/{todo_id}')
def delete_todo(
        todo_id: int,
        db: Session = Depends(get_db),
        user: dict = Depends(get_current_user),
):
    if user is None:
        raise get_user_exception()
    todo_model = db.query(models.Todos) \
        .filter(models.Todos.id == todo_id, models.Todos.owner_id == user.get("id")).first()
    if not todo_model:
        raise does_not_exist()
    db.query(models.Todos).filter(models.Todos.id == todo_id, models.Todos.owner_id == user.get("id")).delete()
    db.commit()
    return success()


def does_not_exist():
    raise HTTPException(status_code=404, detail="Object not found")


def success(status_code: Optional[int] = 201):
    return {
        "status": status_code,
        "operation": "Successful"
    }
