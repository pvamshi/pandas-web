#!/usr/bin/env python3

import os.path as path

import feather
import pandas as pd

DB = "data/tasks.feather"


def create_db():
    """
    Creates the basic empty db
    """
    df = pd.DataFrame({"name": ["Task 1"], "path": ["data/task1.feather"]})
    feather.write_dataframe(df, DB)


def get_db() -> pd.DataFrame:
    if not path.exists(DB):
        create_db()

    return feather.read_dataframe(DB)


def get_tasks():
    return get_db().to_dict("split")


def main():
    df = get_tasks()
    return df


if __name__ == "__main__":
    print(main())
