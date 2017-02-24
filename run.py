# -*- coding: utf-8 -*-

from flask import Flask, flash, g, abort, render_template, session, request, redirect, url_for,send_from_directory
from werkzeug import secure_filename
import os
# import cv2
# import scipy as sp
# import numpy as np
import sqlite3

UPLOAD_FOLDER='C:/ImageSnoop/static/picture'
ALLOWED_EXTENSIONS=set(['png','jpg','jpeg','gif'])

app = Flask(__name__)

app.config['UPLOAD_FOLDER']=UPLOAD_FOLDER
app.config['SECRET_KEY']='123456'

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.',1)[1] in ALLOWED_EXTENSIONS
# --- Common utility functions ------------------------------------------------

@app.route('/', methods=['POST','GET'])
def index():
    if request.method=='POST':
        if request.form['nameInput'] == u'师兄':
            session['add'] = 'lover.db'
            session['see'] = 'love.db'
            adds = False
            return render_template('love.html', sessions = session, adds = adds)
        elif request.form['nameInput'] == u'师妹':
            session['add'] = 'love.db'
            session['see'] = 'lover.db'
            adds = False
            return render_template('love.html', sessions = session, adds = adds)
        elif 'see' in session:
            with sqlite3.connect(session['add']) as conn:
                cursor = conn.cursor()
                cursor.execute("insert into "+request.form['nameInput']+"(love) values('"+request.form['phoneInput']+"')")
            adds = True
            return render_template('love.html', sessions = session, adds = adds)        
        else:      
            return 'error'
    else:
        adds = False
        return render_template('love.html', sessions = session, adds = adds)
@app.route('/add.html')
def form():
    return render_template('add.html')

#@app.route('/', methods=['POST','GET'])
#def index():
#    if request.method=='POST':
#        file=request.files['file']
#        if file and allowed_file(file.filename):
#            filename=secure_filename(file.filename)
#            #print filename
#            file.save(os.path.join(app.config['UPLOAD_FOLDER'],filename))
#            return redirect('/uploads/'+filename)
#    return render_template('index.html')
# @app.route('/messages.html')
# def form():
#     return render_template('messages.html')
# @app.route('/uploads/<filename>')
# def uploaded_file(filename):
#     if filename[:4] == 'sift':
#         return render_template('show.html',fileurl='../static/picture/'+filename)
#     else:
#         img1 = cv2.imread('C:/ImageSnoop/static/picture/'+filename,0) # queryImage
#         sift = cv2.SIFT()
#         kp1, des1 = sift.detectAndCompute(img1,None)
#         bf = cv2.BFMatcher()
#         matches = bf.knnMatch(des1, des1, k=4)
#         good1 = []
#         for t, m, e ,n in matches:
#             if m.distance < 0.5 * n.distance:
#                 good1.append([m])
#         img2 = cv2.imread('C:/ImageSnoop/static/picture/'+filename, cv2.IMREAD_COLOR)
#         for m in range(len(good1)):
#             color = tuple([sp.random.randint(0, 255) for _ in xrange(3)])
#             cv2.line(img2, (int(kp1[good1[m][0].queryIdx].pt[0]), int(kp1[good1[m][0].queryIdx].pt[1])) , (int(kp1[good1[m][0].trainIdx].pt[0]), int(kp1[good1[m][0].trainIdx].pt[1])), color)
#         cv2.imwrite( "C:/ImageSnoop/static/picture/sift"+filename, img2);
#         return render_template('show.html',fileurl='../static/picture/'+filename,fileurl0='../uploads/sift'+filename)
#        return send_from_directory(app.config['UPLOAD_FOLDER'],"sift"+filename)
# --- Entry point -------------------------------------------------------------
#from werkzeug.contrib.fixers import ProxyFix
#app.wsgi_app = ProxyFix(app.wsgi_app)

if __name__ == '__main__':
    app.run(host='0.0.0.0')#host='0.0.0.0',port=5000)
