# Cosmix

Cosmix is a web audio editing platform designed to mix unique space-related sounds from NASA with a library of musical tracks. Cosmix was created by a team at Salva O'Renick in Kansas City, MO., as part of the fourth annual NASA International Space Apps Challenge.

### Browser Compatibility

Please read.

Cosmix uses the **HTML5 Filesystem API** as part of it's functionality. Currently *(as of 4/19/2015)* Google Chrome is the only major web browser that uses this technology.

### Getting Started

**Short Keys**

```
N – Add New Track
Ctl + Delete – Delete Track
X – Cut Selection
C – Copy Selection
V – Paste Selection
E – Split Selection
Del - Delete Selection (Note: Deleting cannot be undone)
+ – Zoom in
- – Zoom Out
0 – Normal
F – Full Screen
```

_______

To begin a new project go to Track -> Add New (or hit ‘N’)

![addtrack](https://cloud.githubusercontent.com/assets/2229335/7107034/f9bc70d2-e11b-11e4-91f4-7c539e9b558e.png)


Upload your audio file, either an MP3 or WAV

![uploadphoto](https://cloud.githubusercontent.com/assets/2229335/7107041/20a184bc-e11c-11e4-83dc-2e19ce6e7829.png)

Once the track is uploaded, you’ll see ‘M,’ ‘S’ and a Slider

![ms_slide](https://cloud.githubusercontent.com/assets/2229335/7107045/3f703a1e-e11c-11e4-8370-e855f2798d84.png)

```
M – Mute
S – Solo (Isolate the audio so that track is the only one playing)
Slider – Controls the volume
```

You can ‘Right Click’ on the colored bar to change the color of the bar, rename the track or delete the track.

![changecolor](https://cloud.githubusercontent.com/assets/2229335/7107055/99534cec-e11c-11e4-94f0-c233fa460c9c.png)

The same can be done for ‘Track 1,’ ‘Track 2,’ etc.

![track1](https://cloud.githubusercontent.com/assets/2229335/7107057/b2508282-e11c-11e4-9f51-eaf9d9a608ee.png)

To upload multiple tracks, repeat the process. 

You can grab the colored bar and drag to the left or right to position the start/end point.

![grab](https://cloud.githubusercontent.com/assets/2229335/7107063/c3e6560c-e11c-11e4-9862-39ef9188d0e0.png)


The gray bar on the second track in this example is your selection. You can Copy ( C ), Cut (X), Split (E), which will splice it at the beginning of your selection.

You can’t cut from track 2 and paste into track 1. All work being done is specific to the track. 

###Roadmap

Features in the future are:

* Naming and saving a song
* Rendering engine
* Export song to Soundcloud

###Sources

Cosmix was built off a fork of the [Web Audio Editor](https://github.com/janmyler/web-audio-editor) project by [Jan Myler](https://github.com/janmyler).

Audio resources are a mixture of NASA Space Sounds as well as loops from [Looper Man](www.looperman.com).

Space sounds were found:

* [https://archive.org/details/nasaaudiocollection](https://archive.org/details/nasaaudiocollection)
* [http://www.nasa.gov/connect/sounds](http://www.nasa.gov/connect/sounds)
* [http://www.nasa.gov/news/media/audiofile/](http://www.nasa.gov/news/media/audiofile/)
* [http://human-factors.arc.nasa.gov/slab/](http://human-factors.arc.nasa.gov/slab/)
* [http://www-pw.physics.uiowa.edu/space-audio/](http://www-pw.physics.uiowa.edu/space-audio/)
* [Jupiter, radio waves, NASA's Cassini spacecraft collected near Jupiter in January 2001:] (http://www.nasa.gov/wav/52858main_20010104-ia-a.wav)
* [Uranus, planetary plasma waves collected by NASA's Voyager:] (http://realserver1.jpl.nasa.gov:8080/ramgen/Audio/Audio-vgr-plasma-1.rm)
* [Earth, the whistle of ultra-cold liquid helium-3 that changes volume relative to the North Pole and Earth's rotation:](http://www.nasa.gov/wav/52861main_helium_whistle.wav)
* [Jupiter, radio emissions Galileo gathered from Jupiter's largest moon, Ganymede (first 20 seconds silent):] (http://www.nasa.gov/mpg/52862main_jupiter.mpg)
