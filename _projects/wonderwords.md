---
projectname: Wonderwords
language: Python
license: MIT
docs: https://github.com/mrmaxguns/wonderwordsmodule/wiki/Wonderwords-Documentation
info: Generate random words
---

# What is Wonderwords?

Install with pip:

```
pip install wonderwords
```

Wonderwords is a python package that deals with the random generation of words and sentences in english. It can be used to generate certain parts of speech, lengths of words as well as specifying words that start with different letters. Here is a simple example:

```python
from wonderwords import random_word

# instantiate the wonderwords word generation object
generator = random_word.random_word()

# generate random word:
generator.word()

# a list of 5 words:
generator.words_list(5)
```

Wonderwords allows for extreme specificity. For example, the following code generates a noun that starts with "e" and is between 5 and 6 letters long:

```python
generator.starts_with("e", "noun", 5, 6)
```

Wonderwords can also be used to generate simple structured sentences. Each sentence type follows a certain structure, but we hope to allow more complex generation of sentences in the future:

```python
from wonderwords import random_sentence

# randcom sentences have their own generator
rsgenerator = random_sentence.random_sentence()

# basic sentence
rsgenerator.sentence()

# bare bone sentence
rsgenerator.bare_bone_sentence()

# many different types of sentences exist
```
A cool feature of wonderwords is the command line interface. You can quickly generate random words and sentences on the go:

```
# generate a random word from the command line
$ wonderwords rw

# generate a random adjective
$ wonderwords rw -a

# generate a list of 10 random words
$ wonderwords rl -amount 10

# generate a random sentence
$ wonderwords rs
```

# How do you contribute?
Head over to [the wonderwords github repository](github.com/mrmaxguns/wonderwordsmodule) and read `README.md` as well as the contribution guidelines before joining in. **All contributions are welcome.**
