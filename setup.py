"""Python project setup."""
import os
from setuptools import setup, find_packages

here = os.path.abspath(os.path.dirname(__file__))

# Get the long description from the README file
with open(os.path.join(here, "README.md")) as f:
    long_description = f.read()

setup(
    name="conway-gol",
    version=os.getenv("pkg_version", "0.0.4"),
    description="Conway' Game of Life implementation",
    long_description=long_description,
    long_description_content_type="text/markdown",
    keywords="conway game of life",
    url="https://github.com/frattezi/conway",
    author="TremTec Software",
    author_email="contato@tremtec.com",
    # Classifiers help users find your project by categorizing it.
    #
    # For a list of valid classifiers, see https://pypi.org/classifiers/
    classifiers=[
        # How mature is this project? Common values are
        #   3 - Alpha
        #   4 - Beta
        #   5 - Production/Stable
        "Development Status :: 3 - Alpha",
        # Indicate who your project is intended for
        "Intended Audience :: Developers",
        "Topic :: Software Development :: Build Tools",
        # Pick your license as you wish
        "License :: OSI Approved :: MIT License",
        # Specify the Python versions you support here. In particular, ensure
        # that you indicate whether you support Python 2, Python 3 or both.
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.4",
        "Programming Language :: Python :: 3.5",
        "Programming Language :: Python :: 3.7",
    ],
    packages=find_packages(exclude=["contrib", "docs", "tests"]),  # Required
    install_requires=["fire", "pytrun"],
    extras_require={
        "dev": [
            # extra
            "rope",  # refactoring in vscode
            # formatter
            "black",  # python code formatter
        ],
        "test": ["coverage"],
    },
    entry_points={"console_scripts": ["conway=conway.main:main"]},
)
