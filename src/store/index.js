import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: 1,
          image: "/assets/icon/icon.png",
          title: "Title nr.1",
          description: "This is a short description nr.1"
        },
        {
          id: 2,
          image: "/assets/icon/icon.png",
          title: "Title nr.2",
          description: "This is a short description nr.2"
        },
        {
          id: 3,
          image: "/assets/icon/icon.png",
          title: "Title nr.3",
          description: "This is a short description nr.3"
        },
      ]
    };
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find(memory => memory.id === memoryId);
      };
    }
  }
});

export default store;