import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URI } from '../../../config'
import type { commonApiResponse, NotesApiResponseType, NotesType } from './type';

export const NotesApi = createApi({
    reducerPath: 'NotesApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URI}/notes` }),
    tagTypes: ['GetNotes'],
    endpoints: (builder) => ({
        createNote: builder.mutation<commonApiResponse, {title: string, description:string}>({
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

        updateNote: builder.mutation<commonApiResponse, {title: string, description: string, id:string | number}>({
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

        deleteNote: builder.mutation<commonApiResponse, {id : string | number}>({
            query: ({ id }) => ({
                url: `/delete/${id}`,
                method: 'PATCH',
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags:['GetNotes']
        }),

        getNotes: builder.query<{notes : NotesType[]}, void>({
            query: () => ({
                url: '',
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }),
            providesTags:['GetNotes'],
            transformResponse : (response : NotesApiResponseType) => response?.data
        }),

    }),
})

export const { useCreateNoteMutation, useUpdateNoteMutation, useGetNotesQuery, useDeleteNoteMutation } = NotesApi;