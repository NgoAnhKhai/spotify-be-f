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
<<<<<<< HEAD
  Auth API
  /\*
  _@route POST /authentications/register
  _@description register
  _@access public
  _/

/\*
_@route POST /authentications/login
_@description Login
_@access public
_/

/\*
_@route POST /authentications/logout
_@description Logout User
_@access login Required
_/

User API
/\*
_@route GET /users/:id/profile
_@description Get The Profile Of user
_@access Login Required
_/

/\*
_@route PUT /users/:id/profile
_@description update profile user
_@access Login Required
_/

/\*
_@route PUT /users/:id/profile/password
_@description Change Password
_@access Login Required
_/

/\*
_@route PUT /users/:id/buy
_@description Buy Subscription
_@access Login Required
_/

/\*
_@route PUT /users/:id/cancel
_@description cancel Subscription
_@access Login Required
_/

/\*
_@route GET /users/playlists
_@description Get The playlist of user
_@access Login Required
_/

song API
/\*
_@route GET /songs
_@description Get all song
_@access public
_/

/\*
_@route GET /songs/search?title=...
_@description search song by name
_@access public
_/

/\*
_@route GET /songs/:id
_@description get song by id song
_@access login required
_/

Playlist API

- /\*
  _@route POST /playlists/
  _@description create playlist of user
  _@access login required
  _/
=======
   Auth API
/*
 *@route POST /authentications/register
 *@description register
 *@access public
 */


/*
 *@route POST /authentications/login
 *@description Login
 *@access public
 */


/*
 *@route POST /authentications/logout
 *@description Logout User
 *@access login Required
 */


 User API
/*
 *@route GET /users/:id/profile
 *@description Get The Profile Of user
 *@access Login Required
 */


/*
 *@route PUT /users/:id/profile
 *@description update profile user
 *@access Login Required
 */

/*
 *@route PUT /users/:id/profile/password
 *@description Change Password
 *@access Login Required
 */


/*
 *@route PUT /users/:id/buy
 *@description Buy Subscription
 *@access Login Required
 */

/*
 *@route PUT /users/:id/cancel
 *@description cancel Subscription
 *@access Login Required
 */

/*
 *@route GET /users/playlists
 *@description Get The playlist of user
 *@access Login Required
 */

  song API
/*
 *@route GET /songs
 *@description Get all song
 *@access public
 */

/*
 *@route GET /songs/search?title=...
 *@description search song by name
 *@access public
 */


/*
 *@route GET /songs/:id
 *@description get song by id song
 *@access login required
 */
>>>>>>> 0ae8a3c59cc568748f160f78410c9139c11eae93

/\*
_@route POST /playlists/:id/add
_@description add song to playlist
_@access login required
_/

<<<<<<< HEAD
/\*
_@route GET /playlists/
_@description Get all playlist
_@access login required
_/

/\*
_@route GET /playlists/user/:userID
_@description get playlist by userID
_@access login required
_/

/\*
_@route GET /playlists/:id
_@description Get playlist by playlist id
_@access login required
_/

/\*
_@route delete /playlists/remove/:id
_@description remove song from playlist
_@access login required
_/

/\*
_@route DELETE /playlists/:id
_@description delete playlist of user
_@access login required
_/

Artist API
/\*
_@route GET /artists/
_@description get all artist
_@access login required
_/

/\*
_@route GET /artists/:id
_@description get Artist By ID
_@access login required
_/

Albums API

/\*
_@route GET /albums/:id
_@description get album by id album
_@access login required
_/

/\*
_@route GET /albums/artist/:artistID
_@description get Album by artistID
_@access login required
_/

/\*
_@route GET /albums/
_@description get all Album
_@access public
_/

Admin API

/\*
_@route GET admin/users
_@description Get List All User(For Admin)
_@access private
_/

/\*
_@route GET admin/users/find
_@description Find User(For Admin)
_@access private
_/

/\*
_@route GET admin/users
_@description Get List All User(For Admin)
_@access private
_/

/\*
_@route POST admin/artists
_@description create artist
_@access private
_/

/\*
_@route PUT admin/artists/:id
_@description update Information Of Artist
_@access private
_/

/\*
_@route GET admin/artists/find
_@description find Information Of Artist by name
_@access private
_/

/\*
_@route DELETE admin/artists/:id
_@description DELETE artist
_@access private
_/

/\*
_@route POST /admin/albums
_@description create Album
_@access login required
_/

/\*
_@route PUT admin/albums/:id
_@description update Album by id
_@access login required
_/

/\*
_@route GET admin/albums/find
_@description find album by name
_@access login required
_/

/\*
_@route DELETE album/albums/:id
_@description delete album by id album
_@access login required
_/

/\*
_@route POST admin/genres
_@description create genre
_@access private
_/

/\*
_@route PUT admin/genres/:id
_@description update genre by id
_@access private
_/

/\*
_@route GET admin/genres/find
_@description find genre by name
_@access private
_/

/\*
_@route DELETE admin/genres/:id
_@description delete genre
_@access private
_/

/\*
_@route POST admin/songs
_@description create song
_@access private
_/

/\*
_@route PUT admin/songs/:id
_@description update Song
_@access private
_/

/\*
_@route GET admin/songs/find
_@description find Song by title
_@access private
_/

/\*
_@route DELETE admin/songs/delete/:id
_@description delete song
_@access private
_/

/\*
_@route PUT admin/assign-role
_@description Assign role for user(For Admin)
_@access private
_/

/\*
_@route PUT admin/assign-role
_@description Assign role for user(For Admin)
_@access private
_/
=======
  Playlist API
- 
/*
 *@route POST /playlists/
 *@description create playlist of user
 *@access login required
 */

/*
 *@route POST /playlists/:id/add
 *@description add song to playlist
 *@access login required
 */


/*
 *@route GET /playlists/
 *@description Get all playlist
 *@access login required
 */


/*
 *@route GET /playlists/user/:userID
 *@description get playlist by userID
 *@access login required
 */

/*
 *@route GET /playlists/:id
 *@description Get playlist by playlist id
 *@access login required
 */


/*
 *@route delete /playlists/remove/:id
 *@description remove song from playlist
 *@access login required
 */

/*
 *@route DELETE /playlists/:id
 *@description delete playlist of user
 *@access login required
 */
 
  Artist API
/*
 *@route GET /artists/
 *@description get all artist
 *@access login required
 */


/*
 *@route GET /artists/:id
 *@description get Artist By ID
 *@access login required
 */

  Albums API

/*
 *@route GET /albums/:id
 *@description get album by id album
 *@access login required
 */

/*
 *@route GET /albums/artist/:artistID
 *@description get Album by artistID
 *@access login required
 */


/*
 *@route GET /albums/
 *@description get all Album
 *@access public
 */

   Admin API

/*
 *@route GET admin/users
 *@description Get List All User(For Admin)
 *@access private
 */

/*
 *@route GET admin/users/find
 *@description Find User(For Admin)
 *@access private
 */


/*
 *@route GET admin/users
 *@description Get List All User(For Admin)
 *@access private
 */

/*
 *@route POST admin/artists
 *@description create artist
 *@access private
 */


/*
 *@route PUT admin/artists/:id
 *@description update Information Of Artist
 *@access private
 */


/*
 *@route GET admin/artists/find
 *@description find Information Of Artist by name
 *@access private
 */

/*
 *@route DELETE admin/artists/:id
 *@description DELETE artist
 *@access private
 */


/*
 *@route POST /admin/albums
 *@description create Album
 *@access login required
 */

/*
 *@route PUT admin/albums/:id
 *@description update Album by id
 *@access login required
 */

/*
 *@route GET admin/albums/find
 *@description find album by name
 *@access login required
 */


/*
 *@route DELETE album/albums/:id
 *@description delete album by id album
 *@access login required
 */


/*
 *@route POST admin/genres
 *@description create genre
 *@access private
 */

/*
 *@route PUT admin/genres/:id
 *@description update genre by id
 *@access private
 */


/*
 *@route GET admin/genres/find
 *@description find genre by name
 *@access private
 */


/*
 *@route DELETE admin/genres/:id
 *@description delete genre
 *@access private
 */


/*
 *@route POST admin/songs
 *@description create song
 *@access private
 */

/*
 *@route PUT admin/songs/:id
 *@description update Song
 *@access private
 */

/*
 *@route GET admin/songs/find
 *@description find Song by title
 *@access private
 */


/*
 *@route DELETE admin/songs/delete/:id
 *@description delete song
 *@access private
 */

/*
 *@route PUT admin/assign-role
 *@description Assign role for user(For Admin)
 *@access private
 */


/*
 *@route PUT admin/assign-role
 *@description Assign role for user(For Admin)
 *@access private
 */

>>>>>>> 0ae8a3c59cc568748f160f78410c9139c11eae93
📚 Learnings
>>>>>>> Frontend:
Xử lý giao diện người dùng với React và Material-UI.
Backend:
Xây dựng RESTful APIs với Node.js và Express.
Quản lý cơ sở dữ liệu với MongoDB.
Authentication:
Sử dụng JWT để bảo mật phiên đăng nhập.
Storage:
Tích hợp Cloudinary để quản lý hình ảnh và media.
>>>>>>>  Future Enhancements
Tích hợp AI để gợi ý bài hát theo sở thích cá nhân.
Cải thiện giao diện người dùng.
Tích hợp thanh toán trực tuyến.

![image](https://github.com/user-attachments/assets/f79609c0-518f-479d-b90b-6edffcbcf86d)
