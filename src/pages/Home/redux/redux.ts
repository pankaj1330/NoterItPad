import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URI } from '../../../config'

export const NotesApi = createApi({
    reducerPath: 'NotesApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URI}/notes` }),
    tagTypes: ['GetNotes'],
    endpoints: (builder) => ({
        createNote: builder.mutation<any, any>({
            query: ({ title, description }) => ({
                url: '/create',
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: {
                    title,
                    description
                }
            }),
            invalidatesTags:['GetNotes']
        }),

        updateNote: builder.mutation<any, any>({
            query: ({ title, description, id }) => ({
                url: `/update/${id}`,
                method: 'PATCH',
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: {
                    title,
                    description
                }
            }),
            invalidatesTags:['GetNotes']
        }),

        deleteNote: builder.mutation<any, any>({
            query: ({ id }) => ({
                url: `/delete/${id}`,
                method: 'PATCH',
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:['GetNotes']
        }),

        getNotes: builder.query<any, void>({
            query: () => ({
                url: '',
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            providesTags:['GetNotes'],
            transformResponse : (response) => response?.data
        }),

    }),
})

export const { useCreateNoteMutation, useUpdateNoteMutation, useGetNotesQuery, useDeleteNoteMutation } = NotesApi;