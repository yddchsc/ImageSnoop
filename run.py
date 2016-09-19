# -*- coding: utf-8 -*-
from flask import Flask, flash, g, abort, render_template, session, request, redirect, url_for
import os

app = Flask(__name__)

# --- Common utility functions ------------------------------------------------

@app.route('/', methods=['POST','GET'])
def index():
    return render_template('index.html')
@app.route('/messages.html')
def form():
    return render_template('messages.html')
# --- Entry point -------------------------------------------------------------
	
if __name__ == '__main__':
	app.secret_key = os.urandom(24)
	app.run(debug = False)
