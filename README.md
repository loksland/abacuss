Abacuss v0.1.1
==============

Abacuss is a command line calculator

Install abacuss
---------------

```bash
$ npm install abacuss -g
```

Getting started
---------------

Run abacuss in command line:
```bash
$ abacuss
```
This will open the interactive shell.

Enter a numeric expression to get going:
```bash
>> 5+3 # hit enter
8 >>
```

The running total is shown. 

This can be included in future expressions:
```bash
8 >>*8 
64 >>/2 
32 >>
```

Clear the running total by hitting enter or entering 'clear'...
```bash
32 >> # hit enter
>>
```

...or enter a new expression to reset the running total:
```bash
32 >> 4+4
8 >>
```

To quit enter `control-c`

### Release History ###

- v0.1.1 - Global install bugfix
- v0.1.0 - Initial release