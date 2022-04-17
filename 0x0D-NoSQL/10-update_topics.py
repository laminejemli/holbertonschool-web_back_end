#!/usr/bin/env python3
""" Update topics py"""


from typing import List


def update_topics(mongo_collection: object, name: str, topics: List[str]):
    """Change all topics of a school document based on the name
    Args:
        mongo_collection (object): [description]
        name (str): [description]
        topics (List[str]): [description]
    """
    attribut = mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
    return attribut.modified_count