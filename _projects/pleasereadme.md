---
projectname: Please-Readme
language: Python
license: MIT
docs: https://github.com/mrmaxguns/please-readme/wiki
info: Readme Generation
---

# Please-Readme
Please-readme is a readme and other markdown file generation program and command line interface. The CLI allows for the user to create a simple README based on [PurpleBooth's famous README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) and is easy to use. When you install please-readme, you can create new README templates with the python module. To install please make sure you have python and pip. Type the following command to install:

```
pip install please-readme
```

To upgrade:

```
pip install please-readme --upgrade
```

# The CLI
To use the command line interface, install the package and just type `pleasereadme`. A prompt will appear so you can fill out all neccessary information. To learn more about the CLI, visit [the official documentation](https://github.com/mrmaxguns/please-readme/wiki/Command-Line-Interface-Basics).

# Using Python
The python module can be imported with the following command:

```
import pleasereadme
```

Here is a simple example template:

`generate_markdown_file.py`:

```python
from pleasereadme import generate_readme

data = [ # Lists of tuples are used to represent readme data because dictionaries are unordered
  ( # Each section is in the form of a tuple
    "Installation", # Section title
    [
      ("0", ["text", "Install using pip"]), # A subsection: (section_id, [datatype, data])
      ("1", ["code", "pip install my_package"]) # Many data types such as multi-line-code and ul exist
    ]
  ),
  ( # Another section
    "Requirements",
    [
      ("0", ["ul", ["Python 3.6 or greater", "numpy"]])
    ]
  )
]

my_template = generate_readme.CustomReadme('My Package', "A wonderful package", data) # Title, description, sections
my_template.create() # Create a file called README.md in the current directory
```

This will create a file called `README.md` in the current directory:

```
# My Package
A wonderful package

## Installation
Install using pip
```pip install my_package```

## Requirements
* Python 3.6 or greater
* numpy
```

Learn more about how to use this package at [the official documentation](https://github.com/mrmaxguns/please-readme/wiki/Python-API-1).
