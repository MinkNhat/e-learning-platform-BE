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
    }
]