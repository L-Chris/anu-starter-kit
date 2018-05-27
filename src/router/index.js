const routes = {
  path: '/',
  getComponent (nextState, cb) {
    require.ensure([], require => cb(null, require('@/views/home').default), 'home')
  },
  childRoutes: [
    {
      path: '/login/user',
      getComponent (nextState, cb) {
        require.ensure([], require => cb(null, require('@/views/login/user').default), 'loginUser')
      },
    },
    {
      path: '/login/student',
      getComponent (nextState, cb) {
        require.ensure([], require => cb(null, require('@/views/login/student').default), 'loginStudent')
      },
    },
  ]
}

export default routes