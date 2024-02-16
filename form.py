from flask import Flask, render_template, jsonify, request
from search import song


app = Flask(__name__)

@app.route('/')
def get_files():
    data=song("top tamil songs",5,17)
    data1=song("New tamil songs",5,17)
    topsongs=data[0]
    topnames=data[1]
    newsongs=data1[0]
    newnames=data1[1]
    return render_template('home.html',Topsongs=topsongs,Topnames=topnames,topcount=len(topsongs),Newsongs=newsongs,
        Newnames=newnames,Newcount=len(newsongs),songsurl1=data[2],songsurl2=data1[2])

@app.route('/search_data')
def search_data_route():
    query = request.args.get('query', '')
    data = song(query,5,70)
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
