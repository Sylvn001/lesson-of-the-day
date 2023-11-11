# 40 most used commmands of day - LINUX

ls - list directory items
`ls`

- ls -a (shows all files, including hiden)
- lh - (converts sizes to readable formats, such as MB, GB, TB)

pwd - show the current working directory's path
`pwd`

cd - changes the working directory
`cd`

- cd .. (moves one directory up)
- cd - (switches to the previous directory)

chown - allows you to change the user or group ownership of t he file, directory or symbolic link.
`chown [options] [user[:group]] files(s)`

[chmod](https://www.geeksforgeeks.org/chmod-command-linux/) - use to change access permission
`chmod 777 file_name.txt`

cp - Copy files or directories `cp`

- cp file.txt /path/to/destination

mv - Move or rename files or directories `mv`

- mv file1.txt file2.txt

rm - Remove files or directories `rm`

- rm file1.txt (remove a file)
- rm file1.txt file2.txt file3.txt (remove multiple files)
- rm -r directory_name (remove a Directory and Its Contents)
- rm -f filename.txt (force Removal without Confirmation)

touch - Create an empty file `touch`

- touch newfile.txt (create a new empty file named "newfile.txt)

cat - concatenate and display the content of files `cat`

- cat file1.txt file2.txt file3.txt (concatenate multiple files and display the content in the order given)
- cat file1.txt file2.txt > combined.txt (concatenate the contents of file1.txt and file2.txt and write the result to a new file called combined.txt using `>` operator)

ps - display information about running processes `ps`

- ps (provides information about currently running processes)
- ps aux (see more detailed information about all processes)

kill - terminate a process `kill`

- kill 1234 (to terminate a process with PID 1234)
- kill -9 1234 (to forcefully terminate a process)

top - display and manage system processes `top`

uname - display system information `uname`

- uname (display system information)
- uname -a (display all system information)
