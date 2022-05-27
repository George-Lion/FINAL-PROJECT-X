"""empty message

Revision ID: 51811aefd7d5
Revises: 4ed582925bec
Create Date: 2022-05-25 17:47:51.318850

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '51811aefd7d5'
down_revision = '4ed582925bec'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('trip', sa.Column('destination_picture', sa.String(length=120), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('trip', 'destination_picture')
    # ### end Alembic commands ###
