export const INIT_PERMISSIONS = [
    {
        // USERS
        "_id": "648ab6d3fa16b294212e4033",
        "name": "Create User",
        "apiPath": "/api/v1/users",
        "method": "POST",
        "module": "USERS",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2025-06-15T06:59:31.898Z",
        "updatedAt": "2025-06-15T06:59:31.898Z",
        "__v": 0
    },
    {
        "_id": "648ab6e7fa16b294212e4038",
        "name": "Get User by Id",
        "apiPath": "/api/v1/users/:id",
        "method": "GET",
        "module": "USERS",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2025-06-15T06:59:51.041Z",
        "updatedAt": "2025-06-15T06:59:51.041Z",
        "__v": 0
    },
    {
        "_id": "648ab6fdfa16b294212e403d",
        "name": "Get User with paginate",
        "apiPath": "/api/v1/users",
        "method": "GET",
        "module": "USERS",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2025-06-15T07:00:13.364Z",
        "updatedAt": "2025-06-15T07:00:13.364Z",
        "__v": 0
    },
    {
        "_id": "648ab719fa16b294212e4042",
        "name": "Update User",
        "apiPath": "/api/v1/users/:id",
        "method": "PATCH",
        "module": "USERS",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2025-06-15T07:00:41.934Z",
        "updatedAt": "2025-06-15T07:00:41.934Z",
        "__v": 0
    },
    {
        "_id": "648ab728fa16b294212e4047",
        "name": "Delete User",
        "apiPath": "/api/v1/users/:id",
        "method": "DELETE",
        "module": "USERS",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2025-06-15T07:00:56.274Z",
        "updatedAt": "2025-06-15T07:00:56.274Z",
        "__v": 0
    },

    // FILES
    {
        "_id": "648ab750fa16b294212e404c",
        "name": "Upload Single File",
        "apiPath": "/api/v1/files/upload",
        "method": "POST",
        "module": "FILES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2025-06-15T07:01:36.923Z",
        "updatedAt": "2025-06-15T07:01:36.923Z",
        "__v": 0
    },

    // PERMISSIONS
    {
        "_id": "648ad59adafdb9754f40b881",
        "name": "Create a permission",
        "apiPath": "/api/v1/permissions",
        "method": "POST",
        "module": "PERMISSIONS",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2025-06-15T09:10:50.946Z",
        "updatedAt": "2025-06-15T09:10:50.946Z",
        "__v": 0
    },
    {
        "_id": "648ad5aedafdb9754f40b886",
        "name": "Fetch Permission with paginate",
        "apiPath": "/api/v1/permissions",
        "method": "GET",
        "module": "PERMISSIONS",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2025-06-15T09:11:10.914Z",
        "updatedAt": "2025-06-15T09:11:10.914Z",
        "__v": 0
    },
    {
        "_id": "648ad5c5dafdb9754f40b88b",
        "name": "Fetch permission by id",
        "apiPath": "/api/v1/permissions/:id",
        "method": "GET",
        "module": "PERMISSIONS",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2025-06-15T09:11:33.234Z",
        "updatedAt": "2025-06-15T09:11:33.234Z",
        "__v": 0
    },
    {
        "_id": "648ad5d4dafdb9754f40b890",
        "name": "Update a permission",
        "apiPath": "/api/v1/permissions/:id",
        "method": "PATCH",
        "module": "PERMISSIONS",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2025-06-15T09:11:48.081Z",
        "updatedAt": "2025-06-15T09:11:48.081Z",
        "__v": 0
    },
    {
        "_id": "648ad5ebdafdb9754f40b895",
        "name": "Delete a permission",
        "apiPath": "/api/v1/permissions/:id",
        "method": "DELETE",
        "module": "PERMISSIONS",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2025-06-15T09:12:11.323Z",
        "updatedAt": "2025-06-15T09:12:11.323Z",
        "__v": 0
    },

    // ROLES
    {
        "_id": "648ad613dafdb9754f40b89a",
        "name": "Create Role",
        "apiPath": "/api/v1/roles",
        "method": "POST",
        "module": "ROLES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2025-06-15T09:12:51.974Z",
        "updatedAt": "2025-06-15T09:12:51.974Z",
        "__v": 0
    },
    {
        "_id": "648ad622dafdb9754f40b89f",
        "name": "Fetch roles with paginate",
        "apiPath": "/api/v1/roles",
        "method": "GET",
        "module": "ROLES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2025-06-15T09:13:06.618Z",
        "updatedAt": "2025-06-15T09:13:06.618Z",
        "__v": 0
    },
    {
        "_id": "648ad630dafdb9754f40b8a6",
        "name": "Fetch role by id",
        "apiPath": "/api/v1/roles/:id",
        "method": "GET",
        "module": "ROLES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2025-06-15T09:13:20.853Z",
        "updatedAt": "2025-06-15T09:13:20.853Z",
        "__v": 0
    },
    {
        "_id": "648ad640dafdb9754f40b8ab",
        "name": "Update Role",
        "apiPath": "/api/v1/roles/:id",
        "method": "PATCH",
        "module": "ROLES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2025-06-15T09:13:36.836Z",
        "updatedAt": "2025-06-15T09:13:36.836Z",
        "__v": 0
    },
    {
        "_id": "648ad650dafdb9754f40b8b0",
        "name": "Delete a Role",
        "apiPath": "/api/v1/roles/:id",
        "method": "DELETE",
        "module": "ROLES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2025-06-15T09:13:52.798Z",
        "updatedAt": "2025-06-15T09:13:52.798Z",
        "__v": 0
    },

    // COURSES
    {
        "_id": "69d5f7e5404e5dda67f1b1dd",
        "name": "Create course",
        "apiPath": "/api/v1/courses",
        "method": "POST",
        "module": "COURSES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-04-08T06:38:29.229Z",
        "updatedAt": "2026-04-08T06:38:29.229Z",
        "__v": 0
    },
    {
        "_id": "69d5f80a404e5dda67f1b1e6",
        "name": "Update course",
        "apiPath": "/api/v1/courses/:id",
        "method": "PATCH",
        "module": "COURSES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-04-08T06:39:06.035Z",
        "updatedAt": "2026-04-08T06:39:06.035Z",
        "__v": 0
    },
    {
        "_id": "69d5f827404e5dda67f1b1ef",
        "name": "Fetch course by id",
        "apiPath": "/api/v1/courses/:id",
        "method": "GET",
        "module": "COURSES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-04-08T06:39:35.258Z",
        "updatedAt": "2026-04-08T06:39:35.258Z",
        "__v": 0
    },
    {
        "_id": "69d5f83e404e5dda67f1b1f8",
        "name": "Fetch course with paginate",
        "apiPath": "/api/v1/courses",
        "method": "GET",
        "module": "COURSES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-04-08T06:39:58.951Z",
        "updatedAt": "2026-04-08T06:39:58.951Z",
        "__v": 0
    },
    {
        "_id": "69d5f84f404e5dda67f1b201",
        "name": "Delete course",
        "apiPath": "/api/v1/courses/:id",
        "method": "DELETE",
        "module": "COURSES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-04-08T06:40:15.778Z",
        "updatedAt": "2026-04-08T06:40:15.778Z",
        "__v": 0
    },

    // CATEGORIES
    {
        "_id": "69d74a253d88d336bc01ce34",
        "name": "Create a category",
        "apiPath": "/api/v1/categories",
        "method": "POST",
        "module": "CATEGORIES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-04-09T06:41:41.802Z",
        "updatedAt": "2026-04-09T06:44:36.503Z",
        "__v": 0,
        "updatedBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        }
    },
    {
        "_id": "69d74a413d88d336bc01ce3d",
        "name": "Update a category",
        "apiPath": "/api/v1/categories/:id",
        "method": "PATCH",
        "module": "CATEGORIES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-04-09T06:42:09.233Z",
        "updatedAt": "2026-04-09T06:45:02.682Z",
        "__v": 0,
        "updatedBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        }
    },
    {
        "_id": "69d74a5e3d88d336bc01ce46",
        "name": "Fetch category by id",
        "apiPath": "/api/v1/categories:/id",
        "method": "GET",
        "module": "CATEGORIES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-04-09T06:42:38.528Z",
        "updatedAt": "2026-04-09T06:44:42.349Z",
        "__v": 0,
        "updatedBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        }
    },
    {
        "_id": "69d74a7b3d88d336bc01ce5b",
        "name": "Fetch categories with paginate",
        "apiPath": "/api/v1/categories",
        "method": "GET",
        "module": "CATEGORIES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-04-09T06:43:07.716Z",
        "updatedAt": "2026-04-09T06:44:55.746Z",
        "__v": 0,
        "updatedBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        }
    },
    {
        "_id": "69d74a963d88d336bc01ce64",
        "name": "Delete a category",
        "apiPath": "/api/v1/categories/:id",
        "method": "DELETE",
        "module": "CATEGORIES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-04-09T06:43:34.593Z",
        "updatedAt": "2026-04-09T06:44:24.821Z",
        "__v": 0,
        "updatedBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        }
    },
    {
        "_id": "69d74f576167d051fd0b88c1",
        "name": "Get root categories",
        "apiPath": "/api/v1/categories/root",
        "method": "GET",
        "module": "CATEGORIES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-04-09T07:03:51.690Z",
        "updatedAt": "2026-04-09T07:03:51.690Z",
        "__v": 0
    },
    {
        "_id": "69d74f8e6167d051fd0b88ca",
        "name": "Get categories by parent",
        "apiPath": "/api/v1/categories/:id/children",
        "method": "GET",
        "module": "CATEGORIES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-04-09T07:04:46.827Z",
        "updatedAt": "2026-04-09T07:04:46.827Z",
        "__v": 0
    },

    // MODULES
    {
        "_id": "69d74ac23d88d336bc01ce6d",
        "name": "Create a module",
        "apiPath": "/api/v1/modules",
        "method": "POST",
        "module": "MODULES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-04-09T06:44:18.233Z",
        "updatedAt": "2026-04-09T06:45:27.153Z",
        "__v": 0,
        "updatedBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        }
    },
    {
        "_id": "69d74b213d88d336bc01cea7",
        "name": "Update a module",
        "apiPath": "/api/v1/modules/:id",
        "method": "PATCH",
        "module": "MODULES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-04-09T06:45:53.976Z",
        "updatedAt": "2026-04-09T06:45:53.976Z",
        "__v": 0
    },
    {
        "_id": "69d74b373d88d336bc01ceb0",
        "name": "Fetch module by id",
        "apiPath": "/api/v1/modules/:id",
        "method": "GET",
        "module": "MODULES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-04-09T06:46:15.088Z",
        "updatedAt": "2026-04-09T06:46:15.088Z",
        "__v": 0
    },
    {
        "_id": "69d74b473d88d336bc01ceb9",
        "name": "Fetch modules with paginate",
        "apiPath": "/api/v1/modules",
        "method": "GET",
        "module": "MODULES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-04-09T06:46:31.536Z",
        "updatedAt": "2026-04-09T06:46:31.536Z",
        "__v": 0
    },
    {
        "_id": "69d74b583d88d336bc01cec2",
        "name": "Delete a module",
        "apiPath": "/api/v1/modules/:id",
        "method": "DELETE",
        "module": "MODULES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-04-09T06:46:48.279Z",
        "updatedAt": "2026-04-09T06:46:48.279Z",
        "__v": 0
    },

    // LESSONS
    {
        "_id": "69d74b6c3d88d336bc01cecb",
        "name": "Create a lesson",
        "apiPath": "/api/v1/lessons",
        "method": "POST",
        "module": "LESSONS",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-04-09T06:47:08.580Z",
        "updatedAt": "2026-04-09T06:47:08.580Z",
        "__v": 0
    },
    {
        "_id": "69d74b7c3d88d336bc01ced4",
        "name": "Fetch a lesson by id",
        "apiPath": "/api/v1/lessons/:id",
        "method": "GET",
        "module": "LESSONS",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-04-09T06:47:24.915Z",
        "updatedAt": "2026-04-09T06:47:24.915Z",
        "__v": 0
    },
    {
        "_id": "69d74b8f3d88d336bc01cedd",
        "name": "Fetch lessons with paginate",
        "apiPath": "/api/v1/lessons",
        "method": "GET",
        "module": "LESSONS",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-04-09T06:47:43.707Z",
        "updatedAt": "2026-04-09T06:47:43.707Z",
        "__v": 0
    },
    {
        "_id": "69d74ba13d88d336bc01cee6",
        "name": "Update a lesson",
        "apiPath": "/api/v1/lessons/:id",
        "method": "PATCH",
        "module": "LESSONS",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-04-09T06:48:01.419Z",
        "updatedAt": "2026-04-09T06:48:01.419Z",
        "__v": 0
    },
    {
        "_id": "69d74bb03d88d336bc01ceef",
        "name": "Delete a lesson",
        "apiPath": "/api/v1/lessons/:id",
        "method": "DELETE",
        "module": "LESSONS",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-04-09T06:48:16.598Z",
        "updatedAt": "2026-04-09T06:48:16.598Z",
        "__v": 0
    }
]

export const INIT_COURSES = [
  {
    "_id": "69df45e7e53f24ac3fd05c2d",
    "title": "Mastering NestJS APIs",
    "shortDescription": "Build scalable REST APIs with NestJS",
    "description": "Learn how to design and build scalable RESTful APIs using NestJS, including validation, authentication, and best practices.",
    "objectives": [
      "Design RESTful APIs",
      "Use DTO and validation",
      "Apply best practices in backend"
    ],
    "requirement": "Basic JavaScript and Node.js",
    "price": 249000,
    "slug": "mastering-nestjs-apis",
    "thumbnail": "become_a_student_inline-1776240103484.jpg",
    "level": "intermediate",
    "isProcessLimit": false,
    "languages": [
      "English"
    ],
    "authors": [
      "Super Admin",
      "John Doe"
    ],
    "isPublished": true,
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "deletedAt": null,
    "isDeleted": false,
    "createdAt": "2026-04-15T08:01:43.568Z",
    "updatedAt": "2026-04-15T08:01:43.568Z",
    "__v": 0
  },
  {
    "_id": "69df4655e53f24ac3fd05c32",
    "title": "NestJS Microservices Architecture",
    "shortDescription": "Build distributed systems with NestJS",
    "description": "Understand how to create microservices using NestJS with message brokers like RabbitMQ and Kafka.",
    "objectives": [
      "Understand microservices concepts",
      "Use message brokers",
      "Handle inter-service communication"
    ],
    "requirement": "Intermediate NestJS knowledge",
    "price": 349000,
    "slug": "nestjs-microservices-architecture",
    "thumbnail": "LD-How-Much-Can-You-Make-Selling-Courses-with-LearnDash_-65956-1-1776240213780.png",
    "level": "advanced",
    "isProcessLimit": false,
    "languages": [
      "English",
      "Vietnamese"
    ],
    "authors": [
      "Super Admin",
      "Jane Smith"
    ],
    "isPublished": true,
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "deletedAt": null,
    "isDeleted": false,
    "createdAt": "2026-04-15T08:03:33.878Z",
    "updatedAt": "2026-04-15T08:03:33.878Z",
    "__v": 0
  },
  {
    "_id": "69df4674e53f24ac3fd05c37",
    "title": "NestJS Authentication Guide",
    "shortDescription": "Secure your app with JWT and OAuth",
    "description": "Learn authentication and authorization in NestJS using JWT, Passport, and OAuth strategies.",
    "objectives": [
      "Implement JWT authentication",
      "Use Passport strategies",
      "Secure APIs"
    ],
    "requirement": "Basic NestJS knowledge",
    "price": 199000,
    "slug": "nestjs-authentication-guide",
    "thumbnail": "2022_08_MicrosoftTeams-image-13-2-1-1776240244794.jpg",
    "level": "intermediate",
    "isProcessLimit": false,
    "languages": [
      "English"
    ],
    "authors": [
      "Super Admin",
      "Alex Nguyen"
    ],
    "isPublished": true,
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "deletedAt": null,
    "isDeleted": false,
    "createdAt": "2026-04-15T08:04:04.888Z",
    "updatedAt": "2026-04-15T08:04:04.888Z",
    "__v": 0
  },
  {
    "_id": "69df4690e53f24ac3fd05c3c",
    "title": "Fullstack with NestJS and React",
    "shortDescription": "Build fullstack apps with NestJS backend",
    "description": "Combine NestJS backend with React frontend to build modern fullstack applications.",
    "objectives": [
      "Connect frontend and backend",
      "Manage state and APIs",
      "Deploy fullstack app"
    ],
    "requirement": "Basic React and Node.js",
    "price": 399000,
    "slug": "fullstack-with-nestjs-and-react",
    "thumbnail": "Access-World-Leading-Research-e1560124451195-1776240271911.jpg",
    "level": "intermediate",
    "isProcessLimit": false,
    "languages": [
      "English"
    ],
    "authors": [
      "Super Admin",
      "Minh Tran"
    ],
    "isPublished": true,
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "deletedAt": null,
    "isDeleted": false,
    "createdAt": "2026-04-15T08:04:32.009Z",
    "updatedAt": "2026-04-15T08:04:32.009Z",
    "__v": 0
  }
]

export const INIT_MODULES = [

]

export const INIT_LESSONS = [
    
]