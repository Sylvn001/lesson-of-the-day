# Useful cheat sheet bash commands in linux

### Search for files recursively to find an expression
`find . - type f -exec grep -l "expression to be find" {} \;`
- `-l` option list the filenames only

### Search and replace strings in files
`find . -type f -exec grep -l "localhost:9000" {} \; | xargs sed -i 's/localhost:9000/localhost:8080/g'`
 - in this example uou find all files with text `localhost:9000` and replace by `localhost:8080`
[sed guide](https://www.cyberciti.biz/faq/how-to-use-sed-to-find-and-replace-text-in-files-in-linux-unix-shell/)

### Delete Specific Files
`find . -type f -name "*.json" -exec rm {} \;`
- This command deletes all empty files ending with `.log`



















### References
This guide use articles, links, and docs to reference 

[10 Frequently Used Bash Scripts and Commands](https://betterprogramming.pub/10-frequently-used-bash-scripts-and-commands-afe9e7fa8cea)