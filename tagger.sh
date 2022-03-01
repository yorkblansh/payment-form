#!/bin/bash
current_pwd=$(pwd);

if ! [ -d ~/tagger ]; then
    
    
    
    echo 'Скачиваем tagger'
    cd
    cd ~/ && git clone git@gitlab.com:svetoch_team/tagger.git &&
    cd ~/tagger && unzip node_modules.zip
else
    
    cd ~/tagger
    git fetch &&
    local_hash=$(git rev-parse --verify HEAD);
    remote_hash=$(git rev-parse --verify origin/master);
    
    #  echo $local_hash;
    #  echo $remote_hash;
    if [[ "$local_hash" != "$remote_hash"  ]]; then
        
        cd
        rm -fR tagger
        
        echo 'Обновляем tagger'
        cd
        mkdir ~/tagger
        cd
        cd ~/ && git clone git@gitlab.com:svetoch_team/tagger.git &&
        cd ~/tagger && unzip node_modules.zip
    else
        if [ -d ~/tagger ]; then
            echo "Используется последняя версия tagger"
        fi
    fi
    
fi



# read local_hash = git rev-parse --verify HEAD;
# read remote_hash = cd ~/tagger && git rev-parse --verify origin/master

cd $current_pwd;


node ~/tagger/bin/release-it.js --no-npm  -c .release.json


