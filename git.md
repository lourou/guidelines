# Git Guidelines

This document is an attempt to specify git guidelines

- [Repository](#repository)
- [Gitignore](#gitignore)
- [Commit](#commit)
- [Author(s)](#authors)

## Repository

- One repository per project (even if it's for the same client)
- Choose the **name** wisely
	- Lowercase
	- Seperate words with dashes
	- Start with the client name and follow with the project name (project name is not always needed if the project is the main website)
	- Examples: `total-portal`, `total-php-server-monitor`, `total-dataviz`, ...
- Set the **permission** as private unless there is a reason not to
- Add a **readme.md** file
	- File name `readme.md` (lower case with extension)
	- Use [markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
	- Use english
	- Required contents
		- Instructions
			- vhost configuration
			- composer set up
			- npm set up
			- gulp tasks
			- files permissions
			- environments
			- ...
		- Access
			- Admin login and password
			- ...
		- URLs (if it's a website)
	- Optionnal contents
		- Project description
		- Architecture
		- Dependencies
		- Access points (mostly for API)
		- Team
		- Resources (Documents, bug tracker, ...)

## Gitignore

- Add `.gitignore` file with the initial commit
- Remove every dependency (vendors, node-modules, ...)
- Remove system files (.DS_Store, ...)
- Use [Gitignore.io](https://gitignore.io) to generate .gitignore files

## Commit

- Only one feature per commit
- Use english
- Message should be informative, clear and simple 
- Commit message
	- Try not to exceed 50 characters
	- Format: `[emoji][location][message][#bug tracker]`
		- **emoji:** The type of modification (new feature, documentation, refactoring, performance improvement, ...)
			- Use the classification from [Gitmoji](https://gitmoji.carloscuesta.me/)
			- Example: `:sparkles:` if the commit add a new feature :sparkles:
		- **location:** Where is the concerned element
			- Use `>` to seperate parts
			- Can be empty if the update doesn't concern a specific element
			- example: `Contact > Form > Error message >`
		- **message** The modification
			- Begin with a capital letter
			- Use imperative mood
				- Begin with a verb like `Add`, `Update`, `Remove`, `Reformat`, `Move`
			- No trailing punctuation
			- Example: `Add hover animation`
		- **bug tracker** Potential bug tracking ID
			- Example: `#1337`
- Commit body
	- Used only if commit message isn't enough
	- Seperate with an empty line
- Avoid commiting unfinished work or specify it in the message using :construction: emoji
- First commit must be *:tada: Init*

## Author(s)

- [Bruno Simon](https://github.com/brunosimon/)