#!/usr/bin/env python3
import feather
import pandas as pd

DB = "data/tasks.feather"


def get_head(taskid, limit):
    df = get_df(taskid)
    return df.head(limit)


def get_df(taskid):
    db = feather.read_dataframe(DB)
    file = db.loc[taskid]['path']
    return feather.read_dataframe(file)


def head(taskid, limit):
    return get_head(taskid, limit).to_dict('split')


def df(taskid, offset, limit):
    return get_df(taskid)[offset:(offset + limit)].to_dict('split')


def main():
    df = get_head(0, 10)
    return df


if __name__ == "__main__":
    print(main())
