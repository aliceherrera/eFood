import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantProfile } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<RestaurantProfile[], void>({
      query: () => 'restaurantes'
    }),
    getPratos: builder.query<RestaurantProfile, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantesQuery, useGetPratosQuery } = api

export default api
