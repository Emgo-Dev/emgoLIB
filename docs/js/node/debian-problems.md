# Debian Problems

It appears that there are package name errors when installing nodejs from a debian package manager. The nodejs command path is installed as `/usr/bin/nodejs` when package commands expect it to be `/usr/bin/node`.

## Solution with Symlinking

This can be fixed by creating a symbolic link between the `/usr/bin/nodejs` path and `/usr/bin/node` with the following.

```
sudo ln -s /usr/bin/nodejs /usr/bin/node
```
