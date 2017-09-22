# Installing Udacity-React-Myreads

To Install this package using the following command:

`npm install`

# fsevents: Python 3.x Potential Errors

If you are using the latest python version (at the time of this writing 3.6)
you may be experiencing errors when installing *fsevents* with an error such
as:

`gyp ERR! stack Error: Python executable ... which is not supported`

Most python installations install older versions that can be called explicitly
using their version number and the library supports setting an environment
variable to point to it. In my case for instance, I was able to successfully
install using:

`PYTHON=/usr/bin/python2.7 npm install`

Your mileage my vary as you will need to locate _python2.7_ on your server.
