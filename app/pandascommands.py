#!/usr/bin/env python3
import feather
import pandas as pd

from app.tasks import get_db


def get_head(taskid, limit):
    df = get_df(taskid)
    return df.head(limit).to_dict('split')


def get_df(index):
    file = get_db().loc[index]['path']
    return feather.read_dataframe(file)


def main():
    df = get_head(0, 10)
    return df


if __name__ == "__main__":
    print(main())
