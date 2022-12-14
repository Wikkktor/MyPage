from sqlalchemy import Boolean, Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base


class Users(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)

    todos = relationship("Todos", cascade='all,delete', back_populates="owner", passive_deletes=True)


class Todos(Base):
    __tablename__ = "todos"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    priority = Column(Integer)
    owner_id = Column(Integer, ForeignKey("users.id", ondelete='CASCADE'))

    owner = relationship("Users", back_populates="todos")
