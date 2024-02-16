from pytube import YouTube
from youtubesearchpython import VideosSearch

def song(name,lim,lene):
	Recentplay=[]
	videosSearch = VideosSearch(name, limit = lim)

	a=videosSearch.result()

	songimg=[]
	songname=[]
	songurl=[]

	li=[]

	for i in range(len(a['result'])):

		title=a['result'][i]['title']
		title=title[:lene]
		title=title[:title.rfind(' ')]
		songname.append(title)

		thumnail=a['result'][i]['thumbnails'][0]['url']

		songimg.append(thumnail)

		video_url=a['result'][i]['link']

		yt = YouTube(video_url)
		try:
			audio_stream = yt.streams.filter(only_audio=True).first()

			audio_url = audio_stream.url
		except:
			audio_url=""

		songurl.append(audio_url)
	li.append(songimg)
	li.append(songname)
	li.append(songurl)
	return(li)