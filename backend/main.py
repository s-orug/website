from flask import Flask
import time
from pymongo import MongoClient
#mongodb+srv://mongo:mongo@cluster0.kymt1pi.mongodb.net/?retryWrites=true&w=majority

client = MongoClient('mongodb+srv://mongo:mongo@cluster0.kymt1pi.mongodb.net/?retryWrites=true&w=majority')
db = client["data"]
collection = db["time"]

app = Flask(__name__)

tmp_collection=[]

@app.route('/refresh_data')
def get_time():
    x = str(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))
    collection.insert_one({'time': x})
    return {"Date": x}


# Running app
if __name__ == '__main__':
    app.run(debug=True)
