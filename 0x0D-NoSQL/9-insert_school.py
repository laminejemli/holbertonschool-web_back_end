#!/usr/bin/env python3
""" Python db mongo """


def insert_school(mongo_collection: object, **kwargs):
    """functions that inserts a new document
    based on kwargs
    Args:
        mongo_collection (object): pymongo collection object
    """
    data = mongo_collection.insert_one({**kwargs})
    return data.inserted_id