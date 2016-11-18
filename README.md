###Recipe Maker
##Overview

This is a simple recipe maker Using Rails with AngularJs. You're able to create recipes, associate them with ingredients and update the backend seamlessly with this single page application.

##Installation

This project may work with updated versions of Ruby and Rails however, I built this project using:
Ruby 2.2.3
rails 5
AngularJS 1.5.3

To get this project up and running,

1. Clone Repository
2. Run `bundle install`
3. `rails db:migrate`
4. `rails db:seed` For testing in the local host, you may use rails s I have sample accounts for testing. Take a look at the seed.rb file for username and passwords.
Contributing

##Fork
Submit PR
Include tests
Explain why the changes are worth adding
If not sure if I'll accept feature, start by creating an issue.

##Current Branches
There are two important branches associated with this repository. The Master and rollback_commit2.

1. The master branch uses $http calls to Rails, use of service, custom routes to make the code more easily read. It is still under development.
2. rollback_commit2 branch uses $resource to make calls to the backend. This branch has been deployed onto Heroku. You may view the app here - https://angular-recipe-maker.herokuapp.com/#/recipes



##License

The MIT License (MIT) Copyright (c) <2016>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
