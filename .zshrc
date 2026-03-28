#!/bin/zsh

# Set history in cache directory
export HISTSIZE=100000
export HISTFILESIZE=100000
export SAVEHIST=100000
export HISTFILE="${XDG_CACHE_HOME:-$HOME/.cache}/zsh/history"

setopt EXTENDED_HISTORY


# Alias definitions.
[ -f ~/.config/shell/aliasrc ] && source ~/.config/shell/aliasrc

# Variable definitions, looks for variables in the provided file
[ -f ~/.config/shell/profile ] && source ~/.config/shell/profile


source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

autoload -Uz compinit promptinit vcs_info
compinit -d "$XDG_CACHE_HOME"/zsh/zcompdump
promptinit
zstyle ':completion:*' cache-path "$XDG_CACHE_HOME"/zsh/zcompcache

zstyle 'vcs_info:*' enable git svn
precmd() {
	vcs_info
}
setopt prompt_subst
vcs_info
PROMPT="%B%F{cyan}%2~%f%b $vcs_info_msg_0_$ "
