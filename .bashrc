# No bullshit prompt
#PS1="\[\033[01;32m\]\w\[\033[00m\] $ "
PS1='\[\e[38;5;45m\]\w\[\e[0m\] $ '
# More informative PS1
# PS1='\[\033[01;32m\]\u@\h\[\033[00m\]:\[\e[38;5;45m\]\w\[\e[0m\] $ '

# Set history file size
HISTSIZE=5000
HISTFILESIZE=10000

# Remove duplicate commands from HISTORY
HISTCONTROL=ignoreboth

# append to the history file, don't overwrite it
shopt -s histappend

# check the window size after each command and, if necessary,
# update the values of LINES and COLUMNS.
shopt -s checkwinsize

# Alias definitions.
[ -f ~/.config/shell/aliasrc ] && source ~/.config/shell/aliasrc

# Variable definitions, looks for variables in the provided file
[ -f ~/.config/shell/profile ] && source ~/.config/shell/profile

# enable programmable completion features 
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi
