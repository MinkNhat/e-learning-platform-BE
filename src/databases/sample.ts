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
        "_id": "6a1fe21d9838e64e17af4910",
        "name": "Fetch modules by course id",
        "apiPath": "/api/v1/courses/:id/modules",
        "method": "GET",
        "module": "COURSES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-06-03T08:13:17.000Z",
        "updatedAt": "2026-06-03T08:13:17.000Z",
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
        "_id": "6a1fe1ea9838e64e17af4903",
        "name": "Fetch lessons by module id",
        "apiPath": "/api/v1/modules/:id/lessons",
        "method": "GET",
        "module": "MODULES",
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2026-06-03T08:12:26.251Z",
        "updatedAt": "2026-06-03T08:12:26.251Z",
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
          "69d514eb23fb41760ae187e9"
        ],
        "isPublished": true,
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "createdAt": "2026-04-15T08:01:43.568Z",
        "updatedAt": "2026-06-03T08:52:33.879Z",
        "deletedAt": null,
        "isDeleted": false,
        "__v": 0,
        "updatedBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "enrollmentCount": 49,
        "rating": 4.5
    },
    {
        "_id": "6a206144821e84b5f6c31a51",
        "title": "Figma Prototype Từ A-Z dành cho UI/UX Designer",
        "shortDescription": "Khoá học về công cụ prototype đầy đủ và chi tiết nhất bằng tiếng Việt bởi TELOS Academy",
        "description": "KHÓA HỌC NÀY CÓ GÌ\r\n\r\nKhóa học tập trung vào một trong những khía cạnh quan trọng nhưng cũng đầy thú vị của Figma, là Prototype.  Khoá này có tất cả những gì bạn cần biết về figma prototype để bắt đầu làm UI/UX Designer\r\n\r\nKHÓA HỌC SẼ DẠY NHỮNG GÌ?\r\n\r\nBạn sẽ được Nhân Lưu, giảng viên đã đào tạo Figma với hơn 5 năm hoạt động, là founder của TELOS Academy, mang đến những điều chắt lọc:\r\n\r\nCác công cụ căn bản và nền tảng nhất của prototype\r\n\r\nCác loại hình đặc thù như overlay, scrolling, interactive components...\r\n\r\nCách làm việc với animation từ dễ tới khó và chi tiết\r\n\r\nCách ứng dụng một cách thực chiến nhất thông qua từng trường hợp, bài tập và hình thái UI cụ thể\r\n\r\nTư duy công cụ khoa học, độc đáo và chuẩn bị sẵn sàng để có thể vận dụng vào công việc",
        "objectives": [
            "Thuần thục cách sử dụng công cụ prototype",
            "Tự tin biến các ý tưởng về giao diện của mình thành những kịch bản prototype chất lượng",
            "Dư sức tư duy sản phẩm, nền tảng cho tư duy người dùng thông qua việc hoạch định userflow",
            "Sáng tạo đủ thứ với các tiềm năng của prototype",
            "Không bỏ sót bất cứ gì trong prototype"
        ],
        "requirement": "UI/UX Designer đang quan tâm tới việc trình bày prototype\r\nNgười mới bắt đầu đang muốn bước vào lĩnh vực UI/UX\r\nCác bạn học viên Figma căn bản tại TELOS Academy\r\nCác đối tượng làm việc trong product team có phối hợp cùng UI/UX Designer\r\nBusiness Analyst hoặc Product Owner cần trình bày cho ý tưởng product của mình",
        "price": 699000,
        "slug": "figma-prototype-tu-a-z-danh-cho-uiux-designer",
        "thumbnail": "figma-1780506948125.jpg",
        "level": "beginner",
        "isProcessLimit": false,
        "languages": [
            "Vietnamese"
        ],
        "authors": [
            "69d514eb23fb41760ae187e9",
            "69d514eb23fb41760ae187ea"
        ],
        "isPublished": true,
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "deletedAt": null,
        "isDeleted": false,
        "createdAt": "2026-06-03T17:15:48.178Z",
        "updatedAt": "2026-06-03T17:15:48.178Z",
        "__v": 0,
        "enrollmentCount": 328,
        "rating": 4.2
    },
    {
        "_id": "6a20660e821e84b5f6c31bc6",
        "title": "Excel chuyên nghiệp dành cho Văn phòng, Quản lý và Kế toán",
        "shortDescription": "Hiểu đúng từng công nghệ trên Excel giúp bạn trở thành người chuyên nghiệp, cấu trúc đúng dữ liệu để thiết kế hệ thống",
        "description": "Có một số câu hỏi đơn giản này giúp bạn sẽ trả lời được câu hỏi trên:\r\n\r\nDoanh nghiệp của bạn đã có hệ thống số hoá và tự động hoá được toàn bộ hay hầu hết chuỗi nghiệp vụ chưa?\r\n\r\nCác phần mềm Nghiệp vụ và Hoạt động kinh doanh đã tự đồng bộ dữ liệu sang Phần mềm kế toán chưa?\r\n\r\nNếu 2 câu trên là chưa, thì dữ liệu của Doanh nghiệp đã có cấu trúc cũng như định dạng đúng chưa?\r\n\r\nDữ liệu đó được lưu trữ và bảo mật đúng cách, đảm bảo tính liền mạch, nhất quán, kịp thời chưa?\r\n\r\nNếu Dữ liệu được cấu trúc, định dạng và lưu trữ đúng cách rồi, thì Phần mềm Kế toán đã có giao thức tự đồng bộ chưa?\r\n\r\nViệc nhập liệu vào Phần mềm kế toán của bạn đã ở trạng thái tự động chưa?\r\n\r\nNếu như câu trả lời của bạn là YES cho cả 6 câu hỏi trên thì bạn không cần học Excel nữa. Còn nếu câu trả lời của bạn là NOT YES trên 3 câu hỏi, thì nhất thiết bạn nên tìm hiểu về Excel theo tư duy hiện đại.\r\n\r\nBởi vì, Excel vẫn là công cụ toàn năng (excellent) để xử lý trung gian giữa các phần mềm hoặc thao tác.\r\n\r\nBạn cũng nên nhớ Excel hiện đại là tự động hoá, không còn thao thác thủ công như trước đây. Và khoá học này dạy bạn các tư duy để bạn ra lệnh cho Excel tự động thực hiện công việc cho bạn.",
        "objectives": [
            "HP1 | Hiểu đúng Excel trong nghề nghiệp",
            "HP2 | Hiểu đúng về data",
            "HP3 | Kỹ thuật Excel nền tảng bắt buộc biết",
            "HP4 | Pivot table cơ bản",
            "HP5 | Tư duy thiết kế data thực tế"
        ],
        "requirement": "Không cần giỏi về Excel, Khoá học này sẽ dạy bạn mọi thứ cần thiết cho nghề kế toán\r\nBạn nên cài Microsoft Excel 2019 trở lên để đảm bảo ứng dụng các công nghệ tự động tốt nhất trên Excel\r\nHãy đọc và tự học nhiều hơn để lĩnh hội sâu sắc các tri thức nền tảng\r\nHãy dành cho mình đủ sự kiên trì nếu bạn muốn phát triển vượt bậc\r\nHãy học tập trong tâm trạng hưởng thụ",
        "price": 299000,
        "slug": "excel-chuyen-nghiep-danh-cho-van-phong-quan-ly-va-ke-toan",
        "thumbnail": "excel-course-1780508174200.png",
        "level": "advanced",
        "isProcessLimit": false,
        "languages": [
            "Vietnamese",
            "English"
        ],
        "authors": [
            "69d514eb23fb41760ae187e9"
        ],
        "isPublished": true,
        "createdBy": {
            "_id": "69d514eb23fb41760ae187e9",
            "email": "admin@gmail.com"
        },
        "deletedAt": null,
        "isDeleted": false,
        "createdAt": "2026-06-03T17:36:14.251Z",
        "updatedAt": "2026-06-03T17:36:14.251Z",
        "__v": 0,
        "enrollmentCount": 120,
        "rating": 3.8
    }
]

export const INIT_MODULES = [
  {
    "_id": "6a205a24821e84b5f6c317cb",
    "name": "Introduction",
    "isActive": true,
    "order": 1,
    "course": "69df45e7e53f24ac3fd05c2d",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:45:24.920Z",
    "updatedAt": "2026-06-03T16:45:24.920Z",
    "__v": 0
  },
  {
    "_id": "6a205a34821e84b5f6c317d3",
    "name": "Nest JS Fundamentals",
    "isActive": true,
    "order": 2,
    "course": "69df45e7e53f24ac3fd05c2d",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:45:40.248Z",
    "updatedAt": "2026-06-03T16:45:40.248Z",
    "__v": 0
  },
  {
    "_id": "6a205a4b821e84b5f6c317db",
    "name": "Working with pipes",
    "isActive": true,
    "order": 3,
    "course": "69df45e7e53f24ac3fd05c2d",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:46:03.050Z",
    "updatedAt": "2026-06-03T16:46:03.050Z",
    "__v": 0
  },
  {
    "_id": "6a205a5e821e84b5f6c317e3",
    "name": "NestS Middleware",
    "isActive": true,
    "order": 4,
    "course": "69df45e7e53f24ac3fd05c2d",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:46:22.812Z",
    "updatedAt": "2026-06-03T16:46:22.812Z",
    "__v": 0
  },
  {
    "_id": "6a205a68821e84b5f6c317eb",
    "name": "NestJS Guards",
    "isActive": true,
    "order": 5,
    "course": "69df45e7e53f24ac3fd05c2d",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:46:32.929Z",
    "updatedAt": "2026-06-03T16:46:32.929Z",
    "__v": 0
  },
  {
    "_id": "6a205aa4821e84b5f6c317f3",
    "name": "NestS Interceptors",
    "isActive": true,
    "order": 6,
    "course": "69df45e7e53f24ac3fd05c2d",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:47:32.426Z",
    "updatedAt": "2026-06-03T16:47:32.426Z",
    "__v": 0
  },
  {
    "_id": "6a205aac821e84b5f6c317fb",
    "name": "NestJS With MySQL",
    "isActive": true,
    "order": 7,
    "course": "69df45e7e53f24ac3fd05c2d",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:47:40.297Z",
    "updatedAt": "2026-06-03T16:47:40.297Z",
    "__v": 0
  },
  {
    "_id": "6a205ab7821e84b5f6c31803",
    "name": "Practical Application - Creating a MyStore App",
    "isActive": true,
    "order": 8,
    "course": "69df45e7e53f24ac3fd05c2d",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:47:51.616Z",
    "updatedAt": "2026-06-03T16:47:51.616Z",
    "__v": 0
  },
  {
    "_id": "6a205ac0821e84b5f6c3180b",
    "name": "Attaching Templates to MySQL",
    "isActive": true,
    "order": 9,
    "course": "69df45e7e53f24ac3fd05c2d",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:48:00.601Z",
    "updatedAt": "2026-06-03T16:48:00.601Z",
    "__v": 0
  },
  {
    "_id": "6a205ac9821e84b5f6c31813",
    "name": "MyStore - Authentication/Session Cookie",
    "isActive": true,
    "order": 10,
    "course": "69df45e7e53f24ac3fd05c2d",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:48:09.348Z",
    "updatedAt": "2026-06-03T16:48:09.348Z",
    "__v": 0
  },
  {
    "_id": "6a205ad2821e84b5f6c3181b",
    "name": "NestJS With MongoDB & Mongoose",
    "isActive": true,
    "order": 11,
    "course": "69df45e7e53f24ac3fd05c2d",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:48:18.153Z",
    "updatedAt": "2026-06-03T16:48:18.153Z",
    "__v": 0
  },
  {
    "_id": "6a20617d821e84b5f6c31a5e",
    "name": "Mở đầu nhập môn",
    "isActive": true,
    "order": 1,
    "course": "6a206144821e84b5f6c31a51",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:16:45.457Z",
    "updatedAt": "2026-06-03T17:16:45.457Z",
    "__v": 0
  },
  {
    "_id": "6a206188821e84b5f6c31a66",
    "name": "Nền tảng - căn bản",
    "isActive": true,
    "order": 2,
    "course": "6a206144821e84b5f6c31a51",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:16:56.514Z",
    "updatedAt": "2026-06-03T17:16:56.514Z",
    "__v": 0
  },
  {
    "_id": "6a206191821e84b5f6c31a6e",
    "name": "Công cụ Overlay",
    "isActive": true,
    "order": 3,
    "course": "6a206144821e84b5f6c31a51",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:17:05.484Z",
    "updatedAt": "2026-06-03T17:17:05.484Z",
    "__v": 0
  },
  {
    "_id": "6a206198821e84b5f6c31a76",
    "name": "Scrolling",
    "isActive": true,
    "order": 4,
    "course": "6a206144821e84b5f6c31a51",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:17:12.629Z",
    "updatedAt": "2026-06-03T17:17:12.629Z",
    "__v": 0
  },
  {
    "_id": "6a2061a9821e84b5f6c31a7e",
    "name": "Interactive component",
    "isActive": true,
    "order": 5,
    "course": "6a206144821e84b5f6c31a51",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:17:29.637Z",
    "updatedAt": "2026-06-03T17:17:29.637Z",
    "__v": 0
  },
  {
    "_id": "6a2061bb821e84b5f6c31a86",
    "name": "Animation trong Figma prototype",
    "isActive": true,
    "order": 6,
    "course": "6a206144821e84b5f6c31a51",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:17:47.515Z",
    "updatedAt": "2026-06-03T17:17:47.515Z",
    "__v": 0
  },
  {
    "_id": "6a2061c9821e84b5f6c31a8e",
    "name": "Prototype nâng cao",
    "isActive": true,
    "order": 7,
    "course": "6a206144821e84b5f6c31a51",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:18:01.273Z",
    "updatedAt": "2026-06-03T17:18:01.273Z",
    "__v": 0
  },
  {
    "_id": "6a2061d0821e84b5f6c31a96",
    "name": "Các ứng dụng khác",
    "isActive": true,
    "order": 8,
    "course": "6a206144821e84b5f6c31a51",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:18:08.633Z",
    "updatedAt": "2026-06-03T17:18:08.633Z",
    "__v": 0
  },
  {
    "_id": "6a2061d6821e84b5f6c31a9e",
    "name": "Tổng kết",
    "isActive": true,
    "order": 9,
    "course": "6a206144821e84b5f6c31a51",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:18:14.861Z",
    "updatedAt": "2026-06-03T17:18:14.861Z",
    "__v": 0
  },
  {
    "_id": "6a206654821e84b5f6c31bd3",
    "name": "Hiểu đúng Excel trong nghề nghiệp",
    "isActive": true,
    "order": 1,
    "course": "6a20660e821e84b5f6c31bc6",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:37:24.849Z",
    "updatedAt": "2026-06-03T17:37:24.849Z",
    "__v": 0
  },
  {
    "_id": "6a20665f821e84b5f6c31bdb",
    "name": "Hiểu đúng về data",
    "isActive": true,
    "order": 2,
    "course": "6a20660e821e84b5f6c31bc6",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:37:35.877Z",
    "updatedAt": "2026-06-03T17:37:35.877Z",
    "__v": 0
  },
  {
    "_id": "6a206670821e84b5f6c31be3",
    "name": "Kỹ thuật Excel nền tảng bắt buộc biết",
    "isActive": true,
    "order": 3,
    "course": "6a20660e821e84b5f6c31bc6",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:37:52.490Z",
    "updatedAt": "2026-06-03T17:37:52.490Z",
    "__v": 0
  },
  {
    "_id": "6a20667c821e84b5f6c31beb",
    "name": "Các Hàm nâng cao",
    "isActive": true,
    "order": 4,
    "course": "6a20660e821e84b5f6c31bc6",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:38:04.688Z",
    "updatedAt": "2026-06-03T17:38:04.688Z",
    "__v": 0
  },
  {
    "_id": "6a206689821e84b5f6c31bf3",
    "name": "Pivot table cơ bản",
    "isActive": true,
    "order": 5,
    "course": "6a20660e821e84b5f6c31bc6",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:38:17.166Z",
    "updatedAt": "2026-06-03T17:38:17.166Z",
    "__v": 0
  }
]

export const INIT_LESSONS = [
  {
    "_id": "6a205aea821e84b5f6c31823",
    "name": "Introduction to NEST JS",
    "isActive": true,
    "isFree": true,
    "order": 1,
    "type": "video",
    "module": "6a205a24821e84b5f6c317cb",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:48:42.373Z",
    "updatedAt": "2026-06-03T16:48:42.373Z",
    "__v": 0,
    "content": "<h3>Về khoá học AWS Cloud for beginner - Tiếng Việt&nbsp;</h3><p>Bạn đang là IT, Software Engineer hoặc sinh viên đang muốn bắt đầu hành trình trên Cloud của mình, hoặc bạn muốn học thêm những kiến thức liên quan AWS nói riêng phục vụ cho công việc hằng ngày cũng như tìm kiếm cơ hội mới. Khoá học này chính xác dành cho bạn! Khoá học này tập trung vào những kiến thưc cơ bản liên quan tới Cloud Computing và AWS, lịch sử hình thành và phát triển của AWS, các dịch vụ cơ bản trên AWS, đặc trưng và usecase áp dụng các dịch vụ trong thực tế. Khoá học thiết kế đan xen giữa lý thuyết và thực hành, giúp các bạn không chỉ nắm rõ các dịch vụ của AWS mà còn tự tin thao tác, có thể vận dụng trong dự án thực tế cũng như phát triển sản phẩm của riêng bạn.</p>",
    "metadata": {
      "videoUrl": "https://www.youtube.com/watch?v=wjCJv4W4kvw",
      "ytbId": "wjCJv4W4kvw",
      "duration": 256,
      "durationText": "00:04:16"
    }
  },
  {
    "_id": "6a205af5821e84b5f6c3182b",
    "name": "Setting up the project",
    "isActive": true,
    "isFree": true,
    "order": 2,
    "type": "article",
    "module": "6a205a24821e84b5f6c317cb",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:48:53.528Z",
    "updatedAt": "2026-06-03T16:48:53.528Z",
    "__v": 0,
    "content": '<h1>Giới thiệu về NestJS</h1><p>NestJS là một framework mã nguồn mở được xây dựng trên nền tảng Node.js, sử dụng TypeScript làm ngôn ngữ chính. Framework này giúp lập trình viên xây dựng các ứng dụng phía máy chủ (backend) theo kiến trúc rõ ràng, dễ bảo trì và dễ mở rộng.</p><p>NestJS kết hợp nhiều ý tưởng từ Angular như Module, Controller, Service và Dependency Injection, đồng thời tận dụng sức mạnh của Express hoặc Fastify để xử lý các yêu cầu HTTP.</p><h2>Tại sao nên sử dụng NestJS?</h2><ul><li data-list-item-id="e797cf35b94d1497f5d5052f57cbeea28">Cấu trúc dự án rõ ràng, phù hợp cho cả dự án nhỏ và lớn.</li><li data-list-item-id="ea188b5a8031a57aac404435018af2bdf">Hỗ trợ TypeScript mặc định, giúp giảm lỗi trong quá trình phát triển.</li><li data-list-item-id="e520e66db3b995a64a94bdb623c243da5">Tích hợp sẵn Dependency Injection.</li><li data-list-item-id="e61aa57c1186283f24a123e706827addf">Dễ dàng xây dựng REST API, GraphQL, WebSocket và Microservices.</li><li data-list-item-id="e9be43a63b6da292e4bf6f4f6c3b93739">Có hệ sinh thái phong phú và tài liệu chi tiết.</li></ul><h2>Kiến trúc cơ bản</h2><p>Một ứng dụng NestJS thường được chia thành các thành phần chính:</p><ul><li data-list-item-id="efcada466a6984c097fbc8aa364bdebbc"><strong>Module:</strong> Tổ chức và quản lý các thành phần liên quan.</li><li data-list-item-id="e80c6188f4c7247dc278fab0cc46ece7b"><strong>Controller:</strong> Tiếp nhận và xử lý các yêu cầu từ client.</li><li data-list-item-id="e4cb822453b0ab03d9ae9c1d20850b51b"><strong>Service:</strong> Chứa logic nghiệp vụ của ứng dụng.</li><li data-list-item-id="e69382b1b83102aec67a2d62186b1b15d"><strong>Entity/DTO:</strong> Định nghĩa cấu trúc dữ liệu.</li></ul><h2>Quy trình xử lý request</h2><ol><li data-list-item-id="e808d4ec14c317fbaca3066286b4adba4">Client gửi HTTP Request.</li><li data-list-item-id="edd5a610ce093b26577a129c76a5778c4">Controller nhận request.</li><li data-list-item-id="ecb32c634897288a4ad9d5eb2ecf8af87">Controller gọi Service để xử lý nghiệp vụ.</li><li data-list-item-id="e8046c61457f28a45e452df35f7611af6">Service truy xuất dữ liệu từ Database nếu cần.</li><li data-list-item-id="ee41d0d36658ae1b44dc581ea347e6125">Kết quả được trả về cho Client.</li></ol><h2>Một số package thường dùng</h2><figure class="table"><table><thead><tr><th style="padding:8px;">Package</th><th style="padding:8px;">Mục đích</th></tr></thead><tbody><tr><td style="padding:8px;">@nestjs/typeorm</td><td style="padding:8px;">Kết nối cơ sở dữ liệu bằng TypeORM</td></tr><tr><td style="padding:8px;">@nestjs/jwt</td><td style="padding:8px;">Xác thực JWT</td></tr><tr><td style="padding:8px;">@nestjs/swagger</td><td style="padding:8px;">Tạo tài liệu API Swagger</td></tr><tr><td style="padding:8px;">class-validator</td><td style="padding:8px;">Kiểm tra dữ liệu đầu vào</td></tr></tbody></table></figure>',
    "metadata": {
      "duration": 120,
      "durationText": "~2 phút đọc"
    }
  },
  {
    "_id": "6a205b11821e84b5f6c31843",
    "name": "Understanding Project Structure",
    "isActive": true,
    "isFree": false,
    "order": 3,
    "type": "video",
    "module": "6a205a24821e84b5f6c317cb",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:49:21.582Z",
    "updatedAt": "2026-06-03T16:49:21.582Z",
    "__v": 0,
    "content": "<h2>Understanding Project Structure</h2><p><strong>Project Structure</strong> (Cấu trúc dự án) là cách tổ chức, sắp xếp các tệp tin và thư mục trong một ứng dụng. Một cấu trúc rõ ràng và chuẩn chỉnh giống như bản thiết kế của một ngôi nhà, giúp lập trình viên dễ dàng định vị mã nguồn, quản lý tài nguyên và mở rộng hệ thống. Việc tuân thủ một cấu trúc tiêu chuẩn mang lại nhiều lợi ích lớn như: <strong>tăng tính bảo trì</strong> (giúp người mới dễ tiếp cận), <strong>phân tách trách nhiệm</strong> (mỗi thư mục một vai trò riêng biệt), và <strong>tối ưu hóa làm việc nhóm</strong> (hạn chế xung đột code). <em>Tóm lại, hiểu và thiết kế tốt cấu trúc dự án ngay từ đầu là bước đệm quyết định cho sự thành công và tính bền vững của bất kỳ sản phẩm phần mềm nào.</em></p>",
    "metadata": {
      "videoUrl": "https://www.youtube.com/watch?v=HkPPnHU7UC8&list=RDHkPPnHU7UC8&start_radio=1",
      "ytbId": "HkPPnHU7UC8",
      "duration": 2712,
      "durationText": "00:45:12"
    }
  },
  {
    "_id": "6a205b64821e84b5f6c3184b",
    "name": "Understanding Controllers",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "video",
    "module": "6a205a34821e84b5f6c317d3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:50:44.930Z",
    "updatedAt": "2026-06-03T16:50:44.930Z",
    "__v": 0
  },
  {
    "_id": "6a205b74821e84b5f6c31853",
    "name": "Controller Fundamentals (@Get Handler)",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "video",
    "module": "6a205a34821e84b5f6c317d3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:51:00.252Z",
    "updatedAt": "2026-06-03T16:51:00.252Z",
    "__v": 0
  },
  {
    "_id": "6a205be9821e84b5f6c3185b",
    "name": "Controller Fundamentals(Headers)",
    "isActive": true,
    "isFree": false,
    "order": 3,
    "type": "video",
    "module": "6a205a34821e84b5f6c317d3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:52:57.527Z",
    "updatedAt": "2026-06-03T16:52:57.527Z",
    "__v": 0
  },
  {
    "_id": "6a205bf2821e84b5f6c31863",
    "name": "Controller Fundamentals (@Post Handler)",
    "isActive": true,
    "isFree": false,
    "order": 4,
    "type": "video",
    "module": "6a205a34821e84b5f6c317d3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:53:06.661Z",
    "updatedAt": "2026-06-03T16:53:06.661Z",
    "__v": 0
  },
  {
    "_id": "6a205bfe821e84b5f6c3186b",
    "name": "Controller Fundamentals (@Post Handler) - Pt 2 with Modules",
    "isActive": true,
    "isFree": false,
    "order": 5,
    "type": "video",
    "module": "6a205a34821e84b5f6c317d3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:53:18.469Z",
    "updatedAt": "2026-06-03T16:53:18.469Z",
    "__v": 0
  },
  {
    "_id": "6a205c09821e84b5f6c31873",
    "name": "Controller Fundamentals (Fetching Params)",
    "isActive": true,
    "isFree": false,
    "order": 6,
    "type": "video",
    "module": "6a205a34821e84b5f6c317d3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:53:29.803Z",
    "updatedAt": "2026-06-03T16:53:29.803Z",
    "__v": 0
  },
  {
    "_id": "6a205c11821e84b5f6c3187b",
    "name": "Controller Fundamentals (@Put Handler)",
    "isActive": true,
    "isFree": false,
    "order": 7,
    "type": "video",
    "module": "6a205a34821e84b5f6c317d3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:53:37.489Z",
    "updatedAt": "2026-06-03T16:53:37.489Z",
    "__v": 0
  },
  {
    "_id": "6a205c18821e84b5f6c31883",
    "name": "Controller Fundamentals (@Patch Handler)",
    "isActive": true,
    "isFree": false,
    "order": 8,
    "type": "video",
    "module": "6a205a34821e84b5f6c317d3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:53:44.177Z",
    "updatedAt": "2026-06-03T16:53:44.177Z",
    "__v": 0
  },
  {
    "_id": "6a205c27821e84b5f6c3188b",
    "name": "Controller Fundamentals (@Delete Handler)",
    "isActive": true,
    "isFree": false,
    "order": 9,
    "type": "video",
    "module": "6a205a34821e84b5f6c317d3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:53:59.111Z",
    "updatedAt": "2026-06-03T16:53:59.111Z",
    "__v": 0
  },
  {
    "_id": "6a205c31821e84b5f6c31893",
    "name": "@HttpCode Vs. @Res Decorator",
    "isActive": true,
    "isFree": false,
    "order": 10,
    "type": "video",
    "module": "6a205a34821e84b5f6c317d3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:54:09.589Z",
    "updatedAt": "2026-06-03T16:54:09.589Z",
    "__v": 0
  },
  {
    "_id": "6a205c3b821e84b5f6c3189b",
    "name": "HTTP Response Status",
    "isActive": true,
    "isFree": false,
    "order": 11,
    "type": "video",
    "module": "6a205a34821e84b5f6c317d3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:54:19.371Z",
    "updatedAt": "2026-06-03T16:54:19.371Z",
    "__v": 0
  },
  {
    "_id": "6a205ca6821e84b5f6c318a3",
    "name": "Introduction To Pipes",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "video",
    "module": "6a205a4b821e84b5f6c317db",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:56:06.122Z",
    "updatedAt": "2026-06-03T16:56:06.122Z",
    "__v": 0
  },
  {
    "_id": "6a205cb2821e84b5f6c318ab",
    "name": "Built-in Pipes",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "video",
    "module": "6a205a4b821e84b5f6c317db",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:56:18.647Z",
    "updatedAt": "2026-06-03T16:56:18.647Z",
    "__v": 0
  },
  {
    "_id": "6a205cbc821e84b5f6c318b3",
    "name": "Validating empty fields",
    "isActive": true,
    "isFree": false,
    "order": 3,
    "type": "video",
    "module": "6a205a4b821e84b5f6c317db",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:56:28.704Z",
    "updatedAt": "2026-06-03T16:56:28.704Z",
    "__v": 0
  },
  {
    "_id": "6a205cc4821e84b5f6c318bb",
    "name": "Custom Validation Messages",
    "isActive": true,
    "isFree": false,
    "order": 4,
    "type": "video",
    "module": "6a205a4b821e84b5f6c317db",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:56:36.875Z",
    "updatedAt": "2026-06-03T16:56:36.875Z",
    "__v": 0
  },
  {
    "_id": "6a205ccc821e84b5f6c318c3",
    "name": "Creating A Custom Pipe",
    "isActive": true,
    "isFree": false,
    "order": 5,
    "type": "video",
    "module": "6a205a4b821e84b5f6c317db",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:56:44.532Z",
    "updatedAt": "2026-06-03T16:56:44.532Z",
    "__v": 0
  },
  {
    "_id": "6a205cd3821e84b5f6c318cb",
    "name": "Assignment - Custom Pipe (Handling different 'type\" arguments)",
    "isActive": true,
    "isFree": false,
    "order": 6,
    "type": "video",
    "module": "6a205a4b821e84b5f6c317db",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:56:51.747Z",
    "updatedAt": "2026-06-03T16:56:51.747Z",
    "__v": 0
  },
  {
    "_id": "6a205cdc821e84b5f6c318d3",
    "name": "Implementing Global Pipes",
    "isActive": true,
    "isFree": false,
    "order": 7,
    "type": "video",
    "module": "6a205a4b821e84b5f6c317db",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:57:00.126Z",
    "updatedAt": "2026-06-03T16:57:00.126Z",
    "__v": 0
  },
  {
    "_id": "6a205d19821e84b5f6c318db",
    "name": "Introduction to Nest Middlewares",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "video",
    "module": "6a205a5e821e84b5f6c317e3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:58:01.545Z",
    "updatedAt": "2026-06-03T16:58:01.545Z",
    "__v": 0
  },
  {
    "_id": "6a205d23821e84b5f6c318e3",
    "name": "Implementing Middleware",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "video",
    "module": "6a205a5e821e84b5f6c317e3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:58:11.617Z",
    "updatedAt": "2026-06-03T16:58:11.617Z",
    "__v": 0
  },
  {
    "_id": "6a205d2a821e84b5f6c318eb",
    "name": "Assignment - Checking Content-type With Middleware",
    "isActive": true,
    "isFree": false,
    "order": 3,
    "type": "video",
    "module": "6a205a5e821e84b5f6c317e3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:58:18.170Z",
    "updatedAt": "2026-06-03T16:58:18.170Z",
    "__v": 0
  },
  {
    "_id": "6a205d31821e84b5f6c318f3",
    "name": "Middleware For Specific Route Handlers",
    "isActive": true,
    "isFree": false,
    "order": 4,
    "type": "video",
    "module": "6a205a5e821e84b5f6c317e3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:58:25.378Z",
    "updatedAt": "2026-06-03T16:58:25.378Z",
    "__v": 0
  },
  {
    "_id": "6a205d3c821e84b5f6c318fb",
    "name": "Controller-Driven Route Middleware",
    "isActive": true,
    "isFree": false,
    "order": 5,
    "type": "video",
    "module": "6a205a5e821e84b5f6c317e3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:58:36.547Z",
    "updatedAt": "2026-06-03T16:58:36.547Z",
    "__v": 0
  },
  {
    "_id": "6a205d44821e84b5f6c31903",
    "name": "Understanding Functional Middleware",
    "isActive": true,
    "isFree": false,
    "order": 6,
    "type": "video",
    "module": "6a205a5e821e84b5f6c317e3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:58:44.355Z",
    "updatedAt": "2026-06-03T16:58:44.355Z",
    "__v": 0
  },
  {
    "_id": "6a205d4c821e84b5f6c3190b",
    "name": "Assignment - Password Encryption Middleware",
    "isActive": true,
    "isFree": false,
    "order": 7,
    "type": "video",
    "module": "6a205a5e821e84b5f6c317e3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:58:52.794Z",
    "updatedAt": "2026-06-03T16:58:52.794Z",
    "__v": 0
  },
  {
    "_id": "6a205d78821e84b5f6c31913",
    "name": "Introduction To Guards",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "video",
    "module": "6a205a68821e84b5f6c317eb",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:59:36.543Z",
    "updatedAt": "2026-06-03T16:59:36.543Z",
    "__v": 0
  },
  {
    "_id": "6a205d7e821e84b5f6c3191b",
    "name": "Accessing Arguments With getArgs()",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "video",
    "module": "6a205a68821e84b5f6c317eb",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:59:42.706Z",
    "updatedAt": "2026-06-03T16:59:42.706Z",
    "__v": 0
  },
  {
    "_id": "6a205d84821e84b5f6c31923",
    "name": "Understanding switch ToHttp() method",
    "isActive": true,
    "isFree": false,
    "order": 3,
    "type": "video",
    "module": "6a205a68821e84b5f6c317eb",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:59:48.539Z",
    "updatedAt": "2026-06-03T16:59:48.539Z",
    "__v": 0
  },
  {
    "_id": "6a205d89821e84b5f6c3192b",
    "name": "Defining Custom Metadata",
    "isActive": true,
    "isFree": false,
    "order": 4,
    "type": "video",
    "module": "6a205a68821e84b5f6c317eb",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:59:53.905Z",
    "updatedAt": "2026-06-03T16:59:53.905Z",
    "__v": 0
  },
  {
    "_id": "6a205d8f821e84b5f6c31933",
    "name": "Setting Custom Metadata - A Better Way",
    "isActive": true,
    "isFree": false,
    "order": 5,
    "type": "video",
    "module": "6a205a68821e84b5f6c317eb",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T16:59:59.828Z",
    "updatedAt": "2026-06-03T16:59:59.828Z",
    "__v": 0
  },
  {
    "_id": "6a205d9b821e84b5f6c3193b",
    "name": "Applying Multiple Roles",
    "isActive": true,
    "isFree": false,
    "order": 6,
    "type": "video",
    "module": "6a205a68821e84b5f6c317eb",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:00:11.086Z",
    "updatedAt": "2026-06-03T17:00:11.086Z",
    "__v": 0
  },
  {
    "_id": "6a205da6821e84b5f6c31943",
    "name": "Applying Global Guards",
    "isActive": true,
    "isFree": false,
    "order": 7,
    "type": "video",
    "module": "6a205a68821e84b5f6c317eb",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:00:22.632Z",
    "updatedAt": "2026-06-03T17:00:22.632Z",
    "__v": 0
  },
  {
    "_id": "6a205dc5821e84b5f6c3194b",
    "name": "Introduction To Interceptors",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "video",
    "module": "6a205aa4821e84b5f6c317f3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:00:53.685Z",
    "updatedAt": "2026-06-03T17:00:53.685Z",
    "__v": 0
  },
  {
    "_id": "6a205dcd821e84b5f6c31953",
    "name": "Exception Mapping",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "video",
    "module": "6a205aa4821e84b5f6c317f3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:01:01.791Z",
    "updatedAt": "2026-06-03T17:01:01.791Z",
    "__v": 0
  },
  {
    "_id": "6a205dd3821e84b5f6c3195b",
    "name": "Authentication and Authorization",
    "isActive": true,
    "isFree": false,
    "order": 3,
    "type": "video",
    "module": "6a205aa4821e84b5f6c317f3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:01:07.197Z",
    "updatedAt": "2026-06-03T17:01:07.197Z",
    "__v": 0
  },
  {
    "_id": "6a205ddb821e84b5f6c31963",
    "name": "Applying Global Interceptors",
    "isActive": true,
    "isFree": false,
    "order": 4,
    "type": "video",
    "module": "6a205aa4821e84b5f6c317f3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:01:15.127Z",
    "updatedAt": "2026-06-03T17:01:15.127Z",
    "__v": 0
  },
  {
    "_id": "6a205e0b821e84b5f6c3196b",
    "name": "Connecting To MySQL Database Using TypeORM",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "video",
    "module": "6a205aac821e84b5f6c317fb",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:02:03.375Z",
    "updatedAt": "2026-06-03T17:02:03.375Z",
    "__v": 0
  },
  {
    "_id": "6a205e10821e84b5f6c31973",
    "name": "Fetching the Product Data(CRUD)",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "video",
    "module": "6a205aac821e84b5f6c317fb",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:02:08.957Z",
    "updatedAt": "2026-06-03T17:02:08.957Z",
    "__v": 0
  },
  {
    "_id": "6a205e17821e84b5f6c3197b",
    "name": "Deleting Product Record (CRUD)",
    "isActive": true,
    "isFree": false,
    "order": 3,
    "type": "video",
    "module": "6a205aac821e84b5f6c317fb",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:02:15.841Z",
    "updatedAt": "2026-06-03T17:02:15.841Z",
    "__v": 0
  },
  {
    "_id": "6a205e38821e84b5f6c31983",
    "name": "Introduction to MyStore Application",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "video",
    "module": "6a205ab7821e84b5f6c31803",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:02:48.217Z",
    "updatedAt": "2026-06-03T17:02:48.217Z",
    "__v": 0
  },
  {
    "_id": "6a205e3e821e84b5f6c3198b",
    "name": "Rendering Template On Server",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "video",
    "module": "6a205ab7821e84b5f6c31803",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:02:54.251Z",
    "updatedAt": "2026-06-03T17:02:54.251Z",
    "__v": 0
  },
  {
    "_id": "6a205e43821e84b5f6c31993",
    "name": "Conditional Rendering - No Product Found",
    "isActive": true,
    "isFree": false,
    "order": 3,
    "type": "video",
    "module": "6a205ab7821e84b5f6c31803",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:02:59.643Z",
    "updatedAt": "2026-06-03T17:02:59.643Z",
    "__v": 0
  },
  {
    "_id": "6a205e4a821e84b5f6c3199b",
    "name": "Configuring Edit Product Route",
    "isActive": true,
    "isFree": false,
    "order": 4,
    "type": "video",
    "module": "6a205ab7821e84b5f6c31803",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:03:06.299Z",
    "updatedAt": "2026-06-03T17:03:06.299Z",
    "__v": 0
  },
  {
    "_id": "6a205e54821e84b5f6c319a3",
    "name": "Interface & Functionality - Edit Product",
    "isActive": true,
    "isFree": false,
    "order": 5,
    "type": "video",
    "module": "6a205ab7821e84b5f6c31803",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:03:16.930Z",
    "updatedAt": "2026-06-03T17:03:16.930Z",
    "__v": 0
  },
  {
    "_id": "6a205e72821e84b5f6c319ab",
    "name": "Fetching The Products",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "video",
    "module": "6a205ac0821e84b5f6c3180b",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:03:46.354Z",
    "updatedAt": "2026-06-03T17:03:46.354Z",
    "__v": 0
  },
  {
    "_id": "6a205e78821e84b5f6c319b3",
    "name": "Adding Product To Database",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "video",
    "module": "6a205ac0821e84b5f6c3180b",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:03:52.696Z",
    "updatedAt": "2026-06-03T17:03:52.696Z",
    "__v": 0
  },
  {
    "_id": "6a205e80821e84b5f6c319bb",
    "name": "Updating The Product",
    "isActive": true,
    "isFree": false,
    "order": 3,
    "type": "video",
    "module": "6a205ac0821e84b5f6c3180b",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:04:00.093Z",
    "updatedAt": "2026-06-03T17:04:00.093Z",
    "__v": 0
  },
  {
    "_id": "6a205e86821e84b5f6c319c3",
    "name": "Deleting The Product",
    "isActive": true,
    "isFree": false,
    "order": 4,
    "type": "video",
    "module": "6a205ac0821e84b5f6c3180b",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:04:06.237Z",
    "updatedAt": "2026-06-03T17:04:06.237Z",
    "__v": 0
  },
  {
    "_id": "6a205ebc821e84b5f6c319cb",
    "name": "Section Introduction",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "video",
    "module": "6a205ac9821e84b5f6c31813",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:05:00.722Z",
    "updatedAt": "2026-06-03T17:05:00.722Z",
    "__v": 0
  },
  {
    "_id": "6a205ec1821e84b5f6c319d3",
    "name": "Setting Up The Sign-up Route",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "video",
    "module": "6a205ac9821e84b5f6c31813",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:05:05.576Z",
    "updatedAt": "2026-06-03T17:05:05.576Z",
    "__v": 0
  },
  {
    "_id": "6a205ec6821e84b5f6c319db",
    "name": "Implementing Show/Hide Password Functionality",
    "isActive": true,
    "isFree": false,
    "order": 3,
    "type": "video",
    "module": "6a205ac9821e84b5f6c31813",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:05:10.855Z",
    "updatedAt": "2026-06-03T17:05:10.855Z",
    "__v": 0
  },
  {
    "_id": "6a205ecc821e84b5f6c319e3",
    "name": "Configuring Login Page",
    "isActive": true,
    "isFree": false,
    "order": 4,
    "type": "video",
    "module": "6a205ac9821e84b5f6c31813",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:05:16.705Z",
    "updatedAt": "2026-06-03T17:05:16.705Z",
    "__v": 0
  },
  {
    "_id": "6a205ed3821e84b5f6c319eb",
    "name": "Rendering DOM Based On Login Status",
    "isActive": true,
    "isFree": false,
    "order": 5,
    "type": "video",
    "module": "6a205ac9821e84b5f6c31813",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:05:23.467Z",
    "updatedAt": "2026-06-03T17:05:23.467Z",
    "__v": 0
  },
  {
    "_id": "6a205edd821e84b5f6c319f3",
    "name": "Configuring Express-Session",
    "isActive": true,
    "isFree": false,
    "order": 6,
    "type": "video",
    "module": "6a205ac9821e84b5f6c31813",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:05:33.808Z",
    "updatedAt": "2026-06-03T17:05:33.808Z",
    "__v": 0
  },
  {
    "_id": "6a205eea821e84b5f6c319fb",
    "name": "Optimizing Session Storage",
    "isActive": true,
    "isFree": false,
    "order": 7,
    "type": "video",
    "module": "6a205ac9821e84b5f6c31813",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:05:46.483Z",
    "updatedAt": "2026-06-03T17:05:46.483Z",
    "__v": 0
  },
  {
    "_id": "6a205f19821e84b5f6c31a03",
    "name": "Fetching Documents From MongoDB",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "video",
    "module": "6a205ad2821e84b5f6c3181b",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:06:33.302Z",
    "updatedAt": "2026-06-03T17:06:33.302Z",
    "__v": 0
  },
  {
    "_id": "6a205f1e821e84b5f6c31a0b",
    "name": "Connecting To MongoDB Database",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "video",
    "module": "6a205ad2821e84b5f6c3181b",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:06:38.015Z",
    "updatedAt": "2026-06-03T17:06:38.015Z",
    "__v": 0
  },
  {
    "_id": "6a205f23821e84b5f6c31a13",
    "name": "Creating A Schema",
    "isActive": true,
    "isFree": false,
    "order": 3,
    "type": "video",
    "module": "6a205ad2821e84b5f6c3181b",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:06:43.935Z",
    "updatedAt": "2026-06-03T17:06:43.935Z",
    "__v": 0
  },
  {
    "_id": "6a2061e9821e84b5f6c31aa6",
    "name": "Định nghĩa Prototype",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "video",
    "module": "6a20617d821e84b5f6c31a5e",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:18:33.296Z",
    "updatedAt": "2026-06-03T17:18:33.296Z",
    "__v": 0
  },
  {
    "_id": "6a2061f5821e84b5f6c31aae",
    "name": "Tầm quan trọng và tiêu chuẩn",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "video",
    "module": "6a20617d821e84b5f6c31a5e",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:18:45.624Z",
    "updatedAt": "2026-06-03T17:18:45.624Z",
    "__v": 0
  },
  {
    "_id": "6a2061ff821e84b5f6c31ab6",
    "name": "Tính ứng dụng",
    "isActive": true,
    "isFree": false,
    "order": 3,
    "type": "video",
    "module": "6a20617d821e84b5f6c31a5e",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:18:55.365Z",
    "updatedAt": "2026-06-03T17:18:55.365Z",
    "__v": 0
  },
  {
    "_id": "6a20620f821e84b5f6c31abe",
    "name": "Giao diện Prototype",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "video",
    "module": "6a206188821e84b5f6c31a66",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:19:11.114Z",
    "updatedAt": "2026-06-03T17:19:11.114Z",
    "__v": 0
  },
  {
    "_id": "6a20621e821e84b5f6c31ac6",
    "name": "Đơn vị nền tảng - Interaction",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "video",
    "module": "6a206188821e84b5f6c31a66",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:19:26.107Z",
    "updatedAt": "2026-06-03T17:19:26.107Z",
    "__v": 0
  },
  {
    "_id": "6a20622b821e84b5f6c31ace",
    "name": "Các loại tác động (User event)",
    "isActive": true,
    "isFree": false,
    "order": 3,
    "type": "video",
    "module": "6a206188821e84b5f6c31a66",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:19:39.910Z",
    "updatedAt": "2026-06-03T17:19:39.910Z",
    "__v": 0
  },
  {
    "_id": "6a206239821e84b5f6c31ad6",
    "name": "Các diễn biến (Element react)",
    "isActive": true,
    "isFree": false,
    "order": 4,
    "type": "video",
    "module": "6a206188821e84b5f6c31a66",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:19:53.124Z",
    "updatedAt": "2026-06-03T17:19:53.124Z",
    "__v": 0
  },
  {
    "_id": "6a206244821e84b5f6c31ade",
    "name": "Các cách present",
    "isActive": true,
    "isFree": false,
    "order": 5,
    "type": "video",
    "module": "6a206188821e84b5f6c31a66",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:20:04.949Z",
    "updatedAt": "2026-06-03T17:20:04.949Z",
    "__v": 0
  },
  {
    "_id": "6a206256821e84b5f6c31ae6",
    "name": "Các loại diễn biến Overlay",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "video",
    "module": "6a206191821e84b5f6c31a6e",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:20:22.726Z",
    "updatedAt": "2026-06-03T17:20:22.726Z",
    "__v": 0
  },
  {
    "_id": "6a206262821e84b5f6c31aee",
    "name": "Nguyên lý hoạt động của Overlay",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "video",
    "module": "6a206191821e84b5f6c31a6e",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:20:34.832Z",
    "updatedAt": "2026-06-03T17:20:34.832Z",
    "__v": 0
  },
  {
    "_id": "6a20627e821e84b5f6c31af6",
    "name": "Các ứng dụng của Overlay: Bàn phím (hoặc device element)",
    "isActive": true,
    "isFree": false,
    "order": 3,
    "type": "video",
    "module": "6a206191821e84b5f6c31a6e",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:21:02.219Z",
    "updatedAt": "2026-06-03T17:21:02.219Z",
    "__v": 0
  },
  {
    "_id": "6a206292821e84b5f6c31afe",
    "name": "Các ứng dụng của Overlay: Các loại hình popup",
    "isActive": true,
    "isFree": false,
    "order": 4,
    "type": "video",
    "module": "6a206191821e84b5f6c31a6e",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:21:22.344Z",
    "updatedAt": "2026-06-03T17:21:22.344Z",
    "__v": 0
  },
  {
    "_id": "6a2062a5821e84b5f6c31b06",
    "name": "Các ứng dụng của Overlay: Tooltip hoặc dropdown",
    "isActive": true,
    "isFree": false,
    "order": 5,
    "type": "video",
    "module": "6a206191821e84b5f6c31a6e",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:21:41.518Z",
    "updatedAt": "2026-06-03T17:21:41.518Z",
    "__v": 0
  },
  {
    "_id": "6a2062b6821e84b5f6c31b0e",
    "name": "Nguyên lý scrolling",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "video",
    "module": "6a206198821e84b5f6c31a76",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:21:58.808Z",
    "updatedAt": "2026-06-03T17:21:58.808Z",
    "__v": 0
  },
  {
    "_id": "6a2062c5821e84b5f6c31b16",
    "name": "Normal scrolling trong Figma",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "video",
    "module": "6a206198821e84b5f6c31a76",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:22:13.316Z",
    "updatedAt": "2026-06-03T17:22:13.316Z",
    "__v": 0
  },
  {
    "_id": "6a2062d9821e84b5f6c31b1e",
    "name": "Scroll Behavior: fixed",
    "isActive": true,
    "isFree": false,
    "order": 3,
    "type": "video",
    "module": "6a206198821e84b5f6c31a76",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:22:33.553Z",
    "updatedAt": "2026-06-03T17:22:33.553Z",
    "__v": 0
  },
  {
    "_id": "6a2062ee821e84b5f6c31b26",
    "name": "Scroll Behavior: sticky",
    "isActive": true,
    "isFree": false,
    "order": 4,
    "type": "video",
    "module": "6a206198821e84b5f6c31a76",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:22:54.820Z",
    "updatedAt": "2026-06-03T17:22:54.820Z",
    "__v": 0
  },
  {
    "_id": "6a206318821e84b5f6c31b2e",
    "name": "Overflow scrolling: Ngang, dọc và hai chiều",
    "isActive": true,
    "isFree": false,
    "order": 5,
    "type": "video",
    "module": "6a206198821e84b5f6c31a76",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:23:36.015Z",
    "updatedAt": "2026-06-03T17:23:36.015Z",
    "__v": 0
  },
  {
    "_id": "6a206343821e84b5f6c31b36",
    "name": "Nguyên lý của Interactive component",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "video",
    "module": "6a2061a9821e84b5f6c31a7e",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:24:19.623Z",
    "updatedAt": "2026-06-03T17:24:19.623Z",
    "__v": 0
  },
  {
    "_id": "6a206351821e84b5f6c31b3e",
    "name": "Ứng dụng: Card thay đổi trạng thái",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "video",
    "module": "6a2061a9821e84b5f6c31a7e",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:24:33.110Z",
    "updatedAt": "2026-06-03T17:24:33.110Z",
    "__v": 0
  },
  {
    "_id": "6a20636a821e84b5f6c31b46",
    "name": "Các loại hình animation căn bản",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "video",
    "module": "6a2061bb821e84b5f6c31a86",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:24:58.785Z",
    "updatedAt": "2026-06-03T17:24:58.785Z",
    "__v": 0
  },
  {
    "_id": "6a206375821e84b5f6c31b4e",
    "name": "Vận dụng animation căn bản",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "video",
    "module": "6a2061bb821e84b5f6c31a86",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:25:09.437Z",
    "updatedAt": "2026-06-03T17:25:09.437Z",
    "__v": 0
  },
  {
    "_id": "6a206383821e84b5f6c31b56",
    "name": "Smart Animation và nguyên lý",
    "isActive": true,
    "isFree": false,
    "order": 3,
    "type": "video",
    "module": "6a2061bb821e84b5f6c31a86",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:25:23.499Z",
    "updatedAt": "2026-06-03T17:25:23.499Z",
    "__v": 0
  },
  {
    "_id": "6a206395821e84b5f6c31b5e",
    "name": "Timing và custom animation",
    "isActive": true,
    "isFree": false,
    "order": 4,
    "type": "video",
    "module": "6a2061bb821e84b5f6c31a86",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:25:41.746Z",
    "updatedAt": "2026-06-03T17:25:41.746Z",
    "__v": 0
  },
  {
    "_id": "6a2063a9821e84b5f6c31b66",
    "name": "Giới thiệu Variable",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "video",
    "module": "6a2061c9821e84b5f6c31a8e",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:26:01.328Z",
    "updatedAt": "2026-06-03T17:26:01.328Z",
    "__v": 0
  },
  {
    "_id": "6a2063cf821e84b5f6c31b6e",
    "name": "Giới thiệu điều kiện (conditional)",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "video",
    "module": "6a2061c9821e84b5f6c31a8e",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:26:39.562Z",
    "updatedAt": "2026-06-03T17:26:39.562Z",
    "__v": 0
  },
  {
    "_id": "6a2063e7821e84b5f6c31b76",
    "name": "Làm slide với Figma",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "video",
    "module": "6a2061d0821e84b5f6c31a96",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:27:03.030Z",
    "updatedAt": "2026-06-03T17:27:03.030Z",
    "__v": 0
  },
  {
    "_id": "6a2063fa821e84b5f6c31b7e",
    "name": "Micro Interaction",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "video",
    "module": "6a2061d0821e84b5f6c31a96",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:27:22.710Z",
    "updatedAt": "2026-06-03T17:27:22.710Z",
    "__v": 0
  },
  {
    "_id": "6a206409821e84b5f6c31b86",
    "name": "Social Content Animation",
    "isActive": true,
    "isFree": false,
    "order": 3,
    "type": "video",
    "module": "6a2061d0821e84b5f6c31a96",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:27:37.115Z",
    "updatedAt": "2026-06-03T17:27:37.115Z",
    "__v": 0
  },
  {
    "_id": "6a20640e821e84b5f6c31b8e",
    "name": "Game",
    "isActive": true,
    "isFree": false,
    "order": 4,
    "type": "video",
    "module": "6a2061d0821e84b5f6c31a96",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:27:42.616Z",
    "updatedAt": "2026-06-03T17:27:42.616Z",
    "__v": 0
  },
  {
    "_id": "6a20641f821e84b5f6c31b96",
    "name": "Tổng kết khoá học",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "video",
    "module": "6a2061d6821e84b5f6c31a9e",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:27:59.208Z",
    "updatedAt": "2026-06-03T17:27:59.208Z",
    "__v": 0
  },
  {
    "_id": "6a20642b821e84b5f6c31b9e",
    "name": "Con đường UI/UX Design",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "video",
    "module": "6a2061d6821e84b5f6c31a9e",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:28:11.530Z",
    "updatedAt": "2026-06-03T17:28:11.530Z",
    "__v": 0
  },
  {
    "_id": "6a206441821e84b5f6c31ba6",
    "name": "Lộ trình học để trở thành UI/UX Designer",
    "isActive": true,
    "isFree": false,
    "order": 3,
    "type": "video",
    "module": "6a2061d6821e84b5f6c31a9e",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:28:33.299Z",
    "updatedAt": "2026-06-03T17:28:33.299Z",
    "__v": 0
  },
  {
    "_id": "6a2066a2821e84b5f6c31bfb",
    "name": "Làm sao để công việc của mình thăng tiến?",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "article",
    "module": "6a206654821e84b5f6c31bd3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:38:42.145Z",
    "updatedAt": "2026-06-03T17:38:42.145Z",
    "__v": 0
  },
  {
    "_id": "6a2066ba821e84b5f6c31c03",
    "name": "Những sai lầm phổ biến trong excel khi làm kế toán",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "article",
    "module": "6a206654821e84b5f6c31bd3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:39:06.036Z",
    "updatedAt": "2026-06-03T17:39:06.036Z",
    "__v": 0
  },
  {
    "_id": "6a2066cb821e84b5f6c31c0b",
    "name": "Một số dạng toán phổ biến trong kế toán",
    "isActive": true,
    "isFree": false,
    "order": 3,
    "type": "video",
    "module": "6a206654821e84b5f6c31bd3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:39:23.338Z",
    "updatedAt": "2026-06-03T17:39:23.338Z",
    "__v": 0
  },
  {
    "_id": "6a2066d9821e84b5f6c31c13",
    "name": "Các hàm thường dùng trong kế toán",
    "isActive": true,
    "isFree": false,
    "order": 4,
    "type": "article",
    "module": "6a206654821e84b5f6c31bd3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:39:37.645Z",
    "updatedAt": "2026-06-03T17:39:37.645Z",
    "__v": 0
  },
  {
    "_id": "6a2066f1821e84b5f6c31c1b",
    "name": "Lý thuyết về data",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "article",
    "module": "6a20665f821e84b5f6c31bdb",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:40:01.019Z",
    "updatedAt": "2026-06-03T17:40:01.019Z",
    "__v": 0
  },
  {
    "_id": "6a20670a821e84b5f6c31c23",
    "name": "Tư duy thiết kế data | Hạn chế tư duy theo Hàm",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "video",
    "module": "6a20665f821e84b5f6c31bdb",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:40:26.141Z",
    "updatedAt": "2026-06-03T17:40:26.141Z",
    "__v": 0
  },
  {
    "_id": "6a206723821e84b5f6c31c2b",
    "name": "Tư duy thiết kế data | Dữ liệu nên thiết kế như thế nào?",
    "isActive": true,
    "isFree": false,
    "order": 3,
    "type": "article",
    "module": "6a20665f821e84b5f6c31bdb",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:40:51.100Z",
    "updatedAt": "2026-06-03T17:40:51.100Z",
    "__v": 0
  },
  {
    "_id": "6a206731821e84b5f6c31c33",
    "name": "Hướng dẫn cài đặt",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "video",
    "module": "6a206670821e84b5f6c31be3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:41:05.940Z",
    "updatedAt": "2026-06-03T17:41:05.940Z",
    "__v": 0
  },
  {
    "_id": "6a206742821e84b5f6c31c3b",
    "name": "Làm sạch dữ liệu | Data clearning",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "video",
    "module": "6a206670821e84b5f6c31be3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:41:22.869Z",
    "updatedAt": "2026-06-03T17:41:22.869Z",
    "__v": 0
  },
  {
    "_id": "6a20675c821e84b5f6c31c43",
    "name": "Kỹ năng xử lý dữ liệu nâng cao | Advance clearning data",
    "isActive": true,
    "isFree": false,
    "order": 3,
    "type": "video",
    "module": "6a206670821e84b5f6c31be3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:41:48.856Z",
    "updatedAt": "2026-06-03T17:41:48.856Z",
    "__v": 0
  },
  {
    "_id": "6a20676b821e84b5f6c31c4b",
    "name": "Hàm thời gian | Date and time",
    "isActive": true,
    "isFree": false,
    "order": 4,
    "type": "video",
    "module": "6a206670821e84b5f6c31be3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:42:03.981Z",
    "updatedAt": "2026-06-03T17:42:03.981Z",
    "__v": 0
  },
  {
    "_id": "6a206780821e84b5f6c31c53",
    "name": "Định dạng màu có điều kiện | Conditional Formating",
    "isActive": true,
    "isFree": false,
    "order": 5,
    "type": "video",
    "module": "6a206670821e84b5f6c31be3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:42:24.178Z",
    "updatedAt": "2026-06-03T17:42:24.178Z",
    "__v": 0
  },
  {
    "_id": "6a206795821e84b5f6c31c5b",
    "name": "Sổ danh sách có điều kiện | Validation list",
    "isActive": true,
    "isFree": false,
    "order": 6,
    "type": "video",
    "module": "6a206670821e84b5f6c31be3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:42:45.060Z",
    "updatedAt": "2026-06-03T17:42:45.060Z",
    "__v": 0
  },
  {
    "_id": "6a2067d5821e84b5f6c31c63",
    "name": "Đếm số lần xuất hiện | Distinct Count",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "video",
    "module": "6a20667c821e84b5f6c31beb",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:43:49.405Z",
    "updatedAt": "2026-06-03T17:43:49.405Z",
    "__v": 0
  },
  {
    "_id": "6a2067e9821e84b5f6c31c6b",
    "name": "Tính tổng của tích | Lookup Sumproduct",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "video",
    "module": "6a20667c821e84b5f6c31beb",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:44:09.973Z",
    "updatedAt": "2026-06-03T17:44:09.973Z",
    "__v": 0
  },
  {
    "_id": "6a2067fc821e84b5f6c31c73",
    "name": "Tìm kiếm phức tạp | Index Min Max",
    "isActive": true,
    "isFree": false,
    "order": 3,
    "type": "video",
    "module": "6a20667c821e84b5f6c31beb",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:44:28.772Z",
    "updatedAt": "2026-06-03T17:44:28.772Z",
    "__v": 0
  },
  {
    "_id": "6a20680c821e84b5f6c31c7b",
    "name": "Lọc dữ liệu thông minh | Filter",
    "isActive": true,
    "isFree": false,
    "order": 4,
    "type": "video",
    "module": "6a20667c821e84b5f6c31beb",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:44:44.141Z",
    "updatedAt": "2026-06-03T17:44:44.141Z",
    "__v": 0
  },
  {
    "_id": "6a20681f821e84b5f6c31c83",
    "name": "Pivot table là gì?",
    "isActive": true,
    "isFree": false,
    "order": 1,
    "type": "article",
    "module": "6a206689821e84b5f6c31bf3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:45:03.969Z",
    "updatedAt": "2026-06-03T17:45:03.969Z",
    "__v": 0
  },
  {
    "_id": "6a206833821e84b5f6c31c8b",
    "name": "Báo cáo hợp nhất | Consolidation",
    "isActive": true,
    "isFree": false,
    "order": 2,
    "type": "video",
    "module": "6a206689821e84b5f6c31bf3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:45:23.700Z",
    "updatedAt": "2026-06-03T17:45:23.700Z",
    "__v": 0
  },
  {
    "_id": "6a206843821e84b5f6c31c93",
    "name": "Kết nối 2 bảng | Connect Data table",
    "isActive": true,
    "isFree": false,
    "order": 3,
    "type": "video",
    "module": "6a206689821e84b5f6c31bf3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:45:39.808Z",
    "updatedAt": "2026-06-03T17:45:39.808Z",
    "__v": 0
  },
  {
    "_id": "6a206853821e84b5f6c31c9b",
    "name": "Phân tích phân phối | Histogram",
    "isActive": true,
    "isFree": false,
    "order": 4,
    "type": "video",
    "module": "6a206689821e84b5f6c31bf3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:45:55.544Z",
    "updatedAt": "2026-06-03T17:45:55.544Z",
    "__v": 0
  },
  {
    "_id": "6a206864821e84b5f6c31ca3",
    "name": "Hiệu quả kinh doanh | Pareto",
    "isActive": true,
    "isFree": false,
    "order": 5,
    "type": "video",
    "module": "6a206689821e84b5f6c31bf3",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-03T17:46:12.136Z",
    "updatedAt": "2026-06-03T17:46:12.136Z",
    "__v": 0
  }
]