from flask import Flask, Blueprint, render_template, send_from_directory
from flask_restplus import Resource
from todo.api import ns as todo
from read.api import ns as read
from pandasapi.api import ns as pandasapi
from api import api
import feather
import pandas as pd
from os import path


app = Flask(__name__, static_folder="../client/build")


@api.route('/hello')
class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}


@app.route('/')
def index():
    # return render_template('index.html')
    return send_from_directory(app.static_folder, 'index.html')


def initialize():
    if not path.exists('data/db.feather'):
        db = pd.DataFrame(columns=['name', 'file'])
        feather.write_dataframe(db, 'data/db.feather')


if __name__ == '__main__':
    blueprint = Blueprint('api', __name__, url_prefix='/api')
    api.init_app(blueprint)
    api.add_namespace(read)
    api.add_namespace(todo)
    api.add_namespace(pandasapi)
    app.register_blueprint(blueprint)
    initialize()
    app.run(debug=True)
