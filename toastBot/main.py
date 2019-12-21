from flask import Flask, redirect, url_for, request, jsonify
import time
import json
app = Flask(__name__)

@app.route('/toast-handler', methods=['POST'])
def handle_toast():
   if request.method == 'POST':
        toastData = request.get_json()
        toast_time = toastData["time"]
        if toast_time < 30:
                toast_state = "warm"
        elif toast_time > 30 and toast_time <= 60:
                toast_state = "medium"
        elif toast_time > 60 and toast_time <= 90:
                toast_state = "crungy"
        else:
                toast_state = "burned"
        time.sleep(int(toastData["time"]))
        data = {"toast": toastData}
        return str(json.dumps(data))
        


if __name__ == '__main__':
   app.run(debug = True, port=5000)