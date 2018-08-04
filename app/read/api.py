import uuid
from flask import Flask
from flask_restplus import Resource, fields
from app.api import api
import app.read.service as service

ns = api.namespace('read', description='Read from Source')

read_config = api.model('ReadConfig', {
    'path': fields.String(readOnly=True, required=True, description='Path of the file'),
    'type': fields.String(readOnly=True, required=True,
                          description='Type of read config. Ex: csv, json, xsl etc., ')
})


@ns.route('/types')
class ReadConfigTypes(Resource):

    # @ns.marshal_list_with(str, code=201)
    def get(self):
        return ['csv', 'json', 'xsl']


@ns.route('/')
class ReadConfig(Resource):
    # '''Shows a list of all todos, and lets you POST to add new tasks'''
    # @ns.doc('list_todos')
    # @ns.marshal_list_with(todo)
    # def get(self):
    #     '''List all tasks'''
    #     return DAO.todos

    # @ns.doc('create_todo')
    @ns.expect(read_config)
    # @ns.marshal_with(, code=201)
    def post(self):
        '''Create a new task'''
        query = api.payload
        file_name = service.save_df(service.create_df(query['path'], query['type']), str(uuid.uuid4()))
        return file_name
