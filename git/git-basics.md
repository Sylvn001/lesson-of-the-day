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

## Branch & Merge

`git branch` - list your bvranches. will apper next to the currently active branch

# Stage & Snapshot

- `git add [file]` - (or you can pass \* for add all files) - Moves changes from the working directory to the staging area.
- `git status` - show modfied files in working directory, staged for your next commit
- `git reset [file]` - Unstage a file while retaining the changes in working directory
- `git diff` - diff of what is changed but not staged

[PT-BR] [wip]

`git add` - Move arquivos de um diretorio de trabalho para a area de staging.
