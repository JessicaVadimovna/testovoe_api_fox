import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async () => {
    const cards = [];
    for (let i = 0; i < 8; i++) {  // Получаем 8 карточек
      const response = await fetch('https://randomfox.ca/floof/');
      const data = await response.json();
      cards.push({
        id: i,
        image: data.image,
        info: `Fox ${i + 1}`
      });
    }
    return cards; // Возвращаем массив карточек
  }
);

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    filter: 'all'
  },
  reducers: {
    toggleLike: (state, action) => {
      const card = state.items.find(card => card.id === action.payload);
      if (card) {
        card.liked = !card.liked;
      }
    },
    removeCard: (state, action) => {
      state.items = state.items.filter(card => card.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.map(card => ({ ...card, liked: false }));
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { toggleLike, removeCard, setFilter } = cardsSlice.actions;

export default cardsSlice.reducer;