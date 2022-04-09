export const headers = ({ token }) => ({
  headers: {
    ...(token && { Authorization: `Bearer ${token}` }),
  },
})