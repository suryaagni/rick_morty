import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postApi } from '../../../utils/api';
//import { getGraphQLAPI } from '../modules/configuration/selectors';
const publicUrl = 'https://rickandmortyapi.com/graphql'
const initialState = {
  data: {},
  isError: false,
  error: {},
  list:{}
};

export const fetchSingleCharacter = createAsyncThunk(
  'rmCharacters/fetchSingleCharacter',
  //The payloadCreator function (ie createAsyncThunk) will be called with two arguments even if args in not used,
  //hence we need the unused variable here
  // eslint-disable-next-line no-unused-vars
  async (id, { getState, rejectWithValue }) => {
    const serviceBase = publicUrl;
    try {
      const response = await postApi(`${serviceBase}`, {
        query: `query {
              character(id: ${id}) {
                  name,
                  image,
                  gender,
                  status,
                  location{
                    created,
                  },
                  episode {
                    name,
                    episode,
                    created
                  }

              }
            }`,
      });
      console.log(response);
      return response.data;
    } catch (err) {
      const { message } = err;
      return rejectWithValue(message);
    }
  }
);

export const fetchCharacters = createAsyncThunk(
  'rmCharacters/fetchCharacters',
  //The payloadCreator function (ie createAsyncThunk) will be called with two arguments even if args in not used,
  //hence we need the unused variable here
  // eslint-disable-next-line no-unused-vars
  async (page, { getState, rejectWithValue }) => {
    const serviceBase = publicUrl;
    try {
      const response = await postApi(`${serviceBase}`, {
        query: `query {
              characters(page: ${page}) {
                info {
                  count,
                  pages
                }
                results {
                  name,
                  image,
                  id
                }
              }
            }`,
      });
      console.log(response);
      return response.data;
    } catch (err) {
      const { message } = err;
      return rejectWithValue(message);
    }
  }
);

const rmCharactersSlice = createSlice({
  name: 'rmCharacters',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCharacters.pending]: state => {
      state.isFetching = true;
      state.isError = false;
    },
    [fetchCharacters.fulfilled]: (state, action) => {
        console.log(action);
      state.data = action.payload;
      state.isFetching = false;
      state.isError = false;
    },
    [fetchCharacters.rejected]: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
      state.isError = true;
    },
    [fetchSingleCharacter.pending]: state => {
      state.isFetching = true;
      state.isError = false;
    },
    [fetchSingleCharacter.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.isFetching = false;
      state.isError = false;
    },
    [fetchSingleCharacter.rejected]: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
      state.isError = true;
    },
  },
});

// Selectors
export const rmCharactersSelector = state => state.rmCharactersSlice;


// The reducer
export default rmCharactersSlice.reducer;
