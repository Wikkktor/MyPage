"""Shorten user model

Revision ID: 65309d7decdb
Revises: 
Create Date: 2022-10-10 11:00:04.411069

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '65309d7decdb'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.drop_column('users', 'first_name')
    op.drop_column('users', 'last_name')
    op.drop_column('users', 'email')
    op.drop_column('users', 'phone_number')


def downgrade() -> None:
    op.add_column('users', sa.Column('first_name', sa.String(), nullable=True))
    op.add_column('users', sa.Column('last_name', sa.String(), nullable=True))
    op.add_column('users', sa.Column('email', sa.String(), nullable=True))
    op.add_column('users', sa.Column('first_name', sa.String(), nullable=True))
