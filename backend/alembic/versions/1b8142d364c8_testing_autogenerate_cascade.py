"""testing autogenerate cascade

Revision ID: 1b8142d364c8
Revises: 4d8437bb7a86
Create Date: 2022-10-10 11:28:04.071008

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1b8142d364c8'
down_revision = '65309d7decdb'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('todos_owner_id_fkey', 'todos', type_='foreignkey')
    op.create_foreign_key(None, 'todos', 'users', ['owner_id'], ['id'], ondelete='CASCADE')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'todos', type_='foreignkey')
    op.create_foreign_key('todos_owner_id_fkey', 'todos', 'users', ['owner_id'], ['id'])
    # ### end Alembic commands ###