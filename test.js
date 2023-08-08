async function logMovies() {
  const response = await fetch("https://script.googleusercontent.com/a/macros/skcet.ac.in/echo?user_content_key=8eM6PXyA9xYwExTzy_PWtY8Y1Nn2qev4Mt7MxTiRx7S-pvPOP0KFs3LbWaMU7kAjWi6PsMbwR_dG-YJG1Ub1o6Y_6rH8JkIoOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBgzsmLdOzbHC_8qITVF7fXh0lmODcuY_351REUnA30CkrkRS5xPZqjXYmgeuzT9DzecXcl2eGAuGq4QxcDkQFg6kKKc09gIESmZoWEp_G88-Fsb5HNGiRoffGF01rEMMU&lib=MA7RKOWnClMjkGpWSG2nZzG1LwkdVeYUP");
  const movies = await response.json()

  console.log(movies);
}

logMovies();