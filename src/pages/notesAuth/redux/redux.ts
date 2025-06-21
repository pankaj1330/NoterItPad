import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {API_BASE_URI} from '../../../config'
import { NotesApi } from '../../Home/redux/redux';
import type { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import type { loginApiResponse, signupApiResponse } from './type';

export const resetAllApiCaches = (dispatch :ThunkDispatch<any, any, UnknownAction>) => {
  dispatch(AuthApi.util.resetApiState());
  dispatch(NotesApi.util.resetApiState());
};

export const AuthApi = createApi({
  reducerPath: 'AuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URI}/user` }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<loginApiResponse, {email: string, password : string}>({
      query: ({email, password}) => ({
        url : '/login',
        method : 'POST',
        body : {
            email,
            password
        }
      }),
      async onQueryStarted(_, { dispatch }) {
        try {
          resetAllApiCaches(dispatch);
        } catch (err) {
          console.error('Login failed', err);
        }
      },
    }),

    signupUser: builder.mutation<signupApiResponse, {name: string, email: string, password : string}>({
      query: ({name, email, password}) => ({
        url : '/signup',
        method : 'POST',
        body : {
            name,
            email,
            password
        }
      }),
    }),

  }),
})

export const {useLoginUserMutation, useSignupUserMutation} = AuthApi;