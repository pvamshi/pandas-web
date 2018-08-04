from flask import Flask, Blueprint
from flask_restplus import Resource, Api
from app.todo.api import ns as todo
from app.read.api import ns as read
from app.api import api
import feather
import pandas as pd
from os import path


app = Flask(__name__)


@api.route('/hello')
class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}


def initialize():
    if not path.exists('data/db.feather'):
        db = pd.DataFrame(columns=['name', 'file'])
        feather.write_dataframe(db, 'data/db.feather')


if __name__ == '__main__':
    blueprint = Blueprint('api', __name__, url_prefix='/api')
    api.init_app(blueprint)
    api.add_namespace(read)
    api.add_namespace(todo)
    app.register_blueprint(blueprint)
    initialize()
    app.run(debug=True)
