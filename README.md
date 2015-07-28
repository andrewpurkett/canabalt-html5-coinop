canabalt-html5-coinop
==============
Building on the work in [canabalt-html5](https://github.com/eguneys/canabalt-html5), this is a version of canabalt that can run inside an arcade machine, running on a RaspberryPi, and accept coins. A lot of work remains on the project.

## Story

It all went well for 1 month. I messed up on physics and sprite recycling. But i was passionate enough to continue.
I even added the audio, and i managed to make it look almost the same scale as the original.
Finally got stuck how scale/zoom is supposed to work. Menu text alignment was funny.
Then i decided it's not going to be prettier than this version. So i switched to Phaser.

## Installation
1. Install node package manager (npm). On OSX, this is most easily accomplished with brew:

    `brew install npm`

2. Install bower, grunt, and any other missing dependencies using npm:

    `npm install grunt`
    
    `npm install grunt-cli`
    
    `npm install bower`

3. Configure bower to download the needed JS libraries

    `bower update`

## Play
To play run:

    grunt serve

and open up your browser at:

    open localhost:9000

jump is mapped to the `Z` key
