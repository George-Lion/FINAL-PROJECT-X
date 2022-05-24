"""empty message

Revision ID: f840d6522c8a
Revises: 6b2557664821
Create Date: 2022-05-24 18:45:29.884235

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f840d6522c8a'
down_revision = '6b2557664821'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('firstname', sa.String(length=120), nullable=True))
    op.add_column('user', sa.Column('lastname', sa.String(length=120), nullable=True))
    op.drop_column('user', 'fullname')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('fullname', sa.VARCHAR(length=120), autoincrement=False, nullable=True))
    op.drop_column('user', 'lastname')
    op.drop_column('user', 'firstname')
    # ### end Alembic commands ###
