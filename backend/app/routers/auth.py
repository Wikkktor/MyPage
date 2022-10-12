from fastapi import Depends, HTTPException, status, APIRouter
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from typing import Optional
from app.database import get_db
from app.models import Users
from app.schema import Token
from passlib.context import CryptContext
from datetime import datetime, timedelta
from jose import jwt, JWTError
from passwords import TOKEN, ALGORYTM



router = APIRouter(
    prefix="/api/auth",
    tags=["auth"],
    responses={401: {"user": "Not authorized"}}
)

bcrypt_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

oauth2_bearer = OAuth2PasswordBearer(tokenUrl="api/auth/token")


def get_password_hash(password):
    return bcrypt_context.hash(password)


def verify_password(plain_pass, hashed_pass):
    return bcrypt_context.verify(plain_pass, hashed_pass)


def authenticate(
        username: str,
        password: str,
        db: Session
):
    user = db.query(Users).filter(Users.username == username).first()
    if not user:
        return None
    if not verify_password(password, user.hashed_password):
        return None
    return user


def create_access_token(*, sub: str, expires_delta: Optional[timedelta] = None):
    return create_token(
        token_type="access_token",
        sub=sub,
        lifetime=expires_delta
    )


async def get_current_user(token: str = Depends(oauth2_bearer)):
    try:
        payload = jwt.decode(token, TOKEN, algorithms=[ALGORYTM])
        user_id: int = payload.get('sub')
        if user_id is None:
            raise get_user_exception()
        return {"id": user_id}
    except JWTError:
        raise get_user_exception()


def create_token(
        token_type: str,
        sub: str,
        lifetime: Optional[timedelta] = None,
) -> str:
    payload = {}
    if lifetime:
        expire = datetime.utcnow() + lifetime
    else:
        expire = datetime.utcnow() + timedelta(minutes=30)
    payload["type"] = token_type
    payload["exp"] = expire
    payload["iat"] = datetime.utcnow()
    payload["sub"] = str(sub)
    return jwt.encode(payload, TOKEN, algorithm=ALGORYTM)


@router.post("/token", response_model=Token)
def login(
        db: Session = Depends(get_db), form_data: OAuth2PasswordRequestForm = Depends()
):
    """
    Getting the JWT for a user with data from oauth2 request body
    :param db: Database connection required
    :param form_data: request body data
    :return: Access Token JWT
    """
    user = authenticate(username=form_data.username, password=form_data.password, db=db)
    if not user:
        raise get_user_exception()

    return {
        "access_token": create_access_token(sub=user.id),
        "token_type": "bearer"
    }


def get_user_exception():
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    return credentials_exception


def token_exception():
    token_exception_response = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Incorrect username or password",
        headers={"WWW-Authenticate": oauth2_bearer}
    )
    return token_exception_response
