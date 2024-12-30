### 🎵 Spotify Mini Clone

---

## 🚀 Startup Guide

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the server using `npm run dev`.
4. Register and log in to use features.
5. For admin access, use the following credentials:
   - **Email**: `admin@gmail.com`
   - **Password**: `Admin@123`.
6. Enjoy!

---
  
## 📜 Project Description

Spotify Mini Clone solves the problem of finding and listening to music easily. Users can search for songs, view artist details, and manage playlists seamlessly. The platform aims to deliver a premium listening experience with additional features like subscription plans.

---


## ✨ Features

- **Stream Music**: Listen to songs online for free.
- **Search Songs**: Quickly find songs by title.
- **Artist Information**: Explore detailed profiles of artists.
- **Playlist Management**: Create, edit, and manage playlists.
- **Premium Experience**: Unlock additional features with a subscription.
- **Replay Feature**: Automatically restart a song when it ends.

---


## 👥 Authentication

- **User**:
  - Sign in with email and password.
  - Register for a new account.
  - Stay signed in after refreshing the page.
- **Admin**:
  - Update user profiles, email, and username.
  - Delete users, artists, genres, songs, and albums.
  - Search and update specific records by name.

---
## 💳 Subscription Types

- **Free Tier**: Access most features with some limitations.
- **Premium Tier**: Enhance your experience with exclusive features.

---
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

