from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import os
import json
import random

#Flask Instance
app = Flask(__name__)
CORS(app)


# Load LeetCode questions data
def load_leetcode_questions():
    """Load LeetCode questions from JSON file"""
    try:
        json_path = os.path.join('data', 'leetcode_questions.json')
        with open(json_path, 'r', encoding='utf-8') as file:
            return json.load(file)
    except FileNotFoundError:
        print("LeetCode questions file not found!")
        return []

# Load questions once at startup
leetcode_questions = load_leetcode_questions()

#Routes
# Home Route
@app.route('/api/home', methods=['GET'])
def home():
    return jsonify({
        'message': 'Subscribe to me!',
        'people': ['John', 'Jane', 'Jim', 'Jill']
        })

# Leetcode Question Route
@app.route('/api/question/random', methods=['GET'])
def leetcode_question():
    return jsonify({
        'question': random.choice(leetcode_questions)
        })

if __name__ == '__main__':
    app.run(debug=True, port=8080)
