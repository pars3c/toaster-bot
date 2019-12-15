from flask import Flask, redirect, url_for, request, jsonify
import json
app = Flask(__name__)

@app.route('/toast-handler', methods=['POST'])
def handle_toast():
   if request.method == 'POST':
        toastData = request.get_json()
        data = {"toast": toastData}
        return data
        


if __name__ == '__main__':
   app.run(debug = True, port=5000)