// src/utils/authUtils.js
export const login = async (username, password) => {

  try {
    const fetchRes = await fetch('/api/login', {
      method: 'POST',
      body: {
        username, password
      }
    });

    const data = await fetchRes.json();

    if (data.error) {
      // invalid credentials, do nothing
    }

    sessionStorage.setItem('token', data.token);
    console.log('logged in');

    sessionStorage.setItem('user', JSON.stringify({ username }))
  } catch (err) {
    console.error(err)
  }

  if (user) {
    sessionStorage.setItem("user", JSON.stringify({username, password}));
    return user;
  }
  return null;
};

export const register = async (username, password) => {
  try {
    await fetch('/api/register', {
      method: 'POST',
      body: {
        username, password
      }
    });
    console.log('registered')
  } catch (err) {
    console.error(err)
  }
};

export const logout = () => {
  sessionStorage.removeItem("user");
};
