#!/usr/bin/env python3
""" MongoDB Operations with Python """


from typing import List


def schools_by_topic(mongo_collection: object, topic: str) -> List:
    """ Python function that shows the list of
    schools having a specific topics """
    data = mongo_collection.find({"topics": topic})
    list_docu = [d for d in data]
    return list_docu