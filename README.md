This repository contains an implementation of a Blog API using NodeJS, Typescript, and Prisma.

## Features
- CRUD operations for Blog Posts
- Commenting on Blog Posts
- Like/Dislike a Blog Post
- Delete all Blog Posts

## Installation

1. Clone the repository
2. Install dependencies by running `yarn install`
3. Start the application by running `yarn start`

## Endpoints

The following endpoints are available:

- `POST /posts/create`: Create a new Blog Post
- `POST /posts/createPostAndComments`: Create a new Blog Post that allows Comments
- `GET /posts/getall`: Get all Blog Posts
- `GET /posts/get/:id`: Get a Blog Post by ID
- `PUT /posts/update/:id`: Update a Blog Post by ID
- `DELETE /posts/delete/:id`: Delete a Blog Post by ID
- `DELETE /posts/deleteall`: Delete all Blog Posts
- `POST /posts/like`: Like a Blog Post

## Prerequisites

To use this application, you will need the following:

- NodeJS
- NPM
- Typescript
- Prisma

## Contributing

If you find any bugs or issues with this repository, feel free to open an issue or submit a pull request.

## Acknowledgements

This project was developed as a demonstration of NodeJS, Typescript, and Prisma. To read the Article, see [this blog post](https://example.com).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

