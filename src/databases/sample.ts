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

export const CATEGORIES = [
  {
    "_id": "3bbaee7076924e4393e7d1f7",
    "name": "Phát triển",
    "description": "Danh mục Phát triển giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "phat-trien",
    "level": 0,
    "isActive": true,
    "parent": null,
    "icon": "BarChartOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.946657Z",
    "updatedAt": "2026-06-16T16:38:22.946657Z",
    "__v": 0
  },
  {
    "_id": "ca301ebfddb142d28f62efaa",
    "name": "Phát triển web",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Phát triển web.",
    "slug": "phat-trien-web",
    "level": 1,
    "isActive": true,
    "parent": "3bbaee7076924e4393e7d1f7",
    "icon": "BarChartOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.946906Z",
    "updatedAt": "2026-06-16T16:38:22.946906Z",
    "__v": 0
  },
  {
    "_id": "04065bc8063f457486668992",
    "name": "Khoa học dữ liệu",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Khoa học dữ liệu.",
    "slug": "khoa-hoc-du-lieu",
    "level": 1,
    "isActive": true,
    "parent": "3bbaee7076924e4393e7d1f7",
    "icon": "CameraOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.946946Z",
    "updatedAt": "2026-06-16T16:38:22.946946Z",
    "__v": 0
  },
  {
    "_id": "669e9297722e46bab122f785",
    "name": "Phát triển ứng dụng di động",
    "description": "Danh mục Phát triển ứng dụng di động giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "phat-trien-ung-dung-di-dong",
    "level": 1,
    "isActive": true,
    "parent": "3bbaee7076924e4393e7d1f7",
    "icon": "GlobalOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.946982Z",
    "updatedAt": "2026-06-16T16:38:22.946982Z",
    "__v": 0
  },
  {
    "_id": "b4abd92b2ff9468a9bc7c336",
    "name": "Ngôn ngữ lập trình",
    "description": "Danh mục Ngôn ngữ lập trình giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "ngon-ngu-lap-trinh",
    "level": 1,
    "isActive": true,
    "parent": "3bbaee7076924e4393e7d1f7",
    "icon": "RocketOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947019Z",
    "updatedAt": "2026-06-16T16:38:22.947019Z",
    "__v": 0
  },
  {
    "_id": "4276b1c76d44464b88000642",
    "name": "Phát triển trò chơi",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Phát triển trò chơi.",
    "slug": "phat-trien-tro-choi",
    "level": 1,
    "isActive": true,
    "parent": "3bbaee7076924e4393e7d1f7",
    "icon": "BarChartOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947050Z",
    "updatedAt": "2026-06-16T16:38:22.947050Z",
    "__v": 0
  },
  {
    "_id": "81af787dbbdd4469997d9366",
    "name": "Thiết kế & Phát triển cơ sở dữ liệu",
    "description": "Danh mục Thiết kế & Phát triển cơ sở dữ liệu giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "thiet-ke-phat-trien-co-so-du-lieu",
    "level": 1,
    "isActive": true,
    "parent": "3bbaee7076924e4393e7d1f7",
    "icon": "BookOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947077Z",
    "updatedAt": "2026-06-16T16:38:22.947077Z",
    "__v": 0
  },
  {
    "_id": "1f8d732fb38a44839e963f15",
    "name": "Kiểm tra phần mềm",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Kiểm tra phần mềm.",
    "slug": "kiem-tra-phan-mem",
    "level": 1,
    "isActive": true,
    "parent": "3bbaee7076924e4393e7d1f7",
    "icon": "CameraOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947106Z",
    "updatedAt": "2026-06-16T16:38:22.947106Z",
    "__v": 0
  },
  {
    "_id": "f984646a2f894f5a9a0c5cf0",
    "name": "Kỹ thuật phần mềm",
    "description": "Bao gồm các chủ đề phổ biến về Kỹ thuật phần mềm, từ cơ bản đến nâng cao.",
    "slug": "ky-thuat-phan-mem",
    "level": 1,
    "isActive": true,
    "parent": "3bbaee7076924e4393e7d1f7",
    "icon": "GlobalOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947137Z",
    "updatedAt": "2026-06-16T16:38:22.947137Z",
    "__v": 0
  },
  {
    "_id": "808b92901a854bc1bb3bf4b6",
    "name": "Công cụ phát triển phần mềm",
    "description": "Bao gồm các chủ đề phổ biến về Công cụ phát triển phần mềm, từ cơ bản đến nâng cao.",
    "slug": "cong-cu-phat-trien-phan-mem",
    "level": 1,
    "isActive": true,
    "parent": "3bbaee7076924e4393e7d1f7",
    "icon": "FormatPainterOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947161Z",
    "updatedAt": "2026-06-16T16:38:22.947161Z",
    "__v": 0
  },
  {
    "_id": "73e08883507a4d1fb2860ec4",
    "name": "Viết phần mềm không cần biết lập trình",
    "description": "Các khóa học liên quan đến Viết phần mềm không cần biết lập trình, phù hợp cho người mới bắt đầu và người muốn nâng cao kỹ năng.",
    "slug": "viet-phan-mem-khong-can-biet-lap-trinh",
    "level": 1,
    "isActive": true,
    "parent": "3bbaee7076924e4393e7d1f7",
    "icon": "LineChartOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947185Z",
    "updatedAt": "2026-06-16T16:38:22.947185Z",
    "__v": 0
  },
  {
    "_id": "5d79b8e74b354084ad84884b",
    "name": "Kinh doanh",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Kinh doanh.",
    "slug": "kinh-doanh",
    "level": 0,
    "isActive": true,
    "parent": null,
    "icon": "CameraOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947210Z",
    "updatedAt": "2026-06-16T16:38:22.947210Z",
    "__v": 0
  },
  {
    "_id": "f512c78c715745678966fca6",
    "name": "Tinh thần khởi nghiệp",
    "description": "Bao gồm các chủ đề phổ biến về Tinh thần khởi nghiệp, từ cơ bản đến nâng cao.",
    "slug": "tinh-than-khoi-nghiep",
    "level": 1,
    "isActive": true,
    "parent": "5d79b8e74b354084ad84884b",
    "icon": "MobileOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947230Z",
    "updatedAt": "2026-06-16T16:38:22.947230Z",
    "__v": 0
  },
  {
    "_id": "9b725baf31b847aab2342522",
    "name": "Giao tiếp",
    "description": "Bao gồm các chủ đề phổ biến về Giao tiếp, từ cơ bản đến nâng cao.",
    "slug": "giao-tiep",
    "level": 1,
    "isActive": true,
    "parent": "5d79b8e74b354084ad84884b",
    "icon": "RocketOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947255Z",
    "updatedAt": "2026-06-16T16:38:22.947255Z",
    "__v": 0
  },
  {
    "_id": "3dd07e29bc49491090eeed9e",
    "name": "Quản lý",
    "description": "Danh mục Quản lý giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "quan-ly",
    "level": 1,
    "isActive": true,
    "parent": "5d79b8e74b354084ad84884b",
    "icon": "SafetyCertificateOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947274Z",
    "updatedAt": "2026-06-16T16:38:22.947274Z",
    "__v": 0
  },
  {
    "_id": "b3def56c57cd4a128c4d025e",
    "name": "Bán hàng",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Bán hàng.",
    "slug": "ban-hang",
    "level": 1,
    "isActive": true,
    "parent": "5d79b8e74b354084ad84884b",
    "icon": "MobileOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947295Z",
    "updatedAt": "2026-06-16T16:38:22.947295Z",
    "__v": 0
  },
  {
    "_id": "baa6dd0defa14112b98debc2",
    "name": "Chiến lược kinh doanh",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Chiến lược kinh doanh.",
    "slug": "chien-luoc-kinh-doanh",
    "level": 1,
    "isActive": true,
    "parent": "5d79b8e74b354084ad84884b",
    "icon": "LaptopOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947316Z",
    "updatedAt": "2026-06-16T16:38:22.947316Z",
    "__v": 0
  },
  {
    "_id": "9c5aa274cea14021bbb6e03c",
    "name": "Hoạt động",
    "description": "Các khóa học liên quan đến Hoạt động, phù hợp cho người mới bắt đầu và người muốn nâng cao kỹ năng.",
    "slug": "hoat-dong",
    "level": 1,
    "isActive": true,
    "parent": "5d79b8e74b354084ad84884b",
    "icon": "CustomerServiceOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947336Z",
    "updatedAt": "2026-06-16T16:38:22.947336Z",
    "__v": 0
  },
  {
    "_id": "0178ca4e1f3840c4a14a6fbf",
    "name": "Quản lý dự án",
    "description": "Danh mục Quản lý dự án giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "quan-ly-du-an",
    "level": 1,
    "isActive": true,
    "parent": "5d79b8e74b354084ad84884b",
    "icon": "TranslationOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947354Z",
    "updatedAt": "2026-06-16T16:38:22.947354Z",
    "__v": 0
  },
  {
    "_id": "ba156607194c46c9aeab3049",
    "name": "Luật doanh nghiệp",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Luật doanh nghiệp.",
    "slug": "luat-doanh-nghiep",
    "level": 1,
    "isActive": true,
    "parent": "5d79b8e74b354084ad84884b",
    "icon": "ReadOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947374Z",
    "updatedAt": "2026-06-16T16:38:22.947374Z",
    "__v": 0
  },
  {
    "_id": "e1d600648dac44b8acdb743a",
    "name": "BI và phân tích dữ liệu kinh doanh",
    "description": "Bao gồm các chủ đề phổ biến về BI và phân tích dữ liệu kinh doanh, từ cơ bản đến nâng cao.",
    "slug": "bi-va-phan-tich-du-lieu-kinh-doanh",
    "level": 1,
    "isActive": true,
    "parent": "5d79b8e74b354084ad84884b",
    "icon": "GlobalOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947393Z",
    "updatedAt": "2026-06-16T16:38:22.947393Z",
    "__v": 0
  },
  {
    "_id": "7b7c2c22e9b84b78a3305419",
    "name": "Nhân sự",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Nhân sự.",
    "slug": "nhan-su",
    "level": 1,
    "isActive": true,
    "parent": "5d79b8e74b354084ad84884b",
    "icon": "ReadOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947415Z",
    "updatedAt": "2026-06-16T16:38:22.947415Z",
    "__v": 0
  },
  {
    "_id": "2667eb083fc3409d930117ae",
    "name": "Ngành công nghiệp",
    "description": "Danh mục Ngành công nghiệp giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "nganh-cong-nghiep",
    "level": 1,
    "isActive": true,
    "parent": "5d79b8e74b354084ad84884b",
    "icon": "CloudOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947432Z",
    "updatedAt": "2026-06-16T16:38:22.947432Z",
    "__v": 0
  },
  {
    "_id": "04bcb8e4497a46cea1f444c7",
    "name": "Thương mại điện tử",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Thương mại điện tử.",
    "slug": "thuong-mai-dien-tu",
    "level": 1,
    "isActive": true,
    "parent": "5d79b8e74b354084ad84884b",
    "icon": "CustomerServiceOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947451Z",
    "updatedAt": "2026-06-16T16:38:22.947451Z",
    "__v": 0
  },
  {
    "_id": "552abd420b1c496db4ca5e49",
    "name": "Truyền thông",
    "description": "Các khóa học liên quan đến Truyền thông, phù hợp cho người mới bắt đầu và người muốn nâng cao kỹ năng.",
    "slug": "truyen-thong",
    "level": 1,
    "isActive": true,
    "parent": "5d79b8e74b354084ad84884b",
    "icon": "DatabaseOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947473Z",
    "updatedAt": "2026-06-16T16:38:22.947473Z",
    "__v": 0
  },
  {
    "_id": "f94c94592781420c87889dcb",
    "name": "Bất động sản",
    "description": "Bao gồm các chủ đề phổ biến về Bất động sản, từ cơ bản đến nâng cao.",
    "slug": "bat-dong-san",
    "level": 1,
    "isActive": true,
    "parent": "5d79b8e74b354084ad84884b",
    "icon": "LineChartOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947492Z",
    "updatedAt": "2026-06-16T16:38:22.947492Z",
    "__v": 0
  },
  {
    "_id": "e83265cf4a4a4feeab26dcf1",
    "name": "Kinh doanh khác",
    "description": "Bao gồm các chủ đề phổ biến về Kinh doanh khác, từ cơ bản đến nâng cao.",
    "slug": "kinh-doanh-khac",
    "level": 1,
    "isActive": true,
    "parent": "5d79b8e74b354084ad84884b",
    "icon": "LaptopOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947518Z",
    "updatedAt": "2026-06-16T16:38:22.947518Z",
    "__v": 0
  },
  {
    "_id": "737869cfd21c489fb61dbae9",
    "name": "Tài chính & Kế toán",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Tài chính & Kế toán.",
    "slug": "tai-chinh-ke-toan",
    "level": 0,
    "isActive": true,
    "parent": null,
    "icon": "VideoCameraOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947538Z",
    "updatedAt": "2026-06-16T16:38:22.947538Z",
    "__v": 0
  },
  {
    "_id": "267c9d8da4ed401dbfc1bcb9",
    "name": "Kế toán và ghi sổ sách kế toán",
    "description": "Danh mục Kế toán và ghi sổ sách kế toán giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "ke-toan-va-ghi-so-sach-ke-toan",
    "level": 1,
    "isActive": true,
    "parent": "737869cfd21c489fb61dbae9",
    "icon": "BarChartOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947559Z",
    "updatedAt": "2026-06-16T16:38:22.947559Z",
    "__v": 0
  },
  {
    "_id": "d311563f2e484fc7bcff4add",
    "name": "Tuân thủ",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Tuân thủ.",
    "slug": "tuan-thu",
    "level": 1,
    "isActive": true,
    "parent": "737869cfd21c489fb61dbae9",
    "icon": "CameraOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947584Z",
    "updatedAt": "2026-06-16T16:38:22.947584Z",
    "__v": 0
  },
  {
    "_id": "461b5a042724441a8bbd615e",
    "name": "Tiền ảo & Blockchain",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Tiền ảo & Blockchain.",
    "slug": "tien-ao-blockchain",
    "level": 1,
    "isActive": true,
    "parent": "737869cfd21c489fb61dbae9",
    "icon": "VideoCameraOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947603Z",
    "updatedAt": "2026-06-16T16:38:22.947603Z",
    "__v": 0
  },
  {
    "_id": "865891cae25d475d91f41105",
    "name": "Kinh tế học",
    "description": "Bao gồm các chủ đề phổ biến về Kinh tế học, từ cơ bản đến nâng cao.",
    "slug": "kinh-te-hoc",
    "level": 1,
    "isActive": true,
    "parent": "737869cfd21c489fb61dbae9",
    "icon": "ToolOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947623Z",
    "updatedAt": "2026-06-16T16:38:22.947623Z",
    "__v": 0
  },
  {
    "_id": "dbc0cc4de1c640aaa966cd54",
    "name": "Tài chính",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Tài chính.",
    "slug": "tai-chinh",
    "level": 1,
    "isActive": true,
    "parent": "737869cfd21c489fb61dbae9",
    "icon": "BookOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947642Z",
    "updatedAt": "2026-06-16T16:38:22.947642Z",
    "__v": 0
  },
  {
    "_id": "0e5a37a83ffa43dfad4ad2ec",
    "name": "Luyện thi và lấy chứng chỉ tài chính",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Luyện thi và lấy chứng chỉ tài chính.",
    "slug": "luyen-thi-va-lay-chung-chi-tai-chinh",
    "level": 1,
    "isActive": true,
    "parent": "737869cfd21c489fb61dbae9",
    "icon": "ToolOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947659Z",
    "updatedAt": "2026-06-16T16:38:22.947659Z",
    "__v": 0
  },
  {
    "_id": "868c2abfba4b419ba49f7c02",
    "name": "Xây dựng mô hình tài chính & phân tích",
    "description": "Bao gồm các chủ đề phổ biến về Xây dựng mô hình tài chính & phân tích, từ cơ bản đến nâng cao.",
    "slug": "xay-dung-mo-hinh-tai-chinh-phan-tich",
    "level": 1,
    "isActive": true,
    "parent": "737869cfd21c489fb61dbae9",
    "icon": "DatabaseOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947683Z",
    "updatedAt": "2026-06-16T16:38:22.947683Z",
    "__v": 0
  },
  {
    "_id": "b4cb7b1d797c4e2e9dfa5dfb",
    "name": "Đầu tư và giao dịch",
    "description": "Bao gồm các chủ đề phổ biến về Đầu tư và giao dịch, từ cơ bản đến nâng cao.",
    "slug": "dau-tu-va-giao-dich",
    "level": 1,
    "isActive": true,
    "parent": "737869cfd21c489fb61dbae9",
    "icon": "ReadOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947707Z",
    "updatedAt": "2026-06-16T16:38:22.947707Z",
    "__v": 0
  },
  {
    "_id": "28df5ff4c3314c91bb95e9ad",
    "name": "Công cụ quản lý tiền",
    "description": "Bao gồm các chủ đề phổ biến về Công cụ quản lý tiền, từ cơ bản đến nâng cao.",
    "slug": "cong-cu-quan-ly-tien",
    "level": 1,
    "isActive": true,
    "parent": "737869cfd21c489fb61dbae9",
    "icon": "TranslationOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947733Z",
    "updatedAt": "2026-06-16T16:38:22.947733Z",
    "__v": 0
  },
  {
    "_id": "a3bd6fbbe7ee406d823137f2",
    "name": "Thuế",
    "description": "Bao gồm các chủ đề phổ biến về Thuế, từ cơ bản đến nâng cao.",
    "slug": "thue",
    "level": 1,
    "isActive": true,
    "parent": "737869cfd21c489fb61dbae9",
    "icon": "BookOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947753Z",
    "updatedAt": "2026-06-16T16:38:22.947753Z",
    "__v": 0
  },
  {
    "_id": "b0d67fce54f148168f267991",
    "name": "Tài chính và kế toán khác",
    "description": "Bao gồm các chủ đề phổ biến về Tài chính và kế toán khác, từ cơ bản đến nâng cao.",
    "slug": "tai-chinh-va-ke-toan-khac",
    "level": 1,
    "isActive": true,
    "parent": "737869cfd21c489fb61dbae9",
    "icon": "GlobalOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947770Z",
    "updatedAt": "2026-06-16T16:38:22.947770Z",
    "__v": 0
  },
  {
    "_id": "094ddae833ac4590a223882a",
    "name": "CNTT & Phần mềm",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực CNTT & Phần mềm.",
    "slug": "cntt-phan-mem",
    "level": 0,
    "isActive": true,
    "parent": null,
    "icon": "ToolOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947791Z",
    "updatedAt": "2026-06-16T16:38:22.947791Z",
    "__v": 0
  },
  {
    "_id": "b61e0c5d35c247a5a7e7d7f8",
    "name": "Chứng chỉ CNTT",
    "description": "Bao gồm các chủ đề phổ biến về Chứng chỉ CNTT, từ cơ bản đến nâng cao.",
    "slug": "chung-chi-cntt",
    "level": 1,
    "isActive": true,
    "parent": "094ddae833ac4590a223882a",
    "icon": "BookOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947812Z",
    "updatedAt": "2026-06-16T16:38:22.947812Z",
    "__v": 0
  },
  {
    "_id": "f9f7765299534e099464feb6",
    "name": "Mạng & Bảo mật",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Mạng & Bảo mật.",
    "slug": "mang-bao-mat",
    "level": 1,
    "isActive": true,
    "parent": "094ddae833ac4590a223882a",
    "icon": "ExperimentOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947831Z",
    "updatedAt": "2026-06-16T16:38:22.947831Z",
    "__v": 0
  },
  {
    "_id": "17d40e684a1e4721a01e645c",
    "name": "Phần cứng",
    "description": "Bao gồm các chủ đề phổ biến về Phần cứng, từ cơ bản đến nâng cao.",
    "slug": "phan-cung",
    "level": 1,
    "isActive": true,
    "parent": "094ddae833ac4590a223882a",
    "icon": "GlobalOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947850Z",
    "updatedAt": "2026-06-16T16:38:22.947850Z",
    "__v": 0
  },
  {
    "_id": "1d5ab24f45c0444e994101fb",
    "name": "Hệ điều hành & Máy chủ",
    "description": "Danh mục Hệ điều hành & Máy chủ giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "he-dieu-hanh-may-chu",
    "level": 1,
    "isActive": true,
    "parent": "094ddae833ac4590a223882a",
    "icon": "GlobalOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947867Z",
    "updatedAt": "2026-06-16T16:38:22.947867Z",
    "__v": 0
  },
  {
    "_id": "74c41cf4500148f184abcbcd",
    "name": "CNTT & Phần mềm khác",
    "description": "Danh mục CNTT & Phần mềm khác giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "cntt-phan-mem-khac",
    "level": 1,
    "isActive": true,
    "parent": "094ddae833ac4590a223882a",
    "icon": "VideoCameraOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947888Z",
    "updatedAt": "2026-06-16T16:38:22.947888Z",
    "__v": 0
  },
  {
    "_id": "b156cbdfbb614fe0b5d3703d",
    "name": "Năng suất văn phòng",
    "description": "Danh mục Năng suất văn phòng giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "nang-suat-van-phong",
    "level": 0,
    "isActive": true,
    "parent": null,
    "icon": "CameraOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947908Z",
    "updatedAt": "2026-06-16T16:38:22.947908Z",
    "__v": 0
  },
  {
    "_id": "8db949235373435eb25b7451",
    "name": "Microsoft",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Microsoft.",
    "slug": "microsoft",
    "level": 1,
    "isActive": true,
    "parent": "b156cbdfbb614fe0b5d3703d",
    "icon": "CodeOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947931Z",
    "updatedAt": "2026-06-16T16:38:22.947931Z",
    "__v": 0
  },
  {
    "_id": "081e8ab8df044f7fad5a9df8",
    "name": "Apple",
    "description": "Các khóa học liên quan đến Apple, phù hợp cho người mới bắt đầu và người muốn nâng cao kỹ năng.",
    "slug": "apple",
    "level": 1,
    "isActive": true,
    "parent": "b156cbdfbb614fe0b5d3703d",
    "icon": "DatabaseOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947951Z",
    "updatedAt": "2026-06-16T16:38:22.947951Z",
    "__v": 0
  },
  {
    "_id": "0de7d1535c614954996887fb",
    "name": "Google",
    "description": "Danh mục Google giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "google",
    "level": 1,
    "isActive": true,
    "parent": "b156cbdfbb614fe0b5d3703d",
    "icon": "CodeOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947968Z",
    "updatedAt": "2026-06-16T16:38:22.947968Z",
    "__v": 0
  },
  {
    "_id": "c76d98f163c04d8cbf9f8289",
    "name": "SAP",
    "description": "Danh mục SAP giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "sap",
    "level": 1,
    "isActive": true,
    "parent": "b156cbdfbb614fe0b5d3703d",
    "icon": "VideoCameraOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.947984Z",
    "updatedAt": "2026-06-16T16:38:22.947984Z",
    "__v": 0
  },
  {
    "_id": "65e6ed72c7db4d4290132f8c",
    "name": "Oracle",
    "description": "Các khóa học liên quan đến Oracle, phù hợp cho người mới bắt đầu và người muốn nâng cao kỹ năng.",
    "slug": "oracle",
    "level": 1,
    "isActive": true,
    "parent": "b156cbdfbb614fe0b5d3703d",
    "icon": "VideoCameraOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948014Z",
    "updatedAt": "2026-06-16T16:38:22.948014Z",
    "__v": 0
  },
  {
    "_id": "22715225b39c4ab3bbdf0bfc",
    "name": "Năng suất văn phòng khác",
    "description": "Bao gồm các chủ đề phổ biến về Năng suất văn phòng khác, từ cơ bản đến nâng cao.",
    "slug": "nang-suat-van-phong-khac",
    "level": 1,
    "isActive": true,
    "parent": "b156cbdfbb614fe0b5d3703d",
    "icon": "CustomerServiceOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948030Z",
    "updatedAt": "2026-06-16T16:38:22.948030Z",
    "__v": 0
  },
  {
    "_id": "363d7b51c81e4734930f3b02",
    "name": "Phát triển cá nhân",
    "description": "Các khóa học liên quan đến Phát triển cá nhân, phù hợp cho người mới bắt đầu và người muốn nâng cao kỹ năng.",
    "slug": "phat-trien-ca-nhan",
    "level": 0,
    "isActive": true,
    "parent": null,
    "icon": "BulbOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948051Z",
    "updatedAt": "2026-06-16T16:38:22.948051Z",
    "__v": 0
  },
  {
    "_id": "23bab14ef03c450d8aa443ee",
    "name": "Chuyển hóa bản thân",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Chuyển hóa bản thân.",
    "slug": "chuyen-hoa-ban-than",
    "level": 1,
    "isActive": true,
    "parent": "363d7b51c81e4734930f3b02",
    "icon": "CodeOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948071Z",
    "updatedAt": "2026-06-16T16:38:22.948071Z",
    "__v": 0
  },
  {
    "_id": "edfb6fb6341c4a3fa1bae935",
    "name": "Năng suất cá nhân",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Năng suất cá nhân.",
    "slug": "nang-suat-ca-nhan",
    "level": 1,
    "isActive": true,
    "parent": "363d7b51c81e4734930f3b02",
    "icon": "ToolOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948090Z",
    "updatedAt": "2026-06-16T16:38:22.948090Z",
    "__v": 0
  },
  {
    "_id": "3d41f9156b8a4d5a99fc8af7",
    "name": "Năng lực lãnh đạo",
    "description": "Bao gồm các chủ đề phổ biến về Năng lực lãnh đạo, từ cơ bản đến nâng cao.",
    "slug": "nang-luc-lanh-dao",
    "level": 1,
    "isActive": true,
    "parent": "363d7b51c81e4734930f3b02",
    "icon": "CodeOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948108Z",
    "updatedAt": "2026-06-16T16:38:22.948108Z",
    "__v": 0
  },
  {
    "_id": "b0286b6370a74ed1908ece4b",
    "name": "Phát triển sự nghiệp",
    "description": "Danh mục Phát triển sự nghiệp giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "phat-trien-su-nghiep",
    "level": 1,
    "isActive": true,
    "parent": "363d7b51c81e4734930f3b02",
    "icon": "CustomerServiceOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948130Z",
    "updatedAt": "2026-06-16T16:38:22.948130Z",
    "__v": 0
  },
  {
    "_id": "1f82e24bba2042b99e98b380",
    "name": "Làm cha mẹ & Mối quan hệ",
    "description": "Danh mục Làm cha mẹ & Mối quan hệ giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "lam-cha-me-moi-quan-he",
    "level": 1,
    "isActive": true,
    "parent": "363d7b51c81e4734930f3b02",
    "icon": "VideoCameraOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948153Z",
    "updatedAt": "2026-06-16T16:38:22.948153Z",
    "__v": 0
  },
  {
    "_id": "5289d73fabd64a98a48c2144",
    "name": "Hạnh phúc",
    "description": "Bao gồm các chủ đề phổ biến về Hạnh phúc, từ cơ bản đến nâng cao.",
    "slug": "hanh-phuc",
    "level": 1,
    "isActive": true,
    "parent": "363d7b51c81e4734930f3b02",
    "icon": "BookOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948174Z",
    "updatedAt": "2026-06-16T16:38:22.948174Z",
    "__v": 0
  },
  {
    "_id": "a1c70ddc725248b28fc4e664",
    "name": "Các phương pháp bí truyền",
    "description": "Các khóa học liên quan đến Các phương pháp bí truyền, phù hợp cho người mới bắt đầu và người muốn nâng cao kỹ năng.",
    "slug": "cac-phuong-phap-bi-truyen",
    "level": 1,
    "isActive": true,
    "parent": "363d7b51c81e4734930f3b02",
    "icon": "BookOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948191Z",
    "updatedAt": "2026-06-16T16:38:22.948191Z",
    "__v": 0
  },
  {
    "_id": "a3a63807084c4eb890faeb67",
    "name": "Tôn giáo & Tâm linh",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Tôn giáo & Tâm linh.",
    "slug": "ton-giao-tam-linh",
    "level": 1,
    "isActive": true,
    "parent": "363d7b51c81e4734930f3b02",
    "icon": "RocketOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948211Z",
    "updatedAt": "2026-06-16T16:38:22.948211Z",
    "__v": 0
  },
  {
    "_id": "c3ed31a1a9d5400f9071f2b1",
    "name": "Xây dựng thương hiệu cá nhân",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Xây dựng thương hiệu cá nhân.",
    "slug": "xay-dung-thuong-hieu-ca-nhan",
    "level": 1,
    "isActive": true,
    "parent": "363d7b51c81e4734930f3b02",
    "icon": "ReadOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948231Z",
    "updatedAt": "2026-06-16T16:38:22.948231Z",
    "__v": 0
  },
  {
    "_id": "8f5d7bf332aa4fa197df3eb3",
    "name": "Khả năng sáng tạo",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Khả năng sáng tạo.",
    "slug": "kha-nang-sang-tao",
    "level": 1,
    "isActive": true,
    "parent": "363d7b51c81e4734930f3b02",
    "icon": "CameraOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948252Z",
    "updatedAt": "2026-06-16T16:38:22.948252Z",
    "__v": 0
  },
  {
    "_id": "455bc80019124936a47e84ca",
    "name": "Gây ảnh hưởng",
    "description": "Các khóa học liên quan đến Gây ảnh hưởng, phù hợp cho người mới bắt đầu và người muốn nâng cao kỹ năng.",
    "slug": "gay-anh-huong",
    "level": 1,
    "isActive": true,
    "parent": "363d7b51c81e4734930f3b02",
    "icon": "FormatPainterOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948274Z",
    "updatedAt": "2026-06-16T16:38:22.948274Z",
    "__v": 0
  },
  {
    "_id": "155e68f9b06c470cb4b3d452",
    "name": "Lòng tự tôn & Sự tự tin",
    "description": "Danh mục Lòng tự tôn & Sự tự tin giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "long-tu-ton-su-tu-tin",
    "level": 1,
    "isActive": true,
    "parent": "363d7b51c81e4734930f3b02",
    "icon": "BarChartOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948293Z",
    "updatedAt": "2026-06-16T16:38:22.948293Z",
    "__v": 0
  },
  {
    "_id": "05e702d31c0845f29fce68f9",
    "name": "Quản lý căng thẳng",
    "description": "Danh mục Quản lý căng thẳng giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "quan-ly-cang-thang",
    "level": 1,
    "isActive": true,
    "parent": "363d7b51c81e4734930f3b02",
    "icon": "BarChartOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948315Z",
    "updatedAt": "2026-06-16T16:38:22.948315Z",
    "__v": 0
  },
  {
    "_id": "dd506e94603d4360a708c624",
    "name": "Kỹ năng học tập và ghi nhớ",
    "description": "Bao gồm các chủ đề phổ biến về Kỹ năng học tập và ghi nhớ, từ cơ bản đến nâng cao.",
    "slug": "ky-nang-hoc-tap-va-ghi-nho",
    "level": 1,
    "isActive": true,
    "parent": "363d7b51c81e4734930f3b02",
    "icon": "FormatPainterOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948340Z",
    "updatedAt": "2026-06-16T16:38:22.948340Z",
    "__v": 0
  },
  {
    "_id": "06c68a7cf4f64cdea23ebff0",
    "name": "Động lực",
    "description": "Bao gồm các chủ đề phổ biến về Động lực, từ cơ bản đến nâng cao.",
    "slug": "dong-luc",
    "level": 1,
    "isActive": true,
    "parent": "363d7b51c81e4734930f3b02",
    "icon": "SafetyCertificateOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948362Z",
    "updatedAt": "2026-06-16T16:38:22.948362Z",
    "__v": 0
  },
  {
    "_id": "90502b6c56e34fb0b1b79799",
    "name": "Phát triển cá nhân khác",
    "description": "Danh mục Phát triển cá nhân khác giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "phat-trien-ca-nhan-khac",
    "level": 1,
    "isActive": true,
    "parent": "363d7b51c81e4734930f3b02",
    "icon": "BookOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948380Z",
    "updatedAt": "2026-06-16T16:38:22.948380Z",
    "__v": 0
  },
  {
    "_id": "865240bea5f541b5afd0fccc",
    "name": "Thiết kế",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Thiết kế.",
    "slug": "thiet-ke",
    "level": 0,
    "isActive": true,
    "parent": null,
    "icon": "LaptopOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948402Z",
    "updatedAt": "2026-06-16T16:38:22.948402Z",
    "__v": 0
  },
  {
    "_id": "f92cfb8d67fe4effa8b75ced",
    "name": "Thiết kế web",
    "description": "Các khóa học liên quan đến Thiết kế web, phù hợp cho người mới bắt đầu và người muốn nâng cao kỹ năng.",
    "slug": "thiet-ke-web",
    "level": 1,
    "isActive": true,
    "parent": "865240bea5f541b5afd0fccc",
    "icon": "BarChartOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948421Z",
    "updatedAt": "2026-06-16T16:38:22.948421Z",
    "__v": 0
  },
  {
    "_id": "22b48bd3a69d4b2db1f7df9e",
    "name": "Thiết kế & Minh họa đồ họa",
    "description": "Danh mục Thiết kế & Minh họa đồ họa giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "thiet-ke-minh-hoa-do-hoa",
    "level": 1,
    "isActive": true,
    "parent": "865240bea5f541b5afd0fccc",
    "icon": "BarChartOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948440Z",
    "updatedAt": "2026-06-16T16:38:22.948440Z",
    "__v": 0
  },
  {
    "_id": "29f08823fb5e40c38ea47721",
    "name": "Công cụ thiết kế",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Công cụ thiết kế.",
    "slug": "cong-cu-thiet-ke",
    "level": 1,
    "isActive": true,
    "parent": "865240bea5f541b5afd0fccc",
    "icon": "GlobalOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948466Z",
    "updatedAt": "2026-06-16T16:38:22.948466Z",
    "__v": 0
  },
  {
    "_id": "918adcc189374c05a64e2d24",
    "name": "Thiết kế trải nghiệm người dùng",
    "description": "Bao gồm các chủ đề phổ biến về Thiết kế trải nghiệm người dùng, từ cơ bản đến nâng cao.",
    "slug": "thiet-ke-trai-nghiem-nguoi-dung",
    "level": 1,
    "isActive": true,
    "parent": "865240bea5f541b5afd0fccc",
    "icon": "LaptopOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948485Z",
    "updatedAt": "2026-06-16T16:38:22.948485Z",
    "__v": 0
  },
  {
    "_id": "d4eaf54f808746fdb5dd8b0f",
    "name": "Thiết kế trò chơi",
    "description": "Các khóa học liên quan đến Thiết kế trò chơi, phù hợp cho người mới bắt đầu và người muốn nâng cao kỹ năng.",
    "slug": "thiet-ke-tro-choi",
    "level": 1,
    "isActive": true,
    "parent": "865240bea5f541b5afd0fccc",
    "icon": "ExperimentOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948506Z",
    "updatedAt": "2026-06-16T16:38:22.948506Z",
    "__v": 0
  },
  {
    "_id": "7a58b446134146dcb2f19b24",
    "name": "3D & Hoạt hình",
    "description": "Các khóa học liên quan đến 3D & Hoạt hình, phù hợp cho người mới bắt đầu và người muốn nâng cao kỹ năng.",
    "slug": "3d-hoat-hinh",
    "level": 1,
    "isActive": true,
    "parent": "865240bea5f541b5afd0fccc",
    "icon": "ToolOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948525Z",
    "updatedAt": "2026-06-16T16:38:22.948525Z",
    "__v": 0
  },
  {
    "_id": "7181fa5e11f740ca891e34bf",
    "name": "Thiết kế thời trang",
    "description": "Bao gồm các chủ đề phổ biến về Thiết kế thời trang, từ cơ bản đến nâng cao.",
    "slug": "thiet-ke-thoi-trang",
    "level": 1,
    "isActive": true,
    "parent": "865240bea5f541b5afd0fccc",
    "icon": "CameraOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948546Z",
    "updatedAt": "2026-06-16T16:38:22.948546Z",
    "__v": 0
  },
  {
    "_id": "b5aadf1aeb8440eb8e571c4a",
    "name": "Thiết kế kiến trúc",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Thiết kế kiến trúc.",
    "slug": "thiet-ke-kien-truc",
    "level": 1,
    "isActive": true,
    "parent": "865240bea5f541b5afd0fccc",
    "icon": "FormatPainterOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948567Z",
    "updatedAt": "2026-06-16T16:38:22.948567Z",
    "__v": 0
  },
  {
    "_id": "1ec0dc63fde146a296f4791b",
    "name": "Thiết kế nội thất",
    "description": "Các khóa học liên quan đến Thiết kế nội thất, phù hợp cho người mới bắt đầu và người muốn nâng cao kỹ năng.",
    "slug": "thiet-ke-noi-that",
    "level": 1,
    "isActive": true,
    "parent": "865240bea5f541b5afd0fccc",
    "icon": "RocketOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948587Z",
    "updatedAt": "2026-06-16T16:38:22.948587Z",
    "__v": 0
  },
  {
    "_id": "2c0059917e234e77b6882f6c",
    "name": "Thiết kế khác",
    "description": "Các khóa học liên quan đến Thiết kế khác, phù hợp cho người mới bắt đầu và người muốn nâng cao kỹ năng.",
    "slug": "thiet-ke-khac",
    "level": 1,
    "isActive": true,
    "parent": "865240bea5f541b5afd0fccc",
    "icon": "TranslationOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948605Z",
    "updatedAt": "2026-06-16T16:38:22.948605Z",
    "__v": 0
  },
  {
    "_id": "5a5f3aa1b20e45da8c5fb293",
    "name": "Marketing",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Marketing.",
    "slug": "marketing",
    "level": 0,
    "isActive": true,
    "parent": null,
    "icon": "BarChartOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948623Z",
    "updatedAt": "2026-06-16T16:38:22.948623Z",
    "__v": 0
  },
  {
    "_id": "211744291eaa4d96b4e7c8d4",
    "name": "Marketing kỹ thuật số",
    "description": "Các khóa học liên quan đến Marketing kỹ thuật số, phù hợp cho người mới bắt đầu và người muốn nâng cao kỹ năng.",
    "slug": "marketing-ky-thuat-so",
    "level": 1,
    "isActive": true,
    "parent": "5a5f3aa1b20e45da8c5fb293",
    "icon": "BookOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948640Z",
    "updatedAt": "2026-06-16T16:38:22.948640Z",
    "__v": 0
  },
  {
    "_id": "c99defca91624a29afa86373",
    "name": "SEO",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực SEO.",
    "slug": "seo",
    "level": 1,
    "isActive": true,
    "parent": "5a5f3aa1b20e45da8c5fb293",
    "icon": "BarChartOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948659Z",
    "updatedAt": "2026-06-16T16:38:22.948659Z",
    "__v": 0
  },
  {
    "_id": "e29c02484f0f400b8bb2eb7b",
    "name": "Marketing trên mạng xã hội",
    "description": "Danh mục Marketing trên mạng xã hội giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "marketing-tren-mang-xa-hoi",
    "level": 1,
    "isActive": true,
    "parent": "5a5f3aa1b20e45da8c5fb293",
    "icon": "VideoCameraOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948675Z",
    "updatedAt": "2026-06-16T16:38:22.948675Z",
    "__v": 0
  },
  {
    "_id": "d77e15c6026948d497fb438a",
    "name": "Xây dựng thương hiệu",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Xây dựng thương hiệu.",
    "slug": "xay-dung-thuong-hieu",
    "level": 1,
    "isActive": true,
    "parent": "5a5f3aa1b20e45da8c5fb293",
    "icon": "SafetyCertificateOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948695Z",
    "updatedAt": "2026-06-16T16:38:22.948695Z",
    "__v": 0
  },
  {
    "_id": "38bb3b3048f34c2e9f3a7b95",
    "name": "Nguyên tắc cơ bản về marketing",
    "description": "Bao gồm các chủ đề phổ biến về Nguyên tắc cơ bản về marketing, từ cơ bản đến nâng cao.",
    "slug": "nguyen-tac-co-ban-ve-marketing",
    "level": 1,
    "isActive": true,
    "parent": "5a5f3aa1b20e45da8c5fb293",
    "icon": "CameraOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948717Z",
    "updatedAt": "2026-06-16T16:38:22.948717Z",
    "__v": 0
  },
  {
    "_id": "f77279eee569465590a76730",
    "name": "Phân tích và tự động hóa marketing",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Phân tích và tự động hóa marketing.",
    "slug": "phan-tich-va-tu-dong-hoa-marketing",
    "level": 1,
    "isActive": true,
    "parent": "5a5f3aa1b20e45da8c5fb293",
    "icon": "CodeOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948739Z",
    "updatedAt": "2026-06-16T16:38:22.948739Z",
    "__v": 0
  },
  {
    "_id": "16b65b0e92bb4e99a3b91475",
    "name": "Quan hệ công chúng",
    "description": "Danh mục Quan hệ công chúng giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "quan-he-cong-chung",
    "level": 1,
    "isActive": true,
    "parent": "5a5f3aa1b20e45da8c5fb293",
    "icon": "VideoCameraOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948761Z",
    "updatedAt": "2026-06-16T16:38:22.948761Z",
    "__v": 0
  },
  {
    "_id": "c8f52c7fa5d540d0a1c16d3c",
    "name": "Quảng cáo có trả phí",
    "description": "Danh mục Quảng cáo có trả phí giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "quang-cao-co-tra-phi",
    "level": 1,
    "isActive": true,
    "parent": "5a5f3aa1b20e45da8c5fb293",
    "icon": "LaptopOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948781Z",
    "updatedAt": "2026-06-16T16:38:22.948781Z",
    "__v": 0
  },
  {
    "_id": "f876857c165640cca41215f3",
    "name": "Marketing qua video và trên thiết bị di động",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Marketing qua video và trên thiết bị di động.",
    "slug": "marketing-qua-video-va-tren-thiet-bi-di-dong",
    "level": 1,
    "isActive": true,
    "parent": "5a5f3aa1b20e45da8c5fb293",
    "icon": "ToolOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948806Z",
    "updatedAt": "2026-06-16T16:38:22.948806Z",
    "__v": 0
  },
  {
    "_id": "4ba675ac94b0412d876f3645",
    "name": "Marketing qua nội dung",
    "description": "Các khóa học liên quan đến Marketing qua nội dung, phù hợp cho người mới bắt đầu và người muốn nâng cao kỹ năng.",
    "slug": "marketing-qua-noi-dung",
    "level": 1,
    "isActive": true,
    "parent": "5a5f3aa1b20e45da8c5fb293",
    "icon": "RocketOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948830Z",
    "updatedAt": "2026-06-16T16:38:22.948830Z",
    "__v": 0
  },
  {
    "_id": "0c5ce94c12da4bc082893231",
    "name": "Hack tăng trưởng",
    "description": "Danh mục Hack tăng trưởng giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "hack-tang-truong",
    "level": 1,
    "isActive": true,
    "parent": "5a5f3aa1b20e45da8c5fb293",
    "icon": "ExperimentOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948849Z",
    "updatedAt": "2026-06-16T16:38:22.948849Z",
    "__v": 0
  },
  {
    "_id": "a52ee14f19f94f5fa7f770d2",
    "name": "Marketing liên kết",
    "description": "Bao gồm các chủ đề phổ biến về Marketing liên kết, từ cơ bản đến nâng cao.",
    "slug": "marketing-lien-ket",
    "level": 1,
    "isActive": true,
    "parent": "5a5f3aa1b20e45da8c5fb293",
    "icon": "SafetyCertificateOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948868Z",
    "updatedAt": "2026-06-16T16:38:22.948868Z",
    "__v": 0
  },
  {
    "_id": "9732f33af7f94109800f2fee",
    "name": "Marketing sản phẩm",
    "description": "Các khóa học liên quan đến Marketing sản phẩm, phù hợp cho người mới bắt đầu và người muốn nâng cao kỹ năng.",
    "slug": "marketing-san-pham",
    "level": 1,
    "isActive": true,
    "parent": "5a5f3aa1b20e45da8c5fb293",
    "icon": "CustomerServiceOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948887Z",
    "updatedAt": "2026-06-16T16:38:22.948887Z",
    "__v": 0
  },
  {
    "_id": "794dc90f8b7a4bc9b8be4ce9",
    "name": "Marketing khác",
    "description": "Bao gồm các chủ đề phổ biến về Marketing khác, từ cơ bản đến nâng cao.",
    "slug": "marketing-khac",
    "level": 1,
    "isActive": true,
    "parent": "5a5f3aa1b20e45da8c5fb293",
    "icon": "RocketOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948906Z",
    "updatedAt": "2026-06-16T16:38:22.948906Z",
    "__v": 0
  },
  {
    "_id": "24f81b677f3a475ab956b01f",
    "name": "Phong cách sống",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Phong cách sống.",
    "slug": "phong-cach-song",
    "level": 0,
    "isActive": true,
    "parent": null,
    "icon": "ExperimentOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948924Z",
    "updatedAt": "2026-06-16T16:38:22.948924Z",
    "__v": 0
  },
  {
    "_id": "e6dd0d5d399842079074fe74",
    "name": "Nghệ thuật & Đồ thủ công",
    "description": "Bao gồm các chủ đề phổ biến về Nghệ thuật & Đồ thủ công, từ cơ bản đến nâng cao.",
    "slug": "nghe-thuat-do-thu-cong",
    "level": 1,
    "isActive": true,
    "parent": "24f81b677f3a475ab956b01f",
    "icon": "GlobalOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948948Z",
    "updatedAt": "2026-06-16T16:38:22.948948Z",
    "__v": 0
  },
  {
    "_id": "f4caa244df7f4093bd084c79",
    "name": "Làm đẹp & Trang điểm",
    "description": "Danh mục Làm đẹp & Trang điểm giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "lam-dep-trang-diem",
    "level": 1,
    "isActive": true,
    "parent": "24f81b677f3a475ab956b01f",
    "icon": "SafetyCertificateOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948970Z",
    "updatedAt": "2026-06-16T16:38:22.948970Z",
    "__v": 0
  },
  {
    "_id": "3c3dd6643cae40b8b9fc7130",
    "name": "Các phương pháp bí truyền",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Các phương pháp bí truyền.",
    "slug": "cac-phuong-phap-bi-truyen",
    "level": 1,
    "isActive": true,
    "parent": "24f81b677f3a475ab956b01f",
    "icon": "BarChartOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.948990Z",
    "updatedAt": "2026-06-16T16:38:22.948990Z",
    "__v": 0
  },
  {
    "_id": "f8635e7ec5a643678015e1f3",
    "name": "Thực phẩm & Đồ uống",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Thực phẩm & Đồ uống.",
    "slug": "thuc-pham-do-uong",
    "level": 1,
    "isActive": true,
    "parent": "24f81b677f3a475ab956b01f",
    "icon": "TranslationOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949014Z",
    "updatedAt": "2026-06-16T16:38:22.949014Z",
    "__v": 0
  },
  {
    "_id": "d4e97cb805764a3eae3d124e",
    "name": "Chơi game",
    "description": "Danh mục Chơi game giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "choi-game",
    "level": 1,
    "isActive": true,
    "parent": "24f81b677f3a475ab956b01f",
    "icon": "CloudOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949034Z",
    "updatedAt": "2026-06-16T16:38:22.949034Z",
    "__v": 0
  },
  {
    "_id": "3054db15b43349cb9c7834a7",
    "name": "Cải tạo nhà & Làm vườn",
    "description": "Danh mục Cải tạo nhà & Làm vườn giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "cai-tao-nha-lam-vuon",
    "level": 1,
    "isActive": true,
    "parent": "24f81b677f3a475ab956b01f",
    "icon": "CodeOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949050Z",
    "updatedAt": "2026-06-16T16:38:22.949050Z",
    "__v": 0
  },
  {
    "_id": "12608e48e42f447ebc5bccf9",
    "name": "Chăm sóc & Huấn luyện thú cưng",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Chăm sóc & Huấn luyện thú cưng.",
    "slug": "cham-soc-huan-luyen-thu-cung",
    "level": 1,
    "isActive": true,
    "parent": "24f81b677f3a475ab956b01f",
    "icon": "ToolOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949070Z",
    "updatedAt": "2026-06-16T16:38:22.949070Z",
    "__v": 0
  },
  {
    "_id": "74e31984b53f4600a0a7a7e6",
    "name": "Du lịch",
    "description": "Danh mục Du lịch giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "du-lich",
    "level": 1,
    "isActive": true,
    "parent": "24f81b677f3a475ab956b01f",
    "icon": "MobileOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949091Z",
    "updatedAt": "2026-06-16T16:38:22.949091Z",
    "__v": 0
  },
  {
    "_id": "b54e1ccf2907453ea04507f7",
    "name": "Phong cách sống khác",
    "description": "Bao gồm các chủ đề phổ biến về Phong cách sống khác, từ cơ bản đến nâng cao.",
    "slug": "phong-cach-song-khac",
    "level": 1,
    "isActive": true,
    "parent": "24f81b677f3a475ab956b01f",
    "icon": "CameraOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949108Z",
    "updatedAt": "2026-06-16T16:38:22.949108Z",
    "__v": 0
  },
  {
    "_id": "42a41041544d4eb38f9518a7",
    "name": "Nhiếp ảnh & Video",
    "description": "Danh mục Nhiếp ảnh & Video giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "nhiep-anh-video",
    "level": 0,
    "isActive": true,
    "parent": null,
    "icon": "LaptopOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949130Z",
    "updatedAt": "2026-06-16T16:38:22.949130Z",
    "__v": 0
  },
  {
    "_id": "2e1e88e5a4c2450286683777",
    "name": "Nhiếp ảnh kỹ thuật số",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Nhiếp ảnh kỹ thuật số.",
    "slug": "nhiep-anh-ky-thuat-so",
    "level": 1,
    "isActive": true,
    "parent": "42a41041544d4eb38f9518a7",
    "icon": "CloudOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949152Z",
    "updatedAt": "2026-06-16T16:38:22.949152Z",
    "__v": 0
  },
  {
    "_id": "1716370b5113407e8d34d180",
    "name": "Nhiếp ảnh",
    "description": "Bao gồm các chủ đề phổ biến về Nhiếp ảnh, từ cơ bản đến nâng cao.",
    "slug": "nhiep-anh",
    "level": 1,
    "isActive": true,
    "parent": "42a41041544d4eb38f9518a7",
    "icon": "BulbOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949173Z",
    "updatedAt": "2026-06-16T16:38:22.949173Z",
    "__v": 0
  },
  {
    "_id": "89f4782b0050418a88750a24",
    "name": "Nghệ thuật chụp ảnh chân dung",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Nghệ thuật chụp ảnh chân dung.",
    "slug": "nghe-thuat-chup-anh-chan-dung",
    "level": 1,
    "isActive": true,
    "parent": "42a41041544d4eb38f9518a7",
    "icon": "RocketOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949190Z",
    "updatedAt": "2026-06-16T16:38:22.949190Z",
    "__v": 0
  },
  {
    "_id": "5a2b048fe62d40769e8cd69e",
    "name": "Công cụ nhiếp ảnh",
    "description": "Danh mục Công cụ nhiếp ảnh giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "cong-cu-nhiep-anh",
    "level": 1,
    "isActive": true,
    "parent": "42a41041544d4eb38f9518a7",
    "icon": "BarChartOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949212Z",
    "updatedAt": "2026-06-16T16:38:22.949212Z",
    "__v": 0
  },
  {
    "_id": "f539f054f6cd4d4ea3f369f3",
    "name": "Nhiếp ảnh thương mại",
    "description": "Các khóa học liên quan đến Nhiếp ảnh thương mại, phù hợp cho người mới bắt đầu và người muốn nâng cao kỹ năng.",
    "slug": "nhiep-anh-thuong-mai",
    "level": 1,
    "isActive": true,
    "parent": "42a41041544d4eb38f9518a7",
    "icon": "ReadOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949232Z",
    "updatedAt": "2026-06-16T16:38:22.949232Z",
    "__v": 0
  },
  {
    "_id": "079f3b8721cc47fe8fc10d98",
    "name": "Thiết kế video",
    "description": "Bao gồm các chủ đề phổ biến về Thiết kế video, từ cơ bản đến nâng cao.",
    "slug": "thiet-ke-video",
    "level": 1,
    "isActive": true,
    "parent": "42a41041544d4eb38f9518a7",
    "icon": "VideoCameraOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949251Z",
    "updatedAt": "2026-06-16T16:38:22.949251Z",
    "__v": 0
  },
  {
    "_id": "433db8bf0d9a4315bca21975",
    "name": "Nhiếp ảnh & Video khác",
    "description": "Danh mục Nhiếp ảnh & Video khác giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "nhiep-anh-video-khac",
    "level": 1,
    "isActive": true,
    "parent": "42a41041544d4eb38f9518a7",
    "icon": "ReadOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949272Z",
    "updatedAt": "2026-06-16T16:38:22.949272Z",
    "__v": 0
  },
  {
    "_id": "b6a716c69c75454f972a12bc",
    "name": "Sức khỏe & Thể dục",
    "description": "Bao gồm các chủ đề phổ biến về Sức khỏe & Thể dục, từ cơ bản đến nâng cao.",
    "slug": "suc-khoe-the-duc",
    "level": 0,
    "isActive": true,
    "parent": null,
    "icon": "GlobalOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949293Z",
    "updatedAt": "2026-06-16T16:38:22.949293Z",
    "__v": 0
  },
  {
    "_id": "bc768b142d504c9dacb33a42",
    "name": "Thể dục",
    "description": "Danh mục Thể dục giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "the-duc",
    "level": 1,
    "isActive": true,
    "parent": "b6a716c69c75454f972a12bc",
    "icon": "DatabaseOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949313Z",
    "updatedAt": "2026-06-16T16:38:22.949313Z",
    "__v": 0
  },
  {
    "_id": "ed8540da3bda4548beb7d0d0",
    "name": "Sức khỏe tổng quát",
    "description": "Bao gồm các chủ đề phổ biến về Sức khỏe tổng quát, từ cơ bản đến nâng cao.",
    "slug": "suc-khoe-tong-quat",
    "level": 1,
    "isActive": true,
    "parent": "b6a716c69c75454f972a12bc",
    "icon": "GlobalOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949330Z",
    "updatedAt": "2026-06-16T16:38:22.949330Z",
    "__v": 0
  },
  {
    "_id": "ec93835489bb48adbcbf5da8",
    "name": "Thể thao",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Thể thao.",
    "slug": "the-thao",
    "level": 1,
    "isActive": true,
    "parent": "b6a716c69c75454f972a12bc",
    "icon": "ExperimentOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949352Z",
    "updatedAt": "2026-06-16T16:38:22.949352Z",
    "__v": 0
  },
  {
    "_id": "5fdb744b5e814aa083e67d84",
    "name": "Dinh dưỡng & Ăn kiêng",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Dinh dưỡng & Ăn kiêng.",
    "slug": "dinh-duong-an-kieng",
    "level": 1,
    "isActive": true,
    "parent": "b6a716c69c75454f972a12bc",
    "icon": "FormatPainterOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949369Z",
    "updatedAt": "2026-06-16T16:38:22.949369Z",
    "__v": 0
  },
  {
    "_id": "c348d800c37149fcb7d26e06",
    "name": "Yoga",
    "description": "Danh mục Yoga giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "yoga",
    "level": 1,
    "isActive": true,
    "parent": "b6a716c69c75454f972a12bc",
    "icon": "BarChartOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949389Z",
    "updatedAt": "2026-06-16T16:38:22.949389Z",
    "__v": 0
  },
  {
    "_id": "2eed332d7c9a40bcbe91dae5",
    "name": "Sức khỏe tinh thần",
    "description": "Bao gồm các chủ đề phổ biến về Sức khỏe tinh thần, từ cơ bản đến nâng cao.",
    "slug": "suc-khoe-tinh-than",
    "level": 1,
    "isActive": true,
    "parent": "b6a716c69c75454f972a12bc",
    "icon": "BarChartOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949404Z",
    "updatedAt": "2026-06-16T16:38:22.949404Z",
    "__v": 0
  },
  {
    "_id": "ae8f4968657b49efa631473f",
    "name": "Võ thuật & Tự vệ",
    "description": "Danh mục Võ thuật & Tự vệ giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "vo-thuat-tu-ve",
    "level": 1,
    "isActive": true,
    "parent": "b6a716c69c75454f972a12bc",
    "icon": "BulbOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949423Z",
    "updatedAt": "2026-06-16T16:38:22.949423Z",
    "__v": 0
  },
  {
    "_id": "90c31bcabe5d4a72a0c647b5",
    "name": "An toàn & Sơ cứu",
    "description": "Bao gồm các chủ đề phổ biến về An toàn & Sơ cứu, từ cơ bản đến nâng cao.",
    "slug": "an-toan-so-cuu",
    "level": 1,
    "isActive": true,
    "parent": "b6a716c69c75454f972a12bc",
    "icon": "CustomerServiceOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949443Z",
    "updatedAt": "2026-06-16T16:38:22.949443Z",
    "__v": 0
  },
  {
    "_id": "351375bfff2f434eb3e324c1",
    "name": "Khiêu vũ",
    "description": "Bao gồm các chủ đề phổ biến về Khiêu vũ, từ cơ bản đến nâng cao.",
    "slug": "khieu-vu",
    "level": 1,
    "isActive": true,
    "parent": "b6a716c69c75454f972a12bc",
    "icon": "SafetyCertificateOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949462Z",
    "updatedAt": "2026-06-16T16:38:22.949462Z",
    "__v": 0
  },
  {
    "_id": "e1033145f8974e909ba5d526",
    "name": "Thiền định",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Thiền định.",
    "slug": "thien-dinh",
    "level": 1,
    "isActive": true,
    "parent": "b6a716c69c75454f972a12bc",
    "icon": "LineChartOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949479Z",
    "updatedAt": "2026-06-16T16:38:22.949479Z",
    "__v": 0
  },
  {
    "_id": "371f8c15f556469bbb442ced",
    "name": "Sức khỏe & Thể dục khác",
    "description": "Bao gồm các chủ đề phổ biến về Sức khỏe & Thể dục khác, từ cơ bản đến nâng cao.",
    "slug": "suc-khoe-the-duc-khac",
    "level": 1,
    "isActive": true,
    "parent": "b6a716c69c75454f972a12bc",
    "icon": "DatabaseOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949497Z",
    "updatedAt": "2026-06-16T16:38:22.949497Z",
    "__v": 0
  },
  {
    "_id": "311bba936e0f43809234d865",
    "name": "Âm nhạc",
    "description": "Danh mục Âm nhạc giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "am-nhac",
    "level": 0,
    "isActive": true,
    "parent": null,
    "icon": "CodeOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949521Z",
    "updatedAt": "2026-06-16T16:38:22.949521Z",
    "__v": 0
  },
  {
    "_id": "81f27dc59e9b49f780c5df43",
    "name": "Nhạc cụ",
    "description": "Bao gồm các chủ đề phổ biến về Nhạc cụ, từ cơ bản đến nâng cao.",
    "slug": "nhac-cu",
    "level": 1,
    "isActive": true,
    "parent": "311bba936e0f43809234d865",
    "icon": "LaptopOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949543Z",
    "updatedAt": "2026-06-16T16:38:22.949543Z",
    "__v": 0
  },
  {
    "_id": "e8f134fcf02d4984ae537643",
    "name": "Sản xuất nhạc",
    "description": "Các khóa học liên quan đến Sản xuất nhạc, phù hợp cho người mới bắt đầu và người muốn nâng cao kỹ năng.",
    "slug": "san-xuat-nhac",
    "level": 1,
    "isActive": true,
    "parent": "311bba936e0f43809234d865",
    "icon": "TranslationOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949561Z",
    "updatedAt": "2026-06-16T16:38:22.949561Z",
    "__v": 0
  },
  {
    "_id": "76a582815dac43228bed5000",
    "name": "Nguyên tắc cơ bản về âm nhạc",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Nguyên tắc cơ bản về âm nhạc.",
    "slug": "nguyen-tac-co-ban-ve-am-nhac",
    "level": 1,
    "isActive": true,
    "parent": "311bba936e0f43809234d865",
    "icon": "ToolOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949580Z",
    "updatedAt": "2026-06-16T16:38:22.949580Z",
    "__v": 0
  },
  {
    "_id": "b246f2e055864185a5b0e17f",
    "name": "Thanh nhạc",
    "description": "Bao gồm các chủ đề phổ biến về Thanh nhạc, từ cơ bản đến nâng cao.",
    "slug": "thanh-nhac",
    "level": 1,
    "isActive": true,
    "parent": "311bba936e0f43809234d865",
    "icon": "SafetyCertificateOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949603Z",
    "updatedAt": "2026-06-16T16:38:22.949603Z",
    "__v": 0
  },
  {
    "_id": "9c437b0618dc40968eca6216",
    "name": "Kỹ thuật âm nhạc",
    "description": "Bao gồm các chủ đề phổ biến về Kỹ thuật âm nhạc, từ cơ bản đến nâng cao.",
    "slug": "ky-thuat-am-nhac",
    "level": 1,
    "isActive": true,
    "parent": "311bba936e0f43809234d865",
    "icon": "GlobalOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949620Z",
    "updatedAt": "2026-06-16T16:38:22.949620Z",
    "__v": 0
  },
  {
    "_id": "15669aa4e20547cfbeef07ae",
    "name": "Phần mềm âm nhạc",
    "description": "Các khóa học liên quan đến Phần mềm âm nhạc, phù hợp cho người mới bắt đầu và người muốn nâng cao kỹ năng.",
    "slug": "phan-mem-am-nhac",
    "level": 1,
    "isActive": true,
    "parent": "311bba936e0f43809234d865",
    "icon": "BarChartOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949639Z",
    "updatedAt": "2026-06-16T16:38:22.949639Z",
    "__v": 0
  },
  {
    "_id": "bed35588243b4cfebf4ff13e",
    "name": "Âm nhạc khác",
    "description": "Danh mục Âm nhạc khác giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "am-nhac-khac",
    "level": 1,
    "isActive": true,
    "parent": "311bba936e0f43809234d865",
    "icon": "LineChartOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949660Z",
    "updatedAt": "2026-06-16T16:38:22.949660Z",
    "__v": 0
  },
  {
    "_id": "abe7928614544565baf09e7b",
    "name": "Giảng dạy & Học thuật",
    "description": "Bao gồm các chủ đề phổ biến về Giảng dạy & Học thuật, từ cơ bản đến nâng cao.",
    "slug": "giang-day-hoc-thuat",
    "level": 0,
    "isActive": true,
    "parent": null,
    "icon": "CameraOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949678Z",
    "updatedAt": "2026-06-16T16:38:22.949678Z",
    "__v": 0
  },
  {
    "_id": "bd3b33cbaa17418c81f886da",
    "name": "Kỹ thuật",
    "description": "Danh mục Kỹ thuật giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "ky-thuat",
    "level": 1,
    "isActive": true,
    "parent": "abe7928614544565baf09e7b",
    "icon": "LineChartOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949699Z",
    "updatedAt": "2026-06-16T16:38:22.949699Z",
    "__v": 0
  },
  {
    "_id": "cd8d95bed4ed4827b2c48374",
    "name": "Nhân văn",
    "description": "Bao gồm các chủ đề phổ biến về Nhân văn, từ cơ bản đến nâng cao.",
    "slug": "nhan-van",
    "level": 1,
    "isActive": true,
    "parent": "abe7928614544565baf09e7b",
    "icon": "FormatPainterOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949716Z",
    "updatedAt": "2026-06-16T16:38:22.949716Z",
    "__v": 0
  },
  {
    "_id": "e1acf562ff744602a51032f7",
    "name": "Toán học",
    "description": "Bao gồm các chủ đề phổ biến về Toán học, từ cơ bản đến nâng cao.",
    "slug": "toan-hoc",
    "level": 1,
    "isActive": true,
    "parent": "abe7928614544565baf09e7b",
    "icon": "ExperimentOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949736Z",
    "updatedAt": "2026-06-16T16:38:22.949736Z",
    "__v": 0
  },
  {
    "_id": "c0359e318f5b438d90cc2f3d",
    "name": "Khoa học",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Khoa học.",
    "slug": "khoa-hoc",
    "level": 1,
    "isActive": true,
    "parent": "abe7928614544565baf09e7b",
    "icon": "CloudOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949756Z",
    "updatedAt": "2026-06-16T16:38:22.949756Z",
    "__v": 0
  },
  {
    "_id": "0e43a18537d946bfa39d085c",
    "name": "Giáo dục online",
    "description": "Các khóa học liên quan đến Giáo dục online, phù hợp cho người mới bắt đầu và người muốn nâng cao kỹ năng.",
    "slug": "giao-duc-online",
    "level": 1,
    "isActive": true,
    "parent": "abe7928614544565baf09e7b",
    "icon": "LineChartOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949773Z",
    "updatedAt": "2026-06-16T16:38:22.949773Z",
    "__v": 0
  },
  {
    "_id": "f4be63364f32401da53fbef1",
    "name": "Khoa học xã hội",
    "description": "Danh mục Khoa học xã hội giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "khoa-hoc-xa-hoi",
    "level": 1,
    "isActive": true,
    "parent": "abe7928614544565baf09e7b",
    "icon": "FormatPainterOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949795Z",
    "updatedAt": "2026-06-16T16:38:22.949795Z",
    "__v": 0
  },
  {
    "_id": "e6a6b3eb28634bb7bf7ff367",
    "name": "Học ngôn ngữ",
    "description": "Khám phá kiến thức và kỹ năng thực tế trong lĩnh vực Học ngôn ngữ.",
    "slug": "hoc-ngon-ngu",
    "level": 1,
    "isActive": true,
    "parent": "abe7928614544565baf09e7b",
    "icon": "BulbOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949814Z",
    "updatedAt": "2026-06-16T16:38:22.949814Z",
    "__v": 0
  },
  {
    "_id": "38e13c50cc704802afb33fb6",
    "name": "Đào tạo giảng viên",
    "description": "Danh mục Đào tạo giảng viên giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "dao-tao-giang-vien",
    "level": 1,
    "isActive": true,
    "parent": "abe7928614544565baf09e7b",
    "icon": "SafetyCertificateOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949832Z",
    "updatedAt": "2026-06-16T16:38:22.949832Z",
    "__v": 0
  },
  {
    "_id": "3546374edcb745a7a573b2e7",
    "name": "Luyện thi",
    "description": "Danh mục Luyện thi giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "luyen-thi",
    "level": 1,
    "isActive": true,
    "parent": "abe7928614544565baf09e7b",
    "icon": "CodeOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949850Z",
    "updatedAt": "2026-06-16T16:38:22.949850Z",
    "__v": 0
  },
  {
    "_id": "008a69d81b1041f89cae2e30",
    "name": "Giảng dạy & học thuật khác",
    "description": "Danh mục Giảng dạy & học thuật khác giúp người học phát triển kỹ năng phục vụ học tập và công việc.",
    "slug": "giang-day-hoc-thuat-khac",
    "level": 1,
    "isActive": true,
    "parent": "abe7928614544565baf09e7b",
    "icon": "VideoCameraOutlined",
    "createdBy": {
      "_id": "69d514eb23fb41760ae187e9",
      "email": "admin@gmail.com"
    },
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2026-06-16T16:38:22.949867Z",
    "updatedAt": "2026-06-16T16:38:22.949867Z",
    "__v": 0
  }
]

export const AUTHORS = [
  {
    "_id": "2bdc862179e83ad4b2707d55",
    "name": "Lê Thị Bích Thuận",
    "email": "le-thi-bich-thuan-256726696@udemy.local",
    "password": "$2a$10$gFCxWhOjhS5LlhBfhbOQIeTGUYXLNAr5qc31mtrCCfmyG9VaXxOAe",
    "roleName": "TEACHER",
    "avatar": "256726696_059b_3-1781629885.jpg",
    "udemyId": "256726696",
    "deletedAt": null,
    "isDeleted": false,
    "__v": 0,
    "createdAt": "2026-04-07T14:30:03.922Z",
    "updatedAt": "2026-04-07T14:30:03.922Z"
  }
]
