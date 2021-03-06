import uuid

import feather
from flask import Flask
from flask_restplus import Resource, fields

# import service

# from api import api

# ns = api.namespace("read", description="Read from Source")

# read_config = api.model(
#     "ReadConfig",
#     {
#         "path": fields.String(
#             readOnly=True, required=True, description="Path of the file"
#         ),
#         "type": fields.String(
#             readOnly=True,
#             required=True,
#             description="Type of read config. Ex: csv, json, xsl etc., ",
#         ),
#         "name": fields.String(required=True, description="Identifier to the dataframe"),
#     },
# )


def write_to_db(name, file_name):
    df = feather.read_dataframe("data/db.feather")
    ind = len(df)
    df.loc[ind] = [name, file_name]
    feather.write_dataframe(df, "data/db.feather")


# @ns.route("/types")
# class ReadConfigTypes(Resource):

#     # @ns.marshal_list_with(str, code=201)
#     def get(self):
#         return ["csv", "json", "xsl"]


# @ns.route("/")
# class ReadConfig(Resource):
#     def get(self):
#         """List all tasks"""
#         df = feather.read_dataframe("data/db.feather")
#         return [{"name": k[0], "path": k[1]} for k in df.to_dict("split")["data"]]

#     @ns.expect(read_config)
#     def post(self):
#         """Create a new task"""
#         query = api.payload
#         file_name = service.save_df(service.create_df(query), str(uuid.uuid4()))
#         write_to_db(query["name"], "{}.feather".format(file_name))
#         return [query["name"], file_name]


def types():
    return ["csv", "json", "xsl"]
