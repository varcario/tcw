import { createSlice } from '@reduxjs/toolkit'

export const groupSlice = createSlice({
  name: 'group',
  initialState: {
    time: new Date().toISOString(),
    value:{list:[]},
    groupNameIndex: { },
  },
  reducers: {
    set:(state, action) =>{
      console.log(action.payload);
      state.value = {list: action.payload};      
    },
    push: (state, action) => {     
      state.value.list.push(action.payload);
      
    },
    buildGroupNameIndex: (state) => {
      console.log(`group count ${state.value.list.length}`)
      state.value.list.forEach(item => {
          let index = "";
          console.log(`name array ${Array.from(item.group.groupName)}`)
          Array.from(item.group.groupName).forEach(c => {
              console.log(`creating index: ${index} for ${item.group.groupName}`)
              index += c;
              if (state.groupNameIndex[index] === undefined) {
                state.groupNameIndex[index] = [];
              }
              state.groupNameIndex[index].push(item.group);
              console.log(`created index: ${index} for ${item.group.groupName}`)
          })
      })
    }
  },
})

// Action creators are generated for each case reducer function
export const { set, push, buildGroupNameIndex } = groupSlice.actions

export default groupSlice.reducer