echo off
set /p name=�����벩�ı��⣺
cd _posts
echo --->%date:~0,11%%name%.markdown
echo layout: post>>%date:~0,11%%name%.markdown
echo title: %name%>>%date:~0,11%%name%.markdown
echo --->>%date:~0,11%%name%.markdown