from pytube import YouTube

def song(url):
	yt = YouTube(url)

	audio_stream = yt.streams.filter(only_audio=True).first()

	audio_url = audio_stream.url
	return(audio_url)
