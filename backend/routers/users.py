from typing import Optional, List
from fastapi import APIRouter, Depends
from .auth import get_user_exception, get_password_hash, get_current_user
import schema
import models
from database import get_db
from sqlalchemy.orm import Session

router = APIRouter(
    prefix="/api/users",
    tags=['users'],
    responses={404: {"Description": "User was not found"}}
)


@router.get("/")
def get_logged_in_user(
        db: Session = Depends(get_db),
        user: dict = Depends(get_current_user),
):
    """
    Function to display data for logged-in user
    :param user: From auth function that converts JWT and take out username and id of user
    :param db: database connection
    :return: queried logged-in user
    """
    if user is None:
        raise get_user_exception()
    user_model = db.query(models.Users).filter(models.Users.id == user.get("id")).first()
    if user_model is None:
        return get_user_exception()
    return user_model


@router.post("/")
async def create_user(
        user: schema.User,
        db: Session = Depends(get_db),
):
    """
    User creation function
    :param user: Pydantic schema
    :param db: database connection
    :return: new user in database
    """
    check_username = db.query(models.Users).filter(models.Users.username == user.username).first()
    if check_username:
        raise get_user_exception()
    user_model = models.Users()
    await create_update_user(user, user_model, db)

    return success()


@router.put("/")
async def update_user(
        user: schema.User,
        db: Session = Depends(get_db),
        get_user: dict = Depends(get_current_user),
):
    """
    Update logged-in user
    :param user: Pydantic schema
    :param get_user: Get current logged-in user
    :param db: database connection
    :return: Updated user
    """
    if get_user is None:
        raise get_user_exception()
    user_modify = db.query(models.Users).filter(models.Users.id == get_user.get("id")).first()
    if user_modify is None:
        raise get_user_exception()
    await create_update_user(user, user_modify, db)

    return success()


@router.delete("/")
def delete_logged_in_user(
        db: Session = Depends(get_db),
        user: dict = Depends(get_current_user),
):
    """
    Deletes logged-in user from database
    :param user: get logged-in user
    :param db: database connection
    :return: deletes logged in user and success response
    """
    if user is None:
        raise get_user_exception()
    delete_user = db.query(models.Users).filter(models.Users.id == user.get("id")).first()
    if delete_user is None:
        raise get_user_exception()
    db.query(models.Users).filter(models.Users.id == user.get("id")).delete()
    db.commit()

    return success(200)


# TODO: Only for admins or users with permission
@router.delete("/{user_id}")
def delete_user(
        user_id: int,
        db: Session = Depends(get_db)
):
    """
    Deletes user with id that was in path parameter
    :param user_id: path parameter id
    :param db: database connection
    :return: deletes selected in path parameter user
    """
    user = db.query(models.Users).filter(models.Users.id == user_id).first()
    if user is None:
        raise get_user_exception()
    db.query(models.Users).filter(models.Users.id == user_id).delete()
    db.commit()

    return success(200)


@router.get("/all")
def get_all_users(
        db: Session = Depends(get_db)
):
    """
    Displays all users from database
    :param db: database connection
    :return:
    """
    return db.query(models.Users).all()


async def create_update_user(data, model, db):
    model.username = data.username
    model.email = data.email
    model.first_name = data.first_name
    model.last_name = data.last_name
    model.hashed_password = get_password_hash(data.password)
    model.phone_number = data.phone_number
    db.add(model)
    db.commit()
    return True


def success(status_code: Optional[int] = 201):
    return {
        "status": status_code,
        "operation": "Successful"
    }
