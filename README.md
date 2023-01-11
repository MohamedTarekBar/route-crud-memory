## REQUIREMENTS

using Express*
* Create two arrays (user array, post array)

User end points
1- GetAllUsers ✅ 
2- AddUser ✅ 
3- Get all users sorted alphabetically by name  ✅ 
4- delete user ✅ 
5- update user ✅ 
6- search  user by id ✅ 

Post end points
1- GetAllPosts ✅ 
2- AddPost ✅ 
3- Get all Posts reversed (but don't change the order of the main array) ✅ 
4- delete post ✅ 
5- update post ✅ 
6- search post by id ✅ 

(posts) endpoints (body & responses)

- create post {POST - 'api/posts/'}{**body required**}
```json body
    {
    "title": "google",
    "description": "social page app"
    }
```
```json responses
    {
        "status": 200,
        "message": "Post created successfully",
        "data": {
            "id": 1,
            "title": "google",
            "description": "social page app"
        }
    }
```
- index posts {GET - 'api/posts/'} {**No body required**}
```json response
    {
        "status": 200,
        "message": "indexed all Posts successfully",
        "data": [
            {
                "id": 1,
                "title": "google",
                "description": "social page app"
            },
            {
                "id": 2,
                "title": "google",
                "description": "social page app"
            }
        ]
    }
```
- index posts reversed {GET - 'api/posts/reversed'} {**No body required**}
```json response
    {
        "status": 200,
        "message": "indexed all Posts reversed successfully",
        "data": [
            {
                "id": 2,
                "title": "google",
                "description": "social page app"
            },
            {
                "id": 1,
                "title": "google",
                "description": "social page app"
            }
        ]
    }
```
- delete post {DELETE 'api/posts/**id**'} {**No body required**}
```json response
    {
        "status": 200,
        "message": "deleted Post successfully",
        "data": [
            {
                "id": 1,
                "title": "google",
                "description": "social page app"
            }
        ]
    }
```
- update post {PUT 'api/posts/**id**'} {**body required**}
```json body 
    {
    "title": "google",
    "description": "social page app"
    }
```
```json response
    {
        "status": 200,
        "message": "updateed Post successfully",
        "data": {
            "id": 2,
            "title": "google",
            "description": "social page app"
        }
    }
```
- show post {GET 'api/posts/**id**'} 
```json response
    {
        "status": 200,
        "message": "retrive Post successfully",
        "data": {
            "id": 2,
            "title": "google",
            "description": "social page app"
        }
    }
```

- create user {POST - 'api/users/'}{**body required**}
```json body
    {
        "email": "Mohamed@yahoo.com",
        "firstName": "Mohamed",
        "lastName": "Tarek",
        "password": "Mohamed@123"
    }
```
```json responses
    {
        "status": 200,
        "message": "user created successfully",
        "data": {
            "id": 1,
            "firstName": "cbzaaa",
            "lastName": "Tarek",
            "email": "test2s121@yahoo.com",
            "password": "Mohamed@123"
        }
    }
```
- index posts {GET - 'api/users/'} {**No body required**}
```json response
    {
        "status": 200,
        "message": "indexed all users successfully",
        "data": [
            {
                "id": 1,
                "firstName": "Mohamed",
                "lastName": "Tarek",
                "email": "mohamed@yahoo.com",
                "password": "Mohamed@123"
            }
        ]
    }
```
- index users reversed {GET - 'api/users/sorted'} {**No body required**}
```json response
    {
        "status": 200,
        "message": "indexed all users sorted alph.. successfully",
        "data": [
            {
                "id": 1,
                "firstName": "Mohamed",
                "lastName": "Tarek",
                "email": "mohamed@yahoo.com",
                "password": "Mohamed@123"
            }
        ]
    }
```
- delete user {DELETE 'api/users/**id**'} {**No body required**}
```json response
    {
        "status": 200,
        "message": "deleted user successfully",
        "data": [
            {
                "id": 1,
                "firstName": "Mohamed",
                "lastName": "Tarek",
                "email": "mohamed@yahoo.com",
                "password": "Mohamed@123"
            }
        ]
    }
```
- update post {PUT 'api/users/**id**'} {**body required**}
```json body 
    {
        "email": "Mohamed@yahoo.com",
        "firstName": "Mohamed",
        "lastName": "Tarek",
        "password": "Mohamed@123"
    }
```
```json response
    {
        "status": 200,
        "message": "updateed user successfully",
        "data": {
            "id": 2,
            "firstName": "Mohamed",
            "lastName": "Tarek",
            "email": "mohamed@yahoo.com",
            "password": "Mohamed"
        }
    }
```
- show post {GET 'api/posts/**id**'} 
```json response
    {
        "status": 200,
        "message": "retrive user successfully",
        "data": {
            "id": 2,
            "firstName": "Mohamed",
            "lastName": "Tarek",
            "email": "mohamed@yahoo.com",
            "password": "Mohamed"
        }
    }
```
