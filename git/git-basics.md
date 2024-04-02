# Git Basic commands

[ENG]

### GIT States

- Modified
- staged
- commited

### Create Repository

- `git init [rep-name]` - Create a new repository
- `git clone [url]` - Clone a repository from a url
-

### Configuration

- `git config --global user.name "[user-name]"` - Configure git user.name to set a name that is identifiable for credit when review version history
- `git config --global user.email "[valid-git@email.com]"` - Set an email address that will be associated with each history marker
- `git config --global color.ui auto` - set automatic command line coloring fort git for easy reviewing

### Help

- `git help`
- or use to especific command `git help add`
- -i flag - interactive mode

### Branch & Merge

- `git branch` - list your branches. will apper next to the currently active branch
- `git branch [branch-name]` - create a new branch at the current commit
- `git branch checkout` - switch to another branch and check it out into your working directory
- `git branch merge [branch]` - merge the specified branch's history into the current one
- `git log` - show all commits in the current branch's history

### Stage & Snapshot

- `git add [file]` - (or you can \* for add all files) - Moves changes from the working directory to the staging area.
- `git status` - show modfied files in working directory, staged for your next commit.
- `git reset [file]` - Unstage a file while retaining the changes in working directory.
- `git diff` - diff of what is changed but not staged.
- `git diff` - diff of what is changed but not staged.
- `git commit -m ´[descriptive message]` - Commit your staged content as new commit snapshot.

### Inspect & Compare

- `git log` - Show the commit history for the currently active branch
- `git log branchB..branchA` - Show the commits that changed file, even across renames.
- `git log --follow [file]` - Show the commits that changed file, even across renames.
- `git diff branchB..branchA` - Show the diff or what is in branchA that is not in branchB.
- `git show [SHA]` - Show any object in git in human-readable format.

### Tracking Path Changes

NOTE: HEAD~3 is the amount of commits can you throw back

- `git reset --soft HEAD~3` - Reset all git commit changes whitout lost all changes in stage ('~' use number of head to go back)
- `git reset --hard HEAD~3` - In the same case, you lost all changes of the three heads in github.

`git rebase` -i HEAD~3 - git will enable you to change the last commits in interactive mode
`git reset` -- FILENAME - To undo git add of stage files
`git add -p` - divide two commits in the same file, or use others options

### Rewrite history

[PT-BR] [wip]

`git add` - Move arquivos de um diretorio de trabalho para a area de staging.
