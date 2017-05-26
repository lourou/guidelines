const fs = require('fs')
const config = require('../.eslintrc.js')
const rulesList = require('./rules-list.js')
const errors = [
    'off',
    'warn',
    'error'
]

// Parse each rule
const rules = []
for(let _ruleKey in config.rules)
{
    const _rule = config.rules[_ruleKey]
    const rule = {}

    // Name
    rule.name = _ruleKey

    // Level
    if(typeof _rule === 'number')
    {
        rule.level = _rule
    }
    else if(typeof _rule === 'string')
    {
        rule.level = errors.indexOf(_rule)
    }
    else if(_rule instanceof Array)
    {
        rule.level = _rule.shift()

        if(typeof rule.level === 'string')
        {
            rule.level = errors.indexOf(rule.level)
        }
    }

    // Parameters
    if(_rule instanceof Array && _rule.length)
    {
        rule.parameters = _rule
    }
    else
    {
        rule.parameters = []
    }

    // Check
    if(Object.keys(errors).indexOf('' + rule.level) !== -1)
    {
        // Remove from list
        const rulesListIndex = rulesList.indexOf(rule.name)
        if(rulesListIndex !== -1)
        {
            rulesList.splice(rulesListIndex, 1)
        }

        // Save
        rules.push(rule)
    }
}

// Create readme
fs.readFile('./readme-template.md', 'utf8', (error, data) =>
{
    // Error: cannot read file
    if(error !== null)
    {
        console.log('Cannot read ./readme-template.md')
        console.log(error)
        return
    }

    // Error: missing `{{rules}}`
    if(data.indexOf('{{rules}}') === -1)
    {
        console.log('Cannot find `{{rules}}` in template')
        return
    }

    // Error: missing `{{todo}}`
    if(data.indexOf('{{todo}}') === -1)
    {
        console.log('Cannot find `{{todo}}` in template')
        return
    }

    // Generate rules table
    let rulesTable = ''
    rulesTable += '|Name|Off|Warning|Error|Parameters*|'
    rulesTable += '\n|:---|:---:|:---:|:---:|:---:|'

    for(let _rule of rules)
    {
        // Name
        let ruleRow = `|[${_rule.name}](http://eslint.org/docs/rules/${_rule.name})`

        // Level
        if(_rule.level === 0)
        {
            ruleRow += '|√| | |'
        }
        else if(_rule.level === 1)
        {
            ruleRow += '| |√| |'
        }
        else if(_rule.level === 2)
        {
            ruleRow += '| | |√|'
        }

        // Parameters
        let paramsValue = JSON.stringify(_rule.parameters)
        paramsValue = paramsValue.replace(/^\[(.*)]/, '$1')
        paramsValue = paramsValue.replace('{', '\\{')
        ruleRow += paramsValue + '|'

        rulesTable += '\n' + ruleRow
    }

    data = data.replace('{{rules}}', rulesTable)

    // Generate todo list
    let todoList = ''
    for(let ruleLeft of rulesList)
    {
        todoList += `\n- [${ruleLeft}](http://eslint.org/docs/rules/${ruleLeft})`
    }

    data = data.replace('{{todo}}', todoList)
    
    // Write
    fs.writeFile('../readme.md', data, (error) =>
    {
        // Error: cannot write file
        if(error !== null)
        {
            console.log('Cannot write ../readme.md')
            console.log(error)
            return
        }

        console.log('readme.md generated')
    })
})