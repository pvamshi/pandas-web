import feather
import pandas as pd


def get_df(index):
    db = feather.read_dataframe('data/db.feather')
    return get_data_df(index, db)


def get_data_df(index, db):
    file = db.loc[index]['file']
    return feather.read_dataframe('data/{}'.format(file))


def get_df_byname(name):
    db = feather.read_dataframe('data/db.feather')
    return get_data_df_byname(name, db)


def get_data_df_byname(name, db):
    file = db[db['name'] == name]['file'][0]
    return feather.read_dataframe('data/{}'.format(file))
