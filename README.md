canabalt-html5-coinop
==============
Building on the work in [canabalt-html5](https://github.com/eguneys/canabalt-html5), this is a version of canabalt that can run inside an arcade machine, running on a RaspberryPi, and accept coins. A lot of work remains on the project.

## Installation
1. Install node package manager (npm). On OSX, this is most easily accomplished with brew:

    `brew install npm`

2. Install bower, grunt, and any other missing dependencies using npm:

    `npm install`
    
    `sudo npm install bower -g`
    
    `npm install grunt -g`
    
    `sudo npm install -g grunt-cli`

3. Configure bower to download the needed JS libraries

    `bower update`

## Play
To play run (in the directory of the repository):

    grunt serve

and open up your browser at:

    open localhost:9000

## Controls
jump is mapped to the `Space` key

insert coin is mapped to the `Shift` key

start game is mapped to the `Enter` key
