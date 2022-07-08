import rmCharactersSlice, {
  fetchCharacters,
  fetchSingleCharacter,
} from "../modules/slices/rmCharacters.slice";

const initialState = {
  data: {},
  isError: false,
  error: {},
  list: {},
};

describe("advertisersSlice", () => {
  describe("reducers", () => {
    it("returns initial state", () => {
      const nextState = rmCharactersSlice(undefined, {});
      expect(nextState).toStrictEqual(initialState);
    });

    it("sets fetching true when fetchCharacters is pending", () => {
      const action = { type: fetchCharacters.pending.type };
      const state = rmCharactersSlice(initialState, action);
      expect(state.isFetching).toBe(true);
    });
    it("sets data when fetchCharacters is fullfilled", () => {
      const action = {
        type: fetchCharacters.fulfilled.type,
        payload: { data: true },
      };
      const state = rmCharactersSlice(initialState, action);
      expect(state.data.data).toBe(true);
    });
    it("sets error when fetchCharacters is rejected", () => {
      const action = {
        type: fetchCharacters.rejected.type,
        payload: { status: "404" },
      };
      const state = rmCharactersSlice(initialState, action);
      expect(state.error.status).toBe("404");
    });

    it("sets data when fetchSingleCharacter is fullfilled", () => {
      const action = {
        type: fetchSingleCharacter.fulfilled.type,
        payload: { data: true },
      };
      const state = rmCharactersSlice(initialState, action);
      expect(state.list.data).toBe(true);
    });

    it("sets error when fetchSingleCharacter is rejected", () => {
        const action = {
          type: fetchSingleCharacter.rejected.type,
          payload: { status: "404" },
        };
        const state = rmCharactersSlice(initialState, action);
        expect(state.error.status).toBe("404");
      });
  });
});
