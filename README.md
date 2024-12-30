The Project Title

🎵 Spotify Mini Clone

🚀 Startup Guide
<<<<<<< HEAD

=======
>>>>>>> 0ae8a3c59cc568748f160f78410c9139c11eae93
- Clone Repo
- Npm run dev
- Register And Login to use feature
- If You a admin ( Login with account Admin: admin@gmail.com | password: Admin@123)
- Enjoy
<<<<<<< HEAD

=======
  
>>>>>>> 0ae8a3c59cc568748f160f78410c9139c11eae93
📜 Project Description

- Solved the main problem of listening to music, searching for music and looking up artist information
- The hardest thing for me to complete was mostly the FrontEnd, and the functions that took more time like invoices, specific artist information and many more
- In the future I may develop it and integrate AI into it

✨ Features
Spotify Clone is a place that allows you to listen to music online for free without having to spend a lot of effort searching and searching online. You can also find the song you like with just 1 click and the artist's information will also appear for you.
Integrated in that is the purchase of premium to enhance the user experience
Listen to exciting music with the feature of returning to the first song every time it ends without having to click again

👥 Authentication
- As a user, I can sign in with my email and password.
- As a user, I can register for a new account with email and password.
- As a user, I can stay signed in after refreshing the page.

  Admin
<<<<<<< HEAD

=======
>>>>>>> 0ae8a3c59cc568748f160f78410c9139c11eae93
- As a admin, I can update profile anyone, email and username
- As a admin, I can delete all any users, aritst, genres, songs or albums
- As a admin, I can find name of user, artist, genre, song or album to update

Users

- As a user, I can see a list of other song so that i can see anh click one of the song to hear
- As a user, I can edit my own playlist like picture, name
- As a user, I can see my current profile info.
- As a user, I can see a specific artist with them info.
- As a user, I can update my profile with password, email and username

💳 Subscription Types
- As a user, i can buy i premium for better experience
- i can use free with many feature

  🔗 API Endpoints
# API Documentation

## Auth API
- **POST /authentications/register**
  - **Description**: Register a new user.
  - **Access**: Public.

- **POST /authentications/login**
  - **Description**: Login to the application.
  - **Access**: Public.

- **POST /authentications/logout**
  - **Description**: Logout the current user.
  - **Access**: Login required.

---

## User API
- **GET /users/:id/profile**
  - **Description**: Get the profile information of a user.
  - **Access**: Login required.

- **PUT /users/:id/profile**
  - **Description**: Update the profile information of a user.
  - **Access**: Login required.

- **PUT /users/:id/profile/password**
  - **Description**: Change the password of a user.
  - **Access**: Login required.

- **PUT /users/:id/buy**
  - **Description**: Purchase a subscription.
  - **Access**: Login required.

- **PUT /users/:id/cancel**
  - **Description**: Cancel a subscription.
  - **Access**: Login required.

- **GET /users/playlists**
  - **Description**: Retrieve playlists of the current user.
  - **Access**: Login required.

---
## Invoice API

- **POST /invoices/create**
  - **Description**: Create a new invoice.
  - **Access**: Login required.

- **POST /invoices/complete**
  - **Description**: Mark an invoice as completed.
  - **Access**: Login required.

- **POST /invoices/cancel**
  - **Description**: Cancel an invoice.
  - **Access**: Login required.

- **GET /invoices/pending**
  - **Description**: Get all pending invoices.
  - **Access**: Login required.

- **GET /invoices/users/:id**
  - **Description**: Retrieve invoices for a specific user.
  - **Access**: Login required.
---

## Song API
- **GET /songs**
  - **Description**: Retrieve all songs.
  - **Access**: Public.

- **GET /songs/search?title=...**
  - **Description**: Search for songs by title.
  - **Access**: Public.

- **GET /songs/:id**
  - **Description**: Get details of a specific song.
  - **Access**: Login required.

---

## Playlist API
- **POST /playlists/**
  - **Description**: Create a new playlist.
  - **Access**: Login required.

- **POST /playlists/:id/add**
  - **Description**: Add a song to a playlist.
  - **Access**: Login required.

- **GET /playlists/**
  - **Description**: Retrieve all playlists.
  - **Access**: Login required.

- **GET /playlists/user/:userID**
  - **Description**: Retrieve playlists created by a specific user.
  - **Access**: Login required.

- **GET /playlists/:id**
  - **Description**: Get details of a specific playlist.
  - **Access**: Login required.

- **DELETE /playlists/remove/:id**
  - **Description**: Remove a song from a playlist.
  - **Access**: Login required.

- **DELETE /playlists/:id**
  - **Description**: Delete a specific playlist.
  - **Access**: Login required.

---

## Artist API
- **GET /artists/**
  - **Description**: Retrieve all artists.
  - **Access**: Login required.

- **GET /artists/:id**
  - **Description**: Get details of a specific artist.
  - **Access**: Login required.

---

## Albums API
- **GET /albums/:id**
  - **Description**: Get details of a specific album.
  - **Access**: Login required.

- **GET /albums/artist/:artistID**
  - **Description**: Retrieve albums of a specific artist.
  - **Access**: Login required.

- **GET /albums/**
  - **Description**: Retrieve all albums.
  - **Access**: Public.

---

## Admin API
- **GET /admin/users**
  - **Description**: Retrieve a list of all users (Admin only).
  - **Access**: Private.

- **GET /admin/users/find**
  - **Description**: Search for a user (Admin only).
  - **Access**: Private.

- **POST /admin/artists**
  - **Description**: Create a new artist (Admin only).
  - **Access**: Private.

- **PUT /admin/artists/:id**
  - **Description**: Update an artist's information (Admin only).
  - **Access**: Private.

- **DELETE /admin/artists/:id**
  - **Description**: Delete an artist (Admin only).
  - **Access**: Private.

- **POST /admin/albums**
  - **Description**: Create a new album (Admin only).
  - **Access**: Login required.

- **PUT /admin/albums/:id**
  - **Description**: Update album details (Admin only).
  - **Access**: Login required.

- **DELETE /admin/albums/:id**
  - **Description**: Delete an album (Admin only).
  - **Access**: Login required.

- **POST /admin/genres**
  - **Description**: Create a new genre (Admin only).
  - **Access**: Private.

- **PUT /admin/genres/:id**
  - **Description**: Update genre details (Admin only).
  - **Access**: Private.

- **DELETE /admin/genres/:id**
  - **Description**: Delete a genre (Admin only).
  - **Access**: Private.

- **POST /admin/songs**
  - **Description**: Create a new song (Admin only).
  - **Access**: Private.

- **PUT /admin/songs/:id**
  - **Description**: Update song details (Admin only).
  - **Access**: Private.

- **DELETE /admin/songs/delete/:id**
  - **Description**: Delete a song (Admin only).
  - **Access**: Private.

- **PUT /admin/assign-role**
  - **Description**: Assign roles to a user (Admin only).
  - **Access**: Private.



📚 Learnings
Frontend:
Xử lý giao diện người dùng với React và Material-UI.
Backend:
Xây dựng RESTful APIs với Node.js và Express.
Quản lý cơ sở dữ liệu với MongoDB.
Authentication:
Sử dụng JWT để bảo mật phiên đăng nhập.
Storage:
Tích hợp Cloudinary để quản lý hình ảnh và media.
Future Enhancements
Tích hợp AI để gợi ý bài hát theo sở thích cá nhân.
Cải thiện giao diện người dùng.
Tích hợp thanh toán trực tuyến.

![image](https://github.com/user-attachments/assets/31ce6fc1-cc27-463e-9a1a-bab807c05b2d)

