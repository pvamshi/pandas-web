import feather
import pandas as pd


def save_df(df, file_name):
    feather.write_dataframe(df, 'data/{}.feather'.format(file_name))
    return file_name


def create_df(path, file_type):
    if(file_type == 'csv'):
        return pd.read_csv(path)
    elif(file_type == 'json'):
        return pd.read_json(path)
