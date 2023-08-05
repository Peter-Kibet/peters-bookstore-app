import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Replace the base URL with the actual base URL of the Bookstore API
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

// Async thunk for fetching books from the API
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(`${baseURL}/apps/abc123/books`);
  return response.data;
});

// Async thunk for adding a book to the API
export const addBookToAPI = createAsyncThunk(
  'books/addBook',
  async (bookData) => {
    const response = await axios.post(`${baseURL}/apps/abc123/books`, bookData);
    return response.data;
  },
);

// Async thunk for removing a book from the API
export const removeBookFromAPI = createAsyncThunk(
  'books/removeBook',
  async (itemId) => {
    await axios.delete(`${baseURL}/apps/abc123/books/${itemId}`);
    return itemId;
  },
);

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const existingBook = state.books.findIndex(
        (book) => book.item_id === action.payload.item_id,
      );

      if (existingBook !== -1) {
        state.books[existingBook] = action.payload;
      } else {
        state.books.push(action.payload);
      }
    },
    removeBook: (state, action) => {
      const itemIdToDelete = action.payload;
      state.books = state.books.filter(
        (book) => book.item_id !== itemIdToDelete,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
      })
      .addCase(addBookToAPI.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(removeBookFromAPI.fulfilled, (state, action) => {
        state.books = state.books.filter(
          (book) => book.item_id !== action.payload,
        );
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
