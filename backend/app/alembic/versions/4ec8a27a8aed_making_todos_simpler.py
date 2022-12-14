"""making todos simpler

Revision ID: 4ec8a27a8aed
Revises: 1b8142d364c8
Create Date: 2022-10-10 18:00:28.434240

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4ec8a27a8aed'
down_revision = '1b8142d364c8'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('todos', 'complete')
    op.drop_column('todos', 'description')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('todos', sa.Column('description', sa.VARCHAR(), autoincrement=False, nullable=True))
    op.add_column('todos', sa.Column('complete', sa.BOOLEAN(), autoincrement=False, nullable=True))
    # ### end Alembic commands ###
