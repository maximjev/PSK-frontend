// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urls: {
    auth: {
      token: '/api/oauth/token',
      me: '/api/me'
    },
    apartments: {
      list: '/api/apartment',
      create: '/api/apartment',
      update: (id: string) => `/api/apartment/${id}`,
      get: (id: string) => `/api/apartment/${id}`,
      delete: (id: string) => `/api/apartment/${id}`,
      all: '/api/apartment/all',
      availablePlaces: (apartmentId: string) => `/api/apartment/${apartmentId}/reservation/places`,
      reservationList: (apartmentId: string) => `/api/apartment/${apartmentId}/reservation`
    },
    trip: {
      list: '/api/trip',
      byId: (tripId: string) => `api/trip/${tripId}`,
      confirm: (tripId: string) => `/api/trip/${tripId}/confirm`,
      decline: (tripId: string) => `/api/trip/${tripId}/decline`,
      match: (tripId: string) => `/api/trip/${tripId}/match`,
      merge: `/api/trip/merge`,
      userView: (id: string) => `/api/trip/${id}/user-view`,
      userList: '/api/trip/user'
    },
    users: {
      list: '/api/user',
      activeList: '/api/user/active',
      allList: '/api/user/all',
      create: '/api/user',
      resetPassword: '/api/user/resetPassword',
      savePassword: '/api/user/savePassword',
      get: (userId: string) => `/api/user/${userId}`,
      update: (userId: string) => `/api/user/${userId}`,
      validateToken: (token: string) => `/api/user/token/${token}`
    },
    events: {
      create: '/api/event',
      list: '/api/event',
      ofUser: (id: string) => `/api/event/user/${id}`,
      get: (id: string) => `/api/event/${id}`,
      delete: (id: string) => `/api/event/${id}`,
      confirm: (id: string) => `/api/event/${id}/confirm`,
      decline: (id: string) => `/api/event/${id}/decline`,
    }
  },
  constants: {
    calendar: {
      color: {
        userEvent: {
          primary: '#FFB6C1',
          secondary: '#FFB6C1'
        },
        tripEvent: {
          primary: '#90EE90',
          secondary: '#90EE90'
        }
      }
    },
    pageSize: 5
  },
  homePageUrls: {
    admin: 'users/details',
    organiser: 'trips',
    user: 'events'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
