#!/usr/bin/env python3
"""Log stats"""
import pymongo


# Connect to the MongoDB server
client = pymongo.MongoClient("mongodb://localhost:27017/")

# Access the 'logs' database and 'nginx' collection
db = client["logs"]
collection = db["nginx"]

# Get the total number of documents in the collection
total_logs = collection.count_documents({})

# Print the total number of logs
print(total_logs, "logs")

# Get the counts for each HTTP method
http_methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
method_stats = []
for method in http_methods:
    count = collection.count_documents({"method": method})
    method_stats.append(f"    method {method}: {count}")

# Print the HTTP method statistics
print("Methods:")
for stat in method_stats:
    print(stat)

# Get the count for method=GET and path=/status
status_check_count = collection.count_documents({"method": "GET", "path": "/status"})

# Print the count for method=GET and path=/status
print(status_check_count, "status check")
