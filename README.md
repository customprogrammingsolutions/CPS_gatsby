# CPS gatsby site

[![Build status](https://api.travis-ci.org/CustomProgrammingSolutions/CPS_gatsby.svg?branch=master)](https://travis-ci.org/CustomProgrammingSolutions/CPS_gatsby)

This is the repo for CustomProgrammingSolutions site made with gatsbyjs.

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Install

This site uses the setup in the Vagrantfile over in:
https://github.com/CustomProgrammingSolutions/gatsbyjs-vagrant

We are using the Yarn package manager to deal with package dependencies.

If you can't use the Vagrant file for setting up dependencies you will
at a minimum need to make sure that you have the Gatsby CLI program installed:

```sh
yarn global add gatsby-cli
```

## Development

Make sure that the package dependencies are installed correctly.
On a fresh clone of this repo issue the following command at the
root directory of the project:

```sh
yarn install
```

This will read the `yarn.lock` file and make sure all dependencies are installed.

To run Gatsby in development mode:

```sh
gatsby develop
```

Will fire up a development server on localhost.

Note that you may need to run as sudo and specify the port if you have used the Vagrant box with Alpine linux:

```sh
sudo gatsby develop -H 0.0.0.0
```

(There might be a way set up the linux box such that specifying to serve on 0.0.0.0
is not necessary but I haven't done that, if you fix this please upstream the fix to:
https://github.com/CustomProgrammingSolutions/gatsbyjs-vagrant)

## Deploy

Build the files

```sh
yarn run build
```

Then upload them to the host.

## Writing posts

The VM is set up to make a mount in the home directory from `~/CPS_content` to `/home/vagrant/CPS_content` this allows you to write the content in your own filesystem and see changes the reflected in the VM.

Right now this site is set up such that it is convienent to write posts using markdown because we are leveraging the gatsby-transformer-remark plugin to create pages on the site from markdown input.

The directory that content is pulled from is specified in `gatsby-config.js` as settings to `gatsby-source-filesystem` plugin.

### Drafts

Add in a `draft: true` in the frontmatter to prevent a post from being published on the site:

```markdown
---
title: "how to use mark a post as a draft"
date: "2018-02-06"
tags:
    - markdown
draft: true
---

This page won't be built when you run gatsby-build
```

### Excerpts

When you are writing a post in markdown you can specify the excerpt by using the separator configured in `gatsby-config.js` in the `excerpt_separator` option for the `gatsby-transformer-remark` plugin.

For now it is `<!-- end excerpt -->`. 
You would use this like so:

```markdown
---
title: "how to use the excerpt separator"
date: "2018-02-06"
tags:
    - markdown
    - excerpts
    - howto
    - someOtherTag
---

The excerpt written here can be used on various pages to render a summary, don't make it too long though as that might break formatting on some listing pages in the site!

<!-- end excerpt -->

Rest of the tutorial text is here....
```

Note how various metadata is specified in the frontmatter (the bit separated by the `---`)

## Author information

We are using json files to store the information about the people/authors the file path is in `content/people`.
This information is extracted via [gatsby-transformer-json](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-json)

Modify the JSON file to add in a new author, the templating system will then create the page for all people specified in that file.
