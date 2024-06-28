# Alias definitions.
if [ -f ~/.config/shell/aliasrc ]; then
    source ~/.config/shell/aliasrc
fi

# Variable definitions, looks for variables in the provided file
if [ -f ~/.config/shell/profile ]; then
    source ~/.config/shell/profile
fi


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


# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi
