#!/usr/bin/env python3
"""Async Comprehensions"""
async_generator = __import__('0-async_generator').async_generator
import random
from typing import List


async def async_comprehension() -> List[float]:
    """
    The coroutine will collect 10 random
    numbers using an async comprehensing
    """
    return [num async for num in async_generator()]
