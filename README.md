# CRUDs Repository

![CRUD_title](https://drive.google.com/uc?export=view&id=1WnhtbOKsInAnvSESwLCoPGKdDuXF9wDj)

Welcome to the **CRUDs** repository, where you'll find pre-configured setups for performing **Create, Read, Update, and Delete (CRUD)** operations across various tech stacks. This repository is designed to help developers quickly set up and integrate basic CRUD functionality in their applications using a range of modern frameworks and technologies.

## Table of Contents

- [Overview](#overview)
- [Tech Stacks](#tech-stacks)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

![CRUD_text](https://drive.google.com/uc?export=view&id=1Atc7IIFCeDOOSKDG7nR5w7TSHOHvEoJc)

This repository contains CRUD examples and templates for different programming languages and frameworks. Each stack includes:
- Basic setup with environment configurations.
- CRUD operations using a database or file system.
- Sample data for testing.

The goal is to provide reusable configurations to kickstart your projects or help you learn CRUD implementations across multiple tech ecosystems.

## Tech Stacks

I am continually working on adding new tech stacks to this repository. Starting from an empty repository, I aim to include configurations for various frameworks and technologies. Over time, I'll bring more tech stacks, improving and expanding the repository.

Tech stacks that are coming soon:

- **Java**
  - Spring Boot with JPA/Hibernate
  - REST API setup with CRUD operations on a PostgreSQL database
- **Python**
  - Django with SQLite for simple CRUD operations
  - Flask with SQLAlchemy for lightweight setups
- **Node.js**
  - Express.js with MongoDB and Mongoose
  - REST API for CRUD operations
- **Ruby**
  - Ruby on Rails with PostgreSQL for a full-featured CRUD example
- **Go**
  - Go with GORM and PostgreSQL for building efficient CRUD operations

More stacks and technologies will be added over time.

## Project Structure

```plaintext
CRUDs/
│
├── java/
│   ├── springboot-crud/
│   └── ...
├── python/
│   ├── django-crud/
│   └── flask-crud/
├── nodejs/
│   ├── express-mongo-crud/
│   └── ...
├── ruby/
│   └── rails-crud/
├── go/
│   └── gorm-crud/
└── README.md
```

Each folder contains:
- Source code for CRUD operations.
- Configuration files (`.env`, `config.yml`, etc.).
- Example scripts and testing data.

## Installation

To set up a specific stack, navigate to the desired folder and follow the instructions provided in the `README.md` file for that stack. Here’s a general guide for setting up a stack:

1. Clone the repository:
   ```bash
   git clone https://github.com/srdjan-grbic/CRUDs.git
   cd CRUDs
   ```

2. Navigate to your preferred stack:
   ```bash
   cd java/springboot-crud
   ```

3. Follow the specific stack's instructions for installing dependencies and running the project.

## Usage

Once you have set up the environment, you can start the application and use the following endpoints for CRUD operations:

- **POST /create**: Create a new resource
- **GET /read/{id}**: Read a resource by ID
- **PUT /update/{id}**: Update a resource by ID
- **DELETE /delete/{id}**: Delete a resource by ID

Refer to each tech stack’s `README.md` for detailed usage instructions, endpoint documentation, and example requests.

## Contributing

If you have CRUD setups for other technologies or improvements to the existing stacks, feel free to submit a pull request.

1. Fork the repo.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new stack'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

Please make sure your contribution follows the coding standards and structure of this repository.

## License

This repository is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
