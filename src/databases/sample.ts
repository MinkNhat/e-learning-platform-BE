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

export const CATEGORIES = [{
  "_id": "6a1fed8e821e84b5f6c31567",
  "name": "Công nghệ thông tin",
  "description": "Ngành công nghệ, kỹ  thuật",
  "slug": "cong-nghe-thong-tin",
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
  "createdAt": "2026-06-03T09:02:06.096Z",
  "updatedAt": "2026-06-03T09:02:06.096Z",
  "__v": 0
},
{
  "_id": "6a1fedad821e84b5f6c31570",
  "name": "Ngoại ngữ",
  "description": "Các ngành liên quan đến ngôn ngữ, ngoại ngữ",
  "slug": "ngoai-ngu",
  "level": 0,
  "isActive": true,
  "parent": null,
  "icon": "TranslationOutlined",
  "createdBy": {
    "_id": "69d514eb23fb41760ae187e9",
    "email": "admin@gmail.com"
  },
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2026-06-03T09:02:37.691Z",
  "updatedAt": "2026-06-03T09:02:37.691Z",
  "__v": 0
},
{
  "_id": "6a1fedcf821e84b5f6c31579",
  "name": "Thiết kế",
  "description": "Bao gồm thiết kế đồ hoạ, video, ...",
  "slug": "thiet-ke",
  "level": 0,
  "isActive": true,
  "parent": null,
  "icon": "FormatPainterOutlined",
  "createdBy": {
    "_id": "69d514eb23fb41760ae187e9",
    "email": "admin@gmail.com"
  },
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2026-06-03T09:03:11.210Z",
  "updatedAt": "2026-06-03T09:03:11.210Z",
  "__v": 0
},
{
  "_id": "6a1fedeb821e84b5f6c31582",
  "name": "Kinh doanh",
  "description": "Các ngành liên quan đến việc kinh doanh",
  "slug": "kinh-doanh",
  "level": 0,
  "isActive": true,
  "parent": null,
  "icon": "DollarCircleOutlined",
  "createdBy": {
    "_id": "69d514eb23fb41760ae187e9",
    "email": "admin@gmail.com"
  },
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2026-06-03T09:03:39.386Z",
  "updatedAt": "2026-06-03T09:03:48.705Z",
  "__v": 0,
  "updatedBy": {
    "_id": "69d514eb23fb41760ae187e9",
    "email": "admin@gmail.com"
  }
},
{
  "_id": "6a1fee09821e84b5f6c31593",
  "name": "Tài chính",
  "description": "Các ngành liên quan đến tài chính, thị trường",
  "slug": "tai-chinh",
  "level": 0,
  "isActive": true,
  "parent": null,
  "icon": "BankOutlined",
  "createdBy": {
    "_id": "69d514eb23fb41760ae187e9",
    "email": "admin@gmail.com"
  },
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2026-06-03T09:04:09.719Z",
  "updatedAt": "2026-06-03T09:04:09.719Z",
  "__v": 0
},
{
  "_id": "6a1fee21821e84b5f6c3159c",
  "name": "Kỹ năng mềm",
  "description": "Các kỹ năng mềm cần thiết cho công việc hằng ngày",
  "slug": "ky-nang-mem",
  "level": 0,
  "isActive": true,
  "parent": null,
  "icon": "SmileOutlined",
  "createdBy": {
    "_id": "69d514eb23fb41760ae187e9",
    "email": "admin@gmail.com"
  },
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2026-06-03T09:04:33.741Z",
  "updatedAt": "2026-06-03T09:04:33.741Z",
  "__v": 0
},
{
  "_id": "6a1fee36821e84b5f6c315a7",
  "name": "Lập trình Web",
  "slug": "lap-trinh-web",
  "level": 1,
  "isActive": true,
  "parent": "6a1fed8e821e84b5f6c31567",
  "icon": "CodeOutlined",
  "createdBy": {
    "_id": "69d514eb23fb41760ae187e9",
    "email": "admin@gmail.com"
  },
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2026-06-03T09:04:54.361Z",
  "updatedAt": "2026-06-03T09:04:54.361Z",
  "__v": 0
},
{
  "_id": "6a1fee40821e84b5f6c315b3",
  "name": "Trí tuệ nhân tạo",
  "slug": "tri-tue-nhan-tao",
  "level": 1,
  "isActive": true,
  "parent": "6a1fed8e821e84b5f6c31567",
  "icon": "RobotOutlined",
  "createdBy": {
    "_id": "69d514eb23fb41760ae187e9",
    "email": "admin@gmail.com"
  },
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2026-06-03T09:05:04.620Z",
  "updatedAt": "2026-06-03T09:05:04.620Z",
  "__v": 0
},
{
  "_id": "6a1fee51821e84b5f6c315bf",
  "name": "Khoa học dữ liệu",
  "slug": "khoa-hoc-du-lieu",
  "level": 1,
  "isActive": true,
  "parent": "6a1fed8e821e84b5f6c31567",
  "icon": "DatabaseOutlined",
  "createdBy": {
    "_id": "69d514eb23fb41760ae187e9",
    "email": "admin@gmail.com"
  },
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2026-06-03T09:05:21.373Z",
  "updatedAt": "2026-06-03T09:05:21.373Z",
  "__v": 0
},
{
  "_id": "6a1fee67821e84b5f6c315cb",
  "name": "Tiếng Anh",
  "slug": "tieng-anh",
  "level": 1,
  "isActive": true,
  "parent": "6a1fedad821e84b5f6c31570",
  "icon": "GlobalOutlined",
  "createdBy": {
    "_id": "69d514eb23fb41760ae187e9",
    "email": "admin@gmail.com"
  },
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2026-06-03T09:05:43.009Z",
  "updatedAt": "2026-06-03T09:05:43.009Z",
  "__v": 0
},
{
  "_id": "6a1fee70821e84b5f6c315d7",
  "name": "Tiếng Trung",
  "slug": "tieng-trung",
  "level": 1,
  "isActive": true,
  "parent": "6a1fedad821e84b5f6c31570",
  "icon": "ReadOutlined",
  "createdBy": {
    "_id": "69d514eb23fb41760ae187e9",
    "email": "admin@gmail.com"
  },
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2026-06-03T09:05:52.914Z",
  "updatedAt": "2026-06-03T09:05:52.914Z",
  "__v": 0
},
{
  "_id": "6a1fee81821e84b5f6c315e3",
  "name": "Tiếng Hàn nâng cao",
  "slug": "tieng-han-nang-cao",
  "level": 1,
  "isActive": true,
  "parent": "6a1fedad821e84b5f6c31570",
  "icon": "CustomerServiceOutlined",
  "createdBy": {
    "_id": "69d514eb23fb41760ae187e9",
    "email": "admin@gmail.com"
  },
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2026-06-03T09:06:09.491Z",
  "updatedAt": "2026-06-03T09:06:09.491Z",
  "__v": 0
},
{
  "_id": "6a1fee8d821e84b5f6c315ef",
  "name": "Thiết kế Đồ hoạ",
  "slug": "thiet-ke-djo-hoa",
  "level": 1,
  "isActive": true,
  "parent": "6a1fedcf821e84b5f6c31579",
  "icon": "BgColorsOutlined",
  "createdBy": {
    "_id": "69d514eb23fb41760ae187e9",
    "email": "admin@gmail.com"
  },
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2026-06-03T09:06:21.898Z",
  "updatedAt": "2026-06-03T09:06:21.898Z",
  "__v": 0
},
{
  "_id": "6a1fee98821e84b5f6c315fb",
  "name": "UI/UX",
  "slug": "uiux",
  "level": 1,
  "isActive": true,
  "parent": "6a1fedcf821e84b5f6c31579",
  "icon": "AppstoreOutlined",
  "createdBy": {
    "_id": "69d514eb23fb41760ae187e9",
    "email": "admin@gmail.com"
  },
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2026-06-03T09:06:32.492Z",
  "updatedAt": "2026-06-03T09:06:32.492Z",
  "__v": 0
},
{
  "_id": "6a1feea8821e84b5f6c31607",
  "name": "Thiết kế và in 3D",
  "slug": "thiet-ke-va-in-3d",
  "level": 1,
  "isActive": true,
  "parent": "6a1fedcf821e84b5f6c31579",
  "icon": "PictureOutlined",
  "createdBy": {
    "_id": "69d514eb23fb41760ae187e9",
    "email": "admin@gmail.com"
  },
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2026-06-03T09:06:48.322Z",
  "updatedAt": "2026-06-03T09:06:48.322Z",
  "__v": 0
},
{
  "_id": "6a1feeb8821e84b5f6c31613",
  "name": "Chỉnh sửa ảnh và video cơ bản",
  "slug": "chinh-sua-anh-va-video-co-ban",
  "level": 1,
  "isActive": true,
  "parent": "6a1fedcf821e84b5f6c31579",
  "icon": "VideoCameraOutlined",
  "createdBy": {
    "_id": "69d514eb23fb41760ae187e9",
    "email": "admin@gmail.com"
  },
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2026-06-03T09:07:04.846Z",
  "updatedAt": "2026-06-03T09:07:04.846Z",
  "__v": 0
},
{
  "_id": "6a1feec6821e84b5f6c3161f",
  "name": "Marketing",
  "slug": "marketing",
  "level": 1,
  "isActive": true,
  "parent": "6a1fedeb821e84b5f6c31582",
  "icon": "BarChartOutlined",
  "createdBy": {
    "_id": "69d514eb23fb41760ae187e9",
    "email": "admin@gmail.com"
  },
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2026-06-03T09:07:18.025Z",
  "updatedAt": "2026-06-03T09:07:18.025Z",
  "__v": 0
},
{
  "_id": "6a1feed2821e84b5f6c3162b",
  "name": "Quản trị doanh nghiệp",
  "slug": "quan-tri-doanh-nghiep",
  "level": 1,
  "isActive": true,
  "parent": "6a1fedeb821e84b5f6c31582",
  "icon": "ShopOutlined",
  "createdBy": {
    "_id": "69d514eb23fb41760ae187e9",
    "email": "admin@gmail.com"
  },
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2026-06-03T09:07:30.486Z",
  "updatedAt": "2026-06-03T09:07:30.486Z",
  "__v": 0
},
{
  "_id": "6a1feee3821e84b5f6c31637",
  "name": "Đầu tư chứng khoán",
  "slug": "djau-tu-chung-khoan",
  "level": 1,
  "isActive": true,
  "parent": "6a1fee09821e84b5f6c31593",
  "icon": "LineChartOutlined",
  "createdBy": {
    "_id": "69d514eb23fb41760ae187e9",
    "email": "admin@gmail.com"
  },
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2026-06-03T09:07:47.342Z",
  "updatedAt": "2026-06-03T09:07:47.342Z",
  "__v": 0
},
{
  "_id": "6a1feef2821e84b5f6c31643",
  "name": "Quản lý tài chính cá nhân",
  "slug": "quan-ly-tai-chinh-ca-nhan",
  "level": 1,
  "isActive": true,
  "parent": "6a1fee09821e84b5f6c31593",
  "icon": "WalletOutlined",
  "createdBy": {
    "_id": "69d514eb23fb41760ae187e9",
    "email": "admin@gmail.com"
  },
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2026-06-03T09:08:02.279Z",
  "updatedAt": "2026-06-03T09:08:02.279Z",
  "__v": 0
},
{
  "_id": "6a1feeff821e84b5f6c3164f",
  "name": "Kỹ năng giao tiếp",
  "slug": "ky-nang-giao-tiep",
  "level": 1,
  "isActive": true,
  "parent": "6a1fee21821e84b5f6c3159c",
  "icon": "MessageOutlined",
  "createdBy": {
    "_id": "69d514eb23fb41760ae187e9",
    "email": "admin@gmail.com"
  },
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2026-06-03T09:08:15.903Z",
  "updatedAt": "2026-06-03T09:08:15.903Z",
  "__v": 0
},
{
  "_id": "6a1fef15821e84b5f6c3165b",
  "name": "Khả năng lãnh đạo",
  "slug": "kha-nang-lanh-djao",
  "level": 1,
  "isActive": true,
  "parent": "6a1fee21821e84b5f6c3159c",
  "icon": "TeamOutlined",
  "createdBy": {
    "_id": "69d514eb23fb41760ae187e9",
    "email": "admin@gmail.com"
  },
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2026-06-03T09:08:37.313Z",
  "updatedAt": "2026-06-03T09:08:37.313Z",
  "__v": 0
}]