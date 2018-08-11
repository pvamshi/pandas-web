import pandas as pd;
import feather

def get_df(name):
    db = feather.read_dataframe('data/db.feather')
    return get_data_df(name, db)

def get_data_df(name,db):
    file = db[db['name']==name]['file'][0]
    return feather.read_dataframe('data/{}'.format(file))