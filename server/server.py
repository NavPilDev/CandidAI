from flask import Flask, render_template, request, jsonify

#Flask Instance
app = Flask(__name__)

#Routes
# Home Route
@app.route('/api/home', methods=['GET'])
def home():
    return jsonify({'message': 'Hello, World!'})

if __name__ == '__main__':
    app.run(debug=True)