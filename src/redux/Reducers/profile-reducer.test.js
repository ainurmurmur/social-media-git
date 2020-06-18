
import { addPostActionCreator } from './profile-reducer';
import profileReducer from './profile-reducer'
import React  from 'react';

it('new post should be added in array', () => {

    let action = addPostActionCreator('Hello I have been updated');
    let state = {
    
        postsData:[
                {id:'1', post:"Hi, how are you?", likesCouter:'0'},
                {id:'2', post:"Fine, how is your work?", likesCouter:'1'}
        ]
    } 
    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(3);
})
