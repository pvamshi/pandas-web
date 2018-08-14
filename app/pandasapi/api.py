import uuid
from flask import Flask
from flask_restplus import Resource, fields
from api import api
import feather
import pandasapi.service as service
from flask_restplus import reqparse

ns = api.namespace('pandas', description='Perform pandas commands')

config = api.model('ReadConfig', {
    'name': fields.String(required=True, description='Identifier to the dataframe'),
    'num': fields.Integer(required=False, description='Number of elements to fetch')
})



parser = reqparse.RequestParser()
parser.add_argument('num', type=int, help='Number of vals')
parser.add_argument('name')

@ns.route('/head')
class HeadCommand(Resource):

    # @ns.marshal_list_with(str, code=201)
    @ns.expect(parser)
    def get(self):
        args = parser.parse_args()
        reqs = args
        df = service.get_df(reqs['name'])
        return df.head(reqs.get('num') or 5).to_dict('split')

@ns.route('/')
class ReadConfig(Resource):
    def get(self):
        '''List all tasks'''
        df = feather.read_dataframe('data/db.feather')
        return [{'name': k[0], 'path':k[1]} for k in df.to_dict('split')['data']]

    # @ns.expect(read_config)
    # def post(self):
    #     '''Create a new task'''
    #     query = api.payload
    #     file_name = service.save_df(service.create_df(query), str(uuid.uuid4()))
    #     write_to_db(query['name'], '{}.feather'.format(file_name))
    #     return [query['name'], file_name]
