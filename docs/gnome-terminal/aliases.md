# Aliases

Copy the Following text into ~/.bashrc to create terminal aliases. Terminal loads this file on startup, so restart process for changes to take effect. Copy into /home/user-name/.bashrc to apply aliases only to user. Placing Aliases in these files will allow them to persist across login/logouts and sessions rather than creating a temporary alias through the terminal command.

```
# User Defined Aliases
alias here='pwd'
alias to='cd'
alias goto='cd'
alias copy='cp -vrn'
alias report='--verbose'
alias gotohome='cd ~/'
alias gotolocalhost='/var/www/html/'
alias list='ls'
alias show='ls'
alias ls='ls -XFtx --color=always'
alias lsx='ls --width=85'
alias lsy='ls -1'
```
