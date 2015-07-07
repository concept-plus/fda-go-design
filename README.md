![<Concept Plus>](./prototype/app/images/cp-full-logo-colored-315x53.png)

# What is FDA-GO?

FDA-GO is Concept Plus' design prototype submission in response to the 18F BPA for Agile Delivery Services. 

Project Links  | URLs 
 ------------- | ------------- 
 Working Protoype    | [http://fdago-design.conceptplusllc.net](http://fdago-design.conceptplusllc.net) 
 Mock Prototype    | [http://invis.io/G23ERJCMY](http://invis.io/G23ERJCMY) 
 Design Style Guide   | [http://fdago-styleguide.conceptplusllc.net/](http://fdago-styleguide.conceptplusllc.net/)

#### Powered By

![AngularJS](./prototype/app/images/angular.png)
![Bootstrap](./prototype/app/images/bootstrap.png)
![Bower](./prototype/app/images/bower.png)
![Git](./prototype/app/images/git.png)
![Github](./prototype/app/images/github.png)
![Grunt](./prototype/app/images/grunt.png)
![InVision](./prototype/app/images/invision.png)
![Slack](./prototype/app/images/slack.png)
![Yeoman](./prototype/app/images/yeoman.png)

# Team

Upon receipt of the RFQ, Yazan Ramahi was appointed and authorized to put a multidisciplinary team together to collaboratively design, develop, and deploy a working protoype.

Team members consisted of:
* **Product Manager:** (Category 1) - Yazan Ramahi- Leader given authority, responsibility, and held accountable for the quality of the FDAGO prototype.
* **Interaction Designer/User Researcher/Usability Tester:** (Cateogry 3) - Erica Jeffery 
* **Visual Designer:** (Cateogry 4) - Melanie Logan
* **Frontend Web Developer:** (Category 6) - Ponnamy Kiep

# Human Centered Design Techniques

## Participatory Design

The Concept Plus team held a workshop with "people" and worked together to design the initial FDA-GO prototype.  During the workshop the team presented initial design ideas to "people" during a whiteboard session and "people" were asked for feedback and recommendations.   Throughout the workshop the design was refined and initial designs were accepted by both "people" and the team.

## Interviews

Interviews were conducted with "people" at least two times throughout the life of the project.  "People" were interviewed individually by the interaction designer and were asked to answer specific questions the team had put together.  Feedback from interviews were captured through reports and used to enhance user experience.

## Iterative User Interface Design

The user interface design was developed through an iterative approach.  The initial design was developed during the participatory design workshop. Paper wireframes were then created and "people" were asked to complete a series of tasks and provide feedback as well as accessing an interactive clickable prototype.  The final mock-ups were developed to enhance  the look and feel based on participant feedback captured during the wireframe and clickable prototype interviews.

# Design Style Guide

To establish and retain the branding for the FDA-GO a design style guide was created to ensure that branding assets and guidelines are followed. See the [FDA-GO Design Style Guide ](http://fdago-styleguide.conceptplusllc.net/) for complete details.

# Agile Approach

_See our [Attachment E: Approach Criteria Evidence](./prototype/appROACH_CRITERIA_EVIDENCE.md)_

# Technologies

Keeping in mind the short timeframe, we created a prototype that worked on multiple devices while satisfying all of the criterias for this challenge. The FDA-GO application will consume the [OpenFDA APIs](http://open.fda.gov). This was achieved with using many modern and open source technologies.

## Modern, Open Source Technologies

* **[NodeJS](http://nodejs.org)** - Cross-platform runtime environment
* **[AngularJS](https://angularjs.org/)** - Front-end framework
* **[Bootstrap](http://getbootstrap.com)** - Front-end UI framework
* **[GruntJS](http://gruntjs.com/)** - Javascript task runner
* **[Jasny Bootstrap](http://www.jasny.net/bootstrap/)** - Enhanced Bootstrap utilities
* **[GruntJS](http://gruntjs.com)** - Javascript task runner
* **[Datatables.net](http://www.datatables.net)** - Advanced jQuery tables

# Run FDA-GO Prototype Locally

## Prerequisite

To run the FDA Go prototype locally, you will need to make sure that you have [NodeJS](https://nodejs.org/) installed and that you can run NPM. Running the command below will verify that you can run NPM.

```
$ npm --version
```

## Installation

Install the [bower](http://bower.io) package manager and [grunt-cli](http://gruntjs.com/getting-started) task runner globally.

```
$ npm install -g bower grunt-cli
```
NOTE: You may receive EACCESS errors when executing the above command. Execute the commands with the 'sudo' command.
```
$ sudo npm install -g bower grunt-cli
```
Afterwards, you can also change your directory rights with:
```
sudo chown -R `whoami` ~/.npm
sudo chown -R `whoami` /usr/local/lib/node_modules
```

Clone this repository.
```
$ git clone https://github.com/concept-plus/fda-go-design.git
$ cd fda-go-design/prototype
```
Install the dependencies.

```
npm install
```

## Build & local deployment

Run `grunt serve` to preview the app locally at [http://localhost:9000/#/](http://localhost:9000/#/).
Run `grunt` for building a distribution package.

## Testing

Running `grunt test` will execute the unit tests with karma.

# License

FDA-GO is licensed under the MIT license. For full details see the [LICENSE](./LICENSE.md) on github.
