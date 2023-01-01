// Redux

const initState = {
  user: [
    { id: 1, name: `Trung` },
    { id: 2, name: `Vuong` },
  ],
};
console.log("check ", initState);
const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
