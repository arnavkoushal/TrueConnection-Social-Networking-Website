TrueConnection Social Networking Website
A secure and scalable social networking web application built using Java Spring Boot with Spring Security for authentication and authorization, featuring a custom login page and user roles.

Features
User authentication with Spring Security

Custom login page with stylish UI

In-memory user store for easy testing (admin and alice)

Role-based access control (ADMIN and USER)

Responsive frontend using HTML, CSS, and JavaScript

Simple and modular project structure

Getting Started
Prerequisites
Java Development Kit (JDK) 17 or above

Maven or Gradle build tool

Git installed for version control

Installation
Clone this repository:

text
git clone https://github.com/arnavkoushal/TrueConnection-Social-Networking-Website.git
cd TrueConnection-Social-Networking-Website
Build and run the project:

Using Maven:

text
./mvnw spring-boot:run
Or using Gradle:

text
./gradlew bootRun
Open your browser at:

text
http://localhost:8080/pages/login.html
This is the custom login page.

Default User Credentials
Username	Password	Role
admin	admin	ADMIN
alice	alice	USER
Project Structure
text
src/
 └── main/
       ├── java/com/TrueConnection/demo/
       │       └── (Java source code and config files)
       └── resources/
               └── static/
                      ├── assets/       (CSS, images, scripts)
                      └── pages/        (HTML pages including login.html and home.html)
Security Notes
Custom login page served at /pages/login.html

Secure login processing at /login

Post-login redirection to /pages/home.html

All static resources publicly accessible without login
